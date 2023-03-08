import IRendererScene from "../engine/vox/scene/IRendererScene";
import { MouseEvent, EventBase, VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import VoxModuleShell from "../common/VoxModuleShell";
import IRendererSceneGraph from "../engine/vox/scene/IRendererSceneGraph";
import { IVoxUIScene } from "../engine/voxui/scene/IVoxUIScene";
import { VoxUI } from "../engine/voxui/VoxUI";
import IMouseEvent from "../engine/vox/event/IMouseEvent";
import IDisplayEntity from "../engine/vox/entity/IDisplayEntity";
import { IButton } from "../engine/voxui/button/IButton";
import { IClipColorLabel } from "../engine/voxui/entity/IClipColorLabel";
import { ISelectButtonGroup } from "../engine/voxui/button/ISelectButtonGroup";
import IVector3D from "../engine/vox/math/IVector3D";

export class UIButtonGroup {
	private m_graph: IRendererSceneGraph = null;
	private m_rscene: IRendererScene = null;
	private m_uiScene: IVoxUIScene = null;
	private m_axis: IDisplayEntity = null;
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
				this.initUIScene();
			}
		);
	}
	private initMouseInteract(): void {
		const mi = VoxUIInteraction.createMouseInteraction();
		mi.initialize(this.m_rscene, 0, true).setAutoRunning(true);
	}
	private initRenderer(): void {
		let RD = VoxRScene.RendererDevice;
		/**
		 * 开启打印输出shader构建的相关信息
		 */
		RD.SHADERCODE_TRACE_ENABLED = true;
		RD.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;

		let graph = (this.m_graph = VoxRScene.createRendererSceneGraph());

		let rparam = graph.createRendererSceneParam();
		rparam.setAttriAntialias(true);
		rparam.setCamPosition(1000.0, 1000.0, 1000.0);
		rparam.setCamProject(45, 20.0, 9000.0);
		this.m_rscene = graph.createScene(rparam);
		graph.setAutoRunning(true);
	}
	private initUIScene(): void {
		let uisc = (this.m_uiScene = VoxUI.createUIScene(this.m_graph));
		uisc.texAtlasNearestFilter = true;
		uisc.initialize(this.m_graph);
		this.initUIEntities();
	}
	private m_btnGroup: ISelectButtonGroup;

	private createBtn(uuid: string, text: string, px: number, py: number): IButton {

		let textColor = VoxMaterial.createColor4(1, 1, 1, 1);

		let btn = VoxUI.createTextLabelButton(uuid, text, 170, 50, textColor);
		btn.setXY(px, py);
		this.m_uiScene.addEntity(btn);
		btn.addEventListener(MouseEvent.MOUSE_DOWN, this, this.buttonMouseDown);
		this.applyDeselectColors(btn);
		this.m_btnGroup.addButton(btn);
		return btn;
	}
	private initUIEntities(): void {

		this.m_btnGroup = VoxUI.createSelectButtonGroup();

		let btnDown = this.createBtn("move_down", "Move Down", 200, 100);
		let btnUp = this.createBtn("move_up", "Move Up", 200, 170);
		let btnLeft = this.createBtn("move_left", "Move Left", 200, 240);
		let btnRight = this.createBtn("move_right", "Move Right", 200, 310);

		this.m_btnGroup.setSelectedFunction(
			(btn: IButton): void => {
				this.applySelectColors(btn);
			},
			(btn: IButton): void => {
				this.applyDeselectColors(btn);
			}
		);
		let selectKey = btnUp.uuid;
		if (selectKey != "") {
			this.m_btnGroup.select(selectKey);
		}
	}
	private applySelectColors(btn: IButton): void {
		let colorHexList = [0x4caf50, 0xaaac6a, 0x6ccf70];

		let label = btn.getLable() as IClipColorLabel;
		label.setColorsWithHex(colorHexList);
	}
	private applyDeselectColors(btn: IButton): void {
		let colorHexList = [0x5dbea3, 0x33b249, 0x5adbb5];
		let label = btn.getLable() as IClipColorLabel;
		label.setColorsWithHex(colorHexList);
	}
	private buttonMouseDown(evt: IMouseEvent): void {
		
		let pv = this.m_axis.getPosition();
		switch (evt.uuid) {
			case "move_down":
				pv.y -= 2;
				break;
			case "move_up":
				pv.y += 2;
				break;
			case "move_left":
				pv.x -= 2;
				break;
			case "move_right":
				pv.x += 2;
				break;
			default:
				break;
		}
		this.m_axis.setPosition(pv);
	}
	private init3DScene(): void {
		const rsc = this.m_rscene;
		let axis = (this.m_axis = VoxEntity.createAxis3DEntity(300));
		rsc.addEntity(axis);
	}
}

export default UIButtonGroup;

// for running instance
if (!(document as any).demoState) {
	let ins = new UIButtonGroup();
	ins.initialize();
	document.title = "tutorial:UIButtonGroup";
}
