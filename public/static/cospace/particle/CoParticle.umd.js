(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoParticle"] = factory();
	else
		root["CoParticle"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0002":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const BillboardFlowMesh_1 = __importDefault(__webpack_require__("561f"));

const BillboardFlowMaterial_1 = __webpack_require__("4175");

class BillboardFlowGroup {
  constructor() {
    this.m_billMaterial = null;
    this.m_billMesh = null;
    this.m_brightnessEnabled = true;
    this.m_alphaEnabled = false;
    this.m_playOnce = false;
    this.m_direcEnabled = false;
    this.m_clipEnabled = false;
    this.m_clipMixEnabled = false;
    this.m_spdScaleEnabled = false;
    this.entity = CoRScene.createDisplayEntity();
    this.vbWholeDataEnabled = false;
    this.flipVerticalUV = false;
    this.premultiplyAlpha = false;
    this.entity.setRenderState(CoRScene.RendererState.BACK_ADD_BLENDSORT_STATE);
  }

  createGroup(billboardTotal) {
    if (billboardTotal > 0 && this.m_billMesh == null) {
      this.m_billMesh = new BillboardFlowMesh_1.default();
      this.m_billMesh.createData(billboardTotal);
    }
  }

  setSizeAndScaleAt(i, width, height, minScale, maxScale) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setSizeAndScaleAt(i, width, height, minScale, maxScale);
    }
  }

  setPositionAt(i, x, y, z) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setPositionAt(i, x, y, z);
    }
  }

  setVelocityAt(i, spdX, spdY, spdZ) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setVelocityAt(i, spdX, spdY, spdZ);
    }
  }

  setAccelerationAt(i, accX, accY, accZ) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setAccelerationAt(i, accX, accY, accZ);
    }
  }

  setUVRectAt(i, u, v, du, dv) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setUVRectAt(i, u, v, du, dv);
    }
  }

  setTimeAt(i, lifeTime, fadeInEndFactor, fadeOutBeginFactor, beginTime = 0.0) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setTimeAt(i, lifeTime, fadeInEndFactor, fadeOutBeginFactor, beginTime);
    }
  }

  setTimeSpeedAt(i, beginTime) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setTimeSpeedAt(i, beginTime);
    }
  }

  setTimeSpeed(i, timeSpeed) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setTimeSpeedAt(i, timeSpeed);
    }
  }

  setAlphaAt(i, alpha) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setAlphaAt(i, alpha);
    }
  }

  setBrightnessAt(i, brightness) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setBrightnessAt(i, brightness);
    }
  }

  setRGBA4f(pr, pg, pb, pa) {
    if (this.m_billMaterial != null) {
      this.m_billMaterial.setRGBA4f(pr, pg, pb, pa);
    }
  }

  setRGB3f(pr, pg, pb) {
    if (this.m_billMaterial != null) {
      this.m_billMaterial.setRGB3f(pr, pg, pb);
    }
  }

  setRGBAOffset4f(pr, pg, pb, pa) {
    if (this.m_billMaterial != null) {
      this.m_billMaterial.setRGBAOffset4f(pr, pg, pb, pa);
    }
  }

  setRGBOffset3f(pr, pg, pb) {
    if (this.m_billMaterial != null) {
      this.m_billMaterial.setRGBOffset3f(pr, pg, pb);
    }
  }

  setAlpha(pa) {
    if (this.m_billMaterial != null) {
      this.m_billMaterial.setAlpha(pa);
    }
  }

  getAlpha() {
    return this.m_billMaterial.getAlpha();
  }

  setBrightness(brighness) {
    this.m_billMaterial.setBrightness(brighness);
  }

  getBrightness() {
    return this.m_billMaterial.getBrightness();
  }

  setAcceleration(accX, accY, accZ) {
    if (this.m_billMaterial != null) {
      this.m_billMaterial.setAcceleration(accX, accY, accZ);
    }
  }

  setSpdScaleMax(spdScaleMax, factor = 1.0) {
    if (this.m_billMaterial != null) {
      this.m_billMaterial.setSpdScaleMax(spdScaleMax, factor);
    }
  }

  setClipUVParam(cn, total, du, dv) {
    if (this.m_clipEnabled && this.m_billMaterial != null) {
      this.m_billMaterial.setClipUVParam(cn, total, du, dv);
    }
  }

  getTime() {
    return this.m_billMaterial.getTime();
  }

  setTime(time) {
    this.m_billMaterial.setTime(time);
  }
  /**
   * 设置深度偏移量
   * @param offset the value range: [-2.0 -> 2.0]
   */


  setDepthOffset(offset) {
    this.m_billMaterial.setDepthOffset(offset);
  }

  updateTime(timeOffset) {
    this.m_billMaterial.updateTime(timeOffset);
  }

  getScaleX() {
    return this.m_billMaterial.getScaleX();
  }

  getScaleY() {
    return this.m_billMaterial.getScaleY();
  }

  setScaleX(p) {
    this.m_billMaterial.setScaleX(p);
  }

  setScaleY(p) {
    this.m_billMaterial.setScaleY(p);
  }

  setScaleXY(sx, sy) {
    this.m_billMaterial.setScaleXY(sx, sy);
  }

  createMaterial(texList) {
    if (this.m_billMaterial == null) {
      this.m_billMaterial = new BillboardFlowMaterial_1.BillboardFlowMaterial(this.m_brightnessEnabled, this.m_alphaEnabled, this.m_clipEnabled);
      this.m_billMaterial.setPlayParam(this.m_playOnce, this.m_direcEnabled, this.m_clipMixEnabled, this.m_spdScaleEnabled);
      this.m_billMaterial.diffuseMap = texList[0];
      this.m_billMaterial.premultiplyAlpha = this.premultiplyAlpha;
      this.m_billMaterial.initialize();
      this.entity.setMaterial(this.m_billMaterial.material);
      this.m_billMaterial.material.initializeByCodeBuf(texList.length > 0);
    }
  }

  toTransparentBlend(always = false) {
    if (always) {
      this.entity.setRenderState(CoRScene.RendererState.BACK_TRANSPARENT_ALWAYS_STATE);
    } else {
      this.entity.setRenderState(CoRScene.RendererState.BACK_TRANSPARENT_STATE);
    }
  }

  toBrightnessBlend(always = false) {
    if (always) {
      this.entity.setRenderState(CoRScene.RendererState.BACK_ADD_ALWAYS_STATE);
    } else {
      this.entity.setRenderState(CoRScene.RendererState.BACK_ADD_BLENDSORT_STATE);
    }
  }

  setPlayParam(playOnce, direcEnabled, clipMixEnabled = false, spdScaleEnabled = false) {
    this.m_playOnce = playOnce;
    this.m_direcEnabled = direcEnabled;
    this.m_clipMixEnabled = clipMixEnabled;
    this.m_spdScaleEnabled = spdScaleEnabled;
  }

  initialize(brightnessEnabled, alphaEnabled, clipEnabled, texList) {
    this.m_clipEnabled = clipEnabled;
    this.m_brightnessEnabled = brightnessEnabled;
    this.m_alphaEnabled = alphaEnabled;

    if (this.m_billMesh != null) {
      this.createMaterial(texList);
      this.activeMesh(this.m_billMaterial.material);
    }
  }

  createBounds() {}

  activeMesh(material) {
    let mesh = this.m_billMesh.mesh;
    mesh.vbWholeDataEnabled = this.vbWholeDataEnabled;
    this.m_billMesh.flipVerticalUV = this.flipVerticalUV;
    mesh.setBufSortFormat(material.getBufSortFormat());
    this.m_billMesh.initialize();
    this.entity.setMesh(mesh);
  }

  setUV(pu, pv, du, dv) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setUV(pu, pv, du, dv);
    }
  }

  update() {
    this.entity.update();
  }

  isAwake() {
    return this.m_playOnce && this.m_billMaterial.getTime() < this.m_billMesh.getEndTime();
  }

  destroy() {
    console.log("destroy flowEntity.");

    if (this.entity != null) {
      this.entity.destroy();
      this.entity = null;
    }

    if (this.m_billMesh != null) {
      this.m_billMesh.destroy();
      this.m_billMesh = null;
    }

    if (this.m_billMaterial != null) {
      this.m_billMaterial.destroy();
      this.m_billMaterial = null;
    }
  }

}

exports.default = BillboardFlowGroup;

/***/ }),

/***/ "0ea1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const BillboardLineMaterial_1 = __webpack_require__("2856");

class BillboardLine {
  constructor() {
    this.m_material = null;
    this.m_mesh = null;
    this.m_blendType = 0;
    this.m_blendAlways = false;
    this.m_rz = 0;
    this.m_bw = 0;
    this.m_bh = 0;
    this.brightnessEnabled = true;
    this.alphaEnabled = false;
    this.rotationEnabled = false;
    this.fogEnabled = false;
    this.entity = null;
  }

  initEntity() {
    if (this.m_material == null) {
      this.m_uniformData = new Float32Array([1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0]);
      let billml = this.m_material = new BillboardLineMaterial_1.BillboardLineMaterial();
      billml.brightnessEnabled = this.brightnessEnabled;
      billml.alphaEnabled = this.alphaEnabled;
      billml.rotationEnabled = this.rotationEnabled;
      billml.fogEnabled = this.fogEnabled;
      billml.initialize(false);
      let ml = billml.material;
      ml.addUniformDataAt("u_billParam", this.m_uniformData);
      let entity = CoEntity.createDisplayEntity();
      entity.setMaterial(ml);
      entity.setMesh(this.m_mesh);
      this.entity = entity; ///*

      const RendererState = CoRScene.RendererState;
      entity.setRenderState(RendererState.BACK_ADD_BLENDSORT_STATE);

      if (this.m_blendType == 1) {
        if (this.m_blendAlways) {
          this.entity.setRenderState(RendererState.BACK_TRANSPARENT_STATE);
        } else {
          this.entity.setRenderState(RendererState.BACK_TRANSPARENT_ALWAYS_STATE);
        }
      } else if (this.m_blendType == 2) {
        if (this.m_blendAlways) {
          this.entity.setRenderState(RendererState.BACK_ADD_BLENDSORT_STATE);
        } else {
          this.entity.setRenderState(RendererState.BACK_ADD_BLENDSORT_STATE);
        }
      } //*/

    }
  }

  toTransparentBlend(always = false) {
    this.brightnessEnabled = false;
    this.alphaEnabled = true;
    this.m_blendType = 1;
    this.m_blendAlways = always;
  }

  toBrightnessBlend(always = false) {
    this.brightnessEnabled = true;
    this.alphaEnabled = false;
    this.m_blendType = 2;
  }

