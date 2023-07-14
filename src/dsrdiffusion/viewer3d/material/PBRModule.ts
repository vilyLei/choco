import IRendererScene from "../../../engine/vox/scene/IRendererScene";
import { IMaterialContext } from "../../../engine/materialLab/base/IMaterialContext";
import { IMaterial } from "../../../engine/vox/material/IMaterial";
import { IPBRMaterialDecorator } from "../../../engine/pbr/material/IPBRMaterialDecorator";
import { IPBREffect, IPBREffectInstance } from "../../../engine/cospace/renderEffect/pbr/IPBREffect";
import { ShaderCodeUUID } from "../../../engine/vox/material/ShaderCodeUUID";
import IMaterialModule from "../../../engine/cospace/voxengine/material/IMaterialModule";
import IRenderTexture from "../../../engine/vox/render/texture/IRenderTexture";
import { HttpFileLoader } from "../../../engine/cospace/modules/loaders/HttpFileLoader";

declare var PBREffect: IPBREffect;
type PBRMapUrl = {
	envMap?: string;
	envBrnMap?: string;
	diffuseMap?: string;
	normalMap?: string;
	armMap?: string;
	parallaxMap?: string;
	displacementMap?: string;
};

type PBRMap = {
	envMap?: IRenderTexture;
	diffuseMap?: IRenderTexture;
	normalMap?: IRenderTexture;
	armMap?: IRenderTexture;
	parallaxMap?: IRenderTexture;
	displacementMap?: IRenderTexture;
	aoMap?: IRenderTexture;
	roughnessMap?: IRenderTexture;
	metallicMap?: IRenderTexture;
	specularMap?: IRenderTexture;
};

type PBRParam = {
	metallic?: number;
	roughness?: number;
	ao?: number;

	scatterIntensity?: number;
	sideIntensity?: number;

	shadowReceiveEnabled?: boolean;
	fogEnabled?: boolean;

	scatterEnabled?: boolean;
	woolEnabled?: boolean;
	absorbEnabled?: boolean;
	normalNoiseEnabled?: boolean;

	displacementParams?: number[];
	albedoColor?: number[];
	parallaxParams?: number[];
	pipeline?: boolean;
	specEnvMap?: IRenderTexture;
};

class PBRModule implements IMaterialModule {
	private m_rscene: IRendererScene;
	private m_effect: IPBREffectInstance = null;
	private m_materialCtx: IMaterialContext;
	private m_preLoadMaps: boolean = true;
	private m_loadSpecularData: boolean = true;
	private m_specEnvMapBuf: ArrayBuffer = null;
	private m_specEnvMap: IRenderTexture = null;
	private m_loadSpecCallback: () => void = null;
	private m_materialData: any;
	private m_texData: PBRMapUrl;
	private m_hdrBrnEnabled = true;

