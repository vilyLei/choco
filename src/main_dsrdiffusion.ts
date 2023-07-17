
(document as any).demoState = 1;
class VVF {
    isEnabled(): boolean {
        return true;
    }
}
let pwin: any = window;
pwin["VoxVerify"] = new VVF();

// import {DemoPBRViewer as Demo} from "./dsrdiffusion/viewer3d/DemoPBRViewer";

// import {DsrdViewerDemo as Demo} from "./dsrdiffusion/viewer3d/DsrdViewerDemo";
// import {DsrdViewerLoaderDemo as Demo} from "./dsrdiffusion/viewer3d/DsrdViewerLoaderDemo";

import {DsrdShellDemo as Demo} from "./dsrdiffusion/DsrdShellDemo";
//  import {DsrdShellLoaderDemo as Demo} from "./dsrdiffusion/DsrdShellLoaderDemo";
document.title = "choco:drsdiffusion";

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
