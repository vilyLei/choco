interface IDsrdImageViewer {

	filterUrl(purl: string): string;
	setViewImageUrls(urls: string[]): void;
	/**
	 * @param url img url string parameter
	 * @param show the default value is false
	 * @param imgAlpha the default falue is 1.0
	 */
	setViewImageUrl(url: string, show?: boolean, imgAlpha?: number): void;
	setViewImageFakeAlpha(alpha: number): void;
	setViewImageAlpha(alpha: number): void;
	getViewImageAlpha(): number;
	setViewImageVisible(v: boolean): void;
	getViewImageVisible(): boolean;
}

export { IDsrdImageViewer };
