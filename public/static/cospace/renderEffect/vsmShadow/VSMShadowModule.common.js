module.exports =
/******/ (function(modules) { // webpackBootstrap
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

/***/ "19ec":
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

const ShadowVSMModule_1 = __importDefault(__webpack_require__("e439"));

function create(vsmFboIndex) {
  return new ShadowVSMModule_1.default(vsmFboIndex);
}

exports.create = create;

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

/***/ "5216":
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

/***/ "5d74":
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

const ShaderUniformData_1 = __importDefault(__webpack_require__("b3bd"));

class OccBlurDecorator {
  constructor(horizonal, tex, radius) {
    this.m_horizonal = true;
    this.m_paramData = new Float32Array([1.0, 1.0, 1.0, 4.0]);
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

    this.fogEnabled = false;
    this.m_currMap = null;
    this.m_horizonal = horizonal;
    this.m_uniqueName = "OccBlur";
    this.m_uniqueName += horizonal ? "H" : "V";
    this.m_currMap = tex;
    this.m_paramData[3] = radius;
  }

  setShadowRadius(radius) {
    this.m_paramData[3] = radius;
  }

  buildBufParams() {}

  buildTextureList(builder) {
    builder.add2DMap(this.m_currMap, "", false);
  }

  buildShader(coder) {
    if (this.m_horizonal) {
      coder.addDefine("HORIZONAL_PASS", "1");
    }

    coder.addDefine("SAMPLE_RATE", "0.25");
    coder.addDefine("HALF_SAMPLE_RATE", "0.125"); // coder.addTextureSample2D("", false, true, false);

    coder.uniform.useViewPort(false, true);
    coder.addFragUniform("vec4", "u_params", 0);
    coder.useVertSpaceMats(false, false, false);
    coder.addFragMainCode(`
const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
    vec4 r = vec4( fract( v * PackFactors ), v );
    r.yzw -= r.xyz * ShiftRight8; // tidy overflow
    return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
    return dot( v, UnpackFactors );
}

vec4 pack2HalfToRGBA( vec2 v ) {
    vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
    return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
    return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
void main() {

    float mean = 0.0;
    float squared_mean = 0.0;
    
    vec2 resolution = u_viewParam.zw;
    
    float radius = u_params[3];
    vec4 c4 = VOX_Texture2D( u_sampler0, ( gl_FragCoord.xy ) / resolution );    
    // This seems totally useless but it's a crazy work around for a Adreno compiler bug
    float depth = unpackRGBAToDepth( c4 );

    for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {

        #ifdef HORIZONAL_PASS

            vec2 distribution = unpackRGBATo2Half( VOX_Texture2D( u_sampler0, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
            mean += distribution.x;
            squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

        #else

            float depth = unpackRGBAToDepth( VOX_Texture2D( u_sampler0, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
            mean += depth;
            squared_mean += depth * depth;

        #endif

    }

    mean = mean * HALF_SAMPLE_RATE;
    squared_mean = squared_mean * HALF_SAMPLE_RATE;

    float std_dev = sqrt( squared_mean - mean * mean );

    FragColor0 = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`);
    coder.addVertMainCode(`
void main() {
    gl_Position =  vec4(a_vs,1.0);
}
`);
  }

  createUniformData() {
    let oum = new ShaderUniformData_1.default();
    oum.uniformNameList = ["u_params"];
    oum.dataList = [this.m_paramData];
    return oum;
  }

  getUniqueName() {
    return this.m_uniqueName;
  }

}

exports.OccBlurDecorator = OccBlurDecorator;

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

/***/ "a9f4":
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
var ShadowMode;

(function (ShadowMode) {
  /**
   * default shadow mode
   */
  ShadowMode[ShadowMode["Default"] = 1] = "Default";
  /**
   * vsm shadow mode
   */

  ShadowMode[ShadowMode["VSM"] = 1] = "VSM";
})(ShadowMode || (ShadowMode = {}));

exports.ShadowMode = ShadowMode;

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

/***/ "b498":
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

const MaterialPipeType_1 = __webpack_require__("5216");

const MaterialPipeBase_1 = __webpack_require__("05f8");

const GlobalVSMShadowUniformParam_1 = __webpack_require__("ff8e");

const ShadowMode_1 = __webpack_require__("a9f4");

const VSMShaderCode_1 = __webpack_require__("d846");

class ShadowVSMData extends MaterialPipeBase_1.MaterialPipeBase {
  constructor() {
    super(...arguments);
    this.m_direcMatrix = null;
    this.m_offetMatrix = null;
    this.m_params = null;
    this.m_shadowMap = null;
    this.m_camVersion = -1;
  }

  setShadowMap(shadowMap) {
    this.m_shadowMap = shadowMap;
  }

  resetPipe() {}

  getTextures(shaderBuilder, outList, pipeType) {
    if (this.m_shadowMap != null) {
      if (outList == null) outList = [];
      outList.push(this.m_shadowMap);
      shaderBuilder.uniform.addShadowMap(ShadowMode_1.ShadowMode.VSM);
      return outList;
    }

    return null;
  }

  useShaderPipe(shaderBuilder, pipeType) {
    if (this.m_uniformParam != null) {
      shaderBuilder.addDefine("VOX_USE_SHADOW", "1");
      shaderBuilder.addVarying("vec4", "v_shadowPos");
      this.m_uniformParam.use(shaderBuilder);
      shaderBuilder.addShaderObject(VSMShaderCode_1.VSMShaderCode);
    }
  }

  getPipeTypes() {
    return [MaterialPipeType_1.MaterialPipeType.VSM_SHADOW];
  }

  getPipeKey(pipeType) {
    switch (pipeType) {
      case MaterialPipeType_1.MaterialPipeType.VSM_SHADOW:
        return "[" + pipeType + "]";
        break;

      default:
        break;
    }

    return "";
  }

  initialize(direcMatrix, offetMatrix) {
    if (this.m_uniformParam == null) {
      this.m_direcMatrix = direcMatrix;
      this.m_offetMatrix = offetMatrix;
      this.m_offetMatrix.identity();
      this.m_offetMatrix.setScaleXYZ(0.5, 0.5, 0.5);
      this.m_offetMatrix.setTranslationXYZ(0.5, 0.5, 0.5);
      let uniformParam = new GlobalVSMShadowUniformParam_1.GlobalVSMShadowUniformParam(this.m_shdCtx);
      this.m_params = uniformParam.buildUniformData(this.m_direcMatrix.getLocalFS32());
      this.m_uniformParam = uniformParam;
    }
  }

  updateShadowCamera(camera) {
    if (this.m_camVersion != camera.version) {
      this.m_camVersion = camera.version;
      this.m_direcMatrix.copyFrom(camera.getVPMatrix());
      this.m_direcMatrix.append(this.m_offetMatrix);
      this.setDirec(camera.getNV());
      this.m_dirty = true;
    }
  }

  setShadowParam(shadowBias, shadowNormalBias, shadowRadius) {
    this.m_params[0] = shadowBias;
    this.m_params[1] = shadowNormalBias;
    this.m_params[2] = shadowRadius;
    this.m_dirty = true;
  }

  setShadowIntensity(intensity) {
    this.m_params[3] = intensity;
    this.m_dirty = true;
  }

  setColorIntensity(intensity) {
    this.m_params[6] = intensity;
    this.m_dirty = true;
  }

  setShadowRadius(radius) {
    this.m_params[2] = radius;
    this.m_dirty = true;
  }

  setShadowBias(bias) {
    this.m_params[0] = bias;
    this.m_dirty = true;
  }

  setShadowSize(width, height) {
    this.m_params[4] = width;
    this.m_params[5] = height;
    this.m_dirty = true;
  }

  setDirec(v3) {
    this.m_params[8] = -v3.x;
    this.m_params[9] = -v3.y;
    this.m_params[10] = -v3.z;
    this.m_dirty = true;
  }

  destroy() {
    this.m_shadowMap = null;
    this.m_direcMatrix = null;
    this.m_params = null;
    this.m_offetMatrix = null;
    super.destroy();
  }

}

exports.default = ShadowVSMData;

/***/ }),

