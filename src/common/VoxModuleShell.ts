
import { ModuleLoader } from "../cospace/modules/loaders/ModuleLoader";
import { VoxRScene } from "../cospace/voxengine/VoxRScene";

export default class VoxModuleShell {
    constructor() { }

    initialize(interactCallback: () => void, rendererCallback: () => void, commonCallback: () => void = null): void {

        let mouseInteractML: ModuleLoader = null;
        let url = "";
        if (interactCallback) {
            url = "static/cospace/engine/uiInteract/CoUIInteraction.umd.js";
            mouseInteractML = new ModuleLoader(2, (): void => {
                interactCallback();
            });
        }

        let url0 = "static/cospace/engine/renderer/CoRenderer.umd.js";
        let url1 = "static/cospace/engine/rscene/CoRScene.umd.js";
        let url2 = "static/cospace/math/CoMath.umd.js";
        let url3 = "static/cospace/ageom/CoAGeom.umd.js";
        let url4 = "static/cospace/coMaterial/CoMaterial.umd.js";
        let url5 = "static/cospace/comesh/CoMesh.umd.js";
        let url6 = "static/cospace/cotexture/CoTexture.umd.js";
        let url7 = "static/cospace/coentity/CoEntity.umd.js";
        let url8 = "static/cospace/ui/Lib_VoxUI.umd.js";

        let loader = new ModuleLoader(2, (): void => {
            if (this.isEngineEnabled()) {
                VoxRScene.initialize();
                console.log("ready to build renderer ...");
                if (rendererCallback) {
                    rendererCallback();

                    new ModuleLoader(1, (): void => {
                        new ModuleLoader(1, (): void => {
                            new ModuleLoader(1, (): void => {
                                new ModuleLoader(1, (): void => {
                                    new ModuleLoader(1, (): void => {
                                        new ModuleLoader(1, (): void => {
                                            new ModuleLoader(1, (): void => {
                                                if (commonCallback) {
                                                    commonCallback();
                                                }
                                            }).load(url8);
                                        }).load(url7);
                                    }).load(url6);
                                }).load(url5);
                            }).load(url4);
                        }).load(url3);
                    }).load(url2);
                }
            }
        });

        if (interactCallback) {
            loader.addLoader(mouseInteractML).load(url0).load(url1);

            mouseInteractML.load(url);
        } else {
            loader.load(url0).load(url1);
        }
    }
    isEngineEnabled(): boolean {
        return VoxRScene.isEnabled();
    }
}