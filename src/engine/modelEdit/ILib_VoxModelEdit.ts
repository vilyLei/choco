import { ICoTransformRecorder } from "./recorde/ICoTransformRecorder";
import { ITransformController } from "./transform/ITransformController";
import { IFloorLineGrid } from "./entity/IFloorLineGrid";
import { IUIRectLine } from "./entity/IUIRectLine";
import { IRectFrameQuery } from "./entity/IRectFrameQuery";

interface IExp_UserEditEvent {
    readonly EDIT_BEGIN: number;
    readonly EDIT_END: number;
}

interface ILib_VoxModelEdit {
	UserEditEvent: IExp_UserEditEvent;
	createTransformRecorder(): ICoTransformRecorder;
	createTransformController(): ITransformController;
	createFloorLineGrid(): IFloorLineGrid;
	createUIRectLine(): IUIRectLine;
	createRectFrameQuery(): IRectFrameQuery;
}
export { IExp_UserEditEvent, ILib_VoxModelEdit };
