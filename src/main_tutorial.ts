
(document as any).demoState = 1;

// import { EmptyScene as Demo } from "./tutorial/EmptyScene";
// import { MouseInteraction as Demo } from "./tutorial/MouseInteraction";
// import { Texture as Demo } from "./tutorial/Texture";
// import { CubeTexture as Demo } from "./tutorial/CubeTexture";
// import { Primitives as Demo } from "./tutorial/Primitives";
// import { SceneParameter as Demo } from "./tutorial/SceneParameter";
// import { Shader as Demo } from "./tutorial/Shader";
// import { MeshCreation as Demo } from "./tutorial/MeshCreation";
// import { MouseEventTest as Demo } from "./tutorial/MouseEventTest";
import { PBRShader as Demo } from "./tutorial/PBRShader";
// import { TransformTest as Demo } from "./tutorial/TransformTest";

// import { RenderingState as Demo } from "./tutorial/RenderingState";

// import { SubScene as Demo } from "./tutorial/SubScene";
// import { EntityContainer as Demo } from "./tutorial/EntityContainer";
// import { PBRClock as Demo } from "./tutorial/PBRClock";
// import { AnimationContainer as Demo } from "./tutorial/AnimationContainer";

// import { UIButton as Demo } from "./tutorial/UIButton";
// import { UIButtonGroup as Demo } from "./tutorial/UIButtonGroup";

// import { RTT as Demo } from "./tutorial/RTT";

// import { MRT as Demo } from "./tutorial/MRT";

// import { CubeMRT as Demo } from "./tutorial/CubeMRT";

// import { UVDisplacement as Demo } from "./tutorial/UVDisplacement";
// import { NormalMap as Demo } from "./tutorial/NormalMap";
// import { HeightMap as Demo } from "./tutorial/HeightMap";

// import { StencilTest as Demo } from "./tutorial/StencilTest";

document.title = "choco:tutorial";

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