	preloadMaps = true;
	envMapUrl = "";
	hdrBrnEnabled = true;
	constructor() {}
	initialize(materialData: any): void {
		this.m_materialData = materialData;
		if (materialData.pbr) {
			this.m_texData = materialData.pbr.map as PBRMapUrl;
		}
	}
	preload(callback: () => void): void {
		if (this.m_loadSpecCallback == null && callback != null) {
			this.loadSpecularData(this.hdrBrnEnabled);
			this.m_loadSpecCallback = callback;
		}
	}
	active(rscene: IRendererScene, materialCtx: IMaterialContext, shadowEnabled: boolean): void {
		this.m_materialCtx = materialCtx;
		if (this.m_effect == null) {
			this.m_rscene = rscene;
			this.m_effect = PBREffect.create();
			this.m_effect.initialize(this.m_rscene);
		}
		this.preloadMap();
	}
	private loadSpecularData(hdrBrnEnabled: boolean): void {
		if (this.m_loadSpecularData) {
			this.m_hdrBrnEnabled = hdrBrnEnabled;
			let url = this.envMapUrl;
			if (this.m_texData) {
				url = this.m_texData.envBrnMap;
				if (hdrBrnEnabled) {
					url = this.m_texData.envBrnMap;
				}
			}
			console.log("start load spec map data, url: ", url);

			new HttpFileLoader().load(url, (buf: ArrayBuffer, url: string): void => {
				this.m_specEnvMapBuf = buf;
				if (this.m_effect != null) {
					this.m_specEnvMap = this.m_effect.createSpecularTex(this.m_specEnvMapBuf, true, this.m_specEnvMap);
				}
				if (this.m_loadSpecCallback != null) {
					this.m_loadSpecCallback();
					this.m_loadSpecCallback = null;
				}
			});
			this.m_loadSpecularData = false;
		}
	}
	private preloadMap(): void {
		if (this.m_preLoadMaps) {
			let texData = this.m_texData;
			if (this.preloadMaps && texData) {
				if (texData.diffuseMap !== undefined) this.m_materialCtx.getTextureByUrl(texData.diffuseMap);
				if (texData.normalMap !== undefined) this.m_materialCtx.getTextureByUrl(texData.normalMap);
				if (texData.armMap !== undefined) this.m_materialCtx.getTextureByUrl(texData.armMap);
				if (texData.displacementMap !== undefined) this.m_materialCtx.getTextureByUrl(texData.displacementMap);
			}
			this.m_preLoadMaps = false;
		}
	}
	getUUID(): ShaderCodeUUID {
		return ShaderCodeUUID.PBR;
	}
	isEnabled(): boolean {
		const mctx = this.m_materialCtx;
		let boo = mctx != null && mctx.hasShaderCodeObjectWithUUID(this.getUUID());
		return boo;
	}
	createMaterial(shadowReceiveEnabled: boolean, materialParam: PBRParam = null, texData: PBRMapUrl = null): IMaterial {
		// console.log("### pbr createMaterial().");
		if (this.m_specEnvMap == null) {
			if (this.m_specEnvMapBuf == null) {
				throw Error("this.m_specEnvMapBuf is null !!!");
			}
			this.m_specEnvMap = this.m_effect.createSpecularTex(this.m_specEnvMapBuf, true, this.m_specEnvMap);
			this.m_specEnvMap.__$attachThis();
		}

		let param: PBRParam;
		if (materialParam) {
			param = materialParam;
		} else {
			if (this.m_materialData.pbr) {
				param = this.m_materialData.pbr.defaultParam;
			}
		}
		const mctx = this.m_materialCtx;
		texData = texData == null ? this.m_texData : texData;
		let mapData: PBRMap = {
			envMap: param.specEnvMap !== undefined ? param.specEnvMap : this.m_specEnvMap,
			diffuseMap: texData && texData.diffuseMap !== undefined ? mctx.getTextureByUrl(texData.diffuseMap) : null,
			normalMap: texData && texData.normalMap !== undefined ? mctx.getTextureByUrl(texData.normalMap) : null,
			armMap: texData && texData.armMap !== undefined ? mctx.getTextureByUrl(texData.armMap) : null,
			displacementMap: texData && texData.displacementMap !== undefined ? mctx.getTextureByUrl(texData.displacementMap) : null,
			parallaxMap: texData && texData.parallaxMap !== undefined ? mctx.getTextureByUrl(texData.parallaxMap) : null,
			aoMap: null
		};

		let m = this.m_effect.createMaterial();
		let decor = m.getDecorator() as IPBRMaterialDecorator;
		let vertUniform = decor.vertUniform as any;
		if (param.pipeline) {
			m.setMaterialPipeline(mctx.pipeline);
		}
		if (param.scatterEnabled !== undefined) decor.scatterEnabled = param.scatterEnabled;
		if (param.woolEnabled !== undefined) decor.woolEnabled = param.woolEnabled;
		if (param.absorbEnabled !== undefined) decor.absorbEnabled = param.absorbEnabled;
		if (param.normalNoiseEnabled !== undefined) decor.normalNoiseEnabled = param.normalNoiseEnabled;
		decor.hdrBrnEnabled = this.m_hdrBrnEnabled;

		if (param.metallic !== undefined) decor.setMetallic(param.metallic);
		if (param.roughness !== undefined) decor.setRoughness(param.roughness);
		if (param.ao !== undefined) decor.setAO(param.ao);
		if (param.shadowReceiveEnabled !== undefined) {
			decor.shadowReceiveEnabled = param.shadowReceiveEnabled && shadowReceiveEnabled && mctx.vsmModule != null;
		}
		if (param.pipeline !== undefined && param.pipeline) {
			decor.fogEnabled = mctx.envLightModule && param.fogEnabled;
		}

		// for test
		// decor.scatterEnabled = false;
		// decor.woolEnabled = false;
		// decor.absorbEnabled = false;
		// decor.normalNoiseEnabled = false;
		// param.scatterIntensity = 1.0;
		// param.sideIntensity = 1.0;
		// decor.setMetallic(0.1);
		// decor.setRoughness(0.5);
		// decor.setAO(1.0);
		// decor.shadowReceiveEnabled = false;
		// decor.fogEnabled = false;

		// init maps
		decor.specularEnvMap = mapData.envMap;
		decor.armMap = mapData.armMap;
		decor.diffuseMap = mapData.diffuseMap;
		decor.normalMap = mapData.normalMap;
		decor.aoMap = mapData.aoMap;
		decor.parallaxMap = mapData.parallaxMap;
		vertUniform.displacementMap = mapData.displacementMap;

		decor.initialize();
		vertUniform.initialize();
		let vs: number[] = null;
		if (param.displacementParams !== undefined) {
			vs = param.displacementParams;
			vertUniform.setDisplacementParams(vs[0], vs[1]);
		}
		if (param.albedoColor !== undefined) {
			vs = param.albedoColor;
			decor.setAlbedoColor(vs[0], vs[1], vs[2]);
		}
		if (param.scatterIntensity !== undefined) {
			decor.setScatterIntensity(param.scatterIntensity);
		}
		if (param.parallaxParams !== undefined) {
			vs = param.parallaxParams;
			decor.setParallaxParams(vs[0], vs[1], vs[2], vs[3]);
		}
		if (param.sideIntensity !== undefined) {
			decor.setSideIntensity(param.sideIntensity);
		}

		return m;
	}
	destroy(): void {
		this.m_rscene = null;
		if (this.m_effect != null) {
			this.m_effect.destroy();
			this.m_effect = null;
		}
		this.m_materialCtx = null;
		this.m_materialData = null;
		this.m_texData = null;
		if (this.m_specEnvMap != null) {
			this.m_specEnvMap.__$detachThis();
			this.m_specEnvMap = null;
		}
	}
}
export { PBRModule, PBRParam, PBRMapUrl };
