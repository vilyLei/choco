import IVector3D from "../../engine/vox/math/IVector3D";
import { IVoxUIScene } from "../../engine/voxui/scene/IVoxUIScene";

import { CoModuleVersion, CoModuleLoader } from "../../engine/cospace/app/utils/CoModuleLoader";
import IRenderTexture from "../../engine/vox/render/texture/IRenderTexture";
import ITransformEntity from "../../engine/vox/entity/ITransformEntity";
import { CoGeomDataType } from "../../engine/cospace/app/CoSpaceAppData";

import IRendererScene from "../../engine/vox/scene/IRendererScene";
import IRendererSceneGraph from "../../engine/vox/scene/IRendererSceneGraph";

import { UserEditEvent } from "../../engine/modelEdit/event/UserEditEvent";
import { IButton } from "../../engine/voxui/button/IButton";
import { PostOutline } from "./effect/PostOutline";
import IRenderEntity from "../../engine/vox/render/IRenderEntity";
import { ICoTransformRecorder } from "../../engine/modelEdit/recorde/ICoTransformRecorder";
import { SelectionEvent, KeyboardEvent, Keyboard, MouseEvent, RendererDevice, VoxRScene } from "../../engine/cospace/voxengine/VoxRScene";

import { VoxUIInteraction } from "../../engine/cospace/voxengine/ui/VoxUIInteraction";
import { ISelectButtonGroup } from "../../engine/voxui/button/ISelectButtonGroup";
import { VoxUI } from "../../engine/voxui/VoxUI";
import { VoxMaterial } from "../../engine/cospace/voxmaterial/VoxMaterial";
import { Vector3D, VoxMath } from "../../engine/cospace/math/VoxMath";
import { ICoKeyboardInteraction } from "../../engine/cospace/voxengine/ui/ICoKeyboardInteraction";
import { IRectFrameQuery, ITransformController, IUIRectLine, VoxModelEdit } from "../../engine/modelEdit/VoxModelEdit";

import { CoModelTeamLoader } from "../../engine/cospace/app/common/CoModelTeamLoader";
import { ISelectionEntity } from "../../engine/voxui/component/ISelectionEntity";
import ISelectionEvent from "../../engine/vox/event/ISelectionEvent";
import URLFilter from "../../engine/cospace/app/utils/URLFilter";
import { HttpFileLoader } from "../../engine/cospace/modules/loaders/HttpFileLoader";
import { VecValueFilter } from "./VecValueFilter";
import { CoEntityLayouter2 } from "../../engine/cospace/app/common/CoEntityLayouter2";
import IDisplayEntityContainer from "../../engine/vox/entity/IDisplayEntityContainer";
import { IMouseInteraction } from "../../engine/cospace/voxengine/ui/IMouseInteraction";
import { ModelScene } from "./scene/ModelScene";
import { PBRParam, PBRMapUrl, PBRMaterialCtx } from "./material/PBRMaterialCtx";
import { TextPackedLoader } from "../../engine/cospace/modules/loaders/TextPackedLoader";
import IRenderMaterial from "../../engine/vox/render/IRenderMaterial";

class ModelData {
	models: CoGeomDataType[];
	transforms: Float32Array[];
	url: string;
	constructor() {}
}
/**
 * cospace renderer
 */
class DsrdViewerBase {
	protected m_verTool: CoModuleVersion = null;
	protected m_teamLoader = new CoModelTeamLoader();
	protected m_edit3DUIRScene: IRendererScene = null;
	protected m_outline: PostOutline;
	protected m_entityContainer: IDisplayEntityContainer;
	protected m_materialEanbled = false;
	protected m_scData: any = null;
	protected m_models: ModelData[] = [];
	readonly modelScene = new ModelScene();
	readonly pbrCtx = new PBRMaterialCtx();
	constructor() {}

