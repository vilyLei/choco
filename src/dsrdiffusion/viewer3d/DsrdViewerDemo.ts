
import { DsrdViewer } from "./DsrdViewer";

/**
 * cospace renderer
 */
export class DsrdViewerDemo {

	private m_viewer = new DsrdViewer();
	constructor() {}

	initialize(): void {
		this.m_viewer.initialize();
	}
	run(): void {
		this.m_viewer.run();
	}
}
export default DsrdViewerDemo;
