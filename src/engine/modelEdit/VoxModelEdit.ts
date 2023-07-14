
import { ICoTransformRecorder } from "./recorde/ICoTransformRecorder";
import { ITransformController } from "./transform/ITransformController";
import { IFloorLineGrid } from "./entity/IFloorLineGrid";
import { IUIRectLine } from "./entity/IUIRectLine";
import { IRectFrameQuery } from "./entity/IRectFrameQuery";

import { ModuleLoader } from "../cospace/modules/loaders/ModuleLoader";

import { IExp_UserEditEvent, ILib_VoxModelEdit } from ".//ILib_VoxModelEdit";

declare var Lib_VoxModelEdit: ILib_VoxModelEdit;

interface I_Lib_VoxModelEdit {
}

var UserEditEvent: IExp_UserEditEvent = null;

class T_Lib_VoxModelEdit {

	private m_init = true;
	initialize(callback: (urls: string[]) => void = null, url: string = ""): boolean {

		console.log("T_Lib_VoxModelEdit::initialize(), ", this.isEnabled());

		if (this.isEnabled()) {
			UserEditEvent = Lib_VoxModelEdit.UserEditEvent;
		}

		this.m_init = !this.isEnabled();

		if (this.m_init) {
			this.m_init = false;
			if (url == "" || url === undefined) {
				url = "static/cospace/modelEdit/Lib_VoxModelEdit.umd.min.js";
			}
			if (callback) {
				new ModuleLoader(1, (): void => {
					if (this.isEnabled()) callback([url]);
				}).load(url);
			}
			return true;
		}
		return false;
	}
	isEnabled(): boolean {
		return typeof Lib_VoxModelEdit !== "undefined";
	}

	get UserEditEvent(): IExp_UserEditEvent {
		return Lib_VoxModelEdit.UserEditEvent;
	}
	createTransformRecorder(): ICoTransformRecorder {
		return Lib_VoxModelEdit.createTransformRecorder();
	}
	createTransformController(): ITransformController {
		return Lib_VoxModelEdit.createTransformController();
	}
	createFloorLineGrid(): IFloorLineGrid {
		return Lib_VoxModelEdit.createFloorLineGrid();
	}
	createUIRectLine(): IUIRectLine {
		return Lib_VoxModelEdit.createUIRectLine();
	}
	createRectFrameQuery(): IRectFrameQuery {
		return Lib_VoxModelEdit.createRectFrameQuery();
	}
}

const VoxModelEdit = new T_Lib_VoxModelEdit();
export { IUIRectLine, IRectFrameQuery, ICoTransformRecorder,ITransformController,IFloorLineGrid,  UserEditEvent, VoxModelEdit };
