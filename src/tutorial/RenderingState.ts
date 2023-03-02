import IRendererScene from "../engine/vox/scene/IRendererScene";
import { RendererState, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";

export class RenderingState {

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
        this.m_rscene = VoxRScene.createRendererScene(rparam).setAutoRunning(true);
        this.m_rscene.setClearUint24Color(0x888888);
    }
    
    private getTexByUrl(url: string): IRenderTexture {

        let tex = this.m_rscene.textureBlock.createImageTex2D();
        let img = new Image();
        img.onload = (): void => { tex.setDataFromImage(img); };
        img.src = url;
        return tex;
    }
    private init3DScene(): void {
        

        let planeMaterial = VoxMaterial.createDefaultMaterial();
        planeMaterial.normalEnabled = true;
        planeMaterial.setUVScale(4.0, 4.0);
        planeMaterial.setRGB3f(0.7, 1.0, 0.3);
        planeMaterial.setTextureList([this.getTexByUrl("static/assets/box.jpg")]);
        let plane = VoxEntity.createXOZPlane(-350, -350, 700, 700, planeMaterial);
        plane.setXYZ(0, -100, 0);
        plane.setRenderState(RendererState.NONE_CULLFACE_NORMAL_STATE);
        this.m_rscene.addEntity(plane);
    }
}

export default RenderingState;