  initializeSquareXOY(size) {
    this.m_bw = size;
    this.m_bh = size;
    let ml = CoMesh.line;
    ml.dynColorEnabled = true;
    this.m_mesh = ml.createRectXOY(-0.5 * size, -0.5 * size, size, size);
    this.initEntity();
  }

  initializeRectXOY(bw, bh) {
    this.m_bw = bw;
    this.m_bh = bh;
    let ml = CoMesh.line;
    ml.dynColorEnabled = true;
    this.m_mesh = ml.createRectXOY(-0.5 * bw, -0.5 * bh, bw, bh);
    this.initEntity();
  }

  initializeCircleXOY(radius, segsTotal, center = null) {
    this.m_bw = radius;
    this.m_bh = radius;
    let ml = CoMesh.line;
    ml.dynColorEnabled = true;
    this.m_mesh = ml.createCircleXOY(radius, segsTotal, center);
    this.initEntity();
  }

  setRGBA4f(pr, pg, pb, pa) {
    this.m_uniformData[4] = pr;
    this.m_uniformData[5] = pg;
    this.m_uniformData[6] = pb;
    this.m_uniformData[7] = pa;
  }

  setRGB3f(pr, pg, pb) {
    this.m_uniformData[4] = pr;
    this.m_uniformData[5] = pg;
    this.m_uniformData[6] = pb;
  }

  setFadeFactor(pa) {
    this.m_uniformData[7] = pa;
  }

  getFadeFactor() {
    return this.m_uniformData[7];
  }

  setRGBAOffset4f(pr, pg, pb, pa) {
    this.m_uniformData[8] = pr;
    this.m_uniformData[9] = pg;
    this.m_uniformData[10] = pb;
    this.m_uniformData[11] = pa;
  }

  setRGBOffset3f(pr, pg, pb) {
    this.m_uniformData[8] = pr;
    this.m_uniformData[9] = pg;
    this.m_uniformData[10] = pb;
  }

  getRotationZ() {
    return this.m_rz;
  }

  setRotationZ(degrees) {
    this.m_rz = degrees;
    this.m_uniformData[2] = degrees * (degrees * Math.PI / 180.0);
  }

  getScaleX() {
    return this.m_uniformData[0];
  }

  getScaleY() {
    return this.m_uniformData[1];
  }

  setScaleX(p) {
    this.m_uniformData[0] = p;
  }

  setScaleY(p) {
    this.m_uniformData[1] = p;
  }

  setScaleXY(sx, sy) {
    this.m_uniformData[0] = sx;
    this.m_uniformData[1] = sy;
  }

  setXYZ(px, py, pz) {
    this.entity.setXYZ(px, py, pz);
  }

  setPosition(pos) {
    this.entity.setPosition(pos);
  }

  setVisible(v) {
    this.entity.setVisible(v);
  }

  getVisible() {
    return this.entity.getVisible();
  }
  /**
   * 设置深度偏移量
   * @param offset the value range: [-2.0 -> 2.0]
   */


  setDepthOffset(offset) {
    this.m_uniformData[3] = offset;
  }

  getUniformData() {
    return this.m_uniformData;
  }

  update() {
    this.entity.update();
  }

  destroy() {
    if (this.entity != null) {
      this.entity.destroy();
      this.entity = null;
    }

    if (this.m_material != null) {
      this.m_material.destroy();
      this.m_material = null;
    }

    this.m_mesh = null;
    this.m_uniformData = null;
  }

}

exports.BillboardLine = BillboardLine;

/***/ }),

/***/ "1c4a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const Billboard_1 = __webpack_require__("f65f");

const BillboardLine_1 = __webpack_require__("0ea1");

const BillboardFlareGroup_1 = __importDefault(__webpack_require__("2a08"));

const BillboardFlowGroup_1 = __importDefault(__webpack_require__("0002"));

function createBillboard() {
  return new Billboard_1.Billboard();
}

exports.createBillboard = createBillboard;

function createBillboardLine() {
  return new BillboardLine_1.BillboardLine();
}

exports.createBillboardLine = createBillboardLine;

function createBillboardFlareGroup() {
  return new BillboardFlareGroup_1.default();
}

exports.createBillboardFlareGroup = createBillboardFlareGroup;

function createBillboardFlowGroup() {
  return new BillboardFlowGroup_1.default();
}

exports.createBillboardFlowGroup = createBillboardFlowGroup;

/***/ }),

/***/ "1eb2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* unused harmony default export */ var _unused_webpack_default_export = (null);


/***/ }),

/***/ "2856":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const BillboardFragShaderBase_1 = __importDefault(__webpack_require__("67f4"));

class BillboardLineMaterial {
  constructor() {
    this.material = null;
    this.fogEnabled = false;
    this.brightnessEnabled = true;
    this.alphaEnabled = false;
    this.rotationEnabled = false;
  }

  buildShader(shdCodeBuf) {
    let coder = shdCodeBuf.getShaderCodeBuilder();
    if (this.rotationEnabled) coder.addDefine("VOX_ROTATION");

    if (this.brightnessEnabled) {
      const MT = CoRScene.MaterialPipeType;
      let f = shdCodeBuf.fogEnabled;
      let pipeline = shdCodeBuf.pipeline;

      if (pipeline != null) {
        f = f || pipeline.hasPipeByType(MT.FOG_EXP2);
        f = f || pipeline.hasPipeByType(MT.FOG);
      }

      shdCodeBuf.brightnessOverlayEnabeld = f;
    }

    coder.addVertLayout("vec3", "a_vs");
    coder.addVarying("vec4", "v_colorMult");
    coder.addVarying("vec4", "v_colorOffset");
    coder.addVertUniform("vec4", "u_billParam", 3);
    coder.addDefine("FADE_VAR", "fv4");
    let fragCode0 = `
    vec4 color = vec4(1.0);
    vec3 offsetColor = v_colorOffset.rgb;
    vec4 fv4 = v_colorMult.wwww;
`;
    let fadeCode = BillboardLineMaterial.s_billFS.getBrnAndAlphaCode();
    let fragCode2 = `
    FragColor0 = color;
`;
    coder.addFragMainCode(fragCode0 + fadeCode + fragCode2);
    coder.addVertMainCode(`
    vec4 temp = u_billParam[0];
    float cosv = cos(temp.z);
    float sinv = sin(temp.z);
    vec2 vtx = a_vs.xy * temp.xy;
    vec2 vtx_pos = vec2(vtx.x * cosv - vtx.y * sinv, vtx.x * sinv + vtx.y * cosv);
    viewPosition = u_viewMat * u_objMat * vec4(0.0,0.0,0.0,1.0);
    viewPosition.xy += vtx_pos.xy;
    gl_Position =  u_projMat * viewPosition;
    gl_Position.z = ((gl_Position.z / gl_Position.w) + temp.w) * gl_Position.w;
    v_colorMult = u_billParam[1];
    v_colorOffset = u_billParam[2];
`);
  }

  initialize(texEnabled) {
    if (this.material == null) {
      let uns = "co_billboard_line_entity_material";
      if (this.rotationEnabled) uns += "Rot";
      uns += this.brightnessEnabled ? "Brn" : "Alp";
      let material = CoRScene.createShaderMaterial(uns);
      material.fogEnabled = this.fogEnabled;
      material.setShaderBuilder(shdCodeBuf => {
        this.buildShader(shdCodeBuf);
      });
      material.initializeByCodeBuf(texEnabled);
      this.material = material;
    }
  }

  destroy() {
    if (this.material != null) {
      this.material.destroy();
      this.material = null;
    }
  }

}

BillboardLineMaterial.s_billFS = new BillboardFragShaderBase_1.default();
exports.BillboardLineMaterial = BillboardLineMaterial;

/***/ }),

/***/ "2a08":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const BillboardFlareMesh_1 = __importDefault(__webpack_require__("85e1"));

const BillboardFlareMaterial_1 = __webpack_require__("c7c6");

class BillboardFlowGroup {
  constructor() {
    this.m_billMaterial = null;
    this.m_billMesh = null;
    this.m_brightnessEnabled = true;
    this.m_alphaEnabled = false;
    this.m_clipEnabled = false;
    this.m_clipMixEnabled = false;
    this.entity = CoRScene.createDisplayEntity();
    this.vbWholeDataEnabled = false;
    this.flipVerticalUV = false;
    this.premultiplyAlpha = false;
    this.entity.setRenderState(CoRScene.RendererState.BACK_ADD_BLENDSORT_STATE);
  }

  createGroup(billboardTotal) {
    if (billboardTotal > 0 && this.m_billMesh == null) {
      this.m_billMesh = new BillboardFlareMesh_1.default();
      this.m_billMesh.createData(billboardTotal);
    }
  }

  createMaterial(texList) {
    if (this.m_billMaterial == null) {
      this.m_billMaterial = new BillboardFlareMaterial_1.BillboardFlareMaterial(this.m_brightnessEnabled, this.m_alphaEnabled, this.m_clipEnabled);
      this.m_billMaterial.diffuseMap = texList[0];
      this.m_billMaterial.premultiplyAlpha = this.premultiplyAlpha;
      this.m_billMaterial.initialize();
      this.entity.setMaterial(this.m_billMaterial.material);
      this.m_billMaterial.material.initializeByCodeBuf(texList.length > 0);
    }
  }

  activeMesh(material) {
    let mesh = this.m_billMesh.mesh;
    mesh.vbWholeDataEnabled = this.vbWholeDataEnabled;
    this.m_billMesh.flipVerticalUV = this.flipVerticalUV;
    mesh.setBufSortFormat(material.getBufSortFormat());
    this.m_billMesh.initialize();
    this.entity.setMesh(mesh);
  }

  initialize(brightnessEnabled, alphaEnabled, clipEnabled, texList) {
    this.m_clipEnabled = clipEnabled;
    this.m_brightnessEnabled = brightnessEnabled;
    this.m_alphaEnabled = alphaEnabled;

    if (this.m_billMesh != null) {
      this.createMaterial(texList);
      this.activeMesh(this.m_billMaterial.material);
    }
  }
  /**
   * 设置深度偏移量
   * @param offset the value range: [-2.0 -> 2.0]
   */


  setDepthOffset(offset) {
    this.m_billMaterial.setDepthOffset(offset);
  }

