// declare var SceneViewer: any;
declare var DsrdViewer: any;
export class DsrdViewerLoaderDemo {
	private m_viewerLayer: HTMLDivElement = null;
	readonly rscViewer: any = null;
	onaction: (idns: string, type: string) => void = null;
	constructor() {}
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
	initialize(): void {

		let div = this.createDiv(0,0,512,512);
		this.init(div);
	}
	init(viewerLayer: HTMLDivElement): void {
		console.log("DsrdViewerLoaderDemo::initialize()......");
		this.m_viewerLayer = viewerLayer;

		// let url = "static/cospace/dsrdiffusion/scViewer/SceneViewer.umd.js";
		let url = "static/cospace/dsrdiffusion/dsrdViewer/DsrdViewer.umd.js";
		this.loadModule(url);
	}
	private init3DScene(): void {
		// let rscViewer = new SceneViewer.SceneViewer();
		let rscViewer = new DsrdViewer.DsrdViewer();

		let selfT: any = this;
		selfT.rscViewer = rscViewer;
		console.log("rscViewer: ", rscViewer);
		let debugDev = true;
		let host = location.href;
		host = host.toLowerCase();
		if (host.indexOf("diffusion") > 0) {
			debugDev = false;
		}
		rscViewer.initialize(this.m_viewerLayer, () => {}, true, debugDev, false);
		// 增加三角面数量的信息显示
		rscViewer.setForceRotate90(true);
		if(this.onaction) {
			this.onaction("rsc_viewer_loaded", "finish")
		}
		//setModelSelectListener
		rscViewer.setModelSelectListener((urls: string[]): void => {
			console.log("setModelSelectListener(), urls: ", urls);
		});
		// rscViewer.setMouseUpListener((evt: any): void => {
		// 	console.log("upupup XXX, evt: ", evt);
		// 	if(evt.uuid == "") {
		// 		console.log("clear ops !!!");
		// 	}else {
		// 		console.log("select ops !!!");
		// 	}
		// });
	}
	private loadModule(purl: string): void {
		let codeLoader = new XMLHttpRequest();
		codeLoader.open("GET", purl, true);
		codeLoader.onerror = function(err) {
			console.error("loadModule error: ", err);
		};
		codeLoader.onprogress = e => {
			// this.showLoadInfo(e, codeLoader);
		};
		codeLoader.onload = () => {
			let scriptEle = document.createElement("script");
			scriptEle.onerror = e => {
				console.error("module script onerror, e: ", e);
			};
			scriptEle.innerHTML = codeLoader.response;
			document.head.appendChild(scriptEle);
			// this.loadFinish();
			this.init3DScene();
		};
		codeLoader.send(null);
	}
	run(): void {
		if(this.rscViewer) {
			this.rscViewer.run();
		}
	}
}
export default DsrdViewerLoaderDemo;

