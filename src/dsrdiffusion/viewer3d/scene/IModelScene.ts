import IRenderEntity from "../../../engine/vox/render/IRenderEntity";
import { PBRMaterialMap, PBRMaterialMapUrl, PBRMaterialParam } from "../../viewer3d/material/PBRMaterialParam";
import { IMaterialJsonNode } from "../../viewer3d/material/IMaterialJsonNode";

interface IModelNode {
	uuid: string;
	entity: IRenderEntity;
}
interface IModelScene {
	/**
	 * @param force the default value is false
	 * @returns IMaterialJsonNode instance list
	 */
	getMaterialJsonObjs(force?: boolean): IMaterialJsonNode[];
	getMaterialJsonObjFromNode(uuid: string): IMaterialJsonNode;
	setMaterialParamToNodeByJsonObj(uuid: string, jsonObj: any): void;
	initialize(scData: any): void;
	setMaterialParamToNode(uuid: string, param: PBRMaterialParam): void;
	getModelNode(uuid: string): IModelNode;

	addModelNode(uuid: string, entity: IRenderEntity): IModelNode;
}

export { IModelNode, IModelScene };
