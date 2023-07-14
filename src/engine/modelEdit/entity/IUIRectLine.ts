import IAABB from "../../vox/geom/IAABB";
import IRendererScene from "../../vox/scene/IRendererScene";
interface IUIRectLine {

	bounds: IAABB;
	initialize(rscene: IRendererScene): void;
	reset(): void;
	enable(): void;
	disable(): void;
	isEnabled(): boolean;

	isSelectEnabled(): boolean;
	isVisible(): boolean;
	setZ(pz: number): void;
	begin(px: number, py: number): void;
	end(px: number, py: number): void;
	move(px: number, py: number): void;
}

export { IUIRectLine }
