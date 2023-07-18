import { IItemData } from "./IItemData";
import { SettingDataPanel } from "./SettingDataPanel";
import { DataItemComponentParam, DataItemComponent } from "./DataItemComponent";
class CameraDataPanel extends SettingDataPanel {
	constructor() {
		super();
	}
	getCamMatrixData(): number[] | Float32Array {
		return this.rscViewer.camView.getCameraData(0.01, true);
		// return [];
	}

	getJsonStr(beginStr = "{", endStr = "}"): string {
		let jsonStr = `${beginStr}"matrix":[${this.getCamMatrixData()}]`;
		return super.getJsonStr(jsonStr, endStr);
	}
	protected init(viewerLayer: HTMLDivElement): void {
		let params: DataItemComponentParam[] = [];
		let param = new DataItemComponentParam();

		let onchange = (keyName: string): void => {
			console.log("CameraDataPanel::init(), on change...keyName: ", keyName);
			if (this.m_unlockDataChanged) {
				switch (keyName) {
					case "viewAngle":
					case "near":
					case "far":
						let pViewAngle = this.getItemParamByKeyName("viewAngle");
						let pNear = this.getItemParamByKeyName("near");
						let pFar = this.getItemParamByKeyName("far");
						this.rscViewer.camView.setCamProjectParam(pViewAngle.numberValue, pNear.numberValue * 100.0, pFar.numberValue * 100.0);
						break;
					default:
						break;
				}
			}
		};

		param.keyName = "type";
		param.name = "类型";
		param.textValue = "perspective";
		param.toText();
		params.push(param);
		param = new DataItemComponentParam();
		param.keyName = "viewAngle";
		param.name = "视角";
		param.numberValue = 45;
		param.inputType = "number";
		param.numberMinValue = 0;
		param.numberMaxValue = 180;
		param.unit = "度";
		param.editEnabled = true;
		param.toNumber();
		param.onchange = onchange;
		params.push(param);
		param = new DataItemComponentParam();
		param.keyName = "near";
		param.name = "近平面";
		param.numberValue = 0.1;
		param.inputType = "number";
		param.floatNumberEnabled = true;
		param.numberMinValue = 0.0;
		param.numberMaxValue = 10.0;
		param.editEnabled = true;
		param.unit = "m";
		param.toNumber();
		param.onchange = onchange;
		params.push(param);
		param = new DataItemComponentParam();
		param.keyName = "far";
		param.name = "远平面";
		param.numberValue = 20;
		param.inputType = "number";
		param.floatNumberEnabled = true;
		param.numberMinValue = 0.0;
		param.numberMaxValue = 100.0;
		param.editEnabled = true;
		param.unit = "m";
		param.toNumber();
		param.onchange = onchange;
		params.push(param);

		this.m_params = params;

		let startY = 95;
		let disY = 50;
		let py = 0;
		for (let i = 0; i < params.length; ++i) {
			this.createItemComponent(startY + py, params[i]);

			py += disY;
		}
	}
}
export { CameraDataPanel };