	protected loadInfo(): void {
		let url = "static/cospace/info.json";
		url = URLFilter.filterUrl(url);
		let httpLoader = new HttpFileLoader();
		httpLoader.load(
			url,
			(data: object, url: string): void => {
				console.log("loadInfo loaded data: ", data);
				this.m_verTool = new CoModuleVersion(data);
				this.initEngineModule();
			},
			null,
			null,
			"json"
		);
	}
	private initEngineModule(): void {
		let url = "static/cospace/engine/uiInteract/CoUIInteraction.umd.js";
		let uiInteractML = new CoModuleLoader(2, (): void => {}, this.m_verTool);

		let url0 = "static/cospace/engine/renderer/CoRenderer.umd.js";
		let url1 = "static/cospace/engine/rscene/CoRScene.umd.js";
		let url2 = "static/cospace/math/CoMath.umd.js";
		let url3 = "static/cospace/ageom/CoAGeom.umd.js";
		let url5 = "static/cospace/comesh/CoMesh.umd.js";
		let url6 = "static/cospace/coentity/CoEntity.umd.js";
		let url7 = "static/cospace/particle/CoParticle.umd.js";
		let url8 = "static/cospace/coMaterial/CoMaterial.umd.js";
		let url9 = " static/cospace/cotexture/CoTexture.umd.js";
		let url10 = "static/cospace/ui/Lib_VoxUI.umd.js";
		let url11 = "static/cospace/modelEdit/Lib_VoxModelEdit.umd.js";

		new CoModuleLoader(
			2,
			(): void => {
				if (VoxRScene.isEnabled()) {
					new CoModuleLoader(
						3,
						(): void => {
							new CoModuleLoader(
								6,
								(): void => {
									console.log("modules loaded ...");

									VoxRScene.initialize();
									VoxMath.initialize();
									VoxModelEdit.initialize();

									this.initRenderer();
									this.modelScene.__$init();
									this.initMouseInteract();
									this.createEditEntity();
									this.initUIScene();

									let scDataJsonUrl = "static/assets/scene/dsrdCfg02.json";
									let textLoader = new TextPackedLoader(1, (): void => {
										this.m_scData = JSON.parse(textLoader.getDataByUrl(scDataJsonUrl) as string);
										this.pbrCtx.pbrModule.envMapUrl = "static/bytes/spb.bin";
										this.pbrCtx.pbrModule.preloadMaps = false;
										this.pbrCtx.initialize(this.m_rscene, this.m_scData.material, (): void => {
											console.log("pbrCtx.initialize() ...");
											this.m_materialEanbled = true;
											this.initModelScene();
										});
									}).load(scDataJsonUrl);
								},
								this.m_verTool
							)
								.load(url3)
								.load(url6)
								.load(url7)
								.load(url9)
								.load(url10)
								.load(url11);
						},
						this.m_verTool
					)
						.load(url2)
						.load(url5)
						.load(url8);
				}
			},
			this.m_verTool
		)
			.addLoader(uiInteractML)
			.load(url0)
			.load(url1);

		uiInteractML.load(url);
	}

	protected initModelScene(): void {
		if (this.m_models.length > 0 && this.m_materialEanbled) {
			this.m_layouter.layoutReset();
			for (let i = 0; i < this.m_models.length; ++i) {
				let model = this.m_models[i];
				let models = model.models;
				let transforms = model.transforms;
				// this.createEntity(models[i], transforms != null ? transforms[i] : null, 1.0);
				this.createEntity(models[i], transforms != null ? transforms[i] : null, model.url);
			}
			this.m_layouter.layoutUpdate(200);
		}
	}
	protected m_graph: IRendererSceneGraph = null;
	protected m_rscene: IRendererScene = null;
	protected m_uiScene: IVoxUIScene = null;

	protected m_mi: IMouseInteraction = null;
	private m_posV0: IVector3D = null;
	private m_posV1: IVector3D = null;
	private initMouseInteract(): void {
		const mi = VoxUIInteraction.createMouseInteraction();
		mi.initialize(this.m_rscene, 0).setAutoRunning(true, 1);
		this.m_mi = mi;
		this.m_posV0 = VoxMath.createVec3();
		this.m_posV1 = VoxMath.createVec3();
	}

