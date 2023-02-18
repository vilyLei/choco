import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import VoxModuleShell from "../common/VoxModuleShell";

export class EmptyScene {

    private m_rscene: IRendererScene = null;
    constructor() { }
    
    initialize(): void {
        new VoxModuleShell().initialize(null, (): void => { this.initRenderer(); });
    }
    private initRenderer(): void {
        this.m_rscene = VoxRScene.createRendererScene();
        this.m_rscene.initialize(null);
    }
    run(): void {
        if (this.m_rscene) {
            this.m_rscene.run();
        }
    }
}
export default EmptyScene;