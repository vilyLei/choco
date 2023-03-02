import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import { VoxMath } from "../engine/cospace/math/VoxMath";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";

export class Primitives {

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
        mi.initialize(this.m_rscene, 0, true).setAutoRunning(true);
    }
    private initRenderer(): void {

        this.m_rscene = VoxRScene.createRendererScene().initialize(null).setAutoRunning(true);        
        this.m_rscene.addEntity(VoxRScene.createAxis3DEntity());
    }

    private getTexByUrl(url: string): IRenderTexture {

        let tex = this.m_rscene.textureBlock.createImageTex2D();
        let img = new Image();
        img.onload = (): void => { tex.setDataFromImage(img); };
        img.src = url;
        return tex;
    }
    private init3DScene(): void {

        const rsc = this.m_rscene;
        let boxMaterial = VoxMaterial.createDefaultMaterial();
        boxMaterial.setRGB3f(0.7, 1.0, 1.0);
        boxMaterial.normalEnabled = true;

        let size = 50;
        let minPos = VoxMath.createVec3(-size, -size, -size);
        let maxPos = minPos.clone().scaleBy(-1.0);
        let box = VoxEntity.createBox(minPos, maxPos, boxMaterial);
        box.setXYZ(0, -200, 0);
        box.setScaleXYZ(10, 0.5, 10);
        rsc.addEntity(box);

        let cube = VoxEntity.createCube(200, boxMaterial);
        cube.setXYZ(-300, 0, 0);
        rsc.addEntity(cube);

        let sphMaterial = VoxMaterial.createDefaultMaterial();
        sphMaterial.normalEnabled = true;
        sphMaterial.setRGB3f(0.7, 1.0, 0.3);
        sphMaterial.setTextureList([this.getTexByUrl("static/assets/box.jpg")]);
        let sph = VoxEntity.createSphere(150, 20, 20, sphMaterial);
        sph.setXYZ(300, 0, 0);
        rsc.addEntity(sph);

        let coneMaterial = VoxMaterial.createDefaultMaterial();
        coneMaterial.normalEnabled = true;
        coneMaterial.setRGB3f(0.5, 0.8, 0.2);
        let cone = VoxEntity.createCone(100, 150, 20, coneMaterial);
        cone.setXYZ(300, 0, -300);
        rsc.addEntity(cone);

        let planeMaterial = VoxMaterial.createDefaultMaterial();
        planeMaterial.normalEnabled = true;
        let plane = VoxEntity.createXOZPlane(-50, -50, 100, 100, planeMaterial);
        plane.setXYZ(-300, 0, 300);
        plane.setRotationXYZ(60, 50, 0);
        rsc.addEntity(plane);
    }
}

export default Primitives;