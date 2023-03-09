import IRendererScene from "../engine/vox/scene/IRendererScene";
import { EventBase, MouseEvent, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMath } from "../engine/cospace/math/VoxMath";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import VoxModuleShell from "../common/VoxModuleShell";
import IMouseEvent from "../engine/vox/event/IMouseEvent";
import ITransformEntity from "../engine/vox/entity/ITransformEntity";
import IVector3D from "../engine/vox/math/IVector3D";
import IDisplayEntityContainer from "../engine/vox/entity/IDisplayEntityContainer";
import RenderStatusDisplay from "../engine/vox/scene/RenderStatusDisplay";
import {PBRMateralBuilder} from "./material/PBRMateralBuilder";

class AnimationInstance {
	private static s_pbr = new PBRMateralBuilder();
	private static s_sphEntity: ITransformEntity = null;

	private m_rscene: IRendererScene;
	private m_entities: ITransformEntity[] = [];
	private m_time = 0.0;
	private m_amplitude = 100.0;
	private m_preTime = Math.random() * 321.0;

	container: IDisplayEntityContainer = null;
	constructor() {}
	initialize(sc: IRendererScene): AnimationInstance {
		if (this.m_rscene == null && sc != null) {
			this.m_rscene = sc;

			this.container = VoxRScene.createDisplayEntityContainer();
			sc.addEntity(this.container, 1);

			const pbr = AnimationInstance.s_pbr;
			pbr.sharedLightColor = false;
			pbr.initialize(this.m_rscene);

			this.m_time = Date.now();
			let begin = VoxMath.createVec3(-300, 0, 300);
			let offsetV = VoxMath.createVec3(30, 0, -30);
			for (let i = 0; i < 20; ++i) {
				this.createSphere( 15, VoxMath.createVec3().copyFrom(offsetV).scaleBy(i).addBy(begin) );
			}
		}
		return this;
	}
	private createSphere(radius: number, pv: IVector3D): ITransformEntity {

		const pbr = AnimationInstance.s_pbr;
		let material = pbr.createMaterial(Math.random(), Math.random() * 0.2 + 0.8, 1.3);
		let sph = AnimationInstance.s_sphEntity;
		if (sph) {
			sph = VoxEntity.createDisplayEntity();
			sph.setMaterial(material);
			sph.copyMeshFrom(AnimationInstance.s_sphEntity);
		} else {
			sph = AnimationInstance.s_sphEntity = VoxEntity.createSphere(radius, 20, 20, material);
		}

		sph.setPosition(pv);
		this.container.addEntity(sph);
		this.m_entities.push(sph);
		return sph;
	}
	setAmplitude(amplitude: number): void {
		this.m_amplitude = amplitude;
	}
	run(): void {
		let ls = this.m_entities;
		let len = this.m_entities.length;
		let pos = VoxMath.createVec3();
		let time = (Date.now() - this.m_time) * 0.003 + this.m_preTime;
		let curveFactor = Math.abs(Math.cos(time * 0.1)) * 0.3 + 0.2;
		for (let i = 0; i < len; ++i) {
			const factor = Math.sin(i * curveFactor + time);
			const et = ls[i];
			et.getPosition(pos);
			pos.y = factor * this.m_amplitude;
			let scale = Math.abs(factor * 1.5);
			if (scale < 0.3) {
				scale = 0.3;
			}
			et.setPosition(pos);
			et.setScaleXYZ(scale, scale, scale);
		}
	}
}

export class AnimationContainer {
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

		new RenderStatusDisplay(this.m_rscene, true);

		this.m_rscene.addEventListener(MouseEvent.MOUSE_DOWN, this, this.mouseDown);
		this.m_rscene.addEventListener(EventBase.ENTER_FRAME, this, this.enterFrame);
	}
	private m_list: AnimationInstance[] = [];
	private init3DScene(): void {

		let ins = new AnimationInstance().initialize(this.m_rscene);
		this.m_list.push(ins);
		ins = new AnimationInstance().initialize(this.m_rscene);
		ins.container.setXYZ(0, 0, 100);
		this.m_list.push(ins);
		ins = new AnimationInstance().initialize(this.m_rscene);
		ins.container.setXYZ(0, 0, -100);
		this.m_list.push(ins);
	}
	private enterFrame(): void {
		const ls = this.m_list;
		for (let i = 0, ln = ls.length; i < ln; ++i) {
			ls[i].run();
		}
	}
}

export default AnimationContainer;

// for running instance
if (!(document as any).demoState) {
	let ins = new AnimationContainer();
	ins.initialize();
}
