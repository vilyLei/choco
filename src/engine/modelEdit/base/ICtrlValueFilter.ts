import IVector3D from "../../vox/math/IVector3D";


interface ICtrlValueFilter {
	ctrlValueFilter(type: number, pv: IVector3D): void;
}
export { ICtrlValueFilter };
