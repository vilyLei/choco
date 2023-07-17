import IRenderEntity from "../../../engine/vox/render/IRenderEntity";
import { IPBRMaterialDecorator } from "../../../engine/pbr/material/IPBRMaterialDecorator";
import { PBRMaterialMap, PBRMaterialMapUrl, PBRMaterialParam } from "../../viewer3d/material/PBRMaterialParam";
import { IModelNode, IModelScene } from "./IModelScene";
import IVector3D from "../../../engine/vox/math/IVector3D";
import { VoxMath } from "../../../engine/cospace/math/VoxMath";
import IColor4 from "../../../engine/vox/material/IColor4";
import { IMaterialJsonNode } from "../material/IMaterialJsonNode";
import { MaterialJsonNode } from "../material/MaterialJsonNode";
import { VoxMaterial } from "../../../engine/cospace/voxmaterial/VoxMaterial";

class ModelMaterialJsonNode {
	modelName = "";
	private m_vec3A: IVector3D = null;
	private m_colorA: IColor4 = null;
	mdecor: IPBRMaterialDecorator = null;
	jsonNode = new MaterialJsonNode();
	changed = true;
	constructor() {}
	getJsonObj(): IMaterialJsonNode {
		return this.jsonNode.clone();
	}
	copyFromMDecor(): void {
		if (this.m_colorA == null) {
			this.m_colorA = VoxMaterial.createColor4();
			this.m_vec3A = VoxMath.createVec3();
		}
		// this.changed = true;
		const jnode = this.jsonNode;
		let decor = this.mdecor;
		if (decor) {
			jnode.metallic = decor.getMetallic();
			jnode.roughness = decor.getRoughness();

			let c = this.m_colorA;
			decor.getAlbedoColor(c);
			jnode.color = c.getRGBUint24();

			let vertUniform = decor.vertUniform as any;
			let v3 = this.m_vec3A;
			if (vertUniform) {
				vertUniform.getUVScale(v3);
				jnode.uvScales[0] = v3.x;
				jnode.uvScales[1] = v3.y;
			}
		}
	}
	setJsonObj(jsonObj: any): void {
		if (this.m_colorA == null) {
			this.m_colorA = VoxMaterial.createColor4();
			this.m_vec3A = VoxMath.createVec3();
		}
		this.changed = true;
		console.log("setJsonObj(), modelName: ", this.modelName, ", changed: ", this.changed);
		const jnode = this.jsonNode;
		jnode.copyFromJsonObj(jsonObj);
		jnode.modelName = this.modelName;
		let decor = this.mdecor;
		if (decor) {
			let value = jsonObj["metallic"];
			if (value) {
				decor.setMetallic(value);
			}
			value = jsonObj["roughness"];
			if (value) {
				decor.setRoughness(value);
			}
			let c = this.m_colorA;
			value = jsonObj["color"];
			if (value) {
				c.setRGBUint24(value);
				decor.setAlbedoColor(c.r, c.g, c.b);
			}
			let vertUniform = decor.vertUniform as any;
			let vs: number[] = null;
			if (vertUniform) {
				vs = jsonObj["uvScales"];
				if (vs) {
					vertUniform.setUVScale(vs[0], vs[1]);
				}
			}
		}
	}
}

class ModelNode implements IModelNode {
	uuid = "";
	entity: IRenderEntity = null;
	materialNode = new ModelMaterialJsonNode();
	constructor() {}
	copyEntityDataToMaterialNode(): void {
		this.materialNode.copyFromMDecor();
	}
}
class ModelScene implements IModelScene {
	private m_modelMap: Map<string, ModelNode> = new Map();
	constructor() {}
	__$init(): void {}
	initialize(scData: any): void {}

	/**
	 * @param force the default value is false
	 * @returns IMaterialJsonNode instance list
	 */
	getMaterialJsonObjs(force: boolean = false): IMaterialJsonNode[] {
		let list: IMaterialJsonNode[] = [];
		let map = this.m_modelMap;
		for (var [key, value] of map) {
			console.log(value.materialNode.modelName, ", value.materialNode.changed: ", value.materialNode.changed);
			if (value.materialNode.changed || force) {
				list.push(value.materialNode.getJsonObj());
				value.materialNode.changed = false;
			}
		}
		return list;
	}
	getMaterialJsonObjFromNode(uuid: string): IMaterialJsonNode {
		if (this.m_modelMap.has(uuid)) {
			let node = this.m_modelMap.get(uuid);
			return node.materialNode.getJsonObj();
		}
		return null;
	}
	setMaterialParamToNodeByJsonObj(uuid: string, jsonObj: any): void {
		if (this.m_modelMap.has(uuid)) {
			let node = this.m_modelMap.get(uuid);
			node.materialNode.setJsonObj(jsonObj);
		}
	}
	setMaterialParamToNode(uuid: string, param: PBRMaterialParam): void {
		if (this.m_modelMap.has(uuid)) {
			let node = this.m_modelMap.get(uuid);
			if (node.entity != null) {
				let material = node.entity.getMaterial();
				if (material) {
					let decor = (material as any).getDecorator() as IPBRMaterialDecorator;
					if (decor) {
						if (param.metallic !== undefined) decor.setMetallic(param.metallic);
						if (param.roughness !== undefined) decor.setRoughness(param.roughness);
						if (param.ao !== undefined) decor.setAO(param.ao);

						let vs: number[] = param.displacementParams;
						let vertUniform = decor.vertUniform as any;
						if (vertUniform) {
							if (vs !== undefined) {
								vertUniform.setDisplacementParams(vs[0], vs[1]);
							}
							vs = param.uvScales;
							if (vs !== undefined) {
								vertUniform.setUVScale(vs[0], vs[1]);
							}
						}

						vs = param.albedoColor;
						if (vs !== undefined) {
							decor.setAlbedoColor(vs[0], vs[1], vs[2]);
						}
						vs = param.parallaxParams;
						if (vs !== undefined) {
							decor.setParallaxParams(vs[0], vs[1], vs[2], vs[3]);
						}

						if (param.sideIntensity !== undefined) decor.setSideIntensity(param.sideIntensity);
						if (param.toneMapingExposure !== undefined) decor.setToneMapingExposure(param.toneMapingExposure);
						if (param.scatterIntensity !== undefined) decor.setScatterIntensity(param.scatterIntensity);
					}
				}
			}
		}
	}
	getModelNode(uuid: string): ModelNode {
		if (this.m_modelMap.has(uuid)) {
			let node = this.m_modelMap.get(uuid);
			return node;
		}
		return null;
	}

	addModelNode(uuid: string, entity: IRenderEntity): ModelNode {
		if (!this.m_modelMap.has(uuid)) {
			let node = new ModelNode();
			node.uuid = uuid;
			node.entity = entity;
			let mnode = node.materialNode;
			mnode.modelName = uuid;
			mnode.mdecor = null;
			let material = node.entity.getMaterial();
			if (material) {
				mnode.mdecor = (material as any).getDecorator() as IPBRMaterialDecorator;
			}
			console.log("ModelScene::addModelNode(), uuid: ", uuid, entity);
			this.m_modelMap.set(uuid, node);
			node.copyEntityDataToMaterialNode();
			mnode.changed = false;
		}
		return null;
	}
}

export { ModelNode, ModelScene };
