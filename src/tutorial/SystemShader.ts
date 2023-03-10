import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";
import IShaderCodeBuffer from "../engine/vox/material/IShaderCodeBuffer";

const vertMainCode = `
    gl_Position = u_projMat * u_viewMat * u_objMat * vec4(a_vs,1.0);
    v_uv = a_uvs;
`;
const fragMainCode = `
    FragColor0 = VOX_Texture2D(VOX_DIFFUSE_MAP, v_uv.xy) * u_color;
`;
export class SystemShader {
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
		mi.initialize(this.m_rscene).setAutoRunning(true);
	}
	private initRenderer(): void {
		let RD = VoxRScene.RendererDevice;

		/**
		 * 开启打印输出shader构建的相关信息
		 */
		RD.SHADERCODE_TRACE_ENABLED = true;
		/**
		 * 顶点shader中的浮点数精度设置为 highp
		 */
		RD.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;

		let rparam = VoxRScene.createRendererSceneParam();
		rparam.setAttriAntialias(!RD.IsMobileWeb());
		rparam.setCamPosition(1000.0, 1000.0, 1000.0);
		rparam.setCamProject(45, 20.0, 9000.0);
		this.m_rscene = VoxRScene.createRendererScene(rparam).setAutoRunning(true);
	}

	private getTexByUrl(url: string): IRenderTexture {
		let tex = this.m_rscene.textureBlock.createImageTex2D();
		let img = new Image();
		img.onload = (evt: any): void => {
			tex.setDataFromImage(img);
		};
		img.src = url;
		return tex;
	}

	private createMaterial(r: number, g: number, b: number, texUrl: string): IRenderMaterial {

		let material = VoxMaterial.createShaderMaterial("system_shader");

		material.addUniformDataAt("u_color", new Float32Array([r, g, b, 1.0]));

		material.setShaderBuilder((coderBuilder: IShaderCodeBuffer): void => {

            let tex = coderBuilder.getTexture();
			let coder = coderBuilder.getShaderCodeBuilder();            
			coder.addFragUniform("vec4", "u_color");
			coder.addVarying("vec2", "v_uv");
			coder.addFragOutputHighp("vec4", "FragColor0");
            tex.addDiffuseMap();
            coder.addVertMainCode(vertMainCode);
            coder.addFragMainCode(fragMainCode);

		});

		material.setTextureList([this.getTexByUrl(texUrl)]);

		return material;
	}
	private init3DScene(): void {
        
		let material = this.createMaterial(0.1, 1.0, 0.2, "static/assets/metal.png");

		let cube = VoxEntity.createCube(200, material);
		cube.setXYZ(-300, 200, 0);
		this.m_rscene.addEntity(cube);

		let sphMaterial = this.createMaterial(1.0, 0.1, 0.2, "static/assets/box.jpg");

		let sph = VoxEntity.createSphere(150, 20, 20, sphMaterial);
		sph.setXYZ(300, 200, 0);
		this.m_rscene.addEntity(sph);
	}
}

export default SystemShader;

// for running instance
if (!(document as any).demoState) {
	let ins = new SystemShader();
	ins.initialize();
	document.title = "tutorial:SystemShader";
}
