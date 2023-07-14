import IVector3D from "../../vox/math/IVector3D";
import { ICtrlValueFilter } from "../base/ICtrlValueFilter";

class VecValueFilter implements ICtrlValueFilter {
	private m_absorb = false;
	constructor() {}
	private filterScale(s: number): number {
		if (Math.abs(s) < 1.0) {
			if (s < 0) {
				s = -1;
			} else if (s > 0) {
				s = 1;
			}
		} else {
			console.log(s.toFixed(2), "Math.floor(s): ", Math.floor(s));
			s = Math.floor(s);
		}
		return s;
	}
	setAbsorbing(absorb: boolean): void {
		this.m_absorb = absorb;
	}
	ctrlValueFilter(type: number, pv: IVector3D): void {
		console.log("VecValueFilter, A pv: ", pv);
		if (this.m_absorb) {
			switch (type) {
				case 0:
					pv.x = Math.round(pv.x / 10.0) * 10.0;
					pv.y = Math.round(pv.y / 10.0) * 10.0;
					pv.z = Math.round(pv.z / 10.0) * 10.0;
					break;
				case 1:
					pv.x = this.filterScale(pv.x);
					pv.y = this.filterScale(pv.y);
					pv.z = this.filterScale(pv.z);
					break;
				case 2:
					pv.x = Math.round(pv.x / 5.0) * 5.0;
					pv.y = Math.round(pv.y / 5.0) * 5.0;
					pv.z = Math.round(pv.z / 5.0) * 5.0;
					break;
				default:
					break;
			}
		}
		console.log("VecValueFilter, B pv: ", pv);
	}
}
export {VecValueFilter}