/***/ "ca07":
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

class DepthWriteDecorator {
  constructor() {
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

    this.fogEnabled = false;
    this.m_uniqueName = "DepthWrite";
  }

  buildBufParams() {}

  buildTextureList(builder) {}

  buildShader(coder) {
    coder.addVarying("vec4", "v_pos");
    coder.addFragMainCode(`
const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}
void main() {
    // Higher precision equivalent of the gl_FragCoord.z. This assumes depthRange has been left to its default values.
    float fragCoordZ = 0.5 * v_pos[2] / v_pos[3] + 0.5;
    FragColor0 = packDepthToRGBA( fragCoordZ );
}
`);
    coder.addVertMainCode(`
void main() {
    worldPosition = u_objMat * vec4(a_vs, 1.0);
    viewPosition = u_viewMat * worldPosition;
    gl_Position =  u_projMat * viewPosition;
    v_pos = gl_Position;
}
`);
  }

  createUniformData() {
    return null;
  }

  getUniqueName() {
    return this.m_uniqueName;
  }

}

exports.DepthWriteDecorator = DepthWriteDecorator;

/***/ }),

/***/ "d846":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VSMShaderCode", function() { return /* binding */ VSMShaderCode; });

// CONCATENATED MODULE: ./src/shadow/vsm/material/vsm_fragHead.glsl
/* harmony default export */ var vsm_fragHead = ("vec4 pack2HalfToRGBA( vec2 v ) {\r\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\r\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\r\n}\r\nvec2 unpackRGBATo2Half( vec4 v ) {\r\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\r\n}\r\n\r\nvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\r\n\r\n    return unpackRGBATo2Half( VOX_Texture2D( shadow, uv ) );\r\n\r\n}\r\n#ifdef VOX_USE_SHADOW\r\nfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ) {\r\n\r\n    float occlusion = 1.0;\r\n\r\n    vec2 distribution = texture2DDistribution( shadow, uv );\r\n\r\n    float hard_shadow = step( compare , distribution.x ); // Hard Shadow\r\n\r\n    if (hard_shadow != 1.0 ) {\r\n\r\n        float distance = compare - distribution.x ;\r\n        float variance = max( 0.0, distribution.y * distribution.y );\r\n        float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality\r\n        softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed\r\n        occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\r\n\r\n    }\r\n    return occlusion;\r\n\r\n}\r\nfloat getVSMShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\r\n\r\n    //float shadow = 1.0;\r\n    \r\n    shadowCoord.xyz /= shadowCoord.w;\r\n    shadowCoord.z += shadowBias;\r\n    \r\n    // if ( something && something ) breaks ATI OpenGL shader compiler\r\n    // if ( all( something, something ) ) using this instead\r\n\r\n    bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\r\n    bool inFrustum = all( inFrustumVec );\r\n\r\n    bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\r\n\r\n    bool frustumTest = all( frustumTestVec );\r\n\r\n    return frustumTest ? VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z ) : 1.0;\r\n    // if ( frustumTest ) {\r\n    //     shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\r\n    // }\r\n    // return shadow;\r\n}\r\nfloat getVSMShadowFactor(in vec4 shadowPos) {\r\n    \r\n    float shadow = getVSMShadow( VOX_VSM_SHADOW_MAP, u_vsmParams[1].xy, u_vsmParams[0].x, u_vsmParams[0].z, shadowPos );\r\n    float shadowIntensity = 1.0 - u_vsmParams[0].w;\r\n    shadow = clamp(shadow, 0.0, 1.0) * (1.0 - shadowIntensity) + shadowIntensity;\r\n    float f = clamp(dot(worldNormal,u_vsmParams[2].xyz),0.001,1.0);\r\n    shadow = f > 0.0001 ? min(shadow,clamp(f, shadowIntensity,1.0)) : shadowIntensity;\r\n    f = u_vsmParams[1].z;\r\n    return shadow * (1.0 - f) + f;\r\n}\r\nvoid useVSMShadow(inout vec4 color) {\r\n    \r\n    float factor = getVSMShadowFactor(v_shadowPos);\r\n    color.xyz *= vec3(factor);\r\n}\r\n#endif");
// CONCATENATED MODULE: ./src/shadow/vsm/material/VSMShaderCode.js
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

