import IVector3D from "../../vox/math/IVector3D";
import IRenderEntity from "../../vox/render/IRenderEntity";
import IEntityQuery from "../../vox/scene/IEntityQuery";
import IRendererScene from "../../vox/scene/IRendererScene";

interface IRectFrameQuery extends IEntityQuery {

	query(entities: IRenderEntity[], total: number): void;
	initialize(rscene: IRendererScene):void;
	getEntities(min: IVector3D, max: IVector3D): IRenderEntity[];
}

export { IRectFrameQuery }