	protected createDiv(px: number, py: number, pw: number, ph: number): HTMLDivElement {
		let div: HTMLDivElement = document.createElement("div");
		div.style.width = pw + "px";
		div.style.height = ph + "px";
		document.body.appendChild(div);
		div.style.display = "bolck";
		div.style.left = px + "px";
		div.style.top = py + "px";
		div.style.position = "absolute";
		div.style.display = "bolck";
		div.style.position = "absolute";
		return div;
	}
	protected initRenderer(): void {}
	protected initUIScene(): void {
		let uisc = (this.m_uiScene = VoxUI.createUIScene(this.m_graph));
		uisc.texAtlasNearestFilter = true;

		uisc.rscene.addEventListener(MouseEvent.MOUSE_BG_DOWN, this, this.uiMouseDownListener);
		uisc.rscene.addEventListener(MouseEvent.MOUSE_UP, this, this.uiMouseUpListener);
		uisc.rscene.addEventListener(MouseEvent.MOUSE_MOVE, this, this.uiMouseMoveListener);

		this.initUIEntities();

		this.m_entityQuery = VoxModelEdit.createRectFrameQuery();
		this.m_entityQuery.initialize(this.m_rscene);

		if (this.m_selectFrame == null) {
			this.m_selectFrame = VoxModelEdit.createUIRectLine();
			this.m_selectFrame.initialize(uisc.rscene);
			this.m_selectFrame.enable();
		}

		let rscene = this.m_rscene;
		// rscene.addEventListener(CoRScene.MouseEvent.MOUSE_BG_DOWN, this, this.mouseBgDownListener);
		rscene.addEventListener(KeyboardEvent.KEY_DOWN, this, this.keyDown);
		rscene.addEventListener(MouseEvent.MOUSE_BG_CLICK, this, this.mouseBGClickListener);
		rscene.addEventListener(MouseEvent.MOUSE_UP, this, this.mouseUpListener, true, true);
	}

	private m_btnGroup0: ISelectButtonGroup;
	private m_btnGroup1: ISelectButtonGroup;
	private m_btnGroup2: ISelectButtonGroup;

	private createBtn(uuid: string, text: string, px: number, py: number, group: ISelectButtonGroup): IButton {
		let textColor = VoxMaterial.createColor4(1, 1, 1, 1);

		let btn = VoxUI.createTextLabelButton(uuid, text, 100, 50, textColor);
		btn.setXY(px, py);
		this.m_uiScene.addEntity(btn);
		btn.addEventListener(MouseEvent.MOUSE_UP, this, this.btnMouseUpListener);
		group.addButton(btn);
		return btn;
	}

	private createSelectBtn(px: number, py: number, ns: string, uuid: string, selectNS: string, deselectNS: string, flag: boolean): ISelectionEntity {
		let selectBar = VoxUI.createSelectionEntity();
		selectBar.uuid = uuid;
		let colors = [0xff5dbea3, 0xff33b249, 0xff5adbb5, 0xff33b249];
		selectBar.setBGColorsWithARGBUint32(colors);
		selectBar.initialize(this.m_uiScene, ns, selectNS, deselectNS, 30);
		selectBar.addEventListener(SelectionEvent.SELECT, this, this.selectChange);
		if (flag) {
			selectBar.select(false);
		} else {
			selectBar.deselect(false);
		}
		selectBar.setXY(px, py);
		this.m_uiScene.addEntity(selectBar);
		return selectBar;
	}
	protected selectChange(evt: ISelectionEvent): void {
		console.log("selectChange(), evt.flag: ", evt.flag);
		this.m_valueFilter.setAbsorbing(evt.flag);
	}
	private initUIEntities(): void {
		this.m_btnGroup0 = VoxUI.createSelectButtonGroup();
		this.m_btnGroup1 = VoxUI.createSelectButtonGroup();
		this.m_btnGroup2 = VoxUI.createSelectButtonGroup();

		let tx = 10;
		let ty = 10;
		// let absorbBtn = this.createSelectBtn(tx, ty + 30 + 520, "吸附", "absorb", "ON", "OFF", false);

		// let localBtn = this.createBtn("local", "局部坐标", tx, ty + 30 + 450, this.m_btnGroup0);
		// let globalBtn = this.createBtn("global", "全局坐标", tx, ty + 30 + 380, this.m_btnGroup0);
		// ty += 50;
		// let moveBtn = this.createBtn("move", "移动", tx, ty + 120, this.m_btnGroup1);
		// let rotateBtn = this.createBtn("rotate", "旋转", tx, ty + 60, this.m_btnGroup1);
		// let scaleBtn = this.createBtn("scale", "缩放", tx, ty, this.m_btnGroup1);
		// ty -= 50;
		// // let redoBtn = this.createBtn("redo", "重做", tx, ty + 30, this.m_btnGroup2);
		// // let undoBtn = this.createBtn("undo", "撤销", tx, ty - 40, this.m_btnGroup2);

		// // this.m_btnGroup0.selectButton(globalBtn);
		// this.m_btnGroup1.selectButton(moveBtn);
		// // this.m_btnGroup2.selectButton(moveBtn);
	}

