import IRendererScene from "../engine/vox/scene/IRendererScene";
import { MouseEvent, EventBase, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import { VoxMath } from "../engine/cospace/math/VoxMath";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";
import IDisplayEntityContainer from "../engine/vox/entity/IDisplayEntityContainer";
import IColor4 from "../engine/vox/material/IColor4";

class ClockEntity {
	private m_rc: IRendererScene = null;
	private m_hourHand: IDisplayEntityContainer;
	private m_minutesHand: IDisplayEntityContainer;
	private m_secondsHand: IDisplayEntityContainer;
	private m_body: IDisplayEntityContainer;
	constructor() {}

	initialize(rc: IRendererScene, radius: number): void {
		if (this.m_rc == null && rc) {
			this.m_rc = rc;

			let bodyContainer = (this.m_body = VoxEntity.createDisplayEntityContainer());
			this.m_rc.addEntity(bodyContainer);
			this.initHourItem(radius, bodyContainer);
			this.m_hourHand = this.createHand(3, radius * 0.4, VoxMaterial.createColor4(0.7, 0.3, 0.0));
			bodyContainer.addChild(this.m_hourHand);
			this.m_minutesHand = this.createHand(2, radius * 0.6, VoxMaterial.createColor4(0.7, 0.9, 0.0));
			bodyContainer.addChild(this.m_minutesHand);
			this.m_secondsHand = this.createHand(1, radius * 0.8, VoxMaterial.createColor4(0.7, 0.2, 0.7));
			bodyContainer.addChild(this.m_secondsHand);

			this.m_rc.addEventListener(EventBase.ENTER_FRAME, this, this.enterFrame);
			this.m_rc.addEventListener(MouseEvent.MOUSE_DOWN, this, this.mouseDown);
		}
	}
	private createHand(radius: number, long: number, color: IColor4): IDisplayEntityContainer {
		let container = VoxEntity.createDisplayEntityContainer();
		let material = VoxMaterial.createDefaultMaterial();
		material.normalEnabled = true;
		material.setColor(color);
		let body = VoxEntity.createCylinder(radius, long * 0.8, 20, material, false, 1, 0.0);
		container.addChild(body);
		let head = VoxEntity.createCone(radius + 3, long * 0.2, 20, material, false, 0.0);
		head.setXYZ(0.0, long * 0.8, 0.0);
		container.addChild(head);

		return container;
	}
	private initHourItem(radius: number, container: IDisplayEntityContainer): void {
		let material = VoxMaterial.createDefaultMaterial();
		material.normalEnabled = true;
		let itemBox = VoxEntity.createBox(VoxMath.createVec3(-5, -10, -10), VoxMath.createVec3(5, 10, 10), material);

		for (let i = 0; i < 12; ++i) {
			const fk = i / 12.0;
			const rad = Math.PI * 2.0 * fk;
			const py = radius * Math.cos(rad);
			const pz = radius * Math.sin(rad);
			const degree = 360.0 * fk;

			material = VoxMaterial.createDefaultMaterial();
			material.normalEnabled = true;
			material.setRGB3f(0.8 * fk, 0.5, 0.9);
			material.initializeByCodeBuf(false);

			const item = VoxEntity.createDisplayEntity();
			item.setMaterial(material).setMesh(itemBox.getMesh());
			item.setXYZ(0.0, py, pz).setRotationXYZ(degree, 0.0, 0.0);
			container.addChild(item);
		}
		material = VoxMaterial.createDefaultMaterial();
		material.normalEnabled = true;
		material.setRGB3f(0.1, 0.5, 0.8);

		let ring = VoxEntity.createTorus(radius + 15, 5, 30, 50, 0, material);
		container.addChild(ring);

		material = VoxMaterial.createDefaultMaterial();
		material.normalEnabled = true;
		material.setRGB3f(0.3, 0.7, 0.8);
		let center = VoxEntity.createSphere(5, 20, 20, material);
		container.addChild(center);

		material = VoxMaterial.createDefaultMaterial();
		material.normalEnabled = true;
		material.setRGB3f(0.3, 0.7, 0.8);
		let base = VoxEntity.createCylinder(radius + 20, 8, 50, material);
		base.setXYZ(-5, 0, 0);
		base.setRotationXYZ(0, 0, 90);
		container.addChild(base);
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
			let degree = (360.0 * hour) / 12.0;
			this.m_hourHand.setRotationXYZ(-degree, 0.0, 0.0);
			this.m_hourHand.update();

			let minutes = d.getMinutes();
			degree = (360.0 * minutes) / 60.0;
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
export class EntityContainer {
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
         * 开启打印输出shader构建的相关信息
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

export default EntityContainer;

// for running instance
if (!(document as any).demoState) {
	let ins = new EntityContainer();
	ins.initialize();
}
