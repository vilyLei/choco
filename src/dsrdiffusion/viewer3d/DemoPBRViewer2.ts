import IRendererScene from "../../engine/vox/scene/IRendererScene";
import { IMouseInteraction } from "../../engine/cospace/voxengine/ui/IMouseInteraction";
import { ICoRenderer } from "../../engine/cospace/voxengine/ICoRenderer";
import { CoMaterialContextParam, ICoRScene } from "../../engine/cospace/voxengine/ICoRScene";

import { TextPackedLoader } from "../../engine/cospace/modules/loaders/TextPackedLoader";
import { CoModuleVersion, CoModuleLoader } from "../../engine/cospace/app/utils/CoModuleLoader";
import { ViewerSceneNode } from "./scene/ViewerSceneNode";
import { VoxRScene } from "../../engine/cospace/voxengine/VoxRScene";
import { VoxMath } from "../../engine/cospace/math/VoxMath";
import IVector3D from "../../engine/vox/math/IVector3D";
import { VoxUIInteraction } from "../../engine/cospace/voxengine/ui/VoxUIInteraction";

import { CoGeomDataType, CoModelTeamLoader } from "../../engine/cospace/app/common/CoModelTeamLoader";
import { CoEntityLayouter2 } from "../../engine/cospace/app/common/CoEntityLayouter2";
import { VoxMaterial } from "../../engine/cospace/voxmaterial/VoxMaterial";
import IRenderMaterial from "../../engine/vox/render/IRenderMaterial";
import ITransformEntity from "../../engine/vox/entity/ITransformEntity";
import {PBRParam, PBRMapUrl, PBRMaterialCtx} from "./material/PBRMaterialCtx";

declare var CoRenderer: ICoRenderer;
declare var CoRScene: ICoRScene;

class ModelData {
	models: CoGeomDataType[];
	transforms: Float32Array[];
	constructor() {}
}
/**
 * pbr testing renderer
 */
export class DemoPBRViewer2 {
	private m_rscene: IRendererScene = null;
	private m_scData: any;
	private m_models: ModelData[] = [];
	readonly pbrCtx = new PBRMaterialCtx();
	constructor() {}

	initialize(): void {
		document.oncontextmenu = function(e) {
			e.preventDefault();
		};
		// document.onmousedown = (evt: any): void => {
		// 	this.mouseDown(evt);
		// };
		// let scDataJsonUrl = "static/assets/scene/dsrdCfg.json";
		// let textLoader = new TextPackedLoader(1, (): void => {
		// 	this.m_scData = JSON.parse(textLoader.getDataByUrl(scDataJsonUrl) as string);
		// 	this.initEngineModule();
		// }).load(scDataJsonUrl);
		this.initEngineModule();
	}

	private initEngineModule(): void {
		let url = "static/cospace/engine/uiInteract/CoUIInteraction.umd.js";
		let mouseInteractML = new CoModuleLoader(2, (): void => {});

		let url0 = "static/cospace/engine/renderer/CoRenderer.umd.js";
		let url1 = "static/cospace/engine/rscene/CoRScene.umd.js";
		let url2 = "static/cospace/math/CoMath.umd.js";
		let url8 = "static/cospace/coMaterial/CoMaterial.umd.js";

		new CoModuleLoader(2, (): void => {
			new CoModuleLoader(2, (): void => {
				VoxRScene.initialize();
				if (VoxRScene.isEnabled()) {
					console.log("engine modules loaded ...");

					VoxMath.initialize();

					this.initRenderer();
					this.initMouseInteract();
					this.loadModel();
				}
			})
				.load(url2)
				.load(url8);
		})
			.addLoader(mouseInteractML)
			.load(url0)
			.load(url1);

		mouseInteractML.load(url);
	}
	protected m_mi: IMouseInteraction = null;
	private m_posV0: IVector3D = null;
	private m_posV1: IVector3D = null;
	private initMouseInteract(): void {
		const mi = VoxUIInteraction.createMouseInteraction();
		mi.initialize(this.m_rscene, 0).setAutoRunning(true, 0);
		this.m_mi = mi;
		this.m_posV0 = VoxMath.createVec3();
		this.m_posV1 = VoxMath.createVec3();
	}
	private initRenderer(): void {
		if (this.m_rscene == null) {
			let RendererDevice = CoRenderer.RendererDevice;
			RendererDevice.SHADERCODE_TRACE_ENABLED = true;
			RendererDevice.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;
			RendererDevice.SetWebBodyColor("#888888");

			let rparam = CoRScene.createRendererSceneParam();
			rparam.setAttriAntialias(!RendererDevice.IsMobileWeb());
			rparam.setCamPosition(500.0, 500.0, 500.0);
			rparam.setCamProject(45, 50.0, 9000.0);
			this.m_rscene = CoRScene.createRendererScene(rparam, 3);
			// this.m_rscene.setClearUint24Color(0x888888);
			this.m_rscene.setClearRGBColor3f(0.2, 0.2, 0.2);

			// let axis = CoRScene.createAxis3DEntity();
			// this.m_rscene.addEntity(axis);
		}
	}
	private m_modelLoader = new CoModelTeamLoader();
	protected m_layouter = new CoEntityLayouter2();
	private m_materialEanbled = false;
	private loadModel(): void {
		let baseUrl = "static/assets/obj/";
		let url = baseUrl + "apple.obj";

		let scDataJsonUrl = "static/assets/scene/dsrdCfg02.json";
		let textLoader = new TextPackedLoader(1, (): void => {
			this.m_scData = JSON.parse(textLoader.getDataByUrl(scDataJsonUrl) as string);
			this.pbrCtx.pbrModule.envMapUrl = "static/bytes/spb.bin";
			this.pbrCtx.pbrModule.preloadMaps = false;
			this.pbrCtx.initialize(this.m_rscene, this.m_scData.material, (): void => {
				console.log("pbrCtx.initialize() ...");
				this.m_materialEanbled = true;
				this.initScene();
			});
		}).load(scDataJsonUrl);

		this.loadGeomModels([url]);
	}
	private mouseDown(evt: any): void {}

