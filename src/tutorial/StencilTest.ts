import IRendererScene from "../engine/vox/scene/IRendererScene";
import { GLStencilOp, GLStencilFunc, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";

import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import ITransformEntity from "../engine/vox/entity/ITransformEntity";
import IDefault3DMaterial from "../engine/vox/material/mcase/IDefault3DMaterial";
import IRenderer from "../engine/vox/scene/IRenderer";

export class StencilTest {
	private m_rscene: IRendererScene = null;
	constructor() {}

	initialize(): void {
		new VoxModuleShell().initialize(
			(): void => {
				this.initMouseInteract();
			},
			(): void => {
				this.initRenderer();
			},
			(): void => {
				this.init3DScene();
			}
		);
	}
	private initMouseInteract(): void {
		const mi = VoxUIInteraction.createMouseInteraction();
		mi.initialize(this.m_rscene).setAutoRunning(true);
	}
	private initRenderer(): void {
		let RD = VoxRScene.RendererDevice;
		/**
		 * 开启打印输出shader构建的相关信息
		 */
		RD.SHADERCODE_TRACE_ENABLED = true;
		RD.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;

		let rparam = VoxRScene.createRendererSceneParam();
		rparam.setCamPosition(1000.0, 1000.0, 1000.0);
		rparam.setCamProject(45, 20.0, 9000.0);
		rparam.setAttriAntialias(true);
		rparam.setAttriStencil(true);
		this.m_rscene = VoxRScene.createRendererScene(rparam);
	}

	private getTexByUrl(url: string): IRenderTexture {
		let tex = this.m_rscene.textureBlock.createImageTex2D();
		let img = new Image();
		img.onload = (): void => {
			tex.setDataFromImage(img);
		};
		img.src = url;
		return tex;
	}
	private m_entity: ITransformEntity = null;
	private m_material: IDefault3DMaterial = null;
	private init3DScene(): void {
		const rsc = this.m_rscene;

		let boxMaterial = (this.m_material = VoxMaterial.createDefaultMaterial());
		// boxMaterial.setRGB3f(0.7, 1.0, 1.0);
		// boxMaterial.normalEnabled = true;
		boxMaterial.setTextureList([this.getTexByUrl("static/assets/box.jpg")]);

		let cube = VoxEntity.createCube(200, boxMaterial);
		rsc.addEntity(cube);
		this.m_entity = cube;
	}
	run(): void {
		if (this.m_entity != null) {
			const stencil = this.m_rscene.getRenderProxy().stencil;
			let renderer = (this.m_rscene as any) as IRenderer;
			// this.m_rscene.run();
			this.m_rscene.runBegin();

			stencil.setStencilMask(0x0);
			//this.m_entity.setVisible(false);

			this.m_rscene.update();
            
			stencil.setStencilOp(GLStencilOp.KEEP, GLStencilOp.KEEP, GLStencilOp.REPLACE);
			stencil.setStencilFunc(GLStencilFunc.ALWAYS, 1, 0xff);
			stencil.setStencilMask(0xff);

			// this.m_entity.setVisible(true);
			renderer.drawEntity(this.m_entity);

			stencil.setStencilFunc(GLStencilFunc.NOTEQUAL, 1, 0xff);
			stencil.setStencilMask(0x0);

			let scale = 1.1;
			this.m_material.setRGB3f(20.0, 0.0, 0.0);
			this.m_entity.setScaleXYZ(scale, scale, scale);
			this.m_entity.update();
			renderer.drawEntity(this.m_entity);

			scale = 1.0;
			this.m_entity.setScaleXYZ(scale, scale, scale);
			this.m_entity.update();
			this.m_material.setRGB3f(1.0, 1.0, 1.0);
			// stencil.setStencilMask(0xFF);
			stencil.setStencilMask(0xff);

			this.m_rscene.runEnd();
		}
	}
}

export default StencilTest;

// for running instance
if (!(document as any).demoState) {
	let ins = new StencilTest();
	ins.initialize();
}
