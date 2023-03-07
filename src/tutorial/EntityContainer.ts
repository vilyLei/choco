import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import { VoxMath } from "../engine/cospace/math/VoxMath";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";

export class EntityContainer {

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

    }
}

export default EntityContainer;

// for running instance
if(!((document as any).demoState)) {
    let ins = new EntityContainer();
    ins.initialize();
}