
(document as any).demoState = 1;
class VVF {
    isEnabled(): boolean {
        return true;
    }
}
let pwin: any = window;
pwin["VoxVerify"] = new VVF();


import { TimeClock as Demo } from "./course/TimeClock";

document.title = "choco:course";
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
