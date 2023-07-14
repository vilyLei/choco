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
import { ModuleLoader } from "../cospace/modules/loaders/ModuleLoader";

import { ITextParam, ILib_VoxUI } from "./ILib_VoxUI";
import IRendererSceneGraph from "../vox/scene/IRendererSceneGraph";
import { IParamCtrlPanel } from "./panel/IParamCtrlPanel";
import { ISelectionEntity } from "./component/ISelectionEntity";
import { IProgressEntity } from "./component/IProgressEntity";
declare var Lib_VoxUI: ILib_VoxUI;

interface I_Lib_VoxUI {
}
class T_Lib_VoxUI {

	private m_init = true;
	initialize(callback: (urls: string[]) => void = null, url: string = ""): boolean {
		console.log("T_Lib_VoxUI::initialize(), ", this.isEnabled());
		if (this.isEnabled()) {
			Lib_VoxUI.initialize();
		}
		this.m_init = !this.isEnabled();
		if (this.m_init) {
			this.m_init = false;
			if (url == "" || url === undefined) {
				url = "static/cospace/ui/Lib_VoxUI.umd.min.js";
			}
			if (callback != null) {
				new ModuleLoader(1, (): void => {
					if (this.isEnabled()) callback([url]);
				}).load(url);
			}
			return true;
		}
		return false;
	}
	isEnabled(): boolean {
		return typeof Lib_VoxUI !== "undefined";
	}
	createColorLabel(): IColorLabel {
		return Lib_VoxUI.createColorLabel();
	}
	createUILayout(): IUILayout {
		return Lib_VoxUI.createUILayout();
	}
	createTipInfo(): ITipInfo {
		return Lib_VoxUI.createTipInfo();
	}
	createRectTextTip(): IRectTextTip {
		return Lib_VoxUI.createRectTextTip();
	}
	createClipLabel(): IClipLabel {
		return Lib_VoxUI.createClipLabel();
	}
	createClipColorLabel(): IClipColorLabel {
		return Lib_VoxUI.createClipColorLabel();
	}
	createColorClipLabel(): IColorClipLabel {
		return Lib_VoxUI.createColorClipLabel();
	}
	createTextLabel(): ITextLabel {
		return Lib_VoxUI.createTextLabel();
	}

	createButton(): IButton {
		return Lib_VoxUI.createButton();
	}
	createFlagButton(): IFlagButton {
		return Lib_VoxUI.createFlagButton();
	}
	createSelectButtonGroup(): ISelectButtonGroup {
		return Lib_VoxUI.createSelectButtonGroup();
	}
	createTextButton(width: number, height: number, uuid: string, texAtlas: ICanvasTexAtlas, textParam: ITextParam, colors: IColor4[]): IButton {
		return Lib_VoxUI.createTextButton(width, height, uuid, texAtlas, textParam, colors);
	}
	/**
	 * @param uuid button event uuid
	 * @param text button text content
	 * @param width button width, the defaule value is 90
	 * @param height button height, the defaule value is 50
	 * @param textColor button text color, the defaule value is null
	 * @param fontSize button text font size, the defaule value is 30
	 * @param fontName button text font name, the defaule value is ""
	 */
	createTextLabelButton(uuid: string, text: string, width?: number, height?: number, textColor?: IColor4, fontSize?: number, fontName?: string): IButton {
		return Lib_VoxUI.createTextLabelButton(uuid, text, width, height, textColor, fontSize, fontName);
	}

	createUIPanel(): IUIPanel {
		return Lib_VoxUI.createUIPanel();
	}
	createPromptPanel(): IPromptPanel {
		return Lib_VoxUI.createPromptPanel();
	}
	createParamCtrlPanel(): IParamCtrlPanel {
		return Lib_VoxUI.createParamCtrlPanel();
	}
	/**
	 * @param graph IRendererSceneGraph instance
	 * @param uiConfig IUIConfig instance, its default value is null
	 * @param atlasSize the default value is 512
	 * @param renderProcessesTotal the default value is 3
	 */
	createUIScene(graph: IRendererSceneGraph, uiConfig?: IUIConfig, atlasSize?: number, renderProcessesTotal?: number): IVoxUIScene {
		return Lib_VoxUI.createUIScene(graph, uiConfig, atlasSize, renderProcessesTotal);
	}
	
	createSelectionEntity(): ISelectionEntity {
		return Lib_VoxUI.createSelectionEntity();
	}
	createProgressEntity(): IProgressEntity {
		return Lib_VoxUI.createProgressEntity();
	}
}
const VoxUI = new T_Lib_VoxUI();
export { VoxUI };
