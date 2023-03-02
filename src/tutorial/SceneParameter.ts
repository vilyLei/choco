import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";

export class SceneParameter {

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
        mi.initialize(this.m_rscene, 0, true);
        mi.setAutoRunning(true);
    }
    private initRenderer(): void {

        let rparam = VoxRScene.createRendererSceneParam();
        rparam.setCamPosition(1000.0, 1000.0, 1000.0);
        rparam.setCamProject(45, 20.0, 9000.0);
        this.m_rscene = VoxRScene.createRendererScene( rparam );
        this.m_rscene.setAutoRunning(true);
    }

    private getTexByUrl(url: string): IRenderTexture {

        let tex = this.m_rscene.textureBlock.createImageTex2D();
        let img = new Image();
        img.onload = (evt: any): void => { tex.setDataFromImage(img); };
        img.src = url;
        return tex;
    }
    private init3DScene(): void {

        this.m_rscene.addEntity(VoxRScene.createAxis3DEntity());

        let boxMaterial = VoxMaterial.createDefaultMaterial();
        boxMaterial.setRGB3f(0.7, 1.0, 1.0);
        boxMaterial.normalEnabled = true;

        let cube = VoxEntity.createCube(200, boxMaterial);
        cube.setXYZ(-300, 0, 0);
        this.m_rscene.addEntity(cube);

        let sphMaterial = VoxMaterial.createDefaultMaterial();
        sphMaterial.normalEnabled = true;
        sphMaterial.setRGB3f(0.7, 1.0, 0.3);
        sphMaterial.setTextureList([this.getTexByUrl("static/assets/box.jpg")]);
        let sph = VoxEntity.createSphere(150, 20, 20, sphMaterial);
        sph.setXYZ(300, 0, 0);
        this.m_rscene.addEntity(sph);

        let planeMaterial = VoxMaterial.createDefaultMaterial();
        planeMaterial.normalEnabled = true;
        let plane = VoxEntity.createXOZPlane(-50, -50, 100, 100, planeMaterial);
        plane.setXYZ(-300, 0, 300);
        this.m_rscene.addEntity(plane);
    }
}

export default SceneParameter;