  setSizeAndScaleAt(i, width, height, minScale, maxScale) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setSizeAndScaleAt(i, width, height, minScale, maxScale);
    }
  }

  setPositionAt(i, x, y, z) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setPositionAt(i, x, y, z);
    }
  }

  setUVRectAt(i, u, v, du, dv) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setUVRectAt(i, u, v, du, dv);
    }
  }

  setTimeAt(i, lifeTime, fadeInEndFactor, fadeOutBeginFactor, timeSpeed = 1.0) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setTimeAt(i, lifeTime, fadeInEndFactor, fadeOutBeginFactor, timeSpeed);
    }
  }

  setAlphaAt(i, alpha) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setAlphaAt(i, alpha);
    }
  }

  setBrightnessAt(i, brightness) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setBrightnessAt(i, brightness);
    }
  }

  setRGBA4f(pr, pg, pb, pa) {
    if (this.m_billMaterial != null) {
      this.m_billMaterial.setRGBA4f(pr, pg, pb, pa);
    }
  }

  setRGB3f(pr, pg, pb) {
    if (this.m_billMaterial != null) {
      this.m_billMaterial.setRGB3f(pr, pg, pb);
    }
  }

  setRGBAOffset4f(pr, pg, pb, pa) {
    if (this.m_billMaterial != null) {
      this.m_billMaterial.setRGBAOffset4f(pr, pg, pb, pa);
    }
  }

  setRGBOffset3f(pr, pg, pb) {
    if (this.m_billMaterial != null) {
      this.m_billMaterial.setRGBOffset3f(pr, pg, pb);
    }
  }

  setAlpha(pa) {
    if (this.m_billMaterial != null) {
      this.m_billMaterial.setAlpha(pa);
    }
  }

  getAlpha() {
    return this.m_billMaterial.getAlpha();
  }

  setBrightness(brighness) {
    this.m_billMaterial.setBrightness(brighness);
  }

  getBrightness() {
    return this.m_billMaterial.getBrightness();
  }

  setClipUVParam(cn, total, du, dv) {
    if (this.m_clipEnabled && this.m_billMaterial != null) {
      this.m_billMaterial.setClipUVParam(cn, total, du, dv);
    }
  }

  getTime() {
    return this.m_billMaterial.getTime();
  }

  setTime(time) {
    this.m_billMaterial.setTime(time);
  }

  updateTime(timeOffset) {
    this.m_billMaterial.updateTime(timeOffset);
  }

  getScaleX() {
    return this.m_billMaterial.getScaleX();
  }

  getScaleY() {
    return this.m_billMaterial.getScaleY();
  }

  setScaleX(p) {
    this.m_billMaterial.setScaleX(p);
  }

  setScaleY(p) {
    this.m_billMaterial.setScaleY(p);
  }

  setScaleXY(sx, sy) {
    this.m_billMaterial.setScaleXY(sx, sy);
  }

  setPlayParam(clipMixEnabled) {
    this.m_clipMixEnabled = clipMixEnabled;
  }

  toTransparentBlend(always = false) {
    if (always) {
      this.entity.setRenderState(CoRScene.RendererState.BACK_TRANSPARENT_ALWAYS_STATE);
    } else {
      this.entity.setRenderState(CoRScene.RendererState.BACK_TRANSPARENT_STATE);
    }
  }

  toBrightnessBlend(always = false) {
    if (always) {
      this.entity.setRenderState(CoRScene.RendererState.BACK_ADD_ALWAYS_STATE);
    } else {
      this.entity.setRenderState(CoRScene.RendererState.BACK_ADD_BLENDSORT_STATE);
    }
  }

  setUV(pu, pv, du, dv) {
    if (this.m_billMesh != null) {
      this.m_billMesh.setUV(pu, pv, du, dv);
    }
  }

  update() {
    this.entity.update();
  }

  destroy() {
    console.log("destroy flareEntity.");

    if (this.entity != null) {
      this.entity.destroy();
      this.entity = null;
    }

    if (this.m_billMesh != null) {
      this.m_billMesh.destroy();
      this.m_billMesh = null;
    }

    if (this.m_billMaterial != null) {
      this.m_billMaterial.destroy();
      this.m_billMaterial = null;
    }
  }

}

exports.default = BillboardFlowGroup;

/***/ }),

/***/ "2a55":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

const BillboardGroupDcrBase_1 = __webpack_require__("8af9");

class BillboardFlareDcr extends BillboardGroupDcrBase_1.BillboardGroupDcrBase {
  constructor() {
    super();
  }

  initialize(texEnabled) {
    super.initialize(texEnabled);
    this.m_uniqueName = "flare_" + this.m_uniqueName;
  }

  buildVertShd(coder) {
    coder.addDefine("VOX_PARTICLE_FLARE", "1");
    coder.addVertLayout("vec4", "a_vs");
    coder.addVertLayout("vec2", "a_uvs");
    coder.addVertLayout("vec4", "a_vs2");
    coder.addVertLayout("vec4", "a_uvs2");
    let paramTotal = this.m_clipEnabled ? 4 : 3;
    coder.addVertUniform("vec4", "u_billParam", paramTotal);
    if (this.m_clipEnabled) coder.addDefine("BILL_PARAM_INDEX", "3");
  }

}

exports.BillboardFlareDcr = BillboardFlareDcr;

/***/ }),

/***/ "4175":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const BillboardFlowDcr_1 = __webpack_require__("af51");

const ShaderUniformData_1 = __importDefault(__webpack_require__("b3bd"));

class BillboardFlowMaterial {
  constructor(brightnessEnabled = true, alphaEnabled = false, clipEnabled = false) {
    this.m_brightnessEnabled = true;
    this.m_alphaEnabled = false;
    this.m_clipEnabled = false;
    this.m_clipMixEnabled = false;
    this.m_playOnce = false;
    this.m_direcEnabled = false;
    this.m_spdScaleEnabled = false;
    this.m_time = 0;
    this.m_uniformData = null;
    this.m_color = CoRScene.createColor4(1.0, 1.0, 1.0, 1.0);
    this.m_brightness = 1.0;
    this.m_dcr = new BillboardFlowDcr_1.BillboardFlowDcr();
    this.diffuseMap = null;
    this.premultiplyAlpha = false;
    this.material = null;
    this.m_brightnessEnabled = brightnessEnabled;
    this.m_alphaEnabled = alphaEnabled;
    this.m_clipEnabled = clipEnabled;
  }

  initialize() {
    if (this.m_clipEnabled) {
      this.m_uniformData = new Float32Array([1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2, 4, 0.5, 0.5 // clip cn, clip total, clip du, clip dv
      ]);
    } else {
      this.m_uniformData = new Float32Array([1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0]);
    }

    this.buildDcr();
  }

  setPlayParam(playOnce, direcEnabled, clipMixEnabled = false, spdScaleEnabled = false) {
    this.m_playOnce = playOnce;
    this.m_direcEnabled = direcEnabled;
    this.m_clipMixEnabled = clipMixEnabled;
    this.m_spdScaleEnabled = spdScaleEnabled;
  }

  buildDcr() {
    let dcr = this.m_dcr;
    dcr.diffuseMap = this.diffuseMap;
    dcr.playOnce = this.m_playOnce;
    dcr.direcEnabled = this.m_direcEnabled;
    dcr.clipMixEnabled = this.m_clipMixEnabled;
    dcr.spdScaleEnabled = this.m_spdScaleEnabled;
    dcr.premultiplyAlpha = this.premultiplyAlpha;
    dcr.brightnessEnabled = this.m_brightnessEnabled;
    dcr.setParam(this.m_brightnessEnabled, this.m_alphaEnabled, this.m_clipEnabled, dcr.diffuseMap != null);
    dcr.setUniformData(this.createSelfUniformData()); // this.material = new Material();

    this.material = CoRScene.createMaterial(dcr);
  }

  createSelfUniformData() {
    let oum = new ShaderUniformData_1.default();
    oum.uniformNameList = ["u_billParam"];
    oum.dataList = [this.m_uniformData];
    return oum;
  }

  setRGBA4f(pr, pg, pb, pa) {
    this.m_color.r = pr;
    this.m_color.g = pg;
    this.m_color.b = pb;
    this.m_color.a = pa;
    this.m_uniformData[4] = pr * this.m_brightness;
    this.m_uniformData[5] = pg * this.m_brightness;
    this.m_uniformData[6] = pb * this.m_brightness;
  }

  setRGB3f(pr, pg, pb) {
    this.m_color.r = pr;
    this.m_color.g = pg;
    this.m_color.b = pb;
    this.m_uniformData[4] = pr * this.m_brightness;
    this.m_uniformData[5] = pg * this.m_brightness;
    this.m_uniformData[6] = pb * this.m_brightness;
  }

  setAlpha(pa) {
    this.m_uniformData[7] = pa;
  }

  getAlpha() {
    return this.m_uniformData[6];
  }

  setBrightness(brighness) {
    this.m_brightness = brighness;
    this.m_uniformData[4] = this.m_color.r * brighness;
    this.m_uniformData[5] = this.m_color.g * brighness;
    this.m_uniformData[6] = this.m_color.b * brighness;
  }

  getBrightness() {
    return this.m_brightness;
  }

  setRGBAOffset4f(pr, pg, pb, pa) {
    this.m_uniformData[8] = pr;
    this.m_uniformData[9] = pg;
    this.m_uniformData[10] = pb;
    this.m_uniformData[11] = pa;
  }

  setRGBOffset3f(pr, pg, pb) {
    this.m_uniformData[8] = pr;
    this.m_uniformData[9] = pg;
    this.m_uniformData[10] = pb;
  }

  setAcceleration(accX, accY, accZ) {
    this.m_uniformData[12] = accX;
    this.m_uniformData[13] = accY;
    this.m_uniformData[14] = accZ;
  }

  setSpdScaleMax(spdScaleMax, factor = 1.0) {
    if (spdScaleMax < 1.0) spdScaleMax = 1.0;
    if (spdScaleMax > 10.0) spdScaleMax = 10.0;
    if (factor < 0.1) factor = 0.1;
    if (factor > 5.0) factor = 5.0;
    this.m_uniformData[15] = spdScaleMax;
    this.m_uniformData[7] = factor;
  }

  setClipUVParam(cn, total, du, dv) {
    if (this.m_clipEnabled) {
      this.m_uniformData[16] = cn;
      this.m_uniformData[17] = total;
      this.m_uniformData[18] = du;
      this.m_uniformData[19] = dv;
    }
  }

  getTime() {
    return this.m_time;
  }

  setTime(time) {
    this.m_time = time;
    this.m_uniformData[2] = time;
  }

  updateTime(offsetTime) {
    this.m_time += offsetTime;
    this.m_uniformData[2] = this.m_time;
  }

  getScaleX() {
    return this.m_uniformData[0];
  }

  getScaleY() {
    return this.m_uniformData[1];
  }

  setScaleX(p) {
    this.m_uniformData[0] = p;
  }

  setScaleY(p) {
    this.m_uniformData[1] = p;
  }

