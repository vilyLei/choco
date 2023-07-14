import IRendererScene from "../../vox/scene/IRendererScene";
import { IRendererSceneAccessor } from "../../vox/scene/IRendererSceneAccessor";
class SceneAccessor implements IRendererSceneAccessor {
	constructor() {}
	renderBegin(rendererScene: IRendererScene): void {
		let p = rendererScene.getRenderProxy();
		p.clearDepth(1.0);
	}
	renderEnd(rendererScene: IRendererScene): void {}
}
export {SceneAccessor}
