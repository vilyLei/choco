
import ICanvasTexAtlas from "../../cospace/voxtexture/atlas/ICanvasTexAtlas";
import { IMouseEvtUIEntity } from "../entity/IMouseEvtUIEntity";
import { IClipEntity } from "../entity/IClipEntity";

interface IButton extends IMouseEvtUIEntity {

	/**
	 * the default value is true
	 */
	syncLabelClip: boolean;
	addLabel(label: IClipEntity): void;
	
	initialize(atlas: ICanvasTexAtlas, idnsList?: string[]): IButton;
	initializeWithLable(lable: IClipEntity): IButton;
	getLable(): IClipEntity;
	setClipIndex(i: number): IButton;
}
export { IButton };
