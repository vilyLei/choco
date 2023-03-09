import IRendererScene from "../engine/vox/scene/IRendererScene";
import { MouseEvent, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";
import IMouseEvent from "../engine/vox/event/IMouseEvent";
import IMouseEventEntity from "../engine/vox/entity/IMouseEventEntity";

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

class MaterialObj {
    
    material: IRenderMaterial;
    colorData: Float32Array;
    constructor(m: IRenderMaterial, d: Float32Array) {
        this.material = m;
        this.colorData = d;
    }
    setRGB3f(r: number, g: number, b: number): void {
        const ls = this.colorData;
        ls[0] = r;
        ls[1] = g;
        ls[2] = b;
    }
}

export class MouseEventTest {

    private m_rscene: IRendererScene = null;
    private m_materialObjs: MaterialObj[] = [];
    constructor() { }

    initialize(): void {

        new VoxModuleShell().initialize(
            (): void => { this.initMouseInteract(); },
            (): void => { this.initRenderer(); },
            (): void => { this.init3DScene(); }
        );
    }
    private mouseDown(evt: IMouseEvent):void {
        console.log("evt: ", evt);
        this.m_rscene.setClearRGBColor3f(Math.random() * 0.3, Math.random() * 0.3, Math.random() * 0.3);
    }
    private initMouseInteract(): void {

        const mi = VoxUIInteraction.createMouseInteraction();
        mi.initialize(this.m_rscene).setAutoRunning(true);
    }
    private initRenderer(): void {

        let RD = VoxRScene.RendererDevice;
        RD.SHADERCODE_TRACE_ENABLED = true;
        RD.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;

        let rparam = VoxRScene.createRendererSceneParam();
        rparam.setCamPosition(1000.0, 1000.0, 1000.0);
        rparam.setCamProject(45, 20.0, 9000.0);
        this.m_rscene = VoxRScene.createRendererScene(rparam).setAutoRunning(true);
        this.m_rscene.setClearUint24Color(0x888888);

        this.m_rscene.addEventListener(MouseEvent.MOUSE_DOWN, this, this.mouseDown);
    }

    private getTexByUrl(url: string): IRenderTexture {

        let tex = this.m_rscene.textureBlock.createImageTex2D();
        let img = new Image();
        img.onload = (): void => {
            tex.setDataFromImage(img);
        };
        img.src = url;
        return tex;
    }

    private createMaterial(r: number, g: number, b: number, texUrl: string): MaterialObj {

        let data = new Float32Array([r, g, b, 1.0]);
        let material = VoxMaterial.createShaderMaterial("tutorial_shader");
        material.setFragShaderCode(fragShaderCode);
        material.setVertShaderCode(vertShaderCode);
        material.addUniformDataAt("u_color", data);
        material.setTextureList([this.getTexByUrl( texUrl )]);
        let obj = new MaterialObj(material, data);
        this.m_materialObjs.push( obj );
        return obj;
    }
    private entityMouseOver(evt: IMouseEvent): void {
        console.log("entityMouseDown(), evt.uuid: ", evt.uuid);
        if(evt.uuid == "cube") {
            this.m_materialObjs[0].setRGB3f(Math.random(), Math.random(), Math.random());
        }else if(evt.uuid == "sph") {
            this.m_materialObjs[1].setRGB3f(Math.random(), Math.random(), Math.random());
        }
    }
    private entityMouseOut(evt: IMouseEvent): void {
        console.log("entityMouseDown(), evt.uuid: ", evt.uuid);
        if(evt.uuid == "cube") {
            this.m_materialObjs[0].setRGB3f(Math.random(), Math.random(), Math.random());
        }else if(evt.uuid == "sph") {
            this.m_materialObjs[1].setRGB3f(Math.random(), Math.random(), Math.random());
        }
    }
    private initEntityMouseEvent(entity: IMouseEventEntity, uuid: string): void {

        entity.uuid = uuid;
        entity.mouseEnabled = true;
        entity.addEventListener(MouseEvent.MOUSE_OVER, this, this.entityMouseOver);
        entity.addEventListener(MouseEvent.MOUSE_OUT, this, this.entityMouseOut);
    }
    private init3DScene(): void {
        
        let materialObj = this.createMaterial(0.1, 1.0, 0.2, "static/assets/metal.png");

        let cube = VoxEntity.createCube(200, materialObj.material);
        cube.setXYZ(-300, 200, 0);
        this.m_rscene.addEntity(cube);
        this.initEntityMouseEvent(cube, "cube");

        let sphMaterial = this.createMaterial(1.0, 0.1, 0.2, "static/assets/box.jpg");

        let sph = VoxEntity.createSphere(150, 20, 20, sphMaterial.material);
        sph.setXYZ(300, 200, 0);
        this.m_rscene.addEntity(sph);
        this.initEntityMouseEvent(sph, "sph");
    }
}

export default MouseEventTest;

// for running instance
if(!((document as any).demoState)) {
    let ins = new MouseEventTest();
    ins.initialize();
}