  setScaleXY(sx, sy) {
    this.m_uniformData[0] = sx;
    this.m_uniformData[1] = sy;
  }
  /**
   * 设置深度偏移量
   * @param offset the value range: [-2.0 -> 2.0]
   */


  setDepthOffset(offset) {
    this.m_uniformData[3] = offset;
  }

  getUniformData() {
    return this.m_uniformData;
  }

  destroy() {
    this.m_uniformData = null;
    this.diffuseMap = null;

    if (this.material != null) {
      this.material.destroy();
      this.material = null;
    }
  }

}

exports.BillboardFlowMaterial = BillboardFlowMaterial;

/***/ }),

/***/ "561f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * static billboard plane group
 */

class BillboardFlowMesh {
  constructor() {
    this.m_ivs = null;
    this.m_vs = null;
    this.m_vs2 = null;
    this.m_uvs = null;
    this.m_uvs2 = null;
    this.m_nvs = null;
    this.m_nvs2 = null;
    this.m_total = 0;
    this.m_endTime = 0;
    this.flipVerticalUV = false;
    this.mesh = CoRScene.createRawMesh();
  }

  setUVSFloatArr(uvsFloatArr8) {
    if (this.m_uvs == null) {
      this.m_uvs = new Float32Array(8);
    }

    this.m_uvs.set(uvsFloatArr8, 0);
  }

  setUVSArr(uvsArr8) {
    if (this.m_uvs == null) {
      this.m_uvs = new Float32Array(8);
    }

    this.m_uvs.set(uvsArr8, 0);
  }

  createData(total) {
    if (this.m_vs == null && total > 0) {
      this.m_endTime = 0;
      this.m_total = total;
      let i = 0;
      let base = 0;
      let pdivs = [0, 1, 2, 0, 2, 3];
      let pivs = new Uint16Array(total * 6);
      let len = total * 6;

      for (i = 0; i < len;) {
        pivs[i++] = pdivs[0] + base;
        pivs[i++] = pdivs[1] + base;
        pivs[i++] = pdivs[2] + base;
        pivs[i++] = pdivs[3] + base;
        pivs[i++] = pdivs[4] + base;
        pivs[i++] = pdivs[5] + base;
        base += 4;
      }

      this.m_ivs = pivs;
      this.m_vs = new Float32Array(total * 16); // half size x, half size y, min scale,max scale

      this.m_vs2 = new Float32Array(total * 16); // x,y,z, brightness or alpha intensity

      this.m_vs2.fill(1.0);
      this.m_uvs = new Float32Array(total * 8);
      this.m_uvs2 = new Float32Array(total * 16); // life time, the end of the fading in time point, the begin of the fading out time point

      this.m_nvs = new Float32Array(total * 16); // movement velocity x and y and z, begin time point

      this.m_nvs2 = new Float32Array(total * 16); // acceleration

      let baseValues = [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0];

      for (i = 0; i < total; ++i) {
        this.m_nvs.set(baseValues, i * 16);
      }

      let pduvs = [];

      if (this.flipVerticalUV) {
        pduvs = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0];
      } else {
        pduvs = [0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0];
      }

      for (i = 0; i < total; ++i) {
        this.m_uvs.set(pduvs, i * 8);
      }

      this.bounds = CoRScene.createAABB();
    }
  }

  setSizeAndScaleAt(i, width, height, minScale, maxScale) {
    if (i >= 0 && i < this.m_total) {
      let maxX = 0.5 * width;
      let maxY = 0.5 * height;
      let minX = -maxX;
      let minY = -maxY;
      let dscale = maxScale - minScale;
      i *= 16;
      this.m_vs[i++] = minX;
      this.m_vs[i++] = minY;
      this.m_vs[i++] = minScale;
      this.m_vs[i++] = dscale;
      this.m_vs[i++] = maxX;
      this.m_vs[i++] = minY;
      this.m_vs[i++] = minScale;
      this.m_vs[i++] = dscale;
      this.m_vs[i++] = maxX;
      this.m_vs[i++] = maxY;
      this.m_vs[i++] = minScale;
      this.m_vs[i++] = dscale;
      this.m_vs[i++] = minX;
      this.m_vs[i++] = maxY;
      this.m_vs[i++] = minScale;
      this.m_vs[i++] = dscale;
      this.bounds.addXYZ(minX, minY, minX);
      this.bounds.addXYZ(maxX, maxY, maxX);
    }
  }

  setPositionAt(i, x, y, z) {
    if (i >= 0 && i < this.m_total) {
      i *= 16;

      for (let j = 0; j < 4; ++j) {
        this.m_vs2[i++] = x;
        this.m_vs2[i++] = y;
        this.m_vs2[i++] = z;
        i++;
      }
    }
  }

  setVelocityAt(i, spdX, spdY, spdZ) {
    if (i >= 0 && i < this.m_total) {
      i *= 16;

      for (let j = 0; j < 4; ++j) {
        this.m_nvs[i++] = spdX;
        this.m_nvs[i++] = spdY;
        this.m_nvs[i++] = spdZ;
        i++;
      }
    }
  }

  setAccelerationAt(i, accX, accY, accZ) {
    if (i >= 0 && i < this.m_total) {
      i *= 16;

      for (let j = 0; j < 4; ++j) {
        this.m_nvs2[i++] = accX;
        this.m_nvs2[i++] = accY;
        this.m_nvs2[i++] = accZ;
        i++;
      }
    }
  }

  setAlphaAt(i, alpha) {
    if (i >= 0 && i < this.m_total) {
      i = i * 16 + 3;

      for (let j = 0; j < 4; ++j) {
        this.m_vs2[i] = alpha;
        i += 4;
      }
    }
  }

  setBrightnessAt(i, brightness) {
    if (i >= 0 && i < this.m_total) {
      i = i * 16 + 3;

      for (let j = 0; j < 4; ++j) {
        this.m_vs2[i] = brightness;
        i += 4;
      }
    }
  }

  setUVRectAt(i, u, v, du, dv) {
    if (i >= 0 && i < this.m_total) {
      i *= 8;

      if (this.flipVerticalUV) {
        this.m_uvs[i++] = u;
        this.m_uvs[i++] = v;
        this.m_uvs[i++] = u + du;
        this.m_uvs[i++] = v;
        this.m_uvs[i++] = u + du;
        this.m_uvs[i++] = v + dv;
        this.m_uvs[i++] = u;
        this.m_uvs[i] = v + dv;
      } else {
        this.m_uvs[i++] = u;
        this.m_uvs[i++] = v + dv;
        this.m_uvs[i++] = u + du;
        this.m_uvs[i++] = v + dv;
        this.m_uvs[i++] = u + du;
        this.m_uvs[i++] = v;
        this.m_uvs[i++] = u;
        this.m_uvs[i] = v;
      }
    }
  }

  setTimeAt(i, lifeTime, fadeInEndFactor, fadeOutBeginFactor, beginTime = 0.0) {
    if (i >= 0 && i < this.m_total) {
      if (lifeTime < 0.1) lifeTime = 0.1;
      if (fadeInEndFactor > 0.9) fadeInEndFactor = 0.9;
      if (fadeOutBeginFactor < fadeInEndFactor) fadeOutBeginFactor = fadeInEndFactor;
      i *= 16;

      for (let j = 0; j < 4; ++j) {
        this.m_uvs2[i++] = lifeTime;
        this.m_uvs2[i++] = fadeInEndFactor;
        this.m_uvs2[i++] = fadeOutBeginFactor;
        this.m_uvs2[i++] = beginTime;
      }

      if (this.m_endTime < beginTime + lifeTime) {
        this.m_endTime = beginTime + lifeTime;
      }
    }
  }

  setTimeSpeedAt(i, timeSpeed) {
    if (i >= 0 && i < this.m_total) {
      i = i * 16 + 3;

      for (let j = 0; j < 4; ++j) {
        this.m_nvs[i] = timeSpeed;
        i += 4;
      }
    }
  }

  getEndTime() {
    return this.m_endTime;
  }

  initialize() {
    let m = this.mesh;
    m.autoBuilding = false;
    m.reset();
    m.addFloat32Data(this.m_vs, 4);
    m.addFloat32Data(this.m_uvs, 2);
    m.addFloat32Data(this.m_nvs, 4);
    m.addFloat32Data(this.m_vs2, 4);
    m.addFloat32Data(this.m_uvs2, 4);
    m.addFloat32Data(this.m_nvs2, 4);
    m.setIVS(this.m_ivs);
    m.bounds = this.bounds;
    m.initialize();
    m.vtxTotal = 4 * this.m_total;
    m.trisNumber = 2 * this.m_total;
  }

  setUV(pu, pv, du, dv) {
    let m = this.mesh;

    if (m != null) {
      m.setBufData2fAt(0, 1, pu, pv + dv);
      m.setBufData2fAt(1, 1, pu + du, pv + dv);
      m.setBufData2fAt(2, 1, pu + du, pv);
      m.setBufData2fAt(3, 1, pu, pv);
    }
  }

  destroy() {
    this.m_vs = null;
    this.m_vs2 = null;
    this.m_uvs = null;
    this.m_uvs2 = null;
    this.m_nvs = null;
    this.m_nvs2 = null;
    this.m_ivs = null;
    this.bounds = null;
    this.mesh = null;
  }

}

exports.default = BillboardFlowMesh;

/***/ }),

/***/ "67f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class BillboardFragShaderBase {
  constructor() {
    this.m_brnAStatus = 0;
  }

  getBrnAlphaStatus() {
    return this.m_brnAStatus;
  }

  setBrightnessAndAlpha(brightnessEnabled, alphaEnabled) {
    this.m_brnAStatus = Number(brightnessEnabled) * 10 + Number(alphaEnabled);
  }

  getBrnAndAlphaCode() {
    let fadeCode;

    if (this.m_brnAStatus == 11) {
      fadeCode = `
color.rgb = color.rgb * v_colorMult.xyz + color.aaa * offsetColor;
color *= FADE_VAR.zzzz;
`;
    } else if (this.m_brnAStatus == 10) {
      fadeCode = `
color.rgb = min(color.rgb * v_colorMult.xyz + color.rgb * offsetColor, vec3(1.0));
color.rgb *= FADE_VAR.zzz;
`;
    } else if (this.m_brnAStatus == 1) {
      fadeCode = `
color.rgb = color.rgb * v_colorMult.xyz + color.aaa * offsetColor;
color.a *= FADE_VAR.z;
`;
    } else {
      fadeCode = `
color.rgb = color.rgb * v_colorMult.xyz + offsetColor;
color.a *= FADE_VAR.z;
`;
    }

    return fadeCode;
  }

  getMixThreeColorsCode() {
    let codeStr = `
vec4 mixThreeColors(vec4 color0,vec4 color1,vec4 color2,float t)
{
    float k0 = max(1.0 - 2.0 * t, 0.0);
    float k = max(t - 0.5, 0.0);
    float k1 = (1.0 - (2.0 * k)) * step(-0.00001,k);
    k = step(0.00001,k0);
    return mix(mix(color2,color1,k1), mix(color1,color0,k0), k);
}
`;
    return codeStr;
  }

  getOffsetColorCode(OffsetColorTexEnabled, useRawUVEnabled = false) {
    let fragCode2;

    if (OffsetColorTexEnabled) {
      if (useRawUVEnabled) {
        fragCode2 = `
vec3 offsetColor = clamp(v_colorOffset.xyz + texture(VOX_OFFSET_COLOR_MAP, v_uv.xy).xyz,vec3(0.0),vec3(1.0));
`;
      } else {
        fragCode2 = `
vec3 offsetColor = clamp(v_colorOffset.xyz + texture(VOX_OFFSET_COLOR_MAP, v_texUV.xy).xyz,vec3(0.0),vec3(1.0));
`;
      }
    } else {
      fragCode2 = `
vec3 offsetColor = v_colorOffset.xyz;
`;
    }

    return fragCode2;
  }

}

