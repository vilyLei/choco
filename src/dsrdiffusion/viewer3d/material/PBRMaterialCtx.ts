import IRendererScene from "../../../engine/vox/scene/IRendererScene";
import { CoMaterialContextParam, ICoRScene } from "../../../engine/cospace/voxengine/ICoRScene";
import { ICoLightModule } from "../../../engine/cospace/renderEffect/light/ICoLightModule";
import { ICoEnvLightModule } from "../../../engine/cospace/renderEffect/light/ICoEnvLightModule";
import { IVSMShadowModule } from "../../../engine/cospace/renderEffect/shadow/IVSMShadowModule";

import { IMaterialContext } from "../../../engine/materialLab/base/IMaterialContext";
import { ILightModule } from "../../../engine/light/base/ILightModule";
import { PBRModule } from "./PBRModule";
import { CoModuleVersion, CoModuleLoader } from "../../../engine/cospace/app/utils/CoModuleLoader";

declare var CoRScene: ICoRScene;
declare var CoLightModule: ICoLightModule;
declare var CoEnvLightModule: ICoEnvLightModule;
declare var VSMShadowModule: IVSMShadowModule;

export class PBRMaterialCtx {
	private m_rscene: IRendererScene;
	private m_mctx: IMaterialContext;

	private m_mctxFlag: number = 0;

	private m_callback: () => void = null;
	private m_materialData: any;

	readonly pbrModule = new PBRModule();
	constructor() { }

	getMaterialCtx(): IMaterialContext {
		return this.m_mctx;
	}
	initialize(rscene: IRendererScene, materialData: any, callback: () => void): void {
		if(this.m_rscene == null && rscene != null) {
			this.m_rscene = rscene;
			this.m_materialData = materialData;
			this.m_callback = callback;
			this.pbrModule.initialize(materialData);

			this.initMaterialModule();
		}
	}
	private initMaterialModule(): void {
		this.pbrModule.preload((): void => {
			console.log("pbrModule.preload()....");
			this.updateMCTXInit();
		});

		let url0 = "static/cospace/renderEffect/pbr/PBREffect.umd.js";
		let url1 = "static/cospace/renderEffect/lightModule/CoLightModule.umd.js";
		let url2 = "static/cospace/renderEffect/envLight/CoEnvLightModule.umd.js";
		let url3 = "static/cospace/renderEffect/vsmShadow/VSMShadowModule.umd.js";

		new CoModuleLoader(4, (): void => {
			this.updateMCTXInit();
		})
			.load(url0)
			.load(url1)
			.load(url2)
			.load(url3);
	}
	private updateMCTXInit(): void {
		this.m_mctxFlag++;
		if (this.isMCTXEnabled()) {
			this.initMaterialCtx();
		}
	}
	isMCTXEnabled(): boolean {
		return this.m_mctxFlag == 2;
	}

	private buildEnvLight(mctx: IMaterialContext, param: CoMaterialContextParam, data: any): void {
		let module = CoEnvLightModule.create(this.m_rscene);
		module.initialize();
		if (data != undefined && data != null) {
			module.setFogDensity(data.density);
			let rgb = data.rgb;
			module.setFogColorRGB3f(rgb[0], rgb[1], rgb[2]);
		} else {
			module.setFogDensity(0.0005);
			module.setFogColorRGB3f(0.0, 0.8, 0.1);
		}
		mctx.envLightModule = module;
	}
	private buildLightModule(mctx: IMaterialContext, param: CoMaterialContextParam, data: any): void {

		param.pointLightsTotal = 0;
		param.spotLightsTotal = 0;
		param.directionLightsTotal = 0;
		let lightModule = CoLightModule.createLightModule(this.m_rscene);
		if(data) {
			if (data.pointLights != undefined && data.pointLights != null) {
				param.pointLightsTotal = data.pointLights.length;
			}
			if (data.spotLights != undefined && data.spotLights != null) {
				param.spotLightsTotal = data.spotLights.length;
			}
			if (data.directionLights != undefined && data.directionLights != null) {
				param.directionLightsTotal = data.directionLights.length;
			}
			for (let i: number = 0; i < param.pointLightsTotal; ++i) {
				lightModule.appendPointLight();
			}
			for (let i: number = 0; i < param.spotLightsTotal; ++i) {
				lightModule.appendSpotLight();
			}
			for (let i: number = 0; i < param.directionLightsTotal; ++i) {
				lightModule.appendDirectionLight();
			}
		}


		this.initLightModuleData(lightModule, param, data);

		mctx.lightModule = lightModule;
	}