let __$shader_vsm_vert_head = `
void calcShadowPos(in vec4 wpos) {
    v_shadowPos = u_shadowMat * wpos;
}
`;
const VSMShaderCode = {
  vert: "",
  vert_head: __$shader_vsm_vert_head,
  vert_body: `
#ifdef VOX_USE_SHADOW
    // if use real worldPosition , it maybe make shadow calculation error.
    calcShadowPos( oWorldPosition );
#endif
`,
  frag: "",
  frag_head: vsm_fragHead,
  frag_body: `
#ifdef VOX_USE_SHADOW
useVSMShadow( FragColor0 );
#endif
`
};


/***/ }),

/***/ "e439":
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

const OccBlurDecorator_1 = __webpack_require__("5d74");

const DepthWriteDecorator_1 = __webpack_require__("ca07");

const ShadowVSMData_1 = __importDefault(__webpack_require__("b498"));

class ShadowVSMModule {
  // private m_blurEnabled: boolean = false;

  /**
   * @param fboIndex the default value is 0
   */
  constructor(fboIndex) {
    this.m_rscene = null;
    this.m_vsmData = null;
    this.m_direcCamera = null;
    this.m_fboDepth = null;
    this.m_fboOccBlur = null;
    this.m_verOccBlurPlane = null;
    this.m_horOccBlurPlane = null; // private m_blurModule: PingpongBlur = null;

    this.m_camPosArr = [1.0, 800.0, 1.0];
    this.m_shadowBias = -0.0005;
    this.m_shadowRadius = 2.0;
    this.m_shadowIntensity = 0.8;
    this.m_colorIntensity = 0.1;
    this.m_shadowMapW = 512;
    this.m_shadowMapH = 512;
    this.m_viewWidth = 3000.0;
    this.m_viewHeight = 3000.0;
    this.m_near = 10.0;
    this.m_far = 3000.0;
    this.m_depthRtt = null;
    this.m_occBlurRtt = null;
    this.m_fboIndex = 0;
    this.m_processIDList = null;
    this.m_rendererStatus = -1;
    this.m_rendererProcessStatus = -1;
    this.m_shadowCamVersion = -1;
    this.m_buildShadowDelay = 120;
    this.force = true;
    this.m_fboIndex = fboIndex;
  }

