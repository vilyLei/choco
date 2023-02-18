
// import {EmptyScene as Demo} from "./tutorial/EmptyScene";
import {MouseInteraction as Demo} from "./tutorial/MouseInteraction";

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