(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoLightModule"] = factory();
	else
		root["CoLightModule"] = factory();
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

/***/ "05f8":
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

class MaterialPipeBase {
  constructor(shdCtx) {
    this.m_uid = -1;
    this.m_uniformParam = null;
    this.m_dirty = false;
    this.m_shdCtx = null;
    this.m_shdCtx = shdCtx;
    this.m_uid = MaterialPipeBase.s_uid++;
  }

  getUid() {
    return this.m_uid;
  }

  update() {
    if (this.m_uniformParam != null && this.m_dirty) {
      this.m_dirty = false;
      this.m_uniformParam.uProbe.update();
    }
  }

  getGlobalUinform() {
    return this.m_uniformParam != null ? this.m_uniformParam.cloneUniform() : null;
  }

  destroy() {
    if (this.m_uniformParam != null) this.m_uniformParam.destroy();
    this.m_uniformParam = null;
    this.m_shdCtx = null;
  }

}

MaterialPipeBase.s_uid = 0;
exports.MaterialPipeBase = MaterialPipeBase;

/***/ }),

/***/ "084e":
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

class GlobalUniformParamBase {
  constructor(shdCtx, autoBuild = true) {
    this.m_shdCtx = null;
    this.uProbe = null;
    this.uniform = null;
    this.m_shdCtx = shdCtx;

    if (autoBuild) {
      this.uProbe = shdCtx.createShaderUniformProbe();
      this.uniform = shdCtx.createShaderGlobalUniform();
    }
  }

  getNames() {
    return [];
  }

  cloneUniform() {
    return this.m_shdCtx.cloneShaderGlobalUniform(this.uniform);
  }

  buildData() {
    this.m_shdCtx.updateGlobalUinformDataFromProbe(this.uniform, this.uProbe, this.getNames());
    this.uProbe.update();
  }

  destroy() {
    this.uProbe = null;
    this.uniform = null;
    this.m_shdCtx = null;
  }

}

exports.GlobalUniformParamBase = GlobalUniformParamBase;

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

/***/ "3930":
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
const __$mcv = 1e-5;

class Color4 {
  constructor(pr = 1.0, pg = 1.0, pb = 1.0, pa = 1.0) {
    this.r = pr;
    this.g = pg;
    this.b = pb;
    this.a = pa;
  }

  clone() {
    return new Color4(this.r, this.g, this.b, this.a);
  }

  gammaCorrect() {
    const f = 1.0 / 2.2;
    this.r = Math.pow(this.r, f);
    this.g = Math.pow(this.g, f);
    this.b = Math.pow(this.b, f);
    return this;
  }

  fromArray4(arr, offset = 0) {
    this.r = arr[offset];
    this.g = arr[offset + 1];
    this.b = arr[offset + 2];
    this.a = arr[offset + 3];
    return this;
  }

  toArray4(arr, offset = 0) {
    arr[offset] = this.r;
    arr[offset + 1] = this.g;
    arr[offset + 2] = this.b;
    arr[offset + 3] = this.a;
    return this;
  }

  fromArray3(arr, offset = 0) {
    this.r = arr[offset];
    this.g = arr[offset + 1];
    this.b = arr[offset + 2];
    return this;
  }

  toArray3(arr, offset = 0) {
    arr[offset] = this.r;
    arr[offset + 1] = this.g;
    arr[offset + 2] = this.b;
    return this;
  }

  fromBytesArray3(arr, offset = 0) {
    this.setRGB3Bytes(arr[offset], arr[offset + 1], arr[offset + 2]);
    return this;
  }

  toBytesArray3(arr, offset = 0) {
    arr[offset] = Math.round(this.r * 255);
    arr[offset + 1] = Math.round(this.g * 255);
    arr[offset + 2] = Math.round(this.b * 255);
    return this;
  }

  setRGB3f(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    return this;
  }

  setRGB3Bytes(uint8R, uint8G, uint8B) {
    const k = 1.0 / 255.0;
    this.r = uint8R * k;
    this.g = uint8G * k;
    this.b = uint8B * k;
    return this; // return this.setRGB3Bytes(r,g,b);
  } // setRGB3Bytes(uint8R: number, uint8G: number, uint8B: number): Color4 {
  //     let k = 1.0 / 255.0;
  //     this.r = uint8R * k;
  //     this.g = uint8G * k;
  //     this.b = uint8B * k;
  //     return this;
  // }


  setRGBUint24(rgbUint24) {
    this.r = (rgbUint24 >> 16 & 0x0000ff) / 255.0;
    this.g = (rgbUint24 >> 8 & 0x0000ff) / 255.0;
    this.b = (rgbUint24 & 0x0000ff) / 255.0;
    return this;
  }

  getRGBUint24() {
    return (Math.round(this.r * 255) << 16) + (Math.round(this.g * 255) << 8) + Math.round(this.b * 255);
  }