  resetPipe() {}

  getTextures(shaderBuilder, outList, pipeType) {
    return this.m_vsmData.getTextures(shaderBuilder, outList, pipeType);
  }

  useShaderPipe(shaderBuilder, pipeType) {
    this.m_vsmData.useShaderPipe(shaderBuilder, pipeType);
  }

  getPipeTypes() {
    return this.m_vsmData.getPipeTypes();
  }

  getPipeKey(pipeType) {
    return this.m_vsmData.getPipeKey(pipeType);
  }

  getGlobalUinform() {
    return this.m_vsmData.getGlobalUinform();
  }

  initialize(rscene, processIDList, buildShadowDelay = 120, blurEnabled = false) {
    if (this.m_rscene == null) {
      this.m_rscene = rscene;
      this.m_camPos = rscene.createVector3();
      this.m_camPos.fromArray(this.m_camPosArr);
      this.m_zero = rscene.createVector3();
      this.m_axisZ = rscene.createVector3(0.0, 0.0, 1.0);
      this.m_buildShadowDelay = buildShadowDelay;
      this.m_processIDList = processIDList.slice(0);
      this.initConfig(processIDList, false);
    }
  }
  /**
   * set shawow rtt texture size
   * @param mapW shadow rtt texture width
   * @param mapH shadow rtt texture height
   */


