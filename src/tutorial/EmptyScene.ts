import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import VoxModuleShell from "../common/VoxModuleShell";

export class EmptyScene {
    constructor() { }
    
    initialize(): void {
        new VoxModuleShell().initialize(null, (): void => { this.initRenderer(); });
    }
    private initRenderer(): void {
        
        let rscene = VoxRScene.createRendererScene();
        rscene.initialize(null).setAutoRunning(true);
    }
}
export default EmptyScene;