  setRGBA4f(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    return this;
  }

  setAlpha(a) {
    this.a = a;
    return this;
  }

  copyFrom(c) {
    this.r = c.r;
    this.g = c.g;
    this.b = c.b;
    this.a = c.a;
    return this;
  }

  copyFromRGB(c) {
    this.r = c.r;
    this.g = c.g;
    this.b = c.b;
    return this;
  }

  scaleBy(s) {
    this.r *= s;
    this.g *= s;
    this.b *= s;
    return this;
  }

  inverseRGB() {
    this.r = 1.0 - this.r;
    this.g = 1.0 - this.g;
    this.b = 1.0 - this.b;
    return this;
  }

  randomRGB(density = 1.0, bias = 0.0) {
    this.r = Math.random() * density + bias;
    this.g = Math.random() * density + bias;
    this.b = Math.random() * density + bias;
    return this;
  }

  normalizeRandom(density = 1.0, bias = 0.0) {
    this.r = Math.random();
    this.g = Math.random();
    this.b = Math.random();
    let d = Math.sqrt(this.r * this.r + this.g * this.g + this.b * this.b);

    if (d > __$mcv) {
      this.r = density * this.r / d;
      this.g = density * this.g / d;
      this.b = density * this.b / d;
    }

    this.r += bias;
    this.g += bias;
    this.b += bias;
    return this;
  }

  normalize(density) {
    if (density == undefined) density = 1.0;
    let d = Math.sqrt(this.r * this.r + this.g * this.g + this.b * this.b);

    if (d > __$mcv) {
      this.r = density * this.r / d;
      this.g = density * this.g / d;
      this.b = density * this.b / d;
    }

    return this;
  }

  rgbSizeTo(size) {
    let d = Math.sqrt(this.r * this.r + this.g * this.g + this.b * this.b);
    d = size / d;
    this.r *= d;
    this.g *= d;
    this.b *= d;
    return this;
  }
  /**
   * @returns for example: rgba(255,255,255,1.0)
   */


  getCSSDecRGBAColor() {
    let pr = Math.floor(this.r * 255.0);
    let pg = Math.floor(this.g * 255.0);
    let pb = Math.floor(this.b * 255.0);
    let pa = this.a;
    return "rgba(" + pr + "," + pg + "," + pb + "," + pa + ")";
  }
  /**
   * @returns for example: #350b7e
   */


  getCSSHeXRGBColor() {
    let str = "#";
    let t = Math.floor(this.r * 255.0);

    if (t < 0xf) {
      str += "0" + t.toString(16);
    } else {
      str += "" + t.toString(16);
    }

    t = Math.floor(this.g * 255.0);

    if (t < 0xf) {
      str += "0" + t.toString(16);
    } else {
      str += "" + t.toString(16);
    }

    t = Math.floor(this.b * 255.0);

    if (t < 0xf) {
      str += "0" + t.toString(16);
    } else {
      str += "" + t.toString(16);
    }

    return str;
  }

  toString() {
    return "[Color4(r=" + this.r + ", g=" + this.g + ",b=" + this.b + ",a=" + this.a + ")]";
  }

}

exports.default = Color4;

/***/ }),

/***/ "5216":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MaterialPipeType;

(function (MaterialPipeType) {
  MaterialPipeType[MaterialPipeType["ENV_LIGHT_PARAM"] = 0] = "ENV_LIGHT_PARAM";
  MaterialPipeType[MaterialPipeType["ENV_AMBIENT_LIGHT"] = 1] = "ENV_AMBIENT_LIGHT";
  MaterialPipeType[MaterialPipeType["FOG"] = 2] = "FOG";
  MaterialPipeType[MaterialPipeType["FOG_EXP2"] = 3] = "FOG_EXP2";
  MaterialPipeType[MaterialPipeType["VSM_SHADOW"] = 4] = "VSM_SHADOW";
  MaterialPipeType[MaterialPipeType["GLOBAL_LIGHT"] = 5] = "GLOBAL_LIGHT";
})(MaterialPipeType || (MaterialPipeType = {}));

exports.MaterialPipeType = MaterialPipeType;

/***/ }),

/***/ "5479":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const LightModule_1 = __webpack_require__("e753");

exports.LightModule = LightModule_1.LightModule;

const PointLight_1 = __webpack_require__("8602");

exports.PointLight = PointLight_1.PointLight;

const DirectionLight_1 = __webpack_require__("6a30");

exports.DirectionLight = DirectionLight_1.DirectionLight;

const SpotLight_1 = __webpack_require__("f043");

exports.SpotLight = SpotLight_1.SpotLight;

function createLightModule(rsecne) {
  let ctx = rsecne.getRenderProxy().uniformContext;
  return new LightModule_1.LightModule(ctx);
}

exports.createLightModule = createLightModule;

