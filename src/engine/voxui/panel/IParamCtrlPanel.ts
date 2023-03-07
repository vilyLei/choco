import { IUIPanel } from "../panel/IUIPanel";
import { IVoxUIScene } from "../scene/IVoxUIScene";
import { ICtrlItemObj, CtrlInfo, ItemCallback, CtrlItemParam } from "./item/ICtrlItemObj";
interface IParamCtrlPanel extends IUIPanel {
	/**
	 * @param scene IVoxUIScene instance
	 * @param rpi renderer process id
	 * @param panelW the default value 300
	 * @param panelH the default value 350
	 * @param marginWidth the default value 3
	 */
	initialize(scene: IVoxUIScene, rpi: number, panelW?: number, panelH?: number, marginWidth?: number): void;
	addItem(param: CtrlItemParam): void;
	addItems(params: CtrlItemParam[]): void;
	getItemByUUID(uuid: string): ICtrlItemObj;
	layoutItem(): void;
	addStatusItem(name: string, uuid: string, selectNS: string, deselectNS: string, flag: boolean, callback: ItemCallback, visibleAlways?: boolean): void;
	addProgressItem(name: string, uuid: string, progress: number, callback: ItemCallback, colorPick?: boolean, visibleAlways?: boolean): void;
	addValueItem(name: string, uuid: string, value: number, minValue: number, maxValue: number, callback: ItemCallback, colorPick?: boolean, visibleAlways?: boolean, values?: number[]): void;

}
export { CtrlInfo, IParamCtrlPanel };
