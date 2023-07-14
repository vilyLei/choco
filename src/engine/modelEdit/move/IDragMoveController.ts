import IVector3D from "../../vox/math/IVector3D";
import { IUserEditController } from "../base/IUserEditController";

interface IDragMoveController extends IUserEditController {
    /**
     * example: the value is 0.05
     */
    fixSize: number;
    axisSize: number;
    planeSize: number;
    planeAlpha: number;
    pickTestAxisRadius: number;
	/**
	 * @param rpv
	 * @param rtv
	 * @param force the default value is false
	 */
    moveByRay(rpv: IVector3D, rtv: IVector3D, force?: boolean): void;
}

export { IDragMoveController };
