import { IUIPanel } from "../panel/IUIPanel";
import IColor4 from "../../vox/material/IColor4";
import { IVoxUIScene } from "../scene/IVoxUIScene";

interface IPromptPanel extends IUIPanel {

	initialize(scene: IVoxUIScene, rpi: number, panelW: number, panelH: number, btnW: number, btnH: number, confirmNS?: string, cancelNS?: string): void;
	setListener(confirmFunc: () => void, cancelFunc: () => void): void;
	setPrompt(text: string): void;
	setPromptTextColor(color: IColor4): void;
	applyConfirmButton(): void;
	applyAllButtons(): void;

}
export { IPromptPanel };
