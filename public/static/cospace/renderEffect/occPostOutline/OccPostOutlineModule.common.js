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

/***/ "239e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2023 by                                                 */

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

const ShaderUniformData_1 = __importDefault(__webpack_require__("b3bd"));

class OutlinePreDecorator {
  constructor() {
    this.m_colorData = new Float32Array([1.0, 0.0, 1.0, 1.0]);
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
    this.m_uniqueName = "PostOutlinePre";
  }

  setRGB3f(pr, pg, pb) {
    this.m_colorData[0] = pr;
    this.m_colorData[1] = pg;
    this.m_colorData[2] = pb;
  }

  buildBufParams() {}

  buildTextureList(builder) {}

  buildShader(coder) {
    coder.addFragUniform("vec4", "u_colorFill", 0);
    coder.addFragMainCode(`
    FragColor0 = u_colorFill;
`);
    coder.addVertMainCode(`
    worldPosition = u_objMat * vec4(a_vs, 1.0);
    gl_Position = u_projMat * u_viewMat * worldPosition;
`);
  }

  createUniformData() {
    let oum = new ShaderUniformData_1.default();
    oum.uniformNameList = ["u_colorFill"];
    oum.dataList = [this.m_colorData];
    return oum;
  }

  getShaderCodeObjectUUID() {
    return ShaderCodeUUID_1.ShaderCodeUUID.None;
  }

  getShaderCodeObject() {
    return null;
  }

  getUniqueName() {
    return this.m_uniqueName;
  }

}

exports.OutlinePreDecorator = OutlinePreDecorator;

/***/ }),

/***/ "6e01":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2023 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class MathConst {
  // compute euclidean modulo of m % n
  // https://en.wikipedia.org/wiki/Modulo_operation
  static EuclideanModulo(n, m) {
    return (n % m + m) % m;
  }

  static Clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
  }

  static IsPowerOf2(value) {
    return (value & value - 1) == 0;
  }

  static CalcCeilPowerOfTwo(value) {
    return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
  }

  static CalcNearestCeilPow2(int_n) {
    return Math.pow(2, Math.round(Math.log(int_n) / Math.LN2));
  }

  static CalcFloorCeilPow2(int_n) {
    return Math.pow(2, Math.floor(Math.log(int_n) / Math.LN2));
  }

  static DegreeToRadian(degree) {
    return MathConst.MATH_PI_OVER_180 * degree;
  }

  static Log2(f) {
    return Math.log(f) / Math.LN2;
  }

  static GetMaxMipMapLevel(width, height) {
    return Math.round(MathConst.Log2(Math.max(width, height)) + 1);
  }

  static SafeACos(x) {
    if (x <= -1.0) {
      return MathConst.MATH_PI;
    }

    if (x >= 1.0) {
      return 0.0;
    }

    return Math.acos(x);
  }

  static GetNearestCeilPow2(int_n) {
    let x = 1;

    while (x < int_n) {
      x <<= 1;
    }

    return x;
  } // ccw is positive


  static GetMinRadian(a1, a0) {
    a0 %= MathConst.MATH_2PI;
    a1 %= MathConst.MATH_2PI;

    if (a0 < a1) {
      a0 = MathConst.MATH_2PI - a1 + a0;
      if (a0 > MathConst.MATH_PI) return a0 - MathConst.MATH_2PI;
      return a0;
    } else if (a0 > a1) {
      a1 = MathConst.MATH_2PI - a0 + a1;
      if (a1 > MathConst.MATH_PI) return MathConst.MATH_2PI - a1;
      return -a1;
    }

    return 0.0;
  }
  /**
   * get the directional angle offset degree value: dst_angle_degree = src_angle_degree + directional_angle_offset_degree_value
   * @param a0 src angle degree
   * @param a1 dst angle degree
   * @returns directional angle offset degree value
   */


  static GetMinDegree(a0, a1) {
    let angle = 0;

    if (a1 >= 270 && a0 < 90) {
      angle = (a1 - (a0 + 360)) % 180;
    } else if (a1 <= 90 && a0 >= 270) {
      angle = (a1 + 360 - a0) % 180;
    } else {
      angle = a1 - a0; //  if (Math.abs(angle) > 180) {
      //      angle -= 360;
      //  }

      if (angle > 180) {
        angle -= 360;
        angle %= 360;
      } else if (angle < -180) {
        angle += 360;
        angle %= 360;
      }
    }

    return angle;
  }

  static GetDegreeByXY(dx, dy) {
    if (Math.abs(dx) < 0.00001) {
      if (dy >= 0) return 270;else return 90;
    }

    let angle = Math.atan(dy / dx) * 180 / Math.PI;

    if (dx >= 0) {
      return angle;
    } else {
      return 180 + angle;
    } //  if (dy > 0 && dx > 0) {
    //      return angle
    //  } else if (dy < 0 && dx >= 0) {
    //      return 360 + angle;
    //  } else {
    //      return dx > 0 ? angle : 180 + angle;
    //  }

  }

  static GetRadianByXY(dx, dy) {
    if (Math.abs(dx) < MathConst.MATH_MIN_POSITIVE) {
      if (dy >= 0) return MathConst.MATH_1PER2PI;else return MathConst.MATH_3PER2PI;
    }

    let rad = Math.atan(dy / dx);

    if (dx >= 0) {
      return rad;
    } else {
      return MathConst.MATH_PI + rad;
    }
  }

  static GetRadianByCos(cosv, dx, dy) {
    var rad = Math.acos(cosv); //Math.atan(dy/dx);

    if (dx >= 0) {
      return rad;
    } else {
      return MathConst.MATH_PI + rad;
    }
  }

}