exports.default = BillboardFragShaderBase;

/***/ }),

/***/ "85e1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * static billboard plane group
 */

class BillboardFlareMesh {
  constructor() {
    this.m_ivs = null;
    this.m_vs = null;
    this.m_vs2 = null;
    this.m_uvs = null;
    this.m_uvs2 = null;
    this.m_total = 0;
    this.flipVerticalUV = false;
    this.mesh = CoRScene.createRawMesh();
  }

  setUVSFloatArr(uvsFloatArr8) {
    if (this.m_uvs == null) {
      this.m_uvs = new Float32Array(8);
    }

    this.m_uvs.set(uvsFloatArr8, 0);
  }

  setUVSArr(uvsArr8) {
    if (this.m_uvs == null) {
      this.m_uvs = new Float32Array(8);
    }

    this.m_uvs.set(uvsArr8, 0);
  }

  createData(total) {
    if (this.m_vs == null && total > 0) {
      this.m_total = total;
      let i = 0;
      let base = 0;
      let pdivs = [0, 1, 2, 0, 2, 3];
      let pivs = new Uint16Array(total * 6);
      let len = total * 6;

      for (i = 0; i < len;) {
        pivs[i++] = pdivs[0] + base;
        pivs[i++] = pdivs[1] + base;
        pivs[i++] = pdivs[2] + base;
        pivs[i++] = pdivs[3] + base;
        pivs[i++] = pdivs[4] + base;
        pivs[i++] = pdivs[5] + base;
        base += 4;
      }

      this.m_ivs = pivs;
      this.m_vs = new Float32Array(total * 16); // half size x, half size y, min scale,max scale

      this.m_vs2 = new Float32Array(total * 16); // x,y,z, brightness or alpha

      this.m_vs2.fill(1.0);
      this.m_uvs = new Float32Array(total * 8);
      this.m_uvs2 = new Float32Array(total * 16); // life time, the end of the fading in time point, the begin of the fading out time point

      let pduvs = [];

      if (this.flipVerticalUV) {
        pduvs = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0];
      } else {
        pduvs = [0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0];
      }

      for (i = 0; i < total; ++i) {
        this.m_uvs.set(pduvs, i * 8);
      }

      this.bounds = CoRScene.createAABB();
    }
  }

  setSizeAndScaleAt(i, width, height, minScale, maxScale) {
    if (i >= 0 && i < this.m_total) {
      let maxX = 0.5 * width;
      let maxY = 0.5 * height;
      let minX = -maxX;
      let minY = -maxY;
      let dscale = maxScale - minScale;
      i *= 16;
      this.m_vs[i++] = minX;
      this.m_vs[i++] = minY;
      this.m_vs[i++] = minScale;
      this.m_vs[i++] = dscale;
      this.m_vs[i++] = maxX;
      this.m_vs[i++] = minY;
      this.m_vs[i++] = minScale;
      this.m_vs[i++] = dscale;
      this.m_vs[i++] = maxX;
      this.m_vs[i++] = maxY;
      this.m_vs[i++] = minScale;
      this.m_vs[i++] = dscale;
      this.m_vs[i++] = minX;
      this.m_vs[i++] = maxY;
      this.m_vs[i++] = minScale;
      this.m_vs[i++] = dscale;
      this.bounds.addXYZ(minX, minY, minX);
      this.bounds.addXYZ(maxX, maxY, maxX);
    }
  }

  setPositionAt(i, x, y, z) {
    if (i >= 0 && i < this.m_total) {
      i *= 16;

      for (let j = 0; j < 4; ++j) {
        this.m_vs2[i++] = x;
        this.m_vs2[i++] = y;
        this.m_vs2[i++] = z;
        i++;
      }
    }
  }

  setAlphaAt(i, alpha) {
    if (i >= 0 && i < this.m_total) {
      i = i * 16 + 3;

      for (let j = 0; j < 4; ++j) {
        this.m_vs2[i] = alpha;
        i += 4;
      }
    }
  }

  setBrightnessAt(i, brightness) {
    if (i >= 0 && i < this.m_total) {
      i = i * 16 + 3;

      for (let j = 0; j < 4; ++j) {
        this.m_vs2[i] = brightness;
        i += 4;
      }
    }
  }

  setUVRectAt(i, u, v, du, dv) {
    if (i >= 0 && i < this.m_total) {
      i *= 8;

      if (this.flipVerticalUV) {
        this.m_uvs[i++] = u;
        this.m_uvs[i++] = v;
        this.m_uvs[i++] = u + du;
        this.m_uvs[i++] = v;
        this.m_uvs[i++] = u + du;
        this.m_uvs[i++] = v + dv;
        this.m_uvs[i++] = u;
        this.m_uvs[i] = v + dv;
      } else {
        this.m_uvs[i++] = u;
        this.m_uvs[i++] = v + dv;
        this.m_uvs[i++] = u + du;
        this.m_uvs[i++] = v + dv;
        this.m_uvs[i++] = u + du;
        this.m_uvs[i++] = v;
        this.m_uvs[i++] = u;
        this.m_uvs[i] = v;
      }
    }
  }

  setTimeAt(i, lifeTime, fadeInEndFactor, fadeOutBeginFactor, timeSpeed = 1.0) {
    if (i >= 0 && i < this.m_total) {
      if (lifeTime < 0.1) lifeTime = 0.1;
      if (fadeInEndFactor > 0.9) fadeInEndFactor = 0.9;
      if (fadeOutBeginFactor < fadeInEndFactor) fadeOutBeginFactor = fadeInEndFactor;
      i *= 16;

      for (let j = 0; j < 4; ++j) {
        this.m_uvs2[i++] = lifeTime;
        this.m_uvs2[i++] = fadeInEndFactor;
        this.m_uvs2[i++] = fadeOutBeginFactor;
        this.m_uvs2[i++] = timeSpeed;
      }
    }
  }

  initialize() {
    let m = this.mesh;
    m.autoBuilding = false;
    m.reset();
    m.addFloat32Data(this.m_vs, 4);
    m.addFloat32Data(this.m_uvs, 2);
    m.addFloat32Data(this.m_vs2, 4);
    m.addFloat32Data(this.m_uvs2, 4);
    m.setIVS(this.m_ivs);
    m.bounds = this.bounds;
    m.initialize();
    m.vtxTotal = 4 * this.m_total;
    m.trisNumber = 2 * this.m_total;
  }

  setUV(pu, pv, du, dv) {
    let m = this.mesh;

    if (m != null) {
      m.setBufData2fAt(0, 1, pu, pv + dv);
      m.setBufData2fAt(1, 1, pu + du, pv + dv);
      m.setBufData2fAt(2, 1, pu + du, pv);
      m.setBufData2fAt(3, 1, pu, pv);
    }
  }

  destroy() {
    this.m_vs = null;
    this.m_vs2 = null;
    this.m_uvs = null;
    this.m_uvs2 = null;
    this.m_ivs = null;
    this.bounds = null;
    this.mesh = null;
  }

}

exports.default = BillboardFlareMesh;

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8af9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const ShaderCodeUUID_1 = __webpack_require__("f3a2");

const BillboardFragShaderBase_1 = __importDefault(__webpack_require__("67f4"));

const BillboardGroupShaderCode_1 = __webpack_require__("fba3");

class BillboardGroupDcrBase {
  constructor() {
    this.m_clipEnabled = false;
    this.m_hasOffsetColorTex = false;
    this.m_useRawUVEnabled = false;
    this.m_brightnessEnabled = false;
    this.m_udata = null;
    /**
     * the  default  value is false
     */

    this.vertColorEnabled = false;
    /**
     * the  default  value is false
     */

    this.premultiplyAlpha = false;
    /**
     * the  default  value is false
     */

    this.shadowReceiveEnabled = false;
    /**
     * the  default  value is false
     */

    this.lightEnabled = false;
    /**
     * the  default  value is false
     */

    this.fogEnabled = false;
    /**
     * the  default  value is false
     */

    this.envAmbientLightEnabled = false;
    /**
     * the  default  value is false
     */

    this.brightnessOverlayEnabeld = false;
    /**
     * the default value is true
     */

    this.glossinessEnabeld = true;
    this.clipMixEnabled = false;
    this.brightnessEnabled = false; // this.m_uniqueName = "billboardFlow_";
  }

  initialize(texEnabled) {
    this.m_uniqueName = "BillboardGroupShader";
    if (this.clipMixEnabled) this.m_uniqueName += "Mix";
    this.m_uniqueName += this.brightnessEnabled ? "Brn" : "Alp";
  }

  setParam(brightnessEnabled, alphaEnabled, clipEnabled, hasOffsetColorTex) {
    this.m_brightnessEnabled = brightnessEnabled;
    BillboardGroupDcrBase.s_billFS.setBrightnessAndAlpha(brightnessEnabled, alphaEnabled);
    this.m_clipEnabled = clipEnabled;
    this.m_hasOffsetColorTex = hasOffsetColorTex;
  }

  buildVertShd(oder) {}

  getShaderCodeObject() {
    return BillboardGroupShaderCode_1.BillboardGroupShaderCode;
  }

  buildShader(coder) {
    coder.autoBuildHeadCodeEnabled = false;
    this.buildFragShd(coder);
    this.buildVertShd(coder);
  }

