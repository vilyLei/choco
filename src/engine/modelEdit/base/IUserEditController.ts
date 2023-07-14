import IRendererScene from "../../vox/scene/IRendererScene";
import IEntityTransform from "../../vox/entity/IEntityTransform";
import IDisplayEntityContainer from "../../vox/entity/IDisplayEntityContainer";
import { ICtrTarget } from "../base/ICtrTarget";

interface IUserEditController extends IEntityTransform {

    runningVisible: boolean;
    uuid: string;

    /**
     * initialize the tansformation controller instance.
     * @param editRendererScene a IRendererScene instance.
     * @param container entities container
     */
    initialize(rc: IRendererScene, container: IDisplayEntityContainer, bodyContainer: IDisplayEntityContainer): void;

    addEventListener(type: number, listener: any, func: (evt: any) => void, captureEnabled?: boolean, bubbleEnabled?: boolean): void;
    removeEventListener(type: number, listener: any, func: (evt: any) => void): void;
    enable(): void;
    disable(): void;
    isEnabled(): boolean;
	/**
	 * @param force the default value is false
	 */
    run(force?: boolean): void;
    isSelected(): boolean;
    select(targets: IEntityTransform[]): void;
    getTargets(): IEntityTransform[];
    getCtrlTarget(): ICtrTarget;
    deselect(): void;
    setVisible(visible: boolean): void;
    getVisible(): boolean;
    setCtrlScaleXYZ(sx: number, sy: number, sz: number): void;
    decontrol(): void;
    updateCtrl(): void;
    getVersion(): number;

}

export { IUserEditController };