  setMapSize(mapW, mapH) {
    this.m_shadowMapW = mapW;
    this.m_shadowMapH = mapH;
  }
  /**
   * set shadow camera world position
   * @param pos shadow camera position in world.
   */


  setCameraPosition(pos) {
    if (this.m_camPos != null) {
      this.m_camPos.copyFrom(pos);
    } else {
      pos.toArray(this.m_camPosArr);
    }
  }
  /**
   * set shadow camera near plane distance
   * @param near shadow camera near plane distance
   */


  setCameraNear(near) {
    this.m_near = near;
  }
  /**
   * set shadow camera far plane distance
   * @param far shadow camera far plane distance
   */


  setCameraFar(far) {
    this.m_far = far;
  }

  setCameraViewSize(viewW, viewH) {
    this.m_viewWidth = viewW;
    this.m_viewHeight = viewH;
  }

  setShadowRadius(radius) {
    this.m_shadowRadius = radius;
  }

  setShadowBias(bias) {
    this.m_shadowBias = bias;
  }

  setShadowIntensity(intensity) {
    this.m_shadowIntensity = intensity;

    if (this.m_vsmData != null) {
      this.m_vsmData.setShadowIntensity(this.m_shadowIntensity);
    }
  }

  setColorIntensity(intensity) {
    this.m_colorIntensity = intensity;

    if (this.m_vsmData != null) {
      this.m_vsmData.setColorIntensity(this.m_colorIntensity);
    }
  }

  getShadowMap() {
    // if (this.m_blurModule != null) {
    //     return this.m_blurModule.getDstTexture();
    // }
    return this.m_depthRtt;
  }

  getVSMData() {
    return this.m_vsmData;
  }

  getCamera() {
    return this.m_direcCamera;
  }

  setRendererProcessIDList(processIDList) {
    if (this.m_fboDepth != null) {
      this.m_processIDList = processIDList.slice(0);
      this.m_fboDepth.setRProcessIDList(processIDList);
    }
  }

