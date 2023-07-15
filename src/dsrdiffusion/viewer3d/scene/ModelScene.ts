import IRenderEntity from "../../../engine/vox/render/IRenderEntity";

class ModelNode {
	uuid = "";
	entity: IRenderEntity = null;
	constructor() {}
}
class ModelScene {
	
	constructor() {
	}
	initialize(scData: any): void {
	}
	getModelNode(uuid: string): ModelNode {
		return null;
	}
	
	addModelNode(uuid: string, entity: IRenderEntity): ModelNode {
		return null;
	}
}

export { ModelNode, ModelScene };