/***/ }),

/***/ "6390":
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

const UniformConst_1 = __importDefault(__webpack_require__("ab73"));

const GlobalUniformParamBase_1 = __webpack_require__("084e");

class GlobalLightUniformParam extends GlobalUniformParamBase_1.GlobalUniformParamBase {
  getNames() {
    return [UniformConst_1.default.GlobalLight.positionName, UniformConst_1.default.GlobalLight.colorName];
  }

  buildUniformData(lightPosData, lightPosDataVec4Total, lightColors, colorsTotal) {
    this.uProbe.addVec4Data(lightPosData, lightPosDataVec4Total);
    this.uProbe.addVec4Data(lightColors, colorsTotal);
    this.buildData();
  }

  use(shaderBuilder, paramsTotal = 1, colorsTotal = 1) {
    shaderBuilder.uniform.useCameraPosition(false, true);
    shaderBuilder.addFragUniform(UniformConst_1.default.GlobalLight.type, UniformConst_1.default.GlobalLight.positionName, paramsTotal);
    shaderBuilder.addFragUniform(UniformConst_1.default.GlobalLight.type, UniformConst_1.default.GlobalLight.colorName, colorsTotal);
  }

}

exports.GlobalLightUniformParam = GlobalLightUniformParam;

/***/ }),

/***/ "6a30":
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

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const Color4_1 = __importDefault(__webpack_require__("3930"));

class DirectionLight {
  constructor(rgbUint24 = 0xffffff, direction = null) {
    this.direction = new Vector3D_1.default(0.0, -1.0, 0.0, 0.0);
    this.color = new Color4_1.default(1.0, 1.0, 1.0, 1.0);
    /**
     * 顶点与点光源之间距离的一次方因子, default value is 0.0001
     */

    this.attenuationFactor1 = 0.0;
    /**
     * 顶点与点光源之间距离的二次方因子, default value is 0.0005
     */

    this.attenuationFactor2 = 0.0;
    this.color.setRGBUint24(rgbUint24);
    if (direction != null) this.direction.copyFrom(direction);
  }

  setParams(dx, dy, dz, r, g, b, f1, f2) {
    this.direction.setXYZ(dx, dy, dz);
    this.color.setRGB3f(r, g, b);
    this.attenuationFactor1 = f1;
    this.attenuationFactor2 = f2;
  }

}

exports.DirectionLight = DirectionLight;

/***/ }),

/***/ "8602":
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

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const Color4_1 = __importDefault(__webpack_require__("3930"));

class PointLight {
  constructor(rgbUint24 = 0xffffff, pos = null) {
    this.position = new Vector3D_1.default(0.0, 100.0, 0.0);
    this.color = new Color4_1.default(1.0, 1.0, 1.0, 1.0);
    /**
     * 顶点与点光源之间距离的一次方因子, default value is 0.0001
     */

    this.attenuationFactor1 = 0.0001;
    /**
     * 顶点与点光源之间距离的二次方因子, default value is 0.0005
     */

    this.attenuationFactor2 = 0.0005;
    this.color.setRGBUint24(rgbUint24);
    if (pos != null) this.position.copyFrom(pos);
  }

  setParams(px, py, pz, r, g, b, f1, f2) {
    this.position.setXYZ(px, py, pz);
    this.color.setRGB3f(r, g, b);
    this.attenuationFactor1 = f1;
    this.attenuationFactor2 = f2;
  }

}

exports.PointLight = PointLight;

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

/***/ "8e17":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const v_m_180pk = 180.0 / Math.PI;
const v_m_minp = 1e-7;

class Vector3D {
  constructor(px = 0.0, py = 0.0, pz = 0.0, pw = 1.0) {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    this.w = 0.0;
    this.x = px;
    this.y = py;
    this.z = pz;
    this.w = pw;
  }

  clone() {
    return new Vector3D(this.x, this.y, this.z, this.w);
  }

  abs() {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
    this.z = Math.abs(this.z);
    return this;
  }

  setTo(px, py, pz, pw = 1.0) {
    this.x = px;
    this.y = py;
    this.z = pz;
    this.w = pw;
    return this;
  }

  fromArray(arr, offset = 0) {
    this.x = arr[offset];
    this.y = arr[offset + 1];
    this.z = arr[offset + 2];
    return this;
  }

  toArray(arr, offset = 0) {
    arr[offset] = this.x;
    arr[offset + 1] = this.y;
    arr[offset + 2] = this.z;
    return this;
  }

  fromArray4(arr, offset = 0) {
    this.x = arr[offset];
    this.y = arr[offset + 1];
    this.z = arr[offset + 2];
    this.w = arr[offset + 3];
    return this;
  }

  toArray4(arr, offset = 0) {
    arr[offset] = this.x;
    arr[offset + 1] = this.y;
    arr[offset + 2] = this.z;
    arr[offset + 3] = this.w;
    return this;
  }