  initConfig(processIDList, blurEnabled = false) {
    let rscene = this.m_rscene;
    let renderingState = this.m_rscene.getRenderProxy().renderingState;
    this.m_vsmData = new ShadowVSMData_1.default(this.m_rscene.getRenderProxy().uniformContext);
    this.m_vsmData.initialize(rscene.createMatrix4(), rscene.createMatrix4());
    this.m_vsmData.setShadowIntensity(this.m_shadowIntensity);
    let depthMaterial = this.m_rscene.materialBlock.createSimpleMaterial(new DepthWriteDecorator_1.DepthWriteDecorator());
    this.m_fboDepth = this.m_rscene.createFBOInstance();
    this.m_fboDepth.asynFBOSizeWithViewport();
    this.m_fboDepth.setClearRGBAColor4f(1.0, 1.0, 1.0, 1.0);
    this.m_fboDepth.createFBOAt(this.m_fboIndex, this.m_shadowMapW, this.m_shadowMapH, true, false, 0);
    this.m_depthRtt = this.m_fboDepth.setRenderToRGBATexture(null, 0);
    this.m_fboDepth.setRProcessIDList(processIDList);
    this.m_fboDepth.setGlobalRenderState(renderingState.NORMAL_STATE);
    this.m_fboDepth.setGlobalMaterial(depthMaterial, false, false);
    this.m_fboOccBlur = this.m_rscene.createFBOInstance();
    this.m_fboOccBlur.asynFBOSizeWithViewport();
    this.m_fboOccBlur.setClearRGBAColor4f(1.0, 1.0, 1.0, 1.0);
    this.m_fboOccBlur.createFBOAt(this.m_fboIndex, this.m_shadowMapW, this.m_shadowMapH, true, false, 0);
    this.m_occBlurRtt = this.m_fboOccBlur.setRenderToRGBATexture(null, 0);
    let occDeco = new OccBlurDecorator_1.OccBlurDecorator(false, this.m_depthRtt, this.m_shadowRadius);
    let occMaterial = this.m_rscene.materialBlock.createSimpleMaterial(occDeco);
    let verOccBlurPlane = this.m_rscene.entityBlock.createEntity();
    verOccBlurPlane.copyMeshFrom(this.m_rscene.entityBlock.screenPlane);
    verOccBlurPlane.setMaterial(occMaterial);
    this.m_verOccBlurPlane = verOccBlurPlane;
    occDeco = new OccBlurDecorator_1.OccBlurDecorator(true, this.m_occBlurRtt, this.m_shadowRadius);
    occMaterial = this.m_rscene.materialBlock.createSimpleMaterial(occDeco);
    let horOccBlurPlane = this.m_rscene.entityBlock.createEntity();
    horOccBlurPlane.copyMeshFrom(this.m_rscene.entityBlock.screenPlane);
    horOccBlurPlane.setMaterial(occMaterial);
    this.m_horOccBlurPlane = horOccBlurPlane; // this.m_blurEnabled = blurEnabled;
    // if (blurEnabled) {
    //     this.m_blurModule = new PingpongBlur(this.m_rscene.getRenderer());
    //     this.m_blurModule.setBlurCount(2);
    //     this.m_blurModule.setSyncViewSizeEnabled(false);
    //     this.m_blurModule.setFBOSize(this.m_shadowMapW, this.m_shadowMapH);
    //     this.m_blurModule.setBlurDensity(1.0);
    //     //this.m_blurModule.bindSrcProcessId(0);
    //     this.m_blurModule.bindDrawEntity(this.m_verOccBlurPlane);
    //     this.m_blurModule.setBackbufferVisible(false);
    // }

    this.m_direcCamera = this.m_rscene.createCamera();
    this.m_vsmData.setShadowMap(this.getShadowMap());
    this.updateData();
  }

  updateData() {
    if (this.m_direcCamera != null) {
      let viewWidth = this.m_viewWidth;
      let viewHeight = this.m_viewHeight;
      this.m_direcCamera.lookAtRH(this.m_camPos, this.m_zero, this.m_axisZ);
      this.m_direcCamera.orthoRH(this.m_near, this.m_far, -0.5 * viewHeight, 0.5 * viewHeight, -0.5 * viewWidth, 0.5 * viewWidth);
      this.m_direcCamera.setViewXY(0, 0);
      this.m_direcCamera.setViewSize(viewWidth, viewHeight);
      this.m_direcCamera.update();
    }

    if (this.m_vsmData != null) {
      this.m_fboDepth.resizeFBO(this.m_shadowMapW, this.m_shadowMapH);
      this.m_fboOccBlur.resizeFBO(this.m_shadowMapW, this.m_shadowMapH); // if (this.m_blurEnabled) {
      //     this.m_blurModule.setFBOSize(this.m_shadowMapW, this.m_shadowMapH);
      // }

      this.m_vsmData.updateShadowCamera(this.m_direcCamera);
      this.m_vsmData.setShadowRadius(this.m_shadowRadius);
      this.m_vsmData.setShadowBias(this.m_shadowBias);
      this.m_vsmData.setShadowSize(this.m_shadowMapW, this.m_shadowMapH);
      this.m_vsmData.update();
    }
  }

  upate() {
    this.m_buildShadowDelay = 32;
    this.m_shadowCamVersion = this.m_direcCamera.version;
    this.updateData();
  }

