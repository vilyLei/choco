import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import VoxModuleShell from "../common/VoxModuleShell";

export class MouseInteraction {

    private m_rscene: IRendererScene;
    constructor(){}
    initialize(): void {
        new VoxModuleShell().initialize(
            (): void => { this.initMouseInteract(); },
            (): void => { this.initRenderer(); }
        );
    }
    private initMouseInteract(): void {
        const mi = VoxUIInteraction.createMouseInteraction();
        mi.initialize(this.m_rscene, 0, true);
        mi.setAutoRunning( true );
    }
    private initRenderer(): void {
        this.m_rscene = VoxRScene.createRendererScene();
        this.m_rscene.initialize(null);
        this.m_rscene.addEntity(VoxRScene.createAxis3DEntity());
    }
    run(): void {
        if (this.m_rscene) {
            this.m_rscene.run();
        }
    }
}

export default MouseInteraction;