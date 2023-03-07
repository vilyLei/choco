import IColor4 from "../../../vox/material/IColor4";
import { CtrlInfo, ItemCallback, CtrlItemParam } from "./CtrlItemParam";

interface ICtrlItemObj {
    type: string;
    uuid: string;
    btn: any;
    param: CtrlItemParam;
    color: number[];
    colorId: number;
    info: CtrlInfo;
    syncEnabled: boolean;
    setValueToParam(value: number): void;
    /**
     * 将 flag 值由ui发送到外面
     */
    sendFlagOut(flag: boolean, force?: boolean): void;
    /**
     * 将 颜色 值由ui发送到外面
     */
    sendColorOut(color: IColor4, force?: boolean): void;
    /**
     * 将 数值 由ui发送到外面
     */
    sendValueOut(value: number, force?: boolean): void;
    /**
     * 将(用户已经修改的)参数同步到ui
     */
    updateParamToUI(): void;
}
export { CtrlInfo, ItemCallback, CtrlItemParam, ICtrlItemObj }