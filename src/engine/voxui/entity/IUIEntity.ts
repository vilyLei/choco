import IVector3D from "../../vox/math/IVector3D";
import { ITipInfo } from "../base/ITipInfo";
import { IUISceneEntity } from "../scene/IUISceneEntity";
import IAABB from "../../vox/geom/IAABB";

interface IUIEntity extends IUISceneEntity {
	/**
	 * the default valule is false
	 */
	premultiplyAlpha: boolean;
	/**
	 * the default valule is false
	 */
	transparent: boolean;
	/**
	 * the default valule is false
	 */
	depthTest: boolean;
	
	/**
	 * the default valule is null
	 */
	info: ITipInfo;

	setParent(parent: IUIEntity): IUIEntity;
	getParent(): IUIEntity;
	
	getGlobalBounds(): IAABB;
	getWidth(): number;
	getHeight(): number;
	setX(x: number): void;
	setY(y: number): void;
	setZ(z: number): void;
	getX(): number;
	getY(): number;
	getZ(): number;
	setXY(px: number, py: number): void;
	setXYZ(px: number, py: number, pz: number): void;
	setPosition(pv: IVector3D): void;
	getPosition(pv: IVector3D): IVector3D;
	setRotation(r: number): void;
	getRotation(): number;
	setScaleXY(sx: number, sy: number): void;
	setScaleX(sx: number): void;
	setScaleY(sy: number): void;
	getScaleX(): number;
	getScaleY(): number;
	copyTransformFrom(src: IUIEntity): void;
}
export { IUIEntity };
