import { IUIPanel } from "../panel/IUIPanel";
import IColor4 from "../../vox/material/IColor4";
import { IVoxUIScene } from "../scene/IVoxUIScene";

interface IColorPickPanel extends IUIPanel {
	/**
	 * @param scene IVoxUIScene instance
	 * @param rpi renderer process id
	 * @param panelW the default value 260
	 * @param panelH the default value 260
	 * @param marginWidth the default value 3
	 */
	initialize(scene: IVoxUIScene, rpi: number, panelW?: number, panelH?: number, marginWidth?: number): void;
	setSelectColorCallback(callback: (color: IColor4, pickX: number, pickY: number)=>void): void;
	setColor(color: IColor4): void;
	setPickXY(px: number, py: number): void;

}
export { IColorPickPanel };
