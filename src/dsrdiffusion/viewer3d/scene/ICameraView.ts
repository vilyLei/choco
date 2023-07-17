interface ICameraView {
	// initialize(rscene: IRendererScene): void;
	/**
	 * @param fov_angle_degree the default value is 45.0
	 * @param near the default value is 10.0
	 * @param far the default value is 5000.0
	 */
	setCamProjectParam(fov_angle_degree: number, near: number, far: number): void;
	updateCamera(): void;
	/**
	 * @param fs32Arr16 number[] or Float32Array instance, its length is 16
	 * @param updateCamera the default value is true
	 */
	updateCameraWithF32Arr16(fs32Arr16: number[] | Float32Array, updateCamera?: boolean): void;
	/**
	 *
	 * @param posScale the default value is 0.01
	 * @param transpose the default value is false
	 */
	getCameraData(posScale?: number, transpose?: boolean): Float32Array;
}

export { ICameraView };
