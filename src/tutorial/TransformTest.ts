import IRendererScene from "../engine/vox/scene/IRendererScene";
import { EventBase, MouseEvent, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMath } from "../engine/cospace/math/VoxMath";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";
import IMouseEvent from "../engine/vox/event/IMouseEvent";

import { PBREnvLightingMaterialWrapper } from "./material/PBREnvLightingMaterialWrapper";
import ITransformEntity from "../engine/vox/entity/ITransformEntity";
import IVector3D from "../engine/vox/math/IVector3D";
import IEventBase from "../engine/vox/event/IEventBase";
import { BinaryTextureLoader } from "../engine/cospace/modules/loaders/BinaryTextureLoader";
import IColor4 from "../engine/vox/material/IColor4";

class PBRLighting {
	private static s_envMapLoader: BinaryTextureLoader = null;
	private m_rscene: IRendererScene = null;
	private m_envMap: IRenderTexture;
	sharedLightColor = true;
	/**
	 * 记录点光源灯光位置
	 */
	private m_lightPosList: IVector3D[];
	/**
	 * 记录点光源灯光颜色
	 */
	private m_lightColorList: IColor4[];
	initialize(rscene: IRendererScene): void {
		this.m_rscene = rscene;
		this.initRenderingData();
	}
	private initRenderingData(): void {
		let envMapUrl = "static/assets/bytes/spe.mdf";

		let loader = PBRLighting.s_envMapLoader;
		loader = PBRLighting.s_envMapLoader = loader == null ? new BinaryTextureLoader(this.m_rscene) : loader;
		loader.loadTextureWithUrl(envMapUrl);
		this.m_envMap = loader.texture;

		const vec3 = VoxMath.createVec3();
		let dis = 700.0;
		let disY = 400.0;
		this.m_lightPosList = [
			vec3.clone().setXYZ(-dis, disY, -dis),
			vec3.clone().setXYZ(dis, disY, dis),
			vec3.clone().setXYZ(dis, disY, -dis),
			vec3.clone().setXYZ(-dis, disY, dis)
		];

		if (this.sharedLightColor) {
			this.initLightColor();
		}
	}
	private initLightColor(): void {
		const color = VoxMaterial.createColor4();
		let colorSize = 300.0;
		this.m_lightColorList = [
			color.clone().randomRGB(colorSize),
			color.clone().randomRGB(colorSize),
			color.clone().randomRGB(colorSize),
			color.clone().randomRGB(colorSize)
		];
	}
	createMaterial(roughness: number, metallic: number, ao: number = 1.0): IRenderMaterial {
		if (!this.sharedLightColor) {
			this.initLightColor();
		}
		let wrapper = new PBREnvLightingMaterialWrapper();
		wrapper.setTextureList([this.m_envMap]);

		for (let i = 0; i < 4; ++i) {
			wrapper.setPosAt(i, this.m_lightPosList[i]);
			wrapper.setColorAt(i, this.m_lightColorList[i]);
		}
		wrapper.setRoughness(roughness);
		wrapper.setMetallic(metallic);
		wrapper.setAO(ao);
		wrapper.setAlbedoColor(VoxMaterial.createColor4().randomRGB(1.0));
		return wrapper.material;
	}
}
class AnimationScene {
	private m_rscene: IRendererScene;
	private m_sphEntity: ITransformEntity = null;
	private m_entities: ITransformEntity[] = [];
	private m_pbr = new PBRLighting();
	private m_time = 0.0;
	constructor() {}
	initialize(sc: IRendererScene): void {
		if (this.m_rscene == null && sc != null) {
			this.m_rscene = sc;

            this.m_pbr.sharedLightColor = false;
			this.m_pbr.initialize(this.m_rscene);

			this.m_time = Date.now() + Math.random() * 321.0;
			let begin = VoxMath.createVec3(-300, 0, 300);
			let offsetV = VoxMath.createVec3(30, 0, -30);
			for (let i = 0; i < 20; ++i) {
				this.createSphere(15, VoxMath.createVec3().copyFrom(offsetV).scaleBy(i).addBy(begin));
			}
			this.m_rscene.addEventListener(EventBase.ENTER_FRAME, this, this.animate);
		}
	}
	private createSphere(radius: number, pv: IVector3D): ITransformEntity {
		let material = this.m_pbr.createMaterial(Math.random(), Math.random() * 0.2 + 0.8, 1.3);
		let sph = this.m_sphEntity;
		if (this.m_sphEntity != null) {
			sph = VoxEntity.createDisplayEntity();
			sph.setMaterial(material);
			sph.copyMeshFrom(this.m_sphEntity);
		} else {
			sph = this.m_sphEntity = VoxEntity.createSphere(radius, 20, 20, material);
		}

		sph.setPosition(pv);
		this.m_rscene.addEntity(sph, 1);

		this.m_entities.push(sph);
		return sph;
	}
	private animate(evt: IEventBase = null): void {
		let ls = this.m_entities;
		let len = this.m_entities.length;
		let pos = VoxMath.createVec3();
		let time = (Date.now() - this.m_time) * 0.003;
		let curveFactor = Math.abs(Math.cos(time * 0.1)) * 0.3 + 0.2;
		for (let i = 0; i < len; ++i) {
			const factor = Math.sin(i * curveFactor + time);
			const et = ls[i];
			et.getPosition(pos);
			pos.y = factor * 100.0;
			let scale = Math.abs(factor * 1.5);
			if (scale < 0.3) {
				scale = 0.3;
			}
			et.setPosition(pos);
			et.setScaleXYZ(scale, scale, scale);
		}
	}
}

export class TransformTest {
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
	private mouseDown(evt: IMouseEvent): void {
		this.m_rscene.setClearColor(VoxMaterial.createColor4().randomRGB(0.3));
	}
	private initMouseInteract(): void {
		const mi = VoxUIInteraction.createMouseInteraction();
		mi.initialize(this.m_rscene).setAutoRunning(true);
	}
	private initRenderer(): void {
		let RD = VoxRScene.RendererDevice;
		RD.SHADERCODE_TRACE_ENABLED = true;
		RD.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;

		let rparam = VoxRScene.createRendererSceneParam();
		rparam.setCamPosition(1000.0, 1000.0, 1000.0);
		rparam.setCamProject(45, 20.0, 9000.0);
        rparam.setAttriAntialias(true);
		this.m_rscene = VoxRScene.createRendererScene(rparam).setAutoRunning(true);
		this.m_rscene.setClearUint24Color(0x888888);

		this.m_rscene.addEventListener(MouseEvent.MOUSE_DOWN, this, this.mouseDown);
	}

	private init3DScene(): void {
		new AnimationScene().initialize(this.m_rscene);
	}
}

export default TransformTest;

// for running instance
if (!(document as any).demoState) {
	let ins = new TransformTest();
	ins.initialize();
}
