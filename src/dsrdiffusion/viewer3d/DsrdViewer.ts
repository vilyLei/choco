import { CoGeomDataType } from "../../cospace/app/CoSpaceAppData";

import { PostOutline } from "../demo/effect/PostOutline";
import { SelectionEvent, KeyboardEvent, Keyboard, MouseEvent, RendererDevice, VoxRScene } from "../../cospace/voxengine/VoxRScene";

import { Vector3D, VoxMath } from "../../cospace/math/VoxMath";
import { VoxEntity } from "../../cospace/voxentity/VoxEntity";

import { CoModelTeamLoader } from "../../cospace/app/common/CoModelTeamLoader";
import URLFilter from "../../cospace/app/utils/URLFilter";
import { SceneAccessor } from "./SceneAccessor";
import { DsrdViewerBase } from "./DsrdViewerBase";
import { DsrdImageViewer } from "./DsrdImageViewer";
import { CoModuleVersion, CoModuleLoader } from "../../cospace/app/utils/CoModuleLoader";

// declare var CoMath: ICoMath;

/**
 * cospace renderer
 */
class DsrdViewer extends DsrdViewerBase {
	private m_viewDiv: HTMLDivElement = null;
	private m_initCallback: () => void = null;
	private m_zAxisUp = false;
	private m_debugDev = false;
	imgViewer: DsrdImageViewer;
	constructor() {
		super();
	}
	initialize(div: HTMLDivElement = null, initCallback: () => void = null, zAxisUp: boolean = false, debugDev: boolean = false, forceReleaseEnabled: boolean = false): void {
		document.oncontextmenu = function(e) {
			e.preventDefault();
		};

		console.log("DsrdViewer::initialize(), forceReleaseEnabled: ", forceReleaseEnabled);

		CoModuleLoader.forceReleaseEnabled = forceReleaseEnabled;

		this.m_viewDiv = div;
		this.m_initCallback = initCallback;
		this.m_zAxisUp = zAxisUp;
		this.m_debugDev = debugDev;

		this.loadInfo();
	}

	/**
	 * @param fov_angle_degree the default value is 45.0
	 * @param near the default value is 10.0
	 * @param far the default value is 5000.0
	 */
	setCamProjectParam(fov_angle_degree: number, near: number, far: number): void {
		if (this.m_rscene) {
			let cam = this.m_rscene.getCamera();
			cam.perspectiveRH((Math.PI * fov_angle_degree) / 180.0, cam.getAspect(), near, far);
		}
	}
	updateCamera(): void {
		if (this.m_rscene) {
			this.m_rscene.updateCamera();
		}
	}
	updateCameraWithF32Arr16(fs32Arr16: number[] | Float32Array, updateCamera = true): void {
		if (fs32Arr16.length == 16) {
			this.applyCamvs(fs32Arr16, updateCamera);
		}
	}
	getCameraData(posScale: number, transpose: boolean = false): Float32Array {
		if (this.m_rscene) {
			let cam = this.m_rscene.getCamera();
			let mat = cam.getViewMatrix().clone();
			mat.invert();
			if (transpose) {
				mat.transpose();
			}
			let vs = mat.getLocalFS32().slice(0);
			vs[3] *= posScale;
			vs[7] *= posScale;
			vs[11] *= posScale;
			return vs;
		}
		return null;
	}
	protected initRenderer(): void {
		// document.body.style.overflow = "hidden";

		let RD = RendererDevice;
		/**
		 * 开启打印输出shader构建的相关信息
		 */
		RD.SHADERCODE_TRACE_ENABLED = false;
		RD.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;

		let graph = (this.m_graph = VoxRScene.createRendererSceneGraph());

		let sizeW = 512;
		let sizeH = 512;
		let zAxisUp: boolean = this.m_zAxisUp;
		// let debugDev: boolean = this.m_debugDev;
		let div: HTMLDivElement = this.m_viewDiv;

		let dpr = window.devicePixelRatio;

		let rparam = graph.createRendererSceneParam(div ? div : this.createDiv(0, 0, sizeW / dpr, sizeH / dpr));
		rparam.autoSyncRenderBufferAndWindowSize = false;
		rparam.syncBgColor = false;
		rparam.setCamProject(45, 10.0, 2000.0);
		rparam.setCamPosition(239.0, -239.0, 239.0);
		if (zAxisUp || div == null) {
			rparam.setCamUpDirect(0.0, 0.0, 1.0);
		} else {
			rparam.setCamUpDirect(0.0, 1.0, 0.0);
		}
		rparam.setAttriAntialias(true);

		this.m_rscene = graph.createScene(rparam);
		this.m_rscene.enableMouseEvent(true);
		VoxRScene.setRendererScene(this.m_rscene);

		let subScene = this.m_rscene.createSubScene(rparam, 3, false);
		subScene.enableMouseEvent(true);
		subScene.setAccessor(new SceneAccessor());

		this.m_edit3DUIRScene = subScene;
		graph.addScene(this.m_edit3DUIRScene);
		this.m_outline = new PostOutline(this.m_rscene, this.m_verTool);

		this.imgViewer = new DsrdImageViewer();
		this.imgViewer.initialize(this.m_rscene);

		this.init3DScene();
		if(this.m_initCallback) {
			this.m_initCallback();
		}
	}