MathConst.MATH_MIN_POSITIVE = 1e-5;
MathConst.MATH_MAX_NEGATIVE = -1e-5;
MathConst.MATH_MAX_POSITIVE = 0xffffffe;
MathConst.MATH_MIN_NEGATIVE = -0xffffffe;
MathConst.MATH_1_OVER_255 = 1.0 / 255.0;
MathConst.MATH_PI = Math.PI;
MathConst.MATH_2PI = MathConst.MATH_PI * 2.0;
MathConst.MATH_3PER2PI = MathConst.MATH_PI * 1.5;
MathConst.MATH_1PER2PI = MathConst.MATH_PI * 0.5;
MathConst.MATH_1_OVER_PI = 1.0 / MathConst.MATH_PI;
MathConst.MATH_1_OVER_360 = 1.0 / 360.0;
MathConst.MATH_1_OVER_180 = 1.0 / 180.0;
MathConst.MATH_180_OVER_PI = 180.0 / MathConst.MATH_PI;
MathConst.MATH_PI_OVER_180 = MathConst.MATH_PI / 180.0;
MathConst.MATH_LN2 = 0.6931471805599453;
exports.default = MathConst;

/***/ }),

/***/ "811b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2023 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

const OccPostOutLineDecorator_1 = __webpack_require__("97a2");

const OccPostOutLineScreen_1 = __webpack_require__("fb17");

const OutlinePreDecorator_1 = __webpack_require__("239e");

const __minPV = 1e-6;

const __maxNV = -1e-6;

class OCCPlane {
  constructor() {
    this.distance = 0.0;
    this.intersectBoo = false;
  }

  containsPoint(pos) {
    let f = this.nv.dot(pos) - this.distance;

    if (f > __minPV) {
      return 1;
    } else if (f < __maxNV) {
      return -1;
    }

    return 0;
  }

  intersectAABB(minV, maxV) {
    this.intersectBoo = false;
    let pv = this.__tV0;
    pv.setXYZ(maxV.x, minV.y, maxV.z);
    let flag = this.containsPoint(pv);
    pv.setXYZ(maxV.x, minV.y, minV.z);
    flag += this.containsPoint(pv);
    pv.setXYZ(minV.x, minV.y, minV.z);
    flag += this.containsPoint(pv);
    pv.setXYZ(minV.x, minV.y, maxV.z);
    flag += this.containsPoint(pv);
    pv.setXYZ(maxV.x, maxV.y, maxV.z);
    flag += this.containsPoint(pv);
    pv.setXYZ(maxV.x, maxV.y, minV.z);
    flag += this.containsPoint(pv);
    pv.setXYZ(minV.x, maxV.y, minV.z);
    flag += this.containsPoint(pv);
    pv.setXYZ(minV.x, maxV.y, maxV.z);
    flag += this.containsPoint(pv);
    this.intersectBoo = flag < 8;
    if (flag < -7) return -1;
    if (flag > 7) return 1;
    return 0;
  }

}

