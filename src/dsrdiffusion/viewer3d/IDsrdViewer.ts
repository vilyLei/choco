import { IDsrdImageViewer } from "./IDsrdImageViewer";
import { ICameraView } from "./scene/ICameraView";
import { IModelScene } from "./scene/IModelScene";

interface IDsrdViewer {
	imgViewer: IDsrdImageViewer;
	camView: ICameraView;
	modelScene: IModelScene;
	/**
	 * @param urls url array
	 * @param types type array
	 * @param loadingCallback call back lambda function
	 * @param size the default value is 200
	 */
	initSceneByUrls(urls: string[], types: string[], loadingCallback: (prog: number) => void, size?: number): void;
	setForceRotate90(force: boolean): void;
	run(): void;
}

export { IDsrdViewer };
