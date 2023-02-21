/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/

import { PBREnvLighting } from "./shader/PBREnvLighting";

class PBREnvLightingMaterialWrapper {
    constructor() {
    }

    private m_albedo: Float32Array = new Float32Array([0.5, 0.0, 0.0, 0.0]);
    private m_params: Float32Array = new Float32Array([0.0, 0.0, 1.0, 0.0]);
    private m_F0: Float32Array = new Float32Array([0.0, 0.0, 0.0, 0.0]);
    private m_lightPositions: Float32Array = new Float32Array(4 * 4);
    private m_lightColors: Float32Array = new Float32Array(4 * 4);

    setMetallic(metallic: number): void {

        this.m_params[0] = Math.min(Math.max(metallic, 0.05), 1.0);
    }
    setRoughness(roughness: number): void {

        roughness = Math.min(Math.max(roughness, 0.05), 1.0);
        this.m_params[1] = roughness;
    }
    setAO(ao: number): void {

        this.m_params[2] = ao;
    }
    setF0(f0x: number, f0y: number, f0z: number): void {

        this.m_F0[0] = f0x;
        this.m_F0[1] = f0y;
        this.m_F0[2] = f0z;
    }
    setPosAt(i: number, px: number, py: number, pz: number): void {

        i *= 4;
        this.m_lightPositions[i] = px;
        this.m_lightPositions[i + 1] = py;
        this.m_lightPositions[i + 2] = pz;
    }
    setColor(pr: number, pg: number, pb: number): void {

        this.m_albedo[0] = pr;
        this.m_albedo[1] = pg;
        this.m_albedo[2] = pb;
    }
    setColorAt(i: number, pr: number, pg: number, pb: number): void {

        i *= 4;
        this.m_lightColors[i] = pr;
        this.m_lightColors[i + 1] = pg;
        this.m_lightColors[i + 2] = pb;
    }

    // createSelfUniformData(): ShaderUniformData {

    //     let oum = new ShaderUniformData();
    //     oum.uniformNameList = ["u_albedo", "u_params", "u_lightPositions", "u_lightColors", "u_F0"];
    //     oum.dataList = [this.m_albedo, this.m_params, this.m_lightPositions, this.m_lightColors, this.m_F0];
    //     return oum;
    // }
}
export {PBREnvLightingMaterialWrapper}