  buildFragShd(coder) {
    if (this.brightnessEnabled) {
      this.brightnessOverlayEnabeld = this.fogEnabled;
    }

    if (this.m_hasOffsetColorTex) {
      if (this.m_useRawUVEnabled) {
        coder.addDefine("VOX_USE_RAW_UV");
        coder.addVarying("vec4", "v_uv");
      }
    }

    coder.addVarying("vec4", "v_colorMult");
    coder.addVarying("vec4", "v_colorOffset");
    coder.addVarying("vec4", "v_texUV");
    coder.addVarying("vec4", "v_factor");

    if (this.m_clipEnabled) {
      coder.addDefine("VOX_USE_CLIP");

      if (this.clipMixEnabled) {
        coder.addDefine("VOX_USE_CLIP_MIX");
      }
    }

    coder.addDefine("FADE_VAR", "v_factor");
    coder.addDefine("FADE_STATUS", "" + BillboardGroupDcrBase.s_billFS.getBrnAlphaStatus());
  }

  buildBufParams() {}

  buildTextureList(builder) {
    builder.addDiffuseMap(this.diffuseMap);

    if (this.m_hasOffsetColorTex) {
      builder.add2DMap(this.offsetColorMap, "VOX_OFFSET_COLOR_MAP");
    }
  }

  setUniformData(udata) {
    this.m_udata = udata;
  }

  createUniformData() {
    return this.m_udata;
  }

  getShaderCodeObjectUUID() {
    return ShaderCodeUUID_1.ShaderCodeUUID.None;
  }

  getUniqueName() {
    let ns = this.m_uniqueName + "_" + BillboardGroupDcrBase.s_billFS.getBrnAlphaStatus();

    if (this.m_hasOffsetColorTex && this.m_clipEnabled) {
      ns += "ClipColorTex";
    }

    if (this.premultiplyAlpha) ns += "PreMAlpha";
    return ns;
  }

}

BillboardGroupDcrBase.s_billFS = new BillboardFragShaderBase_1.default();
exports.BillboardGroupDcrBase = BillboardGroupDcrBase;

/***/ }),

/***/ "af51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

const BillboardGroupDcrBase_1 = __webpack_require__("8af9");

class BillboardFlowDcr extends BillboardGroupDcrBase_1.BillboardGroupDcrBase {
  constructor() {
    super();
    this.playOnce = false;
    this.direcEnabled = false; // 因为速度增加，在x轴方向缩放(拉长或者缩短)

    this.spdScaleEnabled = false;
  }

  initialize(texEnabled) {
    super.initialize(texEnabled);
    this.m_uniqueName = "flow_" + this.m_uniqueName;

    if (this.playOnce && this.direcEnabled) {
      this.m_uniqueName += "_OD";
    } else if (this.playOnce) {
      this.m_uniqueName += "_O";
    } else if (this.direcEnabled) {
      this.m_uniqueName += "_D";
      if (this.spdScaleEnabled) this.m_uniqueName += "SpdScale";
    }

    if (this.premultiplyAlpha) this.m_uniqueName += "PreMAlpha";
  }

  buildVertShd(coder) {
    coder.addVertLayout("vec4", "a_vs");
    coder.addVertLayout("vec2", "a_uvs");
    coder.addVertLayout("vec4", "a_nvs");
    coder.addVertLayout("vec4", "a_vs2");
    coder.addVertLayout("vec4", "a_uvs2");
    coder.addVertLayout("vec4", "a_nvs2");
    let paramTotal = this.m_clipEnabled ? 5 : 4;
    coder.addVertUniform("vec4", "u_billParam", paramTotal);
    if (this.direcEnabled) coder.addDefine("ROTATION_DIRECT");
    if (this.playOnce) coder.addDefine("PLAY_ONCE");
    if (this.spdScaleEnabled) coder.addDefine("SPEED_SCALE");
    if (this.m_clipEnabled) coder.addDefine("BILL_PARAM_INDEX", "4");
  }

}

exports.BillboardFlowDcr = BillboardFlowDcr;

/***/ }),

/***/ "b3bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class ShaderUniformData {
  constructor() {
    this.uns = "";
    this.types = null;
    this.uniformSize = 0;
    this.uniformNameList = null;
    this.locations = null;
    this.dataList = null;
    this.calcModels = null;
    this.always = true;
    this.next = null;
  } // for fast data's operation


  getDataRefFromUniformName(ns) {
    if (this.uniformNameList != null) {
      let list = this.uniformNameList;
      let len = list.length;

      for (let i = 0; i < len; ++i) {
        if (ns == list[i]) {
          return this.dataList[i];
        }
      }
    }

    return null;
  } // for fast data's operation


  setDataRefFromUniformName(ns, dataRef) {
    if (this.uniformNameList != null) {
      let list = this.uniformNameList;
      let len = list.length;

      for (let i = 0; i < len; ++i) {
        if (ns == list[i]) {
          this.dataList[i] = dataRef;
          break;
        }
      }
    }
  } //


  copyDataFromProbe(probe) {
    this.types = [];

    for (let i = 0; i < probe.uniformsTotal; ++i) {
      this.types.push(probe.uniformTypes[i]);
    }

    this.uniformSize = probe.uniformsTotal;
  }

  destroy() {
    let i = 0;
    let len = this.dataList.length;

    for (; i < len; ++i) {
      this.dataList[i] = null;
    }

    if (this.calcModels != null) {
      len = this.calcModels.length;

      for (i = 0; i < len; ++i) {
        this.calcModels[i].destroy();
        this.calcModels[i] = null;
      }
    }

    this.dataList = null;
    this.types = null;
    this.locations = null;
    this.calcModels = null;
  }

}

exports.default = ShaderUniformData;

/***/ }),

/***/ "c7c6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const BillboardFlareDcr_1 = __webpack_require__("2a55");

const ShaderUniformData_1 = __importDefault(__webpack_require__("b3bd"));

class BillboardFlareMaterial {
  constructor(brightnessEnabled = true, alphaEnabled = false, clipEnabled = false, clipMixEnabled = false) {
    this.m_brightnessEnabled = true;
    this.m_alphaEnabled = false;
    this.m_clipEnabled = false;
    this.m_clipMixEnabled = false;
    this.m_uniformData = null;
    this.m_time = 0;
    this.m_color = CoRScene.createColor4(1.0, 1.0, 1.0, 1.0);
    this.m_brightness = 1.0;
    this.m_dcr = new BillboardFlareDcr_1.BillboardFlareDcr();
    this.diffuseMap = null;
    this.premultiplyAlpha = false;
    this.material = null;
    this.m_brightnessEnabled = brightnessEnabled;
    this.m_alphaEnabled = alphaEnabled;
    this.m_clipEnabled = clipEnabled;
    this.m_clipMixEnabled = clipMixEnabled;
  }

  initialize() {
    // let mb = CoRScene.getRendererScene().materialBlock;
    // let material = mb.createMaterial(drc);
    if (this.m_clipEnabled) {
      this.m_uniformData = new Float32Array([1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 4.0, 0.5, 0.5]);
    } else {
      this.m_uniformData = new Float32Array([1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0]);
    }

    this.buildDcr();
  }

  buildDcr() {
    let dcr = this.m_dcr;
    dcr.diffuseMap = this.diffuseMap;
    dcr.clipMixEnabled = this.m_clipMixEnabled;
    dcr.premultiplyAlpha = this.premultiplyAlpha;
    dcr.brightnessEnabled = this.m_brightnessEnabled;
    dcr.setParam(this.m_brightnessEnabled, this.m_alphaEnabled, this.m_clipEnabled, dcr.diffuseMap != null);
    dcr.setUniformData(this.createSelfUniformData()); // this.material = new Material();

    this.material = CoRScene.createMaterial(dcr);
    this.material.setDecorator(dcr);
  }

  createSelfUniformData() {
    let oum = new ShaderUniformData_1.default();
    oum.uniformNameList = ["u_billParam"];
    oum.dataList = [this.m_uniformData];
    return oum;
  }
  /**
   * 设置深度偏移量
   * @param offset the value range: [-2.0 -> 2.0]
   */


  setDepthOffset(offset) {
    this.m_uniformData[3] = offset;
  }

  setRGBA4f(pr, pg, pb, pa) {
    this.m_color.r = pr;
    this.m_color.g = pg;
    this.m_color.b = pb;
    this.m_uniformData[4] = pr * this.m_brightness;
    this.m_uniformData[5] = pg * this.m_brightness;
    this.m_uniformData[6] = pb * this.m_brightness;
    this.m_uniformData[7] = pa;
  }

  setRGB3f(pr, pg, pb) {
    this.m_color.r = pr;
    this.m_color.g = pg;
    this.m_color.b = pb;
    this.m_uniformData[4] = pr * this.m_brightness;
    this.m_uniformData[5] = pg * this.m_brightness;
    this.m_uniformData[6] = pb * this.m_brightness;
  }

  setAlpha(pa) {
    this.m_uniformData[7] = pa;
  }

  getAlpha() {
    return this.m_uniformData[6];
  }

  setBrightness(brighness) {
    this.m_brightness = brighness;
    this.m_uniformData[4] = this.m_color.r * brighness;
    this.m_uniformData[5] = this.m_color.g * brighness;
    this.m_uniformData[6] = this.m_color.b * brighness;
  }

  getBrightness() {
    return this.m_brightness;
  }

  setRGBAOffset4f(pr, pg, pb, pa) {
    this.m_uniformData[8] = pr;
    this.m_uniformData[9] = pg;
    this.m_uniformData[10] = pb;
    this.m_uniformData[11] = pa;
  }

  setRGBOffset3f(pr, pg, pb) {
    this.m_uniformData[8] = pr;
    this.m_uniformData[9] = pg;
    this.m_uniformData[10] = pb;
  }

  setClipUVParam(cn, total, du, dv) {
    if (this.m_clipEnabled) {
      this.m_uniformData[12] = cn;
      this.m_uniformData[13] = total;
      this.m_uniformData[14] = du;
      this.m_uniformData[15] = dv;
    }
  }

  getTime() {
    return this.m_time;
  }

  setTime(time) {
    this.m_time = time;
    this.m_uniformData[2] = time;
  }

  updateTime(offsetTime) {
    this.m_time += offsetTime;
    this.m_uniformData[2] = this.m_time;
  }

  getScaleX() {
    return this.m_uniformData[0];
  }

  getScaleY() {
    return this.m_uniformData[1];
  }

  setScaleX(p) {
    this.m_uniformData[0] = p;
  }

  setScaleY(p) {
    this.m_uniformData[1] = p;
  }

  setScaleXY(sx, sy) {
    this.m_uniformData[0] = sx;
    this.m_uniformData[1] = sy;
  }

  destroy() {
    this.m_uniformData = null;
    this.diffuseMap = null;

    if (this.material != null) {
      this.material.destroy();
      this.material = null;
    }
  }

}

exports.BillboardFlareMaterial = BillboardFlareMaterial;