class OcclusionPostOutline {
  constructor() {
    this.m_rscene = null;
    this.m_testPlane = new OCCPlane();
    this.m_targets = null;
    this.m_preDecor = null;
    this.m_preMaterial = null;
    this.m_screenDecor = null;
    this.m_boundsDecor = null;
    this.m_outlinePlane = null;
    this.m_displayPlane = null;
    this.m_running = true;
    this.m_runningFlag = true;
    this.m_sizeScaleRatio = 0.5;
    this.m_preColorRTT = null;
    this.m_outLineRTT = null;
    this.m_colorFBO = null;
    this.m_outlineFBO = null;
  }

  initialize(rscene, fboIndex = 0, occlusionRProcessIDList = null) {
    if (this.m_rscene == null) {
      this.m_rscene = rscene;
      let eb = this.m_rscene.entityBlock;
      this.m_bounds = eb.createAABB();
      this.m_expandBias = eb.createVector3(10.0, 10.0, 10.0);
      this.m_testPlane.__tV0 = eb.createVector3();
      this.m_testPlane.nv = eb.createVector3(0.0, 1.0, 0.0);
      let mb = this.m_rscene.materialBlock;
      this.m_preDecor = new OutlinePreDecorator_1.OutlinePreDecorator();
      this.m_preMaterial = mb.createSimpleMaterial(this.m_preDecor);
      this.m_preMaterial.initializeByCodeBuf(false);
      this.m_preColorRTT = this.m_rscene.textureBlock.createRTTTex2D(32, 32, false);
      this.m_outLineRTT = this.m_rscene.textureBlock.createRTTTex2D(32, 32, false);
      this.m_colorFBO = this.m_rscene.createFBOInstance();
      this.m_colorFBO.setFBOSizeFactorWithViewPort(this.m_sizeScaleRatio);
      this.m_colorFBO.setClearRGBAColor4f(0.0, 0.0, 0.0, 1.0);
      this.m_colorFBO.createFBOAt(fboIndex, 512, 512, true, false, 0);
      this.m_colorFBO.setRenderToTexture(this.m_preColorRTT, 0);
      this.m_colorFBO.setRProcessIDList(occlusionRProcessIDList);
      this.m_colorFBO.setGlobalMaterial(this.m_preMaterial, false, true);
      this.m_outlineFBO = this.m_rscene.createFBOInstance();
      this.m_outlineFBO.setFBOSizeFactorWithViewPort(this.m_sizeScaleRatio);
      this.m_outlineFBO.setClearRGBAColor4f(0.0, 0.0, 0.0, 0.0);
      this.m_outlineFBO.createFBOAt(fboIndex, 512, 512, true, false, 0);
      this.m_outlineFBO.setRenderToTexture(this.m_outLineRTT, 0);
      this.m_outlineFBO.setRProcessIDList(null);
      this.m_rscene.setRenderToBackBuffer();
      this.m_screenDecor = new OccPostOutLineDecorator_1.OccPostOutLineDecorator(true, this.m_preColorRTT);
      this.m_screenDecor.setRGB3f(1.0, 0.0, 0.0);
      this.m_screenDecor.setThickness(1.0);
      this.m_screenDecor.setDensity(1.5);
      this.m_boundsDecor = new OccPostOutLineDecorator_1.OccPostOutLineDecorator(false, this.m_preColorRTT);
      this.m_boundsDecor.setRGB3f(1.0, 0.0, 0.0);
      this.m_boundsDecor.setThickness(1.0);
      this.m_boundsDecor.setDensity(1.5);
      this.m_outlinePlane = eb.createEntity();
      this.m_outlinePlane.copyMeshFrom(eb.screenPlane);
      this.m_outlinePlane.setMaterial(mb.createSimpleMaterial(this.m_screenDecor));
      this.m_boundsEntity = eb.createEntity();
      this.m_boundsEntity.copyMeshFrom(eb.unitBox);
      this.m_boundsEntity.setMaterial(mb.createSimpleMaterial(this.m_boundsDecor));
      let renderingState = this.m_rscene.getRenderProxy().renderingState;
      let plMaterial = mb.createSimpleMaterial(new OccPostOutLineScreen_1.OccPostOutLineScreen(this.m_outLineRTT));
      this.m_displayPlane = eb.createEntity();
      this.m_displayPlane.setMaterial(plMaterial);
      this.m_displayPlane.copyMeshFrom(this.m_outlinePlane);
      this.m_displayPlane.setRenderState(renderingState.BACK_TRANSPARENT_ALWAYS_STATE);
    }
  }

