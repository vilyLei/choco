import { IRenderCamera } from "../../../engine/vox/render/IRenderCamera";
import IRendererScene from "../../../engine/vox/scene/IRendererScene";
import { Vector3D, VoxMath } from "../../../engine/cospace/math/VoxMath";
import { ICameraView } from "./ICameraView";

class CameraView implements ICameraView {
	private m_rscene: IRendererScene = null;
	private m_camera: IRenderCamera = null;
	constructor() {
	}
	initialize(rscene: IRendererScene): void {
		if(this.m_rscene == null && rscene != null) {
			this.m_rscene = rscene;
			this.m_camera = rscene.getCamera();
		}
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
	getCameraData(posScale: number = 0.01, transpose: boolean = false): Float32Array {
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

export { CameraView };
