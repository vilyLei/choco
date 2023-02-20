
// import { EmptyScene as Demo } from "./tutorial/EmptyScene";
// import { MouseInteraction as Demo } from "./tutorial/MouseInteraction";
// import { Primitives as Demo } from "./tutorial/Primitives";
// import { SceneParameter as Demo } from "./tutorial/SceneParameter";
// import { Shader as Demo } from "./tutorial/Shader";
// import { MouseEventTest as Demo } from "./tutorial/MouseEventTest";
import { TransformTest as Demo } from "./tutorial/TransformTest";

document.title = "choco app";
let ins = new Demo();
function main(): void {
    console.log("------ demo --- init ------");
    ins.initialize();
    function mainLoop(now: any): void {
        ins.run();
        window.requestAnimationFrame(mainLoop);
    }
    window.requestAnimationFrame(mainLoop);
    console.log("------ demo --- running ------");
}
main();