	private initLightModuleData(lightModule: ILightModule, param: CoMaterialContextParam, data: any): void {

		if(data) {
			for (let i: number = 0; i < param.pointLightsTotal; ++i) {

				let lo = data.pointLights[i];

				let light = lightModule.getPointLightAt(i);
				light.position.fromArray(lo.position);
				light.color.fromArray4(lo.rgb);
				light.attenuationFactor1 = lo.factor1;
				light.attenuationFactor2 = lo.factor2;
			}
			for (let i: number = 0; i < param.spotLightsTotal; ++i) {

				let lo = data.spotLights[i];

				let light = lightModule.getSpotLightAt(i);
				light.position.fromArray(lo.position);
				light.direction.fromArray(lo.direction);
				light.color.fromArray4(lo.rgb);
				light.attenuationFactor1 = lo.factor1;
				light.attenuationFactor2 = lo.factor2;
			}
			for (let i: number = 0; i < param.directionLightsTotal; ++i) {

				let lo = data.directionLights[i];

				let light = lightModule.getDirectionLightAt(i);
				light.direction.fromArray(lo.direction);
				light.color.fromArray4(lo.rgb);
				light.attenuationFactor1 = lo.factor1;
				light.attenuationFactor2 = lo.factor2;
			}
		}
		lightModule.update();
	}
	private initMaterialCtx(): void {
		console.log("initMaterialCtx() ....");

		this.m_mctx = CoRScene.createMaterialContext();
		let mctx = this.m_mctx;

		let md = this.m_materialData;
		let mc = md.context;

		let mcParam = CoRScene.creatMaterialContextParam();
		mcParam.shaderLibVersion = mc.shaderLibVersion;
		mcParam.loadAllShaderCode = true;
		mcParam.shaderCodeBinary = true;
		mcParam.pbrMaterialEnabled = true;
		mcParam.lambertMaterialEnabled = false;
		mcParam.shaderFileNickname = true;
		mcParam.vsmFboIndex = 0;

		mcParam.vsmEnabled = true;
		// mcParam.vsmEnabled = false;
		// mcParam.buildBinaryFile = true;

		this.buildEnvLight(mctx, mcParam, md.fog);
		this.buildLightModule(mctx, mcParam, md.light);
		this.buildShadowModule(mctx, mcParam, md.shadow);

		mctx.addShaderLibListener(this);
		mctx.initialize(this.m_rscene, mcParam);

		this.pbrModule.active(this.m_rscene, mctx, mcParam.vsmEnabled);
		// console.log("initMaterialCtx() ... 2");
	}
	shaderLibLoadComplete(loadingTotal: number, loadedTotal: number): void {
		console.log("############## shaderLibLoadComplete().................");
		if (this.m_callback != null) {
			this.m_callback();
			this.m_callback = null;
		}
	}

	private buildShadowModule(mctx: IMaterialContext, param: CoMaterialContextParam, data: any): void {

		let v3 = CoRScene.createVec3();
		v3.fromArray(data.cameraPosition);
		let vsmModule = VSMShadowModule.create(param.vsmFboIndex);
		vsmModule.setCameraPosition(v3);
		vsmModule.setCameraNear(data.cameraNear);
		vsmModule.setCameraFar(data.cameraFar);
		let mapSize = data.mapSize;
		let cameraViewSize = data.cameraViewSize;
		vsmModule.setMapSize(mapSize[0], mapSize[1]);
		vsmModule.setCameraViewSize(cameraViewSize[0], cameraViewSize[1]);

		vsmModule.setShadowRadius(data.radius);
		vsmModule.setShadowBias(data.bias);
		vsmModule.initialize(this.m_rscene, [0], 3000);
		vsmModule.setShadowIntensity(data.shadowIntensity);
		vsmModule.setColorIntensity(data.colorIntensity);
		mctx.vsmModule = vsmModule;
	}
	run(): void {
		if (this.m_mctx) {
			this.m_mctx.run();
		}
	}
}

export default PBRMaterialCtx;