  getPreColorRTT() {
    return this.m_preColorRTT;
  }

  setFBOSizeScaleRatio(scaleRatio) {
    this.m_sizeScaleRatio = scaleRatio;
    this.m_colorFBO.setFBOSizeFactorWithViewPort(this.m_sizeScaleRatio);
    this.m_outlineFBO.setFBOSizeFactorWithViewPort(this.m_sizeScaleRatio);
  }

  setOutlineThickness(thickness) {
    this.m_screenDecor.setThickness(thickness);
    this.m_boundsDecor.setThickness(thickness);
  }

  setOutlineDensity(density) {
    this.m_screenDecor.setDensity(density);
    this.m_boundsDecor.setDensity(density);
  }

  setOcclusionDensity(density) {
    this.m_screenDecor.setOcclusionDensity(density);
    this.m_boundsDecor.setOcclusionDensity(density);
  }

  setRGB3f(pr, pg, pb) {
    this.m_screenDecor.setRGB3f(pr, pg, pb);
    this.m_boundsDecor.setRGB3f(pr, pg, pb);
  }

  setPostRenderState(state) {
    this.m_displayPlane.setRenderState(state);
  }

  setTargetList(targets) {
    this.m_targets = targets;
  }

  getTargetList() {
    return this.m_targets;
  }

  setBoundsOffset(offset) {
    if (offset < 1.0) offset = 1.0;
    this.m_expandBias.setXYZ(offset, offset, offset);
  }

  startup() {
    this.m_running = true;
  }

  quit() {
    this.m_running = false;
  }

  isRunning() {
    return this.m_running;
  }
  /**
   * draw outline line effect rendring begin
   */


  drawBegin() {
    this.m_runningFlag = this.m_running;

    if (this.m_running && this.m_targets != null && this.m_targets.length > 0) {
      if (this.m_targets[0].isInRendererProcess()) {
        this.m_runningFlag = false;

        for (let i = 0; i < this.m_targets.length; ++i) {
          if (this.m_targets[i].isRenderEnabled()) {
            this.m_runningFlag = true;
            break;
          }
        }

        if (this.m_runningFlag) {
          let rproxy = this.m_rscene.getRenderProxy();
          let rst = rproxy.renderingState;
          rproxy.useRenderState(rst.NORMAL_STATE);
          let colorMask = rproxy.colorMask;
          let bounds = this.m_bounds;
          let colorFBO = this.m_colorFBO;
          let len = this.m_targets.length;
          this.m_preDecor.setRGB3f(1.0, 0.0, 0.0);
          colorFBO.runBegin(); // colorFBO.lockRenderState(rst.NONE_CULLFACE_NORMAL_STATE);

          bounds.reset();

          for (let i = 0; i < len; ++i) {
            if (this.m_targets[i].isRenderEnabled()) {
              colorFBO.drawEntity(this.m_targets[i], false, true);
              bounds.union(this.m_targets[i].getGlobalBounds());
            }
          }

          bounds.expand(this.m_expandBias);
          bounds.updateFast();
          let bf = false;

          if (bounds.getWidth() < 12) {
            bf = true;
          }

          if (bounds.getHeight() < 12) {
            bf = true;
          }

          if (bounds.getLong() < 12) {
            bf = true;
          }

          if (bf) {
            let min = bounds.min;
            let max = bounds.min;
            min.x -= 6;
            max.x += 6;
            min.y -= 6;
            max.y += 6;
            min.z -= 6;
            max.z += 6;
            bounds.updateFast();
          }

          this.m_boundsEntity.setScaleXYZ(bounds.getWidth(), bounds.getHeight(), bounds.getLong());
          this.m_boundsEntity.setPosition(this.m_bounds.center);
          this.m_boundsEntity.update();
          colorFBO.lockColorMask(colorMask.ALL_FALSE);
          colorFBO.clearDepth(1.0);

          for (let i = 0; i < len; ++i) this.m_targets[i].setVisible(false);

          colorFBO.run(false, false, false, true);
          colorFBO.lockColorMask(colorMask.GREEN_TRUE);

          for (let i = 0; i < len; ++i) this.m_targets[i].setVisible(true);

          this.m_preDecor.setRGB3f(0.0, 1.0, 0.0);
          colorFBO.updateGlobalMaterialUniform();

          for (let i = 0; i < len; ++i) colorFBO.drawEntity(this.m_targets[i], false, true);

          colorFBO.runEnd();
          colorFBO.unlockRenderColorMask();
          colorFBO.unlockMaterial(); // colorFBO.unlockRenderState();
        }
      }
    } else {
      this.m_runningFlag = false;
    }
  }
  /**
   * draw outline effect rendring
   */