	private initScene(): void {
		if (this.m_models.length > 0 && this.m_materialEanbled) {
			this.m_layouter.layoutReset();
			for (let i = 0; i < this.m_models.length; ++i) {
				let model = this.m_models[i];
				let models = model.models;
				let transforms = model.transforms;
				this.createEntity(models[i], transforms != null ? transforms[i] : null, 1.0);
			}
			this.m_layouter.layoutUpdate(200);
		}
	}
	loadGeomModels(urls: string[]): void {
		if (this.m_modelLoader == null) {
			this.m_modelLoader = new CoModelTeamLoader();
		}
		const loader = this.m_modelLoader;
		console.log("loadGeomModels(), urls: ", urls);
		loader.load(urls, (models: CoGeomDataType[], transforms: Float32Array[]): void => {
			for (let i = 0; i < models.length; ++i) {
				let md = new ModelData();
				md.models = models;
				md.transforms = transforms;
				this.m_models.push(md);
			}
			this.initScene();
		});
	}
	private createEntity(model: CoGeomDataType, transform: Float32Array = null, index: number = 1.0, url = ""): ITransformEntity {
		console.log("createEntity(), model: ", model);
		// let rst = CoRenderer.RendererState;
		const MouseEvent = CoRScene.MouseEvent;
		let material: IRenderMaterial;

		let flag = false;
		flag = this.pbrCtx.isMCTXEnabled();
		// flag = false;
		if (flag) {
			// material = this.pbrCtx.pbrModule.createMaterial(true);
			let pbrParam: PBRParam = {};
			pbrParam.roughness = 0.5;
			pbrParam.pipeline = true;
			pbrParam.scatterEnabled = false;
			pbrParam.toneMapingExposure = 3.0;
			pbrParam.fogEnabled = false;
			pbrParam.albedoColor = [0.1,0.9,0.1];
			let pbrMapUrl: PBRMapUrl = {};
			// pbrMapUrl.diffuseMap = "static/assets/white.jpg";
			pbrMapUrl.diffuseMap = "";
			material = this.pbrCtx.pbrModule.createMaterial(true, pbrParam, pbrMapUrl);
		} else {
			let m = VoxMaterial.createDefaultMaterial(true);
			m.setRGB3f(0.1,1.0,0.1);
			material = m;
		}

		let mesh = CoRScene.createDataMeshFromModel(model, material);
		let entity = CoRScene.createMouseEventEntity();
		entity.setMaterial(material);
		entity.setMesh(mesh);
		// entity.setRenderState(rst.NONE_CULLFACE_NORMAL_STATE);
		this.m_rscene.addEntity(entity);

		// entity.addEventListener(MouseEvent.MOUSE_OVER, this, this.mouseOverTargetListener);
		// entity.addEventListener(MouseEvent.MOUSE_OUT, this, this.mouseOutTargetListener);
		this.m_layouter.layoutAppendItem(entity, CoRScene.createMat4(transform));

		return entity;
	}
	run(): void {
		if (this.m_rscene != null) {
			this.m_rscene.run();
		}
	}
}

export default DemoPBRViewer2;
