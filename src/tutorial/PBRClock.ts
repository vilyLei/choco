import IRendererScene from "../engine/vox/scene/IRendererScene";
import { MouseEvent, EventBase, VoxRScene, RendererState } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import { VoxMath } from "../engine/cospace/math/VoxMath";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import IDisplayEntityContainer from "../engine/vox/entity/IDisplayEntityContainer";
import IColor4 from "../engine/vox/material/IColor4";
import { PBRMateralBuilder } from "./material/PBRMateralBuilder";
import IRenderMaterial from "../engine/vox/render/IRenderMaterial";
import { VoxTexture } from "../engine/cospace/voxtexture/VoxTexture";

class ClockEntity {
	private static s_pbr: PBRMateralBuilder = null;
	private m_rc: IRendererScene = null;
	private m_hourHand: IDisplayEntityContainer;
	private m_minutesHand: IDisplayEntityContainer;
	private m_secondsHand: IDisplayEntityContainer;
	private m_body: IDisplayEntityContainer;
	constructor() {}

	initialize(rc: IRendererScene, radius: number): void {
		if (this.m_rc == null && rc) {
			this.m_rc = rc;

			if (ClockEntity.s_pbr == null) {
				const pbr = (ClockEntity.s_pbr = new PBRMateralBuilder());
				pbr.sharedLightColor = false;
				pbr.initialize(this.m_rc);
			}

			let bodyContainer = (this.m_body = VoxEntity.createDisplayEntityContainer());
			this.m_rc.addEntity(bodyContainer, 2);
			this.initTimeItem(radius, bodyContainer);
			let long = radius * 0.4;
			this.m_hourHand = this.createHand(3, long, long * 0.3, VoxMaterial.createColor4(0.7, 0.3, 0.0), true, radius * 1.0);
			bodyContainer.addChild(this.m_hourHand);
			long = radius * 0.6;
			this.m_minutesHand = this.createHand(2, long, long * 0.2, VoxMaterial.createColor4(0.7, 0.9, 0.0), true, radius * 1.0);
			bodyContainer.addChild(this.m_minutesHand);
			long = radius * 0.80;
			this.m_secondsHand = this.createHand(1, long, long * 0.15, VoxMaterial.createColor4(0.7, 0.2, 0.7));
			bodyContainer.addChild(this.m_secondsHand);

			this.createText(radius);

			this.m_rc.addEventListener(EventBase.ENTER_FRAME, this, this.enterFrame);
			this.m_rc.addEventListener(MouseEvent.MOUSE_DOWN, this, this.mouseDown);
		}
	}
	private createMaterial(color: IColor4): IRenderMaterial {
		const pbr = ClockEntity.s_pbr;
		let material = pbr.createMaterial(Math.random(), Math.random() * 0.2 + 0.8, 1.3, color);
		return material;
	}
	private createMaterial2(roughness: number, metallic: number): IRenderMaterial {
		const pbr = ClockEntity.s_pbr;
		let material = pbr.createMaterial(roughness, metallic, 1.3);
		return material;
	}
	private createHand(
		radius: number,
		long: number,
		headLong: number,
		color: IColor4,
		haveLine: boolean = false,
		lineLong: number = 10.0
	): IDisplayEntityContainer {
		let container = VoxEntity.createDisplayEntityContainer();

		let material = this.createMaterial(color);

		let body = VoxEntity.createCylinder(radius, long * 0.8, 20, material, false, 1, 0.0);
		container.addChild(body);
		let head = VoxEntity.createCone(radius + 3, headLong, 20, material, false, 0.0);
		head.setXYZ(0.0, long * 0.8, 0.0);
		container.addChild(head);
		if (haveLine) {
			let line = VoxEntity.createLine(VoxMath.createVec3(), VoxMath.createVec3(0.0, lineLong, 0.0), VoxMaterial.createColor4(0.1, 0.2, 0.1));
			container.addChild(line);
		}

		return container;
	}
	private createText(radius: number): void {

		let canvasBuilder = VoxTexture.createCanvasTexAtlas();
		// canvasBuilder.setFontName("Franklin Gothic Heavy");
		let size = 32;
		
		// document.body.appendChild(canvas);
		let container = VoxEntity.createDisplayEntityContainer();

		// material.setRGB3f(0.3, 0.7, 0.8);
		let material = this.createMaterial2(0.9, 0.3);

		let base = VoxEntity.createCylinder(radius + 20, 8, 50, material);
		base.setXYZ(-5, 0, 0);
		base.setRotationXYZ(0, 0, 90);
		this.m_rc.addEntity(base);

		let canvas = canvasBuilder.createCharsCanvasFixSize(size, size,  "-", 30);
		let tex = this.m_rc.textureBlock.createImageTex2D();
		tex.setDataFromImage(canvas);
		material = VoxMaterial.createDefaultMaterial();
		material.setTextureList([tex]);
		let planeSrc = VoxEntity.createYOZPlane(-0.5 * size, -0.5 * size, size, size, material);

		let r = radius * 0.80;
		for (let i = 0; i < 12; ++i) {
			let sx = 0.1;
			let sy = 0.5;
			if (i % 5 == 0) {
				sy = 1.0;
			}
			let sz = 0.1;

			const fk = i / 12.0;
			const rad = Math.PI * 2.0 * fk;
			const py = r * Math.cos(rad);
			const pz = r * Math.sin(rad);

			let canvas = canvasBuilder.createCharsCanvasFixSize(size + 32, size + 32,  (12 - i) + "", 30, VoxMaterial.createColor4(), VoxMaterial.createColor4(1, 1, 1, 0));
			let tex = this.m_rc.textureBlock.createImageTex2D();
			tex.setDataFromImage(canvas);

			let material = VoxMaterial.createDefaultMaterial();
			material.setTextureList([tex]);
			material.initializeByCodeBuf(true);
			let plane = VoxEntity.createDisplayEntity();
			plane.setRenderState(RendererState.FRONT_TRANSPARENT_STATE);
			plane.copyMeshFrom(planeSrc);
			plane.setMaterial(material);
			plane.setXYZ(2.0, py, pz);
			plane.setScaleXYZ(1.0, -1.0, 1.0);
			plane.setRotationXYZ(90,0,0);
			container.addEntity( plane);
		}

		this.m_rc.addEntity( container, 1 );
	}
	private initTimeItem(radius: number, container: IDisplayEntityContainer): void {
		let material = this.createMaterial(null);

		let itemBox = VoxEntity.createBox(VoxMath.createVec3(-5, -20, -10), VoxMath.createVec3(5, 0, 10), material);

		let r = radius + 10;
		for (let i = 0; i < 60; ++i) {
			let sx = 0.1;
			let sy = 0.5;
			if (i % 5 == 0) {
				sy = 1.0;
			}
			let sz = 0.1;

			const fk = i / 60.0;
			const rad = Math.PI * 2.0 * fk;
			const py = r * Math.cos(rad);
			const pz = r * Math.sin(rad);
			const degree = 360.0 * fk;

			material = this.createMaterial(VoxMaterial.createColor4(0.8 * fk, 0.5, 0.9));
			material.initializeByCodeBuf(false);

			const item = VoxEntity.createDisplayEntity();
			item.setMaterial(material).setMesh(itemBox.getMesh());
			item.setXYZ(0.0, py, pz)
				.setRotationXYZ(degree, 0.0, 0.0)
				.setScaleXYZ(sx, sy, sz);
			container.addChild(item);
		}

		material = this.createMaterial(VoxMaterial.createColor4(0.1, 0.5, 0.8));

		let ring = VoxEntity.createTorus(radius + 15, 5, 30, 100, 0, material);
		container.addChild(ring);

		material = this.createMaterial(VoxMaterial.createColor4(0.3, 0.7, 0.8));

		let center = VoxEntity.createSphere(5, 20, 20, material);
		container.addChild(center);
	}
	private m_seconds = -1;
	private m_degree = 0.0;
	private m_play = true;
	private mouseDown(): void {
		if (this.m_play) {
			this.stop();
		} else {
			this.play();
		}
	}
	private play(): void {
		this.m_play = true;
	}
	private stop(): void {
		this.m_play = false;
	}
	private enterFrame(): void {
		var d = new Date();
		let seconds = d.getSeconds();

		if (this.m_seconds != seconds) {
			this.m_seconds = seconds;

			let hour = d.getHours() % 12;
			let minutes = d.getMinutes();

			let degree = (360.0 * (hour * 60 + minutes) * 60) / 43200;
			this.m_hourHand.setRotationXYZ(-degree, 0.0, 0.0);
			this.m_hourHand.update();

			degree = (360.0 * (minutes * 60 + seconds)) / 3600.0;
			this.m_minutesHand.setRotationXYZ(-degree, 0.0, 0.0);
			this.m_minutesHand.update();

			degree = (360.0 * seconds) / 60.0;
			this.m_secondsHand.setRotationXYZ(-degree, 0.0, 0.0);
			this.m_secondsHand.update();
		}
		// if (this.m_play) {
		// 	this.m_body.setRotationY(this.m_degree);
		// 	this.m_degree += 0.5;
		// }
	}
}
export class PBRClock {
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
		 * ??????????????????shader?????????????????????
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
		img.onload = (): void => {
			tex.setDataFromImage(img);
		};
		img.src = url;
		return tex;
	}
	private init3DScene(): void {
		const rsc = this.m_rscene;

		let clock = new ClockEntity();
		clock.initialize(rsc, 100.0);
	}
}

export default PBRClock;

// for running instance
if (!(document as any).demoState) {
	let ins = new PBRClock();
	ins.initialize();
}
