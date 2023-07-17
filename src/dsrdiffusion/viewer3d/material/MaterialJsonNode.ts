import { IMaterialJsonNode } from "./IMaterialJsonNode";
class MaterialJsonNode implements IMaterialJsonNode {
	modelName = "";
	color = 0xffffff;
	metallic = 1.0;
	roughness = 0.1;
	uvScales: number[] = [1,1];
	normalStrength = 1.0;
	specular = 0.5;
	act = "update";
	constructor() {}

	copyFromJsonObj(src: any): void {
		if (src) {
			let dst = this as any;
			for (var key in src) {
				dst[key] = src[key];
			}
			if (src["uvScales"]) {
				this.uvScales = src["uvScales"].slice();
			}
		}
	}
	clone(): MaterialJsonNode {
		let node = new MaterialJsonNode();
		let dst = node as any;
		let src = this as any;
		for (var key in src) {
			dst[key] = src[key];
		}
		node.uvScales = this.uvScales.slice();
		// node.modelName = this.modelName;
		// node.color = this.color;
		// node.metallic = this.metallic;
		// node.roughness = this.roughness;
		// node.uvScales = this.uvScales.slice();
		// node.normalStrength = this.normalStrength;
		// node.specular = this.specular;
		return node;
	}
}
export { MaterialJsonNode };
