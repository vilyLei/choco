import { IVoxUIScene } from "../scene/IVoxUIScene";

import { ICompEntityBase } from "./ICompEntityBase";

interface IProgressEntity extends ICompEntityBase {

	/**
	 * the default value is 0.1
	 */
	step: number;
	/**
	 * @param uisc IVoxUIScene instance
	 * @param btnName btn name, the default value is "prog"
	 * @param fontSize font size, the default value 30
	 * @param nameWidth name part width, the default value 30
	 * @param progLength progress bar length, the default value is 200
	 * @param height btn height, the default value is 40
	 */
	initialize(uisc: IVoxUIScene, btnName?: string, fontSize?: number, nameWidth?: number, progLength?: number, height?: number): void;

	setRange(min: number, max: number): void;
	/**
	 * @param value current number value
	 * @param sendEvtEnabled the default value is true
	 */
	setValue(value: number, sendEvtEnabled?: boolean): void;
	getValue(): number;

	/**
	 * @param barProgress bar current progress number value
	 * @param sendEvtEnabled the default value is true
	 */
	setProgress(barProgress: number, sendEvtEnabled: boolean): void;

	getProgress(): number;
	/**
	 * @param length progress bar length
	 * @param sendEvtEnabled the default value is true
	 */
	setProgressLength(length: number, sendEvtEnabled?: boolean): void;

}
export { IProgressEntity };
