import ITransformEntity from "../../vox/entity/ITransformEntity";
import IDisplayEntityContainer from "../../vox/entity/IDisplayEntityContainer";
import { IVoxUIScene } from "./IVoxUIScene";

interface IUISceneEntity {
	__$setScene(sc: IVoxUIScene): void;
	getScene(): IVoxUIScene;
	
	setVisible(v: boolean): void;
	isVisible(): boolean;
	/**
	 * get renderable entity for renderer scene
	 * @returns ITransformEntity instance
	 */
	getREntities(): ITransformEntity[];
	/**
	 * get renderable entity container for renderer scene
	 * @returns IDisplayEntityContainer instance
	 */
	getRContainer(): IDisplayEntityContainer;
	update(): void;
	destroy(): void;
}
export { IUISceneEntity };