	private m_transCtr: ITransformController = null;
	private m_selectFrame: IUIRectLine = null;
	private m_keyInterac: ICoKeyboardInteraction;
	private m_recoder: ICoTransformRecorder;
	private m_valueFilter = new VecValueFilter();
	private createEditEntity(): void {
		let edit3dsc = this.m_edit3DUIRScene;

		this.m_transCtr = VoxModelEdit.createTransformController();
		const tc = this.m_transCtr;
		tc.initialize(edit3dsc);
		tc.addEventListener(UserEditEvent.EDIT_BEGIN, this, this.trans3DEditBegin);
		tc.addEventListener(UserEditEvent.EDIT_END, this, this.trans3DEditEnd);
		this.m_transCtr.setCtrlValueFilter(this.m_valueFilter);
		this.m_prevPos = VoxMath.createVec3();
		this.m_currPos = VoxMath.createVec3();

		this.m_keyInterac = VoxUIInteraction.createKeyboardInteraction();
		const ki = this.m_keyInterac;
		ki.initialize(this.m_rscene);

		let Key = Keyboard;
		let type = ki.createKeysEventType([Key.CTRL, Key.Y]);
		ki.addKeysDownListener(type, this, this.keyCtrlYDown);
		type = ki.createKeysEventType([Key.CTRL, Key.Z]);
		ki.addKeysDownListener(type, this, this.keyCtrlZDown);

		this.m_recoder = VoxModelEdit.createTransformRecorder();
	}