  getRendererProcessStatus() {
    let status = 31;

    for (let i = 0; i < this.m_processIDList.length; ++i) {
      status += status * this.m_rscene.getRenderProcessAt(i).getStatus();
    }

    return status;
  }

  run() {
    // update shadow direc matrix
    if (this.m_direcCamera.version != this.m_shadowCamVersion) {
      this.m_shadowCamVersion = this.m_direcCamera.version;
      this.m_vsmData.updateShadowCamera(this.m_direcCamera);
      this.m_vsmData.update();
    }

    let flag = this.force;

    if (flag) {
      this.buildShadow();
    } else {
      if (this.m_rendererStatus != this.m_rscene.getRendererStatus()) {
        let status = this.getRendererProcessStatus();

        if (this.m_rendererProcessStatus != status) {
          this.m_rendererProcessStatus = status;
          flag = true;
        }

        this.m_rendererStatus = this.m_rscene.getRendererStatus();
      }

      if (this.m_buildShadowDelay > 0) {
        if (this.m_buildShadowDelay % 15 == 0) {
          flag = true;
        }

        this.m_buildShadowDelay--;
      }

      if (flag) {
        this.buildShadow();
      }
    }

    this.force = false;
  }

  buildShadow() {
    this.m_fboDepth.useCamera(this.m_direcCamera, false);
    this.m_fboDepth.run(true, true, true, true);
    this.m_fboDepth.useMainCamera(); // drawing vertical

    this.m_fboOccBlur.setRenderToRGBATexture(this.m_occBlurRtt, 0);
    this.m_fboOccBlur.runBegin();
    this.m_fboOccBlur.drawEntity(this.m_verOccBlurPlane, false, true);
    this.m_fboOccBlur.runEnd(); // drawing horizonal

    this.m_fboOccBlur.setRenderToRGBATexture(this.m_depthRtt, 0);
    this.m_fboOccBlur.runBegin();
    this.m_fboOccBlur.drawEntity(this.m_horOccBlurPlane, false, true);
    this.m_fboOccBlur.runEnd(); // pingpong blur
    // if (this.m_blurModule != null) {
    //     this.m_blurModule.run();
    // }

    this.m_fboOccBlur.setRenderToBackBuffer();
  }

  destroy() {
    this.m_rscene = null;
    this.m_vsmData = null;
    this.m_direcCamera = null;
    this.m_fboDepth = null;
    this.m_fboOccBlur = null;
    this.m_verOccBlurPlane = null;
    this.m_horOccBlurPlane = null;
  }

}

exports.ShadowVSMModule = ShadowVSMModule;
exports.default = ShadowVSMModule;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("19ec");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "ff8e":
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

class GlobalVSMShadowUniformParam extends GlobalUniformParamBase_1.GlobalUniformParamBase {
  getNames() {
    return [UniformConst_1.default.ShadowMatrix.name, UniformConst_1.default.ShadowVSMParams.name];
  }

  buildUniformData(materix4Data) {
    let params = new Float32Array([-0.0005 // shadowBias
    , 0.0 // shadowNormalBias
    , 4 // shadowRadius
    , 0.8 // shadow intensity
    , 512, 512 // shadowMapSize(width, height)
    , 0.1 // color intensity
    , 0.0 // undefined
    , 1.0, 1.0, 1.0 // direc light nv(x,y,z)
    , 0.0 // undefined
    ]);
    this.uProbe.addMat4Data(materix4Data, 1);
    this.uProbe.addVec4Data(params, UniformConst_1.default.ShadowVSMParams.arrayLength);
    this.buildData();
    return params;
  }

  use(shaderBuilder, total = 1) {
    shaderBuilder.addFragUniformParam(UniformConst_1.default.ShadowVSMParams);
    shaderBuilder.addVertUniformParam(UniformConst_1.default.ShadowMatrix);
  }

}

exports.GlobalVSMShadowUniformParam = GlobalVSMShadowUniformParam;

/***/ })

/******/ });