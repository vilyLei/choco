/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/



import { Vector3D, MathConst, VoxMath } from "../../cospace/math/VoxMath";
import IVector3D from "../../vox/math/IVector3D";
import IMatrix4 from "../../vox/math/IMatrix4";
import { IRenderCamera } from "../../vox/render/IRenderCamera";

export default class CameraTrack {

	private m_matrix: IMatrix4 = null;
	private m_position: IVector3D = null;
	private m_direction: IVector3D = null;
	
	private m_angle = 0.0;
	private m_updateEnabled = false;
	private m_camera: IRenderCamera = null;
	constructor() {
		this.m_matrix = VoxMath.createMat4();
		this.m_position = VoxMath.createVec3();
		this.m_direction = VoxMath.createVec3();
	}
	destroy(): void {
		this.m_camera = null;
	}
	bindCamera(cam: IRenderCamera): void {
		this.m_camera = cam;
		if (cam != null) {
			this.m_direction.copyFrom(this.m_camera.getPosition());
			this.m_direction.subtractBy(this.m_camera.getLookAtPosition());
		}
	}
	update(): void {
		if (this.m_camera != null && this.m_updateEnabled) {
			this.m_updateEnabled = false;
		}
	}
	rotationOffsetAngleWorldY(float_degrees: number): void {
		this.m_angle = float_degrees;
		this.m_updateEnabled = true;
		this.m_direction.copyFrom(this.m_camera.getPosition());
		this.m_direction.subtractBy(this.m_camera.getLookAtPosition());
		this.m_matrix.identity();
		this.m_matrix.appendRotationY(this.m_angle * MathConst.MATH_PI_OVER_180);
		this.m_position.copyFrom(this.m_direction);
		this.m_matrix.transformVectorSelf(this.m_position);
		this.m_position.addBy(this.m_camera.getLookAtPosition());

		this.m_camera.lookAtRH(this.m_position, this.m_camera.getLookAtPosition(), Vector3D.Y_AXIS);
	}
	rotationOffsetAngleWordX(float_degrees: number): void {
		this.m_angle = float_degrees;
		this.m_updateEnabled = true;
		this.m_direction.copyFrom(this.m_camera.getPosition());
		this.m_direction.subtractBy(this.m_camera.getLookAtPosition());
		this.m_matrix.identity();
		this.m_matrix.appendRotationX(this.m_angle * MathConst.MATH_PI_OVER_180);
		this.m_position.copyFrom(this.m_direction);
		this.m_matrix.transformVectorSelf(this.m_position);
		this.m_position.addBy(this.m_camera.getLookAtPosition());
		this.m_camera.lookAtRH(this.m_position, this.m_camera.getLookAtPosition(), Vector3D.X_AXIS);
	}
	rotationOffsetAngleWordZ(float_degrees: number): void {
		this.m_angle = float_degrees;
		this.m_updateEnabled = true;
		this.m_direction.copyFrom(this.m_camera.getPosition());
		this.m_direction.subtractBy(this.m_camera.getLookAtPosition());
		this.m_matrix.identity();
		this.m_matrix.appendRotationZ(this.m_angle * MathConst.MATH_PI_OVER_180);
		this.m_position.copyFrom(this.m_direction);
		this.m_matrix.transformVectorSelf(this.m_position);
		this.m_position.addBy(this.m_camera.getLookAtPosition());
		this.m_camera.lookAtRH(this.m_position, this.m_camera.getLookAtPosition(), Vector3D.Z_AXIS);
	}
}