	private keyCtrlZDown(evt: any): void {
		this.m_recoder.undo();
		let list = this.m_recoder.getCurrList();
		this.selectEntities(list);
	}
	private keyCtrlYDown(evt: any): void {
		this.m_recoder.redo();
		let list = this.m_recoder.getCurrList();
		this.selectEntities(list);
	}
	private m_prevPos: IVector3D;
	private m_currPos: IVector3D;
	private trans3DEditBegin(evt: any): void {
		console.log("XXXXXXXX Edit begin...");
		let list = evt.currentTarget.getTargetEntities();
		let st = this.m_rscene.getStage3D();
		this.m_prevPos.setXYZ(st.mouseX, st.mouseY, 0);
		this.m_recoder.saveBegin(list);
		this.m_selectFrame.disable();
	}
	private trans3DEditEnd(evt: any): void {
		console.log("XXXXXXXX Edit end...", this.m_prevPos, this.m_currPos);
		let st = this.m_rscene.getStage3D();
		this.m_currPos.setXYZ(st.mouseX, st.mouseY, 0);
		if (Vector3D.Distance(this.m_prevPos, this.m_currPos) > 0.5) {
			console.log("XXXXXXXX Edit transforming success ...");
			let list = evt.currentTarget.getTargetEntities();
			console.log("XXXXXXXX Edit transforming entity list: ", list);
			this.m_recoder.saveEnd(list);
		} else {
			this.m_recoder.saveEnd(null);
		}
		this.m_selectFrame.enable();
	}
	private uiMouseDownListener(evt: any): void {
		console.log("DsrdViewer::uiMouseDownListener(), evt: ", evt);
		// this.m_selectFrame.begin(evt.mouseX, evt.mouseY);
	}
	private uiMouseUpListener(evt: any): void {
		console.log("DsrdViewer::uiMouseUpListener(), evt: ", evt);
		// if (this.m_selectFrame.isSelectEnabled()) {
		// 	let b = this.m_selectFrame.bounds;
		// 	console.log("DsrdViewer::uiMouseUpListener(), b: ", b);
		// 	let list = this.m_entityQuery.getEntities(b.min, b.max);
		// 	console.log("list: ", list);
		// 	this.selectEntities(list);
		// }
		// this.m_selectFrame.end(evt.mouseX, evt.mouseY);
	}
	private uiMouseMoveListener(evt: any): void {
		// console.log("DsrdViewer::uiMouseMoveListener(), evt: ", evt);
		// console.log("ui move (x, y): ", evt.mouseX, evt.mouseY);
		this.m_selectFrame.move(evt.mouseX, evt.mouseY);
	}
	private btnMouseUpListener(evt: any): void {
		console.log("btnMouseUpListener(), evt.uuid: ", evt.uuid);
		let uuid = evt.uuid;

		switch (uuid) {
			case "local":
				this.m_transCtr.toLocal();
				break;
			case "global":
				this.m_transCtr.toGlobal();
				break;
			case "move":
				this.m_transCtr.toTranslation();
				break;
			case "scale":
				this.m_transCtr.toScale();
				break;
			case "rotate":
				this.m_transCtr.toRotation();
				this;
				break;
			case "redo":
				this.keyCtrlYDown(null);
				break;
			case "undo":
				this.keyCtrlZDown(null);
				break;
			default:
				break;
		}
	}
	private m_map: Map<string, IRenderTexture> = new Map();
	protected createTexByUrl(url: string = "", saving = true): IRenderTexture {
		let map = this.m_map;
		url = url != "" ? url : "static/assets/box.jpg";
		url = URLFilter.filterUrl(url);

		if (map.has(url)) {
			return map.get(url);
		}
		let tex = this.m_rscene.textureBlock.createImageTex2D();
		if (saving) {
			map.set(url, tex);
		}
		const request = new XMLHttpRequest();
		request.open("GET", url, true);
		request.responseType = "blob";
		request.onload = e => {
			let img = new Image();
			img.onload = (evt: any): void => {
				tex.setDataFromImage(img, 0, 0, 0, false);
			};
			let pwin: any = window;
			var imageUrl = (pwin.URL || pwin.webkitURL).createObjectURL(request.response);
			img.src = imageUrl;
		};
		request.onerror = e => {
			console.error("load error binary image buffer request.status: ", request.status, "url:", url);
		};
		request.send(null);
		return tex;
	}
	protected keyDownDoes(evt: any): boolean {
		console.log("DsrdViewer::keyDown() ..., evt.keyCode: ", evt.keyCode);
		return true;
	}
	private keyDown(evt: any): void {
		console.log("DsrdViewer::keyDown() ..., evt.keyCode: ", evt.keyCode);
		if (this.keyDownDoes(evt)) {
			let KEY = Keyboard;
			switch (evt.keyCode) {
				case KEY.W:
					this.m_transCtr.toTranslation();
					break;
				case KEY.E:
					this.m_transCtr.toScale();
					break;
				case KEY.R:
					this.m_transCtr.toRotation();
					break;
				default:
					break;
			}
		}
	}
	protected m_layouter = new CoEntityLayouter2();
	protected loadModels(): void {
		let baseUrl: string = "static/private/";
		let url = baseUrl + "obj/base.obj";
		url = baseUrl + "fbx/base4.fbx";
		url = "static/assets/fbx/base4.fbx";
		console.log("loadModels() init...");
		url = URLFilter.filterUrl(url);
		let loader = this.m_teamLoader;
		loader.verTool = this.m_verTool;
		loader.load([url], (models: CoGeomDataType[], transforms: Float32Array[]): void => {
			this.m_layouter.layoutReset();
			for (let i = 0; i < models.length; ++i) {
				this.createEntity(models[i], transforms != null ? transforms[i] : null);
			}
			this.m_layouter.layoutUpdate(200, VoxMath.createVec3(0, 0, 0));
		});
	}
	private m_entityQuery: IRectFrameQuery = null;
	private m_entities: ITransformEntity[] = [];
	protected m_modelTexUrl = "";
	protected createEntity(model: CoGeomDataType, transform: Float32Array = null, url = ""): ITransformEntity {
		// let material = VoxRScene.createDefaultMaterial(true);
		// material.setRGB3f(0.85, 0.85, 0.85);
		// material.setTextureList([this.createTexByUrl(this.m_modelTexUrl)]);
		// material.initializeByCodeBuf(true);
		let material: IRenderMaterial = null;
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
			pbrParam.albedoColor = [1.0, 1.0, 1.0];
			let pbrMapUrl: PBRMapUrl = {};
			// pbrMapUrl.diffuseMap = "static/assets/white.jpg";
			pbrMapUrl.diffuseMap = "";
			material = this.pbrCtx.pbrModule.createMaterial(true, pbrParam, pbrMapUrl);
		} else {
			let m = VoxRScene.createDefaultMaterial(true);
			m.setRGB3f(0.85, 0.85, 0.85);
			m.setTextureList([this.createTexByUrl(this.m_modelTexUrl)]);
			m.initializeByCodeBuf(true);
			material = m;
		}

