import IRendererScene from "../engine/vox/scene/IRendererScene";
import { RendererState, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";

export class RenderingState {

    private m_rscene: IRendererScene = null;
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
        let ground = VoxEntity.createXOZPlane(-350, -350, 700, 700, planeMaterial);
        ground.setXYZ(0, -100, 0);
        /**
         * 渲染状态设置为没有face剔除，混合模式为实色混合, 深度检测方式: (true, LESS)
         */
        ground.setRenderState(RendererState.NONE_CULLFACE_NORMAL_STATE);
        this.m_rscene.addEntity(ground);

        for (let i = 0; i < 20; ++i) {
            planeMaterial = VoxMaterial.createDefaultMaterial();
            planeMaterial.setTextureList([this.getTexByUrl("static/assets/flare_core_02.jpg")]);
            const plane = VoxEntity.createYOZPlane(-50, -50, 100, 100, planeMaterial);
            plane.setXYZ(-200 + i * 20, 0, 0);
            /**
             * 渲染状态设置为没有face剔除，混合模式为ADD模式, 深度检测方式: (false, LESS)
             */
            plane.setRenderState(RendererState.NONE_ADD_BLENDSORT_STATE);
            /**
             * 强制保证这些plane在ground之后绘制，以便正确的呈现混合效果
             */
            this.m_rscene.addEntity(plane, 1);
        }
    }
}

export default RenderingState;

// for running instance
if(!((document as any).demoState)) {
    let ins = new RenderingState();
    ins.initialize();
}