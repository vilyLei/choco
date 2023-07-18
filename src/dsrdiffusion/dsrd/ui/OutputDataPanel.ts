import { IItemData } from "./IItemData";
import { SettingDataPanel } from "./SettingDataPanel";
import { DataItemComponentParam, DataItemComponent } from "./DataItemComponent";
class OutputDataPanel extends SettingDataPanel {
	constructor() {
		super();
	}
	setJsonObj(jsonObj: any): void {
		console.log("jsonObj: ", jsonObj);
		super.setJsonObj(jsonObj);
		if (jsonObj["resolution"]) {
			let sizes = jsonObj["resolution"];
			this.setStringValueToItem("imageWidth", sizes[0] + "");
			this.setStringValueToItem("imageHeight", sizes[1] + "");
		}
	}
	getJsonStr(beginStr = "{", endStr = "}"): string {

		let paramW = this.getItemCompByKeyName("imageWidth").getParam();
		let paramH = this.getItemCompByKeyName("imageHeight").getParam();
		let sizes = [paramW.numberValue, paramH.numberValue];
		let jsonStr = `${beginStr}"path":"", "resolution":[${sizes}]`;
		return super.getJsonStr(jsonStr,endStr);
	}
	protected init(viewerLayer: HTMLDivElement): void {

		let param: DataItemComponentParam;
		let onchange = (keyName: string): void => {
			console.log("OutputDataPanel::init(), on change...keyName: ", keyName);
			let srcP = this.getItemParamByKeyName(keyName);
			switch(keyName) {
				case "imageWidth":
					param = this.getItemParamByKeyName("imageHeight");
					param.updateValueWithStr(srcP.getCurrValueString(), true, false);
					break;
				case "imageHeight":
					param = this.getItemParamByKeyName("imageWidth");
					param.updateValueWithStr(srcP.getCurrValueString(), true, false);
					break;
				default:
					break;
			}
			if (this.m_unlockDataChanged) {
			}
		}

		let params: DataItemComponentParam[] = [];
		param = new DataItemComponentParam();
		param.keyName = "imageWidth";
		param.name = "图像宽";
		param.numberValue = 512;
		param.inputType = "number";
		param.numberMinValue = 128;
		param.numberMaxValue = 4096;
		param.editEnabled = true;
		param.autoEncoding = false;
		param.toNumber();
		param.onchange = onchange;
		params.push(param);
		param = new DataItemComponentParam();
		param.keyName = "imageHeight";
		param.name = "图像高";
		param.numberValue = 512;
		param.inputType = "number";
		param.numberMinValue = 128;
		param.numberMaxValue = 4096;
		param.editEnabled = true;
		param.autoEncoding = false;
		param.toNumber();
		param.onchange = onchange;
		params.push(param);
		param = new DataItemComponentParam();
		param.keyName = "bgTransparent";
		param.name = "背景透明";
		param.toBoolean();
		param.booleanValue = false;
		// param.editEnabled = true;
		params.push(param);

		param = new DataItemComponentParam();
		param.keyName = "outputType";
		param.name = "出图类型";
		param.textValue = "single_image";
		param.textContent = "单张图";
		param.toText();
		params.push(param);

		param = new DataItemComponentParam();
		param.keyName = "bgColor";
		param.name = "背景色";
		param.numberValue = 0xffffff;
		param.editEnabled = true;
		param.toColor();
		params.push(param);
		this.m_params = params;

		let startY = 60;
		let disY = 50;
		let py = 0;
		for (let i = 0; i < params.length; ++i) {
			this.createItemComponent(startY + py, params[i]);
			py += disY;
		}
	}
}
export { OutputDataPanel };
