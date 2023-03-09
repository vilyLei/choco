import IRendererScene from "../engine/vox/scene/IRendererScene";
import { MouseEvent, EventBase, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import VoxModuleShell from "../common/VoxModuleShell";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
export class RTT {
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
        rparam.setAttriAntialias(true);
        rparam.setCamPosition(1000.0, 1000.0, 1000.0);
        rparam.setCamProject(45, 20.0, 9000.0);
        this.m_rscene = VoxRScene.createRendererScene(rparam).setAutoRunning(true);
		
	}
	
    private getTexByUrl(url: string): IRenderTexture {

        let tex = this.m_rscene.textureBlock.createImageTex2D();
        let img = new Image();
        img.onload = (): void => { tex.setDataFromImage(img); };
        img.src = url;
        return tex;
    }
	private init3DScene(): void {

		const rsc = this.m_rscene;
		
		// add some entities into 3d scene

		let axis = VoxEntity.createAxis3DEntity(300);
		rsc.addEntity(axis);

		let boxMaterial = VoxMaterial.createDefaultMaterial();
        boxMaterial.setTextureList([this.getTexByUrl("static/assets/box.jpg")]);
        let cube = VoxEntity.createCube(200, boxMaterial);
        rsc.addEntity(cube);

		let planeMaterial = VoxMaterial.createDefaultMaterial();
        planeMaterial.setTextureList([this.getTexByUrl("static/assets/default.jpg")]);
        let plane = VoxEntity.createXOZPlane(-350, -350, 700, 700, planeMaterial);
        rsc.addEntity(plane);


		// 构建 RTT 渲染过程

		let fboIns = this.m_rscene.createFBOInstance();
        fboIns.setClearRGBAColor4f(0.3, 0.0, 0.0, 1.0);      // set rtt background clear rgb(r=0.3,g=0.0,b=0.0) color
        fboIns.createFBOAt(0, 512, 512, true, false);
        fboIns.setRenderToRTTTextureAt(0);                   // apply the first rtt texture, the fbo framebuffer color attachment 0
        fboIns.setRProcessIDList([0], false);
		rsc.prependRenderNode( fboIns );

		// 应用RTT纹理到 cube
		let rttCubeMaterial = VoxMaterial.createDefaultMaterial();
        rttCubeMaterial.setTextureList([fboIns.getRTTAt(0)]);
		let rttCube = VoxEntity.createCube(200, rttCubeMaterial);
        rsc.addEntity(rttCube, 1);
	}
}

export default RTT;

// for running instance
if (!(document as any).demoState) {
	let ins = new RTT();
	ins.initialize();
	document.title = "tutorial:RTT";
}
