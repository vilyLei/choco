import IRendererScene from "../engine/vox/scene/IRendererScene";
import { VoxRScene } from "../engine/cospace/voxengine/VoxRScene";
import { VoxUIInteraction } from "../engine/cospace/voxengine/ui/VoxUIInteraction";
import { VoxEntity } from "../engine/cospace/voxentity/VoxEntity";
import { VoxMaterial } from "../engine/cospace/voxmaterial/VoxMaterial";
import IRenderTexture from "../engine/vox/render/texture/IRenderTexture";
import VoxModuleShell from "../common/VoxModuleShell";

export class Texture {
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
		this.m_rscene = VoxRScene.createRendererScene()
			.initialize(null)
			.setAutoRunning(true);
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

		let planeMaterial = VoxMaterial.createDefaultMaterial();

		let texture = this.getTexByUrl("static/assets/box.jpg");
		let textureList = [texture];

		planeMaterial.setTextureList( textureList );

		let plane = VoxEntity.createXOZPlane(-50, -50, 100, 100, planeMaterial);
		plane.setScaleXYZ(5.0, 5.0, 5.0);
		rsc.addEntity(plane);
	}
}

export default Texture;

// for running instance
if (!(document as any).demoState) {
	let ins = new Texture();
	ins.initialize();
}
