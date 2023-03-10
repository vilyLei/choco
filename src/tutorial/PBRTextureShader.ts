import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import VoxModuleShell from "../common/VoxModuleShell";
import { PBRParam, PBRMateralBuilder } from "./material/PBRMateralBuilder";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";

export class PBRTextureShader {
	private m_rscene: IRendererScene = null;
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
	
    private getTexByUrl(url: string): IRenderTexture {

        let tex = this.m_rscene.textureBlock.createImageTex2D();
        let img = new Image();
        img.onload = (evt: any): void => {
            tex.setDataFromImage(img);
        };
        img.src = url;
        return tex;
    }
	private applyTex(param: PBRParam, texName: string, envMapEnabled: boolean = true): void {

		param.envMap = envMapEnabled ? this.m_pbr.getEnvMap() : null;
		param.diffuseMap = this.getTexByUrl(`static/assets/pbr/${texName}/albedo.jpg`);
		param.normalMap = this.getTexByUrl(`static/assets/pbr/${texName}/normal.jpg`);
		param.roughnessMap = this.getTexByUrl(`static/assets/pbr/${texName}/roughness.jpg`);
		param.metallicMap = this.getTexByUrl(`static/assets/pbr/${texName}/metallic.jpg`);
		param.aoMap = this.getTexByUrl(`static/assets/pbr/${texName}/ao.jpg`);
	}
	private init3DScene(): void {
		this.m_pbr.sharedLightColor = false;
		this.m_pbr.initialize(this.m_rscene);

		let param = new PBRParam(Math.random() * 1.2, 0.3, 0.2, VoxMaterial.createColor4(1.0, 1.0, 1.0));
		this.applyTex(param, "rusted_iron");
		let material = this.m_pbr.createTextureMaterialWrapper(param);
		let sph = VoxEntity.createSphere(150, 20, 20, material);
		this.m_rscene.addEntity(sph);
		
		param = new PBRParam(Math.random() * 1.2, Math.random() * 1.2, 1.0);
		this.applyTex(param, "gold");
		material = this.m_pbr.createTextureMaterialWrapper(param);
		let cone = VoxEntity.createCone(70, 150, 20, material);
		cone.setXYZ(-200, 0.0, 200.0);
		this.m_rscene.addEntity(cone);

		param = new PBRParam(Math.random() * 1.2, Math.random() * 1.2, 1.0);
		param.setUVScale(3.0, 1.0);
		this.applyTex(param, "wall");
		material = this.m_pbr.createTextureMaterialWrapper( param );
		let torus = VoxEntity.createTorus(80, 30, 30, 50, 1, material);
		torus.setXYZ(200, 0.0, -200.0);
		this.m_rscene.addEntity(torus);
	}
}

export default PBRTextureShader;

// for running instance
if (!(document as any).demoState) {
	let ins = new PBRTextureShader();
	ins.initialize();
}
