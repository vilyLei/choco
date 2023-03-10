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
import IColor4 from "../../engine/vox/material/IColor4";
import IVector3D from "../../engine/vox/math/IVector3D";

class PBREnvLightingMaterialWrapper {

    private m_albedo = new Float32Array([0.0, 0.0, 0.0, 0.0]);
    private m_params = new Float32Array([0.0, 0.0, 1.0, 0.0]);
    private m_F0 = new Float32Array([0.0, 0.0, 0.0, 0.0]);
    private m_lightPositions = new Float32Array(4 * 4);
    private m_lightColors = new Float32Array(4 * 4);
    private m_material: IShaderMaterial = null;

    constructor() {
    }
    get material(): IRenderMaterial {

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
    setPosAt(i: number, pv: IVector3D): void {
        if (i < 4) {
            i *= 4;
            this.m_lightPositions[i] = pv.x;
            this.m_lightPositions[i + 1] = pv.y;
            this.m_lightPositions[i + 2] = pv.z;
        }
    }
    setAlbedoColor(color: IColor4): void {

        this.m_albedo[0] = color.r;
        this.m_albedo[1] = color.g;
        this.m_albedo[2] = color.b;
    }
    setColorAt(i: number, color: IColor4): void {
        if (i < 4) {
            i *= 4;
            this.m_lightColors[i] = color.r;
            this.m_lightColors[i + 1] = color.g;
            this.m_lightColors[i + 2] = color.b;
        }
    }
}
export { PBREnvLightingMaterialWrapper }