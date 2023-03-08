import IRendererScene from "../../engine/vox/scene/IRendererScene";
import { VoxMath } from "../../engine/cospace/math/VoxMath";
import { VoxMaterial } from "../../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../../engine/vox/render/texture/IRenderTexture";
import IRenderMaterial from "../../engine/vox/render/IRenderMaterial";
import { PBREnvLightingMaterialWrapper } from "../material/PBREnvLightingMaterialWrapper";
import IVector3D from "../../engine/vox/math/IVector3D";
import { BinaryTextureLoader } from "../../engine/cospace/modules/loaders/BinaryTextureLoader";
import IColor4 from "../../engine/vox/material/IColor4";

export class PBRMateralBuilder {
	private m_rscene: IRendererScene = null;
	private static s_envMap: IRenderTexture;
	sharedLightColor = true;
	/**
	 * 记录点光源灯光位置
	 */
	private m_lightPosList: IVector3D[];
	/**
	 * 记录点光源灯光颜色
	 */
	private m_lightColorList: IColor4[];
	initialize(sc: IRendererScene): void {
		if (this.m_rscene == null && sc != null) {
			this.m_rscene = sc;
			this.initRenderingData();
		}
	}
	private initRenderingData(): void {
		let envMapUrl = "static/assets/bytes/spe.mdf";

		if (PBRMateralBuilder.s_envMap == null) {
			let loader = new BinaryTextureLoader(this.m_rscene);
			loader.loadTextureWithUrl(envMapUrl);
			PBRMateralBuilder.s_envMap = loader.texture;
		}

		const vec3 = VoxMath.createVec3();
		let dis = 700.0;
		let disY = 400.0;
		this.m_lightPosList = [
			vec3.clone().setXYZ(-dis, disY, -dis),
			vec3.clone().setXYZ(dis, disY, dis),
			vec3.clone().setXYZ(dis, disY, -dis),
			vec3.clone().setXYZ(-dis, disY, dis)
		];

		if (this.sharedLightColor) {
			this.initLightColor();
		}
	}
	private initLightColor(): void {
		const color = VoxMaterial.createColor4();
		let colorSize = 300.0;
		this.m_lightColorList = [
			color.clone().randomRGB(colorSize),
			color.clone().randomRGB(colorSize),
			color.clone().randomRGB(colorSize),
			color.clone().randomRGB(colorSize)
		];
	}
	createMaterial(roughness: number, metallic: number, ao: number = 1.0): IRenderMaterial {
		if (!this.sharedLightColor) {
			this.initLightColor();
		}
		let wrapper = new PBREnvLightingMaterialWrapper();
		wrapper.setTextureList([PBRMateralBuilder.s_envMap]);

		for (let i = 0; i < 4; ++i) {
			wrapper.setPosAt(i, this.m_lightPosList[i]);
			wrapper.setColorAt(i, this.m_lightColorList[i]);
		}
		wrapper.setRoughness(roughness);
		wrapper.setMetallic(metallic);
		wrapper.setAO(ao);
		wrapper.setAlbedoColor(VoxMaterial.createColor4().randomRGB(1.0));
		return wrapper.material;
	}
}