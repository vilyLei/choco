/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/

import IVector3D from "../../vox/math/IVector3D";
import { IUserEditController } from "../base/IUserEditController";


/**
 * 在三个坐标轴上拖动
 */
interface IDragRotationController extends IUserEditController {

    /**
     * example: the value is 0.05
     */
    fixSize: number;
    radius: number;
    pickTestAxisRadius: number;
	/**
	 * @param rpv
	 * @param rtv
	 * @param force the default value is false
	 */
    moveByRay(rpv: IVector3D, rtv: IVector3D, force?: boolean): void;
}
export { IDragRotationController }