  setXYZ(px, py, pz) {
    this.x = px;
    this.y = py;
    this.z = pz;
    return this;
  }

  copyFrom(v3) {
    this.x = v3.x;
    this.y = v3.y;
    this.z = v3.z;
    return this;
  }

  dot(a) {
    return this.x * a.x + this.y * a.y + this.z * a.z;
  }

  multBy(a) {
    this.x *= a.x;
    this.y *= a.y;
    this.z *= a.z;
    return this;
  }

  normalize() {
    let d = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

    if (d > v_m_minp) {
      this.x /= d;
      this.y /= d;
      this.z /= d;
    }

    return this;
  }

  normalizeTo(a) {
    let d = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

    if (d > v_m_minp) {
      a.x = this.x / d;
      a.y = this.y / d;
      a.z = this.z / d;
    } else {
      a.x = this.x;
      a.y = this.y;
      a.z = this.z;
    }
  }

  scaleVector(s) {
    this.x *= s.x;
    this.y *= s.y;
    this.z *= s.z;
    return this;
  }

  scaleBy(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }

  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }

  equalsXYZ(a) {
    return Math.abs(this.x - a.x) < v_m_minp && Math.abs(this.y - a.y) < v_m_minp && Math.abs(this.z - a.z) < v_m_minp;
  }

  equalsAll(a) {
    return Math.abs(this.x - a.x) < v_m_minp && Math.abs(this.y - a.y) < v_m_minp && Math.abs(this.z - a.z) < v_m_minp && Math.abs(this.w - a.w) < v_m_minp;
  }

  project() {
    let t = 1.0 / this.w;
    this.x *= t;
    this.y *= t;
    this.z *= t;
  }

  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  getLengthSquared() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  addBy(a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    return this;
  }

  subtractBy(a) {
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    return this;
  }

  subtract(a) {
    return new Vector3D(this.x - a.x, this.y - a.y, this.z - a.z);
  }

  add(a) {
    return new Vector3D(this.x + a.x, this.y + a.y, this.z + a.z);
  }

  crossProduct(a) {
    return new Vector3D(this.y * a.z - this.z * a.y, this.z * a.x - this.x * a.z, this.x * a.y - this.y * a.x);
  }

  crossBy(a) {
    let px = this.y * a.z - this.z * a.y;
    let py = this.z * a.x - this.x * a.z;
    let pz = this.x * a.y - this.y * a.x;
    this.x = px;
    this.y = py;
    this.z = pz;
    return this;
  }

  reflectBy(nv) {
    let idotn2 = (this.x * nv.x + this.y * nv.y + this.z * nv.z) * 2.0;
    this.x = this.x - idotn2 * nv.x;
    this.y = this.y - idotn2 * nv.y;
    this.z = this.z - idotn2 * nv.z;
    return this;
  }

  scaleVecTo(va, scale) {
    this.x = va.x * scale;
    this.y = va.y * scale;
    this.z = va.z * scale;
    return this;
  }

  subVecsTo(va, vb) {
    this.x = va.x - vb.x;
    this.y = va.y - vb.y;
    this.z = va.z - vb.z;
    return this;
  }

  addVecsTo(va, vb) {
    this.x = va.x + vb.x;
    this.y = va.y + vb.y;
    this.z = va.z + vb.z;
    return this;
  }

  crossVecsTo(va, vb) {
    this.x = va.y * vb.z - va.z * vb.y;
    this.y = va.z * vb.x - va.x * vb.z;
    this.z = va.x * vb.y - va.y * vb.x;
    return this;
  }

  toString() {
    return "Vector3D(" + this.x + "" + this.y + "" + this.z + ")";
  }
  /**
   * 右手法则(为正)
   */


  static Cross(a, b, result) {
    result.x = a.y * b.z - a.z * b.y;
    result.y = a.z * b.x - a.x * b.z;
    result.z = a.x * b.y - a.y * b.x;
  } // (va1 - va0) 叉乘 (vb1 - vb0), 右手法则(为正)


  static CrossSubtract(va0, va1, vb0, vb1, result) {
    v_m_v0.x = va1.x - va0.x;
    v_m_v0.y = va1.y - va0.y;
    v_m_v0.z = va1.z - va0.z;
    v_m_v1.x = vb1.x - vb0.x;
    v_m_v1.y = vb1.y - vb0.y;
    v_m_v1.z = vb1.z - vb0.z;
    va0 = v_m_v0;
    vb0 = v_m_v1;
    result.x = va0.y * vb0.z - va0.z * vb0.y;
    result.y = va0.z * vb0.x - va0.x * vb0.z;
    result.z = va0.x * vb0.y - va0.y * vb0.x;
  }

  static Subtract(a, b, result) {
    result.x = a.x - b.x;
    result.y = a.y - b.y;
    result.z = a.z - b.z;
  }

  static DistanceSquared(a, b) {
    v_m_v0.x = a.x - b.x;
    v_m_v0.y = a.y - b.y;
    v_m_v0.z = a.z - b.z;
    return v_m_v0.getLengthSquared();
  }

  static DistanceXYZ(x0, y0, z0, x1, y1, z1) {
    v_m_v0.x = x0 - x1;
    v_m_v0.y = y0 - y1;
    v_m_v0.z = z0 - z1;
    return v_m_v0.getLength();
  }

  static Distance(v0, v1) {
    v_m_v0.x = v0.x - v1.x;
    v_m_v0.y = v0.y - v1.y;
    v_m_v0.z = v0.z - v1.z;
    return v_m_v0.getLength();
  }
  /**
   * get angle degree between two Vector3D objects
   * @param v0 src Vector3D object
   * @param v1 dst Vector3D object
   * @returns angle degree
   */


  static AngleBetween(v0, v1) {
    v0.normalizeTo(v_m_v0);
    v1.normalizeTo(v_m_v1);
    return Math.acos(v_m_v0.dot(v_m_v1)) * v_m_180pk;
  }
  /**
   * get angle radian between two Vector3D objects
   * @param v0 src Vector3D object
   * @param v1 dst Vector3D object
   * @returns angle radian
   */


  static RadianBetween(v0, v1) {
    v0.normalizeTo(v_m_v0);
    v1.normalizeTo(v_m_v1);
    return Math.acos(v_m_v0.dot(v_m_v1));
  }

  static RadianBetween2(v0, v1) {
    //  // c^2 = a^2 + b^2 - 2*a*b * cos(x)
    //  // cos(x) = (a^2 + b^2 - c^2) / 2*a*b
    let pa = v0.getLengthSquared();
    let pb = v1.getLengthSquared();
    v_m_v0.x = v0.x - v1.x;
    v_m_v0.y = v0.y - v1.y;
    v_m_v0.z = v0.z - v1.z;
    return Math.acos((pa + pb - v_m_v0.getLengthSquared()) / (2.0 * Math.sqrt(pa) * Math.sqrt(pb)));
  }

  static Reflect(iv, nv, rv) {
    let idotn2 = (iv.x * nv.x + iv.y * nv.y + iv.z * nv.z) * 2.0;
    rv.x = iv.x - idotn2 * nv.x;
    rv.y = iv.y - idotn2 * nv.y;
    rv.z = iv.z - idotn2 * nv.z;
  }
  /**
   * 逆时针转到垂直
   */


  static VerticalCCWOnXOY(v) {
    const x = v.x;
    v.x = -v.y;
    v.y = x;
  }
  /**
   * 顺时针转到垂直
   */


  static VerticalCWOnXOY(v) {
    const y = v.y;
    v.y = -v.x;
    v.x = y;
  }

}

