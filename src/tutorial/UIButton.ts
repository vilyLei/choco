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

export class UIButton {
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
		mi.initialize(this.m_rscene).setAutoRunning(true);
	}
	private initRenderer(): void {
        let RD = VoxRScene.RendererDevice;
        /**
         * 开启打印输出shader构建的相关信息
         */
        RD.SHADERCODE_TRACE_ENABLED = true;
        RD.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true;

		let graph = this.m_graph = VoxRScene.createRendererSceneGraph();

        let rparam = graph.createRendererSceneParam();
        rparam.setAttriAntialias(true);
        rparam.setCamPosition(1000.0, 1000.0, 1000.0);
        rparam.setCamProject(45, 20.0, 9000.0);
        this.m_rscene = graph.createScene(rparam);
		graph.setAutoRunning(true);
	}
	private initUIScene(): void {
		let uisc = this.m_uiScene = VoxUI.createUIScene(this.m_graph);
		uisc.texAtlasNearestFilter = true;		
		uisc.initialize(this.m_graph);
		this.initUIEntities();
	}
	private initUIEntities(): void {

		let textColor = VoxMaterial.createColor4(1,1,1,1);

		let btnShow = VoxUI.createTextLabelButton("show", "Show Entity", 170, 50, textColor);
		btnShow.setXY(200, 100);
		this.m_uiScene.addEntity(btnShow);
		btnShow.addEventListener(MouseEvent.MOUSE_DOWN, this, this.buttonMouseDown);
		this.applyColors(btnShow);

		let btnHide = VoxUI.createTextLabelButton("hide", "Hide Entity", 170, 50, textColor);
		btnHide.setXY(200, 170);
		this.m_uiScene.addEntity(btnHide);
		btnHide.addEventListener(MouseEvent.MOUSE_DOWN, this, this.buttonMouseDown);
		this.applyColors(btnHide);

	}
	private applyColors(btn: IButton): void {
		
		let colorHexList = [0x5dbea3, 0x33b249, 0x5adbb5];
		
		let label = btn.getLable() as IClipColorLabel;
		label.setColorsWithHex(colorHexList);
	}
	private buttonMouseDown(evt: IMouseEvent): void {
		console.log("buttonMouseDown(), evt.uuid: ", evt.uuid);
		switch(evt.uuid) {
			case "show":
				this.m_axis.setVisible(true);
				break;
			case "hide":
				this.m_axis.setVisible(false);
				break;
		}
	}
	private init3DScene(): void {
		const rsc = this.m_rscene;
		let axis = this.m_axis = VoxEntity.createAxis3DEntity(300);
		rsc.addEntity(axis);
	}
}

export default UIButton;

// for running instance
if (!(document as any).demoState) {
	let ins = new UIButton();
	ins.initialize();
	document.title = "tutorial:UIButton";
}
