import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";
import { BinaryTextureLoader } from "../engine/cospace/modules/loaders/BinaryTextureLoader";
import { PBREnvLightingMaterialWrapper } from "./material/PBREnvLightingMaterialWrapper";

export class PBRShader {

    private m_rscene: IRendererScene = null;
    private m_envMap: IRenderTexture;
    constructor() { }

    initialize(): void {

        new VoxModuleShell().initialize(
            (): void => { this.initMouseInteract(); },
            (): void => { this.initRenderer(); },
            (): void => { this.init3DScene(); }
        );
    }
    private initMouseInteract(): void {

        const mi = VoxUIInteraction.createMouseInteraction();
        mi.initialize(this.m_rscene, 0, true);
        mi.setAutoRunning(true);
    }
    private initRenderer(): void {

        let RD = VoxRScene.RendererDevice;
        RD.SHADERCODE_TRACE_ENABLED = true;
        RD.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;
        RD.SetWebBodyColor("#888888");

        let rparam = VoxRScene.createRendererSceneParam();
        rparam.setAttriAntialias(!RD.IsMobileWeb());
        rparam.setCamPosition(1000.0, 1000.0, 1000.0);
        rparam.setCamProject(45, 20.0, 9000.0);
        this.m_rscene = VoxRScene.createRendererScene(rparam);
    }

    private getTexByUrl(url: string): IRenderTexture {

        let tex = this.m_rscene.textureBlock.createImageTex2D(64, 64, false);
        let img = new Image();
        img.onload = (evt: any): void => {
            tex.setDataFromImage(img);
        };
        img.src = url;
        return tex;
    }

    private init3DScene(): void {
        
        let envMapUrl = "static/assets/bytes/spe.mdf";

        let loader = new BinaryTextureLoader();
        loader.loadTextureWithUrl(envMapUrl, this.m_rscene);
        this.m_envMap = loader.texture;

        let wrapper = new PBREnvLightingMaterialWrapper();
        wrapper.setTextureList([this.m_envMap]);

        let cube = VoxEntity.createCube(200, wrapper.material);
        cube.setXYZ(-300, 200, 0);
        this.m_rscene.addEntity(cube);

        wrapper = new PBREnvLightingMaterialWrapper();
        wrapper.setTextureList([this.m_envMap]);
        
        
        let sph = VoxEntity.createSphere(150, 20, 20, false, wrapper.material);
        sph.setXYZ(300, 200, 0);
        this.m_rscene.addEntity(sph);
    }
    run(): void {
        if (this.m_rscene != null) {
            this.m_rscene.run();
        }
    }
}

export default PBRShader;