Vector3D.X_AXIS = new Vector3D(1, 0, 0);
Vector3D.Y_AXIS = new Vector3D(0, 1, 0);
Vector3D.Z_AXIS = new Vector3D(0, 0, 1);
Vector3D.ZERO = new Vector3D(0, 0, 0);
Vector3D.ONE = new Vector3D(1, 1, 1);
exports.default = Vector3D;
const v_m_v0 = new Vector3D();
const v_m_v1 = new Vector3D();

/***/ }),

/***/ "ab73":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class ShadowVSMParams {
  constructor() {
    this.type = "vec4";
    this.data = null;
    /**
     * uniform name string
     */

    this.name = "u_vsmParams";
    /**
     * uniform array length
     */

    this.arrayLength = 3;
  }

}

class EnvLightParam {
  constructor() {
    this.type = "vec4";
    this.data = new Float32Array([0.1, 0.1, 0.1, 1.0, 1.0, 0.1, 600.0, 3500.0, 0.3, 0.0, 0.9, 0.0005, 0.0, 0.0, 800.0, 800.0, -500.0, -500.0, 1000.0, 1000.0 // env ambient area width, height
    ]);
    /**
     * uniform name string
     */

    this.name = "u_envLightParams";
    /**
     * uniform array length
     */

    this.arrayLength = 5;
  }

}
/**
 * shadow view matatrix4 float32array data
 */


class ShadowMat4UniformParam {
  constructor() {
    this.type = "mat4";
    this.data = null;
    /**
     * uniform name string
     */

    this.name = "u_shadowMat";
    /**
     * uniform array length
     */

    this.arrayLength = 0;
  }

}
/**
 * stage param shader uniform name string, vec4: [2.0/stageWidth,2.0/stageHeight, stageWidth,stageHeight]
 */


class StageUniformParam {
  constructor() {
    this.type = "vec4";
    this.data = null;
    /**
     * uniform name string
     */

    this.name = "u_stageParam";
    /**
     * uniform array length
     */

    this.arrayLength = 0;
  }

}
/**
 * view port param shader uniform name string, vec4: [viewPortX, viewPortY, viewPortWidth, viewPortHeight]
 */


