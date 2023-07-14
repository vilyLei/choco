import { IVoxUIScene } from "../scene/IVoxUIScene";
import { ICompEntityBase } from "./ICompEntityBase";

interface ISelectionEntity extends ICompEntityBase {

	/**
	 * 选中
	 * @param sendEvtEnabled 是否发送选中的事件。 如果不发送事件，则只会改变状态。
	 */
	select(sendEvtEnabled?: boolean): void;
	/**
	 * 取消选中
	 * @param sendEvtEnabled 是否发送取消选中的事件。 如果不发送事件，则只会改变状态。the default value is false
	 */
	deselect(sendEvtEnabled?: boolean): void;
	/**
	 * @param flag true or false
	 * @param sendEvtEnabled the default value is false
	 */
	setFlag(flag: boolean, sendEvtEnabled?: boolean): void;
	isSelected(): boolean;
	/**
	 * @param uisc IVoxUIScene instance
	 * @param btnName btn name, the default value is "select"
	 * @param select_name btn selecting status name, the default value is "Yes"
	 * @param deselect_name btn deselecting status name, the default value is "No"
	 * @param fontSize font size, the default value is 30
	 * @param nameWidth btn name part width, the default value is 70
	 * @param statusWidth btn status part width, the default value is 50
	 * @param height btn height, the default value is 40
	 */
	initialize(uisc: IVoxUIScene, btnName?: string, select_name?: string, deselect_name?: string, fontSize?: number, statusWidth?: number, flagWidth?: number, height?: number): void;
}
export { ISelectionEntity };
