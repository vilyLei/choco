import { IUIEntityContainer } from "../entity/IUIEntityContainer";
import IColor4 from "../../vox/material/IColor4";
import { IVoxUIScene } from "../scene/IVoxUIScene";

interface IUIPanel extends IUIEntityContainer {
	autoLayout: boolean;
	setSize(pw: number, ph: number): void;
	setBGColor(c: IColor4): IUIPanel;
	/**
	 * @param scene ui scene, it is IVoxUIScene instance
	 * @param rpi the default value is -1, it is a invalid value
	 */
	setUIscene(uiscene: IVoxUIScene, rpi?: number): void;
	
	/**
	 * @param scene ui scene, it is IVoxUIScene instance, the default value is null
	 * @param rpi the default value is -1, it is a invalid value
	 */
	open(scene?: IVoxUIScene,rpi?: number): void;
	/**
	 * @returns open it or not
	 */
	isOpen(): boolean;
	/**
	 * @returns close it or not
	 */
	isClosed(): boolean;
	close(): void;
}
export { IUIPanel };
