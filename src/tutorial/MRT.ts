import IRendererScene from "../engine/vox/scene/IRendererScene";
import { MouseEvent, EventBase, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import VoxModuleShell from "../common/VoxModuleShell";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";



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
uniform vec4 u_color;
in vec2 v_uv;
layout(location = 0) out vec4 FragColor0;
layout(location = 1) out vec4 FragColor1;
void main()
{
vec4 color = texture(u_sampler0, v_uv);
FragColor0 = vec4(color.rgb,1.0) * u_color;
FragColor1 = vec4(1.0 - color.rgb * color.rgb * color.rgb,1.0);
}
`;

export class MRT {
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
	
    private createMaterial(texUrl: string): IRenderMaterial {

        let material = VoxMaterial.createShaderMaterial("mrt_test_shader");
        material.setFragShaderCode(fragShaderCode);
        material.setVertShaderCode(vertShaderCode);
        material.addUniformDataAt("u_color", new Float32Array([1.0, 1.0, 1.0, 1.0]));
        material.setTextureList([this.getTexByUrl( texUrl )]);

        return material;
    }
	private init3DScene(): void {

		const rsc = this.m_rscene;
		
		// add some entities into 3d scene

		let boxMaterial = this.createMaterial("static/assets/box.jpg");
        let cube = VoxEntity.createCube(200, boxMaterial);
        rsc.addEntity(cube);

		let planeMaterial = this.createMaterial("static/assets/default.jpg");
        let plane = VoxEntity.createXOZPlane(-350, -350, 700, 700, planeMaterial);
        rsc.addEntity(plane);


		// 构建 MRT 渲染过程

		let fboIns = this.m_rscene.createFBOInstance();
        fboIns.setClearRGBAColor4f(0.1, 0.2, 0.1, 1.0);      // set rtt background clear rgb(r=0.3,g=0.0,b=0.0) color
        fboIns.createFBOAt(0, 512, 512, true, false);
        fboIns.setRenderToRTTTextureAt(0, 0);                   // apply the first rtt texture, add apply the fbo framebuffer color attachment 0
        fboIns.setRenderToRTTTextureAt(1, 1);                   // apply the second rtt texture, add apply the fbo framebuffer color attachment 1
        fboIns.setRProcessIDList([0], false);
		rsc.prependRenderNode( fboIns );

		// 应用 MRT 纹理到 cube
		let mrtCubeMaterial0 = VoxMaterial.createDefaultMaterial();
        mrtCubeMaterial0.setTextureList([fboIns.getRTTAt(0)]);		
		let rttCube0 = VoxEntity.createCube(200, mrtCubeMaterial0);
		rttCube0.setXYZ(-150, 0, -150);
        rsc.addEntity(rttCube0, 1);
		
		let rttCubeMaterial1 = VoxMaterial.createDefaultMaterial();
        rttCubeMaterial1.setTextureList([fboIns.getRTTAt(1)]);		
		let rttCube1 = VoxEntity.createCube(200, rttCubeMaterial1);
		rttCube1.setXYZ(150, 0, 150);
        rsc.addEntity(rttCube1, 1);
	}
}

export default MRT;

// for running instance
if (!(document as any).demoState) {
	let ins = new MRT();
	ins.initialize();
	document.title = "tutorial:MRT";
}
