import { IItemData } from "./IItemData";
import { SettingDataPanel } from "./SettingDataPanel";
import { DataItemComponentParam, DataItemComponent } from "./DataItemComponent";
import URLFilter from "../../../engine/cospace/app/utils/URLFilter";
class MaterialDataPanel extends SettingDataPanel {
	constructor() {
		super();
	}
	private m_preModelName = "";
	private m_unlockDataChanged = true;
	modelNames: string[] = [];
	uvScales = [1.0, 1.0];

	test(): void {
		// let jsonStr = `{
		// 	"modelName":"export_0",
		// 	"color":889977,
		// 	"specular":0.6,
		// 	"metallic": 0.7,
		// 	"roughness": 0.1,
		// 	"normalStrength": 1.5,
		// 	"uvScales": [
		// 		12,
		// 		13
		// 	]}`;
		// let jsonObj = JSON.parse(jsonStr);
		// this.setJsonObj(jsonObj);
		// this.rscViewer.modelScene.setMaterialParamToNodeByJsonObj("export_0",jsonObj);
		// this.getJsonStr();
	}
	setJsonObj(jsonObj: any): void {
		super.setJsonObj(jsonObj);
		if (jsonObj["uvScales"]) {
			let uvScales = jsonObj["uvScales"];
			this.setStringValueToItem("uvScaleX", uvScales[0] + "");
			this.setStringValueToItem("uvScaleY", uvScales[1] + "");
		}
	}
	setModelNamesWithUrls(urls: string[]): void {
		if (urls && urls.length > 0) {
			if (this.modelNames.length > 0) {
				this.m_preModelName = this.modelNames[0];
			}
			this.modelNames = [];
			for (let i = 0; i < urls.length; i++) {
				let url = urls[i];
				let ns = url != "" ? URLFilter.getFileName(url) : "";
				if (ns != "") {
				}
				this.modelNames.push(ns);
				// console.log("setModelNameWithUrl(), ns: >" + ns + "<");
			}
			if (this.modelNames.length > 0) {
				const mns = this.modelNames[0];
				if (this.m_preModelName != mns) {
					const ms = this.rscViewer.modelScene;
					let jsonObj = ms.getMaterialJsonObjFromNode(mns);
					this.m_unlockDataChanged = false;
					// jsonObj = {color:0xffffff} as any;
					// console.log("vvvvvvvvvvv jsonObj: ", jsonObj);
					this.setJsonObj(jsonObj);
					this.m_unlockDataChanged = true;
					// ms.setMaterialParamToNodeByJsonObj(mns, jsonObj);
				}
			}
		} else {
			this.modelNames = [];
		}
		console.log("this.modelNames: ", this.modelNames);
	}
	getJsonStr(beginStr = "{", endStr = "}"): string {
		// let jsonObj: any = { materials: null };
		// jsonObj.materials = this.rscViewer.modelScene.getMaterialJsonObjs();
		let jsonObj = this.rscViewer.modelScene.getMaterialJsonObjs();
		// let materials = this.rscViewer.modelScene.getMaterialJsonObjs();
		// for (let i = 0; i < materials.length; i++) {
		// }
		let jsonStr = `"materials":${JSON.stringify(jsonObj)}`;
		// jsonStr = jsonStr.slice(1, jsonStr.length - 1)
		console.log("xxxx materials jsonStr: ", jsonStr);
		return jsonStr;
	}
	getJsonStr2(beginStr = "{", endStr = "}"): string {
		let jsonBody = "";
		if (this.modelNames.length > 0) {
			let ls = this.modelNames;
			for (let i = 0; i < ls.length; i++) {
				const modelName = ls[i];
				if (modelName != "") {
					let uvSX = this.getItemCompByKeyName("uvScaleX").getParam();
					let uvSY = this.getItemCompByKeyName("uvScaleY").getParam();
					let uvScales = [uvSX.numberValue, uvSY.numberValue];
					let jsonStr = `${beginStr}"modelName":"${modelName}", "uvScales":[${uvScales}],"act":"update"`;
					// return super.getJsonStr(jsonStr,endStr);
					if (jsonBody != "") {
						jsonBody += "," + this.getJsonBodyStr(jsonStr, endStr);
					} else {
						jsonBody = this.getJsonBodyStr(jsonStr, endStr);
					}
				}
			}
		}
		return `"materials":[${jsonBody}]`;
	}
	protected init(viewerLayer: HTMLDivElement): void {
		// this.m_viewerLayer.onmousedown = evt => {
		// 	console.log("viewerLayer.onmousedown() ...");
		// 	// this.test();

		// 	window.onkeydown = evt => {
		// 		console.log("viewerLayer.onkeydown() ...");
		// 		if(evt.key == 'u') {
		// 			this.getJsonStr();
		// 		}
		// 	};
		// };

		let params: DataItemComponentParam[] = [];
		let param = new DataItemComponentParam();
		param.keyName = "type";
		param.name = "材质类型";
		param.textContent = "BSDF";
		param.textValue = "bsdf";
		param.toText();
		params.push(param);
		param = new DataItemComponentParam();
		param.keyName = "color";
		param.name = "颜色";
		param.numberValue = 0xffffff;
		param.editEnabled = true;
		param.toColor();
		params.push(param);
		param = new DataItemComponentParam();
		param.keyName = "specular";
		param.name = "反射率";
		param.numberValue = 0.5;
		param.inputType = "number";
		param.floatNumberEnabled = true;
		param.numberMinValue = 0.0;
		param.numberMaxValue = 3.0;
		param.editEnabled = true;
		param.toNumber();
		params.push(param);
		param = new DataItemComponentParam();
		param.keyName = "metallic";
		param.name = "金属度";
		param.numberValue = 0.5;
		param.inputType = "number";
		param.floatNumberEnabled = true;
		param.numberMinValue = 0.0;
		param.numberMaxValue = 3.0;
		param.editEnabled = true;
		param.toNumber();
		params.push(param);
		param = new DataItemComponentParam();
		param.keyName = "roughness";
		param.name = "粗糙度";
		param.numberValue = 0.5;
		param.inputType = "number";
		param.floatNumberEnabled = true;
		param.numberMinValue = 0.0;
		param.numberMaxValue = 3.0;
		param.editEnabled = true;
		param.toNumber();
		params.push(param);
		param = new DataItemComponentParam();
		param.keyName = "normalStrength";
		param.name = "凹凸强度";
		param.numberValue = 1.0;
		param.inputType = "number";
		param.floatNumberEnabled = true;
		param.numberMinValue = 0.0;
		param.numberMaxValue = 3.0;
		param.editEnabled = true;
		param.toNumber();
		params.push(param);
		param = new DataItemComponentParam();
		param.keyName = "uvScaleX";
		param.name = "X轴UV缩放";
		param.numberValue = 1.0;
		param.inputType = "number";
		param.floatNumberEnabled = true;
		param.numberMinValue = 0.0;
		param.numberMaxValue = 30.0;
		param.editEnabled = true;
		param.autoEncoding = false;
		param.toNumber();
		params.push(param);
		param = new DataItemComponentParam();
		param.keyName = "uvScaleY";
		param.name = "Y轴UV缩放";
		param.numberValue = 1.0;
		param.inputType = "number";
		param.floatNumberEnabled = true;
		param.numberMinValue = 0.0;
		param.numberMaxValue = 30.0;
		param.editEnabled = true;
		param.autoEncoding = false;
		param.toNumber();
		params.push(param);

		this.m_params = params;

		let onchange = (keyName: string): void => {
			console.log("on change...keyName: ", keyName);
			if (this.m_unlockDataChanged) {
				this.rscViewer.imgViewer.setViewImageAlpha(0.1);
				let jsonStr = "";
				switch (keyName) {
					case "uvScaleX":
					case "uvScaleY":
						let uvSX = this.getItemCompByKeyName("uvScaleX").getParam();
						let uvSY = this.getItemCompByKeyName("uvScaleY").getParam();
						let uvScales = [uvSX.numberValue, uvSY.numberValue];
						jsonStr = `{"uvScales":[${uvScales}]}`;
						break;
					default:
						let item = this.getItemParamByKeyName(keyName);
						jsonStr = `{${item.getJsonStr()}}`;
						break;
				}
				let jsonObj = JSON.parse(jsonStr);
				let nls = this.modelNames;
				const ms = this.rscViewer.modelScene;
				for (let i = 0; i < nls.length; i++) {
					console.log("onchange, jsonObj: ", jsonObj);
					ms.setMaterialParamToNodeByJsonObj(nls[i], jsonObj);
				}
			}
		};

		let startY = 45;
		let disY = 31;
		let py = 0;
		for (let i = 0; i < params.length; ++i) {
			let param = params[i];
			this.createItemComponent(startY + py, param);
			py += disY;
			if (param.editEnabled) {
				param.onchange = onchange;
			}
		}
	}
}
export { MaterialDataPanel };
