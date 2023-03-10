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

/***/ "030e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/
// renderer context Extensions

class RCExtension {
  static Initialize(webVer, gl) {
    let selfT = this;

    if (webVer == 1) {
      //#extension OES_standard_derivatives : enable
      selfT.OES_standard_derivatives = gl.getExtension('OES_standard_derivatives');
      if (selfT.OES_standard_derivatives != null) console.log("Use OES_standard_derivatives Extension success!");else console.log("OES_standard_derivatives Extension can not support!"); //#extension GL_EXT_shader_texture_lod : enable, for example: textureCubeLodEXT(envMap, dir, mipLv)
      // vec4 texture2DLodEXT(sampler2D sampler, vec2 coord, float lod)
      // vec4 texture2DProjLodEXT(sampler2D sampler, vec3 coord, float lod)
      // vec4 texture2DProjLodEXT(sampler2D sampler, vec4 coord, float lod)
      // vec4 textureCubeLodEXT(samplerCube sampler, vec3 coord, float lod)
      // vec4 texture2DGradEXT(sampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy)
      // vec4 texture2DProjGradEXT(sampler2D sampler, vec3 P, vec2 dPdx, vec2 dPdy)
      // vec4 texture2DProjGradEXT(sampler2D sampler, vec4 P, vec2 dPdx, vec2 dPdy)
      // vec4 textureCubeGradEXT(samplerCube sampler, vec3 P, vec3 dPdx, vec3 dPdy)

      selfT.EXT_shader_texture_lod = gl.getExtension('EXT_shader_texture_lod');
      if (selfT.EXT_shader_texture_lod != null) console.log("Use EXT_shader_texture_lod Extension success!");else console.log("EXT_shader_texture_lod Extension can not support!");
      /*
      <script type="x-shader/x-fragment">
      #extension GL_EXT_shader_texture_lod : enable
      #extension GL_OES_standard_derivatives : enable
      
      uniform sampler2D myTexture;
      varying vec2 texcoord;
      
      void main(){
        gl_FragColor = texture2DGradEXT(myTexture, mod(texcoord, vec2(0.1, 0.5)),
                                        dFdx(texcoord), dFdy(texcoord));
      }
      </script>
      */

      selfT.WEBGL_draw_buffers = gl.getExtension('WEBGL_draw_buffers');
      if (selfT.WEBGL_draw_buffers != null) console.log("Use WEBGL_draw_buffers Extension success!");else console.log("WEBGL_draw_buffers Extension can not support!"); //DivLog.ShowLog("selfT.WEBGL_draw_buffers != null: "+(selfT.WEBGL_draw_buffers != null));

      selfT.OES_vertex_array_object = gl.getExtension('OES_vertex_array_object');
      if (selfT.OES_vertex_array_object != null) console.log("Use OES_vertex_array_object Extension success!");else console.log("OES_vertex_array_object Extension can not support!");
      selfT.ANGLE_instanced_arrays = gl.getExtension('ANGLE_instanced_arrays');
      if (selfT.ANGLE_instanced_arrays != null) console.log("Use ANGLE_instanced_arrays Extension success!");else console.log("ANGLE_instanced_arrays Extension can not support!");
      selfT.EXT_color_buffer_float = gl.getExtension('EXT_color_buffer_float');
      if (selfT.EXT_color_buffer_float != null) console.log("Use EXT_color_buffer_float Extension success!");else console.log("EXT_color_buffer_float Extension can not support!");
      selfT.EXT_color_buffer_half_float = gl.getExtension('EXT_color_buffer_half_float');
      if (selfT.EXT_color_buffer_half_float != null) console.log("Use EXT_color_buffer_half_float Extension success!");else console.log("EXT_color_buffer_half_float Extension can not support!");
      selfT.OES_texture_half_float = gl.getExtension('OES_texture_half_float');
      if (selfT.OES_texture_half_float != null) console.log("Use OES_texture_half_float Extension success!");else console.log("OES_texture_half_float Extension can not support!");
      selfT.OES_texture_half_float_linear = gl.getExtension('OES_texture_half_float_linear');
      if (selfT.OES_texture_half_float_linear != null) console.log("Use OES_texture_half_float_linear Extension success!");else console.log("OES_texture_half_float_linear Extension can not support!");
      selfT.OES_texture_float = gl.getExtension('OES_texture_float');
      if (selfT.OES_texture_float != null) console.log("Use OES_texture_float Extension success!");else console.log("OES_texture_float Extension can not support!"); //

      selfT.OES_element_index_uint = gl.getExtension('OES_element_index_uint');
      if (selfT.OES_element_index_uint != null) console.log("Use OES_element_index_uint Extension success!");else console.log("OES_element_index_uint Extension can not support!"); //EXT_blend_minmax

      selfT.EXT_blend_minmax = gl.getExtension('EXT_blend_minmax');
      if (selfT.EXT_blend_minmax != null) console.log("Use EXT_blend_minmax Extension success!");else console.log("EXT_blend_minmax Extension can not support!");
    } else {
      //  selfT.OES_standard_derivatives = gl.getExtension('OES_standard_derivatives');
      //  if(selfT.OES_standard_derivatives != null)
      //  console.log("Use OES_standard_derivatives Extension success!");
      //  else
      //  console.log("OES_standard_derivatives Extension can not support!");
      selfT.EXT_shader_texture_lod = gl.getExtension('EXT_shader_texture_lod');
      if (selfT.EXT_shader_texture_lod != null) console.log("Use EXT_shader_texture_lod Extension success!");else console.log("EXT_shader_texture_lod Extension can not support!");
      selfT.EXT_color_buffer_half_float = gl.getExtension('EXT_color_buffer_half_float');
      if (selfT.EXT_color_buffer_half_float != null) console.log("Use EXT_color_buffer_half_float Extension success!");else console.log("EXT_color_buffer_half_float Extension can not support!");
      selfT.OES_texture_half_float_linear = gl.getExtension('OES_texture_half_float_linear');
      if (selfT.OES_texture_half_float_linear != null) console.log("Use OES_texture_half_float_linear Extension success!");else console.log("OES_texture_half_float_linear Extension can not support!");
      selfT.EXT_color_buffer_float = gl.getExtension('EXT_color_buffer_float');
      if (selfT.EXT_color_buffer_float != null) console.log("Use EXT_color_buffer_float Extension success!");else console.log("EXT_color_buffer_float Extension can not support!");
    }

    selfT.OES_texture_float_linear = gl.getExtension('OES_texture_float_linear');
    if (selfT.OES_texture_float_linear != null) console.log("Use OES_texture_float_linear Extension success!");else console.log("OES_texture_float_linear Extension can not support!");
    selfT.WEBGL_depth_texture = gl.getExtension('WEBGL_depth_texture');
    if (selfT.WEBGL_depth_texture != null) console.log("Use WEBGL_depth_texture Extension success!");else console.log("WEBGL_depth_texture Extension can not support!");
    selfT.WEBGL_debug_renderer_info = gl.getExtension('WEBGL_debug_renderer_info');
    if (selfT.WEBGL_debug_renderer_info != null) console.log("Use WEBGL_debug_renderer_info Extension success!");else console.log("WEBGL_debug_renderer_info Extension can not support!"); //
    //console.log("RCExtension.WEBGL_depth_texture: ",RCExtension.WEBGL_depth_texture);
  }

}

RCExtension.OES_standard_derivatives = null;
RCExtension.EXT_shader_texture_lod = null;
RCExtension.WEBGL_draw_buffers = null;
RCExtension.OES_vertex_array_object = null;
RCExtension.ANGLE_instanced_arrays = null;
RCExtension.EXT_color_buffer_float = null;
RCExtension.EXT_color_buffer_half_float = null;
RCExtension.OES_texture_float_linear = null;
RCExtension.OES_texture_half_float_linear = null;
RCExtension.OES_texture_half_float = null;
RCExtension.OES_texture_float = null;
RCExtension.OES_element_index_uint = null;
RCExtension.EXT_blend_minmax = null;
RCExtension.WEBGL_depth_texture = null;
RCExtension.WEBGL_debug_renderer_info = null;
exports.default = RCExtension;

/***/ }),

/***/ "070b":
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

class RenderColorMask {
  //private m_state: number = 0;
  constructor(rBoo, gBoo, bBoo, aBoo) {
    this.m_uid = -1;
    this.m_rBoo = true;
    this.m_gBoo = true;
    this.m_bBoo = true;
    this.m_aBoo = true;
    this.m_uid = RenderColorMask.s_uid++;
    this.m_rBoo = rBoo;
    this.m_gBoo = gBoo;
    this.m_bBoo = bBoo;
    this.m_aBoo = aBoo;
  }

  getUid() {
    return this.m_uid;
  }

  getR() {
    return this.m_rBoo;
  }

  getG() {
    return this.m_gBoo;
  }

  getB() {
    return this.m_bBoo;
  }

  getA() {
    return this.m_aBoo;
  }

  use() {
    if (RenderColorMask.s_state != this.m_uid) {
      RenderColorMask.Rstate.setColorMask(this.m_rBoo, this.m_gBoo, this.m_bBoo, this.m_aBoo);
      RenderColorMask.s_state = this.m_uid;
    }
  }

  static Create(objName, rBoo, gBoo, bBoo, aBoo) {
    if (RenderColorMask.s_stsNameMap.has(objName)) {
      let po = RenderColorMask.s_stsNameMap.get(objName);
      return po.getUid();
    }

    let key = (rBoo ? 1 << 6 : 1 << 5) | (gBoo ? 1 << 4 : 1 << 3) | (bBoo ? 1 << 2 : 1 << 1) | (aBoo ? 1 : 0);

    if (RenderColorMask.s_stsMap.has(key)) {
      let po = RenderColorMask.s_stsMap.get(key);
      key = po.getUid();
    } else {
      let po = new RenderColorMask(rBoo, gBoo, bBoo, aBoo);
      key = po.getUid();
      RenderColorMask.s_stsMap.set(key, po);
      RenderColorMask.s_stsNameMap.set(objName, po);
      RenderColorMask.s_states.push(po);
      ++RenderColorMask.s_statesLen;
    }

    return key;
  }

  static GetColorMaskByName(objName) {
    if (RenderColorMask.s_stsNameMap.has(objName)) {
      let po = RenderColorMask.s_stsNameMap.get(objName);
      return po.getUid();
    }

    return -1;
  } // @param           state come from RODisp::renderState


  static UseRenderState(state) {
    if (RenderColorMask.s_unlocked && RenderColorMask.Rstate.roColorMask != state) {
      if (state > -1 && state < RenderColorMask.s_statesLen) {
        RenderColorMask.s_states[state].use();
      }
    }
  }

  static UseColorMaskByName(stateName) {
    let state = RenderColorMask.GetColorMaskByName(stateName); //trace("state: "+state+", stateName: "+stateName);

    if (RenderColorMask.s_unlocked && RenderColorMask.Rstate.roColorMask != state) {
      if (state > -1 && state < RenderColorMask.s_statesLen) {
        RenderColorMask.s_states[state].use();
      }
    }
  }

  static Lock() {
    RenderColorMask.s_unlocked = false;
  }

  static Unlock() {
    RenderColorMask.s_unlocked = true;
  }

  static Reset() {
    RenderColorMask.s_state = -1;
  }

}

RenderColorMask.s_uid = 0;
RenderColorMask.s_state = -1;
RenderColorMask.s_states = [];
RenderColorMask.s_statesLen = 1;
RenderColorMask.s_stsMap = new Map();
RenderColorMask.s_stsNameMap = new Map();
RenderColorMask.s_unlocked = true;
RenderColorMask.ALL_TRUE_COLOR_MASK = 0;
RenderColorMask.ALL_FALSE_COLOR_MASK = 1;
RenderColorMask.Rstate = null;
exports.RenderColorMask = RenderColorMask;

/***/ }),

/***/ "090c":
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

const RCExtension_1 = __importDefault(__webpack_require__("030e"));

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

const RViewElement_1 = __importDefault(__webpack_require__("b0ef"));

const ContextMouseEvtDispatcher_1 = __importDefault(__webpack_require__("0c85"));

const RenderConst_1 = __webpack_require__("e08e");

const AABB2D_1 = __importDefault(__webpack_require__("e2fe"));

class RAdapterContext {
  constructor() {
    this.m_mouseEvtDisplather = new ContextMouseEvtDispatcher_1.default();
    this.m_div = null;
    this.m_canvas = null;
    this.m_scissorEnabled = false;
    this.m_depthTestEnabled = true;
    this.m_stencilTestEnabled = true;
    this.m_offcanvas = null;
    this.m_gl = null;
    this.m_stage = null;
    this.m_viewPortRect = new AABB2D_1.default(0, 0, 800, 600);
    this.m_maxWebGLVersion = 2;
    this.m_webGLVersion = 2;
    this.m_devicePixelRatio = 1.0;
    this.m_viewEle = new RViewElement_1.default(); // display 3d view buf size auto sync window size

    this.autoSyncRenderBufferAndWindowSize = true;
    this.offscreenRenderEnabled = false;
    this.bodyBgColor = "";
    this.m_resizeFlag = true;
    this.m_WEBGL_lose_context = null;
    this.m_displayWidth = 0;
    this.m_displayHeight = 0;
    this.m_rcanvasWidth = 0;
    this.m_rcanvasHeight = 0;
    this.m_resizeCallback = null;
  }

  contextrestoredHandler(evt) {
    console.log("webglcontextrestored...!!!");
    console.log(evt);
  }

  contextlostHandler(evt) {
    console.warn("webglcontextlost...!!!");
    console.log(evt);
  }

  syncHtmlBodyColor(r, g, b) {
    // if(document) {
    this.bodyBgColor = this.m_viewEle.getCSSHEXRGB(r, g, b); // let value = this.m_viewEle.getCSSHEXRGB(r, g, b);
    // const body = document.body;
    // body.style.background = value;
    // console.log("syncHtmlBodyColor(), this.bodyBgColor: ", this.bodyBgColor);
    // }
  }

  setWebGLMaxVersion(webgl_ver) {
    if (webgl_ver == 1 || webgl_ver == 2) {
      this.m_maxWebGLVersion = webgl_ver;
    }
  }

  getWebGLVersion() {
    return this.m_webGLVersion;
  }

  getDiv() {
    return this.m_div;
  }

  setDivStyleLeftAndTop(px, py) {
    this.m_viewEle.setDivStyleLeftAndTop(px, py);
  }

  setDivStyleSize(pw, ph) {
    this.m_viewEle.setDivStyleSize(pw, ph);
  }

  getCanvas() {
    return this.m_canvas;
  }

  isDepthTestEnabled() {
    return this.m_depthTestEnabled;
  }

  isStencilTestEnabled() {
    return this.m_stencilTestEnabled;
  }

  initialize(rcuid, stage, param) {
    this.m_stage = stage;
    var pdocument = null;
    var pwindow = null;

    try {
      if (document != undefined) {
        pdocument = document;
        pwindow = window;
      }
    } catch (err) {
      console.log("RAdapterContext::initialize(), document is undefined.");
    }

    if (pdocument != null) {
      let div = param.getDiv();
      const rattr = param.getRenderContextAttri();
      this.m_devicePixelRatio = window.devicePixelRatio;
      RendererDevice_1.default.SetDevicePixelRatio(this.m_devicePixelRatio);
      this.m_viewEle.setDiv(div);
      this.m_viewEle.createViewEle(pdocument, this.autoSyncRenderBufferAndWindowSize, param.divW, param.divH);
      this.m_div = div = this.m_viewEle.getDiv();
      let canvas = this.m_canvas = this.m_viewEle.getCanvas();
      this.m_devicePixelRatio = window.devicePixelRatio;
      this.m_mouseEvtDisplather.dpr = this.m_devicePixelRatio;
      let attr = rattr;

      if (rattr == null) {
        attr = {
          depth: this.m_depthTestEnabled,
          premultipliedAlpha: false,
          alpha: true,
          antialias: false,
          stencil: this.m_stencilTestEnabled,
          preserveDrawingBuffer: true,
          powerPreference: "default"
        }; // attr = { depth: this.m_depthTestEnabled, premultipliedAlpha: false, alpha: true, antialias: false, stencil: this.m_stencilTestEnabled, preserveDrawingBuffer: true, powerPreference: "high-performance" };
      } else {
        this.m_depthTestEnabled = attr.depth;
        this.m_stencilTestEnabled = attr.stencil;
      }

      console.log("this.m_devicePixelRatio: ", this.m_devicePixelRatio, ",rattr == null: ", rattr == null);
      console.log("depthTestEnabled: ", attr.depth);
      console.log("stencilTestEnabled: ", attr.stencil);
      console.log("antialiasEnabled: ", attr.antialias);
      console.log("alphaEnabled: ", attr.alpha);
      let offscreen = null;

      if (this.offscreenRenderEnabled) {
        offscreen = canvas.transferControlToOffscreen();
      }

      this.m_offcanvas = offscreen;

      if (this.m_maxWebGLVersion == 2) {
        this.m_gl = offscreen == null ? canvas.getContext('webgl2', attr) : offscreen.getContext('webgl2', attr);

        if (this.m_gl != null) {
          console.log("Use WebGL2 success!");
          this.m_webGLVersion = 2;
        } else {
          console.log("WebGL2 can not support!");
        }
      }

      if (this.m_gl == null) {
        if (offscreen == null) {
          this.m_gl = canvas.getContext('webgl', attr) || canvas.getContext("experimental-webgl", attr);
        } else {
          this.m_gl = offscreen.getContext('webgl', attr) || offscreen.getContext("experimental-webgl", attr);
        }

        if (this.m_gl != null) {
          console.log("Use WebGL1 success!");
          this.m_webGLVersion = 1;
        } else {
          console.log("WebGL1 can not support!");
        }
      }

      if (!this.m_gl) {
        this.m_webGLVersion = -1;
        alert('Unable to initialize WebGL. Your browser or machine may not support it.');
        throw Error("WebGL initialization failure.");
        return;
      }

      let gl = this.m_gl;
      gl.rcuid = rcuid;
      let glStencilFunc = RenderConst_1.GLStencilFunc;
      glStencilFunc.NEVER = gl.NEVER;
      glStencilFunc.LESS = gl.LESS;
      glStencilFunc.EQUAL = gl.EQUAL;
      glStencilFunc.GREATER = gl.GREATER;
      glStencilFunc.NOTEQUAL = gl.NOTEQUAL;
      glStencilFunc.GEQUAL = gl.GEQUAL;
      glStencilFunc.ALWAYS = gl.ALWAYS;
      let stendilOp = RenderConst_1.GLStencilOp;
      stendilOp.KEEP = gl.KEEP;
      stendilOp.ZERO = gl.ZERO;
      stendilOp.REPLACE = gl.REPLACE;
      stendilOp.INCR = gl.INCR;
      stendilOp.INCR_WRAP = gl.INCR_WRAP;
      stendilOp.DECR = gl.DECR;
      stendilOp.DECR_WRAP = gl.DECR_WRAP;
      stendilOp.INVERT = gl.INVERT;
      let glBlendMode = RenderConst_1.GLBlendMode;
      glBlendMode.ZERO = gl.ZERO;
      glBlendMode.ONE = gl.ONE;
      glBlendMode.SRC_COLOR = gl.SRC_COLOR;
      glBlendMode.DST_COLOR = gl.DST_COLOR;
      glBlendMode.SRC_ALPHA = gl.SRC_ALPHA;
      glBlendMode.DST_ALPHA = gl.DST_ALPHA;
      glBlendMode.ONE_MINUS_SRC_ALPHA = gl.ONE_MINUS_SRC_ALPHA;
      let glBlendEq = RenderConst_1.GLBlendEquation;
      glBlendEq.FUNC_ADD = gl.FUNC_ADD;
      glBlendEq.FUNC_SUBTRACT = gl.FUNC_SUBTRACT;
      glBlendEq.FUNC_REVERSE_SUBTRACT = gl.FUNC_REVERSE_SUBTRACT;
      glBlendEq.MIN_EXT = gl.MIN_EXT;
      glBlendEq.MAX_EXT = gl.MAX_EXT;
      glBlendEq.MIN = gl.MIN;
      glBlendEq.MAX = gl.MAX;
      let glFaceCull = RenderConst_1.CullFaceMode;
      glFaceCull.BACK = gl.BACK;
      glFaceCull.FRONT = gl.FRONT;
      glFaceCull.FRONT_AND_BACK = gl.FRONT_AND_BACK;
      let device = RendererDevice_1.default; //MAX_RENDERBUFFER_SIZE

      device.MAX_TEXTURE_SIZE = this.m_gl.getParameter(this.m_gl.MAX_TEXTURE_SIZE);
      device.MAX_RENDERBUFFER_SIZE = this.m_gl.getParameter(this.m_gl.MAX_RENDERBUFFER_SIZE);
      let viewPortIMS = this.m_gl.getParameter(this.m_gl.MAX_VIEWPORT_DIMS);
      device.MAX_VIEWPORT_WIDTH = viewPortIMS[0];
      device.MAX_VIEWPORT_HEIGHT = viewPortIMS[1];
      RCExtension_1.default.Initialize(this.m_webGLVersion, this.m_gl);
      RendererDevice_1.default.Initialize([this.m_webGLVersion]);
      console.log("RadapterContext stage: ", stage);
      if (stage != null) this.m_mouseEvtDisplather.initialize(canvas, div, stage); //  console.log("viewPortIMS: ",viewPortIMS);

      console.log("MAX_TEXTURE_SIZE: ", RendererDevice_1.default.MAX_TEXTURE_SIZE);
      console.log("IsMobileWeb: ", RendererDevice_1.default.IsMobileWeb());
      console.log("IsAndroidOS: ", RendererDevice_1.default.IsAndroidOS());
      console.log("IsIOS: ", RendererDevice_1.default.IsIOS()); //  console.log("MAX_RENDERBUFFER_SIZE: ",RendererDevice.MAX_RENDERBUFFER_SIZE);
      //  console.log("MAX_VIEWPORT_WIDTH: ",RendererDevice.MAX_VIEWPORT_WIDTH);
      //  console.log("MAX_VIEWPORT_HEIGHT: ",RendererDevice.MAX_VIEWPORT_HEIGHT);
      //  DivLog.ShowLogOnce("MAX_TEXTURE_SIZE: "+RendererDevice.MAX_TEXTURE_SIZE);
      //  DivLog.ShowLog("MAX_RENDERBUFFER_SIZE: "+RendererDevice.MAX_RENDERBUFFER_SIZE);
      //  DivLog.ShowLog("MAX_VIEWPORT_WIDTH: "+RendererDevice.MAX_VIEWPORT_WIDTH);
      //  DivLog.ShowLog("MAX_VIEWPORT_HEIGHT: "+RendererDevice.MAX_VIEWPORT_HEIGHT);
      //  let rc_vendor:any = this.m_gl.getParameter(this.m_gl.VENDOR);
      //  let rc_renderer:any = this.m_gl.getParameter(this.m_gl.RENDERER);
      //  console.log("rc_vendor: ",rc_vendor);
      //  console.log("rc_renderer: ",rc_renderer);

      let debugInfo = RCExtension_1.default.WEBGL_debug_renderer_info;

      if (debugInfo != null) {
        let webgl_vendor = this.m_gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        let webgl_renderer = this.m_gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        device.GPU_VENDOR = webgl_vendor;
        device.GPU_RENDERER = webgl_renderer;
        console.log("webgl_vendor: ", webgl_vendor);
        console.log("webgl_renderer: ", webgl_renderer);

        if (!RendererDevice_1.default.IsWinExternalVideoCard()) {
          console.warn("当前浏览器没有使用独立显卡");
        } // DivLog.ShowLog("webgl_vendor: " + webgl_vendor);
        // DivLog.ShowLog("webgl_renderer: " + webgl_renderer);

      }

      pwindow.onresize = evt => {
        if (this.autoSyncRenderBufferAndWindowSize) {
          this.m_resizeFlag = true;
          this.updateRenderBufferSize();
        }
      };

      canvas.addEventListener('webglcontextrestored', this.contextrestoredHandler, false);
      canvas.addEventListener('webglcontextlost', this.contextlostHandler, false);
      this.updateRenderBufferSize();
    } else {
      console.log("initialize WebGL failure!");
    }
  }

  loseContext() {
    if (this.m_WEBGL_lose_context == null) {
      this.m_WEBGL_lose_context = this.m_gl.getExtension('WEBGL_lose_context');
    }

    if (this.m_WEBGL_lose_context == null) {
      this.m_WEBGL_lose_context.loseContext();
    }
  }
  /**
   * @returns return gpu context lost status
   */


  isContextLost() {
    return this.m_gl.isContextLost();
  }
  /**
   * @returns return system gpu context
   */


  getRC() {
    return this.m_gl;
  }

  setScissorEnabled(boo) {
    if (boo) {
      if (!this.m_scissorEnabled) {
        this.m_scissorEnabled = true;
        this.m_gl.enable(this.m_gl.SCISSOR_TEST);
      }
    } else {
      if (this.m_scissorEnabled) {
        this.m_scissorEnabled = false;
        this.m_gl.disable(this.m_gl.SCISSOR_TEST);
      }
    }
  }

  setScissorRect(px, py, pw, ph) {
    //this.m_gl.scissor(Math.floor(px*this.m_devicePixelRatio),Math.floor(py*this.m_devicePixelRatio), pw,ph);
    this.m_gl.scissor(px, py, pw, ph);
  }

  setResizeCallback(resizeCallback) {
    this.m_resizeCallback = resizeCallback;
  }

  getDevicePixelRatio() {
    return this.m_devicePixelRatio;
  }

  resizeBufferSize(pw, ph) {
    pw = Math.floor(pw);
    ph = Math.floor(ph);
    let k = window.devicePixelRatio;
    let dprChanged = Math.abs(k - this.m_devicePixelRatio) > 0.01 || this.m_resizeFlag;
    this.m_devicePixelRatio = k;
    this.m_mouseEvtDisplather.dpr = k;
    RendererDevice_1.default.SetDevicePixelRatio(this.m_devicePixelRatio); // console.log("this.m_devicePixelRatio: "+this.m_devicePixelRatio);

    this.m_resizeFlag = false;

    if (this.m_displayWidth != pw || this.m_displayHeight != ph || dprChanged) {
      this.m_displayWidth = pw;
      this.m_displayHeight = ph;
      this.m_rcanvasWidth = Math.floor(pw * k);
      this.m_rcanvasHeight = Math.floor(ph * k);

      if (this.m_offcanvas == null) {
        this.m_canvas.width = this.m_rcanvasWidth;
        this.m_canvas.height = this.m_rcanvasHeight;
      } else {
        this.m_offcanvas.width = this.m_rcanvasWidth;
        this.m_offcanvas.height = this.m_rcanvasHeight;
      }

      this.m_canvas.style.width = this.m_displayWidth + 'px';
      this.m_canvas.style.height = this.m_displayHeight + 'px';

      if (this.m_stage != null) {
        this.m_stage.stageWidth = this.m_rcanvasWidth;
        this.m_stage.stageHeight = this.m_rcanvasHeight;
        this.m_stage.viewWidth = this.m_displayWidth;
        this.m_stage.viewHeight = this.m_displayHeight;
        this.m_stage.pixelRatio = k;
        console.log("size to stage size: ", this.m_stage.stageWidth, this.m_stage.stageHeight);
        console.log("size to view size: ", this.m_stage.viewWidth, this.m_stage.viewHeight); //  DivLog.ShowLogOnce("stageSize: "+this.m_stage.stageWidth+","+this.m_stage.stageHeight);
        //  DivLog.ShowLog("canvasSize: "+this.m_canvas.width+","+this.m_canvas.height);
        //  DivLog.ShowLog("dispSize: "+this.m_displayWidth+","+this.m_displayHeight);
        //  DivLog.ShowLog("pixelRatio:"+this.m_devicePixelRatio);
        //  console.log("display size: "+this.m_displayWidth+","+this.m_displayHeight);
        //  console.log("RAdapterContext::resize(), canvas.width:"+this.m_canvas.width+", canvas.height:"+this.m_canvas.height);
        //  console.log("RAdapterContext::resize(), stageWidth:"+this.m_stage.stageWidth+", stageHeight:"+this.m_stage.stageHeight);
        //  console.log("RAdapterContext::resize(), m_rcanvasWidth:"+this.m_rcanvasWidth+", m_rcanvasHeight:"+this.m_rcanvasHeight);
        //  console.log("RAdapterContext::resize(), stw:"+this.m_stage.stageWidth+", sth:"+this.m_stage.stageHeight);

        this.m_stage.update();
      }

      if (this.m_resizeCallback != null) {
        this.m_resizeCallback();
      }
    }
  }

  getStage() {
    return this.m_stage;
  }

  getStageWidth() {
    return this.m_stage.stageWidth;
  }

  getStageHeight() {
    return this.m_stage.stageHeight;
  }

  getDisplayWidth() {
    return this.m_displayWidth;
  }

  getDisplayHeight() {
    return this.m_displayHeight;
  }

  setViewport(px, py, pw, ph) {
    this.m_viewPortRect.setTo(px, py, pw, ph);
  }

  setViewportSize(pw, ph) {
    this.m_viewPortRect.setSize(pw, ph);
  }

  testViewPortChanged(px, py, pw, ph) {
    return this.m_viewPortRect.testEqualWithParams(px, py, pw, ph);
  }

  getViewportX() {
    return this.m_viewPortRect.x;
  }

  getViewportY() {
    return this.m_viewPortRect.y;
  }

  getViewportWidth() {
    return this.m_viewPortRect.width;
  }

  getViewportHeight() {
    return this.m_viewPortRect.height;
  }

  getViewPortSize() {
    return this.m_viewPortRect;
  }

  getFBOWidth() {
    return this.m_viewPortRect.width < RendererDevice_1.default.MAX_RENDERBUFFER_SIZE ? this.m_viewPortRect.width : RendererDevice_1.default.MAX_RENDERBUFFER_SIZE;
  }

  getFBOHeight() {
    return this.m_viewPortRect.height < RendererDevice_1.default.MAX_RENDERBUFFER_SIZE ? this.m_viewPortRect.height : RendererDevice_1.default.MAX_RENDERBUFFER_SIZE;
  }

  getRCanvasWidth() {
    return this.m_rcanvasWidth;
  }

  getRCanvasHeight() {
    return this.m_rcanvasHeight;
  }

  updateRenderBufferSize() {
    let rect = this.m_div.getBoundingClientRect();
    console.log("updateRenderBufferSize() rect.width, rect.height: ", rect.width, rect.height);
    this.m_canvas.style.width = Math.floor(rect.width) + 'px';
    this.m_canvas.style.height = Math.floor(rect.height) + 'px';
    rect = this.m_div.getBoundingClientRect();
    this.resizeBufferSize(rect.width, rect.height);
  }

}

exports.default = RAdapterContext;

/***/ }),

/***/ "0c85":
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

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

class ContextMouseEvtDispatcher {
  constructor() {
    this.m_singleDown = false;
    this.m_mouseX = 0;
    this.m_mouseY = 0;
    this.m_mouseClickTime = 0;
    this.dpr = 1.0;
  }

  initMobile(canvas, div, stage) {
    var pdocument = null;

    try {
      if (document != undefined) {
        pdocument = document;
      }
    } catch (err) {
      console.log("ContextMouseEvtDispatcher::initMobile(), document is undefined.");
    }

    if (pdocument != null) {
      let selfT = this;
      div.addEventListener('touchstart', evt => {
        /*
        e.touches：当前位于屏幕上的所有手指的列表
        e.targetTouches：位于当前DOM元素上手指的列表
        e.changedTouches：涉及当前事件手指的列表
        */
        //获取手指的位置
        let list = evt.targetTouches;
        let px = 0;
        let py = 0;

        if (list.length < 2) {
          px = 0 | this.dpr * evt.targetTouches[0].pageX;
          py = 0 | this.dpr * evt.targetTouches[0].pageY;
          stage.mouseX = px;
          stage.mouseY = stage.stageHeight - py;
          stage.mouseViewX = px;
          stage.mouseViewY = py;
          this.m_singleDown = true;
          this.m_mouseX = stage.mouseX;
          this.m_mouseY = stage.mouseY;
          this.m_mouseClickTime = Date.now();
          stage.mouseDown(1);
        } else {
          let posArray = [];

          for (let i = 0; i < list.length; ++i) {
            px = 0 | this.dpr * evt.targetTouches[i].pageX;
            py = 0 | this.dpr * evt.targetTouches[i].pageY;
            posArray.push({
              x: px,
              y: py
            });
          }

          stage.mouseMultiDown(posArray);
          this.m_singleDown = false;
        }

        evt.preventDefault();
        evt.stopPropagation();
      }, false);
      div.addEventListener('touchend', evt => {
        //获取手指的位置
        this.m_singleDown = false;
        let list = evt.targetTouches;
        let px = 0;
        let py = 0;

        if (list.length < 1) {
          stage.mouseUp(1);
          this.m_mouseClickTime = Date.now() - this.m_mouseClickTime;

          if (Math.abs(this.m_mouseX - stage.mouseX) < 2 && Math.abs(this.m_mouseY - stage.mouseY) < 2 && this.m_mouseClickTime < 900) {
            this.m_mouseX = stage.mouseX;
            this.m_mouseY = stage.mouseY;
            stage.mouseClick();
          }
        } else {
          let posArray = [];

          for (let i = 0; i < list.length; ++i) {
            px = 0 | this.dpr * evt.targetTouches[i].pageX;
            py = 0 | this.dpr * evt.targetTouches[i].pageY;
            posArray.push({
              x: px,
              y: py
            });
          }

          stage.mouseMultiUp(posArray);
        }

        evt.preventDefault();
      }, false);
      div.addEventListener('touchcancel', e => {
        //获取手指的位置
        selfT.m_singleDown = false;
        let list = e.targetTouches;
        stage.mouseCancel();
        e.preventDefault();
      }, false);
      div.addEventListener('touchmove', evt => {
        evt.preventDefault(); //阻止屏幕滚动的默认行为

        let list = evt.targetTouches;
        let px = 0;
        let py = 0;

        if (this.m_singleDown) {
          px = 0 | this.dpr * list[0].pageX;
          py = 0 | this.dpr * list[0].pageY;
          stage.mouseViewX = px;
          stage.mouseViewY = py;
          stage.mouseX = px;
          stage.mouseY = stage.stageHeight - py;
          stage.mouseMove();
        }

        if (list.length > 1) {
          let posArray = [];

          for (let i = 0; i < list.length; ++i) {
            px = 0 | this.dpr * evt.targetTouches[i].pageX;
            py = 0 | this.dpr * evt.targetTouches[i].pageY;
            posArray.push({
              x: px,
              y: py
            });
          }

          stage.mouseMultiMove(posArray);
        } //DivLog.ShowLog("touchmove "+list.length+", px,py: "+(px|0)+","+(0|py));

      }, {
        passive: false
      }, false);

      if (RendererDevice_1.default.IsIpadOS()) {
        let meta = document.createElement('meta');
        meta.name = "viewport";
        meta.content = "width=device-width,initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no";
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
    }
  }

  initialize(canvas, div, stage) {
    if (RendererDevice_1.default.IsMobileWeb() || RendererDevice_1.default.IsIpadOS()) {
      this.initMobile(canvas, div, stage);
    } else {
      this.initPC(canvas, div, stage);
      this.initMobile(canvas, div, stage);
    }
  }

  initPC(canvas, div, stage) {
    var pdocument = null;

    try {
      if (document != undefined) {
        pdocument = document;
      }
    } catch (err) {
      console.log("ContextMouseEvtDispatcher::initPC(), document is undefined.");
    }

    if (pdocument != null) {
      if (canvas.onmousewheel == undefined && canvas.addEventListener != undefined) {
        //use firefox browser mousewheel evt
        let func = function (evt) {
          evt.wheelDeltaY = -evt.detail;
          stage.mouseWheel(evt);
        };

        canvas.addEventListener('DOMMouseScroll', func, false);
      }

      canvas.onmousewheel = evt => {
        evt.preventDefault();
        evt.stopPropagation();
        stage.mouseWheel(evt);
      };

      canvas.onmousedown = evt => {
        let rect = div.getBoundingClientRect();
        let px = 0 | this.dpr * (evt.clientX - rect.left);
        let py = 0 | this.dpr * (evt.clientY - rect.top);
        stage.mouseX = px;
        stage.mouseY = stage.stageHeight - py;
        stage.mouseViewX = px;
        stage.mouseViewY = py;
        this.m_mouseX = stage.mouseX;
        this.m_mouseY = stage.mouseY;
        this.m_mouseClickTime = Date.now(); // console.log("ContextMouseEvtDispatcher::onmousedown(),evt.button: ", evt.button);

        if (evt.button == 0) {
          stage.mouseDown(1);
        } else if (evt.button == 1) {
          stage.mouseMiddleDown();
        } else if (evt.button == 2) {
          stage.mouseRightDown(1);
        }
      };

      canvas.onmouseup = evt => {
        let rect = div.getBoundingClientRect();
        let px = 0 | this.dpr * (evt.clientX - rect.left);
        let py = 0 | this.dpr * (evt.clientY - rect.top);
        stage.mouseX = px;
        stage.mouseY = stage.stageHeight - py; // console.log("ContextMouseEvtDispatcher::onmouseup(),evt.button: ", evt.button);

        if (evt.button == 0) {
          stage.mouseUp(1);
        } else if (evt.button == 1) {
          stage.mouseMiddleUp();
        } else if (evt.button == 2) {
          stage.mouseRightUp(1);
        }
      };

      document.onmouseup = evt => {
        if (evt.button == 0) {
          stage.mouseWindowUp(1);
        } else if (evt.button == 1) {// stage.mouseMiddleUp();
        } else if (evt.button == 2) {
          stage.mouseWindowRightUp(1);
        }
      };

      canvas.onmousemove = evt => {
        // console.log("ContextMouseEvtDispatcher::onmouseMove"+evt.pageX+","+evt.pageY);
        let rect = div.getBoundingClientRect();
        let px = 0 | this.dpr * (evt.clientX - rect.left);
        let py = 0 | this.dpr * (evt.clientY - rect.top);
        stage.mouseX = px;
        stage.mouseY = stage.stageHeight - py;
        stage.mouseViewX = px;
        stage.mouseViewY = py;
        stage.mouseMove();
      };

      canvas.onclick = evt => {
        let rect = div.getBoundingClientRect();
        let px = 0 | this.dpr * (evt.clientX - rect.left);
        let py = 0 | this.dpr * (evt.clientY - rect.top);
        stage.mouseX = px;
        stage.mouseY = stage.stageHeight - py;
        stage.mouseViewX = px;
        stage.mouseViewY = py;
        this.m_mouseClickTime = Date.now() - this.m_mouseClickTime;

        if (Math.abs(this.m_mouseX - stage.mouseX) < 2 && Math.abs(this.m_mouseY - stage.mouseY) < 2 && this.m_mouseClickTime < 900) {
          this.m_mouseX = stage.mouseX;
          this.m_mouseY = stage.mouseY; //console.log("ContextMouseEvtDispatcher::onclick()," + stage.mouseViewX + "," + stage.mouseViewY + ",evt.button: " + evt.button);

          if (evt.button == 0) {
            stage.mouseClick();
          } else if (evt.button == 2) {
            stage.mouseRightClick();
          }
        }
      };

      canvas.ondblclick = evt => {
        let rect = div.getBoundingClientRect();
        let px = 0 | this.dpr * (evt.clientX - rect.left);
        let py = 0 | this.dpr * (evt.clientY - rect.top);
        stage.mouseX = px;
        stage.mouseY = stage.stageHeight - py;
        stage.mouseViewX = px;
        stage.mouseViewY = py; // console.log("ContextMouseEvtDispatcher::ondoubleclick()," + stage.mouseViewX + "," + stage.mouseViewY + ",evt.button: " + evt.button);

        if (evt.button == 0) {
          stage.mouseDoubleClick();
        } else if (evt.button == 2) {// stage.mouseRightDoubleClick();
        }
      };
    }
  }

}

exports.default = ContextMouseEvtDispatcher;

/***/ }),

/***/ "0e01":
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

const FrameBufferType_1 = __importDefault(__webpack_require__("baae"));

const RendererState_1 = __importDefault(__webpack_require__("29ef"));

const RenderMaterialProxy_1 = __importDefault(__webpack_require__("7499"));

const RenderProxy_1 = __webpack_require__("de9d");

class RendererInstanceContextParam {
  constructor() {
    this.camera = null;
    this.stage = null;
    this.builder = null;
    this.vtxBuilder = null;
    this.uniformContext = null;
    this.shaderProgramBuilder = null;
  }

}

exports.RendererInstanceContextParam = RendererInstanceContextParam;
/**
 * 渲染器实例上下文
 */

class RendererInstanceContext {
  constructor(rcuid) {
    this.m_adapter = null;
    this.m_renderProxy = null;
    this.m_materialProxy = null;
    this.m_cameraNear = 0.1;
    this.m_cameraFar = 5000.0;
    this.m_cameraFov = 45.0;
    this.m_rcuid = 0;
    this.m_rcuid = rcuid;
    this.m_renderProxy = new RenderProxy_1.RenderProxy(rcuid);
  }
  /**
   * @returns return renderer context unique id
   */


  getRCUid() {
    return this.m_rcuid;
  }

  getDiv() {
    return this.m_adapter.getDiv();
  }

  getCanvas() {
    return this.m_adapter.getCanvas();
  }

  getRenderAdapter() {
    return this.m_adapter;
  }

  getRenderMaterialProxy() {
    return this.m_materialProxy;
  }

  getRenderProxy() {
    return this.m_renderProxy;
  }

  getTextureResTotal() {
    return this.m_renderProxy.Texture.getTextureResTotal();
  }

  getTextureAttachTotal() {
    return this.m_renderProxy.Texture.getAttachTotal();
  }

  getDevicePixelRatio() {
    return this.m_adapter.getDevicePixelRatio();
  }

  getStage3D() {
    return this.m_renderProxy.getStage3D();
  }

  getCamera() {
    if (this.m_renderProxy != null) {
      return this.m_renderProxy.getCamera();
    }

    return null;
  }

  cameraLock() {
    this.m_renderProxy.cameraLock();
  }

  cameraUnlock() {
    this.m_renderProxy.cameraUnlock();
  }

  updateCamera() {
    if (this.m_renderProxy != null) {
      this.m_renderProxy.updateCamera();
    }
  }

  updateCameraDataFromCamera(cam) {
    if (this.m_renderProxy != null) {
      this.m_renderProxy.updateCameraDataFromCamera(cam);
    }
  }

  lockRenderColorMask() {
    if (this.m_renderProxy != null) {
      this.m_renderProxy.lockRenderColorMask();
    }
  }

  unlockRendererColorMask() {
    if (this.m_renderProxy != null) {
      this.m_renderProxy.unlockRenderState();
    }
  }

  useGlobalRenderColorMask(colorMask) {
    if (this.m_renderProxy != null) {
      this.m_renderProxy.unlockRenderColorMask();
      this.m_renderProxy.useRenderColorMask(colorMask);
      this.m_renderProxy.lockRenderColorMask();
    }
  }

  useGlobalRenderColorMaskByName(colorMaskNS) {
    if (this.m_renderProxy != null) {
      this.m_renderProxy.unlockRenderColorMask();
      this.m_renderProxy.useRenderColorMask(RendererState_1.default.GetRenderColorMaskByName(colorMaskNS));
      this.m_renderProxy.lockRenderColorMask();
    }
  }

  getRenderColorMaskByName(scolorMaskNS) {
    return RendererState_1.default.GetRenderColorMaskByName(scolorMaskNS);
  }

  lockRenderState() {
    if (this.m_renderProxy != null) {
      this.m_renderProxy.lockRenderState();
    }
  }

  unlockRenderState() {
    if (this.m_renderProxy != null) {
      this.m_renderProxy.unlockRenderState();
    }
  }

  useGlobalRenderState(state) {
    if (this.m_renderProxy != null) {
      this.m_renderProxy.unlockRenderState();
      this.m_renderProxy.useRenderState(state);
      this.m_renderProxy.lockRenderState();
    }
  }

  useGlobalRenderStateByName(stateNS) {
    if (this.m_renderProxy != null) {
      this.m_renderProxy.unlockRenderState();
      this.m_renderProxy.useRenderState(RendererState_1.default.GetRenderStateByName(stateNS));
      this.m_renderProxy.lockRenderState();
    }
  }

  getRenderStateByName(stateNS) {
    return RendererState_1.default.GetRenderStateByName(stateNS);
  }

  lockMaterial() {
    if (this.m_materialProxy != null) {
      this.m_materialProxy.lockMaterial();
    }
  }

  unlockMaterial() {
    if (this.m_materialProxy != null) {
      this.m_materialProxy.unlockMaterial();
    }
  }

  isUnlockMaterial() {
    return this.m_materialProxy.isUnlockMatrial();
  }

  useGlobalMaterial(material, texUnlock = false, materialUniformUpdate = false) {
    if (this.m_materialProxy != null) {
      this.m_materialProxy.unlockMaterial();

      if (texUnlock) {
        this.m_materialProxy.unlockTexture();
      } else {
        this.m_materialProxy.lockTexture();
      }

      this.m_materialProxy.useGlobalMaterial(material, materialUniformUpdate);
      this.m_materialProxy.lockMaterial();
    }
  }

  updateMaterialUniform(material) {
    this.m_materialProxy.updateMaterialUniform(material);
  }

  clearBackBuffer() {
    this.m_renderProxy.clearBackBuffer();
  }

  setScissorRect(px, py, pw, ph) {
    this.m_adapter.setScissorRect(px, py, pw, ph);
  }

  setScissorEnabled(enabled) {
    this.m_adapter.setScissorEnabled(enabled);
  }

  setViewPort(px, py, pw, ph) {
    this.m_renderProxy.setViewPort(px, py, pw, ph);
  }

  synFBOSizeWithViewport() {
    this.m_adapter.synFBOSizeWithViewport();
  }

  asynFBOSizeWithViewport() {
    this.m_adapter.asynFBOSizeWithViewport();
  } // if synFBOSizeWithViewport is true, fbo size = factor * view port size;


  setFBOSizeFactorWithViewPort(factor) {
    this.m_adapter.setFBOSizeFactorWithViewPort(factor);
  }

  createFBOAt(index, fboType, pw, ph, enableDepth = false, enableStencil = false, multisampleLevel = 0) {
    this.m_adapter.createFBOAt(index, fboType, pw, ph, enableDepth, enableStencil, multisampleLevel);
  }

  bindFBOAt(index, fboType) {
    this.m_adapter.bindFBOAt(index, fboType);
  }
  /**
   * bind a texture to fbo attachment by attachment index
   * @param texProxy  RTTTextureProxy instance
   * @param enableDepth  enable depth buffer yes or no
   * @param enableStencil  enable stencil buffer yes or no
   * @param attachmentIndex  fbo attachment index
   */


  setRenderToTexture(texProxy, enableDepth = false, enableStencil = false, attachmentIndex = 0) {
    this.m_adapter.setRenderToTexture(texProxy, enableDepth, enableStencil, attachmentIndex);
  }

  useFBO(clearColorBoo = false, clearDepthBoo = false, clearStencilBoo = false) {
    this.m_adapter.useFBO(clearColorBoo, clearDepthBoo, clearStencilBoo);
  }

  resetFBOAttachmentMask(boo) {
    this.m_adapter.resetFBOAttachmentMask(boo);
  }

  setFBOAttachmentMaskAt(index, boo) {
    this.m_adapter.setFBOAttachmentMaskAt(index, boo);
  }

  setRenderToBackBuffer() {
    if (this.m_adapter != null) {
      this.m_adapter.setRenderToBackBuffer(FrameBufferType_1.default.FRAMEBUFFER);
      this.m_renderProxy.rshader.resetRenderState();
      this.m_materialProxy.renderBegin();
    }
  }

  lockViewport() {
    this.m_adapter.lockViewport();
  }

  unlockViewport() {
    this.m_adapter.unlockViewport();
  }

  setClearDepth(depth) {
    this.m_adapter.setClearDepth(depth);
  }

  getClearDepth() {
    return this.m_adapter.getClearDepth();
  }

  getViewportX() {
    return this.m_adapter.getViewportX();
  }

  getViewportY() {
    return this.m_adapter.getViewportY();
  }

  getViewportWidth() {
    return this.m_adapter.getViewportWidth();
  }

  getViewportHeight() {
    return this.m_adapter.getViewportHeight();
  }
  /**
   * 设置用于3D绘制的canvas的宽高尺寸,如果调用了此函数，则不会自动匹配窗口尺寸改变，默认是自动匹配窗口尺寸改变的
   * @param       pw 像素宽度
   * @param       ph 像素高度
  */


  setContextViewSize(pw, ph) {
    this.m_adapter.setContextViewSize(pw, ph);
  }

  setCameraParam(fov, near, far) {
    this.m_cameraFov = fov;
    this.m_cameraNear = near;
    this.m_cameraFar = far;

    if (this.m_renderProxy != null) {
      this.m_renderProxy.setCameraParam(fov, near, far);
    }
  }

  initialize(param, camera, contextParam) {
    if (this.m_adapter == null) {
      this.m_renderProxy.setCameraParam(this.m_cameraFov, this.m_cameraNear, this.m_cameraFar);
      this.m_renderProxy.setWebGLMaxVersion(param.maxWebGLVersion);
      let proxyParam = new RenderProxy_1.RenderProxyParam();
      proxyParam.uniformContext = contextParam.uniformContext;
      proxyParam.vtxBufUpdater = contextParam.builder;
      proxyParam.materialUpdater = contextParam.builder;
      proxyParam.vtxBuilder = contextParam.vtxBuilder;
      this.m_renderProxy.initialize(param, camera, contextParam.stage, proxyParam);
      this.m_rcuid = this.m_renderProxy.getRCUid();
      contextParam.vtxBuilder.initialize(this.m_rcuid, this.m_renderProxy.getRC(), this.m_renderProxy.getGLVersion());
      this.m_adapter = this.m_renderProxy.getRenderAdapter();
      let context = this.m_renderProxy.getContext();
      context.setViewport(0, 0, context.getRCanvasWidth(), context.getRCanvasHeight());
    }
  }

  initManager(builder) {
    if (this.m_materialProxy == null) {
      this.m_materialProxy = new RenderMaterialProxy_1.default();
      this.m_materialProxy.setDispBuilder(builder);
    }
  }

  setClearRGBColor3f(pr, pg, pb) {
    this.m_renderProxy.setClearRGBColor3f(pr, pg, pb);
  }

  setClearRGBAColor4f(pr, pg, pb, pa) {
    this.m_renderProxy.setClearRGBAColor4f(pr, pg, pb, pa);
  }

  getClearRGBAColor4f(color4) {
    color4.fromArray4(this.m_adapter.bgColor);
  }

  updateRenderBufferSize() {
    this.m_adapter.updateRenderBufferSize();
  }

  vertexRenderBegin() {
    this.m_renderProxy.Vertex.renderBegin();
  }
  /**
   * the function resets the renderer instance rendering status.
   * you should use it on the frame starting time.
   */


  renderBegin(cameraDataUpdate = true) {
    if (this.m_adapter != null) {
      this.m_adapter.unlockViewport(); //this.m_adapter.resetPolygonOffset();

      this.m_adapter.setClearDepth(1.0);
      this.m_renderProxy.Vertex.renderBegin();
      this.m_materialProxy.renderBegin();
      this.m_adapter.update();
      this.m_adapter.setClearMaskClearAll();
      this.m_adapter.renderBegin();
      this.m_renderProxy.status.reset();
      RendererState_1.default.Reset(this.m_renderProxy.getRenderContext());

      if (cameraDataUpdate) {
        this.m_renderProxy.useCameraData();
        this.m_renderProxy.updateCameraDataFromCamera(this.m_renderProxy.getCamera());
      }
    }
  }

  resetState() {
    RendererState_1.default.ResetState();
    this.m_materialProxy.renderBegin();
  }

  resetmaterial() {
    this.m_materialProxy.renderBegin();
  }

  resetUniform() {
    this.m_materialProxy.resetUniform();
  }

  runEnd() {}

}

exports.RendererInstanceContext = RendererInstanceContext;
exports.default = RendererInstanceContext;

/***/ }),

/***/ "11e6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

class RSEntityFlag {
  static AddContainerFlag(flag) {
    //return flag | RSEntityFlag.CONTAINER_FLAG;
    return flag | 0x80000000;
  }

  static RemoveContainerFlag(flag) {
    //return flag & RSEntityFlag.CONTAINER_NOT_FLAG;
    return flag & -0x80000001;
  }

  static AddSpaceUid(flag, rawUid) {
    return flag & -0x100000 | rawUid;
  }

  static RemoveSpaceUid(flag) {
    //return flag & RSEntityFlag.SPACE_NOT_FLAG;
    return flag & -0x100000;
  }

  static GetSpaceUid(flag) {
    //return flag & RSEntityFlag.SPACE_FLAG;
    return flag & 0xFFFFF;
  }

  static AddRendererUid(flag, rawUid) {
    return flag & -0x7f00001 | rawUid << 20;
  }

  static RemoveRendererUid(flag) {
    //return flag | RSEntityFlag.RENDERER_UID_FLAG;
    return flag | 0x7F00000;
  }

  static GetRendererUid(flag) {
    //return (flag & RSEntityFlag.RENDERER_UID_FLAG)>>20;
    flag = (flag & 0x7F00000) >> 20;
    return flag < 127 ? flag : -1;
  }

  static TestRendererUid(flag) {
    //return (flag & RSEntityFlag.RENDERER_UID_FLAG)>>20;
    flag = (flag & 0x7F00000) >> 20;
    return flag < 127;
  }

  static AddSortEnabled(flag) {
    //return flag | RSEntityFlag.SORT_FLAG;
    return flag | 0x40000000;
  }

  static RemoveSortEnabled(flag) {
    //return flag & RSEntityFlag.SORT_NOT_FLAG;
    return flag & -0x40000001;
  }

  static TestSortEnabled(flag) {
    //return (flag & RSEntityFlag.SORT_FLAG) == RSEntityFlag.SORT_FLAG;
    return (flag & 0x40000000) == 0x40000000;
  }

  static AddRendererLoad(flag) {
    //return flag | RSEntityFlag.RENDERER_LOAD_FLAG;
    return flag | 0x30000000;
  }

  static RemoveRendererLoad(flag) {
    //return flag & RSEntityFlag.RENDERER_LOAD_NOT_FLAG;
    return flag & -0x30000001;
  }

  static TestSpaceContains(flag) {
    return (0xFFFFF & flag) > 0;
  }

  static TestSpaceEnabled(flag) {
    return (0xFFFFF & flag) < 1;
  }

  static TestSpaceEnabled2(flag) {
    // console.log("   TestSpaceEnabled2(), 0xFFFFF & flag: ", (0xFFFFF & flag));
    // console.log("                       (0x80000000 & flag) != 0x80000000: ", ((0x80000000 & flag) != 0x80000000));
    return (0xFFFFF & flag) < 1 && (0x80000000 & flag) != 0x80000000;
  }

  static TestContainerEnabled(flag) {
    //return (RSEntityFlag.RENDERER_UID_FLAG & flag) == RSEntityFlag.RENDERER_UID_FLAG && (RSEntityFlag.CONTAINER_FLAG & flag) != RSEntityFlag.CONTAINER_FLAG;
    return (0x7F00000 & flag) == 0x7F00000 && (0x80000000 & flag) != 0x80000000;
  }

  static TestRendererEnabled(flag) {
    //return (RSEntityFlag.RENDERER_ADN_LOAD_FLAG & flag) == RSEntityFlag.RENDERER_UID_FLAG && (RSEntityFlag.CONTAINER_FLAG & flag) != RSEntityFlag.CONTAINER_FLAG;
    return (0x37F00000 & flag) == 0x7F00000 && (0x80000000 & flag) != 0x80000000;
  }

}

RSEntityFlag.DEFAULT = 0x7f00000; // 第27位存放是否在container里面
// 在 container 内

RSEntityFlag.CONTAINER_FLAG = 0x80000000; // (1<<27)
// 没在 container 内

RSEntityFlag.CONTAINER_NOT_FLAG = -0x80000001; //~(0x80000000), ~(1<<27)
// 第0位到第19位总共20位存放自身在space中的 index id(1 到 1048575(0xFFFFF), 但是不会包含0xFFFFF)

RSEntityFlag.SPACE_FLAG = 0xFFFFF;
RSEntityFlag.SPACE_NOT_FLAG = -0x100000; // ~0xFFFFF;
// 第20位开始到26位为总共7位止存放在renderer中的状态数据(renderer unique id and others),
// 最多可以支持同时构建64个renderer instance

RSEntityFlag.RENDERER_UID_FLAG = 0x7F00000; // (1<<20 | 1<<21 | 1<<22 | 1<<23 | 1<<24 | 1<<25 | 1<<26);

RSEntityFlag.RENDERER_UID_NOT_FLAG = -0x7f00001; // ~0x7F00000;

RSEntityFlag.RENDERER_UID_INVALID = 127; // ~0x7F00000;
//0x40000000
// 第30位存放 是否渲染运行时排序(rendering sort enabled) 的相关信息

RSEntityFlag.SORT_FLAG = 0x40000000; // (1<<30);

RSEntityFlag.SORT_NOT_FLAG = -0x40000001; // ~0x40000000;
// 第28位开始到29位总共2位存放renderer 载入状态 的相关信息

RSEntityFlag.RENDERER_LOAD_FLAG = 0x30000000; // (1<<28 | 1<<29);

RSEntityFlag.RENDERER_LOAD_NOT_FLAG = -0x30000001; // ~0x30000000;

RSEntityFlag.RENDERER_ADN_LOAD_FLAG = 0x37F00000; // 0x7f00000 | 0x30000000;

exports.default = RSEntityFlag;

/***/ }),

/***/ "1216":
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

const FrameBufferType_1 = __importDefault(__webpack_require__("baae"));

const RenderFilter_1 = __importDefault(__webpack_require__("722e"));

const RenderMaskBitfield_1 = __importDefault(__webpack_require__("8333"));

const FrameBufferObject_1 = __importDefault(__webpack_require__("6d49"));

const RenderConst_1 = __webpack_require__("e08e");

const TextureFormat_1 = __importDefault(__webpack_require__("ffc0"));

const TextureDataType_1 = __importDefault(__webpack_require__("1f61"));

const RenderColorMask_1 = __webpack_require__("070b");

const RenderStateObject_1 = __webpack_require__("a5ba");

const RendererState_1 = __importDefault(__webpack_require__("29ef"));

const AABB2D_1 = __importDefault(__webpack_require__("e2fe"));

class RenderAdapter {
  constructor(rcuid, texResource) {
    // renderer context uid
    this.m_rcuid = 0;
    this.m_texResource = null;
    this.m_gl = null;
    this.m_fontFaceFlipped = false; // default ccw

    this.m_colorMask = {
      mr: true,
      mg: true,
      mb: true,
      ma: true
    };
    this.m_rtx = null;
    this.m_clearMask = 0x0;
    this.m_fboBuf = null;
    this.m_fboIndex = 0;
    this.m_fboType = FrameBufferType_1.default.FRAMEBUFFER;
    this.m_fboBufList = [null, null, null, null, null, null, null, null];
    this.m_fboClearBoo = true;
    this.m_fboViewportRectBoo = false;
    this.m_polygonOffsetFlag = false;
    this.m_polygonOffset = false;
    this.m_clearDepth = 1.0;
    this.m_preDepth = 0.0;
    this.m_viewPortRect = new AABB2D_1.default(0, 0, 800, 600);
    this.m_fboViewportRect = new AABB2D_1.default(0, 0, 800, 600);
    this.m_fboSizeFactor = 1.0;
    this.m_clearStencil = 0x0;
    this.m_fboBiltRectData = new Uint16Array(8);
    this.m_fboViewportRectData = new Uint16Array(4);
    this.m_activeAttachmentTotal = 1;
    this.m_scissorEnabled = false;
    this.m_rState = null;
    this.m_webglVer = 2;
    this.m_syncBgColor = true;
    this.m_bodyBgColor = "";
    this.bgColor = new Float32Array([0, 0, 0, 1]);
    this.uViewProbe = null;
    this.m_devPRatio = 1.0;
    this.m_viewportUnlock = true;
    this.m_synFBOSizeWithViewport = false;
    this.m_fboRunning = false;
    this.m_texResource = texResource;
    this.m_rcuid = rcuid;
  }

  syncHtmlBodyColor() {
    if (this.m_rtx) {
      const c = this.bgColor;
      this.m_rtx.syncHtmlBodyColor(c[0], c[1], c[2]);
    }
  }

  initialize(context, param, rState, uViewProbe) {
    if (this.m_rtx == null) {
      this.m_syncBgColor = param.syncBgColor;
      this.m_webglVer = context.getWebGLVersion();
      this.m_rState = rState;
      this.m_rtx = context;
      this.m_gl = context.getRC();
      this.m_gl.disable(this.m_gl.SCISSOR_TEST);
      if (context.isDepthTestEnabled()) this.m_gl.enable(this.m_gl.DEPTH_TEST);else this.m_gl.disable(this.m_gl.DEPTH_TEST);

      if (context.isStencilTestEnabled()) {
        this.m_gl.enable(this.m_gl.STENCIL_TEST);
      } else {
        console.warn("STENCIL_TEST disable !!!");
        this.m_gl.disable(this.m_gl.STENCIL_TEST);
      }

      if (param.getPolygonOffsetEanbled()) this.enabledPolygonOffset();else this.disabledPolygonOffset();
      this.m_gl.enable(this.m_gl.CULL_FACE);
      this.m_gl.cullFace(this.m_gl.BACK);
      this.m_gl.enable(this.m_gl.BLEND);
      this.m_gl.enable(this.m_gl.BLEND);
      if (param.getDitherEanbled()) this.m_gl.enable(this.m_gl.DITHER);else this.m_gl.disable(this.m_gl.DITHER);
      this.m_gl.frontFace(this.m_gl.CCW); //m_gl.hint(m_gl.PERSPECTIVE_CORRECTION_HINT, m_gl.NICEST);	// Really Nice Perspective Calculations

      this.m_clearMask = this.m_gl.COLOR_BUFFER_BIT | this.m_gl.DEPTH_BUFFER_BIT | this.m_gl.STENCIL_BUFFER_BIT; //
      //this.m_rState = context.getRenderState();
      //console.log("RenderAdapter::initialize() finish...");

      if (this.uViewProbe == null) {
        let size = this.m_viewPortRect;
        let self = this;
        self.uViewProbe = uViewProbe;
        this.uViewProbe.setVec4DataWithArr4([size.x, size.y, size.width, size.height]);
      }
    }
  }
  /**
   * @param faceFlipped the value is true, frontFace is CW. the value is false, frontFace is CCW.
   */


  setFrontFaceFlipped(faceFlipped) {
    if (this.m_fontFaceFlipped != faceFlipped) {
      if (faceFlipped) {
        this.m_gl.frontFace(this.m_gl.CW);
      } else {
        this.m_gl.frontFace(this.m_gl.CCW);
      }

      this.m_fontFaceFlipped = faceFlipped;
    }
  }

  enabledPolygonOffset() {
    if (!this.m_polygonOffset) {
      this.m_polygonOffset = true;
      console.warn("POLYGON_OFFSET_FILL enable !!!");
      this.m_gl.enable(this.m_gl.POLYGON_OFFSET_FILL);
    }
  }

  disabledPolygonOffset() {
    if (this.m_polygonOffset) {
      this.m_polygonOffset = false;
      console.warn("POLYGON_OFFSET_FILL disable !!!");
      this.m_gl.disable(this.m_gl.POLYGON_OFFSET_FILL);
    }
  }
  /*
   * specifies the scale factors and units to calculate depth values.
   * @param factor the value is a GLfloat which sets the scale factor for the variable depth offset for each polygon. The default value is 0.
   * @param units the value is a which sets the multiplier by which an implementation-specific value is multiplied with to create a constant depth offset. The default value is 0.
   */


  setPolygonOffset(factor, units = 0.0) {
    this.m_gl.polygonOffset(factor, units);
    this.m_polygonOffsetFlag = true;
  }
  /*
   * reset the scale factors and units value is default value(0.0).
   */


  resetPolygonOffset() {
    if (this.m_polygonOffsetFlag) {
      this.m_gl.polygonOffset(0.0, 0.0);
      this.m_polygonOffsetFlag = false;
    }
  }

  getDiv() {
    return this.m_rtx.getDiv();
  }

  getCanvas() {
    return this.m_rtx.getCanvas();
  }

  setClearDepth(depth) {
    this.m_clearDepth = depth;
  }

  getClearDepth() {
    return this.m_clearDepth;
  }

  setContextViewSize(pw, ph) {
    this.m_rtx.autoSyncRenderBufferAndWindowSize = false;
    this.m_rtx.resizeBufferSize(pw, ph);
  }

  getViewportX() {
    return this.m_rtx.getViewportX();
  }

  getViewportY() {
    return this.m_rtx.getViewportY();
  }

  getViewportWidth() {
    return this.m_rtx.getViewportWidth();
  }

  getViewportHeight() {
    return this.m_rtx.getViewportHeight();
  }

  getFBOFitWidth() {
    return this.m_rtx.getFBOWidth();
  }

  getFBOFitHeight() {
    return this.m_rtx.getFBOHeight();
  }

  getRCanvasWidth() {
    return this.m_rtx.getRCanvasWidth();
  }

  getRCanvasHeight() {
    return this.m_rtx.getRCanvasHeight();
  }

  setColorMask(mr, mg, mb, ma) {
    this.m_colorMask.mr = mr;
    this.m_colorMask.mg = mg;
    this.m_colorMask.mb = mb;
    this.m_colorMask.ma = ma;
  }

  setClearMaskClearAll() {
    this.m_clearMask = this.m_gl.COLOR_BUFFER_BIT | this.m_gl.DEPTH_BUFFER_BIT | this.m_gl.STENCIL_BUFFER_BIT;
  }

  setClearMaskClearOnlyColor() {
    this.m_clearMask = this.m_gl.COLOR_BUFFER_BIT;
  }

  setClearMaskClearOnlyDepthAndStencil() {
    this.m_clearMask = this.m_gl.DEPTH_BUFFER_BIT | this.m_gl.STENCIL_BUFFER_BIT;
  }

  setScissorRect(px, py, pw, ph) {
    if (this.m_scissorEnabled) {
      this.m_gl.scissor(px, py, pw, ph);
    }
  }

  setScissorEnabled(enabled) {
    if (enabled) {
      if (!this.m_scissorEnabled) {
        this.m_scissorEnabled = true;
        this.m_gl.enable(this.m_gl.SCISSOR_TEST);
      }
    } else if (this.m_scissorEnabled) {
      this.m_scissorEnabled = false;
      this.m_gl.disable(this.m_gl.SCISSOR_TEST);
    }
  }
  /**
   * only clear up depth buffer
   * @param depth depth buffer depth value
   */


  clearDepth(depth = 1.0) {
    let mode = this.m_rState.getDepthTestMode();
    this.m_rState.setDepthTestMode(RenderConst_1.DepthTestMode.OPAQUE);
    this.m_clearDepth = depth;

    if (this.m_preDepth !== this.m_clearDepth) {
      this.m_preDepth = this.m_clearDepth;
      this.m_gl.clearDepth(this.m_clearDepth);
    }

    this.m_gl.clear(this.m_gl.DEPTH_BUFFER_BIT);
    this.m_rState.setDepthTestMode(mode);
  }
  /**
   * only clear up color buffer
   * @param color color data
   */


  clearColor(color) {
    this.m_rtx.syncHtmlBodyColor(color.r, color.g, color.b);
    this.syncHtmlColor();
    this.m_gl.clearColor(color.r, color.g, color.b, color.a);
    this.m_gl.clear(this.m_gl.COLOR_BUFFER_BIT);
  }

  syncHtmlColor() {
    // console.log("this.m_rtx.bodyBgColor: ", this.m_rtx.bodyBgColor);
    if (this.m_syncBgColor) {
      if (document && this.m_bodyBgColor != this.m_rtx.bodyBgColor) {
        this.m_bodyBgColor = this.m_rtx.bodyBgColor;
        const body = document.body;
        body.style.background = this.m_bodyBgColor; // console.log("syncHtmlColor(), color: ", this.m_bodyBgColor);
      }
    }
  }

  clear() {
    // console.log("clear back buffer.");
    // let mode = this.m_rState.getDepthTestMode();
    // this.m_rState.setDepthTestMode(DepthTestMode.OPAQUE);
    if (this.m_preDepth !== this.m_clearDepth) {
      this.m_preDepth = this.m_clearDepth;
      this.m_gl.clearDepth(this.m_clearDepth);
    }

    if (this.m_rtx.isStencilTestEnabled()) {
      this.m_gl.clearStencil(this.m_clearStencil);
    }

    this.syncHtmlColor();
    const cvs = this.bgColor; // if(DebugFlag.Flag_0 > 0) {
    // 	console.log("color cvs: ", cvs);
    // }

    this.m_gl.clearColor(cvs[0], cvs[1], cvs[2], cvs[3]);
    this.m_gl.clear(this.m_clearMask); // this.m_rState.setDepthTestMode(mode);
    // if (this.m_rtx.isStencilTestEnabled()) {
    // 	this.m_gl.stencilMask(0x0);
    // }
  }

  reset() {
    this.m_rState.setCullFaceMode(RenderConst_1.CullFaceMode.BACK);
    this.m_rState.setDepthTestMode(RenderConst_1.DepthTestMode.OPAQUE);
    RendererState_1.default.Reset(this.m_rtx);
  }

  getRenderContext() {
    return this.m_rtx;
  }

  renderBegin() {
    if (this.m_rtx != null) {
      this.m_fboSizeFactor = 1.0;
      this.reseizeViewPort();
      RenderStateObject_1.RenderStateObject.Unlock();
      RenderStateObject_1.RenderStateObject.UseRenderState(RendererState_1.default.NORMAL_STATE);
      RenderColorMask_1.RenderColorMask.Unlock();
      RenderColorMask_1.RenderColorMask.UseRenderState(RenderColorMask_1.RenderColorMask.ALL_TRUE_COLOR_MASK); // for back buffer
      //this.m_gl.clearDepth(1.0);

      this.clear();
    }
  }

  updateViewPort() {
    let size = this.m_viewPortRect;
    this.uViewProbe.setVec4Data(size.x, size.y, size.width, size.height);
    this.uViewProbe.update(); //DivLog.ShowLog("reseizeFBOViewPort: " + this.m_viewX + "," + this.m_viewY + "," + this.m_viewWidth + "," + this.m_viewHeight);
    //console.log("reseizeFBOViewPort: "+this.m_viewX+","+this.m_viewY+","+this.m_viewWidth+","+this.m_viewHeight);

    this.m_gl.viewport(size.x, size.y, size.width, size.height);
  }

  checkViewPort(dstSize) {
    let srcSize = this.m_viewPortRect;
    let k = this.m_rtx.getDevicePixelRatio();
    let boo = srcSize.testEqual(dstSize);
    boo = boo || Math.abs(this.m_devPRatio - k) > 0.01;

    if (boo) {
      this.m_devPRatio = k;
      srcSize.copyFrom(dstSize);
      this.updateViewPort();
    }
  }

  reseizeViewPort() {
    if (this.m_viewportUnlock) {
      this.checkViewPort(this.m_rtx.getViewPortSize());
    }
  }

  reseizeFBOViewPort() {
    if (this.m_viewportUnlock) {
      this.checkViewPort(this.m_fboViewportRect);
    }
  }

  setViewProbeValue(x, y, width, height) {
    this.uViewProbe.setVec4Data(x, y, width, height);
    this.uViewProbe.update();
  }

  lockViewport() {
    this.m_viewportUnlock = false;
  }

  unlockViewport() {
    this.m_viewportUnlock = true;
  }

  renderEnd() {}

  update() {}

  updateRenderBufferSize() {
    this.m_rtx.updateRenderBufferSize();
  }

  destroy() {
    this.m_rtx = null;
    this.m_rState = null;
  }

  getDevicePixelRatio() {
    return this.m_rtx.getDevicePixelRatio();
  }

  loseContext() {
    this.m_rtx.loseContext();
  }
  /**
   * @returns return gpu context lost status
   */


  isContextLost() {
    return this.m_rtx.isContextLost();
  } // read data format include float or unsigned byte ,etc.


  readPixels(px, py, width, height, format, dataType, pixels) {
    this.m_gl.readPixels(px, py, width, height, TextureFormat_1.default.ToGL(this.m_gl, format), TextureDataType_1.default.ToGL(this.m_gl, dataType), pixels);
  }

  setFBOViewportRect(px, py, pw, ph) {
    this.m_fboViewportRectData[0] = px;
    this.m_fboViewportRectData[1] = py;
    this.m_fboViewportRectData[2] = pw;
    this.m_fboViewportRectData[3] = ph;
    this.m_fboViewportRectBoo = true;
  }

  createFBOAt(index, fboType, pw, ph, enableDepth = false, enableStencil = false, multisampleLevel = 0) {
    if (this.m_fboBufList[index] == null) {
      if (index > 7) {
        index = 7;
      }

      this.m_fboType = fboType;
      this.m_fboBuf = new FrameBufferObject_1.default(this.m_rcuid, this.m_texResource, this.m_fboType);
      this.m_fboBuf.multisampleEnabled = multisampleLevel > 0;
      this.m_fboBuf.multisampleLevel = multisampleLevel;
      this.m_fboBuf.writeDepthEnabled = enableDepth;
      this.m_fboBuf.writeStencilEnabled = enableStencil;
      this.m_fboBuf.initialize(this.m_gl, pw, ph);
      this.m_fboBufList[index] = this.m_fboBuf;
      this.m_fboBuf.sizeFixed = true;
    }
  }

  resizeFBOAt(index, pw, ph) {
    if (index > 7) {
      index = 7;
    } else if (index < 0) {
      index = 0;
    }

    if (this.m_fboBufList[index] != null) {
      this.m_fboBufList[index].resize(pw, ph);
    }
  }

  getFBOWidthAt(index) {
    if (this.m_fboBufList[index] != null) {
      return this.m_fboBufList[index].getWidth();
    }

    return 0;
  }

  getFBOHeightAt(index) {
    if (this.m_fboBufList[index] != null) {
      return this.m_fboBufList[index].getHeight();
    }

    return 0;
  }

  synFBOSizeWithViewport() {
    this.m_synFBOSizeWithViewport = true;
  }

  asynFBOSizeWithViewport() {
    this.m_synFBOSizeWithViewport = false;
  } // 

  /**
   * if synFBOSizeWithViewport is true, fbo size = factor * view port size;
   * @param factor exmple: the value of factor is 0.5
   */


  setFBOSizeFactorWithViewPort(factor) {
    this.m_fboSizeFactor = factor;
  }

  bindFBOAt(index, fboType) {
    if (index > 7) {
      index = 7;
    } else if (index < 0) {
      index = 0;
    }

    this.m_fboBuf = this.m_fboBufList[index];

    if (this.m_fboBuf != null) {
      this.m_fboIndex = index;
      this.m_fboType = fboType;
      this.m_fboBuf.bind(fboType);
      this.m_fboClearBoo = true;
    } else {
      throw Error("Fatal Error!!! this.m_fboBuf == null.");
    }
  }

  clearFBODepthAt(index, clearDepth = 1.0) {
    let fboBuf = this.m_fboBufList[index];

    if (fboBuf != null) {
      fboBuf.clearOnlyDepth(clearDepth);
    }
  }

  resetFBOAttachmentMask(boo) {
    if (this.m_fboBuf != null) {
      this.m_fboBuf.resetAttachmentMask(boo);
    }
  }

  setFBOAttachmentMaskAt(index, boo) {
    if (this.m_fboBuf != null) {
      this.m_fboBuf.setAttachmentMaskAt(index, boo);
    }
  }

  getFBOAttachmentTotal() {
    if (this.m_fboBuf != null) {
      return this.m_fboBuf.getAttachmentTotal();
    }

    return 0;
  }

  isFBORunning() {
    return this.m_fboRunning;
  }
  /**
   * bind a texture to fbo attachment by attachment index
   * @param texProxy  IRenderTexture instance
   * @param enableDepth  enable depth buffer yes or no
   * @param enableStencil  enable stencil buffer yes or no
   * @param attachmentIndex  fbo attachment index
   */


  setRenderToTexture(texProxy, enableDepth = false, enableStencil = false, attachmentIndex = 0) {
    if (attachmentIndex < 0 || attachmentIndex >= 8) {
      attachmentIndex = 0;
    } //console.log("attachmentIndex: ",attachmentIndex);


    if (texProxy == null && attachmentIndex == 0) {
      this.setRenderToBackBuffer(FrameBufferType_1.default.FRAMEBUFFER);
    } else {
      if (attachmentIndex == 0) {
        if (this.m_fboBuf != null) {
          if (this.m_synFBOSizeWithViewport) {
            this.m_fboBuf.initialize(this.m_gl, Math.floor(this.m_rtx.getFBOWidth() * this.m_fboSizeFactor), Math.floor(this.m_rtx.getFBOHeight() * this.m_fboSizeFactor));
          } else {
            if (this.m_fboViewportRectBoo) {
              this.m_fboBuf.initialize(this.m_gl, this.m_fboViewportRectData[2], this.m_fboViewportRectData[3]);
            } else if (!this.m_fboBuf.sizeFixed) {
              this.m_fboBuf.initialize(this.m_gl, texProxy.getWidth(), texProxy.getHeight());
            }
          }
        }

        if (this.m_fboIndex >= 0) {
          if (this.m_fboBuf == null) {
            this.m_fboBuf = new FrameBufferObject_1.default(this.m_rcuid, this.m_texResource, this.m_fboType);
            this.m_fboBufList[this.m_fboIndex] = this.m_fboBuf;
            this.m_fboBuf.writeDepthEnabled = enableDepth;
            this.m_fboBuf.writeStencilEnabled = enableStencil;

            if (this.m_synFBOSizeWithViewport) {
              this.m_fboBuf.initialize(this.m_gl, Math.floor(this.m_rtx.getFBOWidth() * this.m_fboSizeFactor), Math.floor(this.m_rtx.getFBOHeight() * this.m_fboSizeFactor));
            } else {
              if (this.m_fboViewportRectBoo) {
                this.m_fboBuf.initialize(this.m_gl, this.m_fboViewportRectData[2], this.m_fboViewportRectData[3]);
              } else {
                this.m_fboBuf.initialize(this.m_gl, texProxy.getWidth(), texProxy.getHeight());
              }
            }
          }
        }
      }

      if (this.m_fboBuf != null) {
        this.m_fboRunning = true;
        this.m_fboBuf.renderToTexAt(this.m_gl, texProxy, attachmentIndex); //console.log("RenderProxy::setRenderToTexture(), fbo: ",this.m_fboBuf.getFBO());
      }

      this.m_fboClearBoo = true;
    }
  }

  getActiveAttachmentTotal() {
    return this.m_activeAttachmentTotal;
  }

  getAttachmentTotal() {
    return this.m_activeAttachmentTotal;
  }

  useFBO(clearColorBoo = false, clearDepthBoo = false, clearStencilBoo = false) {
    if (this.m_fboBuf != null) {
      if (this.m_fboClearBoo) {
        this.m_fboClearBoo = false;
        this.m_fboBuf.use(this.m_gl);
        this.m_activeAttachmentTotal = this.m_fboBuf.getActiveAttachmentTotal();

        if (clearColorBoo) {
          this.m_fboBuf.clearOnlyColor(this.bgColor);
        }

        if (this.m_fboBuf.writeDepthEnabled) {
          if (this.m_fboBuf.writeStencilEnabled) {
            if (clearDepthBoo && clearStencilBoo) {
              this.m_fboBuf.clearOnlyDepthAndStencil(this.m_clearDepth, 0xffffffff);
            } else if (clearDepthBoo) {
              this.m_fboBuf.clearOnlyDepth(this.m_clearDepth);
            } else if (clearStencilBoo) {
              this.m_fboBuf.clearOnlyStencil(0xff);
            }
          } else if (clearDepthBoo) {
            this.m_fboBuf.clearOnlyDepth(this.m_clearDepth);
          }
        } else if (clearStencilBoo && this.m_fboBuf.writeStencilEnabled) {
          this.m_fboBuf.clearOnlyStencil(0xff);
        }

        if (this.m_webglVer == 1) {
          // m_gl.colorMask(m_colorMask.mr,m_colorMask.mg,m_colorMask.mb,m_colorMask.ma);
          this.m_gl.clear(this.m_clearMask);
        }

        let size = this.m_viewPortRect;
        this.m_fboBiltRectData[4] = this.m_fboBiltRectData[0] = size.x;
        this.m_fboBiltRectData[5] = this.m_fboBiltRectData[1] = size.y;
        this.m_fboBiltRectData[6] = this.m_fboBiltRectData[2] = size.getRight();
        this.m_fboBiltRectData[7] = this.m_fboBiltRectData[3] = size.getTop();

        if (this.m_fboViewportRectBoo) {
          this.m_fboViewportRectBoo = false;
          this.m_fboViewportRect.setTo(this.m_fboViewportRectData[0], this.m_fboViewportRectData[1], this.m_fboViewportRectData[2], this.m_fboViewportRectData[3]);
          this.reseizeFBOViewPort();
        } else {
          if (this.m_synFBOSizeWithViewport) {
            //console.log("this.m_fboSizeFactor: "+this.m_fboSizeFactor);
            this.m_fboViewportRect.setTo(0, 0, Math.floor(this.m_rtx.getFBOWidth() * this.m_fboSizeFactor), Math.floor(this.m_rtx.getFBOHeight() * this.m_fboSizeFactor));
          } else {
            if (this.m_fboBuf.isSizeChanged()) {
              this.m_fboBuf.initialize(this.m_gl, this.m_fboBuf.getWidth(), this.m_fboBuf.getHeight());
            }

            this.m_fboViewportRect.setTo(0, 0, this.m_fboBuf.getWidth(), this.m_fboBuf.getHeight());
          }

          this.reseizeFBOViewPort();
        }
      }
    }
  }

  setRenderToBackBuffer(frameBufferType = FrameBufferType_1.default.FRAMEBUFFER) {
    this.m_fboRunning = false;
    this.m_activeAttachmentTotal = 1;
    FrameBufferObject_1.default.BindToBackbuffer(this.m_gl, frameBufferType);
    this.reseizeViewPort();
  }

  bindFBOToDraw() {
    if (this.m_fboBuf != null) {
      this.m_fboBuf.bind(FrameBufferType_1.default.DRAW_FRAMEBUFFER);
    }
  }

  bindFBOToWrite() {
    if (this.m_fboBuf != null) {
      this.m_fboBuf.bind(FrameBufferType_1.default.READ_FRAMEBUFFER);
    }
  }

  setBlitFboSrcRect(px, py, pw, ph) {
    this.m_fboBiltRectData[0] = px;
    this.m_fboBiltRectData[1] = py;
    this.m_fboBiltRectData[2] = px + pw;
    this.m_fboBiltRectData[3] = py + ph;
  }

  setBlitFboDstRect(px, py, pw, ph) {
    this.m_fboBiltRectData[4] = px;
    this.m_fboBiltRectData[5] = py;
    this.m_fboBiltRectData[6] = px + pw;
    this.m_fboBiltRectData[7] = py + ph;
  }
  /**
   * @oaram			clearType, it is RenderProxy.COLOR or RenderProxy.DEPTH or RenderProxy.STENCIL or RenderProxy.DEPTH_STENCIL
  */


  blitFBO(readFBOIndex = 0, writeFBOIndex = 0, mask_bitfiled = RenderMaskBitfield_1.default.COLOR_BUFFER_BIT, filter = RenderFilter_1.default.NEAREST, clearType = 0, clearIndex = 0, dataArr = null) {
    if (readFBOIndex > 7) {
      readFBOIndex = 7;
    }

    if (writeFBOIndex > 7) {
      writeFBOIndex = 7;
    }

    if (readFBOIndex >= 0 && this.m_fboBufList[readFBOIndex] != null) {
      this.m_fboBufList[readFBOIndex].bind(FrameBufferType_1.default.READ_FRAMEBUFFER);
    } else {
      FrameBufferObject_1.default.BindToBackbuffer(this.m_gl, FrameBufferType_1.default.READ_FRAMEBUFFER);
    }

    if (writeFBOIndex >= 0 && this.m_fboBufList[writeFBOIndex] != null) {
      this.m_fboBufList[writeFBOIndex].bind(FrameBufferType_1.default.DRAW_FRAMEBUFFER);
    } else {
      FrameBufferObject_1.default.BindToBackbuffer(this.m_gl, FrameBufferType_1.default.DRAW_FRAMEBUFFER);
    }

    if (clearType > 0) {
      if (clearIndex < 0) {
        clearIndex = 0;
      } // clearType 默认是 gl.COLOR
      // clearIndex 默认是0
      // dataArr 默认值是 [0.0, 0.0, 0.0, 1.0]


      if (dataArr == null) {
        dataArr = [0.0, 0.0, 0.0, 1.0];
      }

      this.m_gl.clearBufferfv(clearType, clearIndex, dataArr);
    }

    let fs = this.m_fboBiltRectData; //copyTexSubImage2D 可以在gles2中代替下面的函数

    this.m_gl.blitFramebuffer(fs[0], fs[1], fs[2], fs[3], fs[4], fs[5], fs[6], fs[7], mask_bitfiled, filter);
  }

}

exports.default = RenderAdapter;

/***/ }),

/***/ "1264":
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

const RSEntityFlag_1 = __importDefault(__webpack_require__("11e6"));

const RenderConst_1 = __webpack_require__("e08e");

const RPOUnitBuilder_1 = __webpack_require__("eca0");

class DispEntity3DManager {
  constructor(rendererUid, RODataBuilder, rpoUnitBuilder, processBuider) {
    this.m_rpoUnitBuilder = null;
    this.m_dataBuilder = null;
    this.m_processBuider = null;
    this.m_waitList = [];
    this.m_processUidList = [];
    this.m_rendererUid = -1;
    this.m_existencetotal = 0;
    this.m_rprocess = null;
    this.m_entityManaListener = null;
    this.version = 0;
    this.m_rendererUid = rendererUid;
    this.m_dataBuilder = RODataBuilder;
    this.m_rpoUnitBuilder = rpoUnitBuilder;
    this.m_processBuider = processBuider;
  }

  setListener(entityManaListener) {
    this.m_entityManaListener = entityManaListener;
  }

  isEmpty() {
    return this.m_existencetotal < 1;
  }

  isHaveEntity() {
    return this.m_existencetotal > 0;
  }

  removeEntity(entity) {
    this.m_existencetotal--; // 从所有相关process中移除这个display

    let display = entity.getDisplay();

    if (display != null && display.__$$runit != null) {
      let puid = display.__$ruid;
      let po = this.m_rpoUnitBuilder.getRCRPObj(puid);

      if (po != null) {
        if (po.count > 0) {
          if (po.count < 2) {
            if (po.rprocessUid > -1) {
              this.m_rprocess = this.m_processBuider.getNodeByUid(po.rprocessUid);
              this.m_rprocess.removeDisp(display);
              po.rprocessUid = -1;
            }
          } else {
            let len = RPOUnitBuilder_1.RCRPObj.RenerProcessMaxTotal;

            for (let i = 0; i < len; ++i) {
              if ((po.idsFlag & 1 << i) > 0) {
                // the value of list[i] is the uid of a node;
                this.m_rprocess = this.m_processBuider.getNodeByUid(i);
                this.m_rprocess.removeDisp(display);
              }
            }
          }
        }
      } else {
        this.m_rprocess = this.m_processBuider.getNodeByUid(display.__$$runit.getRPROUid());
        this.m_rprocess.removeDisp(display);
      }

      if (po.count == 0) {
        //console.log("DispEntity3DManager::removeEntity(), remove a entity from all processes.");
        if (display.__$$rsign != RenderConst_1.DisplayRenderSign.LIVE_IN_RENDERER) {
          // error!!!
          console.error("DispEntity3DManager::removeEntity(), Error: display.__$$rsign != RODisplay.LIVE_IN_RENDERER.");
        }

        display.__$$rsign = RenderConst_1.DisplayRenderSign.NOT_IN_RENDERER; // 准备移除和当前 display 对应的 RPOUnit

        this.m_rpoUnitBuilder.restoreByUid(puid);
      } else {
        console.warn("Error: DispEntity3DManager::removeEntity(), remove a entity from all processes failed.");
      }

      this.version++;
    }

    entity.__$rseFlag = RSEntityFlag_1.default.RemoveRendererUid(entity.__$rseFlag);
    entity.__$rseFlag = RSEntityFlag_1.default.RemoveRendererLoad(entity.__$rseFlag);
    entity.__$rseFlag = RSEntityFlag_1.default.RemoveSortEnabled(entity.__$rseFlag);

    if (this.m_entityManaListener != null) {
      this.m_entityManaListener.removeFromRenderer(entity, this.m_rendererUid, -1);
    }
  }

  addEntity(entity, processUid, deferred = false) {
    if (entity != null) {
      //console.log("add entity into entity 3d manager.");
      let disp = entity.getDisplay();

      if (disp != null) {
        if (disp.__$$rsign == RenderConst_1.DisplayRenderSign.LIVE_IN_RENDERER) {
          if (!this.m_rpoUnitBuilder.testRPNodeNotExists(disp.__$ruid, processUid)) {
            //console.log("DispEntity3DManager::addEntity(), A, this display("+disp.__$ruid+") has existed in processid("+processUid+").");
            return;
          }
        }

        this.m_rprocess = this.m_processBuider.getNodeByUid(processUid);
        entity.__$rseFlag = this.m_rprocess.getSortEnabled() ? RSEntityFlag_1.default.AddSortEnabled(entity.__$rseFlag) : RSEntityFlag_1.default.RemoveSortEnabled(entity.__$rseFlag);

        if (deferred) {
          if (disp.__$$rsign == RenderConst_1.DisplayRenderSign.NOT_IN_RENDERER) {
            disp.__$$rsign = RenderConst_1.DisplayRenderSign.GO_TO_RENDERER;
          }

          entity.__$rseFlag = RSEntityFlag_1.default.AddRendererLoad(entity.__$rseFlag);
          entity.__$rseFlag = RSEntityFlag_1.default.AddRendererUid(entity.__$rseFlag, this.m_rendererUid);
          this.m_waitList.push(entity);
          this.m_processUidList.push(processUid); //console.log("DispEntity3DManager::addEntity(), B, this display("+disp+") has existed in processid("+processUid+").");
        } else {
          // 检查数据完整性
          if (this.testValidData(entity)) {
            this.ensureAdd(entity, disp, processUid);
          } else {
            //console.log("DispEntity3DManager::addEntity(), add a ready ok entity to process.");
            if (disp.__$$rsign == RenderConst_1.DisplayRenderSign.NOT_IN_RENDERER) {
              disp.__$$rsign = RenderConst_1.DisplayRenderSign.GO_TO_RENDERER;
            }

            entity.__$rseFlag = RSEntityFlag_1.default.AddRendererLoad(entity.__$rseFlag);
            this.m_waitList.push(entity);
            this.m_processUidList.push(processUid);
          }
        }
      } else {
        entity.__$rseFlag = RSEntityFlag_1.default.AddRendererUid(entity.__$rseFlag, this.m_rendererUid);
      }
    }

    return false;
  }

  testValidData(entity) {
    if (entity.getMaterial() != null && entity.hasMesh()) {
      if (entity.getMaterial().hasShaderData()) {
        return true;
      } else if (entity.getMaterial().getCodeBuf() != null) {
        entity.activeDisplay();
      }
    }

    return false;
  }

  ensureAdd(entity, disp, processUid) {
    entity.update();
    entity.__$rseFlag = RSEntityFlag_1.default.AddRendererUid(entity.__$rseFlag, this.m_rendererUid);
    entity.__$rseFlag = RSEntityFlag_1.default.RemoveRendererLoad(entity.__$rseFlag);

    entity.__$setRenderProxy(this.m_dataBuilder.getRenderProxy());

    this.m_existencetotal++;

    if (disp.__$$rsign == RenderConst_1.DisplayRenderSign.NOT_IN_RENDERER) {
      disp.__$$rsign = RenderConst_1.DisplayRenderSign.GO_TO_RENDERER;
    }

    this.m_rprocess = this.m_processBuider.getNodeByUid(processUid); //console.log("DispEntity3DManager::addEntity(), add a ready ok entity to process.");

    if (disp.__$ruid > -1) {
      this.m_rprocess.addDisp(disp);
    } else {
      if (this.m_dataBuilder.buildGpuDisp(disp, entity)) {
        this.m_rprocess.addDisp(disp);
      }
    }

    if (this.m_entityManaListener != null) {
      this.m_entityManaListener.addToRenderer(entity, this.m_rendererUid, processUid);
    }

    if (entity.getGlobalBounds() != null) {
      disp.__$$runit.bounds = entity.getGlobalBounds();
      disp.__$$runit.pos = disp.__$$runit.bounds.center;
    }

    this.version++;
  }

  updateWaitList() {
    let len = this.m_waitList.length;
    let entity = null;
    let disp = null;

    for (let i = 0; i < len; ++i) {
      entity = this.m_waitList[i];

      if ((RSEntityFlag_1.default.RENDERER_LOAD_FLAG & entity.__$rseFlag) == RSEntityFlag_1.default.RENDERER_LOAD_FLAG) {
        if (this.testValidData(entity)) {
          disp = entity.getDisplay();

          if (disp.__$$rsign == RenderConst_1.DisplayRenderSign.LIVE_IN_RENDERER) {
            if (!this.m_rpoUnitBuilder.testRPNodeNotExists(disp.__$ruid, this.m_processUidList[i])) {
              //console.log("DispEntity3DManager::update(), this display("+disp.__$ruid+") has existed in processid("+m_processUidList[i]+").");
              this.m_waitList.splice(i, 1);
              this.m_processUidList.splice(i, 1);
              --len;
              --i;
              continue;
            }
          }

          this.ensureAdd(entity, disp, this.m_processUidList[i]);
          this.m_waitList.splice(i, 1);
          this.m_processUidList.splice(i, 1);
          --len;
          --i;
        }
      } else {
        disp = entity.getDisplay();

        if (disp != null && disp.__$$rsign == RenderConst_1.DisplayRenderSign.GO_TO_RENDERER) {
          disp.__$$rsign = RenderConst_1.DisplayRenderSign.NOT_IN_RENDERER;
        } //console.log("DispEntity3DManager::update(), remove a ready entity.");


        entity.__$rseFlag = RSEntityFlag_1.default.RemoveRendererLoad(entity.__$rseFlag);
        entity.__$rseFlag = RSEntityFlag_1.default.RemoveRendererUid(entity.__$rseFlag);
        entity.__$rseFlag = RSEntityFlag_1.default.RemoveSortEnabled(entity.__$rseFlag);
        this.m_waitList.splice(i, 1);
        this.m_processUidList.splice(i, 1);
        --len;
        --i;

        if (this.m_entityManaListener != null) {
          this.m_entityManaListener.removeFromRenderer(entity, this.m_rendererUid, -1);
        }
      }
    }
  }

  update() {
    if (this.m_waitList.length > 0) {
      this.updateWaitList();
    }

    this.m_dataBuilder.update();
  }

}

exports.default = DispEntity3DManager;

/***/ }),

/***/ "13b1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

class RenderDrawMode {}

RenderDrawMode.ELEMENTS_TRIANGLES = 1;
RenderDrawMode.ELEMENTS_TRIANGLE_STRIP = 2;
RenderDrawMode.ELEMENTS_TRIANGLE_FAN = 3;
RenderDrawMode.ELEMENTS_INSTANCED_TRIANGLES = 4;
RenderDrawMode.ARRAYS_LINES = 5;
RenderDrawMode.ARRAYS_LINE_STRIP = 6;
RenderDrawMode.ARRAYS_POINTS = 7;
RenderDrawMode.ELEMENTS_LINES = 8;
RenderDrawMode.ELEMENTS_INSTANCED_LINES = 9;
RenderDrawMode.ELEMENTS_LINES_STRIP = 10;
RenderDrawMode.ELEMENTS_INSTANCED_TRIANGLES_STRIP = 11;
RenderDrawMode.ELEMENTS_INSTANCED_LINES_STRIP = 12;
RenderDrawMode.DISABLE = 0;
exports.default = RenderDrawMode;

/***/ }),

/***/ "1e15":
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

const VtxBufConst_1 = __importDefault(__webpack_require__("8a0a"));

const RCExtension_1 = __importDefault(__webpack_require__("030e"));

class ROVtxBuilder {
  constructor() {
    this.m_rcuid = 0;
    this.m_glVer = 2;
    this.m_rc = null;
    this.RGBA = 0;
    this.UNSIGNED_BYTE = 0;
    this.TRIANGLE_STRIP = 0;
    this.TRIANGLE_FAN = 0;
    this.TRIANGLES = 0;
    this.LINES = 0;
    this.LINE_STRIP = 0;
    this.UNSIGNED_SHORT = 0;
    this.UNSIGNED_INT = 0;
    this.COLOR = 0;
    this.DEPTH = 0;
    this.STENCIL = 0;
    this.DEPTH_STENCIL = 0;
    this.MAX = 0;
    this.MIN = 0;
    this.RContext = null;
    this.vroUid = 0;
    this.rioUid = 0;
  }
  /**
   * @returns return system gpu context
   */


  getRC() {
    return this.m_rc;
  }
  /**
   * @returns return renderer context unique id
   */


  getRCUid() {
    return this.m_rcuid;
  }

  createBuf() {
    return this.m_rc.createBuffer();
  }

  deleteBuf(buf) {
    this.m_rc.deleteBuffer(buf);
  }

  bindArrBuf(buf) {
    this.m_rc.bindBuffer(this.m_rc.ARRAY_BUFFER, buf);
  }

  bindEleBuf(buf) {
    this.m_rc.bindBuffer(this.m_rc.ELEMENT_ARRAY_BUFFER, buf);
  }

  arrBufSubData(float32Arr, offset) {
    this.m_rc.bufferSubData(this.m_rc.ARRAY_BUFFER, offset, float32Arr);
  }

  arrBufData(float32Arr, usage) {
    this.m_rc.bufferData(this.m_rc.ARRAY_BUFFER, float32Arr, VtxBufConst_1.default.ToGL(this.m_rc, usage));
  }

  eleBufSubData(uintDataArr, offset) {
    this.m_rc.bufferSubData(this.m_rc.ELEMENT_ARRAY_BUFFER, offset, uintDataArr);
  }

  eleBufData(uintDataArr, usage) {
    this.m_rc.bufferData(this.m_rc.ELEMENT_ARRAY_BUFFER, uintDataArr, VtxBufConst_1.default.ToGL(this.m_rc, usage));
  }

  arrBufDataMem(bytesSize, usage) {
    this.m_rc.bufferData(this.m_rc.ARRAY_BUFFER, bytesSize, VtxBufConst_1.default.ToGL(this.m_rc, usage));
  }

  eleBufDataMem(bytesSize, usage) {
    this.m_rc.bufferData(this.m_rc.ELEMENT_ARRAY_BUFFER, bytesSize, VtxBufConst_1.default.ToGL(this.m_rc, usage));
  }

  useVtxAttribsPtrTypeFloat(shdp, buf, attribTypes, attribTypesLen, wholeOffsetList, wholeStride) {
    this.m_rc.bindBuffer(this.m_rc.ARRAY_BUFFER, buf);

    for (let i = 0; i < attribTypesLen; ++i) {
      shdp.vertexAttribPointerTypeFloat(attribTypes[i], wholeStride, wholeOffsetList[i]);
    }
  }

  useVtxAttribsPtrTypeFloatMulti(shdp, bufs, attribTypes, attribTypesLen, wholeOffsetList, wholeStride) {
    for (let i = 0; i < attribTypesLen; ++i) {
      this.m_rc.bindBuffer(this.m_rc.ARRAY_BUFFER, bufs[i]);
      shdp.vertexAttribPointerTypeFloat(attribTypes[i], wholeStride, wholeOffsetList[i]);
    }
  }

  createVertexArray() {
    let vao = null;

    if (this.m_glVer == 2) {
      vao = this.m_rc.createVertexArray();
    } else {
      vao = RCExtension_1.default.OES_vertex_array_object.createVertexArrayOES();
    }

    return vao;
  }

  bindVertexArray(vao) {
    if (this.m_glVer == 2) {
      this.m_rc.bindVertexArray(vao);
    } else {
      RCExtension_1.default.OES_vertex_array_object.bindVertexArrayOES(vao);
    }

    return vao;
  }

  deleteVertexArray(vao) {
    if (this.m_glVer == 2) {
      this.m_rc.deleteVertexArray(vao);
    } else {
      RCExtension_1.default.OES_vertex_array_object.deleteVertexArrayOES(vao);
    }
  }

  testVROUid(vroUid) {
    if (this.vroUid != vroUid) {
      this.vroUid = vroUid;
      return true;
    }

    return false;
  }

  testRIOUid(rioUid) {
    if (this.rioUid != rioUid) {
      this.rioUid = rioUid;
      return true;
    }

    return false;
  }

  initialize(rcuid, gl, glVer) {
    this.m_rc = gl;
    this.m_rcuid = rcuid;
    this.m_glVer = glVer;
    let selfT = this;
    selfT.RGBA = gl.RGBA;
    selfT.UNSIGNED_BYTE = gl.UNSIGNED_BYTE;
    selfT.TRIANGLE_STRIP = gl.TRIANGLE_STRIP;
    selfT.TRIANGLE_FAN = gl.TRIANGLE_FAN;
    selfT.TRIANGLES = gl.TRIANGLES;
    selfT.LINES = this.m_rc.LINES;
    selfT.LINE_STRIP = gl.LINE_STRIP;
    selfT.UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
    selfT.UNSIGNED_INT = gl.UNSIGNED_INT;
    selfT.COLOR = gl.COLOR;
    selfT.DEPTH = gl.DEPTH;
    selfT.STENCIL = gl.STENCIL;
    selfT.DEPTH_STENCIL = gl.DEPTH_STENCIL;

    if (this.m_glVer > 1) {
      selfT.MIN = gl.MIN;
      selfT.MAX = gl.MAX;
    } else {
      selfT.MIN = RCExtension_1.default.EXT_blend_minmax.MIN_EXT;
      selfT.MAX = RCExtension_1.default.EXT_blend_minmax.MAX_EXT;
    }

    selfT.RContext = gl;
  }

  renderBegin() {
    this.vroUid = -2;
    this.rioUid = -3;
  }

}

exports.default = ROVtxBuilder;

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

/***/ "1f32":
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

/***/ }),

/***/ "1f61":
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

const RCExtension_1 = __importDefault(__webpack_require__("030e"));

class TextureDataType {
  static ToGL(gl, type) {
    switch (type) {
      case TextureDataType.UNSIGNED_BYTE:
        return gl.UNSIGNED_BYTE;
        break;

      case TextureDataType.BYTE:
        return gl.BYTE;
        break;

      case TextureDataType.FLOAT:
        return gl.FLOAT;
        break;

      case TextureDataType.HALF_FLOAT:
        return gl.HALF_FLOAT;
        break;

      case TextureDataType.HALF_FLOAT_OES:
        if (RCExtension_1.default.OES_texture_half_float != null) return RCExtension_1.default.OES_texture_half_float.HALF_FLOAT_OES;
        return gl.FLOAT;
        break;

      case TextureDataType.UNSIGNED_SHORT:
        return gl.UNSIGNED_SHORT;
        break;

      case TextureDataType.UNSIGNED_INT:
        return gl.UNSIGNED_INT;
        break;

      case TextureDataType.UNSIGNED_SHORT_5_6_5:
        return gl.UNSIGNED_SHORT_5_6_5;
        break;

      case TextureDataType.UNSIGNED_SHORT_4_4_4_4:
        return gl.UNSIGNED_SHORT_4_4_4_4;
        break;

      case TextureDataType.UNSIGNED_SHORT_5_5_5_1:
        return gl.UNSIGNED_SHORT_5_5_5_1;
        break;

      case TextureDataType.UNSIGNED_INT_24_8_WEBGL:
        return RCExtension_1.default.WEBGL_depth_texture.UNSIGNED_INT_24_8_WEBGL;
        break;

      default:
        break;
    }

    return gl.UNSIGNED_BYTE;
  }

}

TextureDataType.UNSIGNED_BYTE = 1108;
TextureDataType.UNSIGNED_SHORT = 1109;
TextureDataType.UNSIGNED_INT = 1110;
TextureDataType.BYTE = 1111;
TextureDataType.FLOAT = 1211;
TextureDataType.HALF_FLOAT = 1212;
TextureDataType.HALF_FLOAT_OES = 1213;
TextureDataType.UNSIGNED_SHORT_5_6_5 = 1214;
TextureDataType.UNSIGNED_SHORT_4_4_4_4 = 1215;
TextureDataType.UNSIGNED_SHORT_5_5_5_1 = 1216;
TextureDataType.UNSIGNED_INT_24_8_WEBGL = 1217;
exports.default = TextureDataType;

/***/ }),

/***/ "2560":
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

class CameraUniformBuilder {
  create(rc, shdp) {
    let cam = rc.getCamera();

    if (shdp.hasUniformByName(UniformConst_1.default.CameraViewMatUNS) && shdp.hasUniformByName(UniformConst_1.default.CameraProjectiveMatUNS)) {
      return rc.uniformContext.createShaderGlobalUniformFromProbe(cam.matUProbe, "u_viewAndProjMat", [UniformConst_1.default.CameraViewMatUNS, UniformConst_1.default.CameraProjectiveMatUNS]);
    } else if (shdp.hasUniformByName(UniformConst_1.default.CameraViewMatUNS)) {
      return rc.uniformContext.createShaderGlobalUniformFromProbeAt(cam.matUProbe, "u_viewMat", [UniformConst_1.default.CameraViewMatUNS], 0);
    } else if (shdp.hasUniformByName(UniformConst_1.default.CameraProjectiveMatUNS)) {
      return rc.uniformContext.createShaderGlobalUniformFromProbeAt(cam.matUProbe, "u_projMat", [UniformConst_1.default.CameraProjectiveMatUNS], 1);
    }

    return null;
  }

  getIDNS() {
    return "CameraUniformBuilder";
  }

}

exports.default = CameraUniformBuilder;

/***/ }),

/***/ "264c":
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

const PassProcess_1 = __importDefault(__webpack_require__("34cd"));

class RenderSortBlock {
  constructor(shader) {
    this.m_begin = null;
    this.m_end = null;
    this.m_next = null;
    this.m_node = null;
    this.m_nodes = [];
    this.m_nodesTotal = 0;
    this.m_shader = null;
    this.m_renderTotal = 0;
    this.m_sorter = null;
    this.sortEnabled = true;
    this.m_passProc = new PassProcess_1.default();
    this.m_shdUpdate = false;
    this.m_shader = shader;
  }

  setSorter(sorter) {
    this.m_sorter = sorter;
  }

  showInfo() {
    let info = "";
    let next = this.m_begin;

    while (next != null) {
      //info += "("+next.unit.value+","+next.uid+"),";
      info += next.unit.value + ",";
      next = next.next;
    }

    console.log("RenderSortBlock info: \n", info);
  }

  clear() {
    if (this.m_shader != null) {
      if (this.m_nodes.length > 0) this.m_nodes = [];
      let next = this.m_begin;
      let curr = null;

      while (next != null) {
        curr = next;
        next = next.next;
        curr.prev = null;
        curr.next = null;
      }

      this.m_begin = this.m_end = null;
      this.m_nodesTotal = 0;
      this.m_renderTotal = 0;
      this.sortEnabled = true;
      this.m_shader = null;
    }

    this.m_sorter = null;
  }

  update() {
    if (this.sortEnabled) {
      this.sort();
    }
  }

  run(rc) {
    this.m_shader.resetUniform();
    let unit = null;
    let nodes = this.m_nodes;
    this.m_shdUpdate = false; // let info = "";
    // console.log("sortBlock..");

    for (let i = 0; i < this.m_renderTotal; ++i) {
      unit = nodes[i];
      this.m_shader.bindToGpu(unit.shdUid);
      unit.updateVtx();

      if (unit.drawEnabled) {
        if (unit.rgraph && unit.rgraph.isEnabled()) {
          const proc = this.m_passProc;
          proc.units = [unit];
          proc.rc = rc;
          proc.vtxFlag = true;
          proc.texFlag = true;
          unit.rgraph.run(proc);
          this.m_shdUpdate = true;
        } else {
          if (this.m_shdUpdate) {
            unit.applyShader(true);
            this.m_shdUpdate = false;
          }

          unit.run(rc);
          unit.draw(rc);
        }
      } // info += unit.value+",";

    } //console.log(info);

  }

  runLockMaterial(rc) {
    this.m_shader.resetUniform();
    let unit = null;
    let nodes = this.m_nodes;

    for (let i = 0; i < this.m_renderTotal; ++i) {
      unit = nodes[i];
      this.m_shader.bindToGpu(unit.shdUid);
      unit.updateVtx();

      if (unit.drawEnabled) {
        unit.vro.run();
        unit.runLockMaterial2(null);
        unit.draw(rc);
      }
    }
  }

  sort() {
    if (this.m_nodesTotal > 0) {
      // 整个sort执行过程放在渲染运行时渲染执行阶段是不妥的,但是目前还没有好办法
      // 理想的情况是运行时不会被复杂计算打断，复杂计算应该再渲染执行之前完成
      let next = this.m_begin;

      if (this.m_nodes.length < this.m_nodesTotal) {
        this.m_nodes = new Array(Math.round(this.m_nodesTotal * 1.1) + 1);
      }

      let i = 0;

      while (next != null) {
        if (next.drawEnabled && next.unit.drawEnabled) {
          this.m_nodes[i] = next.unit;
          ++i;
        }

        next = next.next;
      }

      this.m_renderTotal = i;
      let flat = 0;

      if (this.m_sorter != null) {
        flat = this.m_sorter.sortRODisplay(this.m_nodes, i);
      }

      if (flat < 1) {
        this.snsort(0, i - 1);
      }
    }
  }

  sorting(low, high) {
    let arr = this.m_nodes;
    this.m_node = arr[low];
    let pvalue = this.m_node.value;

    while (low < high) {
      while (low < high && arr[high].value >= pvalue) {
        --high;
      }

      arr[low] = arr[high];

      while (low < high && arr[low].value <= pvalue) {
        ++low;
      }

      arr[high] = arr[low];
    }

    arr[low] = this.m_node;
    return low;
  }

  snsort(low, high) {
    if (low < high) {
      let pos = this.sorting(low, high);
      this.snsort(low, pos - 1);
      this.snsort(pos + 1, high);
    }
  }

  getNodesTotal() {
    return this.m_nodesTotal;
  }

  getBegin() {
    this.m_next = this.m_begin;
    return this.m_begin;
  }

  getNext() {
    if (this.m_next != null) {
      this.m_next = this.m_next.next;
    }

    return this.m_next;
  }

  isEmpty() {
    return this.m_nodesTotal < 1; // return this.m_begin == null;
  }

  addNode(node) {
    //console.log("sort add node: ",node);
    if (node.prev == null && node.next == null) {
      if (this.m_begin == null) {
        this.m_end = this.m_begin = node;
      } else {
        if (this.m_end.prev != null) {
          this.m_end.next = node;
          node.prev = this.m_end;
          this.m_end = node;
        } else {
          this.m_begin.next = node;
          node.prev = this.m_end;
          this.m_end = node;
        }
      }

      this.m_end.next = null;
      this.m_nodesTotal++; //console.log("sort add node,this.m_nodesTotal: ",this.m_nodesTotal);
    }
  }

  removeNode(node) {
    //console.log("sort remove node: ",node);
    if (node.prev != null || node.next != null || node == this.m_begin) {
      if (node == this.m_begin) {
        if (node == this.m_end) {
          this.m_begin = this.m_end = null;
        } else {
          this.m_begin = node.next;
          this.m_begin.prev = null;
        }
      } else if (node == this.m_end) {
        this.m_end = node.prev;
        this.m_end.next = null;
      } else {
        node.next.prev = node.prev;
        node.prev.next = node.next;
      }

      node.prev = null;
      node.next = null;
      this.m_nodesTotal--; //console.log("sort remove node,this.m_nodesTotal: ",this.m_nodesTotal);
    }
  }

}

exports.default = RenderSortBlock;

/***/ }),

/***/ "265e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2019-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/
// 真正被高频运行的渲染管线中的被执行对象

Object.defineProperty(exports, "__esModule", {
  value: true
}); // 为了渲染循环执行中持有RPOUnit和对应的Disp

class RPONode {
  constructor() {
    this.__$ruid = -1;
    this.drawEnabled = true;
    this.uid = -1;
    this.index = -1;
    this.shdUid = -1;
    this.vtxUid = -1;
    this.texMid = -1;
    this.rtokey = -1;
    this.prev = null;
    this.next = null;
    this.unit = null;
    this.vro = null;
    this.tro = null;
    this.rvroI = -1;
    this.rtroI = -1;
  }

  setValue(value) {
    this.unit.value = value;
  }

  isVsible() {
    return this.unit == null || this.unit.drawEnabled;
  }

  updateData() {
    let p = this.unit; // this.insCount = p.insCount;

    this.vtxUid = p.vtxUid;
    this.vro = p.vro; // material info etc.

    this.shdUid = p.shdUid;
    this.texMid = p.texMid;
    this.tro = p.tro;
  }

  reset() {
    this.drawEnabled = true;
    this.uid = -1;
    this.index = -1; // this.insCount = 0;

    this.shdUid = -1;
    this.vtxUid = -1;
    this.texMid = -1;
    this.rtokey = -1;
    this.unit = null;
    this.vro = null;
    this.tro = null;
    this.prev = null;
    this.next = null;
  }

}

exports.default = RPONode;

/***/ }),

/***/ "29ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class RendererState {
  static CreateBlendMode(name, srcColor, dstColor, blendEquation = 0) {
    return RendererState.rstb.createBlendMode(name, srcColor, dstColor, blendEquation);
  }

  static CreateBlendModeSeparate(name, srcColor, dstColor, srcAlpha = 0, dstAlpha = 0, blendEquation = 0) {
    return RendererState.rstb.createBlendModeSeparate(name, srcColor, dstColor, srcAlpha, dstAlpha, blendEquation);
  }

  static CreateRenderState(objName, cullFaceMode, blendMode, depthTestMode) {
    return RendererState.rstb.createRenderState(objName, cullFaceMode, blendMode, depthTestMode);
  }

  static CreateRenderColorMask(objName, rBoo, gBoo, bBoo, aBoo) {
    return RendererState.rstb.createRenderColorMask(objName, rBoo, gBoo, bBoo, aBoo);
  }

  static GetRenderStateByName(objName) {
    return RendererState.rstb.getRenderStateByName(objName);
  }

  static GetRenderColorMaskByName(objName) {
    return RendererState.rstb.getRenderColorMaskByName(objName);
  }

  static UnlockBlendMode() {
    RendererState.rstb.unlockBlendMode();
  }

  static LockBlendMode(cullFaceMode) {
    RendererState.rstb.lockBlendMode(cullFaceMode);
  }

  static UnlockDepthTestMode() {
    RendererState.rstb.unlockDepthTestMode();
  }

  static LockDepthTestMode(depthTestMode) {
    RendererState.rstb.lockDepthTestMode(depthTestMode);
  }

  static ResetState() {
    RendererState.rstb.resetState();
  }

  static Reset(context) {
    RendererState.rstb.reset(context);
  }

  static ResetInfo() {}

  static SetDepthTestEnable(enable) {
    RendererState.rstb.setDepthTestEnable(enable);
  }

  static SetBlendEnable(enable) {
    RendererState.rstb.setBlendEnable(enable);
  }

}

exports.default = RendererState;

/***/ }),

/***/ "2be1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2019-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class PoolNodeBuilder {
  constructor() {
    this.m_nodesTotal = 0;
    this.m_nodes = [];
    this.m_flags = [];
    this.m_freeIdList = [];
  }
  /**
   * the sub class override this function, for real implement.
   */


  createNode() {
    return null;
  }
  /**
   * the sub class override this function, for real implement.
   */


  restoreUid(uid) {}

  getFreeId() {
    if (this.m_freeIdList.length > 0) {
      return this.m_freeIdList.pop();
    }

    return -1;
  }

  getNodeByUid(uid) {
    return this.m_nodes[uid];
  }

  create() {
    let node = null;
    let index = this.getFreeId();

    if (index >= 0) {
      node = this.m_nodes[index];
      node.uid = index;
      this.m_flags[index] = PoolNodeBuilder.S_BUSY;
    } else {
      // create a new nodeIndex
      node = this.createNode();
      this.m_nodes.push(node);
      this.m_flags.push(PoolNodeBuilder.S_BUSY);
      node.uid = this.m_nodesTotal;
      this.m_nodesTotal++;
    }

    return node;
  }

  restore(pnode) {
    if (pnode != null && pnode.uid >= 0 && this.m_flags[pnode.uid] == PoolNodeBuilder.S_BUSY) {
      this.restoreUid(pnode.uid);
      this.m_freeIdList.push(pnode.uid);
      this.m_flags[pnode.uid] = PoolNodeBuilder.S_FREE;
      pnode.reset();
      return true;
    }

    return false;
  }

  restoreByUid(uid) {
    if (uid >= 0 && uid < this.m_nodesTotal && this.m_flags[uid] == PoolNodeBuilder.S_BUSY) {
      this.restoreUid(uid);
      this.m_freeIdList.push(uid);
      this.m_flags[uid] = PoolNodeBuilder.S_FREE;
      this.m_nodes[uid].reset();
      return true;
    }

    return false;
  }

}

PoolNodeBuilder.S_BUSY = 1;
PoolNodeBuilder.S_FREE = 0;
exports.default = PoolNodeBuilder;

/***/ }),

/***/ "3024":
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

const ShaderUniformProbe_1 = __importDefault(__webpack_require__("3077"));

class UniformVec4Probe extends ShaderUniformProbe_1.default {
  constructor(slot, vec4Total) {
    super(slot);
    this.m_datafs = null;
    this.m_vec4Total = 1;
    if (vec4Total < 1) vec4Total = 1;
    this.m_vec4Total = vec4Total;
    this.m_datafs = new Float32Array(4 * vec4Total);
    this.addVec4Data(this.m_datafs, this.m_vec4Total);
  } // bindSlotAt(i: number): void {
  //     super.bindSlotAt(i);
  //     this.addVec4Data(this.m_datafs, this.m_vec4Total);
  // }


  destroy() {
    super.destroy();
    this.m_datafs = null;
  }

}

exports.default = UniformVec4Probe;

/***/ }),

/***/ "3077":
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

const MaterialConst_1 = __importDefault(__webpack_require__("644c"));

class ShaderUniformProbe {
  constructor(slot) {
    this.m_uid = ShaderUniformProbe.s_uid++;
    this.m_slot = null;
    this.m_fsList = null; // 当前probe中的数据在slot中的结束位置序号

    this.m_fsIndex = 0; // 当前probe在slot中的起始位置序号

    this.m_slotBeginIndex = -1;
    this.rst = -1;
    this.uniformsTotal = 0;
    this.uniformNames = null; // array -> [SHADER_MAT4, SHADER_VEC3]

    this.uniformTypes = null; // array -> [1, 3], the "3" is uniform Array,length is 3

    this.dataSizeList = null;
    this.bindSlot(slot);
  }

  bindSlot(slot) {
    if (this.rst >= 0) {
      this.reset();
    }

    if (this.m_fsList == null) {
      this.m_fsList = [];
      this.uniformTypes = [];
      this.dataSizeList = [];
    }

    this.m_slot = slot;
    this.rst = 1;
    this.m_slotBeginIndex = slot.index;
    this.m_fsIndex = slot.index;
  }

  getUid() {
    return this.m_uid;
  }
  /**
   * @return 获取当前probe在slot中的起始位置序号
   */


  getSlotBeginIndex() {
    return this.m_slotBeginIndex;
  }
  /**
   * @returns return renderer context unique id
   */


  getRCUid() {
    return this.m_slot.getRCUid();
  }

  getFS32At(i) {
    return this.m_fsList[i];
  }

  setFS32At(fs32, i) {
    this.m_fsList[i] = fs32;
  }

  setVec4DataAt(index, f0, f1, f2, f3) {
    let fs = this.m_fsList[index];
    fs[0] = f0;
    fs[1] = f1;
    fs[2] = f2;
    fs[3] = f3;
  }

  setVec4Data(f0, f1, f2, f3) {
    let fs = this.m_fsList[0];
    fs[0] = f0;
    fs[1] = f1;
    fs[2] = f2;
    fs[3] = f3;
  }

  setVec4DataAtWithArr4(index, arr4) {
    this.m_fsList[index].set(arr4, 0);
  }

  setVec4DataWithArr4(arr4) {
    this.m_fsList[0].set(arr4, 0);
  }

  addVec4Data(f32, vec4Total) {
    //console.log("addVec4Data() slot("+this.m_slot.getUid()+")");
    if (vec4Total < f32.length / 4) {
      console.warn("vec4 uniform array total are not equal to the vec4Total value.");
    }

    this.m_fsList.push(f32);
    this.uniformTypes.push(MaterialConst_1.default.SHADER_VEC4);
    this.dataSizeList.push(vec4Total);
    this.m_slot.dataList[this.m_fsIndex] = f32;
    this.m_fsIndex++;
    this.uniformsTotal++;
    this.m_slot.index++;
  }

  addMat4Data(f32, mat4Total) {
    //console.log("addMat4Data() slot("+this.m_slot.getUid()+")");
    this.m_fsList.push(f32);
    this.uniformTypes.push(MaterialConst_1.default.SHADER_MAT4);
    this.dataSizeList.push(mat4Total);
    this.m_slot.dataList[this.m_fsIndex] = f32;
    this.m_fsIndex++;
    this.uniformsTotal++;
    this.m_slot.index++;
  }

  isEnabled() {
    return this.rst >= 0;
  }

  update() {
    //如果溢出，可能有问题
    //if(this.rst > 0xffffff) this.rst = Math.round(Math.random() * 1000) + 100;
    this.rst++;

    if (this.uniformsTotal < 2) {
      this.m_slot.flagList[this.m_slotBeginIndex] = this.rst;
    } else {
      for (let i = this.m_slotBeginIndex; i <= this.m_fsIndex; ++i) {
        this.m_slot.flagList[i] = this.rst;
      }
    } // if (this.m_uid == 5) {
    //     console.log("this.m_slot.dataList: ", this.m_slot.dataList);
    //     console.log("this.m_fsList: ", this.m_fsList);
    // }
    //console.log("this.m_slot.dataList");

  }

  reset() {
    this.rst = -1;
    this.m_slotBeginIndex = -1;
    this.uniformsTotal = 0;
    this.m_fsIndex = 0;

    if (this.m_fsList != null) {
      this.m_fsList = null;
      this.uniformTypes = null;
      this.dataSizeList = null;
    }

    this.m_slot = null;
  }

  destroy() {
    this.reset();
  }

}

ShaderUniformProbe.s_uid = 0;
exports.default = ShaderUniformProbe;

/***/ }),

/***/ "34cd":
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

const PassMaterialWrapper_1 = __importDefault(__webpack_require__("fd5e"));

class PassProcess {
  constructor() {
    this.rc = null;
    this.vtxFlag = false;
    this.texFlag = false;
    this.units = null;
    this.materials = null;
  }

  createMaterialWrapper(m, hostRUnit) {
    const rc = this.rc;
    let w = new PassMaterialWrapper_1.default();
    w.rdataBuilder = rc.rdataBuilder;
    w.hostUnit = hostRUnit;
    w.bindMaterial(m);
    return w;
  }

  run() {
    const units = this.units;

    if (units != null) {
      const rc = this.rc;
      let vtxFlag = this.vtxFlag;
      let texFlag = this.texFlag;
      const mts = this.materials;

      if (mts == null || mts.length < 1) {
        for (let i = 0, ln = units.length; i < ln; ++i) {
          const unit = units[i];
          vtxFlag = unit.updateVtx() || vtxFlag;

          if (vtxFlag) {
            unit.vro.run();
            vtxFlag = false;
          }

          if (texFlag) {
            unit.tro.run();
            texFlag = false;
          }

          unit.run2(rc);
          unit.draw(rc);
        }
      } else {
        const mtln = mts.length;

        for (let i = 0, ln = units.length; i < ln; ++i) {
          const mt = i < mtln ? mts[i] : mts[mtln - 1]; // console.log("mt.isEnabled(): ", mt.isEnabled());

          if (mt.isEnabled()) {
            const unit = units[i];
            unit.copyMaterialFrom(mt.unit);
            unit.applyShader(true);
            vtxFlag = unit.updateVtx() || vtxFlag;

            if (vtxFlag) {
              unit.vro.run();
              vtxFlag = false;
            }

            unit.tro.run();
            unit.run2(rc);
            unit.draw(rc);
          }
        }
      }
    }
  }

  destroy() {
    this.materials = null;

    if (this.units != null) {
      this.units = null;
    }
  }

}

exports.default = PassProcess;

/***/ }),

/***/ "36cb":
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

const RenderConst_1 = __webpack_require__("e08e");

const UniformConst_1 = __importDefault(__webpack_require__("ab73"));

const TextureRenderObj_1 = __webpack_require__("b02c");

const ShdUniformTool_1 = __importDefault(__webpack_require__("4f27"));

const RenderShader_1 = __importDefault(__webpack_require__("b30a"));

const ROTransPool_1 = __importDefault(__webpack_require__("9156"));

const GpuVtxObject_1 = __webpack_require__("670e");

const EmptyVDRInfo_1 = __importDefault(__webpack_require__("744d"));
/**
 * 本类实现了将 系统内存数据 合成为 渲染运行时系统所需的数据资源(包括: 渲染运行时管理数据和显存数据)
 */


class RODataBuilder {
  constructor(shdProgramBuilder) {
    this.m_emptyTRO = null;
    this.m_shader = null;
    this.m_rpoUnitBuilder = null;
    this.m_processBuider = null;
    this.m_roVtxBuild = null;
    this.m_rc = null;
    this.m_vtxRes = null;
    this.m_texRes = null;
    this.m_deferredVbufs = [];
    this.m_deferredTROs = [];
    this.m_deferredTextures = [];
    this.m_haveDeferredUpdate = false;
    this.m_shdpBuilder = null; // build vtx gpu data

    this.m_emptyVDRInfo = new EmptyVDRInfo_1.default();
    this.m_shdpBuilder = shdProgramBuilder;
  }

  initialize(rc, rpoUnitBuilder, processBuider, roVtxBuild) {
    if (this.m_shader == null) {
      this.m_rc = rc;
      this.m_vtxRes = rc.Vertex;
      this.m_texRes = rc.Texture;
      this.m_shader = new RenderShader_1.default(rc.getRCUid(), rc.getRC(), rc.getRenderAdapter(), this.m_shdpBuilder);
      rc.rshader = this.m_shader;
      rc.rdataBuilder = this;
      this.m_rpoUnitBuilder = rpoUnitBuilder;
      this.m_processBuider = processBuider;
      this.m_roVtxBuild = roVtxBuild;
      this.m_emptyTRO = new TextureRenderObj_1.EmptyTexRenderObj(this.m_texRes);
      this.m_shdUniformTool = new ShdUniformTool_1.default();
      this.m_shdUniformTool.initialize();
    }
  }

  getRenderProxy() {
    return this.m_rc;
  }

  getRenderShader() {
    return this.m_shader;
  }

  getTextureResource() {
    return this.m_texRes;
  }
  /**
   * update single texture self system memory data to gpu memory data
   */


  updateTextureData(textureProxy, deferred) {
    if (this.m_texRes.hasResUid(textureProxy.getResUid())) {
      if (deferred) {
        this.m_deferredTextures.push(textureProxy);
        this.m_haveDeferredUpdate = true;
      } else {
        textureProxy.__$updateToGpu(this.m_texRes);
      }
    }
  }
  /**
   * update display entity texture list  system memory data to gpu memory data
   */


  updateDispTRO(disp, deferred) {
    if (disp.__$ruid > -1) {
      if (deferred) {
        this.m_deferredTROs.push(disp);
        this.m_haveDeferredUpdate = true;
      } else {
        this.updateTextureTRO(disp);
      }
    }
  }

  createTRO(texList, texTotal) {
    if (texList) {
      for (let i = 0; i < texList.length; ++i) {
        if (texList[i]) {
          texList[i].__$setRenderProxy(this.m_rc);
        }
      }

      return TextureRenderObj_1.TextureRenderObj.Create(this.m_texRes, texList, texTotal);
    }

    return null;
  }

  updateTextureTRO(disp) {
    if (disp.__$$runit != null) {
      let material = disp.getMaterial();

      if (material != null) {
        let texRes = this.m_texRes;
        let runit = disp.__$$runit;
        let tro = TextureRenderObj_1.TextureRenderObj.GetByMid(texRes.getRCUid(), material.__$troMid);

        if (runit.tro != null && (tro == null || runit.tro.getMid() != tro.getMid())) {
          let shdp = this.m_shdpBuilder.findShdProgramByShdData(material.getShaderData());

          if (shdp != null) {
            if (shdp.getTexTotal() > 0) {
              if (tro == null) {
                tro = this.createTRO(material.getTextureList(), shdp.getTexTotal());
              }

              if (runit.tro != tro) {
                if (runit.tro != null) {
                  runit.tro.__$detachThis();
                }

                runit.tro = tro;

                tro.__$attachThis();

                runit.texMid = runit.tro.getMid();
                this.m_processBuider.rejoinRunitForTro(runit);
                material.__$troMid = runit.tro.getMid();
              }
            } else {
              if (runit.tro != this.m_emptyTRO) {
                if (runit.tro != null) {
                  runit.tro.__$detachThis();
                }

                runit.tro = this.m_emptyTRO;
                runit.texMid = runit.tro.getMid();
                this.m_processBuider.rejoinRunitForTro(runit);
                material.__$troMid = runit.texMid;
              }
            }
          }
        }
      }
    }
  }

  updateDispMaterial(runit, material, disp = null) {
    let shdp = null; // if (disp.__$ruid >= 0) {

    const rc = this.m_rc; // let material = disp.getMaterial();

    if (material) {
      if (material.getShaderData() == null) {
        let texList = material.getTextureList();
        let texEnabled = texList != null && texList != null && texList.length > 0;
        material.initializeByCodeBuf(texEnabled);
      }

      shdp = this.m_shdpBuilder.create(material.getShaderData());
      shdp.upload(rc.RContext, rc.getUid());
      runit.shdUid = shdp.getUid();
      let tro = null;

      if (shdp.getTexTotal() > 0) {
        tro = this.createTRO(material.getTextureList(), shdp.getTexTotal());

        if (runit.tro != tro) {
          if (runit.tro != null) {
            runit.tro.__$detachThis();
          }

          runit.tro = tro;

          tro.__$attachThis();

          runit.texMid = runit.tro.getMid();
          if (runit.__$rprouid >= 0) this.m_processBuider.rejoinRunitForTro(runit);
          material.__$troMid = runit.tro.getMid();
        }
      } else {
        if (runit.tro != this.m_emptyTRO) {
          if (runit.tro != null) {
            runit.tro.__$detachThis();
          }

          runit.tro = this.m_emptyTRO;
          runit.texMid = runit.tro.getMid();
          if (runit.__$rprouid >= 0) this.m_processBuider.rejoinRunitForTro(runit);
          material.__$troMid = runit.texMid;
        }
      }

      if (this.m_shader.getSharedUniformByShd(shdp) == null) {
        let sharedMList = this.createsharedMList(material, shdp);

        if (sharedMList) {
          for (let i = 0; i < sharedMList.length; ++i) {
            sharedMList[i].program = shdp.getGPUProgram();
          }
        }

        this.m_shader.setSharedUniformByShd(shdp, this.m_shdUniformTool.buildShared(sharedMList, rc, shdp));
      }

      let hasTrans = shdp.hasUniformByName(UniformConst_1.default.LocalTransformMatUNS);

      if (material.__$uniform == null) {
        material.__$uniform = this.m_shdUniformTool.buildLocalFromData(material.createSelfUniformData(), shdp);
      }

      const dispFlag = disp && disp.__$ruid >= 0;

      if (hasTrans) {
        if (dispFlag && disp.getTransform() != null) {
          //console.log("disp.getTransform().getUid(): "+disp.getTransform().getUid());
          runit.transUniform = ROTransPool_1.default.GetTransUniform(disp.getTransform(), shdp); //console.log("RODataBuilder::updateDispMaterial(), get runit.transUniform: ",runit.transUniform);
        }
      } // console.log("RODataBuilder::updateDispMaterial(), runit: ",runit);
      // console.log("RODataBuilder::updateDispMaterial(), runit.uid: ",runit.getUid());
      // console.log("RODataBuilder::updateDispMaterial(), runit.transUniform == null: ",runit.transUniform == null);


      if (dispFlag) {
        if (runit.transUniform == null) {
          runit.transUniform = this.m_shdUniformTool.buildLocalFromTransformV(hasTrans ? disp.getMatrixFS32() : null, shdp);
          ROTransPool_1.default.SetTransUniform(disp.getTransform(), runit.transUniform, shdp);
        } else {
          runit.transUniform = this.m_shdUniformTool.updateLocalFromTransformV(runit.transUniform, hasTrans ? disp.getMatrixFS32() : null, shdp);
        }
      }

      runit.polygonOffset = material.getPolygonOffset();
      runit.uniform = material.__$uniform;
    } else {
      console.error("Error RODataBuilder::updateDispMaterial(), material is null !!!");
    } // }


    return shdp;
  }

  updateVtxDataToGpuByUid(vtxUid, deferred) {
    this.m_vtxRes.updateDataToGpu(vtxUid, deferred);
  }
  /**
   * update vertex system memory data to gpu memory data
   */


  updateDispVbuf(disp, deferred) {
    if (disp.__$ruid > -1) {
      if (deferred) {
        this.m_deferredVbufs.push(disp);
        this.m_haveDeferredUpdate = true;
      } else {
        let runit = disp.__$$runit;

        if (runit != null && runit.vtxUid != disp.vbuf.getUid()) {
          let oldResUid = runit.vtxUid;
          let vtxRes = this.m_vtxRes;

          if (vtxRes.hasResUid(oldResUid)) {
            vtxRes.__$detachRes(oldResUid);
          }

          runit.vro.__$detachThis(); // build vtx gpu data


          this.buildVtxRes(disp, runit, this.m_shdpBuilder.findShdProgramByUid(runit.shdUid));
          if (runit.__$rprouid >= 0) this.m_processBuider.rejoinRunitForVro(runit);
        }
      }
    }
  }

  buildVtxRes(disp, runit, shdp) {
    if (disp.vbuf != null) {
      let vtxRes = this.m_vtxRes;
      runit.renderState = disp.renderState;
      runit.rcolorMask = disp.rcolorMask; // build vertex gpu resoure

      let resUid = disp.getVtxResUid();
      let vtx;
      let needBuild = true;
      let dispVtxVer = disp.getVtxResVer();

      if (vtxRes.hasResUid(resUid)) {
        vtx = vtxRes.getVertexRes(resUid);
        needBuild = vtx.version != dispVtxVer;

        if (needBuild) {
          vtxRes.destroyRes(resUid);
          vtx.rcuid = vtxRes.getRCUid();
          vtx.resUid = resUid;
        }
      } else {
        vtx = new GpuVtxObject_1.GpuVtxObject();
        vtx.rcuid = vtxRes.getRCUid();
        vtx.resUid = resUid;
        vtxRes.addVertexRes(vtx); // console.log("GpuVtxObject instance create new, resUid: ",resUid, ", vtx.indices.getUid(): ",vtx.indices.getUid());
      }

      if (needBuild) {
        // vtx.indices.ibufStep = disp.vbuf.getIBufStep();
        // vtx.createVertexByVtxUid(disp.vbuf.getUid());
        let ivbuf = disp.ivbuf == null ? disp.vbuf : disp.ivbuf; // console.log("RODataBuilder::buildVtxRes(), XXX OOO XXX ivbuf: ", ivbuf);
        // vtx.indices.ibufStep = ivbuf.getIBufStep();

        vtx.indices.initialize(this.m_rc, this.m_roVtxBuild, ivbuf, disp);
        vtx.createVertex(this.m_roVtxBuild, shdp, disp.vbuf); // vtx.vertex.initialize(this.m_roVtxBuild, shdp, disp.vbuf);
        // vtx.version = disp.vbuf.version;

        vtx.version = dispVtxVer; // console.log("RODataBuilder::buildVtxRes(), XXXXXXXXXX AAA 1 ver: ", vtx.version, dispVtxVer);
      }

      vtxRes.__$attachRes(resUid);

      runit.vro = vtx.createVRO(this.m_roVtxBuild, shdp, true);
      runit.indicesRes = runit.vro.indicesRes;

      runit.vro.__$attachThis();

      runit.vtxUid = resUid;
      let material = disp.getMaterial();

      if (material.vtxInfo) {
        // 如果是同一个material用在不同vtx 的entity上，会如何?
        // 如果多个material对应到一个vtx如何用?
        // 如果是多个对多个如何用?
        // vdrInfo 需要和 mesh 对应协作
        runit.vdrInfo = material.vtxInfo;
        runit.rdp = runit.indicesRes.initRdp.clone();
      } else {
        runit.vdrInfo = this.m_emptyVDRInfo;
        runit.rdp = runit.indicesRes.initRdp;
      }

      runit.rgraph = material.graph;
      runit.setVisible(disp.visible);
    }
  }

  createRPOUnit() {
    return this.m_rpoUnitBuilder.create();
  }

  restoreRPOUnit(runit) {
    return this.m_rpoUnitBuilder.restore(runit);
  }

  buildGpuDisp(disp, rentity) {
    if (disp.__$ruid < 0) {
      if (disp.getMaterial() != null) {
        disp.__$$rsign = RenderConst_1.DisplayRenderSign.LIVE_IN_RENDERER;
        let runit = this.m_rpoUnitBuilder.create();
        runit.rentity = rentity;
        disp.__$ruid = runit.uid;
        disp.__$$runit = runit;
        const group = disp.getPartGroup();

        if (group) {
          runit.partGroup = group.slice(0);
          runit.partTotal = group.length;
          let fs = runit.partGroup;
          let ibufStride = runit.indicesRes.rdp.rd.stride;

          for (let i = 0, len = runit.partTotal; i < len;) {
            i++;
            fs[i++] *= ibufStride;
          }
        }

        if (runit.partTotal < 1) {
          runit.draw = runit.__$$drawThis;
        } else {
          runit.draw = runit.__$$drawPart;
        }

        runit.setDrawFlag(disp.renderState, disp.rcolorMask);

        if (disp.__$ruid >= 0) {
          this.buildVtxRes(disp, runit, this.updateDispMaterial(runit, disp.getMaterial(), disp));
        } else {
          console.error("Error RODataBuilder::buildGpuDisp(), disp is unavailable !!!");
          this.buildVtxRes(disp, runit, null);
        }

        return true;
      } else {
        console.log("Error RODataBuilder::buildGpuDisp(), material is null !!!");
      }
    }

    return false;
  }

  update() {
    //this.updateDispToProcess();
    if (this.m_haveDeferredUpdate) {
      this.m_haveDeferredUpdate = false;
      let len = this.m_deferredVbufs.length;
      let i = 0;

      if (len > 0) {
        // deferred update vtx to gpu
        for (; i < len; ++i) {
          this.updateDispVbuf(this.m_deferredVbufs[i], false);
        }

        this.m_deferredVbufs = [];
      }

      len = this.m_deferredTROs.length;

      if (len > 0) {
        // deferred update texture list to gpu
        i = 0;

        for (; i < len; ++i) {
          this.updateTextureTRO(this.m_deferredTROs[i]);
        }

        this.m_deferredTROs = [];
      }

      len = this.m_deferredTextures.length;

      if (len > 0) {
        // deferred update single texture self system memory data to gpu memory data
        i = 0;

        for (; i < len; ++i) {
          this.m_deferredTextures[i].__$updateToGpu(this.m_texRes);
        }

        this.m_deferredTextures = [];
      }
    }
  }

  createsharedMList(material, shdp) {
    let sharedMList = material.createSharedUniforms();

    if (sharedMList == null) {
      // 通过shader uniform data 创建 shared uniform
      let dataList = material.createSharedUniformsData();

      if (dataList != null && dataList.length > 0) {
        sharedMList = [];

        for (let i = 0; i < dataList.length; ++i) {
          if (dataList[i] != null) {
            let uniform = this.m_shdUniformTool.buildLocalFromData(dataList[i], shdp);
            sharedMList.push(uniform);
          }
        }

        if (sharedMList.length < 1) {
          sharedMList = null;
        }
      }
    }

    return sharedMList;
  }

  updateGlobalMaterial(material, materialUniformUpdate = false) {
    if (material != null) {
      let rc = this.m_rc;
      let tro = null;
      let shdp = null;
      let texList = null;
      let texEnabled = false;

      if (material.getShaderData() == null) {
        texList = material.getTextureList();
        texEnabled = texList != null && texList.length > 0;
        material.initializeByCodeBuf(texEnabled);
      } else {
        texList = material.getTextureList();
      }

      shdp = this.m_shdpBuilder.create(material.getShaderData());
      shdp.upload(rc.RContext, rc.getUid());
      let texTotal = shdp.getTexTotal();

      if (texTotal > 0) {
        tro = this.createTRO(texList, texTotal);
      }

      if (this.m_shader.getSharedUniformByShd(shdp) == null) {
        let sharedMList = this.createsharedMList(material, shdp);

        if (sharedMList != null) {
          for (let i = 0; i < sharedMList.length; ++i) {
            sharedMList[i].program = shdp.getGPUProgram();
          }
        }

        this.m_shader.setSharedUniformByShd(shdp, this.m_shdUniformTool.buildShared(sharedMList, rc, shdp));
      }

      if (material.__$uniform == null) {
        material.__$uniform = this.m_shdUniformTool.buildLocalFromData(material.createSelfUniformData(), shdp);
      }

      this.m_shader.__$globalUniform = material.__$uniform;
      this.m_shader.bindToGpu(shdp.getUid());

      if (materialUniformUpdate && material.__$uniform != null) {
        this.m_shader.useUniform(material.__$uniform);
      }

      if (tro != null) {
        tro.run();
      }
    }
  }

  reset() {
    this.m_deferredVbufs = [];
    this.m_deferredTROs = [];
  }

}

exports.default = RODataBuilder;

/***/ }),

/***/ "3b73":
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

class RendererDevice {
  /**
   * set web html body background color
   * @param color a color string, the default value is "white"
   */
  static SetWebBodyColor(color = "white") {
    const body = document.body;
    body.style.background = color;
  }

  static SetLanguage(language) {
    RendererDevice.s_language = language;
  }

  static GetLanguage() {
    if (RendererDevice.s_language != "") {
      return RendererDevice.s_language;
    }

    RendererDevice.s_language = navigator.language;
    return RendererDevice.s_language;
  }

  static SetThreadEnabled(boo) {
    RendererDevice.s_threadEnabled = boo;
  }

  static GetThreadEnabled() {
    return RendererDevice.s_threadEnabled;
  }

  static GetDebugEnabled() {
    return RendererDevice.s_debugEnabled;
  }

  static SetDebugEnabled(boo) {
    RendererDevice.s_debugEnabled = boo;
  }

  static SetDevicePixelRatio(dpr) {
    RendererDevice.s_devicePixelRatio = dpr;
  }

  static GetDevicePixelRatio() {
    return RendererDevice.s_devicePixelRatio;
  }

  static Initialize(infoArr) {
    if (RendererDevice.s_inited) {
      RendererDevice.s_inited = false;
      RendererDevice.s_WEBGL_VER = infoArr[0];
      RendererDevice.TestMobileWeb();
      RendererDevice.s_language = navigator.language + "";
    }
  }
  /**
   * 返回当前是不是window操作系统 PC端
   */


  static IsWindowsPCOS() {
    return !(RendererDevice.IsSafariWeb() || RendererDevice.IsMobileWeb());
  }
  /**
   * 得到windows系统环境下当前浏览器是否使用独立显卡。集显 integrated video card, 独显 external video card
   * get whether the gpu is external video card in window os
   * @returns get whether the gpu is external video card in window os
   */


  static IsWinExternalVideoCard() {
    if (RendererDevice.s_winExternalVideoCardFlag > 0) {
      return RendererDevice.s_winExternalVideoCardFlag == 2;
    }

    let flag = RendererDevice.IsSafariWeb() || RendererDevice.IsMobileWeb();

    if (!flag) {
      flag = RendererDevice.GPU_RENDERER.indexOf("Intel(R)") < 0;
    }

    RendererDevice.s_winExternalVideoCardFlag = flag ? 2 : 1;
    /**
     * webgl_renderer:  ANGLE (Intel, Intel(R) UHD Graphics 630 Direct3D11 vs_5_0 ps_5_0, D3D11-25.20.100.6617)
     */

    return RendererDevice.s_winExternalVideoCardFlag == 2;
  }

  static TestSafariWeb() {
    //return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    return /Safari/.test(navigator.userAgent) && /Mac OS/.test(navigator.userAgent);
  }

  static IsWebGL1() {
    return RendererDevice.s_WEBGL_VER == 1;
  }

  static IsWebGL2() {
    return RendererDevice.s_WEBGL_VER == 2;
  }

  static IsMobileWeb() {
    if (RendererDevice.s_mobileFlag > 0) {
      return RendererDevice.s_mobileFlag == 2;
    }

    return RendererDevice.TestMobileWeb();
  }

  static IsSafariWeb() {
    if (RendererDevice.s_safariFlag > 0) {
      return RendererDevice.s_safariFlag == 2;
    }

    RendererDevice.s_safariFlag = RendererDevice.TestSafariWeb() ? 2 : 1;
    return RendererDevice.s_safariFlag == 2;
  }

  static IsIOS() {
    if (RendererDevice.s_IOS_Flag > 0) {
      return RendererDevice.s_IOS_Flag == 2;
    }

    let boo = false;

    if (/iPad|iPhone|iPod/.test(navigator.platform)) {
      boo = true;
    } else {
      boo = navigator.maxTouchPoints != undefined && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform);
    }

    RendererDevice.s_IOS_Flag = boo ? 2 : 1;
    return boo;
  }

  static IsIpadOS() {
    if (RendererDevice.s_IPad_Flag > 0) {
      return RendererDevice.s_IPad_Flag == 2;
    }

    let boo = navigator.maxTouchPoints > 0 && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform);

    if (!boo && /iPod|iPad|iPadPro|iPodPro/i.test(navigator.userAgent)) {
      boo = true;
    }

    RendererDevice.s_IPad_Flag = boo ? 2 : 1;
    return boo;
  }

  static IsAndroidOS() {
    if (RendererDevice.s_Android_Flag > 0) {
      return RendererDevice.s_Android_Flag == 2;
    }

    let boo = RendererDevice.TestMobileWeb();

    if (boo && /Android|Linux/i.test(navigator.userAgent)) {
      boo = true;
    } else {
      boo = false;
    }

    RendererDevice.s_Android_Flag = boo ? 2 : 1;
    return boo;
  }

  static TestMobileWeb() {
    if (RendererDevice.s_mobileFlag > 0) {
      return RendererDevice.s_mobileFlag == 2;
    }

    if (/mobile/.test(location.href)) {
      RendererDevice.s_mobileFlag = 2;
      return RendererDevice.s_mobileFlag == 2;
    }

    if (/Android/i.test(navigator.userAgent)) {
      if (/Mobile/i.test(navigator.userAgent)) {
        RendererDevice.s_mobileFlag = 2;
        return RendererDevice.s_mobileFlag == 2;
      } else {
        RendererDevice.s_mobileFlag = 1;
        return RendererDevice.s_mobileFlag == 2;
      }
    } else if (/webOS|iPhone|iPod|iPad|iPodPro|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      RendererDevice.s_mobileFlag = 2;
      return RendererDevice.s_mobileFlag == 2;
    }

    RendererDevice.s_mobileFlag = 1;
    return RendererDevice.s_mobileFlag == 2;
  }

}

RendererDevice.s_inited = true;
RendererDevice.s_WEBGL_VER = 2;
RendererDevice.s_devicePixelRatio = 1.0;
RendererDevice.s_mobileFlag = 0;
RendererDevice.s_safariFlag = 0;
RendererDevice.s_Android_Flag = 0;
RendererDevice.s_IOS_Flag = 0;
RendererDevice.s_IPad_Flag = 0;
RendererDevice.s_winExternalVideoCardFlag = 0;
/**
 * zh-CN, en-US, ect....
 */

RendererDevice.s_language = "";
RendererDevice.s_debugEnabled = true;
RendererDevice.GPU_VENDOR = "unknown";
RendererDevice.GPU_RENDERER = "unknown";
RendererDevice.MAX_TEXTURE_SIZE = 4096;
RendererDevice.MAX_RENDERBUFFER_SIZE = 4096;
RendererDevice.MAX_VIEWPORT_WIDTH = 4096;
RendererDevice.MAX_VIEWPORT_HEIGHT = 4096; // for debug

RendererDevice.SHOWLOG_ENABLED = false;
RendererDevice.SHADERCODE_TRACE_ENABLED = false; // true: force vertex shader precision to highp

RendererDevice.VERT_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true; // true: force fragment shader precision to highp

RendererDevice.FRAG_SHADER_PRECISION_GLOBAL_HIGHP_ENABLED = true; // worker multi threads enabled yes or no

RendererDevice.s_threadEnabled = true;
exports.default = RendererDevice;

/***/ }),

/***/ "3c81":
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

const PoolNodeBuilder_1 = __importDefault(__webpack_require__("2be1"));

const RenderProcess_1 = __importDefault(__webpack_require__("7696"));

class RenderProcessBuider extends PoolNodeBuilder_1.default {
  setCreateParams(shader, rpoNodeBuilder, rpoUnitBuilder, vtxResource, batchEnabled, fixedState) {
    this.m_shader = shader;
    this.m_rpoNodeBuilder = rpoNodeBuilder;
    this.m_rpoUnitBuilder = rpoUnitBuilder;
    this.m_vtxResource = vtxResource;
    this.m_batchEnabled = batchEnabled;
    this.m_fixedState = fixedState;
  }

  createNode() {
    return new RenderProcess_1.default(this.m_shader, this.m_rpoNodeBuilder, this.m_rpoUnitBuilder, this.m_vtxResource, this.m_batchEnabled, this.m_fixedState);
  }

  rejoinRunitForTro(runit) {
    this.getNodeByUid(runit.__$rprouid).rejoinRunitForTro(runit);
  }

  rejoinRunitForVro(runit) {
    this.getNodeByUid(runit.__$rprouid).rejoinRunitForVro(runit);
  }

}

exports.default = RenderProcessBuider;

/***/ }),

/***/ "442e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2019-2022 by                                                 */

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

const PoolNodeBuilder_1 = __importDefault(__webpack_require__("2be1"));

const RPONode_1 = __importDefault(__webpack_require__("265e"));
/*
 * render process object node pool management
 */


class RPONodeBuilder extends PoolNodeBuilder_1.default {
  createNode() {
    return new RPONode_1.default();
  }

  createRPONode() {
    return new RPONode_1.default();
  }

}

exports.default = RPONodeBuilder;

/***/ }),

/***/ "45db":
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

const VertexRenderObj_1 = __importDefault(__webpack_require__("8def"));

const VaoVertexRenderObj_1 = __importDefault(__webpack_require__("fa60"));

class ROVertexRes {
  constructor() {
    this.m_vtx = null;
    this.m_typeList = null;
    this.m_offsetList = null;
    this.m_sizeList = null;
    this.m_vtxUid = -1;
    this.m_gpuBufs = [];
    this.m_gpuBufsTotal = 0;
    this.m_type = 0;
    this.m_attribsTotal = 0;
    this.m_wholeStride = 0;
    this.m_bufIVS = null;
    this.m_vroList = [];
    this.m_vroListLen = 0;
    this.m_attachCount = 0;
  }

  static create(rc, shdp, vtx) {
    let vtxUid = vtx.getUid();
    let map = ROVertexRes.s_map;
    let vt; // console.log("GpuVtxObject::createVertex(), vtxUid: ", vtxUid, ", uid: ", this.m_uid);

    if (map.has(vtxUid)) {
      vt = map.get(vtxUid);
    } else {
      // console.log("ROVertexRes::create() new instance, vtxUid: ", vtxUid);
      vt = new ROVertexRes();
      map.set(vtxUid, vt);
      vt.initialize(rc, shdp, vtx);
    }

    return vt;
  }

  __$attachThis() {
    ++this.m_attachCount; // console.log("ROVertexRes::__$attachThis() this.m_attachCount: "+this.m_attachCount);
  }

  __$detachThis() {
    if (this.m_attachCount == 1) {
      --this.m_attachCount; // console.log("ROVertexRes::__$detachThis() this.m_attachCount: "+this.m_attachCount);
      // this.__$dispose();
    } else {
      --this.m_attachCount; // console.log("ROVertexRes::__$detachThis() this.m_attachCount: "+this.m_attachCount);
    }

    if (this.m_attachCount < 1) {
      this.m_attachCount = 0;
    }
  }

  getAttachCount() {
    return this.m_attachCount;
  }

  updateToGpu(rc) {
    let len = this.m_gpuBufs.length;

    if (len > 0) {
      let vtx = this.m_vtx;

      if (this.version != vtx.vertexVer) {
        let usage = vtx.getBufDataUsage();
        let fvs;
        let sizeList = this.m_sizeList;

        for (let i = 0; i < len; ++i) {
          fvs = vtx.getF32DataAt(i);

          if (sizeList[i] >= fvs.length) {
            rc.bindArrBuf(this.m_gpuBufs[i]);
            rc.arrBufSubData(fvs, 0);
          } else {
            rc.bindArrBuf(this.m_gpuBufs[i]);
            rc.arrBufData(fvs, usage);
            sizeList[i] = fvs.length;
          }
        }

        this.version = vtx.vertexVer;
      }
    }
  } //private m_preCombinedSize: number = 0;


  uploadCombined(rc, shdp) {
    let vtx = this.m_vtx;
    let fvs = vtx.getF32DataAt(0); //console.log("uploadCombined combSize: ",this.m_preCombinedSize, fvs.length);
    //this.m_preCombinedSize = fvs.length;

    this.m_gpuBufs.push(rc.createBuf());
    rc.bindArrBuf(this.m_gpuBufs[0]); // console.log("uploadCombined, this.m_gpuBufs: "+this.m_gpuBufs);

    rc.arrBufData(fvs, vtx.getBufDataUsage());
    this.m_gpuBufsTotal = 1;
    this.m_sizeList = [fvs.length];

    if (this.m_typeList == null) {
      this.m_bufIVS = shdp.getLocationIVS();
      this.m_wholeStride = 0;
      this.m_typeList = new Array(this.m_attribsTotal);
      this.m_offsetList = new Array(this.m_attribsTotal);
      let typeList = vtx.getBufTypeList();
      let sizeList = vtx.getBufSizeList();

      if (typeList != null) {
        for (let i = 0; i < this.m_attribsTotal; ++i) {
          this.m_offsetList[i] = this.m_wholeStride;
          this.m_wholeStride += sizeList[i] * 4;
          this.m_typeList[i] = typeList[i];
        }
      } else {
        for (let i = 0; i < this.m_attribsTotal; ++i) {
          this.m_offsetList[i] = this.m_wholeStride;
          this.m_wholeStride += shdp.getLocationSizeByIndex(i) * 4;
          this.m_typeList[i] = shdp.getLocationTypeByIndex(i);
        }
      }
    }
  }

  uploadSeparated(rc, shdp) {
    let vtx = this.m_vtx;
    let i = 0;
    let buf = null;
    let dataUsage = vtx.getBufDataUsage();
    this.m_gpuBufsTotal = this.m_vtx.getBuffersTotal();
    this.m_sizeList = new Array(this.m_attribsTotal);
    this.m_bufIVS = shdp.getLocationIVS(); // console.log("uploadSeparated, this.m_gpuBufs: "+this.m_gpuBufs);

    if (vtx.bufData == null) {
      for (; i < this.m_attribsTotal; ++i) {
        buf = rc.createBuf();
        this.m_gpuBufs.push(buf);
        rc.bindArrBuf(buf);
        rc.arrBufData(vtx.getF32DataAt(i), dataUsage);
        this.m_sizeList[i] = vtx.getF32DataAt(i).length;
      }
    } else {
      //console.log(">>>>>>>>vtxSepbuf use (this.bufData == null) : "+(this.bufData == null));
      let fs32 = null;
      let j = 0;
      let tot = 0;
      let offset = 0;
      let dataSize = 0;

      for (; i < this.m_attribsTotal; ++i) {
        buf = rc.createBuf(); //console.log("this.bufData.getAttributeDataTotalBytesAt("+i+"): "+this.bufData.getAttributeDataTotalBytesAt(i));

        this.m_gpuBufs.push(buf);
        rc.bindArrBuf(buf);
        rc.arrBufDataMem(vtx.bufData.getAttributeDataTotalBytesAt(i), dataUsage);
        offset = 0;
        dataSize = 0;
        tot = vtx.bufData.getAttributeDataTotalAt(i);

        for (j = 0; j < tot; ++j) {
          fs32 = vtx.bufData.getAttributeDataAt(i, j);
          dataSize += fs32.length;
          rc.arrBufSubData(fs32, offset);
          offset += fs32.byteLength;
        }

        this.m_sizeList[i] = dataSize;
      }
    }

    if (this.m_typeList == null) {
      this.m_typeList = new Array(this.m_attribsTotal);
      this.m_offsetList = new Array(this.m_attribsTotal);
      let typeList = vtx.getBufTypeList();
      let sizeList = vtx.getBufSizeList();

      if (typeList != null) {
        for (let i = 0; i < this.m_attribsTotal; ++i) {
          this.m_offsetList[i] = this.m_wholeStride;
          this.m_wholeStride += sizeList[i] * 4;
          this.m_typeList[i] = typeList[i];
        }
      } else {
        for (let i = 0; i < this.m_attribsTotal; ++i) {
          this.m_offsetList[i] = this.m_wholeStride;
          this.m_wholeStride += shdp.getLocationSizeByIndex(i) * 4;
          this.m_typeList[i] = shdp.getLocationTypeByIndex(i);
        }
      }

      this.m_wholeStride = 0;
    }
  }

  initialize(rc, shdp, vtx) {
    /**
     * 这里的初始化可能会出现错误, 因为 shd 中使用的buffers数量可能少于实际 vtx 中的 attributes 数量
     * 为了防止错误, 构建这个 RoVertexRes 实例的shdp中的attributes必须是和vtx buffers匹配的
     */
    if (this.m_gpuBufs.length < 1 && vtx != null) {
      this.version = vtx.vertexVer;
      this.m_vtx = vtx;
      this.m_vtxUid = vtx.getUid();
      this.m_type = vtx.getType();
      let typeList = vtx.getBufTypeList();
      this.m_attribsTotal = typeList != null ? typeList.length : shdp.getLocationsTotal();

      if (shdp.getLocationsTotal() != vtx.getAttribsTotal()) {
        let info = "shdp.getLocationsTotal() is " + shdp.getLocationsTotal() + " != vtx.getAttribsTotal(), shdp has " + shdp.getLocationsTotal() + ", vtx has " + vtx.getAttribsTotal();
        info += "\n这可能会导致渲染过程无法正常使用所有的 vtx buffers";
        console.warn(info);
      }

      if (this.m_type < 1) {
        // combined buf
        this.uploadCombined(rc, shdp);
      } else {
        // separated buf
        this.uploadSeparated(rc, shdp);
      }

      let layoutBit = vtx.getBufSortFormat();

      if (layoutBit > 0) {
        // console.log("XXXXX ROVtx XXX layoutBit: ", layoutBit);
        let ivs = new Array(12);
        let index = 0;

        for (let i = 0; i < 10; ++i) {
          const bit = 1 << i;

          if ((bit & layoutBit) > 0) {
            ivs[i + 1] = index++;
          }
        }

        this.m_bufIVS = ivs;
      }
    }
  }
  /**
   * get vro object attribute mix id
   */


  getVROMid(rc, shdp, vaoEnabled, ibufId) {
    let mid = (131 + rc.getRCUid()) * this.m_vtxUid;
    if (vaoEnabled) mid = mid * 131 + 1;
    mid = mid * 131 + shdp.getMid();
    mid = mid * 131 + ibufId;
    return mid;
  } // 创建被 RPOUnit 使用的 vro 实例


  createVRO(rc, shdp, vaoEnabled, ibufRes) {
    let attribsTotal = shdp.getLocationsTotal();

    if (this.m_attribsTotal * attribsTotal > 0 && attribsTotal <= this.m_attribsTotal) {
      // console.log("ROVertexRes::createVRO(), this.m_type: ",this.m_type, ", ibufRes.getUid(): ",ibufRes.getUid(),", vtxUid: ", this.m_vtxUid);
      let mid = this.getVROMid(rc, shdp, vaoEnabled, ibufRes.getUid());
      let i = 0;
      let pvro = VaoVertexRenderObj_1.default.GetByMid(mid);

      if (pvro != null) {
        return pvro;
      } // TODO(vilyLei): 暂时注释掉下面这行代码
      // let flag: boolean = shdp.testVertexAttribPointerOffset(this.m_offsetList);
      // console.log("createVRO testVertexAttribPointerOffset flag: ",flag, this.m_typeList);
      // DivLog.ShowLog("createVRO testVertexAttribPointerOffset flag: "+flag);
      // 如果这个ivs的数据和 vtx buffers 数据项不匹配, 则会出现渲染错误的情况
      // 因为数据项匹配的ROVertexRes实例可能不会构建或者比较迟才构建
      // 这会导致ivs 是不正确的, 甚至vtx buffers


      const ivs = this.m_bufIVS;

      if (vaoEnabled) {
        // vao 的生成要记录标记,防止重复生成, 因为同一组数据在不同的shader使用中可能组合方式不同，导致了vao可能是多样的
        // console.log("VtxCombinedBuf::createVROBegin(), "+this.m_typeList+" /// "+this.m_wholeStride+" /// "+this.m_offsetList);
        // console.log("VtxCombinedBuf::createVROBegin(), "+this.m_type);
        let vro = VaoVertexRenderObj_1.default.Create(rc, mid, this.m_vtx.getUid());
        vro.indicesRes = ibufRes;
        vro.vao = rc.createVertexArray();
        rc.bindVertexArray(vro.vao);

        if (this.m_type < 1) {
          // combined buf vro
          rc.bindArrBuf(this.m_gpuBufs[0]); // if (this.m_typeList.length == attribsTotal) {
          //     for (i = 0; i < attribsTotal; ++i) {
          //         shdp.vertexAttribPointerTypeFloat(this.m_typeList[i], this.m_wholeStride, this.m_offsetList[i]);
          //     }
          // } else {
          //     const types = shdp.getLocationTypes();
          //     for (i = 0; i < types.length; ++i) {
          //         const k = types[i] - 1;
          //         shdp.vertexAttribPointerTypeFloat(this.m_typeList[k], this.m_wholeStride, this.m_offsetList[k]);
          //     }
          // }

          const types = shdp.getLocationTypes();

          for (i = 0; i < types.length; ++i) {
            const k = ivs[types[i]];
            shdp.vertexAttribPointerTypeFloat(this.m_typeList[k], this.m_wholeStride, this.m_offsetList[k]);
          }
        } else {
          // console.log("A attribsTotal: ", attribsTotal, this.m_typeList);
          // console.log("B shdp.getLocationTypes(): ", shdp.getLocationTypes());
          // if (this.m_typeList.length == attribsTotal) {
          //     for (i = 0; i < attribsTotal; ++i) {
          //         rc.bindArrBuf(this.m_gpuBufs[i]);
          //         shdp.vertexAttribPointerTypeFloat(this.m_typeList[i], 0, 0);
          //     }
          // } else {
          //     const types = shdp.getLocationTypes();
          //     for (i = 0; i < types.length; ++i) {
          //         const k = types[i] - 1;
          //         rc.bindArrBuf(this.m_gpuBufs[k]);
          //         shdp.vertexAttribPointerTypeFloat(this.m_typeList[k], 0, 0);
          //     }
          // }
          // const ivs = shdp.getLocationIVS();
          const types = shdp.getLocationTypes();

          for (i = 0; i < types.length; ++i) {
            const k = ivs[types[i]];
            rc.bindArrBuf(this.m_gpuBufs[k]);
            shdp.vertexAttribPointerTypeFloat(this.m_typeList[k], 0, 0);
          }
        }

        pvro = vro; // vro.ibuf = ibufRes.getGpuBuf();
        // rc.bindEleBuf(vro.ibuf);

        rc.bindVertexArray(null);
      } else {
        let vro = VertexRenderObj_1.default.Create(rc, mid, this.m_vtx.getUid());
        vro.indicesRes = ibufRes;
        vro.shdp = shdp;
        vro.attribTypes = [];
        vro.wholeOffsetList = [];
        vro.wholeStride = this.m_wholeStride;

        if (this.m_type < 1) {
          vro.vbuf = this.m_gpuBufs[0];
        } else {
          vro.vbufs = this.m_gpuBufs;
        }

        for (i = 0; i < attribsTotal; ++i) {
          if (shdp.testVertexAttribPointerType(this.m_typeList[i])) {
            vro.attribTypes.push(this.m_typeList[i]); //vro.wholeOffsetList.push( this.m_offsetList[i] );

            vro.wholeOffsetList.push(0);
          }
        }

        vro.attribTypesLen = vro.attribTypes.length; // vro.ibuf = ibufRes.getGpuBuf();

        pvro = vro;
      }

      this.m_vroList.push(pvro);
      ++this.m_vroListLen;
      return pvro;
    } else {
      console.error("shader 中需要的 attribute 数量 比当前 vertex buffer 多... shader.attribsTotal: ", attribsTotal, ", this.attribsTotal: ", this.m_attribsTotal);
      return null;
    }
  }

  destroy(rc) {
    // console.log("ROVertexRes::destroy(), this.m_attachCount: ", this.m_attachCount);
    if (this.m_attachCount < 1) {
      if (this.m_gpuBufs.length > 0) {
        console.log("ROVertexRes::destroy(), type: ", this.m_type, ", vtxUid: ", this.m_vtxUid);
        this.m_bufIVS = null;
        this.m_type = -1;
        let i = 0;
        let vro = null;

        for (; i < this.m_vroListLen; ++i) {
          this.m_vroList[i].restoreThis();
        }

        this.m_vroList = [];
        this.m_vroListLen = 0;

        for (i = 0; i < this.m_attribsTotal; ++i) {
          rc.deleteBuf(this.m_gpuBufs[i]);
          this.m_gpuBufs[i] = null;
        }

        this.m_attribsTotal = 0;
        this.m_gpuBufs = [];
      }

      if (this.m_vtxUid >= 0) {
        ROVertexRes.s_map.delete(this.m_vtxUid);
        this.m_vtxUid = -1;
      }
    }
  }

}

ROVertexRes.s_map = new Map();
exports.ROVertexRes = ROVertexRes;

/***/ }),

/***/ "4d4b":
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

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

exports.RendererDevice = RendererDevice_1.default;

const RendererState_1 = __importDefault(__webpack_require__("29ef"));

exports.RendererState = RendererState_1.default;

const RendererInstanceContext_1 = __webpack_require__("0e01");

exports.RendererInstanceContextParam = RendererInstanceContext_1.RendererInstanceContextParam;
exports.RendererInstanceContext = RendererInstanceContext_1.RendererInstanceContext;

const RendererInstance_1 = __importDefault(__webpack_require__("d958"));

exports.RendererInstance = RendererInstance_1.default;

const RenderConst_1 = __webpack_require__("e08e");

exports.RenderDrawMode = RenderConst_1.RenderDrawMode;
exports.RenderBlendMode = RenderConst_1.RenderBlendMode;
exports.GLStencilFunc = RenderConst_1.GLStencilFunc;
exports.GLStencilOp = RenderConst_1.GLStencilOp;
exports.GLBlendMode = RenderConst_1.GLBlendMode;
exports.GLBlendEquation = RenderConst_1.GLBlendEquation;
exports.CullFaceMode = RenderConst_1.CullFaceMode;
exports.DepthTestMode = RenderConst_1.DepthTestMode;

function createRendererInstance() {
  return new RendererInstance_1.default();
}

exports.createRendererInstance = createRendererInstance;

/***/ }),

/***/ "4f27":
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

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

const ShaderUniform_1 = __webpack_require__("d53d");

const CameraUniformBuilder_1 = __importDefault(__webpack_require__("2560"));

const StageParamUniformBuilder_1 = __importDefault(__webpack_require__("83d1"));

const FrustumUniformBuilder_1 = __importDefault(__webpack_require__("a7ed"));

const CameraPosUniformBuilder_1 = __importDefault(__webpack_require__("857b"));

const ViewParamUniformBuilder_1 = __importDefault(__webpack_require__("e87b"));

class EmptyShdUniform extends ShaderUniform_1.ShaderUniform {
  use(rc) {}

  useByLocation(rc, type, location, i) {}

  useByShd(rc, shd) {}

  updateData() {}

  destroy() {}

}

EmptyShdUniform.EmptyUniform = new EmptyShdUniform();

class ShdUniformTool {
  constructor() {
    this.m_initFlag = true;
    this.m_uniformDict = new Map();
    this.m_builders = [];
    this.m_buildersTot = 0;
    this.m_emptyUniform = new ShaderUniform_1.ShaderUniform();
  }

  appendUniformBuilder(builder) {
    if (!this.m_uniformDict.has(builder.getIDNS())) {
      this.m_builders.push(builder);
      this.m_uniformDict.set(builder.getIDNS(), builder);
      this.m_buildersTot = this.m_builders.length;
    }
  }

  initialize() {
    if (this.m_initFlag) {
      this.m_initFlag = false;
      this.appendUniformBuilder(new CameraUniformBuilder_1.default());
      this.appendUniformBuilder(new FrustumUniformBuilder_1.default());
      this.appendUniformBuilder(new CameraPosUniformBuilder_1.default());
      this.appendUniformBuilder(new StageParamUniformBuilder_1.default());
      this.appendUniformBuilder(new ViewParamUniformBuilder_1.default());
    }
  }

  addSharedUniformBuilder(builder) {
    if (builder != null && !this.m_uniformDict.has(builder.getIDNS())) {
      this.m_builders.push(builder);
      this.m_uniformDict.set(builder.getIDNS(), builder);
      ++this.m_buildersTot;
    }
  }

  removeSharedUniformBuilder(builder) {
    if (builder != null && this.m_uniformDict.has(builder.getIDNS())) {
      for (let i = 0; i < this.m_buildersTot; ++i) {
        if (builder == this.m_builders[i]) {
          this.m_builders.splice(i, 1);
          --this.m_buildersTot;
          break;
        }
      }

      this.m_uniformDict.delete(builder.getIDNS());
    }
  }

  removeSharedUniformBuilderByName(builderNS) {
    if (this.m_uniformDict.has(builderNS)) {
      let builder = this.m_uniformDict.get(builderNS);

      for (let i = 0; i < this.m_buildersTot; ++i) {
        if (builder == this.m_builders[i]) {
          this.m_builders.splice(i, 1);
          --this.m_buildersTot;
          break;
        }
      }

      this.m_uniformDict.delete(builderNS);
    }
  }

  buildShared(guniforms, rc, shdp) {
    let guniform;
    let headU = null;
    let prevU = null;
    let builders = this.m_builders;
    let i = 0;
    let len = this.m_buildersTot;
    let puo = null;

    for (; i < len; ++i) {
      puo = builders[i].create(rc, shdp);

      if (puo != null) {
        if (prevU != null) {
          prevU.next = puo;
        } else if (headU == null) {
          headU = puo;
        }

        prevU = puo;
      }
    }

    if (guniforms == null) {
      guniform = headU;
    } else if (headU != null) {
      for (let i = 0; i < guniforms.length; ++i) {
        prevU.next = guniforms[i];
        prevU = prevU.next;
      }

      guniform = headU;
    }

    if (guniform == null) {
      guniform = EmptyShdUniform.EmptyUniform;
    } else {
      // normalize uniform
      let pdata = guniform; //  let boo: boolean = false;
      //  if(pdata.uns == "u_projMat") {
      //      boo = true;
      //      console.log("u_projMat global build begin pdata.uns: ",pdata.uns);
      //  }

      let i = 0;

      while (pdata != null) {
        //  if(boo) {
        //      console.log("### u_projMat global build...pdata.uns: ",pdata.uns);
        //  }
        if (pdata.uniformNameList != null && pdata.locations == null) {
          pdata.types = [];
          pdata.locations = [];
          pdata.uniformSize = pdata.uniformNameList.length;

          for (i = 0; i < pdata.uniformSize; ++i) {
            pdata.types.push(shdp.getUniformTypeByNS(pdata.uniformNameList[i]));
            pdata.locations.push(shdp.getUniformLocationByNS(pdata.uniformNameList[i]));
          } //console.log("global uniform names: "+pdata.uniformNameList);
          //console.log("global uniform types: "+pdata.types);
          //console.log("global uniform locations: "+pdata.locations);

        }

        pdata = pdata.next;
      } //  if(boo) {
      //      console.log("u_projMat global build end pdata.uns: u_projMat.");
      //  }

    }

    return guniform;
  }

  buildLocalFromTransformV(transformData, shdp) {
    if (transformData != null) {
      let shdUniform;
      shdUniform = new ShaderUniform_1.ShaderMat4Uniform();
      shdUniform.uniformSize = 0;
      shdUniform.uniformNameList = [];
      shdUniform.types = [];
      shdUniform.locations = [];
      shdUniform.dataList = [];
      shdUniform.dataSizeList = [];
      shdUniform.uniformSize += 1;
      shdUniform.uniformNameList.push("u_objMat");
      shdUniform.types.push(shdp.getUniformTypeByNS("u_objMat"));
      shdUniform.locations.push(shdp.getUniformLocationByNS("u_objMat"));
      shdUniform.dataList.push(transformData);
      shdUniform.dataSizeList.push(1);
      return shdUniform;
    }

    return this.m_emptyUniform;
  }

  updateLocalFromTransformV(dstUniform, transformData, shdp) {
    if (transformData != null) {
      let shdUniform;
      let srcUniform = dstUniform;

      if (srcUniform == null) {
        srcUniform = new ShaderUniform_1.ShaderMat4Uniform();
        shdUniform = srcUniform;
        shdUniform.uniformSize = 0;
        shdUniform.uniformNameList = [];
        shdUniform.types = [];
        shdUniform.locations = [];
        shdUniform.dataList = [];
        shdUniform.dataSizeList = [];
        shdUniform.uniformSize += 1;
        shdUniform.uniformNameList.push("u_objMat");
        shdUniform.types.push(shdp.getUniformTypeByNS("u_objMat"));
        shdUniform.locations.push(shdp.getUniformLocationByNS("u_objMat"));
        shdUniform.dataList.push(transformData);
        shdUniform.dataSizeList.push(1);
      } else {
        shdUniform = srcUniform;
        shdUniform.locations = [];
        shdUniform.locations.push(shdp.getUniformLocationByNS("u_objMat"));
      }

      return shdUniform;
    }

    return this.m_emptyUniform;
  }

  buildLocalFromData(uniformData, shdp) {
    if (uniformData != null) {
      // collect all uniform data,create a new runned uniform
      let shdUniform;

      if (RendererDevice_1.default.IsWebGL1()) {
        shdUniform = new ShaderUniform_1.ShaderUniformV1();
      } else {
        shdUniform = new ShaderUniform_1.ShaderUniformV2();
      }

      shdUniform.uns = uniformData.uns;
      shdUniform.uniformNameList = [];
      shdUniform.types = [];
      shdUniform.locations = [];
      shdUniform.dataList = [];
      shdUniform.dataSizeList = [];
      shdUniform.uniformSize = 0;
      let pdata = uniformData;
      let i = 0;

      while (pdata != null) {
        if (pdata.uniformNameList != null && pdata.locations == null) {
          shdUniform.uniformSize += pdata.uniformNameList.length;

          for (i = 0; i < shdUniform.uniformSize; ++i) {
            shdUniform.uniformNameList.push(pdata.uniformNameList[i]);
            shdUniform.types.push(shdp.getUniformTypeByNS(pdata.uniformNameList[i]));
            shdUniform.locations.push(shdp.getUniformLocationByNS(pdata.uniformNameList[i]));
            shdUniform.dataList.push(pdata.dataList[i]);
            shdUniform.dataSizeList.push(shdp.getUniformLengthByNS(pdata.uniformNameList[i]));
          } // console.log("local uniform frome data names: ",shdUniform.uniformNameList);
          // console.log("local uniform frome data types: ",shdUniform.types);
          // console.log("local uniform frome data locations: ",shdUniform.locations);
          // console.log("local uniform frome data dataSizeList: ",shdUniform.dataSizeList);

        }

        pdata = pdata.next;
      }

      return shdUniform;
    }

    return EmptyShdUniform.EmptyUniform;
  }

}

exports.default = ShdUniformTool;

/***/ }),

/***/ "5326":
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
/**
 * 本类作为当前 renderer instance 的共享 uniform 数据管理类
 */

class UniformDataSlot {
  constructor(rcuid, total = 256) {
    this.m_total = 256;
    this.m_rcuid = 0;
    /**
     * 记录当前的数据序号，不可随意更改
     */

    this.index = 0;
    this.dataList = null;
    this.flagList = null;
    this.m_rcuid = rcuid;
    this.m_total = total;
    this.flagList = new Uint16Array(this.m_total);
    this.dataList = new Array(this.m_total);

    for (let i = 0; i < this.m_total; ++i) {
      this.dataList[i] = null;
      this.flagList[i] = 0;
    }
  }
  /**
   * @returns return renderer context unique id
   */


  getRCUid() {
    return this.m_rcuid;
  }

}

exports.UniformDataSlot = UniformDataSlot;

/***/ }),

/***/ "53d3":
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

class RenderingState {
  constructor(st) {
    let t = this;
    t.NORMAL_STATE = st.NORMAL_STATE;
    t.BACK_CULLFACE_NORMAL_STATE = st.BACK_CULLFACE_NORMAL_STATE;
    t.FRONT_CULLFACE_NORMAL_STATE = st.FRONT_CULLFACE_NORMAL_STATE;
    t.NONE_CULLFACE_NORMAL_STATE = st.NONE_CULLFACE_NORMAL_STATE;
    t.ALL_CULLFACE_NORMAL_STATE = st.ALL_CULLFACE_NORMAL_STATE;
    t.BACK_NORMAL_ALWAYS_STATE = st.BACK_NORMAL_ALWAYS_STATE;
    t.BACK_TRANSPARENT_STATE = st.BACK_TRANSPARENT_STATE;
    t.BACK_TRANSPARENT_ALWAYS_STATE = st.BACK_TRANSPARENT_ALWAYS_STATE;
    t.NONE_TRANSPARENT_STATE = st.NONE_TRANSPARENT_STATE;
    t.NONE_TRANSPARENT_ALWAYS_STATE = st.NONE_TRANSPARENT_ALWAYS_STATE;
    t.FRONT_CULLFACE_GREATER_STATE = st.FRONT_CULLFACE_GREATER_STATE;
    t.BACK_ADD_BLENDSORT_STATE = st.BACK_ADD_BLENDSORT_STATE;
    t.BACK_ADD_ALWAYS_STATE = st.BACK_ADD_ALWAYS_STATE;
    t.BACK_ALPHA_ADD_ALWAYS_STATE = st.BACK_ALPHA_ADD_ALWAYS_STATE;
    t.NONE_ADD_ALWAYS_STATE = st.NONE_ADD_ALWAYS_STATE;
    t.NONE_ADD_BLENDSORT_STATE = st.NONE_ADD_BLENDSORT_STATE;
    t.NONE_ALPHA_ADD_ALWAYS_STATE = st.NONE_ALPHA_ADD_ALWAYS_STATE;
    t.FRONT_ADD_ALWAYS_STATE = st.FRONT_ADD_ALWAYS_STATE;
    t.FRONT_TRANSPARENT_STATE = st.FRONT_TRANSPARENT_STATE;
    t.FRONT_TRANSPARENT_ALWAYS_STATE = st.FRONT_TRANSPARENT_ALWAYS_STATE;
    t.NONE_CULLFACE_NORMAL_ALWAYS_STATE = st.NONE_CULLFACE_NORMAL_ALWAYS_STATE;
    t.BACK_ALPHA_ADD_BLENDSORT_STATE = st.BACK_ALPHA_ADD_BLENDSORT_STATE;
  }

}

exports.RenderingState = RenderingState;

/***/ }),

/***/ "56c5":
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

const RCExtension_1 = __importDefault(__webpack_require__("030e")); //import RCExtension = RCExtensionT.vox.render.RCExtension;
//import RAdapterContext = RAdapterContextT.vox.render.RAdapterContext;


class RenderFBOProxy {
  static SetRenderer(pr) {
    RenderFBOProxy.m_rc = pr.getRC();
    RenderFBOProxy.m_webGLVer = pr.getWebGLVersion();
    let thisT = RenderFBOProxy;

    if (RenderFBOProxy.m_webGLVer == 1) {
      if (RCExtension_1.default.WEBGL_draw_buffers != null) {
        thisT.COLOR_ATTACHMENT0 = RCExtension_1.default.WEBGL_draw_buffers.COLOR_ATTACHMENT0_WEBGL;
      } else {
        thisT.COLOR_ATTACHMENT0 = RenderFBOProxy.m_rc.COLOR_ATTACHMENT0;
      }
    } else {
      thisT.COLOR_ATTACHMENT0 = RenderFBOProxy.m_rc.COLOR_ATTACHMENT0;
    }
  }

  static DrawBuffers(attachments) {
    if (RenderFBOProxy.m_webGLVer == 2) {
      RenderFBOProxy.m_rc.drawBuffers(attachments);
    } else if (RCExtension_1.default.WEBGL_draw_buffers != null) {
      RCExtension_1.default.WEBGL_draw_buffers.drawBuffersWEBGL(attachments);
    }
  }

}

RenderFBOProxy.m_rc = null;
RenderFBOProxy.m_webGLVer = 2;
RenderFBOProxy.COLOR_ATTACHMENT0 = 0x0;
exports.default = RenderFBOProxy;

/***/ }),

/***/ "5deb":
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

class TextureTarget {
  static GetValue(rc, param) {
    switch (param) {
      case TextureTarget.TEXTURE_2D:
        return rc.TEXTURE_2D;
        break;

      case TextureTarget.TEXTURE_2D_ARRAY:
        return rc.TEXTURE_2D_ARRAY;
        break;

      case TextureTarget.TEXTURE_CUBE:
        return rc.TEXTURE_CUBE_MAP;
        break;

      case TextureTarget.TEXTURE_3D:
        return rc.TEXTURE_3D;
        break;

      default:
        break;
    }

    return rc.TEXTURE_2D;
  }

}

TextureTarget.TEXTURE_2D = 20;
TextureTarget.TEXTURE_2D_ARRAY = 22;
TextureTarget.TEXTURE_SHADOW_2D = 23;
TextureTarget.TEXTURE_CUBE = 25;
TextureTarget.TEXTURE_3D = 30;
exports.default = TextureTarget;

/***/ }),

/***/ "5f3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/
// 用于对 RPOBlock 进行必要的组织, 例如 合批或者按照 shader不同来分类, 以及依据其他机制分类等等
// 目前一个block内的所有node 所使用的shader program 是相同的

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

const RPONodeLinker_1 = __importDefault(__webpack_require__("df9d"));

const RenderColorMask_1 = __webpack_require__("070b");

const RenderStateObject_1 = __webpack_require__("a5ba");

const PassProcess_1 = __importDefault(__webpack_require__("34cd")); //import DebugFlag from "../debug/DebugFlag";


class RPOBlock {
  constructor(shader) {
    this.m_uid = -1; // 用于唯一记录运行时的自己(RPOBlock实例)唯一id

    this.m_nodeLinker = new RPONodeLinker_1.default();
    this.m_shader = null;
    this.index = -1; // 记录自身在 RenderProcess blocks数组中的序号

    this.shdUid = -1; // 记录 material 对应的 shader program uid

    this.procuid = -1;
    this.batchEnabled = true;
    this.fixedState = true;
    this.runMode = 0;
    this.rpoNodeBuilder = null;
    this.rpoUnitBuilder = null;
    this.vtxResource = null;
    this.m_passProcess1 = new PassProcess_1.default();
    this.m_shdUpdate = false;
    this.m_shader = shader;
    this.m_uid = RPOBlock.s_uid++;
  }

  showInfo() {
    this.m_nodeLinker.showInfo();
  }

  addNode(node) {
    this.m_nodeLinker.addNodeAndSort(node);
  }

  rejoinNode(node) {
    if (this.m_nodeLinker.containsNode(node)) {
      this.m_nodeLinker.removeNodeAndSort(node);
      this.m_nodeLinker.addNodeAndSort(node);
    }
  }

  removeNode(node) {
    this.m_nodeLinker.removeNodeAndSort(node);
  }

  isEmpty() {
    return this.m_nodeLinker.getBegin() == null;
  }

  run(rc) {
    switch (this.runMode) {
      case 2:
        this.run2(rc);
        break;

      case 1:
        this.run1(rc);
        break;

      case 0:
        this.run0(rc);
        break;

      default:
        break;
    }
  }

  run0(rc) {
    let nextNode = this.m_nodeLinker.getBegin();

    if (nextNode != null) {
      this.m_shader.bindToGpu(this.shdUid);
      this.m_shader.resetUniform();
      let unit = null;
      this.m_shdUpdate = false; // console.log("run0");

      while (nextNode) {
        if (nextNode.drawEnabled) {
          unit = nextNode.unit;
          unit.updateVtx();

          if (unit.drawEnabled) {
            if (unit.rgraph && unit.rgraph.isEnabled()) {
              const proc = this.m_passProcess1;
              proc.units = [unit];
              proc.rc = rc;
              proc.vtxFlag = true;
              proc.texFlag = true;
              unit.rgraph.run(proc);
              this.m_shdUpdate = true;
            } else {
              if (this.m_shdUpdate) {
                unit.applyShader(true);
                this.m_shdUpdate = false;
              }

              unit.run(rc);
              unit.draw(rc);
            }
          }
        }

        nextNode = nextNode.next;
      }
    }
  }

  run1(rc) {
    let nextNode = this.m_nodeLinker.getBegin();

    if (nextNode != null) {
      this.m_shader.bindToGpu(this.shdUid);
      this.m_shader.resetUniform();
      let linker = this.m_nodeLinker;
      let unit = null;
      let vtxTotal = linker.getVtxTotalAt(nextNode.rvroI);
      let texTotal = linker.getTexTotalAt(nextNode.rtroI);
      let vtxFlag = vtxTotal > 0;
      let texFlag = texTotal > 0;
      this.m_shdUpdate = false; // console.log("run1", vtxFlag, texFlag, this.procuid);

      while (nextNode != null) {
        if (vtxTotal < 1) {
          vtxTotal = linker.getVtxTotalAt(nextNode.rvroI);
          vtxFlag = true;
        }

        vtxTotal--;

        if (texTotal < 1) {
          texTotal = linker.getTexTotalAt(nextNode.rtroI);
          texFlag = true;
        }

        texTotal--; // if(DebugFlag.Flag_0 > 0) console.log("nextNode.drawEnabled: ",nextNode.drawEnabled);

        if (nextNode.drawEnabled) {
          unit = nextNode.unit; // if(DebugFlag.Flag_0 > 0) console.log("unit.drawEnabled: ",unit.drawEnabled);
          // console.log("unit.rdp.getUid(): ", unit.rdp.getUid(), unit.vdrInfo.rdp.getUid());

          vtxFlag = unit.updateVtx() || vtxFlag;

          if (unit.drawEnabled) {
            if (unit.rgraph && unit.rgraph.isEnabled()) {
              const proc = this.m_passProcess1;
              proc.units = [unit];
              proc.rc = rc;
              proc.vtxFlag = vtxFlag;
              proc.texFlag = texFlag;
              unit.rgraph.run(proc);
              this.m_shdUpdate = true;
            } else {
              this.draw1(rc, unit, vtxFlag, texFlag);
            }

            vtxFlag = false;
            texFlag = false;
          }
        }

        nextNode = nextNode.next;
      }
    }
  }

  draw1(rc, unit, vtxFlag, texFlag) {
    if (this.m_shdUpdate) {
      unit.applyShader(true);
      this.m_shdUpdate = false;
    }

    if (vtxFlag) {
      unit.vro.run();
      vtxFlag = false;
    }

    if (texFlag) {
      unit.tro.run();
      texFlag = false;
    }

    unit.run2(rc);
    unit.draw(rc);
  }

  run2(rc) {
    let nextNode = this.m_nodeLinker.getBegin();

    if (nextNode != null) {
      const shader = this.m_shader;
      shader.bindToGpu(this.shdUid);
      shader.resetUniform();
      let unit = null;
      RenderStateObject_1.RenderStateObject.UseRenderState(nextNode.unit.renderState);
      RenderColorMask_1.RenderColorMask.UseRenderState(nextNode.unit.rcolorMask);
      let vtxTotal = this.m_nodeLinker.getVtxTotalAt(nextNode.rvroI);
      let texTotal = this.m_nodeLinker.getTexTotalAt(nextNode.rtroI);
      let vtxFlag = vtxTotal > 0;
      let texFlag = texTotal > 0;

      while (nextNode != null) {
        if (vtxTotal < 0) {
          vtxTotal = this.m_nodeLinker.getVtxTotalAt(nextNode.rvroI);
          vtxFlag = true;
        }

        vtxTotal--;

        if (texTotal < 0) {
          texTotal = this.m_nodeLinker.getTexTotalAt(nextNode.rtroI);
          texFlag = true;
        }

        texTotal--;

        if (nextNode.drawEnabled) {
          unit = nextNode.unit;
          vtxFlag = unit.updateVtx() || vtxFlag;

          if (unit.drawEnabled) {
            if (vtxFlag) {
              unit.vro.run();
              vtxFlag = false;
            }

            if (texFlag) {
              unit.tro.run();
              texFlag = false;
            }

            if (unit.ubo != null) {
              unit.ubo.run(rc);
            }

            shader.useTransUniform(unit.transUniform);
            shader.useUniform(unit.uniform);
            unit.draw(rc);
          }
        }

        nextNode = nextNode.next;
      }
    }
  }

  runLockMaterial(rc) {
    let nextNode = this.m_nodeLinker.getBegin();

    if (nextNode != null) {
      this.m_shader.bindToGpu(this.shdUid);
      this.m_shader.resetUniform();
      let texUnlock = this.m_shader.isTextureUnLocked();
      rc.Texture.unlocked = texUnlock;
      let unit = null;

      if (this.batchEnabled) {
        let vtxTotal = this.m_nodeLinker.getVtxTotalAt(nextNode.rvroI);
        let vtxFlag = vtxTotal > 0;

        while (nextNode != null) {
          if (vtxTotal < 1) {
            vtxTotal = this.m_nodeLinker.getVtxTotalAt(nextNode.rvroI);
            vtxFlag = true;
          }

          vtxTotal--;

          if (nextNode.drawEnabled) {
            unit = nextNode.unit;
            vtxFlag = unit.updateVtx() || vtxFlag;

            if (unit.drawEnabled) {
              if (vtxFlag) {
                unit.vro.run();
                vtxFlag = false;
              }

              if (texUnlock) {
                unit.tro.run();
              }

              unit.runLockMaterial2(null);
              unit.draw(rc);
            }
          }

          nextNode = nextNode.next;
        }
      } else {
        while (nextNode != null) {
          if (nextNode.drawEnabled) {
            unit = nextNode.unit;
            unit.updateVtx();

            if (unit.drawEnabled) {
              unit.runLockMaterial();

              if (texUnlock) {
                nextNode.tro.run();
              }

              unit.draw(rc);
            }
          }

          nextNode = nextNode.next;
        }
      }

      rc.Texture.unlocked = false;
    }
  } // 在锁定material的时候,直接绘制单个unit


  drawUnit(rc, unit, disp) {
    if (unit.drawEnabled) {
      this.m_shader.bindToGpu(unit.shdUid);
      unit.updateVtx();
      unit.run(rc);
      unit.draw(rc);
    }
  } // 在锁定material的时候,直接绘制单个unit


  drawLockMaterialByUnit(rc, unit, disp, useGlobalUniform, forceUpdateUniform) {
    unit.updateVtx();

    if (unit.drawEnabled) {
      if (forceUpdateUniform) {
        this.m_shader.resetUniform();
      } // console.log("****** drawLockMaterialByUnit(), unit: ",unit);


      let vro = unit.vro;

      if (RendererDevice_1.default.IsMobileWeb()) {
        // 如果不这么做，vro和shader attributes没有完全匹配的时候可能在某些设备上会有问题(例如ip6s上无法正常绘制)
        // 注意临时产生的 vro 对象的回收问题
        // let vro: IVertexRenderObj = this.vtxResource.getVROByResUid(disp.vbuf.getUid(), this.m_shader.getCurrentShd(), true);
        vro = this.vtxResource.getVROByResUid(disp.getVtxResUid(), this.m_shader.getCurrentShd(), true);
      }

      vro.run();
      unit.runLockMaterial2(useGlobalUniform ? this.m_shader.__$globalUniform : null);
      unit.draw(rc);
    }
  }

  reset() {
    let nextNode = this.m_nodeLinker.getBegin();
    let node = null;

    if (nextNode != null) {
      let runit;

      while (nextNode != null) {
        node = nextNode;
        nextNode = nextNode.next;
        this.rpoUnitBuilder.setRPNodeParam(node.__$ruid, this.procuid, -1);
        node.reset();
        runit = node.unit;

        if (this.rpoNodeBuilder.restore(node)) {
          this.rpoUnitBuilder.restore(runit);
        }
      }
    }

    this.index = -1;
    this.shdUid = -1;
    this.procuid = -1;
    this.m_nodeLinker.clear();
    this.rpoNodeBuilder = null;
    this.rpoUnitBuilder = null;
    this.vtxResource = null;
  }

  destroy() {
    this.reset();
  }

  getUid() {
    return this.m_uid;
  }

}

RPOBlock.s_uid = 0;
exports.default = RPOBlock;

/***/ }),

/***/ "644c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class MaterialConst {
  static GetTypeByTypeNS(tns) {
    const mc = MaterialConst;

    switch (tns) {
      case "mat4":
        return mc.SHADER_MAT4;
        break;

      case "mat3":
        return mc.SHADER_MAT3;
        break;

      case "mat2":
        return mc.SHADER_MAT2;
        break;

      case "float":
        return mc.SHADER_FLOAT;
        break;

      case "int":
        return mc.SHADER_INT;
        break;

      case "vec4":
        return mc.SHADER_VEC4;
        break;

      case "vec3":
        return mc.SHADER_VEC3;
        break;

      case "vec2":
        return mc.SHADER_VEC2;
        break;

      case "vec4[]":
        return mc.SHADER_VEC4FV;
        break;

      case "vec3[]":
        return mc.SHADER_VEC3FV;
        break;

      case "vec2[]":
        return mc.SHADER_VEC2FV;
        break;

      case "sampler2D":
        return mc.SHADER_SAMPLER2D;
        break;

      case "sampler3D":
        return mc.SHADER_SAMPLER3D;
        break;

      case "samplerCube":
        return mc.SHADER_SAMPLERCUBE;
        break;

      default:
        break;
    }

    return MaterialConst.SHADER_UNDEFINED;
  }

  static GetTypeNSByType(type) {
    const mc = MaterialConst;

    switch (type) {
      case mc.SHADER_MAT4:
        return "mat4";
        break;

      case mc.SHADER_MAT3:
        return "mat3";
        break;

      case mc.SHADER_MAT2:
        return "mat2";
        break;

      case mc.SHADER_FLOAT:
        return "float";
        break;

      case mc.SHADER_VEC4:
        return "vec4";

      case mc.SHADER_VEC3:
        return "vec3";
        break;

      case mc.SHADER_VEC2:
        return "vec2";
        break;

      case mc.SHADER_SAMPLER2D:
        return "sampler2D";
        break;

      case mc.SHADER_SAMPLER3D:
        return "sampler3D";
        break;

      case mc.SHADER_SAMPLERCUBE:
        return "samplerCube";
        break;

      case mc.SHADER_UNDEFINED:
        return "undefined";
        break;

      default:
        break;
    }

    return "";
  }

} // for glsl shader auto build


MaterialConst.ATTRINS_VTX_VS = "a_vs";
MaterialConst.ATTRINS_VTX_UVS = "a_uvs";
MaterialConst.ATTRINS_VTX_NVS = "a_nvs";
MaterialConst.ATTRINS_VTX_CVS = "a_cvs"; //

MaterialConst.UNIFORMNS_OBJ_MAT_NS = "u_objMat";
MaterialConst.UNIFORMNS_VIEW_MAT_NS = "u_viewMat";
MaterialConst.UNIFORMNS_PROJ_MAT_NS = "u_projMat"; // 取值范围3001(包括3001) 到 3255(包括3255)

MaterialConst.SHADER_UNDEFINED = 3010;
MaterialConst.SHADER_VEC2 = 3011;
MaterialConst.SHADER_VEC3 = 3012;
MaterialConst.SHADER_VEC4 = 3013;
MaterialConst.SHADER_VEC2FV = 3014;
MaterialConst.SHADER_VEC3FV = 3015;
MaterialConst.SHADER_VEC4FV = 3016;
MaterialConst.SHADER_MAT2 = 3017;
MaterialConst.SHADER_MAT3 = 3018;
MaterialConst.SHADER_MAT4 = 3019;
MaterialConst.SHADER_FLOAT = 3020;
MaterialConst.SHADER_INT = 3021;
MaterialConst.SHADER_MAT2FV = 3022;
MaterialConst.SHADER_MAT3FV = 3023;
MaterialConst.SHADER_MAT4FV = 3024;
MaterialConst.SHADER_SAMPLER2D = 3031;
MaterialConst.SHADER_SAMPLERCUBE = 3032;
MaterialConst.SHADER_SAMPLER3D = 3033;
MaterialConst.SHADER_PRECISION_LOWP = 3101;
MaterialConst.SHADER_PRECISION_MEDIUMP = 3111;
MaterialConst.SHADER_PRECISION_HIGHP = 3121; // texture uniform name define

MaterialConst.UNIFORM_TEX_SAMPLER2D = "sampler2D";
MaterialConst.UNIFORM_TEX_SAMPLERCUBE = "samplerCube";
MaterialConst.UNIFORM_TEX_SAMPLER3D = "sampler3D";
MaterialConst.UNIFORMNS_TEX_SAMPLER_0 = "u_sampler0";
MaterialConst.UNIFORMNS_TEX_SAMPLER_1 = "u_sampler1";
MaterialConst.UNIFORMNS_TEX_SAMPLER_2 = "u_sampler2";
MaterialConst.UNIFORMNS_TEX_SAMPLER_3 = "u_sampler3";
MaterialConst.UNIFORMNS_TEX_SAMPLER_4 = "u_sampler4";
MaterialConst.UNIFORMNS_TEX_SAMPLER_5 = "u_sampler5";
MaterialConst.UNIFORMNS_TEX_SAMPLER_6 = "u_sampler6";
MaterialConst.UNIFORMNS_TEX_SAMPLER_7 = "u_sampler7";
MaterialConst.UNIFORMNS_TEX_SAMPLER_LIST = [MaterialConst.UNIFORMNS_TEX_SAMPLER_0, MaterialConst.UNIFORMNS_TEX_SAMPLER_1, MaterialConst.UNIFORMNS_TEX_SAMPLER_2, MaterialConst.UNIFORMNS_TEX_SAMPLER_3, MaterialConst.UNIFORMNS_TEX_SAMPLER_4, MaterialConst.UNIFORMNS_TEX_SAMPLER_5, MaterialConst.UNIFORMNS_TEX_SAMPLER_6, MaterialConst.UNIFORMNS_TEX_SAMPLER_7];
exports.default = MaterialConst;

/***/ }),

/***/ "670e":
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

const ROVertexRes_1 = __webpack_require__("45db");

const ROIndicesRes_1 = __webpack_require__("8ae4"); // class VtxMap {
// }


class GpuVtxObject {
  constructor() {
    this.m_uid = GpuVtxObject.s_uid++;
    this.m_attachCount = 0;
    this.version = -1; // wait del times

    this.waitDelTimes = 0; // renderer context unique id

    this.rcuid = 0; // texture resource unique id

    this.resUid = 0;
    this.vertex = null;
    this.indices = new ROIndicesRes_1.ROIndicesRes();
  }

  createVertex(rc, shdp, vtx) {
    this.vertex = ROVertexRes_1.ROVertexRes.create(rc, shdp, vtx);

    this.vertex.__$attachThis();
  }

  __$attachThis() {
    ++this.m_attachCount; //console.log("GpuVtxObject::__$attachThis() this.m_attachCount: "+this.m_attachCount);
  }

  __$detachThis() {
    --this.m_attachCount; //console.log("GpuVtxObject::__$detachThis() this.m_attachCount: "+this.m_attachCount);

    if (this.m_attachCount < 1) {
      this.m_attachCount = 0; // console.log("GpuVtxObject::__$detachThis() this.m_attachCount value is 0.");
      // do something
    }
  }

  getAttachCount() {
    return this.m_attachCount;
  }

  createVRO(rc, shdp, vaoEnabled) {
    // console.log("GpuVtxObject::createVRO(), this.resUid: ", this.resUid, ", uid: ", this.m_uid, ", this.indices.getUid(): ", this.indices.getUid());
    let vro = this.vertex.createVRO(rc, shdp, vaoEnabled, this.indices); // vro.ibufStep = this.indices.ibufStep;

    return vro;
  }

  updateToGpu(rc) {
    this.indices.updateToGpu(rc);
    this.vertex.updateToGpu(rc);
  }

  destroy(rc) {
    if (this.getAttachCount() < 1 && this.resUid >= 0) {
      if (this.vertex != null) {
        this.vertex.__$detachThis();

        this.vertex.destroy(rc);
        this.vertex = null;
      }

      this.indices.destroy(rc);
      this.resUid = -1;
    }
  }

}

GpuVtxObject.s_uid = 0;
exports.GpuVtxObject = GpuVtxObject;

/***/ }),

/***/ "6d49":
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

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

const FrameBufferType_1 = __importDefault(__webpack_require__("baae"));

const TextureFormat_1 = __importDefault(__webpack_require__("ffc0"));

const TextureTarget_1 = __importDefault(__webpack_require__("5deb"));

const RenderFBOProxy_1 = __importDefault(__webpack_require__("56c5"));

class FrameBufferObject {
  constructor(rcuid, texResource, frameBufType) {
    this.m_uid = -1; // renderer context unique id

    this.m_rcuid = 0;
    this.m_COLOR_ATTACHMENT0 = 0x0;
    this.m_fbo = null;
    this.m_depthStencilRBO = null;
    this.m_depthRBO = null;
    this.m_colorRBO = null;
    this.m_width = 512;
    this.m_height = 512;
    this.m_bufferLType = 0;
    this.m_gl = null;
    this.m_fboTarget = 0;
    this.m_texTargetTypes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.m_attachmentMaskList = [true, true, true, true, true, true, true, true];
    this.m_preAttachTotal = 0;
    this.m_preAttachIndex = 0;
    this.m_activeAttachmentTotal = 0;
    this.m_attachmentIndex = 0;
    this.m_clearDepthArr = new Float32Array(1);
    this.m_clearColorArr = new Float32Array(4);
    this.m_stencilValueArr = new Int16Array(4);
    this.m_fboSizeChanged = false;
    this.textureLevel = 0;
    this.sizeFixed = false;
    this.writeDepthEnabled = true;
    this.writeStencilEnabled = false;
    this.multisampleEnabled = false;
    this.multisampleLevel = 0;
    this.m_preAttachments = new Uint32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.m_preTragets = new Uint32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.m_preFTIndex = 0;
    this.m_haveDepthTex = false; //invalidateFramebuffer(target, attachments)

    this.m_resizeW = 2;
    this.m_resizeH = 2;
    this.m_rcuid = rcuid;
    this.m_texRes = texResource;
    this.m_bufferLType = frameBufType;
    this.m_uid = FrameBufferObject.s_uid++;
  }

  getUid() {
    return this.m_uid;
  }

  resetAttachmentMask(boo) {
    let i = this.m_attachmentMaskList.length - 1;

    while (i >= 0) {
      this.m_attachmentMaskList[i] = boo;
      --i;
    } //console.log("resetAttachmentMask, this.m_attachmentMaskList: ",this.m_attachmentMaskList);

  }

  setAttachmentMaskAt(index, boo) {
    this.m_attachmentMaskList[index] = boo;
  }

  getActiveAttachmentTotal() {
    return this.m_haveDepthTex ? this.m_activeAttachmentTotal - 1 : this.m_activeAttachmentTotal;
  }

  getAttachmentTotal() {
    return this.m_attachmentMaskList.length;
  }

  bindToBackbuffer(frameBufferType) {
    switch (frameBufferType) {
      case FrameBufferType_1.default.DRAW_FRAMEBUFFER:
        this.m_gl.bindFramebuffer(this.m_gl.DRAW_FRAMEBUFFER, null);
        break;

      case FrameBufferType_1.default.READ_FRAMEBUFFER:
        this.m_gl.indFramebuffer(this.m_gl.READ_FRAMEBUFFER, null);
        break;

      default:
        this.m_gl.bindFramebuffer(this.m_gl.FRAMEBUFFER, null);
    }
  }

  bind(frameBufferType) {
    if (this.m_fbo != null) {
      switch (frameBufferType) {
        case FrameBufferType_1.default.DRAW_FRAMEBUFFER:
          this.m_gl.bindFramebuffer(this.m_gl.DRAW_FRAMEBUFFER, this.m_fbo);
          break;

        case FrameBufferType_1.default.READ_FRAMEBUFFER:
          this.m_gl.bindFramebuffer(this.m_gl.READ_FRAMEBUFFER, this.m_fbo);
          break;

        default:
          this.m_gl.bindFramebuffer(this.m_gl.FRAMEBUFFER, this.m_fbo);
      }
    }
  }

  getFBO() {
    return this.m_fbo;
  }

  getDepthStencilRBO() {
    return this.m_depthStencilRBO;
  }

  getDepthRBO() {
    return this.m_depthRBO;
  }

  getWidth() {
    return this.m_width;
  }

  getHeight() {
    return this.m_height;
  }

  getFramebufferType() {
    return this.m_bufferLType;
  }
  /**
   * bind a texture to fbo attachment by attachment index
   * @param texProxy  IRenderTexture instance
   * @param enableDepth  enable depth buffer yes or no
   * @param enableStencil  enable stencil buffer yes or no
   * @param attachmentIndex  fbo attachment index
   */


  renderToTexAt(rgl, texProxy, attachmentIndex) {
    let inFormat = texProxy != null ? texProxy.internalFormat : -1;
    this.m_gl = rgl;

    if (attachmentIndex == 0) {
      this.m_preFTIndex = 0;
      this.m_haveDepthTex = false; // 注意, 防止多次重复调用的没必要重设

      this.m_gl.bindFramebuffer(this.m_fboTarget, this.m_fbo);

      if (inFormat != TextureFormat_1.default.DEPTH_COMPONENT && inFormat != TextureFormat_1.default.DEPTH_STENCIL) {
        this.m_activeAttachmentTotal = 0;
        this.m_attachmentIndex = 0;
      }
    }

    let targetType = -1;
    let rTex = null; //trace("FrameBufferObject::use(), texProxy != null: "+(texProxy != null));

    if (texProxy != null) {
      targetType = texProxy.getTargetType();
      rTex = this.m_texRes.getGpuBuffer(texProxy.getResUid());
      texProxy.uploadFromFbo(this.m_texRes, this.m_width, this.m_height);
    } else {
      targetType = this.m_texTargetTypes[this.m_activeAttachmentTotal];
    }

    this.framebufferTextureBind(rgl, targetType, inFormat, rTex);
  }

  glFramebufferTex2D(attachment, rTex) {
    let rgl = this.m_gl;
    rgl.framebufferTexture2D(this.m_fboTarget, attachment, rgl.TEXTURE_2D, rTex, 0);
    this.m_preAttachments[this.m_preFTIndex] = attachment;
    this.m_preTragets[this.m_preFTIndex] = rgl.TEXTURE_2D;
    this.m_preFTIndex++;
  }

  glFramebufferTexCube(attachment, cubeFaceIndex, rTex) {
    let rgl = this.m_gl;
    rgl.framebufferTexture2D(this.m_fboTarget, attachment, rgl.TEXTURE_CUBE_MAP_POSITIVE_X + cubeFaceIndex, rTex, 0);
    this.m_preAttachments[this.m_preFTIndex] = attachment;
    this.m_preTragets[this.m_preFTIndex] = rgl.TEXTURE_CUBE_MAP_POSITIVE_X + cubeFaceIndex;
    this.m_preFTIndex++;
  }

  framebufferTexture2D(rgl, targetType, inFormat, rTex) {
    let attachment = -1;

    switch (inFormat) {
      case TextureFormat_1.default.DEPTH_COMPONENT:
        this.m_haveDepthTex = true;
        attachment = this.m_gl.DEPTH_ATTACHMENT; //rgl.framebufferTexture2D(this.m_fboTarget, this.m_gl.DEPTH_ATTACHMENT, rgl.TEXTURE_2D, rTex, 0);
        //this.glFramebufferTex2D(this.m_gl.DEPTH_ATTACHMENT, rTex);

        break;

      case TextureFormat_1.default.DEPTH_STENCIL:
        this.m_haveDepthTex = true;
        attachment = this.m_gl.DEPTH_STENCIL_ATTACHMENT; //rgl.framebufferTexture2D(this.m_fboTarget, this.m_gl.DEPTH_STENCIL_ATTACHMENT, rgl.TEXTURE_2D, rTex, 0);
        //this.glFramebufferTex2D(this.m_gl.DEPTH_STENCIL_ATTACHMENT, rTex);

        break;

      default:
        attachment = this.m_COLOR_ATTACHMENT0 + this.m_attachmentIndex;
        /*
        if(this.m_attachmentMaskList[this.m_activeAttachmentTotal])
        {
            
            //rgl.framebufferTexture2D(this.m_fboTarget, this.m_COLOR_ATTACHMENT0 + this.m_attachmentIndex, rgl.TEXTURE_2D, rTex, this.textureLevel);
            this.glFramebufferTex2D(this.m_COLOR_ATTACHMENT0 + this.m_attachmentIndex, rTex);
            ++this.m_attachmentIndex;
            if (rTex != null)
            {
                this.m_texTargetTypes[this.m_activeAttachmentTotal] = targetType;
            }
            else
            {
                this.m_texTargetTypes[this.m_activeAttachmentTotal] = 0;
            }
        }
        else
        {
            this.m_texTargetTypes[this.m_activeAttachmentTotal] = 0;
        }
        ++this.m_activeAttachmentTotal;
        //*/

        break;
    }

    if (attachment > 0) {
      if (this.m_attachmentMaskList[this.m_activeAttachmentTotal]) {
        this.glFramebufferTex2D(attachment, rTex);
        ++this.m_attachmentIndex;

        if (rTex != null) {
          this.m_texTargetTypes[this.m_activeAttachmentTotal] = targetType;
        } else {
          this.m_texTargetTypes[this.m_activeAttachmentTotal] = 0;
        }
      } else {
        this.m_texTargetTypes[this.m_activeAttachmentTotal] = 0;
      }

      ++this.m_activeAttachmentTotal;
    }
  }

  framebufferTextureBind(rgl, targetType, inFormat, rTex) {
    // current texture attachments
    switch (targetType) {
      case TextureTarget_1.default.TEXTURE_2D:
        this.framebufferTexture2D(rgl, targetType, inFormat, rTex);
        break;

      case TextureTarget_1.default.TEXTURE_CUBE:
        let cubeAttachmentTot = 0;

        for (let i = 0; i < 6; ++i) {
          if (this.m_attachmentMaskList[i]) {
            //rgl.framebufferTexture2D(this.m_fboTarget, this.m_COLOR_ATTACHMENT0 + this.m_attachmentIndex, rgl.TEXTURE_CUBE_MAP_POSITIVE_X + i, rTex, this.textureLevel);
            this.glFramebufferTexCube(this.m_COLOR_ATTACHMENT0 + this.m_attachmentIndex, i, rTex);
            ++this.m_attachmentIndex;

            if (rTex != null) {
              this.m_texTargetTypes[this.m_activeAttachmentTotal + i] = targetType;
            } else {
              this.m_texTargetTypes[this.m_activeAttachmentTotal + i] = 0;
            }

            cubeAttachmentTot++;
          } else {
            this.m_texTargetTypes[this.m_activeAttachmentTotal + i] = 0;
          }
        }

        cubeAttachmentTot = cubeAttachmentTot > 0 ? cubeAttachmentTot : 6;
        this.m_activeAttachmentTotal += cubeAttachmentTot;
        break;

      case TextureTarget_1.default.TEXTURE_SHADOW_2D:
        if (this.m_attachmentMaskList[this.m_activeAttachmentTotal]) {
          //rgl.framebufferTexture2D(this.m_gl.FRAMEBUFFER, this.m_gl.DEPTH_ATTACHMENT, this.m_gl.TEXTURE_2D, rTex, this.textureLevel);
          this.glFramebufferTex2D(this.m_gl.DEPTH_ATTACHMENT, rTex);

          if (rTex != null) {
            this.m_texTargetTypes[this.m_activeAttachmentTotal] = targetType;
          } else {
            this.m_texTargetTypes[this.m_activeAttachmentTotal] = 0;
          }
        } else {
          this.m_texTargetTypes[this.m_activeAttachmentTotal] = 0;
        }

        ++this.m_activeAttachmentTotal;
        break;

      default:
        break;
    }
  }

  reset() {
    this.m_preAttachTotal = -1;
    this.m_preAttachIndex = -1;
  }

  use(rgl) {
    this.m_gl = rgl;

    if (this.m_fbo != null) {
      //console.log("this.m_preAttachIndex,this.m_attachmentIndex: ",this.m_preAttachIndex,this.m_attachmentIndex,this.m_activeAttachmentTotal);
      if (this.m_activeAttachmentTotal > 1) {
        if (this.m_preAttachIndex != this.m_attachmentIndex) {
          let attachments = [];
          let i = 0;

          for (; i < this.m_attachmentIndex; ++i) {
            attachments.push(this.m_COLOR_ATTACHMENT0 + i);
          }

          if (this.m_preAttachIndex > this.m_attachmentIndex) {
            for (; i < this.m_preAttachIndex; ++i) {
              this.m_gl.framebufferTexture2D(this.m_fboTarget, this.m_preAttachments[i], this.m_preTragets[i], null, 0);
            }
          } // support webgl2 and webgl1
          //console.log("AAA attachments 0: ",attachments);


          RenderFBOProxy_1.default.DrawBuffers(attachments);
          this.m_preAttachIndex = this.m_attachmentIndex;
        }
      } else if (this.m_preAttachIndex != this.m_attachmentIndex) {
        if (this.m_preAttachIndex > this.m_attachmentIndex) {
          for (let i = 1; i < this.m_preAttachIndex; ++i) {
            this.m_gl.framebufferTexture2D(this.m_fboTarget, this.m_preAttachments[i], this.m_preTragets[i], null, 0);
          }
        }

        let attachments = [this.m_COLOR_ATTACHMENT0]; //console.log("AAA attachments 1: ",attachments);

        RenderFBOProxy_1.default.DrawBuffers(attachments);
        this.m_preAttachIndex = this.m_attachmentIndex;
      }

      this.m_preAttachTotal = this.m_activeAttachmentTotal;
    }
  }

  clearOnlyColor(color4) {
    if (this.m_fbo != null) {
      if (RendererDevice_1.default.IsWebGL2()) {
        this.m_clearColorArr[0] = color4[0];
        this.m_clearColorArr[1] = color4[1];
        this.m_clearColorArr[2] = color4[2];
        this.m_clearColorArr[3] = color4[3];

        if (this.m_preAttachTotal > 1) {
          for (let i = 0; i < this.m_preAttachTotal; ++i) {
            this.m_gl.clearBufferfv(this.m_gl.COLOR, i, this.m_clearColorArr);
          }
        } else {
          this.m_gl.clearBufferfv(this.m_gl.COLOR, 0, this.m_clearColorArr);
        }
      } else {
        this.m_gl.clearColor(color4[0], color4[1], color4[2], color4[3]);
      }
    } //trace("XXXXXXXXXXXXXXXXXXXX FrameBufferObject::clearOnlyColor(), m_fbo: ", m_fbo);

  }

  clearOnlyDepth(depth = 1.0) {
    if (RendererDevice_1.default.IsWebGL2()) {
      this.m_clearDepthArr[0] = depth;
      this.m_gl.clearBufferfv(this.m_gl.DEPTH, 0, this.m_clearDepthArr);
    } else {
      this.m_gl.clearDepth(depth);
    }
  }

  clearOnlyStencil(stencil) {
    this.m_stencilValueArr[0] = stencil;
    this.m_gl.clearBufferuiv(this.m_gl.STENCIL, 0, this.m_stencilValueArr);
  }

  clearOnlyDepthAndStencil(depth, stencil) {
    this.m_gl.clearBufferfi(this.m_gl.DEPTH_STENCIL, 0, depth, stencil);
  }

  invalidateFramebuffer() {} // 一旦这个函数调用，则size的控制权以后都会由这个resize决定


  resize(pw, ph) {
    if (this.m_resizeW != pw || this.m_resizeH != ph) {
      this.m_fboSizeChanged = true;
      this.m_resizeW = pw;
      this.m_resizeH = ph;
    }
  }

  initialize(rgl, pw, ph) {
    this.m_gl = rgl;
    this.m_COLOR_ATTACHMENT0 = RenderFBOProxy_1.default.COLOR_ATTACHMENT0;

    if (this.m_fboSizeChanged) {
      pw = this.m_resizeW;
      ph = this.m_resizeH;
    }

    if (this.m_fbo == null) {
      this.createNewFBO(rgl, pw, ph);
      console.log("FrameBufferObject create a new fbo: ", this);
    } else if (this.m_width != pw || this.m_height != ph) {
      // ready rebuild some new fbo's Renderbuffers.
      this.createNewFBO(rgl, pw, ph);
      console.log("FrameBufferObject ready rebuild another new fbo(" + pw + "," + ph + "): ", this);
    }

    this.m_fboSizeChanged = false;
  }

  isSizeChanged() {
    return this.m_fboSizeChanged;
  }

  destroy(rgl) {
    if (this.m_fbo != null) {
      if (this.m_depthStencilRBO != null) {
        rgl.deleteFramebuffer(this.m_depthStencilRBO);
        this.m_depthStencilRBO = null;
      }

      if (this.m_depthRBO != null) {
        rgl.deleteFramebuffer(this.m_depthRBO);
        this.m_depthRBO = null;
      }

      if (this.m_colorRBO != null) {
        rgl.deleteFramebuffer(this.m_colorRBO);
        this.m_colorRBO = null;
      }

      rgl.deleteFramebuffer(this.m_fbo);
      this.m_fbo = null;
    }

    this.m_gl = null;
    this.m_fboTarget = 0;
    this.m_fboSizeChanged = false;
  } // toString = function()
  // {
  // 	switch (this.m_bufferLType)
  // 	{
  // 	case FrameBufferType.DRAW_FRAMEBUFFER:
  // 		return "[FrameBufferObject(DRAW_FRAMEBUFFER(uid="+this.m_uid+" width="+this.m_width+",height="+this.m_height+")]";
  // 		break;
  // 	case FrameBufferType.READ_FRAMEBUFFER:
  // 		return "[FrameBufferObject(READ_FRAMEBUFFER(uid="+this.m_uid+" width="+this.m_width+",height="+this.m_height+")]";
  // 		break;
  // 	default:
  // 		break;
  // 	}
  // 	return "[FrameBufferObject(FRAMEBUFFER(uid="+this.m_uid+" width="+this.m_width+",height="+this.m_height+")]";
  // }


  buildDepthStencilRBO(rgl, pw, ph) {
    if (this.m_depthStencilRBO == null) this.m_depthStencilRBO = rgl.createRenderbuffer();

    if (this.multisampleEnabled) {
      rgl.bindRenderbuffer(rgl.RENDERBUFFER, this.m_depthStencilRBO);
      rgl.renderbufferStorageMultisample(rgl.RENDERBUFFER, this.multisampleLevel, rgl.DEPTH_STENCIL, pw, ph);
      rgl.framebufferRenderbuffer(this.m_fboTarget, rgl.DEPTH_STENCIL_ATTACHMENT, rgl.RENDERBUFFER, this.m_depthStencilRBO);
      if (this.m_colorRBO == null) this.m_colorRBO = rgl.createRenderbuffer();
      rgl.bindRenderbuffer(rgl.RENDERBUFFER, this.m_colorRBO);
      rgl.renderbufferStorageMultisample(rgl.RENDERBUFFER, this.multisampleLevel, rgl.RGBA8, pw, ph);
      rgl.framebufferRenderbuffer(this.m_fboTarget, this.m_COLOR_ATTACHMENT0, rgl.RENDERBUFFER, this.m_colorRBO);
    } else {
      rgl.bindRenderbuffer(rgl.RENDERBUFFER, this.m_depthStencilRBO);
      rgl.renderbufferStorage(rgl.RENDERBUFFER, rgl.DEPTH_STENCIL, pw, ph);
      rgl.framebufferRenderbuffer(this.m_fboTarget, rgl.DEPTH_STENCIL_ATTACHMENT, rgl.RENDERBUFFER, this.m_depthStencilRBO);
    }
  }

  buildDepthRBO(rgl, pw, ph) {
    if (this.m_depthRBO == null) this.m_depthRBO = rgl.createRenderbuffer();

    if (this.multisampleEnabled) {
      rgl.bindRenderbuffer(rgl.RENDERBUFFER, this.m_depthRBO);
      rgl.renderbufferStorageMultisample(rgl.RENDERBUFFER, this.multisampleLevel, rgl.DEPTH_COMPONENT24, pw, ph);
      rgl.framebufferRenderbuffer(this.m_fboTarget, rgl.DEPTH_ATTACHMENT, rgl.RENDERBUFFER, this.m_depthRBO);
      if (this.m_colorRBO == null) this.m_colorRBO = rgl.createRenderbuffer();
      rgl.bindRenderbuffer(rgl.RENDERBUFFER, this.m_colorRBO);
      rgl.renderbufferStorageMultisample(rgl.RENDERBUFFER, this.multisampleLevel, rgl.RGBA8, pw, ph);
      rgl.framebufferRenderbuffer(this.m_fboTarget, this.m_COLOR_ATTACHMENT0, rgl.RENDERBUFFER, this.m_colorRBO);
    } else {
      rgl.bindRenderbuffer(rgl.RENDERBUFFER, this.m_depthRBO);

      if (RendererDevice_1.default.IsWebGL2()) {
        rgl.renderbufferStorage(rgl.RENDERBUFFER, rgl.DEPTH_COMPONENT24, pw, ph);
      } else {
        console.log("Only use webgl1 depth fbo buffer.");
        rgl.renderbufferStorage(rgl.RENDERBUFFER, rgl.DEPTH_COMPONENT16, pw, ph);
      }

      rgl.framebufferRenderbuffer(this.m_fboTarget, rgl.DEPTH_ATTACHMENT, rgl.RENDERBUFFER, this.m_depthRBO);
    }
  }

  buildStencilRBO(rgl, pw, ph) {
    if (this.m_depthStencilRBO == null) {
      //trace("FrameBufferObject create stencil buf...this.multisampleEnabled: "+this.multisampleEnabled+",this.multisampleLevel:"+this.multisampleLevel);
      if (this.m_depthStencilRBO == null) this.m_depthStencilRBO = rgl.createRenderbuffer();

      if (this.multisampleEnabled) {
        rgl.bindRenderbuffer(rgl.RENDERBUFFER, this.m_depthStencilRBO);
        rgl.renderbufferStorageMultisample(rgl.RENDERBUFFER, this.multisampleLevel, rgl.STENCIL_INDEX8, pw, ph);
        rgl.framebufferRenderbuffer(this.m_fboTarget, rgl.STENCIL_ATTACHMENT, rgl.RENDERBUFFER, this.m_depthStencilRBO);
        if (this.m_colorRBO == null) this.m_colorRBO = rgl.createRenderbuffer();
        rgl.bindRenderbuffer(rgl.RENDERBUFFER, this.m_colorRBO);
        rgl.renderbufferStorageMultisample(rgl.RENDERBUFFER, this.multisampleLevel, rgl.RGBA8, pw, ph);
        rgl.framebufferRenderbuffer(this.m_fboTarget, this.m_COLOR_ATTACHMENT0, rgl.RENDERBUFFER, this.m_colorRBO);
      } else {
        rgl.bindRenderbuffer(rgl.RENDERBUFFER, this.m_depthStencilRBO);
        rgl.renderbufferStorage(rgl.RENDERBUFFER, rgl.STENCIL_INDEX8, pw, ph);
        rgl.framebufferRenderbuffer(this.m_fboTarget, rgl.STENCIL_ATTACHMENT, rgl.RENDERBUFFER, this.m_depthStencilRBO);
      }
    }
  }

  buildColorRBO(rgl, pw, ph) {
    if (this.m_colorRBO == null) this.m_colorRBO = rgl.createRenderbuffer();
    rgl.bindRenderbuffer(rgl.RENDERBUFFER, this.m_colorRBO);

    if (this.multisampleEnabled) {
      rgl.renderbufferStorageMultisample(rgl.RENDERBUFFER, this.multisampleLevel, rgl.RGBA8, pw, ph);
    } else {
      rgl.renderbufferStorage(rgl.RENDERBUFFER, rgl.RGBA8, pw, ph);
    }

    rgl.framebufferRenderbuffer(this.m_fboTarget, this.m_COLOR_ATTACHMENT0, rgl.RENDERBUFFER, this.m_colorRBO);
    console.log("FrameBufferObject create only color buf...this.multisampleEnabled: " + this.multisampleEnabled + ",this.multisampleLevel:" + this.multisampleLevel);
  }

  createNewFBO(rgl, pw, ph) {
    let boo = this.m_fbo == null;
    this.m_preAttachTotal = this.m_activeAttachmentTotal = 0;
    this.m_preAttachIndex = this.m_attachmentIndex = 0;
    this.m_width = pw;
    this.m_height = ph;
    this.m_resizeW = pw;
    this.m_resizeH = ph; //trace("XXXXXXXXXXXXXX ready create framebuf, m_fbo: ", m_fbo);

    if (boo) this.m_fbo = rgl.createFramebuffer(); //trace("XXXXXXXXXXXXXX doing create framebuf, m_fbo: ", m_fbo);

    switch (this.m_bufferLType) {
      case FrameBufferType_1.default.DRAW_FRAMEBUFFER:
        this.m_fboTarget = rgl.DRAW_FRAMEBUFFER; //console.log("create FrameBufferType is DRAW_FRAMEBUFFER.");

        break;

      case FrameBufferType_1.default.READ_FRAMEBUFFER:
        this.m_fboTarget = rgl.READ_FRAMEBUFFER; //console.log("create FrameBufferType is READ_FRAMEBUFFER.");

        break;

      default:
        this.m_fboTarget = rgl.FRAMEBUFFER; //console.log("create FrameBufferType is FRAMEBUFFER.");

        break;
    }

    rgl.bindFramebuffer(this.m_fboTarget, this.m_fbo); //console.log("FrameBufferObject::initialize() writeDepthEnabled: "+this.writeDepthEnabled+", writeDepthEnabled: " , this.writeDepthEnabled+" ,size("+pw + "," ,ph+")");

    if (this.writeDepthEnabled) {
      //trace("FrameBufferObject writeStencilEnabled: " ,this.writeStencilEnabled);
      if (this.writeStencilEnabled) {
        if (this.m_depthStencilRBO == null) {
          //trace("FrameBufferObject create depth and stencil buf...this.multisampleEnabled: "+this.multisampleEnabled+",this.multisampleLevel:"+this.multisampleLevel);
          this.buildDepthStencilRBO(rgl, pw, ph);
        }
      } else {
        this.buildDepthRBO(rgl, pw, ph);
      }
    } else if (this.writeStencilEnabled) {
      this.buildStencilRBO(rgl, pw, ph);
    } else {
      console.log("fffrfrfrfrfrfr");
      this.buildColorRBO(rgl, pw, ph);
    }

    if (boo) {
      let e = rgl.checkFramebufferStatus(this.m_fboTarget); //trace("XXXXX   XXXXXXXXx Err: "+e+", rgl.FRAMEBUFFER_COMPLETE: "+rgl.FRAMEBUFFER_COMPLETE);

      if (e !== rgl.FRAMEBUFFER_COMPLETE) {
        console.error("FrameBufferObject::createNewFBO(), Error: create failure!!!!");
      } else {
        console.log("FrameBufferObject::createNewFBO(), create success...,size: " + pw + "," + ph);
      }
    }

    FrameBufferObject.BindToBackbuffer(rgl, this.m_bufferLType);
  }

  static BindToBackbuffer(rc, frameBufferType) {
    switch (frameBufferType) {
      case FrameBufferType_1.default.DRAW_FRAMEBUFFER:
        rc.bindFramebuffer(rc.DRAW_FRAMEBUFFER, null);
        break;

      case FrameBufferType_1.default.READ_FRAMEBUFFER:
        rc.indFramebuffer(rc.READ_FRAMEBUFFER, null);
        break;

      default:
        rc.bindFramebuffer(rc.FRAMEBUFFER, null);
        break;
    }
  }

}

FrameBufferObject.s_uid = 0;
exports.default = FrameBufferObject;

/***/ }),

/***/ "722e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

class RenderFilter {}

RenderFilter.NEAREST = 4001;
RenderFilter.LINEAR = 4002;
RenderFilter.LINEAR_MIPMAP_LINEAR = 4003;
RenderFilter.NEAREST_MIPMAP_NEAREST = 4004;
RenderFilter.LINEAR_MIPMAP_NEAREST = 4005;
RenderFilter.NEAREST_MIPMAP_LINEAR = 4006;
exports.default = RenderFilter;

/***/ }),

/***/ "7279":
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

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

const ShaderUniform_1 = __importDefault(__webpack_require__("d53d"));

class ShaderGlobalUniform extends ShaderUniform_1.default {
  constructor(slot) {
    super();
    this.m_slot = null;
    this.m_slotFlags = null;
    this.m_slotDatas = null;
    this.slotId = 0;
    this.slotIndex = 0;
    this.uniformsTotal = 0;
    this.locationIndexList = null;
    this.locations = null;
    this.rst = 0;
    this.always = false;
    this.m_slot = slot;
    this.m_slotFlags = this.m_slot.flagList;
    this.m_slotDatas = this.m_slot.dataList;
  }

  applyData() {}

  clone() {
    let guniform = new ShaderGlobalUniform(this.m_slot);
    guniform.types = this.types.slice(0);
    guniform.uniformNameList = this.uniformNameList.slice(0);
    guniform.dataSizeList = this.dataSizeList.slice(0);
    guniform.slotIndex = this.slotIndex;
    guniform.uniformsTotal = this.uniformsTotal;
    guniform.slotId = this.slotId;
    guniform.always = this.always;
    guniform.rst = this.rst;
    return guniform;
  } // for multi uniforms data src, for example: camera, lightGroup


  copyDataFromProbe(probe) {
    this.types = probe.uniformTypes.slice(0);
    this.dataSizeList = probe.dataSizeList.slice(0);
    this.slotIndex = probe.getSlotBeginIndex();
    this.uniformsTotal = probe.uniformsTotal;
    this.slotId = probe.getRCUid();
  }

  copyDataFromProbeAt(i, probe) {
    if (this.types == null) {
      this.types = [];
      this.dataSizeList = [];
    }

    this.slotIndex = probe.getSlotBeginIndex() + i;
    this.uniformsTotal = 1;
    this.slotId = probe.getRCUid();
    this.types[0] = probe.uniformTypes[i];
    this.dataSizeList[0] = probe.dataSizeList[i];
  }

  use(rc) {
    //let slot: UniformDataSlot = UniformDataSlot.GetSlotAt(rc.getRCUid());
    if (this.always || this.rst != this.m_slotFlags[this.slotIndex]) {
      //  if(rc.getGPUProgram() == null) {
      //      console.warn("current gpu shader program is null");
      //  }
      //  if(this.program != null) {
      //      console.log("have gpu shader program in this global uniform, program: ",this.program,this.locations);
      //  }
      //  if(this.program != null && rc.getGPUProgram() != this.program) {
      //      console.warn("current gpu shader program can't match this global uniform.");
      //  }
      // console.log("global uniform run(), names: ", this.uniformNameList);
      this.rst = this.m_slotFlags[this.slotIndex];
      let i = 0;
      let datas = this.m_slotDatas;

      if (RendererDevice_1.default.IsWebGL1()) {
        for (; i < this.uniformsTotal; ++i) {
          rc.useUniformV1(this.locations[i], this.types[i], datas[this.slotIndex + i], this.dataSizeList[i]);
        }
      } else {
        //console.log(this.uns, ", GlobalUniform this.uniformsTotal: ",this.uniformsTotal,this.dataSizeList);
        for (; i < this.uniformsTotal; ++i) {
          // if(this.types[i] == MaterialConst.SHADER_VEC4FV) {
          //     console.log("SHADER_VEC4FV, slot.dataList["+(this.slotIndex + i)+"]: ",slot.dataList[this.slotIndex + i]);
          // }
          rc.useUniformV2(this.locations[i], this.types[i], datas[this.slotIndex + i], this.dataSizeList[i], 0);
        }
      }
    }
  }

  destroy() {
    this.types = null;
    this.dataSizeList = null;
    this.slotIndex = -1;
    this.uniformsTotal = 0;
    this.m_slot = null;
    this.m_slotFlags = null;
    this.m_slotDatas = null;
  }

}

exports.default = ShaderGlobalUniform;

/***/ }),

/***/ "72bb":
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
var DisplayRenderSign;

(function (DisplayRenderSign) {
  // 还没有加入 renderer
  DisplayRenderSign[DisplayRenderSign["NOT_IN_RENDERER"] = -1] = "NOT_IN_RENDERER"; // 正在进入 renderer

  DisplayRenderSign[DisplayRenderSign["GO_TO_RENDERER"] = 1] = "GO_TO_RENDERER"; // 真正存在于 renderer, 也就是直接可以在 process 中使用了

  DisplayRenderSign[DisplayRenderSign["LIVE_IN_RENDERER"] = 2] = "LIVE_IN_RENDERER";
})(DisplayRenderSign || (DisplayRenderSign = {}));

exports.DisplayRenderSign = DisplayRenderSign;

/***/ }),

/***/ "744d":
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

class EmptyVDRInfo {
  constructor() {
    this.rdp = null;
  }

  destroy() {
    if (this.rdp != null) {
      this.rdp.clear();
      this.rdp = null;
    }
  }

  lock() {}

  unlock() {}

  isUnlock() {
    return false;
  }

  setInstanceCount(insCount) {}

  setWireframe(wireframe) {}

  applyIvsDataAt(index) {}

  setIvsParam(ivsIndex = -1, ivsCount = -1) {}

  reset() {}

  __$$copyToRDP() {
    return false;
  }

}

exports.default = EmptyVDRInfo;

/***/ }),

/***/ "7499":
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

class RenderMaterialProxy {
  constructor() {
    this.m_dispBuilder = null;
    this.m_shader = null;
    this.m_texRes = null;
  }

  setDispBuilder(builder) {
    if (this.m_dispBuilder == null) {
      this.m_dispBuilder = builder;
      this.m_shader = builder.getRenderShader();
      this.m_texRes = builder.getTextureResource();
    }
  }

  unlockMaterial() {
    this.m_shader.unlock();
    this.m_texRes.unlocked = true;
  }

  lockMaterial() {
    this.m_shader.lock();
    this.m_texRes.unlocked = false;
  }

  isUnlockMatrial() {
    return this.m_texRes.unlocked;
  }

  unlockTexture() {
    this.m_shader.textureUnlock();
  }

  lockTexture() {
    this.m_shader.textureLock();
  }

  renderBegin() {
    this.m_shader.renderBegin();
    this.m_texRes.renderBegin();
  }

  resetUniform() {
    this.m_shader.resetUniform();
  }

  useGlobalMaterial(material, materialUniformUpdate = false) {
    if (material != null) {
      this.m_dispBuilder.updateGlobalMaterial(material, materialUniformUpdate);
    }
  }

  updateMaterialUniform(material) {
    this.m_shader.updateUniform(material.__$uniform);
  }

}

exports.default = RenderMaterialProxy;

/***/ }),

/***/ "74c3":
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
}); // gpu vertex buffer renderer resource

class ROVertexResource {
  constructor(rcuid, gl, vtxBuilder) {
    this.m_resMap = new Map();
    this.m_freeMap = new Map();
    this.m_updateIds = []; // 显存的vtx buffer的总数

    this.m_vtxResTotal = 0;
    this.m_attachTotal = 0;
    this.m_delay = 128;
    this.m_haveDeferredUpdate = false;
    /**
     * updating times total, the min value is 4, the default value is 16
     */

    this.m_vtxUpdateTotal = 16; // renderer context unique id

    this.m_rcuid = 0;
    this.m_gl = null;
    this.m_vtxBuilder = null;
    this.unlocked = true;
    this.m_rcuid = rcuid;
    this.m_gl = gl;
    this.m_vtxBuilder = vtxBuilder;
  }
  /**
   * set the updating times total that update vertex data to gpu in one frame time
   * @param total updating times total, the min value is 4, the default value is 16
   */


  setVtxUpdateTimesTotal(total) {
    this.m_vtxUpdateTotal = total > 4 ? total : 4;
  }

  createResByParams3(resUid, param0, param1, param2) {
    return false;
  }
  /**
   * @returns return renderer context unique id
   */


  getRCUid() {
    return this.m_rcuid;
  }
  /**
   * @returns return system gpu context
   */


  getRC() {
    return this.m_gl;
  }
  /**
   * check whether the renderer runtime resource(by renderer runtime resource unique id) exists in the current renderer context
   * @param resUid renderer runtime resource unique id
   * @returns has or has not resource by unique id
   */


  hasResUid(resUid) {
    return this.m_resMap.has(resUid);
  }
  /**
   * bind the renderer runtime resource(by renderer runtime resource unique id) to the current renderer context
   * @param resUid renderer runtime resource unique id
   */


  bindToGpu(resUid) {}
  /**
   * get system gpu context resource buf
   * @param resUid renderer runtime resource unique id
   * @returns system gpu context resource buf
   */


  getGpuBuffer(resUid) {
    return null;
  }

  renderBegin() {
    this.m_vtxBuilder.renderBegin();
  }

  getVertexResTotal() {
    return this.m_vtxResTotal;
  }

  updateDataToGpu(resUid, deferred) {
    if (deferred) {
      this.m_updateIds.push(resUid);
      this.m_haveDeferredUpdate = true;
    } else {
      if (this.m_resMap.has(resUid)) {
        this.m_resMap.get(resUid).updateToGpu(this.m_vtxBuilder);
      }
    }
  }

  addVertexRes(object) {
    if (!this.m_resMap.has(object.resUid)) {
      object.waitDelTimes = 0; //console.log("ROTextureResource add a texture buffer(resUid="+object.resUid+")");

      this.m_resMap.set(object.resUid, object);
      this.m_vtxResTotal++;
    }
  }

  getVertexRes(resUid) {
    return this.m_resMap.get(resUid);
  }

  destroyRes(resUid) {
    if (this.m_resMap.has(resUid)) {
      this.m_resMap.get(resUid).destroy(this.m_vtxBuilder);
    }
  }

  __$attachRes(resUid) {
    if (this.m_resMap.has(resUid)) {
      this.m_attachTotal++;
      let object = this.m_resMap.get(resUid);

      if (object.getAttachCount() < 1) {
        if (this.m_freeMap.has(resUid)) {
          this.m_freeMap.delete(resUid);
        }
      }

      object.waitDelTimes = 0;

      object.__$attachThis();
    }
  }

  __$detachRes(resUid) {
    if (this.m_resMap.has(resUid)) {
      if (this.m_resMap.has(resUid)) {
        let object = this.m_resMap.get(resUid);

        if (object.getAttachCount() > 0) {
          this.m_attachTotal--;

          object.__$detachThis();

          if (object.getAttachCount() < 1) {
            // 将其加入待清理的map
            this.m_freeMap.set(resUid, object);
          }
        }
      }
    }
  }

  getVROByResUid(resUid, shdp, vaoEnabled) {
    let vtxObj = this.m_resMap.get(resUid);

    if (vtxObj != null) {
      return vtxObj.createVRO(this.m_vtxBuilder, shdp, vaoEnabled);
    }

    return null;
  }

  update() {
    if (this.m_haveDeferredUpdate) {
      let len = this.m_updateIds.length;

      if (len > 0) {
        if (len > this.m_vtxUpdateTotal) len = this.m_vtxUpdateTotal;
        let resUid;

        for (let i = 0; i < len; ++i) {
          resUid = this.m_updateIds.shift();

          if (this.m_resMap.has(resUid)) {
            //console.log("ROvtxRes("+resUid+") update vtx("+resUid+") data to gpu with deferred mode.");
            this.m_resMap.get(resUid).updateToGpu(this.m_vtxBuilder);
          }
        }
      } else {
        this.m_haveDeferredUpdate = false;
      }
    }

    this.m_delay--;

    if (this.m_delay < 1) {
      this.m_delay = 128;

      for (const [key, value] of this.m_freeMap) {
        value.waitDelTimes++;

        if (value.getAttachCount() < 1) {
          if (value.waitDelTimes > 5) {
            console.log("ROVertexResource remove a vertex buffer(resUid=" + value.resUid + ")");
            this.m_resMap.delete(value.resUid);
            this.m_freeMap.delete(value.resUid);
            value.destroy(this.m_vtxBuilder);
            this.m_vtxResTotal--;
          }
        } else {
          console.log("ROVertexResource repeat use a vertex buffer(resUid=" + value.resUid + ") from freeMap.");
          this.m_freeMap.delete(value.resUid);
        }
      }
    }
  }

}

exports.ROVertexResource = ROVertexResource;
exports.default = ROVertexResource;

/***/ }),

/***/ "7696":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/
// RenderProcess 实例实际上可以被外部功能块直接使用,以便实现具体渲染目的
// 只能在 RenderWorld 中创建

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const RenderSortBlock_1 = __importDefault(__webpack_require__("264c"));

const RPOBlock_1 = __importDefault(__webpack_require__("5f3c"));

const ROTransPool_1 = __importDefault(__webpack_require__("9156"));

class RenderProcess {
  constructor(shader, rpoNodeBuilder, rpoUnitBuilder, vtxResource, batchEnabled, processFixedState) {
    // 记录自身所在的 rendererInstance id
    this.m_rcuid = -1; // 记录自身所在 rendererInstance 中分配到的process index

    this.m_rpIndex = -1;
    this.m_nodesLen = 0;
    this.m_enabled = true;
    this.m_blockList = []; // 记录以相同shader的node为一个集合对象(RPOBlock) 的数组

    this.m_blockListLen = 0;
    this.m_blockFList = new Int8Array(RenderProcess.s_max_shdTotal); // 记录以相同shader的node为一个集合对象(RPOBlock)的构建状态 的数组

    this.m_blockFListLen = RenderProcess.s_max_shdTotal; // 假定引擎中同时存在的最多的shader 有1024种

    this.m_shader = null;
    this.m_rpoNodeBuilder = null;
    this.m_rpoUnitBuilder = null;
    this.m_vtxResource = null; // 用于制定对象的绘制

    this.m_fixBlock = null;
    this.m_sortBlock = null;
    this.m_sorter = null;
    this.m_batchEnabled = true;
    this.m_fixedState = true;
    this.m_sortEnabled = false;
    this.m_version = 0;
    this.uid = -1;
    this.m_shader = shader;
    this.m_rpoNodeBuilder = rpoNodeBuilder;
    this.m_rpoUnitBuilder = rpoUnitBuilder;
    this.m_vtxResource = vtxResource;
    this.m_fixBlock = this.createBlock();
    this.m_batchEnabled = batchEnabled;
    this.m_fixedState = processFixedState;

    for (let k = 0; k < this.m_blockFListLen; ++k) {
      this.m_blockFList[k] = -1;
    }
  }

  createBlock() {
    let block = new RPOBlock_1.default(this.m_shader);
    block.rpoNodeBuilder = this.m_rpoNodeBuilder;
    block.rpoUnitBuilder = this.m_rpoUnitBuilder;
    block.vtxResource = this.m_vtxResource;
    return block;
  }

  setRenderParam(batchEnabled, processFixedState) {
    if (this.m_blockListLen < 1) {
      this.m_batchEnabled = batchEnabled;
      this.m_fixedState = processFixedState;
    }
  }

  setRendererParam(rc, rpIndex) {
    this.m_rc = rc;
    this.m_rcuid = rc.getRCUid();
    this.m_rpIndex = rpIndex;
  }

  getUid() {
    return this.uid;
  }

  getRCUid() {
    return this.m_rcuid;
  }

  getRPIndex() {
    return this.m_rpIndex;
  }

  hasSorter() {
    return this.m_sorter != null;
  }

  setSorter(sorter) {
    this.m_sorter = sorter;

    if (this.m_sortBlock != null) {
      this.m_sortBlock.setSorter(sorter);
    }
  }

  setSortEnabled(sortEnabled) {
    if (this.m_nodesLen < 1) {
      this.m_sortEnabled = sortEnabled;
    } else if (this.m_sortBlock != null) {
      this.m_sortBlock.sortEnabled = sortEnabled;
    }
  }

  getSortEnabled() {
    return this.m_sortEnabled;
  }

  getUnitsTotal() {
    return this.m_nodesLen;
  }

  addNodeToBlock(node) {
    //  注意，这里可以管理组合方式, 例如可以做更多条件的排序
    //  这里依赖的是 shader program 和 vtx uid 来分类
    let block = null; //console.log("RenderProcess::addDisp(),uid: "+this.m_rpIndex+" node.shdUid: "+node.shdUid+", index: "+this.uid);

    if (node.shdUid >= RenderProcess.s_max_shdTotal) {
      throw Error("Shader uid >= " + RenderProcess.s_max_shdTotal);
    }

    if (this.m_blockFList[node.shdUid] < 0) {
      block = this.createBlock();
      block.batchEnabled = this.m_batchEnabled;
      block.fixedState = this.m_fixedState;

      if (block.batchEnabled) {
        if (block.fixedState) {
          block.runMode = 2;
        } else {
          block.runMode = 1;
        }
      } else {
        block.runMode = 0;
      }

      block.shdUid = node.shdUid;
      block.index = this.m_blockListLen;
      block.procuid = this.m_rpIndex;
      this.m_blockList.push(block);
      this.m_blockFList[node.shdUid] = this.m_blockListLen;
      ++this.m_blockListLen; //  console.log("RenderProcess::addDisp(), this.uid: ",this.getUid());
      //  console.log("RenderProcess::addDisp(), create a new RPOBlock instance, block: ",block);
      //  console.log("RenderProcess::addDisp(), create a new RPOBlock instance, this.m_blockList: ",this.m_blockList);
    } else {
      //console.log("RenderProcess::addDisp(), use old RPOBlock instance, m_blockFList["+node.shdUid+"]: "+this.m_blockFList[node.shdUid]);
      block = this.m_blockList[this.m_blockFList[node.shdUid]];
    }

    node.index = block.index;
    block.addNode(node);
  }

  rejoinRunitForTro(runit) {
    let node = this.m_rpoNodeBuilder.getNodeByUid(runit.__$rpuid);

    if (node != null) {
      node.tro = runit.tro;
      node.texMid = node.unit.texMid;
      this.m_blockList[node.index].rejoinNode(node);
    }
  }

  rejoinRunitForVro(runit) {
    let node = this.m_rpoNodeBuilder.getNodeByUid(runit.__$rpuid);

    if (node != null) {
      // node.insCount = runit.insCount;
      node.vtxUid = runit.vtxUid;
      node.vro = runit.vro;
      this.m_blockList[node.index].rejoinNode(node);
      this.m_version++;
    }
  }

  addDisp(disp) {
    if (disp != null) {
      if (disp.__$$runit != null && disp.__$$runit.getRPROUid() < 0) {
        if (disp.__$$runit.getRPROUid() != this.uid) {
          // console.log("RenderProcess(" + this.uid + ")::addDisp(): ", disp.ivsCount, disp, disp.drawMode);
          let node = this.m_rpoNodeBuilder.create();
          node.unit = this.m_rpoUnitBuilder.getNodeByUid(disp.__$ruid);
          node.unit.shader = this.m_shader;
          node.unit.__$rprouid = this.uid;
          disp.__$rpuid = node.uid;
          node.__$ruid = disp.__$ruid;
          node.unit.__$rpuid = node.uid;
          node.updateData();
          ++this.m_nodesLen; //this.m_rpoUnitBuilder.setRPNodeParam(disp.__$ruid, this.m_rpIndex, node.uid);

          this.m_rpoUnitBuilder.setRPNodeParam(disp.__$ruid, this.getUid(), node.uid);

          if (this.m_sortEnabled) {
            console.log("sort process add a disp...");

            if (this.m_sortBlock != null) {
              this.m_sortBlock.addNode(node);
            } else {
              this.m_sortBlock = new RenderSortBlock_1.default(this.m_shader);
              this.m_sortBlock.setSorter(this.m_sorter);
              this.m_sortBlock.addNode(node);
            }
          } else {
            this.addNodeToBlock(node);
          }

          this.m_version++;
        } else {
          console.log("RenderProcess::addDisp(), Warn: add entity repeat in processid(" + this.m_rpIndex + ").");
        }
      }
    }
  }

  updateDispMateiral(disp) {
    if (disp.__$$runit != null) {
      let nodeUId = disp.__$$runit.getRPOUid();

      let node = this.m_rpoNodeBuilder.getNodeByUid(nodeUId); // material info etc.

      node.shdUid = node.unit.shdUid;
      node.texMid = node.unit.texMid;
      node.tro = node.unit.tro;
      let block = this.m_blockList[node.index];
      block.removeNode(node);
      this.addNodeToBlock(node);
    }
  }

  removeDisp(disp) {
    if (disp != null) {
      if (disp.__$$runit != null) {
        let nodeUId = disp.__$$runit.getRPOUid();

        let node = this.m_rpoNodeBuilder.getNodeByUid(nodeUId); // console.log("RenderProcess("+this.uid+")::removeDisp(), nodeUId: ",nodeUId,disp);
        // console.log("removeDisp(), node != null: "+(node != null),", this.m_blockList: ",this.m_blockList);

        if (node != null) {
          let runit = node.unit;
          let transU = runit.transUniform;

          if (transU != null) {
            ROTransPool_1.default.RemoveTransUniform(transU.key);
          }

          if (this.m_sortBlock == null) {
            let block = this.m_blockList[node.index];
            block.removeNode(node);
          } else {
            this.m_sortBlock.removeNode(node);
          } // this.m_rpoUnitBuilder.setRPNodeParam(disp.__$ruid, this.m_rpIndex, -1);


          this.m_rpoUnitBuilder.setRPNodeParam(disp.__$ruid, this.getUid(), -1);
          --this.m_nodesLen;

          if (this.m_rpoNodeBuilder.restore(node)) {
            this.m_rpoUnitBuilder.restore(runit);
          } // this.m_vtxResource.__$detachRes(disp.vbuf.getUid());


          this.m_vtxResource.__$detachRes(disp.getVtxResUid());

          disp.__$$runit = null;
          disp.__$ruid = -1;
          this.m_version++;
        } else {
          console.error("There is no this display instance.");
        }
      }
    }
  }

  getStatus() {
    return this.m_version;
  }
  /**
   * remoev display unit from this render process
   */


  removeDispUnit(disp) {
    if (disp != null) {
      if (disp.__$ruid > -1) {
        let nodeUId = disp.__$$runit.getRPOUid();

        let node = this.m_rpoNodeBuilder.getNodeByUid(nodeUId);

        if (node != null) {
          if (this.m_sortBlock == null) {
            let block = this.m_blockList[node.index];
            block.removeNode(node);
          } else {
            this.m_sortBlock.removeNode(node);
          }

          this.m_rpoUnitBuilder.setRPNodeParam(disp.__$ruid, this.m_rpIndex, -1);
          node.unit.__$rprouid = -1;
          --this.m_nodesLen;
          this.m_rpoNodeBuilder.restore(node);
        }
      }
    }
  }

  update() {
    if (this.m_enabled && this.m_nodesLen > 0) {
      if (this.m_sortBlock != null) {
        this.m_sortBlock.update();
      }
    }
  }

  run() {
    if (this.m_enabled && this.m_nodesLen > 0) {
      let rc = this.m_rc;

      if (this.m_sortBlock == null) {
        if (this.m_shader.isUnLocked()) {
          for (let i = 0; i < this.m_blockListLen; ++i) {
            this.m_blockList[i].run(rc);
          }
        } else {
          for (let i = 0; i < this.m_blockListLen; ++i) {
            this.m_blockList[i].runLockMaterial(rc);
          }
        }
      } else {
        if (this.m_shader.isUnLocked()) {
          this.m_sortBlock.run(rc);
        } else {
          this.m_sortBlock.runLockMaterial(rc);
        }
      }
    }
  }

  drawDisp(disp, useGlobalUniform = false, forceUpdateUniform = true) {
    if (disp != null) {
      let unit = disp.__$$runit;

      if (unit != null) {
        if (this.m_shader.isUnLocked()) {
          if (forceUpdateUniform) {
            this.m_shader.resetUniform();
          }

          this.m_fixBlock.drawUnit(this.m_rc, unit, disp);
        } else {
          this.m_fixBlock.drawLockMaterialByUnit(this.m_rc, unit, disp, useGlobalUniform, forceUpdateUniform);
        }
      }
    }
  }
  /**
   * Deprecated(不推荐使用)
   */


  drawLockMaterialByDisp(disp, useGlobalUniform = false, forceUpdateUniform = true) {
    if (disp != null) {
      let unit = disp.__$$runit;

      if (unit != null) {
        this.m_fixBlock.drawLockMaterialByUnit(this.m_rc, unit, disp, useGlobalUniform, forceUpdateUniform);
      }
    }
  }

  reset() {
    this.m_sortEnabled = false;
    this.m_nodesLen = 0;
    this.uid = -1;
    this.m_rpIndex = -1;
    this.m_rcuid = -1;
    this.m_rpIndex = -1;
    let i = 0;

    for (; i < this.m_blockListLen; ++i) {
      this.m_blockList[i].reset();
    }

    this.m_blockListLen = 0;
    this.m_blockList = [];
    this.m_rpoNodeBuilder = null;
    this.m_rpoUnitBuilder = null;
    this.m_vtxResource = null;
    this.m_rc = null;

    if (this.m_sortBlock != null) {
      this.m_sortBlock.clear();
      this.m_sortBlock = null;
    }
  }

  showInfo() {
    let i = 0;

    for (; i < this.m_blockListLen; ++i) {
      this.m_blockList[i].showInfo();
    }
  }

  destroy() {
    this.reset();
  }

  setEnabled(boo) {
    this.m_enabled = boo;
  }

  getEnabled() {
    return this.m_enabled;
  }

  toString() {
    return "[RenderProcess(uid = " + this.m_rpIndex + ")]";
  }

}

RenderProcess.s_max_shdTotal = 1024;
exports.default = RenderProcess;

/***/ }),

/***/ "8333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

class RenderMaskBitfield {}

RenderMaskBitfield.COLOR_BUFFER_BIT = 131;
RenderMaskBitfield.DEPTH_BUFFER_BIT = 132;
RenderMaskBitfield.STENCIL_BUFFER_BIT = 133;
exports.default = RenderMaskBitfield;

/***/ }),

/***/ "83d1":
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

class StageParamUniformBuilder {
  create(rc, shdp) {
    let param = UniformConst_1.default.StageParam;

    if (shdp.hasUniformByName(param.name)) {
      return rc.uniformContext.createShaderGlobalUniformFromProbe(rc.getStage3D().uProbe, param.name, [param.name]);
    }

    return null;
  }

  getIDNS() {
    return "StageParamUniformBuilder";
  }

}

exports.default = StageParamUniformBuilder;

/***/ }),

/***/ "857b":
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

class CameraPosUniformBuilder {
  create(rc, shdp) {
    let param = UniformConst_1.default.CameraPosParam;
    if (shdp.hasUniformByName(param.name)) return rc.uniformContext.createShaderGlobalUniformFromProbe(rc.getCamera().ucameraPosProbe, param.name, [param.name]);
    return null;
  }

  getIDNS() {
    return "CameraPosUniformBuilder";
  }

}

exports.default = CameraPosUniformBuilder;

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

/***/ "8a0a":
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

const BitConst_1 = __importDefault(__webpack_require__("ca6c"));

class VtxBufConst {
  static ToGL(gl, param) {
    const vbc = VtxBufConst;

    switch (param) {
      case vbc.VTX_STATIC_DRAW:
        return gl.STATIC_DRAW;
        break;

      case vbc.VTX_DYNAMIC_DRAW:
        return gl.DYNAMIC_DRAW;
        break;

      case vbc.VTX_STREAM_DRAW:
        return gl.STREAM_DRAW;
        break;

      case vbc.VTX_STATIC_READ:
        return gl.STATIC_READ;
        break;

      case vbc.VTX_DYNAMIC_READ:
        return gl.DYNAMIC_READ;
        break;

      case vbc.VTX_STREAM_READ:
        return gl.STREAM_READ;
        break;

      case vbc.VTX_STATIC_COPY:
        return gl.STATIC_COPY;
        break;

      case vbc.VTX_DYNAMIC_COPY:
        return gl.DYNAMIC_COPY;
        break;

      case vbc.VTX_STREAM_COPY:
        return gl.STREAM_COPY;
        break;

      default:
        break;
    }

    return gl.STATIC_DRAW;
  }

  static GetVBufTypeByNS(pns) {
    const vbc = VtxBufConst;

    switch (pns) {
      case vbc.VBUF_VS_NS:
        return vbc.VBUF_VS;
        break;

      case vbc.VBUF_UVS_NS:
        return vbc.VBUF_UVS;
        break;

      case vbc.VBUF_NVS_NS:
        return vbc.VBUF_NVS;
        break;

      case vbc.VBUF_CVS_NS:
        return vbc.VBUF_CVS;
        break;
      ///////////////////

      case vbc.VBUF_VS2_NS:
        return vbc.VBUF_VS2;
        break;

      case vbc.VBUF_UVS2_NS:
        return vbc.VBUF_UVS2;
        break;

      case VtxBufConst.VBUF_NVS2_NS:
        return VtxBufConst.VBUF_NVS2;
        break;

      case vbc.VBUF_CVS2_NS:
        return vbc.VBUF_CVS2;
        break;

      case vbc.VBUF_TVS_NS:
        return vbc.VBUF_TVS;
        break;

      case vbc.VBUF_TVS2_NS:
        return vbc.VBUF_TVS2;
        break;

      default:
    }

    return -1;
  }

  static GetVBufNSByType(type) {
    const vbc = VtxBufConst;

    switch (type) {
      case vbc.VBUF_VS:
        return vbc.VBUF_VS_NS;
        break;

      case vbc.VBUF_UVS:
        return vbc.VBUF_UVS_NS;
        break;

      case vbc.VBUF_NVS:
        return vbc.VBUF_NVS_NS;
        break;

      case vbc.VBUF_CVS:
        return vbc.VBUF_CVS_NS;
        break;
      ///////////////////

      case vbc.VBUF_VS2:
        return vbc.VBUF_VS2_NS;
        break;

      case vbc.VBUF_UVS2:
        return vbc.VBUF_UVS2_NS;
        break;

      case vbc.VBUF_NVS2:
        return vbc.VBUF_NVS2_NS;
        break;

      case vbc.VBUF_CVS2:
        return vbc.VBUF_CVS2_NS;
        break;

      case vbc.VBUF_TVS:
        return vbc.VBUF_TVS_NS;
        break;

      case vbc.VBUF_TVS2:
        return vbc.VBUF_TVS2_NS;
        break;

      default:
    }

    return "";
  }

  static GetVBufAttributeTypeByNS(pns) {
    return VtxBufConst.GetVBufTypeByNS(pns) - 3000;
  }

  static GetVBufAttributeTypeByVBufType(vbufType) {
    return vbufType - 3000;
  }

}

VtxBufConst.VTXTYPE_GL_POINTS = 101;
VtxBufConst.VTXTYPE_GL_LINES = 102;
VtxBufConst.VTXTYPE_GL_LINE_STRIP = 103;
VtxBufConst.VTXTYPE_GL_TRIANGLES = 111;
VtxBufConst.VTX_STATIC_DRAW = 0;
VtxBufConst.VTX_DYNAMIC_DRAW = 1;
VtxBufConst.VTX_STREAM_DRAW = 2;
VtxBufConst.VTX_STATIC_READ = 3;
VtxBufConst.VTX_DYNAMIC_READ = 4;
VtxBufConst.VTX_STREAM_READ = 5;
VtxBufConst.VTX_STATIC_COPY = 6;
VtxBufConst.VTX_DYNAMIC_COPY = 7;
VtxBufConst.VTX_STREAM_COPY = 8;
VtxBufConst.VBUF_VS = 3001;
VtxBufConst.VBUF_UVS = 3002;
VtxBufConst.VBUF_NVS = 3003;
VtxBufConst.VBUF_CVS = 3004;
VtxBufConst.VBUF_TVS = 3005;
VtxBufConst.VBUF_VS2 = 3006;
VtxBufConst.VBUF_UVS2 = 3007;
VtxBufConst.VBUF_NVS2 = 3008;
VtxBufConst.VBUF_CVS2 = 3009;
VtxBufConst.VBUF_TVS2 = 3010;
VtxBufConst.VBUF_VS_INDEX = BitConst_1.default.BIT_ONE_0;
VtxBufConst.VBUF_UVS_INDEX = BitConst_1.default.BIT_ONE_1;
VtxBufConst.VBUF_NVS_INDEX = BitConst_1.default.BIT_ONE_2;
VtxBufConst.VBUF_CVS_INDEX = BitConst_1.default.BIT_ONE_3;
VtxBufConst.VBUF_TVS_INDEX = BitConst_1.default.BIT_ONE_4;
VtxBufConst.VBUF_VS2_INDEX = BitConst_1.default.BIT_ONE_5;
VtxBufConst.VBUF_UVS2_INDEX = BitConst_1.default.BIT_ONE_6;
VtxBufConst.VBUF_NVS2_INDEX = BitConst_1.default.BIT_ONE_7;
VtxBufConst.VBUF_CVS2_INDEX = BitConst_1.default.BIT_ONE_8;
VtxBufConst.VBUF_TVS2_INDEX = BitConst_1.default.BIT_ONE_9; // attributes name

VtxBufConst.VBUF_VS_NS = "a_vs";
VtxBufConst.VBUF_VS2_NS = "a_vs2";
VtxBufConst.VBUF_UVS_NS = "a_uvs";
VtxBufConst.VBUF_UVS2_NS = "a_uvs2";
VtxBufConst.VBUF_NVS_NS = "a_nvs";
VtxBufConst.VBUF_NVS2_NS = "a_nvs2";
VtxBufConst.VBUF_CVS_NS = "a_cvs";
VtxBufConst.VBUF_CVS2_NS = "a_cvs2";
VtxBufConst.VBUF_TVS_NS = "a_tvs";
VtxBufConst.VBUF_TVS2_NS = "a_tvs2";

class VtxNormalType {}

VtxNormalType.FLAT = 210;
VtxNormalType.GOURAND = 310;
exports.VtxNormalType = VtxNormalType;
exports.default = VtxBufConst;

/***/ }),

/***/ "8ae4":
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

const RenderDrawMode_1 = __importDefault(__webpack_require__("13b1"));

const IROIvsRDP_1 = __webpack_require__("1f32");

exports.IROIvsRDP = IROIvsRDP_1.IROIvsRDP;
const RDM = RenderDrawMode_1.default;

class BufRData {
  constructor() {
    this.m_uid = BufRData.s_uid++;
    this.buf = null;
    this.ivsSize = 0;
    this.ivsInitSize = 0;
    this.ivsIndex = 0;
    /**
     * ivs buffer stride
     */

    this.stride = 2;
    this.initDrawMode = RDM.ELEMENTS_TRIANGLES;
    this.drawMode = RDM.ELEMENTS_TRIANGLES;
    this.m_common = true;
    this.bufType = 0;
    this.ivsOffset = 0;
    this.rdpIndex = 0;
    this.trisNumber = 0;
    this.insCount = 0;
    /**
     * gl draw mode
     */

    this.gldm = 0;
  }

  getUid() {
    return this.m_uid;
  }

  clone() {
    let rd = new BufRData();
    rd.buf = this.buf;
    rd.ivsIndex = this.ivsIndex;
    rd.ivsSize = this.ivsSize;
    rd.ivsInitSize = this.ivsInitSize;
    rd.stride = this.stride;
    rd.drawMode = this.drawMode;
    rd.gldm = this.gldm;
    rd.ivsOffset = this.ivsOffset;
    rd.trisNumber = this.trisNumber;
    rd.insCount = this.insCount;
    rd.m_common = this.m_common;
    rd.bufType = this.bufType;
    rd.rdpIndex = this.rdpIndex;
    return rd;
  }

  hasIvs() {
    return this.ivsInitSize > 0;
  }

  isCommon() {
    return this.m_common;
  }

  updateDrawMode() {
    if (this.hasIvs()) {
      const im = this.initDrawMode;
      const flag = im == RDM.ELEMENTS_TRIANGLES || im == RDM.ELEMENTS_LINES;
      const strip = im == RDM.ELEMENTS_TRIANGLE_STRIP || im == RDM.ELEMENTS_LINES_STRIP;

      if (flag || strip) {
        if (strip) {
          this.gldm = this.m_common ? this.rc.TRIANGLE_STRIP : this.rc.LINE_STRIP;
        } else {
          this.gldm = this.m_common ? this.rc.TRIANGLES : this.rc.LINES;
        }

        if (this.insCount < 1) {
          if (strip) {
            this.drawMode = this.m_common ? RDM.ELEMENTS_TRIANGLES : RDM.ELEMENTS_LINES;
          } else {
            this.drawMode = this.m_common ? RDM.ELEMENTS_TRIANGLE_STRIP : RDM.ELEMENTS_LINES_STRIP;
          }
        } else {
          if (strip) {
            this.drawMode = this.m_common ? RDM.ELEMENTS_INSTANCED_TRIANGLES_STRIP : RDM.ELEMENTS_INSTANCED_LINES_STRIP;
          } else {
            this.drawMode = this.m_common ? RDM.ELEMENTS_INSTANCED_TRIANGLES : RDM.ELEMENTS_INSTANCED_LINES;
          }
        }
      }
    }
  }

  setCommon(common) {
    this.m_common = common;
    this.updateDrawMode();
  }

  setInsCount(insCount) {
    if (this.insCount != insCount) {
      this.insCount = insCount;
      this.updateDrawMode();
    }
  }

  setIvsParam(ivsIndex, ivsSize) {
    let pI = this.ivsIndex;
    let pS = this.ivsSize;

    if (ivsIndex >= 0) {
      pI = ivsIndex;
    }

    if (ivsSize >= 0) {
      pS = ivsSize;
    }

    ivsIndex = pI;
    ivsSize = pS;
    const rd = this;
    rd.ivsIndex = rd.isCommon() ? ivsIndex : ivsIndex * 2;
    if (rd.ivsIndex < 0) rd.ivsIndex = 0;else if (rd.ivsIndex >= this.ivsInitSize) rd.ivsIndex = this.ivsInitSize - 1;
    rd.ivsOffset = rd.ivsIndex * rd.stride; // console.log(" >>> #### !rd.common: ", !rd.common, ", uid: ",this.getUid());
    // console.log("!rd.common: ", !rd.common, pI, pS);

    if (!rd.isCommon()) {
      ivsSize *= 2;
    }

    if (ivsSize + rd.ivsIndex >= this.ivsInitSize) {
      ivsSize = this.ivsInitSize - rd.ivsIndex;
    }

    this.ivsSize = ivsSize;
    this.trisNumber = Math.floor(ivsSize / 3); // console.log("OOOO BufRData !rd.common #####: ", !rd.common, rd.ivsIndex, this.ivsSize, ", uid: ",this.getUid());
  }

  destroy(vrc) {
    this.rc = null;

    if (this.buf != null) {
      vrc.deleteBuf(this.buf);
      this.buf = null;
    }
  }

  clear() {
    this.buf = null;
    this.rc = null;
  }

}

BufRData.s_uid = 0;

class BufRDataPair {
  constructor(index) {
    this.m_uid = BufRDataPair.s_uid++;
    this.m_rdpVer = 0;
    this.m_st = 101;
    this.m_tst = 0;
    this.m_rdpIndex = 0;
    this.r0 = null;
    this.r1 = null;
    this.rd = null;
    this.buf = null;
    this.roiRes = null;
    this.ver = 0;
    this.lifeTime = 0;
    this.m_rdpIndex = index;
  }

  getRDPIndex() {
    return this.m_rdpIndex;
  }

  getUid() {
    return this.m_uid;
  }

  destroy(vrc) {
    if (this.r0 != null) this.r0.destroy(vrc);
    if (this.r1 != null) this.r1.destroy(vrc);
    this.r0 = null;
    this.r1 = null;
    this.rd = null;
    this.buf = null;
    this.roiRes = null;
  }

  clearBuf() {
    if (this.lifeTime == 0) {
      throw Error("illegal operation!!!");
    }

    if (this.r0 != null) {
      this.r0.clear();
      this.r1.clear();
      this.roiRes = null;
      this.r0 = null;
      this.r1 = null;
      this.rd = null;
      this.buf = null;
    }
  }

  clear() {
    this.clearBuf();
  }

  updateStatus() {
    this.m_st++;
    this.m_tst = (this.m_st * 131 + this.m_rdpVer) * 131 + this.m_uid;
  }

  setIvsParam(ivsIndex, ivsSize) {
    // console.log(">>> >>>>>>>>>>>> #### BufRDataPair::setIvsParam(), uid: ", this.getUid());
    this.updateStatus();
    this.r0.setIvsParam(ivsIndex, ivsSize);

    if (this.r0 != this.r1) {
      this.r1.setIvsParam(ivsIndex, ivsSize);
    } // let rd = this.rd;
    // console.log("BufRDataPair::setIvsParam(), ivsIndex, ivsSize: ", ivsIndex, ivsSize);
    // console.log("****** ###### !rd.common: ", !rd.common, ", rd.getUid(): ",rd.getUid());
    // console.log("BufRDataPair::setIvsParam(), rd.ivsIndex, rd.ivsSize: ", rd.ivsIndex, rd.ivsSize);

  }

  applyRDPAt(index) {
    if (this.roiRes != null && this.m_rdpIndex != index) {
      let rd = this.rd; // console.log("AAAA index: ",index);
      // console.log("AAAA 0 rd.getUid(): ",rd.getUid(), ", r0.getUid(): ",this.r0.getUid(), ", r0.ivsSize: ", this.r0.ivsSize, ", r0.rdpIndex: ", this.r0.rdpIndex);

      let rdp = this.roiRes.getRDPDataAt(index);

      if (rdp) {
        this.updateStatus();
        this.clearBuf();
        this.m_rdpIndex = rdp.getRDPIndex(); // console.log("ROInidcesRes::applyRDPAt(), index: ", index);

        this.copyFrom(rdp, true, false);
        rd = this.rd; // console.log("AAAA 1 rd.getUid(): ",rd.getUid(), ", r0.getUid(): ",this.r0.getUid(), ", r0.ivsSize: ",  this.r0.ivsSize, ", r0.rdpIndex: ", this.r0.rdpIndex);
      }
    }
  }

  setInsCount(insCount) {
    this.rd.setInsCount(insCount);
  }

  getVersion() {
    return this.m_tst;
  }

  toWireframe() {
    this.m_rdpVer = 1;
    this.rd = this.r1;
    this.buf = this.rd.buf;
    this.roiRes.rdp = this;
    this.updateStatus(); // console.log("BufRDataPair::toWireframe()............, uid: ", this.m_uid);
  }

  toShape() {
    this.m_rdpVer = 0;
    this.rd = this.r0;
    this.buf = this.rd.buf;
    this.roiRes.rdp = this;
    this.updateStatus(); // console.log("BufRDataPair::toShape()............, uid: ", this.m_uid);
  }

  toCommon() {
    this.toShape();
  }

  isCommon() {
    return this.m_rdpVer == 0;
  }

  test() {
    // console.log("AAA this.getType(): ", this.getType(), this.getUid());
    this.roiRes.rdp = this;
    return this.roiRes.test();
  }

  copyFrom(rdp, auto = true, force = true) {
    // console.log("AAAA 0 copyFrom(), rdp.r0.getUid(): ",rdp.r0.getUid(), ", r0.ivsSize: ", rdp.r0.ivsSize, ", r0.rdpIndex: ", rdp.r0.rdpIndex);
    this.roiRes = rdp.roiRes;
    if (force) this.m_rdpVer = rdp.m_rdpVer;
    this.r0 = rdp.r0.clone();

    if (rdp.r0 != rdp.r1) {
      this.r1 = rdp.r1.clone();
    } else {
      this.r1 = this.r0;
    }

    if (auto) {
      if (this.isCommon()) {
        this.toCommon();
      } else {
        this.toWireframe();
      }
    }
  }

  copyTo(rdp, auto = true, force = true) {
    rdp.roiRes = this.roiRes;
    if (force) rdp.m_rdpVer = this.m_rdpVer;
    rdp.r0 = this.r0.clone();

    if (this.r0 != this.r1) {
      rdp.r1 = this.r1.clone();
    } else {
      rdp.r1 = rdp.r0;
    }

    if (auto) {
      if (rdp.isCommon()) {
        rdp.toCommon();
      } else {
        rdp.toWireframe();
      }
    }
  }

  clone() {
    let rdp = new BufRDataPair(this.getRDPIndex());
    rdp.lifeTime = this.lifeTime + 1;
    this.copyTo(rdp);
    return rdp;
  }

}

BufRDataPair.s_uid = 0;
exports.BufRDataPair = BufRDataPair;

class ROIndicesRes {
  constructor() {
    this.m_uid = ROIndicesRes.s_uid++;
    this.m_vtx = null;
    this.m_vtxUid = 0; // private m_index = 0;

    this.m_ivsData = null;
    this.m_rdps = [];
    this.m_rdpVer = -2;
    this.rdp = null;
    this.initRdp = null;
    this.version = -1;
    this.m_rdps.fill(null);
  }

  getUid() {
    return this.m_uid;
  }

  getVtxUid() {
    return this.m_vtxUid;
  }

  getRDPDataAt(index) {
    if (index >= 0 && index < this.m_rdps.length) {
      return this.m_rdps[index];
    }

    return null;
  } // applyRDPAt(index: number): boolean {
  //     if (this.m_index != index && index >= 0 && index < this.m_rdps.length) {
  //         let rdp = this.m_rdps[this.m_index];
  //         this.m_index = index;
  //         this.rdp = this.m_rdps[index];
  //         this.m_rdpVer = -2;
  //         if (rdp.isCommon) {
  //             this.rdp.toShape();
  //         } else {
  //             this.rdp.toWireframe();
  //         }
  //         this.initRdp = rdp;
  //         return true;
  //     }
  //     return false;
  // }


  test() {
    return this.m_rdpVer != this.rdp.getVersion();
  }
  /**
   * @param force the default value is false
   */


  bindToGPU(force = false) {
    force = force || this.m_rdpVer != this.rdp.getVersion(); // console.log("B this.rdp.getType(): ", this.rdp.getType(), this.rdp.getUid());

    if (this.m_vrc.testRIOUid(this.m_vtxUid) || force) {
      // if(DebugFlag.Flag_0 > 0) {
      //     console.log("ROIndicesRes::bindToGPU(), rdp: ", this.rdp);
      // }
      // console.log(this.rdp.buf.wireframe);
      this.m_vrc.bindEleBuf(this.rdp.buf);
      this.m_rdpVer = this.rdp.getVersion();
    }
  }

  updateToGpu(rc) {
    let rd = this.m_rdps.length > 0 ? this.m_rdps[0].r0 : null;

    if (rc != null && rd.buf != null) {
      let vtx = this.m_vtx; // console.log("indeces updateToGpu vtx.getUId(): ",vtx.getUid(), ", this.version != vtx.indicesVer: ", this.version != vtx.indicesVer);

      if (this.version != vtx.indicesVer) {
        let ird = vtx.getIvsDataAt();
        this.m_ivsData = ird;
        const ivs = ird.ivs;
        rc.bindEleBuf(rd.buf);
        let size = this.m_rdps[0].r0.ivsSize;

        if (size >= ivs.length) {
          //console.log("A indeces updateToGpu vtx.getUId(): ",vtx.getUid(), ", ivs.length", ivs.length);
          rc.eleBufSubData(ivs, ird.status);
        } else {
          //console.log("B indeces updateToGpu vtx.getUId(): ",vtx.getUid(), ", ivs.length", ivs.length);
          rc.eleBufData(ivs, vtx.getBufDataUsage());
        }

        rd.ivsSize = ivs.length;
        this.version = vtx.indicesVer;
      }
    }
  }

  initialize(rc, vrc, ivtx, disp) {
    this.m_vrc = vrc; // let wireframe = false;

    let rdp = null;

    if (this.m_rdps.length < 1 && ivtx.getIvsDataAt() != null) {
      this.version = ivtx.indicesVer;
      this.m_vtx = ivtx;
      this.m_vtxUid = ivtx.getUid();
      rdp = this.createRDPAt(0, rc, vrc, disp);
    } else {
      rdp = new BufRDataPair(0);
      let rd = new BufRData();
      rd.buf = null;
      rd.ivsSize = disp.ivsCount;
      rd.ivsIndex = disp.ivsIndex;
      rd.stride = 2;
      rd.drawMode = disp.drawMode;
      rd.initDrawMode = disp.drawMode;
      rdp.r0 = rd;
      rdp.r1 = rd;
    }

    this.rdp = this.m_rdps[0] = rdp;
    this.initRdp = rdp;
    rdp.roiRes = this;
    rdp.toShape();
    let total = ivtx.getIvsDataTotal(); // console.log("ROIndicesRes::initialize(), total: ", total);

    for (let i = 1; i < total; ++i) {
      rdp = this.createRDPAt(i, rc, vrc, disp);
      this.m_rdps.push(rdp);
    }
  }

  createRDPAt(rdpIndex, rc, vrc, disp) {
    let rdp = new BufRDataPair(rdpIndex);
    rdp.roiRes = this;
    const ivtx = this.m_vtx;
    let ird = ivtx.getIvsDataAt(rdpIndex); // console.log("ird: ", ird);

    this.m_ivsData = ird;
    let wireframe = ird.wireframe;
    let shape = ird.shape;
    let r0 = null;
    let r1 = null;

    if (shape) {
      r0 = this.createBuf(rdpIndex, rc, vrc, ivtx, disp, false);
    }

    if (wireframe) {
      r1 = this.createBuf(rdpIndex, rc, vrc, ivtx, disp, wireframe);
    } // console.log("createRDPAt(), r0: ", r0, ", r1: ", r1);


    if (r0 == null && r1 == null) {
      r0 = this.createBuf(rdpIndex, rc, vrc, ivtx, disp, false);
    }

    if (r0 == null) {
      r0 = r1;
    } else if (r1 == null) {
      r1 = r0;
    }

    rdp.r0 = r0;
    rdp.r1 = r1; // console.log("createRDPAt(), rdpIndex: ", rdpIndex, ", wireframe: ", wireframe,", rdp.r0.getUid(): ", rdp.r0.getUid());
    // console.log("       rdp.r0.ivsSize: ", rdp.r0.ivsSize, ", r0.rdpIndex: ",rdp.r0.rdpIndex);

    return rdp;
  }

  createBuf(rdpIndex, rc, vrc, ivtx, disp, wireframe = false) {
    // console.log("createBuf(), wireframe:", wireframe, ivtx);
    let ird = ivtx.getIvsDataAt(rdpIndex);
    let ivs = ird.ivs;
    let size = 0;
    let ivsIndex = disp.ivsIndex;
    let stride = 2;
    let gbuf = vrc.createBuf();
    vrc.bindEleBuf(gbuf);

    if (ivtx.bufData == null) {
      if (wireframe) {
        ivs = this.createWireframeIvs(ivs);
      }

      vrc.eleBufData(ivs, ivtx.getBufDataUsage());
      size = ivs.length;
      stride = size > 65536 ? 4 : 2;
    } else {
      let offset = 0;
      let list = [];

      for (let i = 0, len = ivtx.bufData.getIndexDataTotal(); i < len; ++i) {
        const rd = ivtx.bufData.getIndexDataAt(i);
        ivs = rd.ivs;

        if (wireframe) {
          ivs = this.createWireframeIvs(ivs);
        }

        list[i] = ivs;
        size += ivs.length;
      }

      if (size > 65536) {
        stride = 4;

        for (let i = 0, len = list.length; i < len; ++i) {
          ivs = list[i];
          list[i] = ivs instanceof Uint32Array ? ivs : new Uint32Array(ivs);
        }
      } else {
        stride = 2;

        for (let i = 0, len = list.length; i < len; ++i) {
          ivs = list[i];
          list[i] = ivs instanceof Uint16Array ? ivs : new Uint16Array(ivs);
        }
      }

      size = 0;

      for (let i = 0, len = list.length; i < len; ++i) {
        size += list[i].byteLength;
      }

      vrc.eleBufDataMem(size, ivtx.getBufDataUsage());
      offset = 0;
      size = 0;

      for (let i = 0, len = list.length; i < len; ++i) {
        ivs = list[i];
        vrc.eleBufSubData(ivs, offset);
        offset += ivs.byteLength;
        size += ivs.length;
      }
    } // gbuf.rdpIndex = rdpIndex;
    // gbuf.wireframe = wireframe;


    let rd = new BufRData();
    rd.rc = rc;
    rd.buf = gbuf;
    rd.rdpIndex = rdpIndex;
    rd.ivsSize = size;
    rd.ivsInitSize = size;
    rd.stride = stride;
    rd.trisNumber = Math.floor(size / 3);
    rd.initDrawMode = disp.drawMode;
    rd.setCommon(!wireframe);
    rd.ivsIndex = rd.isCommon() ? ivsIndex : ivsIndex * 2;
    rd.ivsOffset = rd.ivsIndex * rd.stride;
    rd.bufType = stride != 4 ? rc.UNSIGNED_SHORT : rc.UNSIGNED_INT;
    return rd;
  }

  destroy(vrc) {
    this.m_vrc = null;

    if (this.m_rdps.length > 0) {
      this.m_vtx = null;

      for (let i = 0; i < this.m_rdps.length; ++i) {
        this.m_rdps[i].destroy(vrc);
      }

      this.m_ivsData = null;
      this.initRdp = null;
      this.rdp = null;
      console.log("ROIndicesRes::destroy() this.m_uid: ", this.m_uid);
    }
  }

  createWireframeIvs(ivs) {
    if (ivs !== null) {
      const len = ivs.length * 2;
      const wivs = len > 65536 ? new Uint32Array(len) : new Uint16Array(len);
      let a;
      let b;
      let c;
      let k = 0;

      for (let i = 0, l = ivs.length; i < l; i += 3) {
        a = ivs[i + 0];
        b = ivs[i + 1];
        c = ivs[i + 2];
        wivs[k] = a;
        wivs[k + 1] = b;
        wivs[k + 2] = b;
        wivs[k + 3] = c;
        wivs[k + 4] = c;
        wivs[k + 5] = a;
        k += 6;
      } // console.log("createWireframeIvs(), wivs.length:", wivs.length);


      return wivs;
    }

    return ivs;
  }

}

ROIndicesRes.s_uid = 0;
exports.ROIndicesRes = ROIndicesRes;

/***/ }),

/***/ "8def":
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

const VROBase_1 = __importDefault(__webpack_require__("919c"));

class VertexRenderObj extends VROBase_1.default {
  constructor() {
    super();
    this.shdp = null;
    this.vbufs = null;
    this.vbuf = null;
    this.attribTypes = null;
    this.wholeOffsetList = null;
    this.attribTypesLen = 0;
    this.updateUnlocked = true;
    this.wholeStride = 0;
    this.m_uid = VertexRenderObj.s_uid++;
  }

  run() {
    if (this.m_rc.testVROUid(this.m_uid) || this.indicesRes.test()) {
      //console.log("VertexRenderObj::run(), B:",rc.getUid(),this.m_vtxUid,this.m_uid);
      if (this.vbuf != null) {
        this.m_rc.useVtxAttribsPtrTypeFloat(this.shdp, this.vbuf, this.attribTypes, this.attribTypesLen, this.wholeOffsetList, this.wholeStride);
      } else {
        this.m_rc.useVtxAttribsPtrTypeFloatMulti(this.shdp, this.vbufs, this.attribTypes, this.attribTypesLen, this.wholeOffsetList, this.wholeStride);
      } // if (this.m_rc.testRIOUid(this.m_vtxUid)) {
      //     this.m_rc.bindEleBuf(this.ibuf);
      // }


      this.indicesRes.bindToGPU();
    }
  }

  __$destroy() {
    console.log("VertexRenderObj::__$destroy()..., " + this);
    VROBase_1.default.s_midMap.delete(this.m_mid);
    this.m_mid = 0;
    this.m_vtxUid = -1;
    this.m_rc = null;
    this.shdp = null;
    this.vbufs = null;
    this.vbuf = null; // this.ibuf = null;

    this.indicesRes = null;
    this.attribTypes = null;
    this.attribTypesLen = 0;
    this.wholeStride = 0;
  }

  restoreThis() {
    VertexRenderObj.Restore(this);
  }

  toString() {
    return "VertexRenderObj(uid = " + this.m_uid + ", type=" + this.m_mid + ")";
  } //  private static s_midMap:Map<number,VertexRenderObj> = new Map();


  static HasMid(mid) {
    return VROBase_1.default.s_midMap.has(mid);
  }

  static GetByMid(mid) {
    return VROBase_1.default.s_midMap.get(mid);
  }

  static GetFreeId() {
    if (VertexRenderObj.s_freeIdList.length > 0) {
      return VertexRenderObj.s_freeIdList.pop();
    }

    return -1;
  }

  static Create(rc, mid, pvtxUid) {
    let unit = null;
    let index = VertexRenderObj.GetFreeId(); //console.log("VertexRenderObj::Create(), VertexRenderObj.s_unitList.length: "+VertexRenderObj.s_unitList.length);

    if (index >= 0) {
      unit = VertexRenderObj.s_unitList[index];
      VertexRenderObj.s_unitFlagList[index] = VertexRenderObj.s_FLAG_BUSY;
      unit.setMidAndBufUid(mid, pvtxUid);
    } else {
      unit = new VertexRenderObj();
      unit.setMidAndBufUid(mid, pvtxUid);
      VertexRenderObj.s_unitList.push(unit);
      VertexRenderObj.s_unitFlagList.push(VertexRenderObj.s_FLAG_BUSY);
      VertexRenderObj.s_unitListLen++;
    }

    unit.setRC(rc);
    VROBase_1.default.s_midMap.set(mid, unit);
    return unit;
  }

  static Restore(pobj) {
    if (pobj != null && pobj.m_attachCount < 1 && VertexRenderObj.s_unitFlagList[pobj.getUid()] == VertexRenderObj.s_FLAG_BUSY) {
      let uid = pobj.getUid();
      VertexRenderObj.s_freeIdList.push(uid);
      VertexRenderObj.s_unitFlagList[uid] = VertexRenderObj.s_FLAG_FREE;

      pobj.__$destroy();
    }
  }

}

VertexRenderObj.s_uid = 0;
VertexRenderObj.s_FLAG_BUSY = 1;
VertexRenderObj.s_FLAG_FREE = 0;
VertexRenderObj.s_unitFlagList = [];
VertexRenderObj.s_unitListLen = 0;
VertexRenderObj.s_unitList = [];
VertexRenderObj.s_freeIdList = [];
exports.default = VertexRenderObj;

/***/ }),

/***/ "9156":
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

class ROTransPool {
  // private static s_tcountMap: Map<number, number> = new Map();
  static SetTransUniform(mat, uniform, shdp) {
    let k = (mat.getUid() + 1) * 131 + shdp.getUid();

    if (!ROTransPool.s_transMap.has(k)) {
      ROTransPool.s_transMap.set(k, uniform);
      uniform.key = k; // let count = ROTransPool.s_tcountMap.get(mat.getUid());
      // ROTransPool.s_tcountMap.set(mat.getUid(), count+1);
    } // ROTransPool.s_transMap.set(mat.getUid(), uniform);

  }

  static GetTransUniform(mat, shdp) {
    if (mat.getUid() < 0) {
      throw Error("mat.getUid() < 0");
    }

    let k = (mat.getUid() + 1) * 131 + shdp.getUid();
    if (ROTransPool.s_transMap.has(k)) return ROTransPool.s_transMap.get(k); // if (ROTransPool.s_transMap.has(mat.getUid())) return ROTransPool.s_transMap.get(mat.getUid());

    return null;
  }

  static HasTransUniform(mat, shdp) {
    let k = (mat.getUid() + 1) * 131 + shdp.getUid();
    return ROTransPool.s_transMap.has(k); // return ROTransPool.s_transMap.has(mat.getUid());
  }

  static RemoveTransUniform(key) {
    if (ROTransPool.s_transMap.has(key)) {
      console.log("ROTransPool::RemoveTransUniform(), key: ", key);
      ROTransPool.s_transMap.delete(key);
    } // ROTransPool.s_transMap.delete(mat.getUid());

  }

}

ROTransPool.s_transMap = new Map();
exports.default = ROTransPool;

/***/ }),

/***/ "919c":
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

class VROBase {
  constructor() {
    this.m_uid = 0; // vtx attribute hash map id

    this.m_mid = 0;
    this.m_vtxUid = 0;
    this.m_rc = null;
    this.indicesRes = null;
    this.m_attachCount = 0;
  }

  setRC(rc) {
    this.m_rc = rc;
  }

  setMidAndBufUid(mid, pvtxUid) {
    this.m_mid = mid;
    this.m_vtxUid = pvtxUid;
    this.m_attachCount = 0;
  }

  getUid() {
    return this.m_uid;
  }

  getVtxUid() {
    return this.m_vtxUid;
  }

  getMid() {
    return this.m_mid;
  }
  /**
   * 被子类覆盖之后才有效
   */


  run() {}

  __$attachThis() {
    ++this.m_attachCount; // console.log("VROBase::__$attachThis() this.m_attachCount: ", this.m_attachCount, ", uid: ", this.m_uid);
  }

  __$detachThis() {
    --this.m_attachCount;

    if (this.m_attachCount < 1) {
      this.m_attachCount = 0;
      console.log("VROBase::__$detachThis() this.m_attachCount value is 0.");
    } // console.log("VROBase::__$detachThis() this.m_attachCount: ", this.m_attachCount, ", uid: ", this.m_uid);

  }

  __$destroy() {
    //console.log("VROBase::__$destroy()..., ("+this.m_uid+")this.m_attachCount: "+this.m_attachCount);
    VROBase.s_midMap.delete(this.m_mid);
    this.m_mid = 0;
    this.m_vtxUid = -1; // this.ibuf = null;

    this.m_rc = null;
    this.indicesRes = null;
  }

  restoreThis() {}

  static HasMid(mid) {
    return VROBase.s_midMap.has(mid);
  }

  static GetByMid(mid) {
    return VROBase.s_midMap.get(mid);
  } // static Reset(): void {
  //     VROBase.s_mid = -1;
  // }


  __$resetVRO() {
    VROBase.s_mid = -1;
  }

}

VROBase.s_mid = 0;
VROBase.s_midMap = new Map();
exports.default = VROBase;

/***/ }),

/***/ "984e":
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

class GpuTexObect {
  constructor() {
    // wait del times
    this.waitDelTimes = 0; // renderer context unique id

    this.rcuid = 0; // texture resource unique id

    this.resUid = 0; // texture resolution size

    this.width = 0;
    this.height = 0; // for 3d texture

    this.depth = 0;
    this.sampler = 0; // gpu texture buffer

    this.texBuf = null;
    this.m_attachCount = 0;
  }

  __$attachThis() {
    ++this.m_attachCount;
  }

  __$detachThis() {
    --this.m_attachCount; //console.log("GpuTexObect::__$detachThis() this.m_attachCount: "+this.m_attachCount);

    if (this.m_attachCount < 1) {
      this.m_attachCount = 0; //console.log("GpuTexObect::__$detachThis() this.m_attachCount value is 0.");
      // do something
    }
  }
  /**
   * bind the renderer runtime resource  to the current renderer context
   * @param gl system gpu context
   */


  bindToGpu(gl) {
    gl.bindTexture(this.sampler, this.texBuf);
  }

  getAttachCount() {
    return this.m_attachCount;
  }

} // gpu texture buffer renderer resource


class ROTextureResource {
  constructor(rcuid, gl) {
    this.m_resMap = new Map();
    this.m_freeMap = new Map(); // 显存的纹理buffer的总数

    this.m_texResTotal = 0;
    this.m_attachTotal = 0;
    this.m_delay = 128; // renderer context unique id

    this.m_rcuid = 0;
    this.m_gl = null;
    this.texMid = -1;
    this.unlocked = true;
    this.m_rcuid = rcuid;
    this.m_gl = gl;
  }

  createBuf() {
    return this.m_gl.createTexture();
  }

  createResByParams3(resUid, param0, param1, param2) {
    //console.log("TexRes createResByParams3, this.m_resMap.has("+resUid+"): ",this.m_resMap.has(resUid));
    if (!this.m_resMap.has(resUid)) {
      let obj = new GpuTexObect();
      obj.rcuid = this.getRCUid();
      obj.resUid = resUid;
      obj.width = param0;
      obj.height = param1;
      obj.sampler = param2;
      obj.texBuf = this.createBuf();
      obj.texBuf.resUid = resUid;
      this.addTextureRes(obj);
      return true;
    }

    return false;
  }
  /**
   * @returns return renderer context unique id
   */


  getRCUid() {
    return this.m_rcuid;
  }
  /**
   * @returns return system gpu context
   */


  getRC() {
    return this.m_gl;
  }
  /**
   * check whether the renderer runtime resource(by renderer runtime resource unique id) exists in the current renderer context
   * @param resUid renderer runtime resource unique id
   * @returns has or has not resource by unique id
   */


  hasResUid(resUid) {
    return this.m_resMap.has(resUid);
  }

  renderBegin() {
    this.texMid = -1;
  }
  /**
   * @returns get renderer runtime texture rexource total number
   */


  getTextureResTotal() {
    return this.m_texResTotal;
  }

  addTextureRes(object) {
    if (!this.m_resMap.has(object.resUid)) {
      object.waitDelTimes = 0; //console.log("ROTextureResource add a texture buffer(resUid="+object.resUid+"),sampler: ",object.sampler,object);

      this.m_resMap.set(object.resUid, object);
      this.m_texResTotal++;
    }
  }
  /**
   * get system gpu context resource buf
   * @param resUid renderer runtime resource unique id
   * @returns system gpu context resource buf
   */


  getGpuBuffer(resUid) {
    if (this.m_resMap.has(resUid)) {
      return this.m_resMap.get(resUid).texBuf;
    }

    return null;
  }
  /**
   * bind the renderer runtime resource(by renderer runtime resource unique id) to the current renderer context
   * @param resUid renderer runtime resource unique id
   */


  bindToGpu(resUid) {
    if (this.m_resMap.has(resUid)) {
      this.m_resMap.get(resUid).bindToGpu(this.m_gl);
    }
  }
  /**
   * @returns get renderer runtime texture rexource reference total number
   */


  getAttachTotal() {
    return this.m_attachTotal;
  }

  __$attachRes(resUid) {
    if (this.m_resMap.has(resUid)) {
      this.m_attachTotal++;
      let object = this.m_resMap.get(resUid);

      if (object.getAttachCount() < 1) {
        if (this.m_freeMap.has(resUid)) {
          this.m_freeMap.delete(resUid);
        }
      }

      object.waitDelTimes = 0;

      object.__$attachThis();
    }
  }

  __$detachRes(resUid) {
    if (this.m_resMap.has(resUid)) {
      if (this.m_resMap.has(resUid)) {
        let object = this.m_resMap.get(resUid);

        if (object.getAttachCount() > 0) {
          this.m_attachTotal--;

          object.__$detachThis();

          if (object.getAttachCount() < 1) {
            // 将其加入待清理的map
            this.m_freeMap.set(resUid, object);
          }
        }
      }
    }
  }

  update() {
    this.m_delay--;

    if (this.m_delay < 1) {
      this.m_delay = 128;

      for (const [key, value] of this.m_freeMap) {
        value.waitDelTimes++;

        if (value.waitDelTimes > 5) {
          //console.log("ROTextureResource remove a texture buffer(resUid="+value.resUid+")");
          this.m_resMap.delete(value.resUid);
          this.m_freeMap.delete(value.resUid);
          this.m_gl.deleteTexture(value.texBuf);
          value.texBuf = null;
          this.m_texResTotal--;
        }
      }
    }
  }

}

exports.default = ROTextureResource;

/***/ }),

/***/ "9f82":
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

class RPStatus {
  constructor() {
    this.sdkVer = 0;
    this.version = 0;
    this.drawCallTimes = 0;
    this.drawTrisNumber = 0;
    this.povNumber = 0;
  }

  reset() {
    this.drawCallTimes = 0;
    this.drawTrisNumber = 0;
    this.povNumber = 0;
  }

}

exports.RPStatus = RPStatus;

/***/ }),

/***/ "a4f8":
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

class RenderingStencil {
  constructor(rstate) {
    this.m_rstate = null;
    this.m_rstate = rstate;
  }

  isEnabled() {
    return true;
  }

  setDepthTestEnable(enable) {
    if (this.m_rstate) this.m_rstate.setDepthTestEnable(enable);
    return this;
  }
  /**
   * 设置 gpu stencilFunc 状态
   * @param func Specifies the test function. Eight symbolic constants are valid: GL_NEVER, GL_LESS, GL_LEQUAL, GL_GREATER, GL_GEQUAL, GL_EQUAL, GL_NOTEQUAL, and GL_ALWAYS. The initial value is GL_ALWAYS.
   * @param ref a GLint type number, value range: [0,2n−1];
   * @param mask GLint type number
   */


  setStencilFunc(func, ref, mask) {
    this.m_rstate.setStencilFunc(func, ref, mask);
    return this;
  }
  /**
   * 设置 gpu stencilMask 状态
   * @param mask GLint type number
   */


  setStencilMask(mask) {
    this.m_rstate.setStencilMask(mask);
    return this;
  }
  /**
   * 设置 gpu stencilOp 状态
   * @param fail Specifies the action to take when the stencil test fails. Eight symbolic constants are accepted: GL_KEEP, GL_ZERO, GL_REPLACE, GL_INCR, GL_INCR_WRAP, GL_DECR, GL_DECR_WRAP, and GL_INVERT. The initial value is GL_KEEP.
   * @param zfail Specifies the stencil action when the stencil test passes, but the depth test fails. dpfail accepts the same symbolic constants as sfail. The initial value is GL_KEEP.
   * @param zpass Specifies the stencil action when both the stencil test and the depth test pass, or when the stencil test passes and either there is no depth buffer or depth testing is not enabled. dppass accepts the same symbolic constants as sfail. The initial value is GL_KEEP.
   */


  setStencilOp(fail, zfail, zpass) {
    this.m_rstate.setStencilOp(fail, zfail, zpass);
    return this;
  }

}

exports.RenderingStencil = RenderingStencil;

/***/ }),

/***/ "a5ba":
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

const RenderConst_1 = __webpack_require__("e08e");

class RenderStateObject {
  constructor(cullFaceMode, blendMode, depthTestMode) {
    this.m_uid = -1;
    this.m_cullFaceMode = 0; // blend mode

    this.m_blendMode = 0; // depth test type mode

    this.m_depthTestMode = 0; // shadow status Mode(receive | make | receive and make | none)

    this.m_shadowMode = 0;
    this.m_uid = RenderStateObject.s_uid++;
    this.m_cullFaceMode = cullFaceMode;
    this.m_blendMode = blendMode;
    this.m_depthTestMode = depthTestMode;
  }

  getUid() {
    return this.m_uid;
  }

  getCullFaceMode() {
    return this.m_cullFaceMode;
  }

  getDepthTestMode() {
    return this.m_depthTestMode;
  }

  getBlendMode() {
    return this.m_blendMode;
  }

  use() {
    if (RenderStateObject.s_state != this.m_uid) {
      //console.log("RenderStateObject this.m_uid: ",this.m_uid);
      RenderStateObject.Rstate.setCullFaceMode(this.m_cullFaceMode); //RenderStateObject.Rstate.setBlendMode(this.m_blendMode);

      let list = RenderStateObject.s_blendModes[RenderStateObject.m_blendMode];

      if (RenderStateObject.m_blendMode < 0) {
        RenderStateObject.Rstate.setBlendMode(this.m_blendMode, RenderStateObject.s_blendModes[this.m_blendMode]);
      } else {
        RenderStateObject.Rstate.setBlendMode(RenderStateObject.m_blendMode, RenderStateObject.s_blendModes[RenderStateObject.m_blendMode]);
      }

      if (RenderStateObject.s_depthTestMode < 0) {
        RenderStateObject.Rstate.setDepthTestMode(this.m_depthTestMode);
      } else {
        RenderStateObject.Rstate.setDepthTestMode(RenderStateObject.s_depthTestMode);
      } //


      RenderStateObject.s_state = this.m_uid;
    }
  }

  static CreateBlendModeSeparate(name, srcRGB, dstRGB, srcAlpha, dstAlpha, equationRGB = 0, equationAlpha = 0) {
    if (name != null && name != "") {
      let b;

      if (RenderStateObject.s_blendModeNameMap.has(name)) {
        b = RenderStateObject.s_blendModeNameMap.get(name);
        return RenderStateObject.s_blendModeIndexMap.get(b);
      }

      if (equationRGB < 1) {
        equationRGB = RenderConst_1.GLBlendEquation.FUNC_ADD;
      }

      if (equationAlpha < 1) {
        equationAlpha = RenderConst_1.GLBlendEquation.FUNC_ADD;
      }

      let type = 1;
      b = 31;
      b = b * 131 + srcRGB;
      b = b * 131 + dstRGB;

      if (srcAlpha > 0 && dstAlpha > 0) {
        b = b * 131 + srcAlpha;
        b = b * 131 + dstAlpha;
        type = 1;
      }

      if (RenderStateObject.s_blendModeIndexMap.has(b)) {
        console.warn("This blendmode value already exists, its name is " + name + ".");
        RenderStateObject.s_blendModeNameMap.set(name, b);
        return RenderStateObject.s_blendModeIndexMap.get(b);
      }

      let index = ++RenderStateObject.s_blendModeIndex;
      RenderStateObject.s_blendModeNameMap.set(name, b);
      RenderStateObject.s_blendModeIndexMap.set(b, index);
      let list = [type, equationRGB, equationAlpha, srcRGB, dstRGB, srcAlpha, dstAlpha];
      RenderStateObject.s_blendModes[index] = list;
      return index;
    }

    return 0;
  }

  static CreateBlendMode(name, srcColor, dstColor, blendEquation = 0) {
    if (name != null && name != "") {
      let b;

      if (RenderStateObject.s_blendModeNameMap.has(name)) {
        b = RenderStateObject.s_blendModeNameMap.get(name);
        return RenderStateObject.s_blendModeIndexMap.get(b);
      }

      if (blendEquation < 1) {
        blendEquation = RenderConst_1.GLBlendEquation.FUNC_ADD;
      }

      let type = 0;
      b = 31;
      b = b * 131 + srcColor;
      b = b * 131 + dstColor;

      if (RenderStateObject.s_blendModeIndexMap.has(b)) {
        return RenderStateObject.s_blendModeIndexMap.get(b);
      }

      let index = ++RenderStateObject.s_blendModeIndex;
      RenderStateObject.s_blendModeNameMap.set(name, b);
      RenderStateObject.s_blendModeIndexMap.set(b, index);
      let list = [type, blendEquation, 0, srcColor, dstColor, 0, 0]; //console.log("list: ",list);

      RenderStateObject.s_blendModes[index] = list;
      return index;
    }

    return 0;
  }

  static Create(objName, cullFaceMode, blendMode, depthTestMode) {
    if (RenderStateObject.s_stsNameMap.has(objName)) {
      let po = RenderStateObject.s_stsNameMap.get(objName);
      return po.getUid();
    } //let key: number = depthTestMode << 8 | blendMode << 4 | cullFaceMode;


    let key = 31;
    key = key * 131 + depthTestMode;
    key = key * 131 + blendMode;
    key = key * 131 + cullFaceMode;

    if (RenderStateObject.s_stsMap.has(key)) {
      let po = RenderStateObject.s_stsMap.get(key);
      key = po.getUid();
    } else {
      let po = new RenderStateObject(cullFaceMode, blendMode, depthTestMode);
      key = po.getUid();
      RenderStateObject.s_stsMap.set(key, po);
      RenderStateObject.s_stsNameMap.set(objName, po);
      RenderStateObject.s_states.push(po);
      ++RenderStateObject.s_statesLen;
    }

    return key;
  }

  static GetRenderStateByName(objName) {
    if (RenderStateObject.s_stsNameMap.has(objName)) {
      let po = RenderStateObject.s_stsNameMap.get(objName);
      return po.getUid();
    }

    return -1;
  } // @param           state come from RODisp::renderState


  static UseRenderState(state) {
    //if(RenderStateObject.s_unlocked && RenderStateObject.Rstate.roState != state)                
    if (RenderStateObject.s_unlocked && RenderStateObject.s_state != state) {
      if (state > -1 && state < RenderStateObject.s_statesLen) {
        RenderStateObject.s_states[state].use();
      }
    }
  }

  static UseRenderStateByName(stateName) {
    if (RenderStateObject.s_unlocked) {
      let state = RenderStateObject.GetRenderStateByName(stateName); //trace("state: "+state+", stateName: "+stateName);
      //if(RenderStateObject.Rstate.roState != state)

      if (RenderStateObject.s_state != state) {
        if (state > -1 && state < RenderStateObject.s_statesLen) {
          RenderStateObject.s_states[state].use();
        }
      }
    }
  }

  static UnlockBlendMode() {
    RenderStateObject.m_blendMode = RenderStateObject.s_preBlendMode;
  }

  static LockBlendMode(blendMode) {
    RenderStateObject.s_preBlendMode = RenderStateObject.m_blendMode;
    RenderStateObject.m_blendMode = blendMode;
  }

  static UnlockDepthTestMode() {
    RenderStateObject.s_depthTestMode = RenderStateObject.s_preDepthTestMode;
  }

  static LockDepthTestMode(depthTestMode) {
    RenderStateObject.s_preDepthTestMode = RenderStateObject.s_depthTestMode;
    RenderStateObject.s_depthTestMode = depthTestMode;
  }

  static Lock() {
    RenderStateObject.s_unlocked = false;
  }

  static Unlock() {
    RenderStateObject.s_unlocked = true;
  }

  static Reset() {
    RenderStateObject.s_state = -1;
  }

}

RenderStateObject.s_uid = 0;
RenderStateObject.s_state = -1;
RenderStateObject.s_states = [];
RenderStateObject.s_statesLen = 1;
RenderStateObject.m_blendMode = -1;
RenderStateObject.s_depthTestMode = -1;
RenderStateObject.s_stsMap = new Map();
RenderStateObject.s_stsNameMap = new Map();
RenderStateObject.s_blendModeNameMap = new Map();
RenderStateObject.s_blendModeIndexMap = new Map();
RenderStateObject.s_blendModeIndex = 0;
RenderStateObject.s_blendModes = new Array(256);
RenderStateObject.s_unlocked = true;
RenderStateObject.Rstate = null;
RenderStateObject.s_preBlendMode = -1;
RenderStateObject.s_preDepthTestMode = -1;
exports.RenderStateObject = RenderStateObject;

/***/ }),

/***/ "a7ed":
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

class FrustumUniformBuilder {
  create(rc, shdp) {
    let param = UniformConst_1.default.FrustumParam;
    if (shdp.hasUniformByName(param.name)) return rc.uniformContext.createShaderGlobalUniformFromProbe(rc.getCamera().ufrustumProbe, param.name, [param.name]);
    return null;
  }

  getIDNS() {
    return "FrustumUniformBuilder";
  }

}

exports.default = FrustumUniformBuilder;

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

/***/ "b02c":
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

function getNearestCeilPow2(int_n) {
  let x = 1;

  while (x < int_n) {
    x <<= 1;
  }

  return x;
}
/**
 * renderer runtime texture resource object
 */


class TextureRenderObj {
  constructor(rcuid, texListHashId) {
    this.m_uid = -1;
    this.m_mid = -1;
    this.m_texTotal = 0; // max texture amount: 8

    this.m_gtexList = null;
    this.m_samplers = null;
    this.m_texList = null; // renderer context uid

    this.m_rcuid = 0;
    this.m_texRes = null; // 是否收集gpu数据直接使用，true表示需要收集

    this.direct = true; // 自身的引用计数器

    this.m_attachCount = 0;
    this.m_rcuid = rcuid;
    this.m_uid = TextureRenderObj.s_uid++;
    this.m_mid = texListHashId;
  }

  __$setParam(rcuid, texListHashId) {
    this.m_rcuid = rcuid;
    this.m_mid = texListHashId;
  }
  /**
   * @returns return renderer context unique id
   */


  getRCUid() {
    return this.m_rcuid;
  }

  getMid() {
    return this.m_mid;
  }

  getTexTotal() {
    return this.m_texTotal;
  }

  collectTexList(texRes, ptexList, shdTexTotal) {
    this.m_texRes = texRes;
    let i = 0;

    if (this.direct) {
      if (this.m_texTotal < 1 && ptexList.length > 0) {
        let len = getNearestCeilPow2(ptexList.length);
        this.m_samplers = new Uint16Array(len);
        this.m_gtexList = new Array(len);
        this.m_texList = ptexList;
        let tex;

        while (i < shdTexTotal) {
          tex = ptexList[i];

          tex.__$attachThis();

          tex.__$$upload(texRes);

          this.m_samplers[i] = tex.getSampler();
          this.m_gtexList[i] = this.m_texRes.getGpuBuffer(tex.getResUid());

          this.m_texRes.__$attachRes(tex.getResUid());

          i++;
        }

        this.m_texTotal = i;
      } else {
        this.m_texTotal = 0;
      }
    } else {
      this.m_texTotal = shdTexTotal;
    }

    while (i < ptexList.length) {
      ptexList[i++].__$attachThis();
    }
  } // 注意: 移动端要注意这里的切换机制是符合移动端低带宽的特点


  run() {
    //console.log("this.m_texRes.unlocked: ",this.m_texRes.unlocked,this.m_texRes.texMid != this.m_mid);
    if (this.m_texRes.unlocked && this.m_texRes.texMid != this.m_mid) {
      this.m_texRes.texMid = this.m_mid; // console.log("TextureRenderObj::run(), this.m_mid: ",this.m_mid,this.m_uid, this.m_texList);

      let gl = this.m_texRes.getRC();
      let texI = gl.TEXTURE0;

      if (this.direct) {
        //console.log("this.m_gtexList: ",this.m_gtexList,", total: "+this.m_texTotal);
        for (let i = 0; i < this.m_texTotal; ++i) {
          gl.activeTexture(texI++);
          gl.bindTexture(this.m_samplers[i], this.m_gtexList[i]);
        }
      } else {
        let list = this.m_texList;

        for (let i = 0; i < this.m_texTotal; ++i) {
          gl.activeTexture(texI++);

          list[i].__$$use(this.m_texRes);
        }
      }
    }
  }

  getUid() {
    return this.m_uid;
  }

  __$attachThis() {
    ++this.m_attachCount;
  }

  __$detachThis() {
    --this.m_attachCount; //console.log("TextureRenderObj::__$detachThis() this.m_attachCount: "+this.m_attachCount);

    if (this.m_attachCount < 1) {
      this.m_attachCount = 0; //console.log("TextureRenderObj::__$detachThis() this.m_attachCount value is 0.");

      TextureRenderObj.Restore(this);
    }
  }

  reset() {
    if (this.m_texList != null) {
      for (let i = 0, len = this.m_texList.length; i < len; ++i) {
        this.m_texList[i].__$detachThis();

        this.m_texRes.__$detachRes(this.m_texList[i].getResUid());

        this.m_gtexList[i] = null;
      }
    }

    this.m_texTotal = 0;
    this.m_texList = null;
    this.m_texRes = null;
  }

  static Create(texRes, texList, shdTexTotal) {
    let texTotal = texList.length;

    if (texTotal > 0 && shdTexTotal > 0) {
      if (texTotal < shdTexTotal) {
        throw Error("There are fewer textures than in the shader : (need " + shdTexTotal + ",but only have " + texTotal + ") !!!");
        return null;
      }

      let key = 31;
      let t = 0;
      let direct = true;

      while (t < shdTexTotal) {
        key = key * 131 + texList[t].getUid();

        if (!texList[t].isDirect()) {
          direct = false;
        }

        ++t;
      }

      let rtoMap = TextureRenderObj.s_troMaps[texRes.getRCUid()];
      let tro = null;

      if (rtoMap.has(key)) {
        tro = rtoMap.get(key);
      } else {
        if (TextureRenderObj.s_freeTROList.length < 1) {
          tro = new TextureRenderObj(texRes.getRCUid(), key); //console.log("TextureRenderObj::Create use a new tex mid: " + tro.getMid(),",total: "+shdTexTotal,",key: "+key);
        } else {
          tro = TextureRenderObj.s_freeTROList.pop(); //console.log("TextureRenderObj::Create use an old tex mid: " + tro.getMid(),",total: "+shdTexTotal,",key: "+key);
        }

        tro.collectTexList(texRes, texList, shdTexTotal);
        rtoMap.set(key, tro);
      }

      tro.__$setParam(texRes.getRCUid(), key);

      tro.direct = direct;
      return tro;
    }

    return null;
  }

  static Restore(tro) {
    if (tro.getMid() > -1) {
      //console.log("TextureRenderObj::Restore tro.getMid(): "+tro.getMid());
      TextureRenderObj.s_troMaps[tro.getRCUid()].delete(tro.getMid());

      tro.__$setParam(0, 0);

      TextureRenderObj.s_freeTROList.push(tro);
      tro.reset();
    }
  }

  static GetByMid(rcuid, uid) {
    return TextureRenderObj.s_troMaps[rcuid].get(uid);
  }

}

TextureRenderObj.s_uid = 0;
TextureRenderObj.s_troMaps = [new Map(), new Map(), new Map(), new Map(), new Map(), new Map(), new Map(), new Map()];
TextureRenderObj.s_freeTROList = [];
TextureRenderObj.s_unloacked = true;
TextureRenderObj.s_preMid = -1;
exports.TextureRenderObj = TextureRenderObj;

class EmptyTexRenderObj {
  constructor(texRes) {
    this.m_texRes = null;
    this.m_texRes = texRes;
  }

  run() {
    this.m_texRes.renderBegin();
  }

  getMid() {
    return 1;
  }

  __$attachThis() {}

  __$detachThis() {}

}

exports.EmptyTexRenderObj = EmptyTexRenderObj;
exports.default = TextureRenderObj;

/***/ }),

/***/ "b0ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

class RViewElement {
  constructor() {
    this.m_canvas = null;
    this.m_div = null;
    this.m_divW = -1;
    this.m_divH = -1;
    this.resized = true;
  }

  setDiv(div) {
    this.m_div = div;
  }
  /**
   * @returns for example: #350b7e
   */


  getCSSHEXRGB(r, g, b) {
    let str = "#";
    let t = Math.floor(r * 255.0);

    if (t < 0xf) {
      str += "0" + t.toString(16);
    } else {
      str += "" + t.toString(16);
    }

    t = Math.floor(g * 255.0);

    if (t < 0xf) {
      str += "0" + t.toString(16);
    } else {
      str += "" + t.toString(16);
    }

    t = Math.floor(b * 255.0);

    if (t < 0xf) {
      str += "0" + t.toString(16);
    } else {
      str += "" + t.toString(16);
    }

    return str;
  }

  createViewEle(pdocument, autoResize, pw, ph) {
    if (this.m_div == null) {
      this.m_div = document.getElementById("voxEngineDiv");
    }

    if (this.m_div == null) {
      this.m_div = pdocument.createElement("div");
      document.body.appendChild(this.m_div);
    }

    const style = this.m_div.style;
    style.display = "bolck";
    style.position = "absolute";

    if (style.left == "") {
      style.left = "0px";
      style.top = "0px";
    }

    if (autoResize) {
      style.width = "100%";
      style.height = "100%";
    } else {
      this.m_div.style.width = pw + "px";
      this.m_div.style.height = ph + "px";
    }

    if (this.m_canvas == null) {
      this.m_canvas = document.createElement("canvas");
      this.m_div.appendChild(this.m_canvas);
      this.m_canvas.width = 800;
      this.m_canvas.height = 600;
      this.m_canvas.style.display = "bolck";
      this.m_canvas.style.left = "0px";
      this.m_canvas.style.top = "0px";
      this.m_canvas.style.position = "absolute";
    }
  }

  setDivStyleLeftAndTop(px, py) {
    this.m_div.style.left = px + "px";
    this.m_div.style.top = py + "px";
  }

  setDivStyleSize(pw, ph) {
    if (this.m_divW != pw || this.m_divH != ph) {
      this.m_div.style.width = pw + "px";
      this.m_div.style.height = ph + "px";
      this.resized = true;
    }
  }

  getDiv() {
    return this.m_div;
  }

  getCanvas() {
    return this.m_canvas;
  }

}

exports.default = RViewElement;

/***/ }),

/***/ "b30a":
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

const MaterialConst_1 = __importDefault(__webpack_require__("644c")); // import DebugFlag from "../debug/DebugFlag";

/**
 * 作为渲染器运行时 material shader 资源的管理类
 * renderer runtime material shader resource manager
 */


class RenderShader {
  constructor(rcuid, gl, adapter, shdProgramBuilder) {
    this.m_sharedUniformList = [];
    this.m_unlocked = true;
    this.m_texUnlocked = false;
    this.m_preuid = -1;
    this.m_currShd = null;
    this.m_fragOutputTotal = 1;
    this.m_rcuid = -1;
    this.m_rc = null;
    this.m_gpuProgram = null;
    this.m_adapter = null;
    this.m_guniform = null; // material相关的uniform,默认不包括transform相关的信息

    this.m_uniform = null; // 只有transform相关的信息uniform

    this.m_trsu = null;
    this.m_shdProgramBuilder = null; // 用于记录 renderState(低10位)和ColorMask(高10位) 的状态组合

    this.drawFlag = -1;
    this.__$globalUniform = null;
    this.m_rcuid = rcuid;
    this.m_rc = gl;
    this.m_adapter = adapter;
    this.m_shdProgramBuilder = shdProgramBuilder;
  }

  createResByParams3(resUid, param0, param1, param2) {
    return false;
  }
  /**
   * @returns return system gpu context
   */


  getRC() {
    return this.m_rc;
  }
  /**
   * @returns return current gpu shader  program
   */


  getGPUProgram() {
    return this.m_gpuProgram;
  }
  /**
   * @returns return renderer context unique id
   */


  getRCUid() {
    return this.m_rcuid;
  }

  useTransUniform(u) {
    if (this.m_trsu != u) {
      // if(DebugFlag.Flag_0 > 0) {
      //     console.log("useTransUniform() ...", u.dataList);
      // }
      this.m_trsu = u;
      u.use(this);
    }
  }

  useUniform(uniform) {
    if (this.m_uniform != uniform) {
      this.m_uniform = uniform;
      uniform.use(this);
    }
  }

  updateUniform(uniform) {
    if (uniform != null) {
      uniform.use(this);
    }
  }

  unlock() {
    this.m_unlocked = true;
    this.__$globalUniform = null;
  }

  isUnLocked() {
    return this.m_unlocked;
  }

  lock() {
    this.m_unlocked = false;
  }

  textureUnlock() {
    this.m_texUnlocked = true;
  }

  isTextureUnLocked() {
    return this.m_texUnlocked;
  }

  textureLock() {
    this.m_texUnlocked = false;
  }

  setSharedUniformByShd(shd, uniform) {
    this.m_sharedUniformList[shd.getUid()] = uniform;
  }

  getSharedUniformByShd(shd) {
    return this.m_sharedUniformList[shd.getUid()];
  }

  getCurrFragOutputTotal() {
    return this.m_fragOutputTotal;
  }
  /**
   * check whether the renderer runtime resource(by renderer runtime resource unique id) exists in the current renderer context
   * @param resUid renderer runtime resource unique id
   * @returns has or has not resource by unique id
   */


  hasResUid(resUid) {
    // return this.m_shdList[resUid] != null;
    return this.m_shdProgramBuilder.hasUid(resUid);
  }
  /**
   * bind the renderer runtime resource(by renderer runtime resource unique id) to the current renderer context
   * @param resUid renderer runtime resource unique id
   */


  bindToGpu(resUid) {
    //if (this.m_unlocked && resUid > -1 && resUid < this.m_shdListLen) {
    if (this.m_unlocked && this.m_shdProgramBuilder.containsUid(resUid)) {
      if (this.m_preuid != resUid) {
        this.m_preuid = resUid; //let shd: IShdProgram = this.m_shdList[resUid];

        let shd = this.m_shdProgramBuilder.findShdProgramByUid(resUid);
        this.m_fragOutputTotal = shd.getFragOutputTotal();

        if (this.m_fragOutputTotal != this.getActiveAttachmentTotal()) {
          //if(RendererDevice.SHOWLOG_ENABLED) {
          console.log("shd.getUniqueShaderName(): string: " + shd.getUniqueShaderName());
          console.log("this.m_fragOutputTotal: " + this.m_fragOutputTotal + ", rc.getActiveAttachmentTotal(): " + this.getActiveAttachmentTotal());
          console.error("Error: MRT output amount is not equal to current shader( " + shd.toString() + " ) frag shader output amount !!!"); //}
        }

        this.m_gpuProgram = shd.getGPUProgram();
        this.m_rc.useProgram(this.m_gpuProgram);
        shd.useTexLocation(); // console.log("use a new shader uid: ",shd.getUid(),",uns: ",shd.getUniqueShaderName());
        // if(DebugFlag.Flag_0 > 0) {
        //     console.log("use a new shader uid: ",shd.getUid(),",uns: ",shd.getUniqueShaderName());
        // }
        // use global shared uniform

        let uniform = this.m_sharedUniformList[shd.getUid()]; //  let boo: boolean = false;
        //  if((uniform as any).uns == "u_projMat") {
        //      console.log("only use projMat begin");
        //      boo = true;
        //  }

        this.m_guniform = uniform;

        while (uniform != null) {
          uniform.use(this);
          uniform = uniform.next;
        }

        this.m_currShd = shd; //  if( boo ) {
        //      console.log("only use projMat end");
        //  }
      } else if (this.m_guniform == null && this.m_currShd != null) {
        let uniform = this.m_sharedUniformList[this.m_currShd.getUid()];
        this.m_guniform = uniform;

        while (uniform != null) {
          uniform.use(this);
          uniform = uniform.next;
        }
      }
    }
  }
  /**
   * get system gpu context resource buf
   * @param resUid renderer runtime resource unique id
   * @returns system gpu context resource buf
   */


  getGpuBuffer(resUid) {
    return null;
  }

  getCurrentShd() {
    return this.m_currShd;
  }

  getCurrentShdUid() {
    return this.m_preuid;
  }

  resetTransUniform() {
    this.m_trsu = null;
  }

  resetUniform() {
    this.m_uniform = null;
    this.m_trsu = null;
    this.m_guniform = null;
  }

  resetRenderState() {
    this.drawFlag = -1;
  }
  /**
   * frame begin run this function
   */


  renderBegin() {
    this.m_fragOutputTotal = 1;
    this.m_preuid = -1;
    this.m_currShd = null;
    this.drawFlag = -1; //this.resetUniform();
  }
  /**
   * frame update
   */


  update() {}

  destroy() {
    this.m_rc = null;
    this.m_adapter = null;
  }

  useUniformToCurrentShd(uniform) {
    if (this.m_uniform != uniform) {
      this.m_uniform != uniform;
      uniform.useByShd(this, this.m_currShd);
    }
  }

  useUniform2ToCurrentShd(uniform, transUniform) {
    if (this.m_uniform != uniform) {
      this.m_uniform != uniform;
      uniform.useByShd(this, this.m_currShd);
    }

    if (this.m_trsu != transUniform) {
      this.m_trsu != transUniform;
      transUniform.useByShd(this, this.m_currShd);
    }
  }
  /**
   * 仅仅更新单个matrix4的uniforms数据
  */


  useUniformMat4(ult, mat4f32Arr) {
    // console.log("df");
    this.m_rc.uniformMatrix4fv(ult, false, mat4f32Arr);
  }

  useUniformV2(ult, type, f32Arr, dataSize, offset) {
    const mc = MaterialConst_1.default;
    const rc = this.m_rc; // console.log("useUniformV2 A, type:",type,", dataSize: ",dataSize);

    switch (type) {
      case mc.SHADER_MAT4:
        rc.uniformMatrix4fv(ult, false, f32Arr, offset, dataSize * 16);
        break;

      case mc.SHADER_MAT3:
        rc.uniformMatrix3fv(ult, false, f32Arr, 0, dataSize * 9);
        break;

      case mc.SHADER_VEC4FV:
        // console.log("useUniformV2, f32Arr: ",f32Arr);
        rc.uniform4fv(ult, f32Arr, offset, dataSize * 4);
        break;

      case mc.SHADER_VEC3FV:
        rc.uniform3fv(ult, f32Arr, offset, dataSize * 3);
        break;

      case mc.SHADER_VEC4:
        // console.log("useUniformV2, vec4 f32Arr.length: ",f32Arr.length);
        rc.uniform4f(ult, f32Arr[0], f32Arr[1], f32Arr[2], f32Arr[3]);
        break;

      case mc.SHADER_VEC3:
        rc.uniform3f(ult, f32Arr[0], f32Arr[1], f32Arr[2]);
        break;

      case mc.SHADER_VEC2:
        rc.uniform2f(ult, f32Arr[0], f32Arr[1]);
        break;

      default:
        break;
    }
  }

  useUniformV1(ult, type, f32Arr, dataSize) {
    const mc = MaterialConst_1.default;
    const rc = this.m_rc; // console.log("useUniformV1 A, dataSize: ",dataSize, ", f32Arr: ", f32Arr);

    switch (type) {
      case mc.SHADER_MAT4:
        rc.uniformMatrix4fv(ult, false, f32Arr);
        break;

      case mc.SHADER_MAT3:
        rc.uniformMatrix3fv(ult, false, f32Arr);
        break;

      case mc.SHADER_VEC4FV:
        rc.uniform4fv(ult, f32Arr, dataSize * 4);
        break;

      case mc.SHADER_VEC3FV:
        rc.uniform3fv(ult, f32Arr, dataSize * 3);
        break;

      case mc.SHADER_VEC4:
        rc.uniform4f(ult, f32Arr[0], f32Arr[1], f32Arr[2], f32Arr[3]);
        break;

      case mc.SHADER_VEC3:
        rc.uniform3f(ult, f32Arr[0], f32Arr[1], f32Arr[2]);
        break;

      case mc.SHADER_VEC2:
        rc.uniform2f(ult, f32Arr[0], f32Arr[1]);
        break;

      default:
        break;
    }
  }

  getActiveAttachmentTotal() {
    return this.m_adapter.getActiveAttachmentTotal();
  }

}

exports.default = RenderShader;

/***/ }),

/***/ "baae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

class FrameBufferType {}

FrameBufferType.FRAMEBUFFER = 71;
FrameBufferType.DRAW_FRAMEBUFFER = 72;
FrameBufferType.READ_FRAMEBUFFER = 73;
exports.default = FrameBufferType;

/***/ }),

/***/ "c62b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2019-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

const RenderConst_1 = __webpack_require__("e08e");

const RenderColorMask_1 = __webpack_require__("070b");

const RenderStateObject_1 = __webpack_require__("a5ba");
/**
 * 渲染器渲染运行时核心关键执行显示单元,一个unit代表着一个draw call所渲染的所有数据
 * renderer rendering runtime core executable display unit.
 */


class RPOUnit {
  constructor() {
    this.rentity = null;
    this.uid = -1;
    this.value = -1; // 记录自身和RPONode的对应关系

    this.__$rpuid = -1; // renderProcess uid

    this.__$rprouid = -1;
    this.shader = null; // 这个posotion和bounds的center会是同一个实例

    this.pos = null;
    this.bounds = null;
    this.partTotal = 0; // partTotal = partGroup.length

    this.partGroup = null;
    this.visible = true;
    this.drawEnabled = true;
    this.renderState = 0;
    this.rcolorMask = 0; // 用于记录 renderState(低10位)和ColorMask(高10位) 的状态组合

    this.drawFlag = 0;
    this.vro = null; // transform uniform

    this.transUniform = null; // materiall uniform

    this.uniform = null; // 记录 material 对应的 shader program uid

    this.shdUid = -1;
    this.vtxUid = -1; // record tex group

    this.tro = null;
    this.texMid = -1;
    this.ubo = null;
    /**
     *  for example: [-70.0,1.0]
     */

    this.polygonOffset = null;
    this.rdp = null;
    this.vdrInfo = null;
    this.rgraph = null;
    this.m_ver = 0;
  }

  testDrawFlag() {
    this.drawFlag = (this.rcolorMask << 10) + this.renderState;

    if (this.shader.drawFlag != this.drawFlag) {
      this.shader.drawFlag = this.drawFlag;
      RenderStateObject_1.RenderStateObject.UseRenderState(this.renderState);
      RenderColorMask_1.RenderColorMask.UseRenderState(this.rcolorMask);
    }
  }

  copyMaterialFrom(unit) {
    this.tro = unit.tro;
    this.uniform = unit.uniform;
    this.ubo = unit.ubo;
    this.texMid = unit.texMid; // if(this.shdUid != unit.shdUid) {
    //     console.log(">>>>>>> copyMaterialFrom this.shdUid, unit.shdUid: ", this.shdUid, unit.shdUid);
    //     unit.transUniform.uns = "new_unit_trans";
    //     unit.uniform.uns = "new_uniform";
    // }

    this.shdUid = unit.shdUid;
    this.transUniform = unit.transUniform;
  }

  applyShader(force = false) {
    this.shader.bindToGpu(this.shdUid);

    if (force) {
      this.shader.resetUniform();
    }
  }

  getUid() {
    return this.uid;
  }

  getRPOUid() {
    return this.__$rpuid;
  }

  getRPROUid() {
    return this.__$rprouid;
  }

  getShaderUid() {
    return this.shdUid;
  }

  setIvsParam(ivsIndex, ivsCount) {
    throw Error("illegal operation !!!"); // console.log("RPOUint::setIvsParam(), ivsIndex: ", ivsIndex, ", ivsCount: ", ivsCount);
    // // this.indicesRes.setIvsParam(ivsIndex, ivsCount);
    // this.rdp.setIvsParam(ivsIndex, ivsCount);
    // this.testVisible();
  }

  testVisible() {
    if (!this.rdp.rd) {
      throw Error("illegal operation !!!");
    }

    this.drawEnabled = this.visible && this.rdp.rd.ivsSize > 0;
  }

  setVisible(boo) {
    this.visible = boo;
    this.testVisible(); // if(DebugFlag.Flag_0 > 0) console.log("#### setVisible(): ", boo, "this.drawEnabled: ",this.drawEnabled);
  }

  setDrawFlag(renderState, rcolorMask) {
    this.renderState = renderState;
    this.rcolorMask = rcolorMask;
    this.drawFlag = (this.rcolorMask << 10) + this.renderState;
  }

  updateVtx() {
    if (this.vdrInfo.isUnlock()) {
      const rdp = this.rdp;
      rdp.ver = this.m_ver; // if(DebugFlag.Flag_0 > 0) {
      //     console.log("AA ---- AA XXXXX RPOUint::updateVtx() ..., rdp.getUid(): ", rdp.getUid());
      //     console.log("           XXXXX RPOUint::updateVtx() ..., rdp.ver: ", rdp.ver);
      // }

      const flag = this.vdrInfo.__$$copyToRDP(rdp);

      this.m_ver = rdp.ver; // if(DebugFlag.Flag_0 > 0) {
      //     console.log("BB ---- BB XXXXX RPOUint::updateVtx() ..., this.m_ver: ", this.m_ver);
      // }

      rdp.ver = 0;
      this.testVisible(); // if(DebugFlag.Flag_0 > 0) {
      //     console.log("##### ##### ###### ##### ---------------------- RPOUint::updateVtx() ...");
      // }

      return flag;
    }

    return false;
  }

  draw(rc) {
    throw Error("illegal operation !!!");
  }

  __$$drawThis(rc) {
    const st = rc.status;
    st.drawCallTimes++;
    const rd = this.rdp.rd;
    st.drawTrisNumber += rd.trisNumber; // console.log("this.rdp.getUid(): ", this.rdp.getUid());
    // TODO(Vily): 下面这个判断流程需要优化(由于几何数据更改之后上传gpu的动作是一帧上传16个这样的速度下实现的，所以需要下面这句代码来保证不出错: [.WebGL-000037DC02C2B800] GL_INVALID_OPERATION: Insufficient buffer size)
    // let ivsCount = ir.getVTCount();

    let ivsCount = rd.ivsSize; // if (this.ivsCount <= ivsCount && ir.isCommon()) ivsCount = this.ivsCount;
    // console.log("runit::drawThis(), ivsCount: ", ivsCount, ",ivsOffset: ", rd.ivsOffset, this.rdp.getUid(), rd.getUid());
    // if(DebugFlag.Flag_0 > 0) {
    //     console.log("runit::drawThis(), ivsCount: ", ivsCount, ",ivsOffset: ", rd.ivsOffset, this.rdp.getUid(), ", rd.getUid(): " ,rd.getUid());
    // }

    if (this.polygonOffset != null) {
      rc.setPolygonOffset(this.polygonOffset[0], this.polygonOffset[1]);
    } else {
      rc.resetPolygonOffset();
    }

    const gl = rc.RContext;

    switch (rd.drawMode) {
      case RenderConst_1.RenderDrawMode.ELEMENTS_TRIANGLES:
      case RenderConst_1.RenderDrawMode.ELEMENTS_LINES:
      case RenderConst_1.RenderDrawMode.ELEMENTS_TRIANGLE_STRIP:
      case RenderConst_1.RenderDrawMode.ELEMENTS_LINES_STRIP:
        // console.log("rd.gldm: ", rd.gldm);
        // if(DebugFlag.Flag_0 > 0)console.log("RPOUnit::run(), drawElements(ivsCount="+this.ivsCount+", ivsIndex="+this.ivsIndex+"),drawOffset: "+this.drawOffset);
        //rc.RContext.drawElements(rc.TRIANGLES, this.ivsCount, rd.ibufType,this.ivsIndex * this.ibufStep);
        gl.drawElements(rd.gldm, ivsCount, rd.bufType, rd.ivsOffset);
        break;

      case RenderConst_1.RenderDrawMode.ELEMENTS_INSTANCED_TRIANGLES:
      case RenderConst_1.RenderDrawMode.ELEMENTS_INSTANCED_LINES:
      case RenderConst_1.RenderDrawMode.ELEMENTS_INSTANCED_TRIANGLES_STRIP:
      case RenderConst_1.RenderDrawMode.ELEMENTS_INSTANCED_LINES_STRIP:
        //console.log("RPOUnit::run(), drawElementsInstanced(ivsCount="+this.ivsCount+", ivsIndex="+this.ivsIndex+", insCount: "+this.insCount+")");
        //rc.RContext.drawElementsInstanced(rc.TRIANGLES,this.ivsCount, rd.bufType, this.ivsIndex * this.ibufStep, this.insCount);
        gl.drawElementsInstanced(rd.gldm, ivsCount, rd.bufType, rd.ivsOffset, rd.insCount);
        break;

      case RenderConst_1.RenderDrawMode.ELEMENTS_TRIANGLE_FAN:
        //console.log("RPOUnit::run(), TRIANGLE_STRIP drawElements(ivsCount="+this.ivsCount+", ivsIndex="+this.ivsIndex+")");
        //rc.RContext.drawElements(rc.TRIANGLE_FAN, this.ivsCount, rd.bufType,this.ivsIndex * this.ibufStep);
        gl.drawElements(rc.TRIANGLE_FAN, ivsCount, rd.bufType, rd.ivsOffset);
        break;

      case RenderConst_1.RenderDrawMode.ARRAYS_LINES:
        //console.log("RPOUnit::run(), ARRAYS_LINES drawArrays(ivsCount="+this.ivsCount+", ivsIndex="+this.ivsIndex+")");
        gl.drawArrays(rc.LINES, rd.ivsIndex, ivsCount);
        break;

      case RenderConst_1.RenderDrawMode.ARRAYS_LINE_STRIP:
        //console.log("RPOUnit::run(), ARRAYS_LINE_STRIP drawArrays(ivsCount="+this.ivsCount+", ivsIndex="+this.ivsIndex+")");
        gl.drawArrays(rc.LINE_STRIP, rd.ivsIndex, ivsCount);
        break;

      default:
        break;
    }
  }

  __$$drawPart(rc) {
    const st = rc.status;
    st.drawCallTimes++; // const ir = this.indicesRes;

    const rd = this.rdp.rd;
    st.drawTrisNumber += rd.trisNumber; // TODO(Vily): 下面这个判断流程需要优化(由于几何数据更改之后上传gpu的动作是一帧上传16个这样的速度下实现的，所以需要下面这句代码来保证不出错: [.WebGL-000037DC02C2B800] GL_INVALID_OPERATION: Insufficient buffer size)

    let ivsCount = rd.ivsSize; // if (this.ivsCount <= ivsCount && ir.isCommon()) ivsCount = this.ivsCount;

    if (this.polygonOffset != null) {
      rc.setPolygonOffset(this.polygonOffset[0], this.polygonOffset[1]);
    } else {
      rc.resetPolygonOffset();
    }

    let i = 0;
    let gl = rc.RContext;

    switch (rd.drawMode) {
      case RenderConst_1.RenderDrawMode.ELEMENTS_TRIANGLES:
      case RenderConst_1.RenderDrawMode.ELEMENTS_LINES:
      case RenderConst_1.RenderDrawMode.ELEMENTS_TRIANGLE_STRIP:
      case RenderConst_1.RenderDrawMode.ELEMENTS_LINES_STRIP:
        for (; i < this.partTotal;) {
          // 这里面可以增加一个回调函数,这个回调函数可以对uniform(或者transformUniform)做一些数据改变，进而来控制相应的状态
          // 因此可以通过改变uniform实现大量的显示绘制
          //  let count:number = this.partGroup[i++];
          //  let offset:number = this.partGroup[i++];
          //  gl.drawElements(rc.TRIANGLES, count, this.ibufType, offset);
          gl.drawElements(rd.gldm, this.partGroup[i++], rd.bufType, this.partGroup[i++]);
        }

        break;

      case RenderConst_1.RenderDrawMode.ELEMENTS_INSTANCED_TRIANGLES:
      case RenderConst_1.RenderDrawMode.ELEMENTS_INSTANCED_LINES:
      case RenderConst_1.RenderDrawMode.ELEMENTS_INSTANCED_TRIANGLES_STRIP:
      case RenderConst_1.RenderDrawMode.ELEMENTS_INSTANCED_LINES_STRIP:
        //console.log("RPOUnit::run(), drawElementsInstanced(ivsCount="+this.ivsCount+", ivsIndex="+this.ivsIndex+", insCount: "+this.insCount+")");
        //rc.RContext.drawElementsInstanced(rc.TRIANGLES,this.ivsCount, this.ibufType, this.ivsIndex * this.ibufStep, this.insCount);
        gl.drawElementsInstanced(rd.gldm, ivsCount, rd.bufType, rd.ivsOffset, rd.insCount);
        break;

      case RenderConst_1.RenderDrawMode.ELEMENTS_TRIANGLE_FAN:
        //console.log("RPOUnit::run(), TRIANGLE_STRIP drawElements(ivsCount="+this.ivsCount+", ivsIndex="+this.ivsIndex+")");
        //rc.RContext.drawElements(rc.TRIANGLE_FAN, this.ivsCount, this.ibufType,this.ivsIndex * this.ibufStep);
        gl.drawElements(rc.TRIANGLE_FAN, ivsCount, rd.bufType, rd.ivsOffset);
        break;

      case RenderConst_1.RenderDrawMode.ARRAYS_LINES:
        //console.log("RPOUnit::run(), drawArrays(ivsCount="+this.ivsCount+", ivsIndex="+this.ivsIndex+")");
        gl.drawArrays(rc.LINES, rd.ivsIndex, ivsCount);
        break;

      case RenderConst_1.RenderDrawMode.ARRAYS_LINE_STRIP:
        //console.log("RPOUnit::run(), drawArrays(ivsCount="+this.ivsCount+", ivsIndex="+this.ivsIndex+")");
        gl.drawArrays(rc.LINE_STRIP, rd.ivsIndex, ivsCount);
        break;

      default:
        break;
    }
  }

  run2(rc) {
    //console.log("RPOUnit::run2(), this.tro: "+this.tro+", this.drawMode: "+this.drawMode);
    if (this.ubo != null) {
      this.ubo.run(rc);
    } //  if(this.shader == null)
    //  {
    //      console.log("this.shader == null unit this.uid: ",this.uid);
    //  }


    this.shader.useTransUniform(this.transUniform);
    this.shader.useUniform(this.uniform);
    this.testDrawFlag();
  }

  run(rc) {
    //console.log("RPOUnit::run(), this.tro: "+this.tro+", this.drawMode: "+this.drawMode);
    if (this.ubo != null) {
      this.ubo.run(rc);
    }

    this.vro.run();
    this.tro.run();
    this.shader.useTransUniform(this.transUniform);
    this.shader.useUniform(this.uniform);
    this.testDrawFlag();
  }

  runLockMaterial2(puniform) {
    this.testDrawFlag();
    this.shader.useUniform2ToCurrentShd(puniform == null ? this.uniform : puniform, this.transUniform);
  }

  runLockMaterial() {
    this.vro.run();
    this.testDrawFlag();
    this.shader.useUniform2ToCurrentShd(this.uniform, this.transUniform);
  }

  reset() {
    //  console.log("RPOUnit::reset(), uid: ",this.getUid());
    if (this.vdrInfo) {
      this.indicesRes = null;
      this.polygonOffset = null;

      this.vro.__$detachThis();

      this.vro = null;

      this.tro.__$detachThis();

      this.tro = null;
      this.texMid = -1;
      this.__$rprouid = -1;
      this.ubo = null;
      this.shdUid = -1;
      this.vtxUid = -1;
      this.uniform = null;
      this.transUniform = null;
      this.partGroup = null;
      this.partTotal = 0;
      this.drawFlag = 0x0;
      this.renderState = 0;
      this.rcolorMask = 0;
      this.drawEnabled = true;
      this.shader = null;
      this.bounds = null;
      this.pos = null;

      if (this.rdp) {
        this.rdp.clear();
        this.rdp = null;
      }

      this.vdrInfo = null;
      this.rgraph = null;
      this.rentity = null;
    }
  }

  destroy() {
    this.reset();
  }

}

exports.default = RPOUnit;

/***/ }),

/***/ "ca6c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

class BitConst {
  static PushThreeBitValueToInt(target, value) {
    return (target << 3) + value;
  }

  static PopThreeBitValueFromInt(target) {
    BitConst.value = 7 & target;
    return target >> 3;
  }

  static ContainsBit(target, bit) {
    return (bit & target) > 0;
  }

  static RemoveBit(target, bit) {
    return ~bit & target;
  }

  static AddBit(target, bit) {
    return bit | target;
  }

  static AssembleFromIntArray(intArray) {
    let bit = 0x0;
    let len = intArray.length;

    for (let i = 0; i < len; ++i) {
      if (intArray[i] > 0) {
        bit |= 1 << i;
      }
    }

    return bit;
  }

}

BitConst.BIT_ZERO = 0;
BitConst.BIT_ONE_0 = 1; //0b1

BitConst.BIT_ONE_1 = 1 << 1; //0b10

BitConst.BIT_ONE_2 = 1 << 2; //0b100

BitConst.BIT_ONE_3 = 1 << 3; //0b1000

BitConst.BIT_ONE_4 = 1 << 4; //0b10000

BitConst.BIT_ONE_5 = 1 << 5; //0b100000

BitConst.BIT_ONE_6 = 1 << 6; //0b1000000

BitConst.BIT_ONE_7 = 1 << 7; //0b10000000

BitConst.BIT_ONE_8 = 1 << 8; //0b100000000

BitConst.BIT_ONE_9 = 1 << 9; //0b1000000000

BitConst.BIT_ONE_10 = 1 << 10; //0b10000000000

BitConst.BIT_ONE_11 = 1 << 11; //0b100000000000

BitConst.value = 0;
exports.default = BitConst;

/***/ }),

/***/ "d53d":
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

class ShaderUniform {
  constructor() {
    this.uns = "";
    this.key = -1;
    this.program = null;
    this.types = null;
    this.uniformSize = 0;
    this.uniformNameList = null;
    this.locations = null;
    this.dataSizeList = null;
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
  }

  copyDataFromProbe(probe) {
    this.types = [];
    this.dataSizeList = [];

    for (let i = 0; i < probe.uniformsTotal; ++i) {
      this.types.push(probe.uniformTypes[i]);
      this.dataSizeList.push(probe.dataSizeList[i]);
    }

    this.uniformSize = probe.uniformsTotal;
  }

  useByLocation(rc, type, location, i) {}

  useByShd(rc, shd) {}

  use(rc) {}

  updateData() {}

  destroy() {}

}

exports.ShaderUniform = ShaderUniform; // for webgl1

class ShaderUniformV1 extends ShaderUniform {
  constructor() {
    super();
  }

  use(rc) {
    let i = 0;

    for (; i < this.uniformSize; ++i) {
      rc.useUniformV1(this.locations[i], this.types[i], this.dataList[i], this.dataSizeList[i]);
    }
  }

  useByLocation(rc, type, location, i) {
    rc.useUniformV1(location, type, this.dataList[i], this.dataSizeList[i]);
  }

  useByShd(rc, shd) {
    let i = 0;

    for (; i < this.uniformSize; ++i) {
      //rc.useUniformV1(shd.getUniformLocationByNS(this.uniformNameList[i]),shd.getUniformTypeByNS(this.uniformNameList[i]),this.dataList[i],this.dataSizeList[i]);
      rc.useUniformV1(shd.getUniformLocationByNS(this.uniformNameList[i]), this.types[i], this.dataList[i], this.dataSizeList[i]);
    }
  }

  updateData() {
    if (this.calcModels != null) {
      let len = this.calcModels.length;
      let model = null;

      for (let i = 0; i < len; ++i) {
        model = this.calcModels[i];
        model.buildData();
        model.updateMaterialDataList(this.dataList);
        model.initializeParam();
      }
    }
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
    this.dataSizeList = null;
    this.calcModels = null;
  }

}

exports.ShaderUniformV1 = ShaderUniformV1; // for webgl2

class ShaderUniformV2 extends ShaderUniform {
  constructor() {
    super();
  }

  use(rc) {
    // new DebugFlag
    // if(this.uns == "ggg" && DebugFlag.Flag_0 > 0) {
    //     let arr = this.dataList[0].slice(0);
    //     console.log("ggg arr: ",arr);
    // }
    // console.log("ShaderUniformV2::use()..");
    let i = 0;

    for (; i < this.uniformSize; ++i) {
      rc.useUniformV2(this.locations[i], this.types[i], this.dataList[i], this.dataSizeList[i], 0);
    }
  }

  useByLocation(rc, type, location, i) {
    rc.useUniformV2(location, type, this.dataList[i], this.dataSizeList[i], 0);
  }

  useByShd(rc, shd) {
    let i = 0;

    for (; i < this.uniformSize; ++i) {
      //rc.useUniformV2(shd.getUniformLocationByNS(this.uniformNameList[i]),shd.getUniformTypeByNS(this.uniformNameList[i]),this.dataList[i],this.dataSizeList[i],0);
      rc.useUniformV2(shd.getUniformLocationByNS(this.uniformNameList[i]), this.types[i], this.dataList[i], this.dataSizeList[i], 0);
    }
  }

  updateData() {
    if (this.calcModels != null) {
      let len = this.calcModels.length;
      let model = null;

      for (let i = 0; i < len; ++i) {
        model = this.calcModels[i];
        model.buildData();
        model.updateMaterialDataList(this.dataList);
        model.initializeParam();
      }
    }
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
    this.dataSizeList = null;
    this.calcModels = null;
    this.program = null;
  }

}

exports.ShaderUniformV2 = ShaderUniformV2;
/**
 * 只有一个mat4的uniform对象
 * only one mat4 type uniform object
 */

class ShaderMat4Uniform extends ShaderUniform {
  constructor() {
    super();
  }

  use(rc) {
    // console.log("use() uns: ", this.uns);
    rc.useUniformMat4(this.locations[0], this.dataList[0]);
  }

  useByLocation(rc, type, location, i) {
    rc.useUniformMat4(location, this.dataList[0]);
  }

  useByShd(rc, shd) {
    // console.log("useByShd() uns: ", this.uns, "uname: ", this.uniformNameList[0]);
    rc.useUniformMat4(shd.getUniformLocationByNS(this.uniformNameList[0]), this.dataList[0]);
  }

  destroy() {
    this.dataList[0] = null;
    this.dataList = null;
    this.types = null;
    this.locations = null;
    this.dataSizeList = null;
  }

}

exports.ShaderMat4Uniform = ShaderMat4Uniform;
exports.default = ShaderUniform;

/***/ }),

/***/ "d872":
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

const UniformDataSlot_1 = __webpack_require__("5326");

const ShaderUniformProbe_1 = __importDefault(__webpack_require__("3077"));

const UniformVec4Probe_1 = __importDefault(__webpack_require__("3024"));

const ShaderGlobalUniform_1 = __importDefault(__webpack_require__("7279"));

class ShaderUniformContext {
  constructor(rcuid, dataTotal = 256) {
    this.m_rcuid = 0;
    this.m_udSlot = null;
    this.m_rcuid = rcuid;
    this.m_udSlot = new UniformDataSlot_1.UniformDataSlot(rcuid, dataTotal);
  }
  /**
   * @returns return renderer context unique id
   */


  getRCUid() {
    return this.m_rcuid;
  }

  createShaderUniformProbe() {
    let probe = new ShaderUniformProbe_1.default(this.m_udSlot);
    return probe;
  }

  createUniformVec4Probe(vec4Total) {
    let probe = new UniformVec4Probe_1.default(this.m_udSlot, vec4Total);
    return probe;
  }

  createGlobalUinformFromProbe(uProbe, uniformNames = null) {
    let suo = this.createShaderGlobalUniform();
    this.updateGlobalUinformDataFromProbe(suo, uProbe, uniformNames);
    return suo;
  }

  updateGlobalUinformDataFromProbe(psuo, uProbe, uniformNames = null) {
    let suo = psuo;
    suo.uniformNameList = uniformNames != null ? uniformNames : uProbe.uniformNames;
    suo.copyDataFromProbe(uProbe);
    uProbe.update();
  }

  createShaderGlobalUniform() {
    let suo = new ShaderGlobalUniform_1.default(this.m_udSlot);
    return suo;
  }

  createShaderGlobalUniformFromProbe(uProbe, puns, uniformNames = null) {
    let suo = new ShaderGlobalUniform_1.default(this.m_udSlot);
    suo.uns = puns;
    suo.uniformNameList = uniformNames != null ? uniformNames : uProbe.uniformNames;
    suo.copyDataFromProbe(uProbe);
    uProbe.update();
    return suo;
  }

  createShaderGlobalUniformFromProbeAt(uProbe, puns, uniformNames = null, index) {
    let suo = new ShaderGlobalUniform_1.default(this.m_udSlot);
    suo.uns = puns;
    suo.uniformNameList = uniformNames != null ? uniformNames : uProbe.uniformNames;

    if (index < 0) {
      suo.copyDataFromProbe(uProbe);
    } else {
      suo.copyDataFromProbeAt(index, uProbe);
    }

    uProbe.update();
    return suo;
  }

  cloneShaderGlobalUniform(psuo) {
    let suo = psuo;
    return suo.clone();
  }

}

exports.ShaderUniformContext = ShaderUniformContext;

/***/ }),

/***/ "d958":
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

const RSEntityFlag_1 = __importDefault(__webpack_require__("11e6"));

const ShaderUniformContext_1 = __webpack_require__("d872");

const RODataBuilder_1 = __importDefault(__webpack_require__("36cb"));

const RenderProcessBuider_1 = __importDefault(__webpack_require__("3c81"));

const ROVtxBuilder_1 = __importDefault(__webpack_require__("1e15"));

const RendererInstanceContext_1 = __webpack_require__("0e01");

const RPOUnitBuilder_1 = __webpack_require__("eca0");

const RPONodeBuilder_1 = __importDefault(__webpack_require__("442e"));

const DispEntity3DManager_1 = __importDefault(__webpack_require__("1264"));
/**
 * kernal system instance, it is the renderer instance for the renderer runtime, it is very very very important class.
 */


class RendererInstance {
  constructor() {
    this.___$$$$$$$Author = "VilyLei(vily313@126.com)";
    this.m_uid = -1;
    this.m_entity3DMana = null;
    this.m_processes = [];
    this.m_processesLen = 0;
    this.m_sprocesses = [];
    this.m_sprocessesLen = 0;
    this.m_renderProxy = null;
    this.m_adapter = null;
    this.m_dataBuilder = null;
    this.m_renderInsContext = null;
    this.m_batchEnabled = true;
    this.m_processFixedState = true;
    this.m_rpoUnitBuilder = new RPOUnitBuilder_1.RPOUnitBuilder();
    this.m_rpoNodeBuilder = new RPONodeBuilder_1.default();
    this.m_processBuider = new RenderProcessBuider_1.default();
    this.m_roVtxBuilder = null;
    this.m_stage3D = null;
    this.m_fixProcess = null;
    this.textureBlock = null;
    this.m_uid = RendererInstance.s_uid++;
    this.m_renderInsContext = new RendererInstanceContext_1.RendererInstanceContext(this.m_uid);
  }

  __$setStage3D(stage3D) {
    if (stage3D != null && this.m_stage3D == null) {
      this.m_stage3D = stage3D;
    }
  }

  getUid() {
    return this.m_uid;
  }
  /**
   * @returns return renderer context unique id
   */


  getRCUid() {
    return this.m_uid;
  }

  getRPONodeBuilder() {
    return this.m_rpoNodeBuilder;
  }

  getDataBuilder() {
    return this.m_dataBuilder;
  }

  getRendererContext() {
    return this.m_renderInsContext;
  }

  getRenderProxy() {
    if (this.m_renderProxy != null) {
      return this.m_renderProxy;
    }

    this.m_renderProxy = this.m_renderInsContext.getRenderProxy();
    return this.m_renderProxy;
  }

  getStage3D() {
    return this.m_renderProxy.getStage3D();
  }

  getViewX() {
    return this.m_adapter.getViewportX();
  }

  getViewY() {
    return this.m_adapter.getViewportY();
  }

  getViewWidth() {
    return this.m_adapter.getViewportWidth();
  }

  getViewHeight() {
    return this.m_adapter.getViewportHeight();
  }

  getCamera() {
    return this.m_renderInsContext.getCamera();
  }

  createCamera() {
    return null;
  }
  /**
   * @param camera IRenderCamera instance
   * @param syncCamView the default value is false
   */


  useCamera(camera, syncCamView = false) {}

  useMainCamera() {}

  updateCamera() {
    if (this.m_renderProxy != null) {
      this.m_renderProxy.updateCamera();
    }
  }

  initialize(param = null, camera = null, shdProgramBuider = null) {
    if (this.m_dataBuilder == null && camera != null) {
      this.m_batchEnabled = param.batchEnabled;
      this.m_processFixedState = param.processFixedState;
      this.m_renderProxy = this.m_renderInsContext.getRenderProxy();
      this.m_uid = this.m_renderProxy.getUid();
      this.m_dataBuilder = new RODataBuilder_1.default(shdProgramBuider);
      this.m_roVtxBuilder = new ROVtxBuilder_1.default();
      this.m_renderInsContext.setCameraParam(param.camProjParam.x, param.camProjParam.y, param.camProjParam.z);
      let contextParam = new RendererInstanceContext_1.RendererInstanceContextParam();
      contextParam.uniformContext = new ShaderUniformContext_1.ShaderUniformContext(this.m_renderProxy.getRCUid());
      contextParam.camera = camera;
      contextParam.stage = this.m_stage3D;
      contextParam.builder = this.m_dataBuilder;
      contextParam.vtxBuilder = this.m_roVtxBuilder;
      contextParam.shaderProgramBuilder = shdProgramBuider;
      this.m_renderInsContext.initialize(param, camera, contextParam);
      this.m_adapter = this.m_renderProxy.getRenderAdapter();
      this.m_dataBuilder.initialize(this.m_renderProxy, this.m_rpoUnitBuilder, this.m_processBuider, this.m_roVtxBuilder); // (this.m_renderProxy as any).rshader = this.m_dataBuilder.getRenderShader();

      this.m_renderInsContext.initManager(this.m_dataBuilder);
      this.m_entity3DMana = new DispEntity3DManager_1.default(this.m_uid, this.m_dataBuilder, this.m_rpoUnitBuilder, this.m_processBuider);
      this.m_fixProcess = this.createSeparatedProcess();
      this.appendProcess(this.m_batchEnabled, this.m_processFixedState);
    }
  }
  /**
   * 获取渲染器可渲染对象管理器状态(版本号)
   */


  getRendererStatus() {
    return this.m_entity3DMana.version;
  }
  /**
   * update all data or status of the renderer runtime
   * should call this function per frame
   */


  update() {
    this.m_renderProxy.Texture.update();
    this.m_renderProxy.Vertex.update();
    this.m_entity3DMana.update();
  }

  updateAllProcess() {
    for (let i = 0; i < this.m_processesLen; ++i) {
      this.m_processes[i].update();
    }
  }

  updateProcessAt(processIndex) {
    if (processIndex > -1 && processIndex < this.m_processesLen) {
      this.m_processes[processIndex].update();
    }
  }

  setEntityManaListener(listener) {
    this.m_entity3DMana.setListener(listener);
  }
  /**
   * add an entity to the renderer process of the renderer instance
   * @param entity IRenderEntity instance(for example: DisplayEntity class instance)
   * @param processIndex this destination renderer process index of the m_processes array, the defaule value is 0
   * @param deferred if the value is true,the entity will not to be immediately add to the renderer process by its id, the defaule value is true
   */


  addEntity(entity, processIndex = 0, deferred = true) {
    if (entity != null) {
      if (entity.__$testRendererEnabled()) {
        if (processIndex > -1 && processIndex < this.m_processesLen) {
          this.m_entity3DMana.addEntity(entity, this.m_processes[processIndex].getUid(), deferred);
        }
      }
    }
  }

  addEntityToProcess(entity, process, deferred = true) {
    if (process != null && entity != null) {
      if (entity.__$testRendererEnabled()) {
        if (process.getRCUid() == this.m_uid) {
          this.m_entity3DMana.addEntity(entity, process.getUid(), deferred);
        }
      }
    }
  }
  /**
   * 将已经在渲染运行时中的entity移动到指定 process uid 的 render process 中去
   * move rendering runtime displayEntity to different renderer process
   */


  moveEntityToProcessAt(entity, dstProcessIndex) {
    if (entity != null && entity.getRendererUid() == this.m_uid) {
      if (entity.isInRendererProcess()) {
        if (dstProcessIndex > -1 && dstProcessIndex < this.m_processesLen) {
          let srcUid = entity.getDisplay().__$$runit.getRPROUid();

          let src = this.m_processBuider.getNodeByUid(srcUid);
          let dst = this.m_processes[dstProcessIndex];

          if (src != dst) {
            src.removeDispUnit(entity.getDisplay());
            entity.__$rseFlag = dst.getSortEnabled() ? RSEntityFlag_1.default.AddSortEnabled(entity.__$rseFlag) : RSEntityFlag_1.default.RemoveSortEnabled(entity.__$rseFlag);
            dst.addDisp(entity.getDisplay());
          }
        }
      }
    }
  }

  moveEntityToProcess(entity, dstProcess) {
    if (dstProcess != null && entity != null && entity.getRendererUid() == this.m_uid) {
      if (entity.isInRendererProcess()) {
        let srcUid = entity.getDisplay().__$$runit.getRPROUid();

        let src = this.m_processBuider.getNodeByUid(srcUid);

        if (src != dstProcess) {
          let dst = dstProcess;
          src.removeDispUnit(entity.getDisplay());
          entity.__$rseFlag = dstProcess.getSortEnabled() ? RSEntityFlag_1.default.AddSortEnabled(entity.__$rseFlag) : RSEntityFlag_1.default.RemoveSortEnabled(entity.__$rseFlag);
          dst.addDisp(entity.getDisplay());
        }
      }
    }
  }
  /**
   * remove entity from the renderer instance
   * @param entity IRenderEntity instance
   */


  removeEntity(entity) {
    if (entity && entity.getRendererUid() == this.m_uid) {
      this.m_entity3DMana.removeEntity(entity);

      entity.__$setRenderProxy(null);
    }
  }
  /**
   * remove entity from the renderer process
   * @param IRenderEntity IRenderEntity instance
   * @param process RenderProcess instance
   */


  removeEntityFromProcess(entity, process) {
    if (process && process.getRCUid() == this.m_uid) {
      if (entity && entity.getRendererUid() == this.m_uid) {
        process.removeDisp(entity.getDisplay());

        entity.__$setRenderProxy(null);
      }
    }
  }
  /**
   * remove entity from the renderer process by process index
   * @param IRenderEntity IRenderEntity instance
   * @param processIndex RenderProcess instance index in renderer instance
   */


  removeEntityByProcessIndex(entity, processIndex) {
    if (processIndex >= 0 && processIndex < this.m_processesLen) {
      if (entity && entity.getRendererUid() == this.m_uid) {
        this.m_processes[processIndex].removeDisp(entity.getDisplay());

        entity.__$setRenderProxy(null);
      }
    }
  }

  setProcessSortEnabledAt(processIndex, sortEnabled) {
    if (processIndex >= 0 && processIndex < this.m_processesLen) {
      this.m_processes[processIndex].setSortEnabled(sortEnabled);
    }
  }

  setProcessSortEnabled(process, sortEnabled) {
    if (process && process.getRCUid() == this.m_uid) {
      process.setSortEnabled(sortEnabled);
    }
  }
  /**
   * get the renderer process by process index
   * @param processIndex IRenderProcess instance index in renderer instance
   */


  getRenderProcessAt(processIndex) {
    return this.m_processes[processIndex];
  }
  /**
   * append a new renderer process instance
   * @param batchEnabled batch renderer runtime resource data
   * @param processFixedState the process is fix renderer state
   * @returns
   */


  appendProcess(batchEnabled = true, processFixedState = false) {
    this.m_processBuider.setCreateParams(this.m_dataBuilder.getRenderShader(), this.m_rpoNodeBuilder, this.m_rpoUnitBuilder, this.m_renderProxy.Vertex, batchEnabled, processFixedState);
    let process = this.m_processBuider.create();
    this.m_processes.push(process);
    process.setRendererParam(this.m_renderProxy, this.m_processesLen);
    ++this.m_processesLen;
    return process;
  }
  /**
   * append a independent new renderer process instance, and separate the renderer process from the renderer rendering control
   * @param batchEnabled batch renderer runtime resource data
   * @param processFixedState the process is fix renderer state
   */


  createSeparatedProcess(batchEnabled = true, processFixedState = false) {
    this.m_processBuider.setCreateParams(this.m_dataBuilder.getRenderShader(), this.m_rpoNodeBuilder, this.m_rpoUnitBuilder, this.m_renderProxy.Vertex, batchEnabled, processFixedState);
    let process = this.m_processBuider.create();
    this.m_sprocesses.push(process);
    process.setRendererParam(this.m_renderProxy, this.m_sprocessesLen);
    return process;
  }

  setRendererProcessParam(index, batchEnabled, processFixedState) {
    if (index > -1 && index < this.m_processesLen) {
      this.m_processes[index].setRenderParam(batchEnabled, processFixedState);
    }
  }

  getProcessAt(index) {
    if (index > -1 && index < this.m_processesLen) {
      return this.m_processes[index];
    }

    return null;
  }

  showInfoAt(index) {
    if (index > -1 && index < this.m_processesLen) {
      this.m_processes[index].showInfo();
    }
  }

  getProcessesTotal() {
    return this.m_processesLen;
  }

  updateMaterialUniformToCurrentShd(material) {
    this.m_dataBuilder.getRenderShader().useUniformToCurrentShd(material.__$uniform);
  }
  /**
   * Deprecated(废弃, 不推荐使用)
   * 绘制已经完全加入渲染器了渲染资源已经准备完毕的entity
   * 要锁定Material才能用这种绘制方式,再者这个,这种方式比较耗性能，只能用在特殊的地方
   */


  drawEntityByLockMaterial(entity, useGlobalUniform = false, forceUpdateUniform = true) {
    if (entity != null && entity.getVisible() && entity.getRendererUid() == this.m_uid && !this.m_renderProxy.isContextLost()) {
      this.m_fixProcess.drawLockMaterialByDisp(entity.getDisplay(), useGlobalUniform, forceUpdateUniform);
    }
  }
  /**
   * 在任意阶段绘制一个指定的 entity,只要其资源数据准备完整
   */


  drawEntity(entity, useGlobalUniform = false, forceUpdateUniform = true) {
    if (entity != null && entity.getVisible() && !this.m_renderProxy.isContextLost()) {
      // console.log("***8** rendewrer ins drawEntity(), entity: ",entity, entity.getRendererUid() == this.m_uid);
      if (entity.getRendererUid() == this.m_uid) {
        this.m_fixProcess.drawDisp(entity.getDisplay(), useGlobalUniform, forceUpdateUniform);
      } else if (entity.__$testRendererEnabled()) {
        this.m_entity3DMana.addEntity(entity, this.m_fixProcess.getUid(), false);
      }
    }
  }
  /**
   * run the specific renderer process by its index in the renderer instance
   * @param index the renderer process index in the renderer instance
   */


  runAt(index) {
    if (!this.m_renderProxy.isContextLost()) {
      this.m_processes[index].run();
    }
  }

  runProcess(process) {
    if (process.getRCUid() == this.m_uid && !this.m_renderProxy.isContextLost()) {
      process.run();
    }
  }

  runFromIndexTo(index) {
    if (!this.m_renderProxy.isContextLost()) {
      for (let i = index; i < this.m_processesLen; ++i) {
        this.m_processes[i].run();
      }
    }
  }
  /**
   * run all renderer processes in the renderer instance
   */


  run() {
    if (this.m_entity3DMana.isHaveEntity() && !this.m_renderProxy.isContextLost()) {
      for (let i = 0; i < this.m_processesLen; ++i) {
        this.m_processes[i].run();
      }
    }
  }

  getRenderUnitsTotal() {
    let total = 0;

    for (let i = 0; i < this.m_processesLen; ++i) {
      total += this.m_processes[i].getUnitsTotal();
    }

    return total;
  }

  renderflush() {
    this.m_renderProxy.flush();
  }

  prependRenderNode(node) {}

  appendRenderNode(node) {}

  removeRenderNode(node) {}

  toString() {
    return "[RendererInstance(uid = " + this.m_uid + ")]";
  }

}

RendererInstance.s_uid = 0;
exports.RendererInstance = RendererInstance;
exports.default = RendererInstance;

/***/ }),

/***/ "de9d":
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

const AABB2D_1 = __importDefault(__webpack_require__("e2fe"));

const RenderFilter_1 = __importDefault(__webpack_require__("722e"));

const RenderMaskBitfield_1 = __importDefault(__webpack_require__("8333"));

const RODrawState_1 = __webpack_require__("e7f2");

const RenderColorMask_1 = __webpack_require__("070b");

const RenderStateObject_1 = __webpack_require__("a5ba");

const RAdapterContext_1 = __importDefault(__webpack_require__("090c"));

const RenderAdapter_1 = __importDefault(__webpack_require__("1216"));

const RenderFBOProxy_1 = __importDefault(__webpack_require__("56c5"));

const RCExtension_1 = __importDefault(__webpack_require__("030e"));

const ROVertexResource_1 = __importDefault(__webpack_require__("74c3"));

const ROTextureResource_1 = __importDefault(__webpack_require__("984e"));

const RSTBuilder_1 = __importDefault(__webpack_require__("e035"));

const RendererState_1 = __importDefault(__webpack_require__("29ef"));

const RenderingStencil_1 = __webpack_require__("a4f8");

const VROBase_1 = __importDefault(__webpack_require__("919c"));

const RenderingColorMask_1 = __webpack_require__("e602");

const RenderingState_1 = __webpack_require__("53d3");

const RPStatus_1 = __webpack_require__("9f82");

class RenderProxyParam {
  constructor() {
    this.materialUpdater = null;
    this.vtxBufUpdater = null;
    this.vtxBuilder = null;
    this.uniformContext = null;
  }

}

exports.RenderProxyParam = RenderProxyParam;
/**
 * 真正位于高频运行的渲染管线中的被使用的渲染关键代理对象
 */

class RenderProxy {
  constructor(rcuid) {
    this.RGBA = 0;
    this.UNSIGNED_BYTE = 0;
    this.TRIANGLE_STRIP = 0;
    this.TRIANGLE_FAN = 0;
    this.TRIANGLES = 0;
    this.LINES = 0;
    this.LINE_STRIP = 0;
    this.UNSIGNED_SHORT = 0;
    this.UNSIGNED_INT = 0;
    this.COLOR = 0;
    this.DEPTH = 0;
    this.STENCIL = 0;
    this.DEPTH_STENCIL = 0;
    this.MAX = 0;
    this.MIN = 0;
    /**
     * WebGL GPU Context instance
     */

    this.RContext = null;
    this.RDrawState = null;
    this.Vertex = null;
    this.Texture = null;
    this.VtxBufUpdater = null;
    this.MaterialUpdater = null;
    this.uniformContext = null;
    this.adapter = null;
    this.stencil = null;
    this.renderingState = null;
    this.colorMask = null;
    this.rshader = null;
    this.rdataBuilder = null;
    this.status = new RPStatus_1.RPStatus();
    this.m_uid = 0;
    this.m_camUBO = null;
    this.m_adapter = null;
    this.m_adapterContext = new RAdapterContext_1.default();
    this.m_rc = null;
    this.m_perspectiveEnabled = true;
    this.m_viewPortRect = new AABB2D_1.default(0, 0, 800, 600);
    this.m_cameraNear = 0.1;
    this.m_cameraFar = 5000.0;
    this.m_cameraFov = 45.0;
    this.m_maxWebGLVersion = 2;
    this.m_WEBGL_VER = 2; // main camera

    this.m_camera = null;
    this.m_camSwitched = false; // 是否舞台尺寸和view自动同步一致

    this.m_autoSynViewAndStage = true;
    this.m_initMainCamera = true;
    this.m_uid = rcuid;
  }
  /**
   * @returns return system gpu context
   */


  getRC() {
    return this.m_rc;
  }

  getUid() {
    return this.m_uid;
  }
  /**
   * @returns return renderer context unique id
   */


  getRCUid() {
    return this.m_uid;
  }

  isAutoSynViewAndStage() {
    return this.m_autoSynViewAndStage;
  }

  enableSynViewAndStage() {
    this.m_autoSynViewAndStage = true;
  }

  lockViewport() {
    this.m_adapter.lockViewport();
  }

  unlockViewport() {
    this.m_adapter.unlockViewport();
  }

  getDiv() {
    return this.m_adapter.getDiv();
  }

  getCanvas() {
    return this.m_adapter.getCanvas();
  }

  cameraLock() {
    this.m_camera.lock();
  }

  cameraUnlock() {
    this.m_camera.unlock();
  }

  getCamera() {
    return this.m_camera;
  }

  updateCamera() {
    return this.m_camera.update();
  }

  createCameraUBO(shd) {//  if(this.m_camUBO == null)
    //  {
    //      this.m_camUBO = ShaderUBOBuilder.createUBOWithDataFloatsCount("UBlock_Camera", shd, 32);
    //      this.m_camUBO.setSubDataArrAt(0, m_camera.getViewMatrix().getLocalFS32());
    //      this.m_camUBO.setSubDataArrAt(16, m_camera.getProjectMatrix().getLocalFS32());
    //      this.m_camUBO.run();
    //  }
  }

  updateCameraDataFromCamera(camera) {
    if (camera != null) {
      if (this.m_camSwitched || camera != this.m_camera) {
        this.m_camSwitched = camera != this.m_camera;
        camera.updateCamMatToUProbe(this.m_camera.matUProbe);

        if (this.m_camUBO != null) {
          this.m_camUBO.setSubDataArrAt(0, camera.matUProbe.getFS32At(0));
          this.m_camUBO.setSubDataArrAt(16, camera.matUProbe.getFS32At(1)); //this.m_camUBO.setSubDataArrAt(0, camera.getViewMatrix().getLocalFS32());
          //this.m_camUBO.setSubDataArrAt(16, camera.getProjectMatrix().getLocalFS32());
        }
      }
    }
  }

  useCameraData() {
    if (this.m_camUBO != null) {
      this.m_camUBO.run();
    }
  }

  getActiveAttachmentTotal() {
    return this.m_adapter.getActiveAttachmentTotal();
  }

  drawInstanced(count, offset, instanceCount) {
    if (this.isWebGL2()) {
      this.m_rc.drawElementsInstanced(this.TRIANGLES, count, this.UNSIGNED_SHORT, offset, instanceCount);
    } else {
      RCExtension_1.default.ANGLE_instanced_arrays.drawElementsInstancedANGLE(this.TRIANGLES, count, offset, instanceCount);
    }
  }

  createUBOBufferByBytesCount(bytesCount) {
    let buf = this.m_rc.createBuffer();
    this.m_rc.bindBuffer(this.m_rc.UNIFORM_BUFFER, buf);
    this.m_rc.bufferData(this.m_rc.UNIFORM_BUFFER, bytesCount, this.m_rc.DYNAMIC_DRAW);
    return buf;
  }

  createUBOBufferByDataArray(dataArray) {
    let buf = this.m_rc.createBuffer();
    this.m_rc.bindBuffer(this.m_rc.UNIFORM_BUFFER, buf);
    this.m_rc.bufferData(this.m_rc.UNIFORM_BUFFER, dataArray, this.m_rc.DYNAMIC_DRAW);
    return buf;
  }

  bindUBOBuffer(buf) {
    this.m_rc.bindBuffer(this.m_rc.UNIFORM_BUFFER, buf);
  }

  deleteUBOBuffer(buf) {
    this.m_rc.deleteBuffer(buf);
  }

  bufferDataUBOBuffer(dataArr) {
    this.m_rc.bufferData(this.m_rc.UNIFORM_BUFFER, dataArr, this.m_rc.STATIC_DRAW);
  }

  bindBufferBaseUBOBuffer(bindingIndex, buf) {
    this.m_rc.bindBufferBase(this.m_rc.UNIFORM_BUFFER, bindingIndex, buf);
  }

  setWebGLMaxVersion(webgl_ver) {
    if (webgl_ver == 1 || webgl_ver == 2) {
      this.m_maxWebGLVersion = webgl_ver;
    }
  }

  getContext() {
    return this.m_adapterContext;
  }

  getStage3D() {
    return this.m_adapterContext.getStage();
  }

  getRenderAdapter() {
    return this.m_adapter;
  }

  getRenderContext() {
    return this.m_adapter.getRenderContext();
  }

  setCameraParam(fov, near, far) {
    this.m_cameraFov = fov;
    this.m_cameraNear = near;
    this.m_cameraFar = far;
  }

  getMouseXYWorldRay(rl_position, rl_tv) {
    let stage = this.m_adapterContext.getStage();
    this.m_camera.getWorldPickingRayByScreenXY(stage.mouseX, stage.mouseY, rl_position, rl_tv);
  }

  testViewPortChanged(px, py, pw, ph) {
    return this.m_viewPortRect.testEqualWithParams(px, py, pw, ph);
  }

  testRCViewPortChanged(px, py, pw, ph) {
    return this.m_adapterContext.testViewPortChanged(px, py, pw, ph);
  }

  getViewX() {
    return this.m_viewPortRect.x;
  }

  getViewY() {
    return this.m_viewPortRect.y;
  }

  getViewWidth() {
    return this.m_viewPortRect.width;
  }

  getViewHeight() {
    return this.m_viewPortRect.height;
  }

  setViewPort(px, py, pw, ph) {
    this.m_autoSynViewAndStage = false;
    this.m_viewPortRect.setTo(px, py, pw, ph);
    let stage = this.m_adapterContext.getStage();

    if (stage) {
      stage.setViewPort(pw, py, pw, ph);
      this.updateCameraView();
    }

    this.m_adapterContext.setViewport(px, py, pw, ph);
  }

  setRCViewPort(px, py, pw, ph, autoSynViewAndStage = false) {
    this.m_autoSynViewAndStage = autoSynViewAndStage;
    this.m_adapterContext.setViewport(px, py, pw, ph);
  }

  reseizeRCViewPort() {
    this.m_adapter.unlockViewport();
    this.m_adapter.reseizeViewPort();
  }

  updateCameraView() {
    if (this.m_camera != null) {
      let rect = this.m_viewPortRect;
      this.m_camera.setViewXY(rect.x, rect.y);
      this.m_camera.setViewSize(rect.width, rect.height);
    }
  }

  resizeCallback() {
    // console.log("XXX resizeCallback(), m_autoSynViewAndStage: "+this.m_autoSynViewAndStage);
    if (this.m_autoSynViewAndStage) {
      let rect = this.m_viewPortRect;
      rect.setSize(this.m_adapterContext.getRCanvasWidth(), this.m_adapterContext.getRCanvasHeight());
      this.createMainCamera();
      console.log("resizeCallback(), viewW,viewH: ", rect.width + "," + rect.height);
      this.m_adapterContext.setViewport(rect.x, rect.y, rect.width, rect.height);
      this.updateCameraView();
    }
  }

  createMainCamera() {
    if (this.m_initMainCamera) {
      this.m_initMainCamera = false;
      this.m_camera.uniformEnabled = true;
      let rect = this.m_viewPortRect;

      if (this.m_perspectiveEnabled) {
        this.m_camera.perspectiveRH(Math.PI * this.m_cameraFov / 180.0, rect.width / rect.height, this.m_cameraNear, this.m_cameraFar);
      } else {
        this.m_camera.orthoRH(this.m_cameraNear, this.m_cameraFar, -0.5 * rect.height, 0.5 * rect.height, -0.5 * rect.width, 0.5 * rect.width);
      }

      this.updateCameraView();
    }
  }

  readPixels(px, py, width, height, format, dataType, pixels) {
    this.m_adapter.readPixels(px, py, width, height, format, dataType, pixels);
  }

  getGLVersion() {
    return this.m_WEBGL_VER;
  }

  isWebGL2() {
    return this.m_WEBGL_VER == 2;
  }

  isWebGL1() {
    return this.m_WEBGL_VER == 1;
  }

  buildCameraParam() {
    let camera = this.m_camera;

    if (camera.matUProbe == null) {
      camera.matUProbe = this.uniformContext.createShaderUniformProbe();
      camera.matUProbe.addMat4Data(new Float32Array(16), 1);
      camera.matUProbe.addMat4Data(new Float32Array(16), 1);
    }

    if (camera.ufrustumProbe == null) {
      camera.ufrustumProbe = this.uniformContext.createShaderUniformProbe();
      camera.ufrustumProbe.addVec4Data(new Float32Array([camera.getZNear(), camera.getZFar(), camera.getNearPlaneWidth() * 0.5, camera.getNearPlaneHeight() * 0.5]), 1);
    }

    if (camera.ucameraPosProbe == null) {
      camera.ucameraPosProbe = this.uniformContext.createShaderUniformProbe();
      camera.ucameraPosProbe.addVec4Data(new Float32Array([500.0, 500.0, 500.0, 1.0]), 1);
    }
  }

  initialize(param, camera, stage, proxyParam) {
    if (this.m_rc != null) {
      return;
    }

    this.m_camera = camera;
    let posV3 = param.camPosition;
    let lookAtPosV3 = param.camLookAtPos;
    let upV3 = param.camUpDirect;
    if (stage != null) stage.uProbe = proxyParam.uniformContext.createUniformVec4Probe(1);
    this.m_perspectiveEnabled = param.cameraPerspectiveEnabled;
    this.m_adapterContext.autoSyncRenderBufferAndWindowSize = param.autoSyncRenderBufferAndWindowSize;
    this.m_adapterContext.setResizeCallback(() => {
      this.resizeCallback();
    });
    this.m_adapterContext.setWebGLMaxVersion(this.m_maxWebGLVersion);
    this.m_adapterContext.initialize(this.m_uid, stage, param);
    this.m_WEBGL_VER = this.m_adapterContext.getWebGLVersion();
    this.m_rc = this.m_adapterContext.getRC();
    let selfT = this;
    let gl = this.m_rc;
    let vtxRes = new ROVertexResource_1.default(this.m_uid, gl, proxyParam.vtxBuilder);
    let texRes = new ROTextureResource_1.default(this.m_uid, gl);
    this.m_vtxRes = vtxRes;
    selfT.Vertex = vtxRes;
    selfT.Texture = texRes;
    selfT.MaterialUpdater = proxyParam.materialUpdater;
    selfT.VtxBufUpdater = proxyParam.vtxBufUpdater;
    selfT.uniformContext = proxyParam.uniformContext;
    let rstate = new RODrawState_1.RODrawState();
    rstate.setRenderContext(this.m_adapterContext); // RendererState.Initialize(rstate, new VROBase());

    let obj = RendererState_1.default;
    new RSTBuilder_1.default().initialize(obj, rstate, new VROBase_1.default());
    selfT.RState = rstate;
    selfT.RContext = this.m_rc;
    selfT.stencil = new RenderingStencil_1.RenderingStencil(rstate);
    selfT.renderingState = new RenderingState_1.RenderingState(RendererState_1.default);
    selfT.colorMask = new RenderingColorMask_1.RenderingColorMask(RendererState_1.default);
    this.buildCameraParam();
    let rect = this.m_viewPortRect;
    rect.setSize(this.m_adapterContext.getRCanvasWidth(), this.m_adapterContext.getRCanvasHeight());
    this.m_adapter = new RenderAdapter_1.default(this.m_uid, texRes);
    this.m_adapter.initialize(this.m_adapterContext, param, rstate, this.uniformContext.createUniformVec4Probe(1));
    selfT.adapter = this.m_adapter;

    if (this.m_autoSynViewAndStage) {
      let stage = this.m_adapterContext.getStage();

      if (stage != null) {
        rect.setSize(rect.width, rect.height);
      }
    }

    this.createMainCamera();
    this.m_adapterContext.setViewport(rect.x, rect.y, rect.width, rect.height);
    this.m_camera.lookAtRH(posV3, lookAtPosV3, upV3);
    this.m_camera.update();
    selfT.RGBA = gl.RGBA;
    selfT.UNSIGNED_BYTE = gl.UNSIGNED_BYTE;
    selfT.TRIANGLE_STRIP = gl.TRIANGLE_STRIP;
    selfT.TRIANGLE_FAN = gl.TRIANGLE_FAN;
    selfT.TRIANGLES = gl.TRIANGLES;
    selfT.LINES = this.m_rc.LINES;
    selfT.LINE_STRIP = gl.LINE_STRIP;
    selfT.UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
    selfT.UNSIGNED_INT = gl.UNSIGNED_INT;
    selfT.COLOR = gl.COLOR;
    selfT.DEPTH = gl.DEPTH;
    selfT.STENCIL = gl.STENCIL;
    selfT.DEPTH_STENCIL = gl.DEPTH_STENCIL;

    if (this.m_WEBGL_VER > 1) {
      selfT.MIN = gl.MIN;
      selfT.MAX = gl.MAX;
    } else {
      selfT.MIN = RCExtension_1.default.EXT_blend_minmax.MIN_EXT;
      selfT.MAX = RCExtension_1.default.EXT_blend_minmax.MAX_EXT;
    }

    let classRenderFilter = RenderFilter_1.default;
    classRenderFilter.NEAREST = gl.NEAREST;
    classRenderFilter.LINEAR = gl.LINEAR;
    classRenderFilter.LINEAR_MIPMAP_LINEAR = gl.LINEAR_MIPMAP_LINEAR;
    classRenderFilter.NEAREST_MIPMAP_NEAREST = gl.NEAREST_MIPMAP_NEAREST;
    classRenderFilter.LINEAR_MIPMAP_NEAREST = gl.LINEAR_MIPMAP_NEAREST;
    classRenderFilter.NEAREST_MIPMAP_LINEAR = gl.NEAREST_MIPMAP_LINEAR;
    let classRenderMaskBitfield = RenderMaskBitfield_1.default;
    classRenderMaskBitfield.COLOR_BUFFER_BIT = gl.COLOR_BUFFER_BIT;
    classRenderMaskBitfield.DEPTH_BUFFER_BIT = gl.DEPTH_BUFFER_BIT;
    classRenderMaskBitfield.STENCIL_BUFFER_BIT = gl.STENCIL_BUFFER_BIT;
    RenderFBOProxy_1.default.SetRenderer(this.m_adapterContext);
  }

  flush() {
    this.m_rc.flush();
  }

  setClearRGBColor3f(pr, pg, pb) {
    let cvs = this.m_adapter.bgColor;
    cvs[0] = pr;
    cvs[1] = pg;
    cvs[2] = pb;
    this.adapter.syncHtmlBodyColor();
  }

  setClearColor(color) {
    color.toArray4(this.m_adapter.bgColor);
    this.adapter.syncHtmlBodyColor();
  }
  /**
   * @param colorUint24 uint24 number rgb color value, example: 0xff0000, it is red rolor
   * @param alpha the default value is 1.0
   */


  setClearUint24Color(colorUint24, alpha = 1.0) {
    let cvs = this.m_adapter.bgColor;
    cvs[0] = (colorUint24 >> 16 & 0x0000ff) / 255.0;
    cvs[1] = (colorUint24 >> 8 & 0x0000ff) / 255.0;
    cvs[2] = (colorUint24 & 0x0000ff) / 255.0;
    cvs[3] = alpha;
    this.adapter.syncHtmlBodyColor();
  }

  setClearRGBAColor4f(pr, pg, pb, pa) {
    let cvs = this.m_adapter.bgColor;
    cvs[0] = pr;
    cvs[1] = pg;
    cvs[2] = pb;
    cvs[3] = pa;
    this.adapter.syncHtmlBodyColor();
  }

  getClearRGBAColor4f(color4) {
    color4.fromArray4(this.m_adapter.bgColor);
  }

  getViewportWidth() {
    return this.m_adapter.getViewportWidth();
  }

  getViewportHeight() {
    return this.m_adapter.getViewportHeight();
  }

  setRenderToBackBuffer() {
    this.m_adapter.setRenderToBackBuffer();
  }

  clearBackBuffer() {
    this.m_adapter.clear();
  }

  clearDepth(depth = 1.0) {
    this.m_adapter.clearDepth(depth);
  }

  renderBegin() {
    this.m_camera.update();
    this.m_adapter.renderBegin();
  }

  renderEnd() {}

  useRenderStateByName(stateName) {
    RenderStateObject_1.RenderStateObject.UseRenderStateByName(stateName);
  }

  setScissorEnabled(boo) {
    this.m_adapterContext.setScissorEnabled(boo);
  }

  setScissorRect(px, py, pw, ph) {
    this.m_adapterContext.setScissorRect(px, py, pw, ph);
  }

  useRenderColorMask(state) {
    RenderColorMask_1.RenderColorMask.UseRenderState(state);
  }

  unlockRenderColorMask() {
    RenderColorMask_1.RenderColorMask.Unlock();
  }

  lockRenderColorMask() {
    RenderColorMask_1.RenderColorMask.Lock();
  }

  useRenderState(state) {
    RenderStateObject_1.RenderStateObject.UseRenderState(state);
  }

  unlockRenderState() {
    RenderStateObject_1.RenderStateObject.Unlock();
  }

  lockRenderState() {
    RenderStateObject_1.RenderStateObject.Lock();
  }
  /**
   * set the updating times total that update vertex data to gpu in one frame time
   * @param total updating times total, the min value is 4, the default value is 16
   */


  setVtxUpdateTimesTotal(total) {
    this.m_vtxRes.setVtxUpdateTimesTotal(total);
  }
  /**
   * @param faceFlipped the value is true, frontFace is CW. the value is false, frontFace is CCW.
   */


  setFrontFaceFlipped(faceFlipped) {
    this.m_adapter.setFrontFaceFlipped(faceFlipped);
  }

  enabledPolygonOffset() {
    this.m_adapter.enabledPolygonOffset();
  }

  disabledPolygonOffset() {
    this.m_adapter.disabledPolygonOffset();
  }
  /*
   * specifies the scale factors and units to calculate depth values.
   * @param factor the value is a GLfloat which sets the scale factor for the variable depth offset for each polygon. The default value is 0.
   * @param units the value is a which sets the multiplier by which an implementation-specific value is multiplied with to create a constant depth offset. The default value is 0.
   */


  setPolygonOffset(factor, units = 0.0) {
    this.m_adapter.setPolygonOffset(factor, units);
  }
  /*
   * reset the scale factors and units value is default value(0.0).
   */


  resetPolygonOffset() {
    this.m_adapter.resetPolygonOffset();
  }

  loseContext() {
    this.m_adapter.loseContext();
  }
  /**
   * @returns return gpu context lost status
   */


  isContextLost() {
    return this.m_adapter.isContextLost();
  }

  setViewProbeValue(x, y, width, height) {
    this.m_adapter.setViewProbeValue(x, y, width, height);
  }

  toString() {
    return "[Object RenderProxy()]";
  }

}

exports.RenderProxy = RenderProxy;
exports.default = RenderProxy;

/***/ }),

/***/ "df9d":
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

class RPONodeLinker {
  constructor() {
    this.m_uid = -1; // 用于唯一记录运行时的自己唯一id

    this.m_begin = null;
    this.m_end = null;
    this.m_unitMap = new Map();
    this.m_unitTexMap = new Map();
    this.m_FLAG_BUSY = 1;
    this.m_FLAG_FREE = 0;
    this.m_vtxFlagList = [];
    this.m_vtxIndexFlagList = [];
    this.m_vtxfreeIList = [];
    this.m_vtxList = [];
    this.m_vtxListLen = 0;
    this.m_texFlagList = [];
    this.m_texIndexFlagList = [];
    this.m_texfreeIList = [];
    this.m_texList = [];
    this.m_texListLen = 0;
    this.m_uid = RPONodeLinker.s_uid++;
  }

  getFreeVtxId() {
    if (this.m_vtxfreeIList.length > 0) {
      return this.m_vtxfreeIList.pop();
    }

    return -1;
  }

  getVtxIndex() {
    let unitI = -1;
    let index = this.getFreeVtxId();

    if (index >= 0) {
      unitI = index;
      this.m_vtxList[index] = 0;
      this.m_vtxFlagList[index] = this.m_FLAG_BUSY;
    } else {
      unitI = this.m_vtxListLen;
      this.m_vtxList.push(0);
      this.m_vtxIndexFlagList.push(this.m_FLAG_FREE);
      this.m_vtxFlagList.push(this.m_FLAG_BUSY);
      this.m_vtxListLen++;
    }

    return unitI;
  }

  restoreVtxIndex(index) {
    if (this.m_vtxFlagList[index] == this.m_FLAG_BUSY) {
      this.m_vtxfreeIList.push(index);
      this.m_vtxFlagList[index] = this.m_FLAG_FREE;
      this.m_vtxList[index] = 0;
    }
  }

  attachVtxAt(index) {
    ++this.m_vtxList[index]; //console.log("uid: "+this.m_uid+" RPONodeLinker::attachVtxAt(), this.m_vtxList["+index+"]: "+this.m_vtxList[index]);
  }

  detachVtxAt(index) {
    if (this.m_vtxList[index] > 0) {
      --this.m_vtxList[index];

      if (this.m_vtxList[index] < 1) {
        this.restoreVtxIndex(index);
      }
    } //console.log("uid: "+this.m_uid+" RPONodeLinker::detachVtxAt(), this.m_vtxList["+index+"]: "+this.m_vtxList[index]);

  }

  getVtxTotalAt(index) {
    return this.m_vtxList[index];
  }

  getFreeTexId() {
    if (this.m_texfreeIList.length > 0) {
      return this.m_texfreeIList.pop();
    }

    return -1;
  }

  getTexIndex() {
    let unitI = -1;
    let index = this.getFreeTexId();

    if (index >= 0) {
      unitI = index;
      this.m_texList[index] = 0;
      this.m_texFlagList[index] = this.m_FLAG_BUSY;
    } else {
      unitI = this.m_texListLen;
      this.m_texList.push(0);
      this.m_texIndexFlagList.push(this.m_FLAG_FREE);
      this.m_texFlagList.push(this.m_FLAG_BUSY);
      this.m_texListLen++;
    }

    return unitI;
  }

  restoreTexIndex(index) {
    if (this.m_texFlagList[index] == this.m_FLAG_BUSY) {
      this.m_texfreeIList.push(index);
      this.m_texFlagList[index] = this.m_FLAG_FREE;
      this.m_texList[index] = 0;
    }
  }

  attachTexAt(index) {
    ++this.m_texList[index]; //console.log("uid: "+this.m_uid+" RPONodeLinker::attachTexAt(), this.m_texList["+index+"]: "+this.m_texList[index]);
  }

  detachTexAt(index) {
    if (this.m_texList[index] > 0) {
      --this.m_texList[index];

      if (this.m_texList[index] < 1) {
        this.restoreTexIndex(index);
      }
    } //console.log("uid: "+this.m_uid+" RPONodeLinker::detachTexAt(), this.m_texList["+index+"]: "+this.m_texList[index]);

  }

  getTexTotalAt(index) {
    return this.m_texList[index];
  }

  destroy() {
    this.clear();
  }

  clear() {
    this.m_begin = this.m_end = null;
    this.m_unitMap = new Map();
    this.m_unitTexMap = new Map();
    this.m_vtxFlagList = [];
    this.m_vtxIndexFlagList = [];
    this.m_vtxList = [];
    this.m_vtxfreeIList = [];
    this.m_vtxListLen = 0;
    this.m_texFlagList = [];
    this.m_texIndexFlagList = [];
    this.m_texList = [];
    this.m_texfreeIList = [];
    this.m_texListLen = 0;
  }

  getBegin() {
    return this.m_begin;
  }

  containsNode(node) {
    let pnode = this.m_unitMap.get(node.vtxUid);

    if (pnode != null) {
      let key = (31 + pnode.rvroI) * 131;
      key *= key + pnode.texMid;
      return node.rtokey == key;
    }

    return false;
  }

  addNodeAndSort(node) {
    //  注意，这里可以管理组合方式, 例如可以做更多条件的排序
    //  有些需要排序, 有些不需要排序
    //trace("RPONodeLinker::addNodeAndSort(), node: "+node);
    // 首先依据相同的顶点紧凑排序, 然后再以纹理组合排列, 因此用 顶点的key与tex序列的key组合为一个新的key
    //console.log("addNodeAndSort node.vtxUid: ",node.vtxUid, node.unit.__$dispNS);
    let pnode = this.m_unitMap.get(node.vtxUid);

    if (pnode == null) {
      this.m_unitMap.set(node.vtxUid, node);
      node.rvroI = this.getVtxIndex();
      this.attachVtxAt(node.rvroI);
      let key = (31 + node.rvroI) * 131;
      key *= key + node.texMid;
      node.rtokey = key;
      node.rtroI = this.getTexIndex();
      this.m_unitTexMap.set(key, node.rtroI);
      this.attachTexAt(node.rtroI); //console.log("RPONodeLinker::addNodeAndSort(), append a new node.");
    } else {
      node.rvroI = pnode.rvroI;
      this.attachVtxAt(node.rvroI);
      let key = (31 + node.rvroI) * 131;
      key *= key + node.texMid;

      if (this.m_unitTexMap.has(key)) {
        node.rtroI = this.m_unitTexMap.get(key);
      } else {
        node.rtroI = this.getTexIndex();
        this.m_unitTexMap.set(key, node.rtroI);
      }

      node.rtokey = key;
      this.attachTexAt(node.rtroI); //console.log("RPONodeLinker::addNodeAndSort(), append a new pnode != m_end: "+(pnode != this.m_end));

      if (pnode != this.m_end) {
        if (pnode.texMid == node.texMid) {
          pnode.next.prev = node;
          node.next = pnode.next;
          node.prev = pnode;
          pnode.next = node;
        } else {
          // combine the same textures ro
          while (pnode != null) {
            if (pnode.vtxUid != node.vtxUid) {
              pnode = pnode.prev;
              pnode.next.prev = node;
              node.next = pnode.next;
              node.prev = pnode;
              pnode.next = node;
              break;
            } else {
              if (pnode.texMid == node.texMid) {
                pnode.next.prev = node;
                node.next = pnode.next;
                node.prev = pnode;
                pnode.next = node;
                break;
              }

              if (pnode.next == this.m_end) {
                if (this.m_end.vtxUid != node.vtxUid) {
                  // append after pnode
                  pnode.next.prev = node;
                  node.next = pnode.next;
                  node.prev = pnode;
                  pnode.next = node;
                } else {
                  pnode = null;
                }

                break;
              }

              pnode = pnode.next;
            }
          }
        } // 如果纹理相同, 再次将纹理相同的排在一起
        //console.log("RPONodeLinker::addNodeAndSort(), insert a new node 0.");

      } else {
        pnode = null;
      }
    }

    if (pnode == null) {
      if (this.m_begin == null) {
        this.m_end = this.m_begin = node;
      } else {
        if (this.m_end.prev != null) {
          this.m_end.next = node;
          node.prev = this.m_end;
          this.m_end = node; //trace("RPONodeLinker::addNodeAndSort(), insert a node to link 1.");
        } else {
          this.m_begin.next = node;
          node.prev = this.m_end;
          this.m_end = node; //trace("RPONodeLinker::addNodeAndSort(), insert a node to link 2.");
        }
      }

      this.m_end.next = null;
    }
  }

  showInfo() {
    let nextNode = this.getBegin();

    if (nextNode != null) {
      let vtxStr = "";
      let texStr = "";
      let ivsCountStr = "";

      while (nextNode != null) {
        vtxStr += nextNode.vtxUid + ",";
        texStr += nextNode.texMid + ",";
        ivsCountStr += nextNode.unit.indicesRes.rdp.rd.ivsSize + ",";
        nextNode = nextNode.next;
      }

      console.log("RPONodeLinker::showInfo(), vtx: " + vtxStr);
      console.log("RPONodeLinker::showInfo(), tex: " + texStr);
      console.log("RPONodeLinker::showInfo(), ivs: " + ivsCountStr);
    }
  }

  removeNodeAndSort(node) {
    //trace("RPONodeLinker::removeNodeAndSort(), node: "+node);
    let pnode = this.m_unitMap.get(node.vtxUid);

    if (pnode != node) {
      pnode = null;
    } else {
      this.m_unitMap.set(node.vtxUid, null);

      if (node.next != null && node.next.vtxUid == node.vtxUid) {
        this.m_unitMap.set(node.vtxUid, node.next);
      } else if (node.prev != null && node.prev.vtxUid == node.vtxUid) {
        this.m_unitMap.set(node.vtxUid, node.prev);
      } else {
        this.m_unitMap.delete(node.vtxUid);
      }
    }

    if (node == this.m_begin) {
      if (node == this.m_end) {
        this.m_begin = this.m_end = null;
      } else {
        this.m_begin = node.next;
        this.m_begin.prev = null;
      }
    } else if (node == this.m_end) {
      this.m_end = node.prev;
      this.m_end.next = null;
    } else {
      node.next.prev = node.prev;
      node.prev.next = node.next;
    }

    this.detachVtxAt(node.rvroI);
    this.detachTexAt(node.rtroI);
    node.prev = null;
    node.next = null;
  }

  addNode(node) {
    if (this.m_begin == null) {
      this.m_end = this.m_begin = node;
    } else {
      if (this.m_end.prev != null) {
        this.m_end.next = node;
        node.prev = this.m_end;
        this.m_end = node;
      } else {
        this.m_begin.next = node;
        node.prev = this.m_end;
        this.m_end = node;
      }
    }

    this.m_end.next = null;
  }

  removeNode(node) {
    if (node == this.m_begin) {
      if (node == this.m_end) {
        this.m_begin = this.m_end = null;
      } else {
        this.m_begin = node.next;
        this.m_begin.prev = null;
      }
    } else if (node == this.m_end) {
      this.m_end = node.prev;
      this.m_end.next = null;
    } else {
      node.next.prev = node.prev;
      node.prev.next = node.next;
    }

    node.prev = null;
    node.next = null;
  }

}

RPONodeLinker.s_uid = 0;
exports.default = RPONodeLinker;

/***/ }),

/***/ "e035":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const RenderColorMask_1 = __webpack_require__("070b");

const RenderStateObject_1 = __webpack_require__("a5ba");

const RenderConst_1 = __webpack_require__("e08e");

class RSTBuilder {
  constructor() {
    this.m_inited = true;
  }

  buildToRST(state) {
    let b = new RSTBuilder();
    b.initialize(state, this.m_Rstate, this.m_VRO);
  }

  initialize(state, rstate, vro) {
    if (this.m_inited && state.rstb == null) {
      state.rstb = this;
      this.m_inited = false;
      this.m_Rstate = rstate;
      this.m_VRO = vro;
      const rso = RenderStateObject_1.RenderStateObject;
      const rcm = RenderColorMask_1.RenderColorMask;
      const gbm = RenderConst_1.GLBlendMode;
      const gbe = RenderConst_1.GLBlendEquation;
      const cfm = RenderConst_1.CullFaceMode;
      const dtm = RenderConst_1.DepthTestMode;
      const rbm = RenderConst_1.RenderBlendMode;
      state.Rstate = rstate;
      state.VRO = vro;
      rcm.Rstate = rstate;
      rso.Rstate = rstate;
      state.COLOR_MASK_ALL_TRUE = rcm.Create("all_true", true, true, true, true);
      state.COLOR_MASK_ALL_FALSE = rcm.Create("all_false", false, false, false, false);
      state.COLOR_MASK_RED_TRUE = rcm.Create("red_true", true, false, false, false);
      state.COLOR_MASK_GREEN_TRUE = rcm.Create("green_true", false, true, false, false);
      state.COLOR_MASK_BLUE_TRUE = rcm.Create("blue_true", false, false, true, false);
      state.COLOR_MASK_ALPHA_TRUE = rcm.Create("alpha_true", false, false, false, true);
      state.COLOR_MASK_RED_FALSE = rcm.Create("red_false", false, true, true, true);
      state.COLOR_MASK_GREEN_FALSE = rcm.Create("green_false", true, false, true, true);
      state.COLOR_MASK_BLUE_FALSE = rcm.Create("blue_false", true, true, false, true);
      state.COLOR_MASK_ALPHA_FALSE = rcm.Create("alpha_false", true, true, true, false);

      if (RSTBuilder.m_rbmInited) {
        RSTBuilder.m_rbmInited = false;
        rbm.NORMAL = rso.CreateBlendMode("NORMAL", gbm.ONE, gbm.ZERO, gbe.FUNC_ADD);
        rbm.OPAQUE = rso.CreateBlendMode("OPAQUE", gbm.ONE, gbm.ZERO, gbe.FUNC_ADD);
        rbm.TRANSPARENT = rso.CreateBlendMode("TRANSPARENT", gbm.SRC_ALPHA, gbm.ONE_MINUS_SRC_ALPHA, gbe.FUNC_ADD);
        rbm.ALPHA_ADD = rso.CreateBlendMode("ALPHA_ADD", gbm.ONE, gbm.ONE_MINUS_SRC_ALPHA, gbe.FUNC_ADD);
        rbm.ADD = rso.CreateBlendMode("ADD", gbm.SRC_ALPHA, gbm.ONE, gbe.FUNC_ADD);
        rbm.ADD_LINEAR = rso.CreateBlendMode("ADD_LINEAR", gbm.ONE, gbm.ONE, gbe.FUNC_ADD);
        rbm.INVERSE_ALPHA = rso.CreateBlendMode("INVERSE_ALPHA", gbm.ONE, gbm.SRC_ALPHA, gbe.FUNC_ADD);
        rbm.BLAZE = rso.CreateBlendMode("BLAZE", gbm.SRC_COLOR, gbm.ONE, gbe.FUNC_ADD);
        rbm.OVERLAY = rso.CreateBlendMode("OVERLAY", gbm.DST_COLOR, gbm.DST_ALPHA, gbe.FUNC_ADD);
        rbm.OVERLAY2 = rso.CreateBlendMode("OVERLAY2", gbm.DST_COLOR, gbm.SRC_ALPHA, gbe.FUNC_ADD);
      }

      state.NORMAL_STATE = rso.Create("normal", cfm.BACK, rbm.NORMAL, dtm.OPAQUE);
      state.BACK_CULLFACE_NORMAL_STATE = state.NORMAL_STATE;
      state.FRONT_CULLFACE_NORMAL_STATE = rso.Create("front_normal", cfm.FRONT, rbm.NORMAL, dtm.OPAQUE);
      state.NONE_CULLFACE_NORMAL_STATE = rso.Create("none_normal", cfm.NONE, rbm.NORMAL, dtm.OPAQUE);
      state.ALL_CULLFACE_NORMAL_STATE = rso.Create("all_cull_normal", cfm.FRONT_AND_BACK, rbm.NORMAL, dtm.OPAQUE);
      state.BACK_NORMAL_ALWAYS_STATE = rso.Create("back_normal_always", cfm.BACK, rbm.NORMAL, dtm.ALWAYS);
      state.BACK_TRANSPARENT_STATE = rso.Create("back_transparent", cfm.BACK, rbm.TRANSPARENT, dtm.TRANSPARENT_SORT);
      state.BACK_TRANSPARENT_ALWAYS_STATE = rso.Create("back_transparent_always", cfm.BACK, rbm.TRANSPARENT, dtm.ALWAYS);
      state.NONE_TRANSPARENT_STATE = rso.Create("none_transparent", cfm.NONE, rbm.TRANSPARENT, dtm.TRANSPARENT_SORT);
      state.NONE_TRANSPARENT_ALWAYS_STATE = rso.Create("none_transparent_always", cfm.NONE, rbm.TRANSPARENT, dtm.ALWAYS);
      state.FRONT_CULLFACE_GREATER_STATE = rso.Create("front_greater", cfm.FRONT, rbm.NORMAL, dtm.TRUE_GREATER);
      state.BACK_ADD_BLENDSORT_STATE = rso.Create("back_add_blendSort", cfm.BACK, rbm.ADD, dtm.TRANSPARENT_SORT);
      state.BACK_ADD_ALWAYS_STATE = rso.Create("back_add_always", cfm.BACK, rbm.ADD, dtm.ALWAYS);
      state.BACK_ALPHA_ADD_ALWAYS_STATE = rso.Create("back_alpha_add_always", cfm.BACK, rbm.ALPHA_ADD, dtm.ALWAYS);
      state.NONE_ADD_ALWAYS_STATE = rso.Create("none_add_always", cfm.NONE, rbm.ADD, dtm.ALWAYS);
      state.NONE_ADD_BLENDSORT_STATE = rso.Create("none_add_blendSort", cfm.NONE, rbm.ADD, dtm.TRANSPARENT_SORT);
      state.NONE_ALPHA_ADD_ALWAYS_STATE = rso.Create("none_alpha_add_always", cfm.NONE, rbm.ALPHA_ADD, dtm.ALWAYS);
      state.FRONT_ADD_ALWAYS_STATE = rso.Create("front_add_always", cfm.FRONT, rbm.ADD, dtm.ALWAYS);
      state.FRONT_TRANSPARENT_STATE = rso.Create("front_transparent", cfm.FRONT, rbm.TRANSPARENT, dtm.TRANSPARENT_SORT);
      state.FRONT_TRANSPARENT_ALWAYS_STATE = rso.Create("front_transparent_always", cfm.FRONT, rbm.TRANSPARENT, dtm.ALWAYS);
      state.NONE_CULLFACE_NORMAL_ALWAYS_STATE = rso.Create("none_normal_always", cfm.NONE, rbm.NORMAL, dtm.ALWAYS);
      state.BACK_ALPHA_ADD_BLENDSORT_STATE = rso.Create("back_alpha_add_blendSort", cfm.BACK, rbm.ALPHA_ADD, dtm.TRANSPARENT_SORT);
    }
  }

  createBlendMode(name, srcColor, dstColor, blendEquation = 0) {
    return RenderStateObject_1.RenderStateObject.CreateBlendMode(name, srcColor, dstColor, blendEquation);
  }

  createBlendModeSeparate(name, srcColor, dstColor, srcAlpha = 0, dstAlpha = 0, blendEquation = 0) {
    return RenderStateObject_1.RenderStateObject.CreateBlendModeSeparate(name, srcColor, dstColor, srcAlpha, dstAlpha, blendEquation);
  }

  createRenderState(objName, cullFaceMode, blendMode, depthTestMode) {
    return RenderStateObject_1.RenderStateObject.Create(objName, cullFaceMode, blendMode, depthTestMode);
  }

  createRenderColorMask(objName, rBoo, gBoo, bBoo, aBoo) {
    return RenderColorMask_1.RenderColorMask.Create(objName, rBoo, gBoo, bBoo, aBoo);
  }

  getRenderStateByName(objName) {
    return RenderStateObject_1.RenderStateObject.GetRenderStateByName(objName);
  }

  getRenderColorMaskByName(objName) {
    return RenderColorMask_1.RenderColorMask.GetColorMaskByName(objName);
  }

  unlockBlendMode() {
    RenderStateObject_1.RenderStateObject.UnlockBlendMode();
  }

  lockBlendMode(cullFaceMode) {
    RenderStateObject_1.RenderStateObject.LockBlendMode(cullFaceMode);
  }

  unlockDepthTestMode() {
    RenderStateObject_1.RenderStateObject.UnlockDepthTestMode();
  }

  lockDepthTestMode(depthTestMode) {
    RenderStateObject_1.RenderStateObject.LockDepthTestMode(depthTestMode);
  }

  resetState() {
    RenderColorMask_1.RenderColorMask.Reset();
    RenderStateObject_1.RenderStateObject.Reset();
    this.m_Rstate.reset();

    this.m_VRO.__$resetVRO();
  }

  reset(context) {
    RenderColorMask_1.RenderColorMask.Reset();
    RenderStateObject_1.RenderStateObject.Reset();
    this.m_Rstate.setRenderContext(context);
    this.m_Rstate.reset();
  }

  resetInfo() {}

  setDepthTestEnable(enable) {
    this.m_Rstate.setDepthTestEnable(enable);
  }

  setBlendEnable(enable) {
    this.m_Rstate.setBlendEnable(enable);
  }

}

RSTBuilder.m_rbmInited = true;
exports.default = RSTBuilder;

/***/ }),

/***/ "e08e":
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

const RenderDrawMode_1 = __importDefault(__webpack_require__("13b1"));

exports.RenderDrawMode = RenderDrawMode_1.default;

const DisplayRenderSign_1 = __webpack_require__("72bb");

exports.DisplayRenderSign = DisplayRenderSign_1.DisplayRenderSign;

class RenderBlendMode {}

RenderBlendMode.NORMAL = 1;
RenderBlendMode.OPAQUE = 1;
RenderBlendMode.TRANSPARENT = 2;
RenderBlendMode.ALPHA_ADD = 3;
RenderBlendMode.ADD = 4;
RenderBlendMode.ADD_LINEAR = 5;
RenderBlendMode.INVERSE_ALPHA = 6;
RenderBlendMode.BLAZE = 7;
RenderBlendMode.OVERLAY = 8;
RenderBlendMode.OVERLAY2 = 8;
RenderBlendMode.DISABLE = 0;
exports.RenderBlendMode = RenderBlendMode;
/**
 * gl.NEVER:           Never pass.
 * gl.LESS:            Pass if (ref & mask) <  (stencil & mask).
 * gl.EQUAL:           Pass if (ref & mask) =  (stencil & mask).
 * gl.LEQUAL:          Pass if (ref & mask) <= (stencil & mask).
 * gl.GREATER:         Pass if (ref & mask) >  (stencil & mask).
 * gl.NOTEQUAL:        Pass if (ref & mask) != (stencil & mask).
 * gl.GEQUAL:          Pass if (ref & mask) >= (stencil & mask).
 * gl.ALWAYS:          Always pass.
 */

class GLStencilFunc {}

GLStencilFunc.NEVER = 1;
GLStencilFunc.LESS = 1;
GLStencilFunc.EQUAL = 1;
GLStencilFunc.GREATER = 1;
GLStencilFunc.NOTEQUAL = 1;
GLStencilFunc.GEQUAL = 1;
GLStencilFunc.ALWAYS = 1;
exports.GLStencilFunc = GLStencilFunc;
/**
 * gl.KEEP              Keeps the current value.
 * gl.ZERO              Sets the stencil buffer value to 0.
 * gl.REPLACE           Sets the stencil buffer value to the reference value as specified by WebGLRenderingContext.stencilFunc().
 * gl.INCR              Increments the current stencil buffer value. Clamps to the maximum representable unsigned value.
 * gl.INCR_WRAP         Increments the current stencil buffer value. Wraps stencil buffer value to zero when incrementing the maximum representable unsigned value.
 * gl.DECR              Decrements the current stencil buffer value. Clamps to 0.
 * gl.DECR_WRAP         Decrements the current stencil buffer value. Wraps stencil buffer value to the maximum representable unsigned value when decrementing a stencil buffer value of 0.
 * gl.INVERT            Inverts the current stencil buffer value bitwise.
 */

class GLStencilOp {}

GLStencilOp.KEEP = 1;
GLStencilOp.ZERO = 1;
GLStencilOp.REPLACE = 1;
GLStencilOp.INCR = 1;
GLStencilOp.INCR_WRAP = 1;
GLStencilOp.DECR = 1;
GLStencilOp.DECR_WRAP = 1;
GLStencilOp.INVERT = 1;
exports.GLStencilOp = GLStencilOp;

class GLBlendMode {}

GLBlendMode.ZERO = 1;
GLBlendMode.ONE = 1;
GLBlendMode.SRC_COLOR = 1;
GLBlendMode.DST_COLOR = 1;
GLBlendMode.SRC_ALPHA = 1;
GLBlendMode.DST_ALPHA = 1;
GLBlendMode.ONE_MINUS_SRC_ALPHA = 1;
exports.GLBlendMode = GLBlendMode;

class GLBlendEquation {}

GLBlendEquation.FUNC_ADD = 1;
GLBlendEquation.FUNC_SUBTRACT = 1;
GLBlendEquation.FUNC_REVERSE_SUBTRACT = 1;
GLBlendEquation.MIN_EXT = 1;
GLBlendEquation.MAX_EXT = 1;
GLBlendEquation.MIN = 1;
GLBlendEquation.MAX = 1;
exports.GLBlendEquation = GLBlendEquation;

class CullFaceMode {}

CullFaceMode.BACK = 1;
CullFaceMode.FRONT = 2;
CullFaceMode.FRONT_AND_BACK = 3;
CullFaceMode.NONE = 0;
CullFaceMode.DISABLE = 0;
exports.CullFaceMode = CullFaceMode;

class DepthTestMode {}

DepthTestMode.NEVER = 1; //glDepthMask(false); glDepthFunc(GL_ALWAYS);

DepthTestMode.ALWAYS = 2; //glDepthMask(true); glDepthFunc(GL_LEQUAL);

DepthTestMode.SKY = 3;
DepthTestMode.TRUE_LESS_EQUAL = 3; //glDepthMask(true); glDepthFunc(GL_LESS);

DepthTestMode.OPAQUE = 4;
DepthTestMode.TRUE_LESS = 4; //glDepthMask(false); glDepthFunc(GL_EQUAL);

DepthTestMode.OPAQUE_OVERHEAD = 5;
DepthTestMode.FALSE_EQUAL = 5; //glDepthMask(false); glDepthFunc(GL_LESS);

DepthTestMode.FALSE_LESS = 6;
DepthTestMode.BLEND = 6;
DepthTestMode.BLEND_SORT = 6;
DepthTestMode.TRANSPARENT_SORT = 6; //glDepthMask(TRUE); glDepthFunc(GL_LEQUAL);

DepthTestMode.TRUE_LEQUAL = 7;
DepthTestMode.WIRE_FRAME = 7; //
//glDepthMask(false); glDepthFunc(GL_LEQUAL);

DepthTestMode.FALSE_LEQUAL = 8;
DepthTestMode.DECALS = 8; //glDepthMask(false); glDepthFunc(GL_ALWAYS);

DepthTestMode.NEXT_LAYER = 11;
DepthTestMode.WIRE_FRAME_NEXT = 12; //glDepthMask(true); glDepthFunc(GL_EQUAL);

DepthTestMode.TRUE_EQUAL = 13; //glDepthMask(true); glDepthFunc(GL_GREATER);

DepthTestMode.TRUE_GREATER = 14; //glDepthMask(true); glDepthFunc(GL_GEQUAL);

DepthTestMode.TRUE_GEQUAL = 15;
DepthTestMode.DISABLE = 0;
exports.DepthTestMode = DepthTestMode;

/***/ }),

/***/ "e2fe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class AABB2D {
  constructor(px = 0.0, py = 0.0, pwidth = 100.0, pheight = 100.0) {
    this.m_right = 100;
    this.m_top = 100;
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 100;
    this.x = px;
    this.y = py;
    this.width = pwidth;
    this.height = pheight;
    this.update();
  }

  copyFrom(dst) {
    this.x = dst.x;
    this.y = dst.y;
    this.width = dst.width;
    this.height = dst.height;
    this.m_right = dst.m_right;
    this.m_top = dst.m_top;
  }

  clone() {
    return new AABB2D(this.x, this.y, this.width, this.height);
  }
  /**
   * 当前矩形是否包含某一点(同一坐标空间的点)
   * @param x坐标
   * @param y坐标
   * @returns 返回当前矩形是否包含这个坐标位置
   */


  containsXY(vx, vy) {
    if (vx < this.x || vx > this.m_right) return false;
    if (vy < this.y || vy > this.m_top) return false;
    return true;
  }
  /**
   * 当前矩形是否包含目标矩形
   * @param dst 目标矩形
   * @returns 返回当前矩形是否包含目标矩形
   */


  contains(dst) {
    if (dst.x >= this.x && dst.m_right <= this.m_right) {
      if (dst.y >= this.y && dst.m_top <= this.m_top) {
        return true;
      }
    }

    return true;
  }
  /**
   * 当前矩形是否和目标矩形相交
   * @param dst 目标矩形
   * @returns 返回当前矩形是否和目标矩形相交
   */


  intersect(dst) {
    if (dst.x > this.m_right) return false;
    if (dst.m_right < this.x) return false;
    if (dst.y > this.m_top) return false;
    if (dst.m_top < this.y) return false;
    return true;
  }

  setTo(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.m_right = this.width + this.x;
    this.m_top = this.height + this.y;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.m_right = this.width + this.x;
    this.m_top = this.height + this.y;
  }

  testEqual(dst) {
    return this.x != dst.x || this.y != dst.y || this.width != dst.width || this.height != dst.height;
  }

  testEqualWithParams(px, py, pw, ph) {
    return this.x != px || this.y != py || this.width != pw || this.height != ph;
  }

  update() {
    this.m_right = this.width + this.x;
    this.m_top = this.height + this.y;
  }

  flipY(height) {
    this.y = height - this.y;
    this.update();
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getRight() {
    return this.m_right;
  }

  getTop() {
    return this.m_top;
  }

}

exports.default = AABB2D;

/***/ }),

/***/ "e602":
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

class RenderingColorMask {
  constructor(st) {
    let t = this;
    t.ALL_TRUE = st.COLOR_MASK_ALL_TRUE;
    t.ALL_FALSE = st.COLOR_MASK_ALL_FALSE;
    t.RED_TRUE = st.COLOR_MASK_RED_TRUE;
    t.GREEN_TRUE = st.COLOR_MASK_GREEN_TRUE;
    t.BLUE_TRUE = st.COLOR_MASK_BLUE_TRUE;
    t.ALPHA_TRUE = st.COLOR_MASK_ALPHA_TRUE;
    t.RED_FALSE = st.COLOR_MASK_RED_FALSE;
    t.GREEN_FALSE = st.COLOR_MASK_GREEN_FALSE;
    t.BLUE_FALSE = st.COLOR_MASK_BLUE_FALSE;
    t.ALPHA_FALSE = st.COLOR_MASK_ALPHA_FALSE;
  }

}

exports.RenderingColorMask = RenderingColorMask;

/***/ }),

/***/ "e7f2":
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

const RenderConst_1 = __webpack_require__("e08e");

class ROStateUnit {
  constructor() {
    this.stencilMask = -1;
  }

}

class RODrawState {
  constructor() {
    this.m_units = new Array(128);
    this.m_unit = null;
    this.m_blendMode = RenderConst_1.RenderBlendMode.NORMAL;
    this.m_cullMode = RenderConst_1.CullFaceMode.NONE;
    this.m_depthTestType = RenderConst_1.DepthTestMode.DISABLE;
    this.m_cullDisabled = true;
    this.m_context = null;
    this.m_gl = null;
    this.roColorMask = -11;
  }

  reset() {
    this.roColorMask = -11;
  }

  setRenderContext(context) {
    this.m_context = context;
    this.m_gl = context.getRC();
    let rcui = this.m_gl.rcuid;
    this.m_unit = this.m_units[rcui];

    if (this.m_unit == null) {
      this.m_unit = this.m_units[rcui] = new ROStateUnit();
    }
  }

  setColorMask(mr, mg, mb, ma) {
    this.m_gl.colorMask(mr, mg, mb, ma);
  }

  setStencilFunc(func, ref, mask) {
    this.m_gl.stencilFunc(func, ref, mask);
  }

  setStencilMask(mask) {
    if (this.m_unit.stencilMask != mask && mask >= 0) {
      this.m_unit.stencilMask = mask;
      this.m_gl.stencilMask(mask);
    }
  }

  setStencilOp(fail, zfail, zpass) {
    this.m_gl.stencilOp(fail, zfail, zpass);
  }

  setDepthTestEnable(enable) {
    if (enable) {
      this.m_gl.enable(this.m_gl.DEPTH_TEST);
    } else {
      this.m_gl.disable(this.m_gl.DEPTH_TEST);
    }
  }

  setCullFaceEnable(enable) {
    if (enable) {
      this.m_gl.enable(this.m_gl.CULL_FACE);
    } else {
      this.m_gl.disable(this.m_gl.CULL_FACE);
    }
  }

  setBlendEnable(enable) {
    if (enable) {
      this.m_gl.enable(this.m_gl.BLEND);
    } else {
      this.m_gl.disable(this.m_gl.BLEND);
    }
  }

  setCullFaceMode(mode) {
    // console.log("this.m_cullMode,mode: ", this.m_cullMode,mode);
    if (this.m_cullMode != mode) {
      this.m_cullMode = mode;

      if (mode != RenderConst_1.CullFaceMode.NONE) {
        if (this.m_cullDisabled) {
          this.m_cullDisabled = false;
          this.m_gl.enable(this.m_gl.CULL_FACE);
        }

        this.m_gl.cullFace(mode);
      } else if (!this.m_cullDisabled) {
        this.m_cullDisabled = true;
        this.m_gl.disable(this.m_gl.CULL_FACE);
      }
    }
  }

  setBlendMode(mode, params) {
    if (this.m_blendMode != mode) {
      this.m_blendMode = mode;

      if (mode > 0) {
        if (params[0] < 1) {
          //FUNC_ADD
          // this.m_gl.blendEquation(this.m_gl.FUNC_ADD);
          // this.m_gl.blendFunc(this.m_gl.ONE, this.m_gl.ZERO);
          this.m_gl.blendEquation(params[1]);
          this.m_gl.blendFunc(params[3], params[4]);
        } else {
          this.m_gl.blendEquationSeparate(params[1], params[2]);
          this.m_gl.blendFuncSeparate(params[3], params[4], params[5], params[6]);
        }
      } else {
        this.m_gl.disable(this.m_gl.BLEND);
      }
    }
  }

  getDepthTestMode() {
    return this.m_depthTestType;
  }

  setDepthTestMode(type) {
    if (this.m_depthTestType != type) {
      const gl = this.m_gl;
      const DTM = RenderConst_1.DepthTestMode;
      this.m_depthTestType = type; //trace("RendererBase::setDepthTest(),type：",std::to_string(static_cast<int>(type)));

      switch (type) {
        case DTM.ALWAYS:
          //console.log("ALWAYS type: ", type,gl.ALWAYS);
          gl.depthMask(false);
          gl.depthFunc(gl.ALWAYS);
          break;

        case DTM.SKY:
          gl.depthMask(true);
          gl.depthFunc(gl.LEQUAL);
          break;

        case DTM.OPAQUE:
          //console.log("OPAQUE type: ", type,gl.LESS);
          gl.depthMask(true);
          gl.depthFunc(gl.LESS);
          break;

        case DTM.OPAQUE_OVERHEAD:
          gl.depthMask(false);
          gl.depthFunc(gl.EQUAL);
          break;

        case DTM.DECALS:
          gl.depthMask(false);
          gl.depthFunc(gl.LEQUAL);
          break;

        case DTM.BLEND:
          gl.depthMask(false);
          gl.depthFunc(gl.LESS);
          break;

        case DTM.WIRE_FRAME:
          gl.depthMask(true);
          gl.depthFunc(gl.LEQUAL);
          break;

        case DTM.NEXT_LAYER:
          gl.depthMask(false);
          gl.depthFunc(gl.ALWAYS);
          break;

        case DTM.TRUE_EQUAL:
          gl.depthMask(true);
          gl.depthFunc(gl.EQUAL);
          break;

        case DTM.TRUE_GREATER:
          gl.depthMask(true);
          gl.depthFunc(gl.GREATER);
          break;

        case DTM.TRUE_GEQUAL:
          gl.depthMask(true);
          gl.depthFunc(gl.GEQUAL);
          break;

        case DTM.WIRE_FRAME_NEXT:
          break;

        default:
          break;
      }
    }
  }

}

exports.RODrawState = RODrawState;

/***/ }),

/***/ "e87b":
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

class ViewParamUniformBuilder {
  create(rc, shdp) {
    let param = UniformConst_1.default.ViewportParam;
    if (shdp.hasUniformByName(param.name)) return rc.uniformContext.createShaderGlobalUniformFromProbe(rc.getRenderAdapter().uViewProbe, param.name, [param.name]);
    return null;
  }

  getIDNS() {
    return "ViewParamUniformBuilder";
  }

}

exports.default = ViewParamUniformBuilder;

/***/ }),

/***/ "eca0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2019-2022 by                                                 */

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

const PoolNodeBuilder_1 = __importDefault(__webpack_require__("2be1"));

const RPOUnit_1 = __importDefault(__webpack_require__("c62b")); //import PoolNodeBuilder = PoolNodeBuilderT.vox.base.PoolNodeBuilder;
// 这个类的实例，和每一个RPOUnit或者RODisplay关联(通过唯一的uid)


class RCRPObj {
  constructor() {
    // 这里假定最多有 16 个 RenerProcess, 每一个数组元素存放的是 RPONode 的uid, 数组的序号对应的是RenerProcess 的uid
    this.idsFlag = 0x0;
    this.count = 0; // 如果只有加入一个process的时候则有效

    this.rprocessUid = -1;
  }

  reset() {
    this.idsFlag = 0;
  }

}

RCRPObj.RenerProcessMaxTotal = 16;
exports.RCRPObj = RCRPObj;

class RPOUnitBuilder extends PoolNodeBuilder_1.default {
  constructor() {
    super(...arguments);
    this.m_rcpoList = [];
  }
  /**
   * override the super class spec function
   */


  createNode() {
    let po = new RCRPObj();
    po.reset();
    this.m_rcpoList.push(po);
    return new RPOUnit_1.default();
  }
  /**
   * the sub class override this function, for real implement.
   */


  restoreUid(uid) {
    this.m_rcpoList[uid].reset();
  }

  testRPNodeExists(dispRUid, rprocessUid) {
    return (this.m_rcpoList[dispRUid].idsFlag & 1 << rprocessUid) > 0;
  }

  testRPNodeNotExists(dispRUid, rprocessUid) {
    return (this.m_rcpoList[dispRUid].idsFlag & 1 << rprocessUid) < 1;
  }

  setRPNodeParam(dispRUid, rprocessUid, rponodeUid) {
    let po = this.m_rcpoList[dispRUid];
    let flag = 1 << rprocessUid;

    if (rponodeUid > -1) {
      if ((po.idsFlag & flag) < 1) {
        ++po.count;
        po.rprocessUid = rprocessUid;
        po.idsFlag = po.idsFlag | flag;
      }
    } else {
      if ((po.idsFlag & flag) > 0) {
        --po.count;
        po.idsFlag = po.idsFlag & ~flag;
      }
    }

    return po.count;
  }

  getRCRPObj(dispRUid) {
    return this.m_rcpoList[dispRUid];
  }

}

exports.RPOUnitBuilder = RPOUnitBuilder;

/***/ }),

/***/ "fa60":
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

const VROBase_1 = __importDefault(__webpack_require__("919c"));

class VaoVertexRenderObj extends VROBase_1.default {
  constructor() {
    super();
    /**
     * vao buffer object
     */

    this.vao = null;
    this.m_uid = VaoVertexRenderObj.s_uid++;
  }

  run() {
    if (this.m_rc.testVROUid(this.m_uid) || this.indicesRes.test()) {
      // console.log("VaoVertexRenderObj::run(), rcuid: ",this.m_rc.getRCUid(),this.m_vtxUid, this.m_uid);
      this.m_rc.bindVertexArray(this.vao);
      this.indicesRes.bindToGPU(VROBase_1.default.s_mid != this.m_mid);
      VROBase_1.default.s_mid = this.m_mid; // if (this.m_rc.testRIOUid(this.m_vtxUid) || VROBase.s_mid != this.m_mid) {
      // // if (this.m_rc.testRIOUid(this.m_vtxUid)) {
      //     // console.log("VaoVertexRenderObj::run(), testRIOUid()..");
      //     this.m_rc.bindEleBuf(this.ibuf);
      // }
      // VROBase.s_mid = this.m_mid;
    }
  }

  __$destroy() {
    console.log("VaoVertexRenderObj::__$destroy()..., " + this);
    VROBase_1.default.s_midMap.delete(this.m_mid);
    this.m_mid = 0;
    this.m_vtxUid = -1;
    this.vao = null;
    this.m_rc = null;
    this.indicesRes = null;
  }

  restoreThis() {
    if (this.vao != null) {
      this.m_rc.deleteVertexArray(this.vao);
    }

    VaoVertexRenderObj.Restore(this);
  }

  static HasMid(mid) {
    return VROBase_1.default.s_midMap.has(mid);
  }

  static GetByMid(mid) {
    return VROBase_1.default.s_midMap.get(mid);
  }

  static GetFreeId() {
    if (VaoVertexRenderObj.s_freeIdList.length > 0) {
      return VaoVertexRenderObj.s_freeIdList.pop();
    }

    return -1;
  }

  static Create(rc, mid, pvtxUid) {
    let unit = null;
    let index = VaoVertexRenderObj.GetFreeId();

    if (index >= 0) {
      unit = VaoVertexRenderObj.s_unitList[index];
      VaoVertexRenderObj.s_unitFlagList[index] = VaoVertexRenderObj.s_FLAG_BUSY;
      unit.setMidAndBufUid(mid, pvtxUid);
    } else {
      unit = new VaoVertexRenderObj();
      unit.setMidAndBufUid(mid, pvtxUid);
      VaoVertexRenderObj.s_unitList.push(unit);
      VaoVertexRenderObj.s_unitFlagList.push(VaoVertexRenderObj.s_FLAG_BUSY);
      VaoVertexRenderObj.s_unitListLen++;
    }

    unit.setRC(rc);
    VROBase_1.default.s_midMap.set(mid, unit);
    return unit;
  }

  static Restore(pobj) {
    //console.log("VaoVRO Restore XXXX ("+pobj.getUid()+")pobj.m_attachCount: ",pobj.m_attachCount);
    if (pobj != null && pobj.m_attachCount < 1 && VaoVertexRenderObj.s_unitFlagList[pobj.getUid()] == VaoVertexRenderObj.s_FLAG_BUSY) {
      let uid = pobj.getUid();
      VaoVertexRenderObj.s_freeIdList.push(uid);
      VaoVertexRenderObj.s_unitFlagList[uid] = VaoVertexRenderObj.s_FLAG_FREE;

      pobj.__$destroy();
    }
  }

}

VaoVertexRenderObj.s_uid = 0;
VaoVertexRenderObj.s_FLAG_BUSY = 1;
VaoVertexRenderObj.s_FLAG_FREE = 0;
VaoVertexRenderObj.s_unitFlagList = [];
VaoVertexRenderObj.s_unitListLen = 0;
VaoVertexRenderObj.s_unitList = [];
VaoVertexRenderObj.s_freeIdList = [];
exports.default = VaoVertexRenderObj;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4d4b");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "fd5e":
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

class PassMaterialWrapper {
  constructor() {
    this.m_mt = null;
    this.m_build = false;
    this.rdataBuilder = null;
    this.unit = null;
    this.hostUnit = null;
  }

  isEnabled() {
    if (this.m_build) {
      let m = this.m_mt;
      this.m_mt = null;
      this.build(m);
      this.m_build = !m.hasShaderData();

      if (this.m_build) {
        this.m_mt = m;
      }
    }

    return this.m_mt && this.m_mt.hasShaderData();
  }

  build(m) {
    if (m.hasShaderData()) {
      if (this.m_mt != m) {
        if (this.m_mt != null) {
          this.m_mt.__$detachThis();
        }

        this.m_mt = m;
        const builder = this.rdataBuilder;

        if (this.m_mt != null) {
          this.m_mt.__$attachThis();

          if (this.unit == null) {
            this.unit = builder.createRPOUnit();
          }

          builder.updateDispMaterial(this.unit, this.m_mt, this.hostUnit.rentity.getDisplay());
        } else {
          if (this.unit != null) {
            this.unit.destroy();
            builder.restoreRPOUnit(this.unit);
            this.unit = null;
          }
        }
      }
    }
  }

  bindMaterial(m) {
    if (m != null) {
      m.initializeByCodeBuf(m.getTextureAt(0) != null);
      this.m_build = true;

      if (m.hasShaderData()) {
        this.build(m);
      } else {
        this.m_mt = m;
      }
    }
  }

  destroy() {
    if (this.unit != null) {
      this.unit.destroy();
      this.rdataBuilder.restoreRPOUnit(this.unit);
      this.unit = null;
    }

    this.m_build = false;
    this.hostUnit = null;
    this.rdataBuilder = null;

    if (this.m_mt != null) {
      this.m_mt = null;
    }
  }

}

exports.default = PassMaterialWrapper;

/***/ }),

/***/ "ffc0":
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

const RendererDevice_1 = __importDefault(__webpack_require__("3b73"));

class TextureFormat {
  static ToGL(gl, format) {
    const tf = TextureFormat;

    switch (format) {
      case tf.RGBA:
        break;

      case tf.R8:
        return gl.R8;
        break;

      case tf.R16F:
        return gl.R16F;
        break;

      case tf.R32F:
        return gl.R32F;
        break;

      case tf.RGB:
        return gl.RGB;
        break;

      case tf.RGB8:
        return gl.RGB8;
        break;

      case tf.RGBA8:
        return gl.RGBA8;
        break;

      case tf.ALPHA:
        return gl.ALPHA;
        break;

      case tf.RGB16F:
        if (RendererDevice_1.default.IsWebGL2()) {
          return gl.RGB16F;
        }

        return gl.RGB;
        break;

      case tf.RGBA16F:
        if (RendererDevice_1.default.IsWebGL2()) {
          return gl.RGBA16F;
        }

        return gl.RGBA;
        break;

      case tf.RGB32F:
        if (RendererDevice_1.default.IsWebGL2()) gl.RGB32F;
        return gl.RGB;
        break;

      case tf.RGBA32F:
        if (RendererDevice_1.default.IsWebGL2()) gl.RGBA32F;
        return gl.RGBA;
        break;

      case TextureFormat.RED:
        return gl.RED;
        break;

      case tf.DEPTH_COMPONENT:
        return gl.DEPTH_COMPONENT;
        break;

      case tf.DEPTH_STENCIL:
        return gl.DEPTH_STENCIL;
        break;

      default:
        break;
    }

    return gl.RGBA;
  }

}

TextureFormat.R8 = 101;
TextureFormat.R16F = 102;
TextureFormat.R32F = 102;
TextureFormat.RGB = 110;
TextureFormat.RED = 111;
TextureFormat.RGBA = 121;
TextureFormat.RGB8 = 122;
TextureFormat.RGBA8 = 123;
TextureFormat.ALPHA = 132;
TextureFormat.RGB16F = 331;
TextureFormat.RGBA16F = 332;
TextureFormat.RGB32F = 341;
TextureFormat.RGBA32F = 342;
TextureFormat.DEPTH_COMPONENT = 351;
TextureFormat.DEPTH_STENCIL = 352;
exports.default = TextureFormat;

/***/ })

/******/ });