/***************************************************************************/
/*                                                                         */
/*  Copyright 2018-2022 by                                                 */
/*  Vily(vily313@126.com)                                                  */
/*                                                                         */
/***************************************************************************/

import IRenderMaterial from "../../engine/vox/render/IRenderMaterial";
import { PBREnvLighting } from "./shader/PBREnvLighting";
import { VoxMaterial } from "../../engine/cospace/voxmaterial/VoxMaterial";
import { RendererDevice } from "../../engine/cospace/voxengine/VoxRScene";
import IRenderTexture from "../../engine/vox/render/texture/IRenderTexture";
import IShaderMaterial from "../../engine/vox/material/mcase/IShaderMaterial";

class PBREnvLightingMaterialWrapper {

    private m_albedo = new Float32Array([0.5, 0.0, 0.0, 0.0]);
    private m_params = new Float32Array([0.0, 0.0, 1.0, 0.0]);
    private m_F0 = new Float32Array([0.0, 0.0, 0.0, 0.0]);
    private m_lightPositions = new Float32Array(4 * 4);
    private m_lightColors = new Float32Array(4 * 4);
    private m_material: IShaderMaterial = null;

    constructor() {
    }
    get material(): IRenderMaterial {

        //     oum.uniformNameList = ["u_albedo", "u_params", "u_lightPositions", "u_lightColors", "u_F0"];
        //     oum.dataList = [this.m_albedo, this.m_params, this.m_lightPositions, this.m_lightColors, this.m_F0];
        if (this.m_material == null) {
            let material = VoxMaterial.createShaderMaterial("pbr_envLighting_shader");

            let headCode =
                `#version 300 es
precision highp float;
`;
            let fragCode = headCode;
            if (RendererDevice.IsWebGL1()) {

                fragCode +=
                    `
#extension GL_EXT_shader_texture_lod : enable
#define VOX_TextureCubeLod textureCubeLodEXT
`;
            } else {
    
                fragCode +=
                    `
#define VOX_TextureCubeLod textureLod
`;
            }
            fragCode += PBREnvLighting.frag_body;
            let vertCode = headCode + PBREnvLighting.vert_body;

            material.setFragShaderCode(fragCode);
            material.setVertShaderCode(vertCode);

            material.addUniformDataAt("u_albedo", this.m_albedo);
            material.addUniformDataAt("u_params", this.m_params);
            material.addUniformDataAt("u_lightPositions", this.m_lightPositions);
            material.addUniformDataAt("u_lightColors", this.m_lightColors);
            material.addUniformDataAt("u_F0", this.m_F0);
            this.m_material = material;
        }
        return this.m_material;
    }
    setTextureList(list: IRenderTexture[]): void {
        let m = this.material;
        m.setTextureList(list);
    }
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
        if (i < 4) {
            i *= 4;
            this.m_lightPositions[i] = px;
            this.m_lightPositions[i + 1] = py;
            this.m_lightPositions[i + 2] = pz;
        }
    }
    setColor(pr: number, pg: number, pb: number): void {

        this.m_albedo[0] = pr;
        this.m_albedo[1] = pg;
        this.m_albedo[2] = pb;
    }
    setColorAt(i: number, pr: number, pg: number, pb: number): void {
        if (i < 4) {
            i *= 4;
            this.m_lightColors[i] = pr;
            this.m_lightColors[i + 1] = pg;
            this.m_lightColors[i + 2] = pb;
        }
    }
}
export { PBREnvLightingMaterialWrapper }