  draw() {
    if (this.m_runningFlag) {
      // 计算场景摄像机近平面世界坐标空间位置
      let camera = this.m_rscene.getCamera();
      let pv = camera.getNV();
      pv.scaleBy(camera.getZNear() + 1.0);
      pv.addBy(camera.getPosition());
      this.m_testPlane.distance = this.m_testPlane.nv.dot(pv);
      this.m_testPlane.nv.copyFrom(camera.getNV());
      this.m_outlineFBO.runBegin();
      let flag = this.m_testPlane.intersectAABB(this.m_bounds.min, this.m_bounds.max);

      if (flag <= 0) {
        this.m_screenDecor.setTexSize(this.m_colorFBO.getFBOWidth(), this.m_colorFBO.getFBOHeight());
        this.m_outlineFBO.drawEntity(this.m_outlinePlane, false, true);
      } else {
        this.m_boundsDecor.setTexSize(this.m_colorFBO.getFBOWidth(), this.m_colorFBO.getFBOHeight());
        this.m_outlineFBO.drawEntity(this.m_boundsEntity, false, true);
      }

      this.m_outlineFBO.runEnd();
      this.m_rscene.setRenderToBackBuffer();
      this.m_rscene.drawEntity(this.m_displayPlane, true, true);
    }
  }

  drawTest() {
    if (this.m_running && this.m_targets != null && this.m_targets.length > 0) {
      if (this.m_targets[0].isRenderEnabled()) {
        this.m_colorFBO.runEnd();
        this.m_colorFBO.unlockMaterial();
        this.m_rscene.setRenderToBackBuffer();
      }
    }
  }
  /**
   * draw outline line effect rendring end
   */


  drawEnd() {}

}

exports.default = OcclusionPostOutline;

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

/***/ "97a2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2023 by                                                 */

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

const MathConst_1 = __importDefault(__webpack_require__("6e01"));

class OccPostOutLineDecorator {
  constructor(screenPlaneEnabled, tex) {
    this.m_screenPlaneEnabled = true;
    this.m_params = new Float32Array([32.0, 32.0, 1.3, 2.0, 1.0, 1.0, 1.0, 1.0, 0.2, 0.0, 0.0, 0.0 // occlusion density, undefined,undefined,undefined
    ]);
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
    this.m_screenPlaneEnabled = screenPlaneEnabled;
    this.m_uniqueName = "OccPostOutLineDecorator";
    if (tex != null) this.m_uniqueName += "Tex";
    if (screenPlaneEnabled) this.m_uniqueName += "Pl";
    this.m_currMap = tex;
  }

  buildBufParams() {}

  buildTextureList(builder) {
    builder.addDiffuseMap(this.m_currMap);
  }

