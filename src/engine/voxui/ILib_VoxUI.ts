import { IClipLabel } from "./entity/IClipLabel";
import { IClipColorLabel } from "./entity/IClipColorLabel";
import { IColorClipLabel } from "./entity/IColorClipLabel";
import { ITextLabel } from "./entity/ITextLabel";
import { IColorLabel } from "./entity/IColorLabel";
import { IButton } from "./button/IButton";
import { IFlagButton } from "./button/IFlagButton";
import { ISelectButtonGroup } from "./button/ISelectButtonGroup";
import { IVoxUIScene } from "./scene/IVoxUIScene";
import { IRectTextTip } from "./entity/IRectTextTip";
import { ITipInfo } from "./base/ITipInfo";
import { IUILayout } from "./layout/IUILayout";
import { IUIPanel } from "./panel/IUIPanel";
import { IPromptPanel } from "./panel/IPromptPanel";
import ICanvasTexAtlas from "../cospace/voxtexture/atlas/ICanvasTexAtlas";
import IColor4 from "../vox/material/IColor4";
import { IUIConfig } from "./system/IUIConfig";
import IRendererScene from "../vox/scene/IRendererScene";
import IRendererSceneGraph from "../vox/scene/IRendererSceneGraph";
import { IParamCtrlPanel } from "./panel/IParamCtrlPanel";

interface ITextParam {

	text: string;
	textColor: IColor4;
	fontSize: number;
	font: string;
}
interface ILib_VoxUI {
	initialize(): void;
	createColorLabel(): IColorLabel;
	createUILayout(): IUILayout;
	createTipInfo(): ITipInfo;
	createRectTextTip(): IRectTextTip;
	createClipLabel(): IClipLabel;
	createClipColorLabel(): IClipColorLabel;
	createColorClipLabel(): IColorClipLabel;
	createTextLabel(): ITextLabel;
	
	createButton(): IButton;
	createFlagButton(): IFlagButton;
	createSelectButtonGroup(): ISelectButtonGroup;
	createTextButton(width: number, height: number, idns: string, texAtlas: ICanvasTexAtlas, textParam: ITextParam, colors: IColor4[]): IButton;
	/**
	 * @param uuid button event uuid
	 * @param text button text content
	 * @param width button width, the defaule value is 90
	 * @param height button height, the defaule value is 50
	 * @param textColor button text color, the defaule value is null
	 * @param fontSize button text font size, the defaule value is 30
	 * @param fontName button text font name, the defaule value is ""
	 */
	createTextLabelButton(uuid: string, text: string, width?: number, height?: number, textColor?: IColor4, fontSize?: number, fontName?: string): IButton;
	createUIPanel(): IUIPanel;
	createPromptPanel(): IPromptPanel;
	createParamCtrlPanel(): IParamCtrlPanel;
	/**
	 * @param crscene IRendererSceneGraph instance
	 * @param uiConfig IUIConfig instance, its default value is null
	 * @param atlasSize the default value is 512
	 * @param renderProcessesTotal the default value is 3
	 */
	createUIScene(graph: IRendererSceneGraph, uiConfig?: IUIConfig, atlasSize?: number, renderProcessesTotal?: number): IVoxUIScene;
}
export { ITextParam, ILib_VoxUI };
