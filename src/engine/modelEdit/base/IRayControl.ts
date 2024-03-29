/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/

import IVector3D from "../../vox/math/IVector3D";
import {ISelectable} from "./ISelectable";
import { IRenderCamera } from "../../vox/render/IRenderCamera";

/**
 * the behavior normalization of an entity that controlled by ray
 */
interface IRayControl extends ISelectable {
	/**
	 * @param rpv
	 * @param rtv
	 * @param force the default value is false
	 */
    moveByRay(rpv: IVector3D, rtv: IVector3D, force?: boolean): void;
    run(camera: IRenderCamera, rtv: IVector3D, force: boolean): void;
    addEventListener(type: number, listener: any, func: (evt: any) => void, captureEnabled?: boolean, bubbleEnabled?: boolean): void;
    removeEventListener(type: number, listener: any, func: (evt: any) => void): void;
    enable(): void;
    disable(): void;
    isEnabled(): boolean;
}
export { IRayControl };