  buildShader(coder) {
    coder.addFragUniform("vec4", "u_params", 3);

    if (this.m_screenPlaneEnabled) {
      coder.addDefine("VOX_SCREEN_PLANE", "1");
      coder.useVertSpaceMats(false, false, false);
    }

    coder.addFragMainCode(`
const float factor = 1.0 / 9.0;
const float floatReciprocalGamma = (1.0 / 2.2);
void main() {

    vec4 param = u_params[0];

    #ifdef VOX_SCREEN_PLANE
        vec2 puv = v_uv.xy;
    #else
        vec2 puv = gl_FragCoord.xy/param.xy;
    #endif
    
    vec2 dv = param.ww / param.xy;
    vec4 srcColor = VOX_Texture2D( VOX_DIFFUSE_MAP, puv );

    // FragColor0 = vec4(srcColor.xyz, 1.0);
    // return;

    vec2 fc = srcColor.xy;
    fc.xy += VOX_Texture2D( VOX_DIFFUSE_MAP, puv + dv ).xy;
    fc.xy += VOX_Texture2D( VOX_DIFFUSE_MAP, puv - dv ).xy;
    fc.xy += VOX_Texture2D( VOX_DIFFUSE_MAP, puv + vec2(dv.x ,-dv.y) ).xy;
    fc.xy += VOX_Texture2D( VOX_DIFFUSE_MAP, puv + vec2(-dv.x ,dv.y) ).xy;
    fc.xy += VOX_Texture2D( VOX_DIFFUSE_MAP, puv + vec2(dv.x ,0) ).xy;
    fc.xy += VOX_Texture2D( VOX_DIFFUSE_MAP, puv + vec2(0 ,dv.y) ).xy;
    fc.xy += VOX_Texture2D( VOX_DIFFUSE_MAP, puv - vec2(dv.x ,0) ).xy;
    fc.xy += VOX_Texture2D( VOX_DIFFUSE_MAP, puv - vec2(0 ,dv.y) ).xy;
    fc.xy *= factor;
    
    float dis = abs(fc.x - srcColor.x);

    float fk = step(max(fc.y, srcColor.y), 0.0001);
    float fa = u_params[2].x;
    fa += (1.0 - fk) * (1.0 - fa);

    dis *= param.z;
    dis = pow(dis * dis * dis, floatReciprocalGamma);

    param = u_params[1];
    param.w *= dis * fa;
    FragColor0 = param;
    // FragColor0 += vec4(0.0,0.2,0.0,0.3);
    // for test
    //FragColor0 = vec4(vec3(1.0,1.0,0.0), 1.0);
}
`);
    coder.addVertMainCode(`
    #ifdef VOX_SCREEN_PLANE
        gl_Position = vec4(a_vs, 1.0);
        v_uv = a_uvs.xy;
    #else
        gl_Position = u_projMat * u_viewMat * u_objMat * vec4(a_vs, 1.0);
    #endif
`);
  }

  setThickness(thickness) {
    this.m_params[3] = MathConst_1.default.Clamp(thickness, 0.1, 5.0);
  }

  setDensity(density) {
    this.m_params[2] = MathConst_1.default.Clamp(density, 0.1, 5.0);
  }

  setOcclusionDensity(density) {
    this.m_params[8] = MathConst_1.default.Clamp(density, 0.0, 1.0);
  }

  setRGB3f(pr, pg, pb) {
    this.m_params[4] = pr;
    this.m_params[5] = pg;
    this.m_params[6] = pb;
  }

  setAlpha(pa) {
    this.m_params[7] = pa;
  }

  setTexSize(width, height) {
    this.m_params[0] = width;
    this.m_params[1] = height;
  }

  createUniformData() {
    let oum = new ShaderUniformData_1.default();
    oum.uniformNameList = ["u_params"];
    oum.dataList = [this.m_params];
    return oum;
  }

  getUniqueName() {
    return this.m_uniqueName;
  }

  destroy() {
    this.m_currMap = null;
  }

}

exports.OccPostOutLineDecorator = OccPostOutLineDecorator;

/***/ }),

/***/ "a062":
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

const OcclusionPostOutline_1 = __importDefault(__webpack_require__("811b"));

exports.OcclusionPostOutline = OcclusionPostOutline_1.default;

function create() {
  return new OcclusionPostOutline_1.default();
}

exports.create = create;

/***/ }),

/***/ "b3bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2023 by                                                 */

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

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a062");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "fb17":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2023 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

class OccPostOutLineScreen {
  constructor(tex) {
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
    this.m_uniqueName = "OccPostOutLineScreen";
    if (tex != null) this.m_uniqueName += "Tex";
    this.m_currMap = tex;
  }

  buildBufParams() {}

  buildTextureList(builder) {
    builder.addDiffuseMap(this.m_currMap);
  }

  buildShader(coder) {
    coder.useVertSpaceMats(false, false, false);
    coder.addFragMainCode(`
    FragColor0 = VOX_Texture2D(VOX_DIFFUSE_MAP, v_uv.xy);
`);
    coder.addVertMainCode(`
    gl_Position = vec4(a_vs,1.0);
    v_uv = a_uvs.xy;
`);
  }

  createUniformData() {
    return null;
  }

  getUniqueName() {
    return this.m_uniqueName;
  }

  destroy() {
    this.m_currMap = null;
  }

}

exports.OccPostOutLineScreen = OccPostOutLineScreen;

/***/ })

/******/ });