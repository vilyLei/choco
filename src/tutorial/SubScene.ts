import IRendererScene from "../engine/vox/scene/IRendererScene";
import { MouseEvent, EventBase, RendererState, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import RenderStatusDisplay from "../engine/vox/scene/RenderStatusDisplay";
import IRendererSceneGraph from "../engine/vox/scene/IRendererSceneGraph";
import IDefault3DMaterial from "../engine/vox/material/mcase/IDefault3DMaterial";
import CameraTrack from "../engine/vox/view/CameraTrack";

export class SubScene {

    private m_rscene: IRendererScene = null;
    private m_subRscene: IRendererScene = null;
    private m_graph: IRendererSceneGraph = null;
    private m_camTrack: CameraTrack = null;
    private m_camTrack2: CameraTrack = null;
    constructor() { }

    initialize(): void {

        new VoxModuleShell().initialize(
            (): void => { },
            (): void => { this.initRenderer(); },
            (): void => { this.init3DScene(); }
        );
    }
    private initRenderer(): void {

        let RD = VoxRScene.RendererDevice;
        /**
         * 开启打印输出shader构建的相关信息
         */
        RD.SHADERCODE_TRACE_ENABLED = true;
        RD.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;

        let graph = this.m_graph = VoxRScene.createRendererSceneGraph();

        let rparam = graph.createRendererSceneParam();
        rparam.syncBgColor = false;
        rparam.autoSyncRenderBufferAndWindowSize = false;
        rparam.setCamPosition(1000.0, 1000.0, 1000.0);
        rparam.setCamProject(45, 20.0, 9000.0);

        this.m_rscene = graph.createScene(rparam);
        this.m_rscene.setClearUint24Color(0x888888);

        let state = this.m_rscene.getStage3D();
        let subW = state.stageWidth * 0.5;
        let subH = state.stageHeight * 0.4;

        this.m_subRscene = graph.createSubScene(rparam);
        this.m_subRscene.setViewPort(0, 0, subW, subH);

        new RenderStatusDisplay(this.m_rscene, true);

        graph.setAutoRunning(true);

    }

	mouseDownListener(evt: any): void {
		console.log("mouse down ...");
	}
	private enterFrame(): void {

		if (this.m_camTrack) {
			this.m_camTrack.rotationOffsetAngleWorldY(-0.2);
		}
		if (this.m_camTrack2) {
			this.m_camTrack2.rotationOffsetAngleWorldY(-0.3);
		}
	}
    private getTexByUrl(url: string): IRenderTexture {

        let tex = this.m_rscene.textureBlock.createImageTex2D();
        let img = new Image();
        img.onload = (): void => { tex.setDataFromImage(img); };
        img.src = url;
        return tex;
    }
    private init3DScene(): void {

        let graph = this.m_graph;
        this.m_camTrack = new CameraTrack();
        this.m_camTrack.bindCamera(this.m_rscene.getCamera());

        this.m_camTrack2 = new CameraTrack();
        this.m_camTrack2.bindCamera(this.m_subRscene.getCamera());

        graph.addEventListener(MouseEvent.MOUSE_DOWN, this, this.mouseDownListener);
        graph.addEventListener(EventBase.ENTER_FRAME, this, this.enterFrame);

        this.initMainScene();
        this.initSubScene();
    }
    private initMainScene(): void {

        let boxMaterial = VoxMaterial.createDefaultMaterial();
        boxMaterial.setTextureList([this.getTexByUrl("static/assets/wood_02.jpg")]);
        let box = VoxEntity.createCube(150, boxMaterial);
        box.setXYZ(350, 0, 0);
        this.m_rscene.addEntity(box);
        this.m_rscene.addEntity(VoxEntity.createAxis3DEntity(300));
    }
    
    private initSubScene(): void {

        let bgPlane = VoxEntity.createFixScreenPlane();
        (bgPlane.getMaterial() as IDefault3DMaterial).setRGB3f(0.1, 0.3, 0.1);
        bgPlane.setRenderState(RendererState.BACK_NORMAL_ALWAYS_STATE);
        this.m_subRscene.addEntity(bgPlane);

        this.m_subRscene.addEntity(VoxEntity.createAxis3DEntity(300));

        let sphMaterial = VoxMaterial.createDefaultMaterial();
        sphMaterial.setTextureList([this.getTexByUrl("static/assets/box.jpg")]);
        let sph = VoxEntity.createSphere(150, 20, 20, sphMaterial);
        sph.setXYZ(950, 0, 0);
        this.m_subRscene.addEntity(sph);
    }
}

export default SubScene;

// for running instance
if (!((document as any).demoState)) {
    let ins = new SubScene();
    ins.initialize();
}