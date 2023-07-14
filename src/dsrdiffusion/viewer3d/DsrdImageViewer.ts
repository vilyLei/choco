
import { MouseEvent, EventBase, RendererState, VoxRScene } from "../../engine/cospace/voxengine/VoxRScene";

import { VoxEntity } from "../../engine/cospace/voxentity/VoxEntity";

import IRenderEntity from "../../engine/vox/render/IRenderEntity";
import ImageResLoader from "../../engine/cospace/app/utils/ImageResLoader";
import IRenderTexture from "../../engine/vox/render/texture/IRenderTexture";
import IRendererScene from "../../engine/vox/scene/IRendererScene";
import { VoxMaterial } from "../../engine/cospace/voxmaterial/VoxMaterial";
import IDefault3DMaterial from "../../engine/vox/material/mcase/IDefault3DMaterial";

// declare var CoMath: ICoMath;

/**
 * cospace renderer
 */
class DsrdImageViewer {
	protected m_rscene: IRendererScene = null;
	private m_imgViewEntity: IRenderEntity = null;
	private m_imageAlpha = 1.0;
	private m_imageFakeAlpha = 0.2;
	private m_imageVisible = true;
	private m_viewImageUrl = "static/assets/modules/apple_01/mini.jpg";
	private m_imgResLoader = new ImageResLoader();
	private m_imgLoaded = true;
	private m_imgUrls: string[] = [];
	private m_imgTex: IRenderTexture = null;
	private m_imgTexDelay = 0;
	private m_rsceneCamVer = -10;
	private m_material: IDefault3DMaterial = null;
	debugDev = true;
	constructor() {}
	initialize(rscene: IRendererScene): void {
		rscene.updateCamera();
		this.m_rscene = rscene;
		this.m_rsceneCamVer = this.m_rscene.getCamera().version;

		let delay = 30;

		this.m_rscene.addEventListener(MouseEvent.MOUSE_DOUBLE_CLICK, this, (evt: any): void => {
			if(this.m_imageAlpha > this.m_imageFakeAlpha) {
				this.setViewImageAlpha(this.m_imageFakeAlpha);
			}else {
				this.setViewImageAlpha(1.0);
			}
		})
		this.m_rscene.addEventListener(EventBase.ENTER_FRAME, this, (evt): void => {
			// console.log("...");
			const cam = this.m_rscene.getCamera();
			if (this.m_rsceneCamVer != cam.version) {
				this.m_rsceneCamVer = cam.version;
				this.setViewImageAlpha(this.m_imageFakeAlpha);
			}
			if (delay > 0) {
				delay--;
				if (delay < 1) {
					delay = 30;
					// console.log("this.m_imgLoaded: ", this.m_imgLoaded, this.m_imgUrls.length);
					if (this.m_imgLoaded) {
						if (this.m_imgUrls.length > 0) {
							this.setViewImageUrl(this.m_imgUrls.shift());
						}
					}
				}
			}
			if (this.m_imgTex != null) {
				console.log("deferred tex res AAA !!!");
				if (this.m_imgTex.isGpuEnabled()) {
					if (this.m_imgTexDelay > 0) {
						this.m_imgTexDelay--;
						if (this.m_imgTexDelay < 1) {
							console.log("deferred tex alpha changed !!!");
							this.setViewImageAlpha(this.m_imageAlpha);
							this.m_imgTex = null;
						}
					}
				}
			}
		});
	}
	// run(): void {}
	filterUrl(purl: string): string {
		// let host = URLFilter.getHostUrl("9090");
		// if (this.debugDev) {
		// 	host = "";
		// }
		// if (purl.indexOf("http:") < 0 && purl.indexOf("https:") < 0) {
		// 	purl = host + purl;
		// }
		return purl;
	}
	setViewImageUrls(urls: string[]): void {
		if (urls === null || urls === undefined) {
			urls = [];
		}
		this.m_imgUrls = urls;
	}
	setViewImageUrl(url: string, show = false, imgAlpha = 1.0): void {
		console.log("this.setViewImageUrl(), url: ", url);
		if (url != "") {
			this.m_imageAlpha = imgAlpha;
			console.log("this.setViewImageUrl(), ready load a new img B.");
			if (this.m_imgViewEntity != null) {
				console.log("this.setViewImageUrl(), ready load a new img C.");
				console.log("url A: ", this.m_viewImageUrl);
				console.log("url B: ", url);
				if (this.m_viewImageUrl != url) {
					console.log("this.setViewImageUrl(), ready load a new img.");
					if (this.m_imgLoaded) {
						this.m_viewImageUrl = url;
						this.m_imgLoaded = false;
						this.m_imgResLoader.load(this.filterUrl(url), (img: HTMLImageElement, imgUrl: string): void => {
							let tex = this.m_rscene.textureBlock.createImageTex2D();
							tex.flipY = true;
							tex.setDataFromImage(img);
							console.log("load a new tex res from an image.test01.");
							// this.m_imgViewEntity.setAlpha(this.m_imageAlpha);
							this.m_imgViewEntity.setTextureList([tex]);
							this.m_imgViewEntity.updateMaterialToGpu();
							this.m_imgLoaded = true;
							this.m_imgTex = tex;
							this.m_imgTexDelay = 5;
						});
					} else {
						this.m_imgUrls.push(url);
					}
				}
			} else {
				this.m_viewImageUrl = url;
				this.initImgViewer();
			}
		}
	}
	setViewImageFakeAlpha(alpha: number): void {
		this.m_imageFakeAlpha = alpha;
	}
	setViewImageAlpha(alpha: number): void {
		this.m_imageAlpha = alpha;
		if (this.m_material != null) {
			this.m_material.setAlpha(this.m_imageAlpha);
		}
	}
	getViewImageAlpha(): number {
		return this.m_imageAlpha;
	}
	setViewImageVisible(v: boolean): void {
		this.m_imageVisible = v;
		if (this.m_imgViewEntity != null) {
			this.m_imgViewEntity.setVisible(v);
		}
	}
	getViewImageVisible(): boolean {
		return this.m_imageVisible;
	}
	private initImgViewer(): void {

		if (this.m_imgViewEntity == null) {
			console.log("this.initImgViewer(), this.m_viewImageUrl: ", this.m_viewImageUrl);

			this.m_imgResLoader.load(this.filterUrl(this.m_viewImageUrl), (img: HTMLImageElement, imgUrl: string): void => {
				let tex = this.m_rscene.textureBlock.createImageTex2D();
				tex.flipY = true;
				tex.setDataFromImage(img);
				let material = VoxMaterial.createDefaultMaterial(false);
				material.fixAlignScreen = true;
				material.setAlpha(this.m_imageAlpha);
				material.setTextureList([tex]);
				material.initializeByCodeBuf(true);
				this.m_material = material;
				this.m_imgViewEntity = VoxEntity.createFixScreenPlane(-1, -1, 2.0, 2.0, material, true);
				this.m_imgViewEntity.setRenderState(RendererState.BACK_TRANSPARENT_ALWAYS_STATE);
				this.m_imgViewEntity.setVisible(this.m_imageVisible);
				this.m_rscene.addEntity(this.m_imgViewEntity, 1);
			});
		}
	}
}

export { DsrdImageViewer };