class ViewUniformParam {
  constructor() {
    this.type = "vec4";
    this.data = null;
    /**
     * uniform name string
     */

    this.name = "u_viewParam";
    /**
     * uniform array length
     */

    this.arrayLength = 0;
  }

}
/**
 * camera frustrum param shader uniform name string,vec4: [camera zNear,camera zFar, camera nearPlaneHalfW, camera nearPlaneHalfH]
 */


class FrustumUniformParam {
  constructor() {
    this.type = "vec4";
    this.data = null;
    /**
     * uniform name string
     */

    this.name = "u_frustumParam";
    /**
     * uniform array length
     */

    this.arrayLength = 0;
  }

}
/**
 * camera world position param shader uniform name string,vec4: [x, y, z, w]
 */


class CameraPosUniformParam {
  constructor() {
    this.type = "vec4";
    this.data = null;
    /**
     * uniform name string
     */

    this.name = "u_cameraPosition";
    /**
     * uniform array length
     */

    this.arrayLength = 0;
  }

}

class GlobalLightUniform {
  constructor() {
    this.type = "vec4";
    this.positionName = "u_lightPositions";
    this.colorName = "u_lightColors";
  }

}

class UniformConst {}
/**
 * object local space to world space matrix shader uniform name string
 */


UniformConst.LocalTransformMatUNS = "u_objMat";
/**
 * camera view matrix shader uniform name string
 */

UniformConst.CameraViewMatUNS = "u_viewMat";
/**
 * camera projective matrix shader uniform name string
 */

UniformConst.CameraProjectiveMatUNS = "u_projMat";
/**
 * camera frustrum param shader uniform name string,vec4: [camera zNear,camera zFar, camera nearPlaneHalfW, camera nearPlaneHalfH]
 */

UniformConst.FrustumParam = new FrustumUniformParam();
/**
 * camera world position param shader uniform name string,vec4: [x, y, z, w]
 */

UniformConst.CameraPosParam = new CameraPosUniformParam();
/**
 * stage param shader uniform name string, vec4: [2.0/stageWidth,2.0/stageHeight, stageWidth,stageHeight]
 */

UniformConst.StageParam = new StageUniformParam();
/**
 * view port param shader uniform name string, vec4: [viewPortX, viewPortY, viewPortWidth, viewPortHeight]
 */

UniformConst.ViewportParam = new ViewUniformParam();
UniformConst.ShadowMatrix = new ShadowMat4UniformParam();
UniformConst.ShadowVSMParams = new ShadowVSMParams();
UniformConst.GlobalLight = new GlobalLightUniform();
UniformConst.EnvLightParams = new EnvLightParam();
exports.default = UniformConst;

/***/ }),

/***/ "e753":
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

const UniformConst_1 = __importDefault(__webpack_require__("ab73"));

const MaterialPipeType_1 = __webpack_require__("5216");

const MaterialPipeBase_1 = __webpack_require__("05f8");

const GlobalLightUniformParam_1 = __webpack_require__("6390");

const PointLight_1 = __webpack_require__("8602");

const DirectionLight_1 = __webpack_require__("6a30");

const SpotLight_1 = __webpack_require__("f043");

class LightModule extends MaterialPipeBase_1.MaterialPipeBase {
  constructor() {
    super(...arguments);
    this.m_lightPosData = null;
    this.m_lightColors = null;
    this.m_lightPosDataVec4Total = 0;
    this.m_lightsTotal = 0;
    this.m_pointLightList = null;
    this.m_direcLightList = null;
    this.m_spotLightList = null;
  }

  clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
  }

  degreeToRadian(degree) {
    return 180.0 * degree / Math.PI;
  }

  getPointLightsTotal() {
    return this.m_pointLightList != null ? this.m_pointLightList.length : 0;
  }

  getDirecLightsTotal() {
    return this.m_direcLightList != null ? this.m_direcLightList.length : 0;
  }

  getSpotLightsTotal() {
    return this.m_spotLightList != null ? this.m_spotLightList.length : 0;
  }

  getPointLightAt(i) {
    if (this.m_pointLightList != null && i >= 0 && i < this.m_pointLightList.length) {
      return this.m_pointLightList[i];
    }

    return null;
  }

  getDirectionLightAt(i) {
    if (this.m_direcLightList != null && i >= 0 && i < this.m_direcLightList.length) {
      return this.m_direcLightList[i];
    }

    return null;
  }

  getSpotLightAt(i) {
    if (this.m_spotLightList != null && i >= 0 && i < this.m_spotLightList.length) {
      return this.m_spotLightList[i];
    }

    return null;
  }

  appendPointLight() {
    if (this.m_pointLightList == null) {
      this.m_pointLightList = [];
    }

    let light = new PointLight_1.PointLight();
    this.m_pointLightList.push(light);
    this.m_lightsTotal++;
    return light;
  }

  appendDirectionLight() {
    if (this.m_direcLightList == null) {
      this.m_direcLightList = [];
    }

    let light = new DirectionLight_1.DirectionLight();
    this.m_direcLightList.push(light);
    this.m_lightsTotal++;
    return light;
  }

  appendSpotLight() {
    if (this.m_spotLightList == null) {
      this.m_spotLightList = [];
    }

    let light = new SpotLight_1.SpotLight();
    this.m_spotLightList.push(light);
    this.m_lightsTotal++;
    return light;
  }

  updatePointLightData() {
    if (this.m_pointLightList != null) {
      let light;
      let posFS = this.m_lightPosData;
      let colFS = this.m_lightColors;
      let j = 0;

      for (let i = 0; i < this.m_pointLightList.length; ++i) {
        light = this.m_pointLightList[i];
        j = i * 4;
        posFS[j] = light.position.x;
        posFS[j + 1] = light.position.y;
        posFS[j + 2] = light.position.z;
        posFS[j + 3] = light.attenuationFactor1;
        colFS[j] = light.color.r;
        colFS[j + 1] = light.color.g;
        colFS[j + 2] = light.color.b;
        colFS[j + 3] = light.attenuationFactor2;
      }
    }
  }

  updateDirecLighttData() {
    if (this.m_direcLightList != null) {
      let light;
      let posFS = this.m_lightPosData;
      let colFS = this.m_lightColors;
      let j = 0;
      let offset = this.m_pointLightList != null ? this.m_pointLightList.length : 0;
      offset *= 4;

      for (let i = 0; i < this.m_direcLightList.length; ++i) {
        light = this.m_direcLightList[i];
        j = offset + i * 4;
        posFS[j] = light.direction.x;
        posFS[j + 1] = light.direction.y;
        posFS[j + 2] = light.direction.z;
        posFS[j + 3] = light.attenuationFactor1;
        colFS[j] = light.color.r;
        colFS[j + 1] = light.color.g;
        colFS[j + 2] = light.color.b;
        colFS[j + 3] = light.attenuationFactor2;
      }
    }
  }

  updateSpotLighttData() {
    if (this.m_spotLightList != null) {
      let light;
      let posFS = this.m_lightPosData;
      let colFS = this.m_lightColors;
      let j = 0;
      let offset = this.m_pointLightList != null ? this.m_pointLightList.length : 0;
      offset += this.m_direcLightList != null ? this.m_direcLightList.length : 0;
      offset *= 4;

      for (let i = 0; i < this.m_spotLightList.length; ++i) {
        light = this.m_spotLightList[i];
        j = offset + i * 4;
        posFS[j] = light.position.x;
        posFS[j + 1] = light.position.y;
        posFS[j + 2] = light.position.z;
        posFS[j + 3] = light.attenuationFactor1;
        colFS[j] = light.color.r;
        colFS[j + 1] = light.color.g;
        colFS[j + 2] = light.color.b;
        colFS[j + 3] = light.attenuationFactor2;
      }

      offset += this.m_spotLightList.length * 4;

      for (let i = 0; i < this.m_spotLightList.length; ++i) {
        light = this.m_spotLightList[i];
        let value = 90 - this.clamp(light.angleDegree, 0.0, 90.0);
        value = Math.cos(this.degreeToRadian(value));
        j = offset + i * 4;
        posFS[j] = light.direction.x;
        posFS[j + 1] = light.direction.y;
        posFS[j + 2] = light.direction.z;
        posFS[j + 3] = value;
      }
    }
  }

  buildData() {
    if (this.m_uniformParam == null) {
      let total = this.m_lightsTotal;
      let colorsTotal = this.m_lightsTotal;
      let lightParamsTotal = total * 4;
      this.m_lightPosDataVec4Total = this.m_lightsTotal;

      if (this.m_spotLightList == null) {
        if (this.m_lightPosData == null) this.m_lightPosData = new Float32Array(lightParamsTotal);
      } else {
        lightParamsTotal += this.m_spotLightList.length * 4;
        this.m_lightPosDataVec4Total += this.m_spotLightList.length;
        if (this.m_lightPosData == null) this.m_lightPosData = new Float32Array(lightParamsTotal);
      }

      if (this.m_lightColors == null) this.m_lightColors = new Float32Array(colorsTotal * 4);
      let uniformParam = new GlobalLightUniformParam_1.GlobalLightUniformParam(this.m_shdCtx);
      uniformParam.buildUniformData(this.m_lightPosData, this.m_lightPosDataVec4Total, this.m_lightColors, colorsTotal);
      this.m_uniformParam = uniformParam;
    }

    this.updatePointLightData();
    this.updateDirecLighttData();
    this.updateSpotLighttData();
  }

  showInfo() {
    console.log("showInfo(), this.m_lightPosData: ", this.m_lightPosData);
    console.log("showInfo(), this.m_lightColors: ", this.m_lightColors);
  }

  resetPipe() {}

  getTextures(shaderBuilder, outList, pipeType) {
    return null;
  }

  useShaderPipe(shaderBuilder, pipeType) {
    if (this.m_uniformParam != null) {
      shaderBuilder.normalEnabled = true;
      let lightsTotal = this.getPointLightsTotal() + this.getDirecLightsTotal() + this.getSpotLightsTotal();

      if (lightsTotal > 0) {
        shaderBuilder.addDefine("VOX_LIGHTS_TOTAL", "" + lightsTotal);
        if (this.getPointLightsTotal() > 0) shaderBuilder.addDefine("VOX_POINT_LIGHTS_TOTAL", "" + this.getPointLightsTotal());else shaderBuilder.addDefine("VOX_POINT_LIGHTS_TOTAL", "0");
        if (this.getDirecLightsTotal() > 0) shaderBuilder.addDefine("VOX_DIRECTION_LIGHTS_TOTAL", "" + this.getDirecLightsTotal());else shaderBuilder.addDefine("VOX_DIRECTION_LIGHTS_TOTAL", "0");
        if (this.getSpotLightsTotal() > 0) shaderBuilder.addDefine("VOX_SPOT_LIGHTS_TOTAL", "" + this.getSpotLightsTotal());else shaderBuilder.addDefine("VOX_SPOT_LIGHTS_TOTAL", "0");
      } else {
        shaderBuilder.addDefine("VOX_LIGHTS_TOTAL", "0");
      }

      this.m_uniformParam.use(shaderBuilder, this.m_lightPosDataVec4Total, this.m_lightsTotal);
    }
  }

  getPipeTypes() {
    return [MaterialPipeType_1.MaterialPipeType.GLOBAL_LIGHT];
  }

  getPipeKey(pipeType) {
    switch (pipeType) {
      case MaterialPipeType_1.MaterialPipeType.GLOBAL_LIGHT:
        let key = "";
        if (this.getPointLightsTotal() > 0) key = "" + this.getPointLightsTotal();
        if (this.getDirecLightsTotal() > 0) key += "" + this.getDirecLightsTotal();
        if (this.getSpotLightsTotal() > 0) key += "" + this.getSpotLightsTotal();

        if (key != "") {
          return "[" + pipeType + ":" + key + "]";
        }

        break;

      default:
        break;
    }

    return "";
  }

  useUniforms(shaderBuilder) {
    if (this.m_uniformParam != null) {
      shaderBuilder.addFragUniform(UniformConst_1.default.GlobalLight.type, UniformConst_1.default.GlobalLight.positionName, this.m_lightPosDataVec4Total);
      shaderBuilder.addFragUniform(UniformConst_1.default.GlobalLight.type, UniformConst_1.default.GlobalLight.colorName, this.m_lightsTotal);
    }
  }

  update() {
    this.buildData();
    if (this.m_uniformParam != null) this.m_uniformParam.uProbe.update();
  }

  destroy() {
    this.m_lightPosData = null;
    this.m_lightColors = null;
    this.m_lightsTotal = 0;
    this.m_pointLightList = null;
    this.m_direcLightList = null;
    this.m_spotLightList = null;
    super.destroy();
  }

}

