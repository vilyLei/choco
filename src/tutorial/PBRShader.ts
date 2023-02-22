import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import { VoxMath } from "../engine/cospace/math/VoxMath";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";
import { BinaryTextureLoader } from "../engine/cospace/modules/loaders/BinaryTextureLoader";
import { PBREnvLightingMaterialWrapper } from "./material/PBREnvLightingMaterialWrapper";
import IColor4 from "../engine/vox/material/IColor4";
import IVector3D from "../engine/vox/math/IVector3D";

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
    private m_lightPosList: IVector3D[];
    private m_lightColorList: IColor4[];
    private initData(): void {
        
        let envMapUrl = "static/assets/bytes/spe.mdf";

        let loader = new BinaryTextureLoader();
        loader.loadTextureWithUrl(envMapUrl, this.m_rscene);
        this.m_envMap = loader.texture;

        let dis = 700.0;
        let disY = 400.0;
        this.m_lightPosList = [
            VoxMath.createVec3(-dis, disY, -dis),
            VoxMath.createVec3(dis, disY, dis),
            VoxMath.createVec3(dis, disY, -dis),
            VoxMath.createVec3(-dis, disY, dis)
        ];
        let colorSize = 300.0;
        this.m_lightColorList = [
            VoxMaterial.createColor4().randomRGB(colorSize),
            VoxMaterial.createColor4().randomRGB(colorSize),
            VoxMaterial.createColor4().randomRGB(colorSize),
            VoxMaterial.createColor4().randomRGB(colorSize)
        ];
    }
    private createMaterial(roughness: number, metallic: number, ao: number = 1.0): IRenderMaterial {

        let wrapper = new PBREnvLightingMaterialWrapper();
        wrapper.setTextureList([this.m_envMap]);

        for (let i: number = 0; i < 4; ++i) {
            wrapper.setPosAt(i, this.m_lightPosList[i]);
            wrapper.setColorAt(i, this.m_lightColorList[i]);
        }
        wrapper.setRoughness(roughness);
        wrapper.setMetallic(metallic);
        wrapper.setAO(ao);
        wrapper.setAlbedoColor( VoxMaterial.createColor4().randomRGB(1.0) );
        return wrapper.material;
    }
    private init3DScene(): void {
        
        this.initData();

        let material = this.createMaterial(0.90, 0.0, 1.0);
        let sph = VoxEntity.createSphere(150, 20, 20, material);
        this.m_rscene.addEntity(sph);

        
    }
    run(): void {
        if (this.m_rscene != null) {
            this.m_rscene.run();
        }
    }
}

export default PBRShader;