		let mesh = VoxRScene.createDataMeshFromModel(model, material);
		let entity = VoxRScene.createMouseEventEntity();
		entity.uuid = url;

		entity.setMaterial(material);
		entity.setMesh(mesh);
		// entity.setPosition(cv);
		// entity.setRenderState(rst.NONE_CULLFACE_NORMAL_STATE);
		entity.update();
		if (this.m_entityContainer == null) {
			this.m_rscene.addEntity(entity);
		} else {
			this.m_entityContainer.addEntity(entity);
		}

		entity.addEventListener(MouseEvent.MOUSE_OVER, this, this.mouseOverTargetListener);
		entity.addEventListener(MouseEvent.MOUSE_OUT, this, this.mouseOutTargetListener);
		entity.addEventListener(MouseEvent.MOUSE_DOWN, this, this.mouseDownTargetListener);
		entity.addEventListener(MouseEvent.MOUSE_UP, this, this.mouseUpTargetListener);

		this.m_entities.push(entity);

		this.m_layouter.layoutAppendItem(entity, VoxRScene.createMat4(transform));

		this.modelScene.addModelNode(URLFilter.getFileName(url), entity);

		return entity;
	}
	private mouseOverTargetListener(evt: any): void {
		// console.log("mouseOverTargetListener()..., evt.target: ", evt.target);
	}
	private mouseOutTargetListener(evt: any): void {
		// console.log("mouseOutTargetListener()..., evt.target: ", evt.target);
	}
	private mouseDownTargetListener(evt: any): void {
		console.log("mouseDownTargetListener()..., evt: ", evt);
		this.m_posV0.setXYZ(evt.mouseX, evt.mouseY, 0);
		this.m_posV1.copyFrom(this.m_posV0);
		this.m_mi.drager.attach();
	}
	private selectEntities(list: IRenderEntity[], hitPV: IVector3D = null): void {
		if (list && list.length > 0) {
			let transCtr = this.m_transCtr;

			let pos = VoxMath.createVec3();

			for (let i = 0; i < list.length; ++i) {
				pos.addBy(list[i].getGlobalBounds().center);
			}
			pos.scaleBy(1.0 / list.length);

			if (list.length > 0) {
				if (this.m_modelSelectCall) {
					let urls: string[] = [];
					for (let i = 0; i < list.length; i++) {
						urls.push(list[i].uuid);
					}
					console.log("modelSelectCall, urls: ", urls);
					this.m_modelSelectCall(urls);
				}
			}
			if (transCtr && list.length > 0) {
				// 暂时注释掉，后续功能完善了再启用
				// transCtr.select(list as ITransformEntity[], pos);
				this.m_outline.select(list);
			}
		}
	}

	private m_mouseUpCall: (evt: any) => void;
	setMouseUpListener(mouseUpCall: (evt: any) => void): void {
		this.m_mouseUpCall = mouseUpCall;
	}
	private m_modelSelectCall: (urls: string[]) => void;
	setModelSelectListener(modelSelectCall: (urls: string[]) => void): void {
		this.m_modelSelectCall = modelSelectCall;
	}
	setMaterialParamWithUUID(uuid: string, param: any): void {}
	private mouseUpTargetListener(evt: any): void {
		this.m_posV1.setXYZ(evt.mouseX, evt.mouseY, 0);
		this.m_posV0.subtractBy(this.m_posV1);
		if (this.m_posV0.getLength() < 0.5) {
			let entity = evt.target as ITransformEntity;
			this.selectEntities([entity], evt.wpos);
		}
		// console.log("mouseUpTargetListener() mouse up...");
		if (this.m_mouseUpCall) {
			this.m_mouseUpCall(evt);
		}
	}
	private mouseUpListener(evt: any): void {
		if (this.m_transCtr) {
			this.m_transCtr.decontrol();
		}
	}
	private mouseBGClickListener(evt: any): void {
		if (this.m_transCtr) {
			this.m_transCtr.disable();
		}
		this.m_outline.deselect();
		if (this.m_mouseUpCall) {
			this.m_mouseUpCall(evt);
		}

		if (this.m_modelSelectCall) {
			this.m_modelSelectCall([]);
		}
	}

	run(): void {
		if (this.m_graph) {
			if (this.m_transCtr) {
				this.m_transCtr.run();
			}
			this.m_graph.run();
		}
	}
}

export { ModelData, DsrdViewerBase };
