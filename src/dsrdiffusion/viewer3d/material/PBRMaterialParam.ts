import IRenderTexture from "../../../engine/vox/render/texture/IRenderTexture";

interface PBRMaterialMapUrl {
	envMap?: string;
	envBrnMap?: string;
	diffuseMap?: string;
	normalMap?: string;
	armMap?: string;
	parallaxMap?: string;
	displacementMap?: string;
};

interface PBRMaterialMap {
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

interface PBRMaterialParam {

	metallic?: number;
	roughness?: number;
	ao?: number;
	toneMapingExposure?: number;

	uvScales?: number[];

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

export { PBRMaterialMapUrl, PBRMaterialMap, PBRMaterialParam };
