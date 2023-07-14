
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

declare var CoRenderer: ICoRenderer;
declare var CoRScene: ICoRScene;

/**
 * pbr testing renderer
 */
export class DemoPBRViewer {
	private m_rscene: IRendererScene = null;
	private m_scData: any;
	constructor() {}

	initialize(): void {
		document.oncontextmenu = function(e) {
			e.preventDefault();
		};
		// document.onmousedown = (evt: any): void => {
		// 	this.mouseDown(evt);
		// };
		let scDataJsonUrl = "static/assets/scene/sc01.json";
		let textLoader = new TextPackedLoader(1, (): void => {
			this.m_scData = JSON.parse(textLoader.getDataByUrl(scDataJsonUrl) as string);
			this.initEngineModule();
		}).load(scDataJsonUrl);
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
			this.m_rscene.setClearUint24Color(0x888888);

			// let axis = CoRScene.createAxis3DEntity();
			// this.m_rscene.addEntity(axis);
		}
	}
	private m_node: ViewerSceneNode = null;
	private loadModel(): void {
		let baseUrl = "static/assets/obj/";
		let url = baseUrl + "apple.obj";
		let node = new ViewerSceneNode(this.m_rscene);
		node.initialize( this.m_scData );

		node.loadGeomModels([url]);
		this.m_node = node;
		this.m_rscene.appendRenderNode(node);
	}
	private mouseDown(evt: any): void {}
	run(): void {
		if (this.m_rscene != null) {
			this.m_rscene.run();
		}
	}
}

export default DemoPBRViewer;
