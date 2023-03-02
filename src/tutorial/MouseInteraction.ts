import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import VoxModuleShell from "../common/VoxModuleShell";

export class MouseInteraction {

    private m_rscene: IRendererScene;
    constructor() { }
    initialize(): void {
        new VoxModuleShell().initialize(
            (): void => { this.initMouseInteract(); },
            (): void => { this.initRenderer(); }
        );
    }
    private initMouseInteract(): void {
        VoxUIInteraction.createMouseInteraction().initialize(this.m_rscene).setAutoRunning(true);
    }
    private initRenderer(): void {

        this.m_rscene = VoxRScene.createRendererScene().initialize(null).setAutoRunning(true);        
        this.m_rscene.addEntity(VoxRScene.createAxis3DEntity());
    }
}
export default MouseInteraction;