/***/ }),

/***/ "dfe4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class BillboardMesh {
  constructor() {
    this.m_vs = null;
    this.m_uvs = null;
    this.m_ivs = null;
    this.flipVerticalUV = false;
    this.vtxUVEnabled = true;
    this.mesh = CoRScene.createDataMesh();
  }

  initialize(pwidth, pheight) {
    if (this.m_vs != null) {
      return;
    } //console.log("RectPlaneMesh::initialize()...");


    let maxX = 0.5 * pwidth;
    let maxY = 0.5 * pheight;
    let minX = -maxX;
    let minY = -maxY;
    this.m_ivs = new Uint16Array([1, 2, 0, 3]);
    this.m_vs = new Float32Array([minX, minY, maxX, minY, maxX, maxY, minX, maxY]);

    if (this.vtxUVEnabled) {
      if (this.m_uvs == null) {
        if (this.flipVerticalUV) {
          this.m_uvs = new Float32Array([0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0]);
        } else {
          this.m_uvs = new Float32Array([0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0]);
        }
      }
    }

    let mh = this.mesh;
    mh.vsStride = 2;
    mh.autoBuilding = false;
    mh.vtxTotal = 4;
    mh.trisNumber = 2;
    mh.drawMode = CoRScene.RenderDrawMode.ELEMENTS_TRIANGLE_STRIP;
    mh.bounds = CoRScene.createAABB();
    mh.bounds.min.setXYZ(minX, minY, minX);
    mh.bounds.max.setXYZ(maxX, maxY, maxX);
    mh.bounds.updateFast();
    mh.setVS(this.m_vs);
    mh.setUVS(this.m_uvs);
    mh.setIVS(this.m_ivs);
  }

  destroy() {
    this.m_vs = null;
    this.m_uvs = null;
    this.m_ivs = null;
  }

}

exports.BillboardMesh = BillboardMesh;

/***/ }),

/***/ "f3a2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * IShaderCodeObject instance uuid
 */

var ShaderCodeUUID;

(function (ShaderCodeUUID) {
  /**
   * nothing shader code object
   */
  ShaderCodeUUID["None"] = "";
  /**
   * the default value is PBR light shader code object that it comes from the system shader lib.
   */

  ShaderCodeUUID["Default"] = "pbr";
  /**
   * lambert light shader code object that it comes from the system shader lib.
   */

  ShaderCodeUUID["Lambert"] = "lambert";
  /**
   * PBR light shader code object that it comes from the system shader lib.
   */

  ShaderCodeUUID["PBR"] = "pbr";
})(ShaderCodeUUID || (ShaderCodeUUID = {}));

exports.ShaderCodeUUID = ShaderCodeUUID;

/***/ }),

/***/ "f65f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const BillboardMaterial_1 = __webpack_require__("fb23");

const BillboardMesh_1 = __webpack_require__("dfe4");

class Billboard {
  constructor() {
    this.m_material = null;
    this.m_mesh = null;
    this.m_blendType = 0;
    this.m_blendAlways = false;
    this.m_rz = 0;
    this.m_bw = 0;
    this.m_bh = 0;
    this.brightnessEnabled = true;
    this.alphaEnabled = false;
    this.rotationEnabled = false;
    this.fogEnabled = false;
    this.entity = null;
  }

  initEntity(texList) {
    if (this.m_material == null) {
      this.m_uniformData = new Float32Array([1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0]);
      let billml = this.m_material = new BillboardMaterial_1.BillboardMaterial();
      billml.brightnessEnabled = this.brightnessEnabled;
      billml.alphaEnabled = this.alphaEnabled;
      billml.rotationEnabled = this.rotationEnabled;
      billml.fogEnabled = this.fogEnabled;
      billml.initialize();
      let ml = billml.material;
      ml.setTextureList(texList);
      ml.addUniformDataAt("u_billParam", this.m_uniformData);
      let billmh = this.m_mesh = new BillboardMesh_1.BillboardMesh();
      billmh.initialize(this.m_bw, this.m_bh);
      let mh = billmh.mesh;
      let entity = this.entity = CoRScene.createDisplayEntityWithDataMesh(mh, ml, true);
      const RendererState = CoRScene.RendererState;
      entity.setRenderState(RendererState.BACK_ADD_BLENDSORT_STATE);

      if (this.m_blendType == 1) {
        if (this.m_blendAlways) {
          this.entity.setRenderState(RendererState.BACK_TRANSPARENT_STATE);
        } else {
          this.entity.setRenderState(RendererState.BACK_TRANSPARENT_ALWAYS_STATE);
        }
      } else if (this.m_blendType == 2) {
        if (this.m_blendAlways) {
          this.entity.setRenderState(RendererState.BACK_ADD_BLENDSORT_STATE);
        } else {
          this.entity.setRenderState(RendererState.BACK_ADD_BLENDSORT_STATE);
        }
      }
    }
  }

  toTransparentBlend(always = false) {
    this.brightnessEnabled = false;
    this.alphaEnabled = true;
    this.m_blendType = 1;
    this.m_blendAlways = always;
  }

  toBrightnessBlend(always = false) {
    this.brightnessEnabled = true;
    this.alphaEnabled = false;
    this.m_blendType = 2;
  }

  initializeSquare(size, texList) {
    this.m_bw = size;
    this.m_bh = size;
    this.initEntity(texList);
  }

  initialize(bw, bh, texList) {
    this.m_bw = bw;
    this.m_bh = bh;
    this.initEntity(texList);
  }

  setRGBA4f(pr, pg, pb, pa) {
    this.m_uniformData[4] = pr;
    this.m_uniformData[5] = pg;
    this.m_uniformData[6] = pb;
    this.m_uniformData[7] = pa;
  }

  setRGB3f(pr, pg, pb) {
    this.m_uniformData[4] = pr;
    this.m_uniformData[5] = pg;
    this.m_uniformData[6] = pb;
  }

  setFadeFactor(pa) {
    this.m_uniformData[7] = pa;
  }

  getFadeFactor() {
    return this.m_uniformData[7];
  }

  setRGBAOffset4f(pr, pg, pb, pa) {
    this.m_uniformData[8] = pr;
    this.m_uniformData[9] = pg;
    this.m_uniformData[10] = pb;
    this.m_uniformData[11] = pa;
  }

  setRGBOffset3f(pr, pg, pb) {
    this.m_uniformData[8] = pr;
    this.m_uniformData[9] = pg;
    this.m_uniformData[10] = pb;
  }

  getRotationZ() {
    return this.m_rz;
  }

  setRotationZ(degrees) {
    this.m_rz = degrees;
    this.m_uniformData[2] = degrees * (degrees * Math.PI / 180.0);
  }

  getScaleX() {
    return this.m_uniformData[0];
  }

  getScaleY() {
    return this.m_uniformData[1];
  }

  setScaleX(p) {
    this.m_uniformData[0] = p;
  }

  setScaleY(p) {
    this.m_uniformData[1] = p;
  }

  setScaleXY(sx, sy) {
    this.m_uniformData[0] = sx;
    this.m_uniformData[1] = sy;
  }

  setXYZ(px, py, pz) {
    this.entity.setXYZ(px, py, pz);
  }

  setPosition(pos) {
    this.entity.setPosition(pos);
  }

  setVisible(v) {
    this.entity.setVisible(v);
  }

  getVisible() {
    return this.entity.getVisible();
  }
  /**
   * 设置深度偏移量
   * @param offset the value range: [-2.0 -> 2.0]
   */


  setDepthOffset(offset) {
    this.m_uniformData[3] = offset;
  }

  getUniformData() {
    return this.m_uniformData;
  }

  update() {
    this.entity.update();
  }

  destroy() {
    if (this.entity != null) {
      this.entity.destroy();
      this.entity = null;
    }

    if (this.m_material != null) {
      this.m_material.destroy();
      this.m_material = null;
    }

    if (this.m_mesh != null) {
      this.m_mesh.destroy();
      this.m_mesh = null;
    }

    this.m_uniformData = null;
  }

}

exports.Billboard = Billboard;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1c4a");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "fb23":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const BillboardFragShaderBase_1 = __importDefault(__webpack_require__("67f4"));

class BillboardMaterial {
  constructor() {
    this.material = null;
    this.fogEnabled = false;
    this.brightnessEnabled = true;
    this.alphaEnabled = false;
    this.rotationEnabled = false;
  }

  buildShader(shdCodeBuf) {
    let coder = shdCodeBuf.getShaderCodeBuilder();
    if (this.rotationEnabled) coder.addDefine("VOX_ROTATION");

    if (this.brightnessEnabled) {
      const MT = CoRScene.MaterialPipeType;
      let f = shdCodeBuf.fogEnabled;
      let pipeline = shdCodeBuf.pipeline;

      if (pipeline != null) {
        f = f || pipeline.hasPipeByType(MT.FOG_EXP2);
        f = f || pipeline.hasPipeByType(MT.FOG);
      }

      shdCodeBuf.brightnessOverlayEnabeld = f;
    }

    let uniform = shdCodeBuf.getUniform();
    uniform.addDiffuseMap();
    coder.addVertLayout("vec2", "a_vs");
    coder.addVertLayout("vec2", "a_uvs");
    coder.addVarying("vec4", "v_colorMult");
    coder.addVarying("vec4", "v_colorOffset");
    coder.addVarying("vec2", "v_uv");
    coder.addVertUniform("vec4", "u_billParam", 3);
    coder.addDefine("FADE_VAR", "fv4");
    let fragCode0 = `
    vec4 color = VOX_Texture2D(VOX_DIFFUSE_MAP, v_uv);
    vec3 offsetColor = v_colorOffset.rgb;
    vec4 fv4 = v_colorMult.wwww;
`;
    let fadeCode = BillboardMaterial.s_billFS.getBrnAndAlphaCode();
    let fragCode2 = `
    FragColor0 = color;
`;
    coder.addFragMainCode(fragCode0 + fadeCode + fragCode2);
    coder.addVertMainCode(`
    vec4 temp = u_billParam[0];
    float cosv = cos(temp.z);
    float sinv = sin(temp.z);
    vec2 vtx = a_vs.xy * temp.xy;
    vec2 vtx_pos = vec2(vtx.x * cosv - vtx.y * sinv, vtx.x * sinv + vtx.y * cosv);
    viewPosition = u_viewMat * u_objMat * vec4(0.0,0.0,0.0,1.0);
    viewPosition.xy += vtx_pos.xy;
    gl_Position =  u_projMat * viewPosition;
    gl_Position.z = ((gl_Position.z / gl_Position.w) + temp.w) * gl_Position.w;
    v_uv = a_uvs;
    v_colorMult = u_billParam[1];
    v_colorOffset = u_billParam[2];
`);
  }

