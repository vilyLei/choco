import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";
import IGeomModelData from "../engine/vox/mesh/IGeomModelData";

export class MeshCreation {

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

	private testHasNotIndicesMesh(): void {
		// 不推荐的模型数据组织形式
		let material = VoxMaterial.createDefaultMaterial();
		material.normalEnabled = true;
		material.setTextureList([this.getTexByUrl("static/assets/broken_iron.jpg")]);

		let nvs = new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]);
		let uvs = new Float32Array([1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]);
		let vs = new Float32Array([-1, 0, 1, 1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, -1]);
		let model: IGeomModelData = {vertices: vs, uvsList: [uvs], normals: nvs};
		let mesh = VoxRScene.createDataMeshFromModel(model, material);

		let scale = 150.0;
		let entity = VoxEntity.createDisplayEntity();
		entity.setMaterial(material);
		entity.setMesh(mesh);
		entity.setScaleXYZ(scale, scale, scale);
		this.m_rscene.addEntity(entity);
	}
	private testHasIndicesMesh(): void {
		// 推荐的模型数据组织形式
		let material = VoxMaterial.createDefaultMaterial();
		// material.normalEnabled = true;
		material.setTextureList([this.getTexByUrl("static/assets/box.jpg")]);

		let nvs = new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]);
		let uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
		let vs = new Float32Array([10, 0, -10, -10, 0, -10, -10, 0, 10, 10, 0, 10]);
		let ivs = new Uint16Array([0, 1, 2, 0, 2, 3]);
		let model: IGeomModelData = {vertices: vs, uvsList: [uvs], normals: nvs, indices: ivs};
		// let mesh = VoxRScene.createDataMeshFromModel(model, material);
		let mesh = VoxRScene.createDataMeshFromModel(model);

		let scale = 20.0;
		let entity = VoxEntity.createDisplayEntity();
		entity.setMaterial(material);
		entity.setMesh(mesh);
		entity.setScaleXYZ(scale, scale, scale);
		this.m_rscene.addEntity(entity);
	}
    private init3DScene(): void {
        let flag = true;
        if(flag) {
            this.testHasIndicesMesh();
        }else {
            this.testHasNotIndicesMesh();
        }
        
    }
}

export default MeshCreation;

// for running instance
if(!((document as any).demoState)) {
    let ins = new MeshCreation();
    ins.initialize();
}