
(document as any).demoState = 1;
class VVF {
    isEnabled(): boolean {
        return true;
    }
}
let pwin: any = window;
pwin["VoxVerify"] = new VVF();

import { Course001 as Demo } from "./course/geiloxx/Course001";

document.title = "choco:course:geiloxx";
// include course or experiment

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