  initialize() {
    if (this.material == null) {
      let uns = "co_billboard_entity_material";
      if (this.rotationEnabled) uns += "Rot";
      uns += this.brightnessEnabled ? "Brn" : "Alp";
      let material = CoRScene.createShaderMaterial(uns);
      material.fogEnabled = this.fogEnabled;
      material.setShaderBuilder(shdCodeBuf => {
        this.buildShader(shdCodeBuf);
      });
      material.initializeByCodeBuf(true);
      this.material = material;
    }
  }

  destroy() {
    if (this.material != null) {
      this.material.destroy();
      this.material = null;
    }
  }

}

BillboardMaterial.s_billFS = new BillboardFragShaderBase_1.default();
exports.BillboardMaterial = BillboardMaterial;

/***/ }),

/***/ "fba3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "BillboardGroupShaderCode", function() { return /* binding */ BillboardGroupShaderCode; });

// CONCATENATED MODULE: ./src/vox/material/mcase/glsl/BillboardGroup_fragBody.glsl
/* harmony default export */ var BillboardGroup_fragBody = ("    vec4 color = VOX_Texture2D(VOX_DIFFUSE_MAP, v_texUV.xy);\r\n    #ifdef VOX_USE_CLIP_MIX\r\n        color = mix(color, VOX_Texture2D(VOX_DIFFUSE_MAP, v_texUV.zw),v_factor.x);\r\n    #endif\r\n\r\n    vec3 offsetColor = getOffsetColor();\r\n    \r\n    blendBrightnessORAlpha( color, offsetColor );\r\n\r\n    #ifdef VOX_PREMULTIPLY_ALPHA\r\n        color.xyz *= color.a;\r\n    #endif\r\n    FragColor0 = color;\r\n    // for test\r\n    // FragColor0 = vec4(vec3(0.3), 1.0);");
// CONCATENATED MODULE: ./src/vox/material/mcase/glsl/BillboardGroup_fragHead.glsl
/* harmony default export */ var BillboardGroup_fragHead = ("vec3 getOffsetColor() {\r\n    #ifdef VOX_OFFSET_COLOR_MAP\r\n        #ifdef VOX_USE_RAW_UV\r\n            vec3 offsetColor = clamp(v_colorOffset.xyz + VOX_Texture2D(VOX_OFFSET_COLOR_MAP, v_uv.xy).xyz,vec3(0.0),vec3(1.0));\r\n        #else\r\n            vec3 offsetColor = clamp(v_colorOffset.xyz + VOX_Texture2D(VOX_OFFSET_COLOR_MAP, v_texUV.xy).xyz,vec3(0.0),vec3(1.0));\r\n        #endif\r\n    #else\r\n        vec3 offsetColor = v_colorOffset.xyz;\r\n    #endif\r\n    return offsetColor;\r\n}\r\n\r\nvoid blendBrightnessORAlpha(inout vec4 color, in vec3 offsetColor) {\r\n\r\n    #if FADE_STATUS == 11\r\n        color.rgb = color.rgb * v_colorMult.xyz + color.aaa * offsetColor;\r\n        color *= FADE_VAR.zzzz;\r\n    #elif FADE_STATUS == 10\r\n        color.rgb = min(color.rgb * v_colorMult.xyz + color.rgb * offsetColor, vec3(1.0));\r\n        color.rgb *= FADE_VAR.zzz;\r\n    #elif FADE_STATUS == 1\r\n        color.rgb = color.rgb * v_colorMult.xyz + color.aaa * offsetColor;\r\n        color.a *= FADE_VAR.z;\r\n    #else\r\n        color.rgb = color.rgb * v_colorMult.xyz + offsetColor;\r\n        color.a *= FADE_VAR.z;\r\n    #endif\r\n}");
// CONCATENATED MODULE: ./src/vox/material/mcase/glsl/BillboardGroup_vertBody.glsl
/* harmony default export */ var BillboardGroup_vertBody = ("    vec4 temp = u_billParam[0];\r\n\r\n    #ifndef VOX_PARTICLE_FLARE\r\n        float time = max(a_nvs.w * temp.z - a_uvs2.w, 0.0);\r\n        #ifdef PLAY_ONCE\r\n            time = min(time, a_uvs2.x);\r\n        #endif\r\n        float kf = fract(time/a_uvs2.x);\r\n        time = kf * a_uvs2.x;\r\n    #else\r\n        float kf = fract(a_uvs2.w * temp.z/a_uvs2.x);\r\n    #endif\r\n\r\n    float fi = kf;\r\n    kf = min(kf/a_uvs2.y,1.0) * (1.0 - max((kf - a_uvs2.z)/(1.0 - a_uvs2.z), 0.0));\r\n    // scale\r\n    vec2 vtx = a_vs.xy * temp.xy * vec2(a_vs.z + kf * a_vs.w);\r\n    #ifndef VOX_PARTICLE_FLARE\r\n        viewPosition = motionCalc(time, vtx);\r\n    #else\r\n        viewPosition = u_viewMat * u_objMat * vec4(a_vs2.xyz,1.0);\r\n    #endif\r\n\r\n    viewPosition.xy += vtx.xy;\r\n    gl_Position =  u_projMat * viewPosition;\r\n    temp = u_billParam[0];\r\n    // use depth offset\r\n    gl_Position.z = ((gl_Position.z / gl_Position.w) + temp.w) * gl_Position.w;\r\n\r\n    v_factor = vec4(0.0,0.0, kf * a_vs2.w, fi);\r\n\r\n    #ifdef VOX_USE_RAW_UV\r\n        v_uv = vec4(a_uvs.xy,0.0,0.0);\r\n    #endif\r\n\r\n    #ifdef VOX_USE_CLIP\r\n        calculateClipUV( fi );\r\n    #else\r\n        v_texUV = vec4(a_uvs.xy, a_uvs.xy);\r\n    #endif\r\n    \r\n    v_colorMult = u_billParam[1];\r\n    v_colorOffset = u_billParam[2];\r\n");
// CONCATENATED MODULE: ./src/vox/material/mcase/glsl/BillboardGroup_vertHead.glsl
/* harmony default export */ var BillboardGroup_vertHead = ("#ifdef ROTATION_DIRECT\r\n\r\n// 4.71238898038469\r\n#define MATH_3PER2PI 4.71238898\r\n// 1.5707963267948966\r\n#define MATH_1PER2PI 1.57079633\r\n\r\nfloat getRadianByXY(float dx, float dy) {\r\n\r\n    if(abs(dx) < 0.00001) {\r\n        return (dy >= 0.0) ? MATH_1PER2PI : MATH_3PER2PI;\r\n    }\r\n    float rad = atan(dy/dx);\r\n    return dx >= 0.0 ? rad: (PI + rad);\r\n}\r\n#endif\r\n\r\nconst vec3 biasV3 = vec3(0.1);\r\n\r\n#ifdef VOX_USE_CLIP\r\nvoid calculateClipUV(float fi) {\r\n    \r\n    #ifdef VOX_USE_CLIP_MIX\r\n        // calculate clip uv\r\n        vec4 temp = u_billParam[ BILL_PARAM_INDEX ];//(x:cn,y:total,z:du,w:dv)\r\n        float clipf0 = floor(fi * temp.y);\r\n        float clipf1 = min(clipf0 + 1.0, temp.y - 1.0);\r\n        clipf0 /= temp.x;\r\n        // vec2(floor(fract(clipf0) * temp.x), floor(clipf0)) -> vec2(cn u,rn v)\r\n        v_texUV.xy = (vec2(floor(fract(clipf0) * temp.x), floor(clipf0)) + a_uvs.xy) * temp.zw;\r\n\r\n        v_factor.x = fract(fi * temp.y);\r\n\r\n        clipf1 /= temp.x;\r\n        v_texUV.zw = (vec2(floor(fract(clipf1) * temp.x), floor(clipf1)) + a_uvs.xy) * temp.zw;\r\n    #else\r\n        // calculate clip uv\r\n        vec4 temp = u_billParam[ BILL_PARAM_INDEX ];//(x:cn,y:total,z:du,w:dv)\r\n        float clipf = floor(fi * temp.y);\r\n        clipf /= temp.x;\r\n        // vec2(floor(fract(clipf) * temp.x), floor(clipf)) -> vec2(cn u,rn v)\r\n        v_texUV.xy = (vec2(floor(fract(clipf) * temp.x), floor(clipf)) + a_uvs.xy) * temp.zw;\r\n    #endif\r\n}\r\n#endif\r\n#ifndef VOX_PARTICLE_FLARE\r\nvec4 motionCalc(float time, inout vec2 vtx) {\r\n    vec3 timeV = vec3(time);\r\n    vec3 acc3 = u_billParam[3].xyz + a_nvs2.xyz;\r\n    #ifdef ROTATION_DIRECT\r\n        #ifdef SPEED_SCALE\r\n            float v0scale = clamp(length(a_nvs.xyz + acc3 * timeV)/u_billParam[1].w,1.0,u_billParam[3].w);\r\n            vtx *= vec2(v0scale, 1.0);\r\n        #endif\r\n\r\n        vec3 pv0 = a_vs2.xyz + (a_nvs.xyz + acc3 * timeV) * timeV;\r\n        timeV += biasV3;\r\n        vec3 pv1 = a_vs2.xyz + (a_nvs.xyz + acc3 * timeV) * timeV;\r\n\r\n        mat4 voMat = u_viewMat * u_objMat;\r\n        vec4 pos = voMat * vec4(pv0,1.0);\r\n        vec4 pos1 = voMat * vec4(pv1,1.0);\r\n        float rad = getRadianByXY(pos1.x - pos.x, pos1.y - pos.y);\r\n        float cosv = cos(rad);\r\n        float sinv = sin(rad);\r\n\r\n        // rotate\r\n        vtx = vec2(vtx.x * cosv - vtx.y * sinv, vtx.x * sinv + vtx.y * cosv);\r\n    #else\r\n        vec4 pos = u_viewMat * u_objMat * vec4(a_vs2.xyz + (a_nvs.xyz + acc3 * timeV) * timeV,1.0);\r\n    #endif\r\n    return pos;\r\n}\r\n#endif");
// CONCATENATED MODULE: ./src/vox/material/mcase/glsl/BillboardGroupShaderCode.js
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/




const BillboardGroupShaderCode = {
  vert: "",
  vert_head: BillboardGroup_vertHead,
  vert_body: BillboardGroup_vertBody,
  frag: "",
  frag_head: BillboardGroup_fragHead,
  frag_body: BillboardGroup_fragBody,
  uuid: "lambert"
};


/***/ })

/******/ });
});