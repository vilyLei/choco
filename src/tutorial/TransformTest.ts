import IRendererScene from "../engine/vox/scene/IRendererScene";
import { EventBase, MouseEvent, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMath } from "../engine/cospace/math/VoxMath";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";
import IMouseEvent from "../engine/vox/event/IMouseEvent";

import { PBREnvLightingMaterialWrapper } from "./material/PBREnvLightingMaterialWrapper";
import ITransformEntity from "../engine/vox/entity/ITransformEntity";
import IVector3D from "../engine/vox/math/IVector3D";
import IEventBase from "../engine/vox/event/IEventBase";
import { BinaryTextureLoader } from "../engine/cospace/modules/loaders/BinaryTextureLoader";

class AnimationScene {

    private m_rscene: IRendererScene;
    private m_envTex: IRenderTexture;
    private m_sphEntity: ITransformEntity = null;
    private m_entities: ITransformEntity[] = [];
    
    private m_time = 0.0;
    constructor(sc: IRendererScene, envTex: IRenderTexture) {
        this.m_rscene = sc;
        this.m_envTex = envTex;
    }
    initialize(): void {

        this.m_time = Date.now();
        let begin = VoxMath.createVec3(-300, 0, 300);
        let offsetV = VoxMath.createVec3(30, 0, -30);
        for (let i = 0; i < 20; ++i) {
            this.createSphere(15, VoxMath.createVec3().copyFrom(offsetV).scaleBy(i).addBy(begin));
        }
        this.m_rscene.addEventListener(EventBase.ENTER_FRAME, this, this.animate);
    }
    private createSphere(radius: number, pv: IVector3D): ITransformEntity {

        let material = this.makeMaterial(Math.random(), 0.9, 1.3);
        material.setTextureList([this.m_envTex]);
        material.initializeByCodeBuf(material.getTextureAt(0) != null);

        let sph = this.m_sphEntity;
        if (this.m_sphEntity != null) {
            sph = VoxEntity.createDisplayEntity();
            sph.setMaterial(material);
            sph.copyMeshFrom(this.m_sphEntity);
        } else {
            sph = this.m_sphEntity = VoxEntity.createSphere(radius, 20, 20, material);
        }

        sph.setPosition(pv);
        this.m_rscene.addEntity(sph, 1);

        this.m_entities.push(sph);
        return sph;
    }
    private animate(evt: IEventBase = null): void {

        let ls = this.m_entities;
        let len = this.m_entities.length;
        let pos = VoxMath.createVec3();
        let time = (Date.now() - this.m_time) * 0.003;
        let curveFactor = Math.abs(Math.cos(time * 0.1)) * 0.3 + 0.2;
        for (let i = 0; i < len; ++i) {
            const factor = Math.sin(i * curveFactor + time);
            const et = ls[i];
            et.getPosition(pos);
            pos.y = factor * 100.0;
            let scale = Math.abs(factor * 1.5);
            if(scale < 0.3) {
                scale = 0.3;
            }
            et.setPosition(pos);
            et.setScaleXYZ(scale, scale, scale);
        }
    }
    private makeMaterial(metallic: number, roughness: number, ao: number): IRenderMaterial {
        let dis = 700.0;
        let disZ = 400.0;
        let posList = [
            VoxMath.createVec3(-dis, dis, disZ),
            VoxMath.createVec3(dis, dis, disZ),
            VoxMath.createVec3(-dis, -dis, disZ),
            VoxMath.createVec3(dis, -dis, disZ)
        ];
        let colorSize = 300.0;
        let colorList = [
            VoxMaterial.createColor4().randomRGB(colorSize),
            VoxMaterial.createColor4().randomRGB(colorSize),
            VoxMaterial.createColor4().randomRGB(colorSize),
            VoxMaterial.createColor4().randomRGB(colorSize)
        ];

        let material = new PBREnvLightingMaterialWrapper();
        material.setMetallic(metallic);
        material.setRoughness(roughness);
        material.setAO(ao);

        for (let i = 0; i < 4; ++i) {
            material.setPosAt(i, posList[i]);
            material.setColorAt(i, colorList[i]);
        }
        material.setAlbedoColor(VoxMaterial.createColor4().randomRGB(1.0));
        return material.material;
    }
}

export class TransformTest {

    private m_rscene: IRendererScene = null;
    private m_envMap: IRenderTexture;
    constructor() { }

    initialize(): void {

        new VoxModuleShell().initialize(
            (): void => { this.initMouseInteract(); },
            (): void => { this.initRenderer(); },
            (): void => { this.init3DScene(); }
        );
    }
    private mouseDown(evt: IMouseEvent):void {
        this.m_rscene.setClearColor(VoxMaterial.createColor4().randomRGB(0.3));
    }
    private initMouseInteract(): void {

        const mi = VoxUIInteraction.createMouseInteraction();
        mi.initialize(this.m_rscene, 0, true).setAutoRunning(true);
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
        this.m_rscene = VoxRScene.createRendererScene(rparam).setAutoRunning(true);
        this.m_rscene.setClearUint24Color(0x888888);

        this.m_rscene.addEventListener(MouseEvent.MOUSE_DOWN, this, this.mouseDown);
    }

    private initRenderingData(): void {
        
        let envMapUrl = "static/assets/bytes/spe.mdf";
        let loader = new BinaryTextureLoader(this.m_rscene);
        loader.loadTextureWithUrl(envMapUrl);
        this.m_envMap = loader.texture;
    }
    private init3DScene(): void {

        this.initRenderingData();
        new AnimationScene(this.m_rscene, this.m_envMap).initialize();
    }
}

export default TransformTest;

// for running instance
if(!((document as any).demoState)) {
    let ins = new TransformTest();
    ins.initialize();
}