	private init3DScene(): void {
		this.m_modelTexUrl = "static/assets/white.jpg";
		if (this.m_entityContainer == null) {
			this.m_entityContainer = VoxEntity.createDisplayEntityContainer();
			this.m_rscene.addEntity(this.m_entityContainer);
		}

		let debugDev: boolean = this.m_debugDev;
		let div: HTMLDivElement = this.m_viewDiv;
		this.m_layouter.locationEnabled = false;
		this.m_debugDev = debugDev;
		if (div && !debugDev) {
		} else {
			this.m_debugDev = true;
			this.m_teamLoader = new CoModelTeamLoader();
			this.initModels();
			let imgUrls = ["static/assets/modules/apple_01/mini.jpg", "static/assets/box.jpg"];
			// this.imgViewer.setViewImageUrls(imgUrls);
			this.imgViewer.setViewImageUrl(imgUrls[0], true);
			// this.imgViewer.setViewImageAlpha(0.1);
		}

		// this.loadModels();
	}

	private initModels(): void {
		this.m_forceRot90 = true;
		let urls: string[] = [];
		let types: string[] = [];
		for (let i = 0; i < 2; ++i) {
			let purl = "static/assets/modules/apple_01/export_" + i + ".drc";
			urls.push(purl);
			types.push("drc");
		}
		this.initSceneByUrls(
			urls,
			types,
			(prog: number): void => {
				console.log("models loaded ...");
			},
			200
		);
	}

	initSceneByUrls(urls: string[], types: string[], loadingCallback: (prog: number) => void, size: number = 200): void {
		this.m_baseSize = size;
		this.m_loadingCallback = loadingCallback;
		let loader = this.m_teamLoader;
		loader.loadWithTypes(urls, types, (models: CoGeomDataType[], transforms: Float32Array[]): void => {
			this.m_layouter.layoutReset();
			for (let i = 0; i < models.length; ++i) {
				console.log("VVVVVV models[",i,"].url: ", models[i].url);
				this.createEntity(models[i], transforms != null ? transforms[i] : null, 2.0, models[i].url);
			}
			this.m_modelDataUrl = urls[0] + "." + types[0];
			console.log("XXXXXX initSceneByUrls() this.m_modelDataUrl: ", this.m_modelDataUrl);
			this.fitEntitiesSize();
			if (this.m_loadingCallback) {
				this.m_loadingCallback(1.0);
			}
		});
	}
	setForceRotate90(force: boolean): void {
		this.m_forceRot90 = force;
	}

	private fitEntitiesSize(forceRot90: boolean = false): void {
		forceRot90 = forceRot90 || this.m_forceRot90;
		this.m_layouter.layoutUpdate(this.m_baseSize, VoxMath.createVec3());
		let container = this.m_entityContainer;
		let format = URLFilter.getFileSuffixName(this.m_modelDataUrl, true, true);
		console.log("XXXXXX fitEntitiesSize() this.m_modelDataUrl: ", this.m_modelDataUrl);
		console.log("format: ", format);
		switch (format) {
			case "obj":
				container.setRotationXYZ(90, 0, 0);
				break;
			default:
				if (forceRot90) {
					container.setRotationXYZ(90, 0, 0);
				}
				break;
		}
		container.update();
	}

	private m_loadingCallback: (prog: number) => void = null;
	private m_modelDataUrl = "";
	private m_baseSize = 200.0;
	private m_forceRot90 = false;

	private applyCamvs(cdvs: number[] | Float32Array, updateCamera: boolean): void {
		if (cdvs == null) {
			cdvs = [
				0.7071067690849304,
				-0.40824827551841736,
				0.5773502588272095,
				2.390000104904175,
				0.7071067690849304,
				0.40824827551841736,
				-0.5773502588272095,
				-2.390000104904175,
				0.0,
				0.8164965510368347,
				0.5773502588272095,
				2.390000104904175,
				0,
				0,
				0,
				1
			];
		}

		let mat4 = VoxMath.createMat4(new Float32Array(cdvs));
		mat4.transpose();
		let camvs = mat4.getLocalFS32();
		let i = 0;
		// let vx = new Vector3D(camvs[i], camvs[i+1], camvs[i+2], camvs[i+3]);
		i = 4;
		let vy = VoxMath.createVec3(camvs[i], camvs[i + 1], camvs[i + 2], camvs[i + 3]);
		// i = 8;
		// let vz = new Vector3D(camvs[i], camvs[i+1], camvs[i+2], camvs[i+3]);
		i = 12;
		let pos = VoxMath.createVec3(camvs[i], camvs[i + 1], camvs[i + 2]);

		// console.log("		  vy: ", vy);
		let cam = this.m_rscene.getCamera();

		// console.log("cam.getUV(): ", cam.getUV());
		// console.log("");
		// console.log("cam.getNV(): ", cam.getNV());
		// vz.negate();
		// console.log("		  vz: ", vz);
		// console.log("		 pos: ", pos);
		if (pos.getLength() > 0.001) {
			let camPos = pos.clone().scaleBy(100.0);
			cam.lookAtRH(camPos, VoxMath.createVec3(), vy);
			if (updateCamera) {
				cam.update();
			}
		}
	}
}

export { DsrdViewer };
