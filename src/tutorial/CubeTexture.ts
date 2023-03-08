import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import { IImageCubeTexture } from "../engine/vox/render/texture/IImageCubeTexture";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";


const vertShaderCode = `#version 300 es
precision mediump float;
layout(location = 0) in vec3 a_vs;
uniform mat4 u_objMat;
uniform mat4 u_viewMat;
uniform mat4 u_projMat;
out vec3 v_nv;
void main()
{
    gl_Position = u_projMat * u_viewMat * u_objMat * vec4(a_vs,1.0);
    v_nv = normalize(a_vs.xyz);
}
`;
const fragShaderCode = `#version 300 es
precision mediump float;
uniform samplerCube u_sampler0;
uniform vec4 u_color;
in vec3 v_nv;
layout(location = 0) out vec4 FragColor0;
void main()
{
    FragColor0 = texture(u_sampler0, v_nv.xyz) * u_color;
}
`;
export class CubeTexture {
	private m_rscene: IRendererScene = null;
	constructor() {}

	initialize(): void {
		new VoxModuleShell().initialize(
			(): void => {
				this.initMouseInteract();
			},
			(): void => {
				this.initRenderer();
			},
			(): void => {
				this.init3DScene();
			}
		);
	}
	private initMouseInteract(): void {
		const mi = VoxUIInteraction.createMouseInteraction();
		mi.initialize(this.m_rscene, 0, true).setAutoRunning(true);
	}
	private initRenderer(): void {
		this.m_rscene = VoxRScene.createRendererScene().initialize(null).setAutoRunning(true);
	}

	private getCubeTexByUrl(tex: IImageCubeTexture, url: string, i: number): IRenderTexture {
		let img = new Image();
		img.onload = (): void => { tex.setDataFromImageToFaceAt(i,img); };
		img.src = url;
		return tex;
	}
	private getCubeTexByUrls(urls: string[]): IRenderTexture {
		let tex = this.m_rscene.textureBlock.createImageCubeTex();
		for(let i = 0; i < 6; ++i) {
			this.getCubeTexByUrl(tex, urls[i], i);
		}		
		return tex;
	}
	
    private createaterial(tex: IRenderTexture): IRenderMaterial {

        let material = VoxMaterial.createShaderMaterial("image_cube_shader");
        material.setFragShaderCode(fragShaderCode);
        material.setVertShaderCode(vertShaderCode);
        material.addUniformDataAt("u_color", new Float32Array([1.0, 1.0, 1.0, 1.0]));
        material.setTextureList([tex]);

        return material;
    }
	private init3DScene(): void {

		const rsc = this.m_rscene;
		let urls = [
            "static/assets/hw_morning/morning_ft.jpg",
            "static/assets/hw_morning/morning_bk.jpg",
            "static/assets/hw_morning/morning_up.jpg",
            "static/assets/hw_morning/morning_dn.jpg",
            "static/assets/hw_morning/morning_rt.jpg",
            "static/assets/hw_morning/morning_lf.jpg"
        ];

		let texture = this.getCubeTexByUrls( urls );
		let planeMaterial = this.createaterial(texture);
		planeMaterial.setTextureList([texture]);
        
		let cube = VoxEntity.createCube(500, planeMaterial);
		// cube.setScaleXYZ(5.0, 5.0, 5.0);
		rsc.addEntity(cube);
	}
}

export default CubeTexture;

// for running instance
if (!(document as any).demoState) {
	let ins = new CubeTexture();
	ins.initialize();
}
