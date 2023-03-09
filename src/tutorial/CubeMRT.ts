import IRendererScene from "../engine/vox/scene/IRendererScene";
import { MouseEvent, EventBase, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import VoxModuleShell from "../common/VoxModuleShell";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";



const vertShaderCode0 = `#version 300 es
precision mediump float;
layout(location = 0) in vec3 a_vs;
layout(location = 1) in vec2 a_uvs;
layout(location = 2) in vec3 a_nvs;
uniform mat4 u_objMat;
uniform mat4 u_viewMat;
uniform mat4 u_projMat;
out vec3 v_nv;
out vec2 v_uvs;
void main()
{
    gl_Position = u_projMat * u_viewMat * u_objMat * vec4(a_vs,1.0);
    v_nv = a_nvs;
    v_uvs = a_uvs;
}
`;
const fragShaderCode0 = `#version 300 es
precision mediump float;
uniform sampler2D u_sampler0;
uniform vec4 u_color;
in vec3 v_nv;
in vec2 v_uvs;
layout(location = 0) out vec4 OutputColor0;
layout(location = 1) out vec4 OutputColor1;
layout(location = 2) out vec4 OutputColor2;
layout(location = 3) out vec4 OutputColor3;
layout(location = 4) out vec4 OutputColor4;
layout(location = 5) out vec4 OutputColor5;
void main()
{
    OutputColor0 = texture(u_sampler0, v_uvs.xy) * u_color;
    OutputColor1 = vec4(1.0,0.0,0.0,1.0);
    OutputColor2 = vec4(0.0,1.0,0.0,1.0);
    OutputColor3 = vec4(0.0,0.0,1.0,1.0);
    OutputColor4 = vec4(1.0,0.0,1.0,1.0);
    OutputColor5 = vec4(1.0,1.0,0.0,1.0);
}
`;

const vertShaderCode1 = `#version 300 es
precision mediump float;
layout(location = 0) in vec3 a_vs;
layout(location = 1) in vec3 a_nvs;
uniform mat4 u_objMat;
uniform mat4 u_viewMat;
uniform mat4 u_projMat;
out vec3 v_nv;
void main()
{
    gl_Position = u_projMat * u_viewMat * u_objMat * vec4(a_vs,1.0);
    v_nv = a_nvs;
}
`;
const fragShaderCode1 = `#version 300 es
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
export class CubeMRT {
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
        RD.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;

        let rparam = VoxRScene.createRendererSceneParam();
        rparam.setAttriAntialias(true);
        rparam.setCamPosition(1000.0, 1000.0, 1000.0);
        rparam.setCamProject(45, 20.0, 9000.0);
        this.m_rscene = VoxRScene.createRendererScene(rparam).setAutoRunning(true);
		
	}
	
    private getTexByUrl(url: string): IRenderTexture {

        let tex = this.m_rscene.textureBlock.createImageTex2D();
        let img = new Image();
        img.onload = (): void => { tex.setDataFromImage(img); };
        img.src = url;
        return tex;
    }
	
    private createWriteMaterial(texUrl: string): IRenderMaterial {

        let material = VoxMaterial.createShaderMaterial("cubeMRT_write_shader");
        material.setFragShaderCode(fragShaderCode0);
        material.setVertShaderCode(vertShaderCode0);
        material.addUniformDataAt("u_color", new Float32Array([1.0, 1.0, 1.0, 1.0]));
        material.setTextureList([this.getTexByUrl( texUrl )]);

        return material;
    }
    private createReadMaterial(cubeRTTTex: IRenderTexture): IRenderMaterial {

        let material = VoxMaterial.createShaderMaterial("cubeMRT_read_shader");
        material.setFragShaderCode(fragShaderCode1);
        material.setVertShaderCode(vertShaderCode1);
        material.addUniformDataAt("u_color", new Float32Array([1.0, 1.0, 1.0, 1.0]));
        material.setTextureList([cubeRTTTex]);

        return material;
    }
	private init3DScene(): void {

		const rsc = this.m_rscene;
		
		// add some entities into 3d scene

		let boxMaterial = this.createWriteMaterial("static/assets/box.jpg");
        let cube = VoxEntity.createCube(200, boxMaterial);
        rsc.addEntity(cube);

		let planeMaterial = this.createWriteMaterial("static/assets/default.jpg");
        let plane = VoxEntity.createXOZPlane(-350, -350, 700, 700, planeMaterial);
        rsc.addEntity(plane);


		// 构建 CubeMRT 渲染过程

		let fboIns = this.m_rscene.createFBOInstance();
        fboIns.setClearRGBAColor4f(0.1, 0.2, 0.1, 1.0);      // set rtt background clear rgb(r=0.3,g=0.0,b=0.0) color
        fboIns.createFBOAt(0, 512, 512, true, false);
        fboIns.setRenderToCubeRTTTextureAt(0);                   // apply the first cube rtt texture, add apply the fbo framebuffer color attachment 0
        fboIns.setRProcessIDList([0], false);
		rsc.prependRenderNode( fboIns );

		// 应用 CubeMRT 纹理到 sphere
		let sphCubeMrtReadMaterial = this.createReadMaterial(fboIns.getRTTAt(0));
		let sphDisp = VoxEntity.createSphere(200,20,20, sphCubeMrtReadMaterial);
        rsc.addEntity(sphDisp, 1);
		
	}
}

export default CubeMRT;

// for running instance
if (!(document as any).demoState) {
	let ins = new CubeMRT();
	ins.initialize();
	document.title = "tutorial:CubeMRT";
}
