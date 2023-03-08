import IRendererScene from "../engine/vox/scene/IRendererScene";
import { EventBase, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";
import TextureResLoader from "../engine/vox/assets/TextureResLoader";



const vertShaderCode = `#version 300 es
precision mediump float;
layout(location = 0) in vec3 a_vs;
layout(location = 1) in vec2 a_uvs;
uniform mat4 u_objMat;
uniform mat4 u_viewMat;
uniform mat4 u_projMat;
out vec2 v_uv;
void main()
{
    gl_Position = u_projMat * u_viewMat * u_objMat * vec4(a_vs,1.0);
    v_uv = a_uvs;
}
`;
const fragShaderCode = `#version 300 es
precision mediump float;
uniform sampler2D u_sampler0;
uniform sampler2D u_sampler1;
uniform vec4 u_color;
uniform vec4 u_param;
in vec2 v_uv;
layout(location = 0) out vec4 FragColor0;
void main()
{
	vec4 uvOffset = texture(u_sampler1, v_uv.xy + u_param.xy);
    FragColor0 = texture(u_sampler0, v_uv.xy + uvOffset.xy) * u_color;
}
`;

export class UVDisplacement {
	private m_rscene: IRendererScene = null;
	private m_texLoader: TextureResLoader;
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
		this.m_rscene = VoxRScene.createRendererScene()
			.initialize(null)
			.setAutoRunning(true);
		this.m_texLoader = new TextureResLoader(this.m_rscene);
	}

	private m_paramData = new Float32Array([0.0, 0.0, 0.0, 0.0]);
    private createMaterial(texUrls: string[], r: number = 1.0, g: number = 1.0, b: number = 1.0): IRenderMaterial {

		let colorData = new Float32Array([r, g, b, 1.0]);
		let paramData = this.m_paramData;
        let material = VoxMaterial.createShaderMaterial("tutorial_shader");
        material.setFragShaderCode(fragShaderCode);
        material.setVertShaderCode(vertShaderCode);
        material.addUniformDataAt("u_color", colorData);
        material.addUniformDataAt("u_param", paramData);

		let list: IRenderTexture[] = texUrls != null && texUrls.length > 0 ? [] : null;
		if(texUrls != null && texUrls.length > 0) {
			for(let i = 0; i < texUrls.length; ++i) {
				list.push( this.getTexByUrl( texUrls[i] ) );
			}
		}
        material.setTextureList( list );

        return material;
    }
	private getTexByUrl(url: string): IRenderTexture {
		return this.m_texLoader.getTexByUrl(url);
	}
	private init3DScene(): void {

		const rsc = this.m_rscene;

		let urls = [
			"static/assets/metal.png",
			"static/assets/displacement_03.jpg"
		]
		let planeMaterial = this.createMaterial(urls);

		let plane = VoxEntity.createXOZPlane(-150, -150, 300, 300, planeMaterial);
		plane.setScaleXYZ(3.0, 3.0, 3.0);
		rsc.addEntity(plane);

		rsc.addEventListener(EventBase.ENTER_FRAME, this, this.enterFrame);
	}
	
	private enterFrame(): void {
		this.m_paramData[0] += 0.001;
		this.m_paramData[1] += 0.001;
	}
}

export default UVDisplacement;

// for running instance
if (!(document as any).demoState) {
	let ins = new UVDisplacement();
	ins.initialize();
}
