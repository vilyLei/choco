
// import { EmptyScene as Demo } from "./tutorial/EmptyScene";
// import { MouseInteraction as Demo } from "./tutorial/MouseInteraction";
// import { Primitives as Demo } from "./tutorial/Primitives";
// import { SceneParameter as Demo } from "./tutorial/SceneParameter";
// import { Shader as Demo } from "./tutorial/Shader";
// import { MeshCreation as Demo } from "./tutorial/MeshCreation";
// import { MouseEventTest as Demo } from "./tutorial/MouseEventTest";
// import { PBRShader as Demo } from "./tutorial/PBRShader";
// import { TransformTest as Demo } from "./tutorial/TransformTest";

import { RenderingState as Demo } from "./tutorial/RenderingState";

document.title = "tutorial";
(document as any).demoState = 1;

let ins = new Demo() as any;

function main(): void {
    console.log("------ demo --- init ------");
    ins.initialize();
    if (ins.run != undefined) {
        function mainLoop(now: any): void {
            ins.run();
            window.requestAnimationFrame(mainLoop);
        }
        window.requestAnimationFrame(mainLoop);
    }
    console.log("------ demo --- running ------");
}
main();