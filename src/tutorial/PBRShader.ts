import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";
import { BinaryTextureLoader } from "../engine/cospace/modules/loaders/BinaryTextureLoader";

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
void main()
{
    FragColor0 = texture(u_sampler0, v_uv.xy) * u_color;
}
`;
export class PBRShader {

    private m_rscene: IRendererScene = null;
    constructor() { }

    initialize(): void {

        new VoxModuleShell().initialize(
            (): void => { this.initMouseInteract(); },
            (): void => { this.initRenderer(); },
            (): void => { this.init3DScene(); }
        );
    }
    private initMouseInteract(): void {

        const mi = VoxUIInteraction.createMouseInteraction();
        mi.initialize(this.m_rscene, 0, true);
        mi.setAutoRunning(true);
    }
    private initRenderer(): void {

        let RD = VoxRScene.RendererDevice;
        RD.SHADERCODE_TRACE_ENABLED = true;
        RD.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;
        RD.SetWebBodyColor("#888888");

        let rparam = VoxRScene.createRendererSceneParam();
        rparam.setAttriAntialias(!RD.IsMobileWeb());
        rparam.setCamPosition(1000.0, 1000.0, 1000.0);
        rparam.setCamProject(45, 20.0, 9000.0);
        this.m_rscene = VoxRScene.createRendererScene(rparam);
    }

    private getTexByUrl(url: string): IRenderTexture {

        let tex = this.m_rscene.textureBlock.createImageTex2D(64, 64, false);
        let img = new Image();
        img.onload = (evt: any): void => {
            tex.setDataFromImage(img);
        };
        img.src = url;
        return tex;
    }

    private createMaterial(r: number, g: number, b: number, texUrl: string): IRenderMaterial {

        let material = VoxMaterial.createShaderMaterial("tutorial_shader");
        material.setFragShaderCode(fragShaderCode);
        material.setVertShaderCode(vertShaderCode);
        material.addUniformDataAt("u_color", new Float32Array([r, g, b, 1.0]));
        material.setTextureList([this.getTexByUrl( texUrl )]);

        return material;
    }
    private init3DScene(): void {
        
        let material = this.createMaterial(0.1, 1.0, 0.2, "static/assets/metal.png");

        let cube = VoxEntity.createCube(200, material);
        cube.setXYZ(-300, 200, 0);
        this.m_rscene.addEntity(cube);

        let sphMaterial = this.createMaterial(1.0, 0.1, 0.2, "static/assets/box.jpg");

        let sph = VoxEntity.createSphere(150, 20, 20, false, sphMaterial);
        sph.setXYZ(300, 200, 0);
        this.m_rscene.addEntity(sph);
    }
    run(): void {
        if (this.m_rscene != null) {
            this.m_rscene.run();
        }
    }
}

export default PBRShader;