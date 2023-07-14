import { IButton } from "../button/IButton";

interface ISelectButtonGroup {
	addButton(btn: IButton): void;
	setSelectedFunction(selectFunc: (btn: IButton)=>void, deselectFunc: (btn: IButton)=>void): void;
	select(uuid: string): void;
	selectButton(btn: IButton): void;
	/**
	 * @param colorHexList for example: [0x4caf50, 0xaaac6a, 0x6ccf70]
	 */
	setSelectColors(colorHexList: number[]): void;
	/**
	 * @param colorHexList for example: [0x4caf50, 0xaaac6a, 0x6ccf70]
	 */
	setDeselectColors(colorHexList: number[]): void;
	destroy(): void;
}
export { ISelectButtonGroup };