exports.LightModule = LightModule;

/***/ }),

/***/ "f043":
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

const Vector3D_1 = __importDefault(__webpack_require__("8e17"));

const Color4_1 = __importDefault(__webpack_require__("3930"));

class SpotLight {
  constructor() {
    this.position = new Vector3D_1.default(0.0, 100.0, 0.0);
    this.direction = new Vector3D_1.default(0.0, -1.0, 0.0, 0.0);
    this.color = new Color4_1.default(1.0, 1.0, 1.0, 1.0);
    /**
     * spot light 椎体夹角角度值
     */

    this.angleDegree = 30.0;
    /**
     * 顶点与点光源之间距离的一次方因子, default value is 0.0001
     */

    this.attenuationFactor1 = 0.0001;
    /**
     * 顶点与点光源之间距离的二次方因子, default value is 0.0005
     */

    this.attenuationFactor2 = 0.0005;
  }

  setParams(px, py, pz, dx, dy, dz, r, g, b, degree, f1, f2) {
    this.position.setXYZ(px, py, pz);
    this.direction.setXYZ(dx, dy, dz);
    this.color.setRGB3f(r, g, b);
    this.angleDegree = degree;
    this.attenuationFactor1 = f1;
    this.attenuationFactor2 = f2;
  }

}

exports.SpotLight = SpotLight;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5479");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ })

/******/ });
});