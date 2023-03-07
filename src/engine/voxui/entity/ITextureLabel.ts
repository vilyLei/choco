import IRenderTexture from "../../vox/render/texture/IRenderTexture";
import { IVoxUIScene } from "../scene/IVoxUIScene";

import { IUIEntity } from "./IUIEntity";

interface ITextureLabel extends IUIEntity {
	/**
	 * @param uiScene IVoxUIScene instance
	 * @param tex IRenderTexture instance
	 * @param width the default value is 128
	 * @param height the default value is 128
	 */
	initialize(uiScene: IVoxUIScene, tex: IRenderTexture, width?: number, height?: number): void;
}

export { ITextureLabel }
