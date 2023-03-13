import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene, RendererState } from "../engine/cospace/voxengine/VoxRScene";

import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";

import { CoGeomDataType, CoModelTeamLoader } from "../engine/cospace/app/common/CoModelTeamLoader";
import IDisplayEntity from "../engine/vox/entity/IDisplayEntity";
import { CoEntityLayouter } from "../engine/cospace/app/common/CoEntityLayouter";
import { VoxMath } from "../engine/cospace/math/VoxMath";

export class LoadModel {
	private m_rscene: IRendererScene = null;
    private m_teamLoader = new CoModelTeamLoader();
    private m_layouter = new CoEntityLayouter();
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
		rparam.setCamPosition(1000.0, 1000.0, 1000.0);
		rparam.setCamProject(45, 20.0, 9000.0);
		rparam.setAttriAntialias(true);
		rparam.setAttriStencil(true);
		this.m_rscene = VoxRScene.createRendererScene(rparam);
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
	private init3DScene(): void {
		const rsc = this.m_rscene;
		this.initModels();
	}
	
    private initModels(): void {
		
        let url0 = "static/assets/fbx/base4.fbx";
        let loader = this.m_teamLoader;

        loader.load([url0], (models: CoGeomDataType[], transforms: Float32Array[]): void => {

            this.m_layouter.layoutReset();
            for (let i = 0; i < models.length; ++i) {
                this.createEntity(models[i], transforms != null ? transforms[i] : null, 0.05);
            }
            this.m_layouter.layoutUpdate(300, VoxMath.createVec3(-400, 0, 0));

        });
    }
    protected createEntity(model: CoGeomDataType, transform: Float32Array = null, uvScale: number = 1.0): IDisplayEntity {
        if (model != null) {
            console.log("createEntity(), model: ", model);

            let material = VoxMaterial.createDefaultMaterial();
            material.normalEnabled = true;
            material.setUVScale(uvScale, uvScale);
            material.setTextureList([
                this.getTexByUrl("static/assets/box.jpg")
            ]);
			
            let mesh = VoxRScene.createDataMeshFromModel(model, material);
            let entity = VoxEntity.createDisplayEntity();
            entity.setRenderState(RendererState.NONE_CULLFACE_NORMAL_STATE);
            entity.setMesh(mesh);
            entity.setMaterial(material);

            this.m_rscene.addEntity(entity);
            this.m_layouter.layoutAppendItem(entity, VoxMath.createMat4(transform));
            return entity;
        }
    }
	run(): void {
		if(this.m_rscene) {
			this.m_rscene.run();
		}
	}
}

export default LoadModel;

// for running instance
if (!(document as any).demoState) {
	let ins = new LoadModel();
	ins.initialize();
}
