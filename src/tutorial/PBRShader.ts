import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import VoxModuleShell from "../common/VoxModuleShell";
import { PBRMateralBuilder } from "./material/PBRMateralBuilder";

export class PBRShader {
	private m_rscene: IRendererScene = null;
	// private m_pbr = new PBRLighting();
	private m_pbr = new PBRMateralBuilder();
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
		RD.SHADERCODE_TRACE_ENABLED = true;
		RD.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;

		let rparam = VoxRScene.createRendererSceneParam();
		rparam.setCamPosition(1000.0, 1000.0, 1000.0);
		rparam.setCamProject(45, 20.0, 9000.0);
		this.m_rscene = VoxRScene.createRendererScene(rparam).setAutoRunning(true);
		this.m_rscene.setClearUint24Color(0x888888);
	}

	private init3DScene(): void {
		this.m_pbr.initialize(this.m_rscene);

		let material = this.m_pbr.createMaterial(0.9, 0.0, 1.0);
		let sph = VoxEntity.createSphere(150, 20, 20, material);
		this.m_rscene.addEntity(sph);

		material = this.m_pbr.createMaterial(0.3, 0.5, 1.0);
		let cone = VoxEntity.createCone(70, 150, 20, material);
		cone.setXYZ(-200, 0.0, 200.0);
		this.m_rscene.addEntity(cone);

		material = this.m_pbr.createMaterial(0.3, 0.5, 1.0);
		let torus = VoxEntity.createTorus(80, 30, 20, 30, 1, material);
		torus.setXYZ(200, 0.0, -200.0);
		this.m_rscene.addEntity(torus);
	}
}

export default PBRShader;

// for running instance
if (!(document as any).demoState) {
	let ins = new PBRShader();
	ins.initialize();
}
