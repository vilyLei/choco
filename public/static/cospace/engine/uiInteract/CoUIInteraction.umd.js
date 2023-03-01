(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoUIInteraction"] = factory();
	else
		root["CoUIInteraction"] = factory();
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

/***/ "0d32":
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

const CamDragSwinger_1 = __webpack_require__("1c92");

const CamDragSlider_1 = __webpack_require__("6b7e");

class MouseCamDrager {
  constructor() {
    this.m_stage3D = null;
    this.m_dragSwinger = new CamDragSwinger_1.CamDragSwinger();
    this.m_dragSlider = new CamDragSlider_1.CamDragSlider();
    this.m_swing = true;
    /**
     * the value contains 0(mouse down), 1(mouse middle), 2(mouse right)
     */

    this.buttonType = 0;
    this.bgEventEnabled = true;
  }

  initialize(stage3D, camera) {
    if (this.m_stage3D == null) {
      this.m_stage3D = stage3D;
      this.m_dragSwinger.initialize(stage3D, camera);
      this.m_dragSlider.initialize(stage3D, camera);
      const ME = CoRScene.MouseEvent;
      let downType = ME.MOUSE_DOWN;

      if (this.bgEventEnabled) {
        downType = ME.MOUSE_BG_DOWN;
      }

      let upType = ME.MOUSE_UP;

      if (this.buttonType == 1) {
        if (this.bgEventEnabled) {
          downType = ME.MOUSE_BG_MIDDLE_DOWN;
        } else {
          downType = ME.MOUSE_MIDDLE_DOWN;
        }

        upType = ME.MOUSE_MIDDLE_UP;
      } else if (this.buttonType == 2) {
        if (this.bgEventEnabled) {
          downType = ME.MOUSE_BG_RIGHT_DOWN;
        } else {
          downType = ME.MOUSE_RIGHT_DOWN;
        }

        upType = ME.MOUSE_RIGHT_UP;

        document.oncontextmenu = function (e) {
          e.preventDefault();
        };
      }

      stage3D.addEventListener(downType, this, this.mouseDownListener, true, false);
      stage3D.addEventListener(upType, this, this.mouseUpListener, true, true);
    }
  }

  setSlideSpeed(slideSpeed) {
    this.m_dragSlider.slideSpeed = slideSpeed;
  }

  enableSwing() {
    this.m_swing = true;
  }

  isEnabledSwing() {
    return this.m_swing;
  }

  enableSlide() {
    this.m_swing = false;
  }

  mouseDownListener(evt) {
    this.attach();
  }

  mouseUpListener(evt) {
    this.detach();
  }

  attach() {
    this.m_dragSwinger.attach();
    this.m_dragSlider.attach();
  }

  detach() {
    this.m_dragSwinger.detach();
    this.m_dragSlider.detach();
  }

  runWithYAxis() {
    if (this.m_swing) {
      this.m_dragSwinger.runWithYAxis();
    } else {
      this.m_dragSlider.run();
    }
  }

  runWithZAxis() {
    if (this.m_swing) {
      this.m_dragSwinger.runWithZAxis();
    } else {
      this.m_dragSlider.run();
    }
  }

}

exports.default = MouseCamDrager;

/***/ }),

/***/ "1c92":
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

class CamDragSwinger {
  constructor() {
    this.m_stage3D = null;
    this.m_camera = null;
    this.m_mouseX = 0.0;
    this.m_mouseY = 0.0;
    this.m_enabled = false;
    this.m_rotationSpeed = 0.0;
    this.m_aotuRotationDelay = 100.0;
    this.autoRotationEnabled = false;
    this.autoRotationSpeed = 0.2;
    this.rotationAttenuationEnabled = false;
    this.rotationSpeed = 0.2;
  }

  initialize(stage3D, camera) {
    if (this.m_stage3D == null) {
      this.m_stage3D = stage3D;
      this.m_camera = camera;
    }
  }

  attach() {
    this.m_mouseX = this.m_stage3D.mouseX;
    this.m_mouseY = this.m_stage3D.mouseY;
    this.m_enabled = true;
    this.m_aotuRotationDelay = 100;
  }

  detach() {
    this.m_enabled = false;
  }

  runWithYAxis() {
    this.runWithAxis(CoRScene.Vector3D.Y_AXIS);
  }

  runWithZAxis() {
    this.runWithAxis(CoRScene.Vector3D.Z_AXIS);
  }

  run(axis, type) {
    if (this.m_enabled) {
      let dx = this.m_mouseX - this.m_stage3D.mouseX;
      let dy = this.m_mouseY - this.m_stage3D.mouseY;
      let abs_dx = Math.abs(dx);
      let abs_dy = Math.abs(dy);

      if (abs_dx > abs_dy) {
        if (abs_dx > 0.5) {
          if (type < 1) {
            this.m_camera.swingHorizontalWithAxis(dx * 0.2, axis);
          } else {
            this.m_camera.swingHorizontal(dx * 0.2);
          }
        }
      } else {
        if (abs_dy > 0.5) {
          this.m_camera.swingVertical(dy * -0.2);
        }
      }

      this.m_mouseX = this.m_stage3D.mouseX;
      this.m_mouseY = this.m_stage3D.mouseY;
    } else if (this.autoRotationEnabled) {
      if (this.m_aotuRotationDelay < 0) {
        if (type < 1) {
          this.m_camera.swingHorizontalWithAxis(this.autoRotationSpeed, axis);
        } else {
          this.m_camera.swingHorizontal(this.autoRotationSpeed);
        }
      } else {
        this.m_aotuRotationDelay--;
      }
    }
  }

  runWithAxis(axis) {
    this.run(axis, 0);
  }

  runWithCameraAxis() {
    this.run(null, 1);
  }

}

exports.CamDragSwinger = CamDragSwinger;

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

/***/ "25a4":
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

const MouseCamDrager_1 = __importDefault(__webpack_require__("0d32"));

const MouseCamZoomer_1 = __importDefault(__webpack_require__("5082"));

class MouseInteraction {
  constructor() {
    this.m_rscene = null;
    this.m_autoRun = false;
    this.m_axisType = 0;
    this.drager = new MouseCamDrager_1.default();
    this.zoomer = new MouseCamZoomer_1.default(); // zoomLookAtPosition: IVector3D = null;

    this.zoomMinDistance = 30;
    /**
     * 是否启用摄像机用户控制
     */

    this.cameraCtrlEnabled = true;
  }
  /**
   * @param rscene renderer scene instance
   * @param buttonType the default value is 0, the value contains 0(mouse left button), 1(mouse middle button), 2(mouse right button)
   * @param bgEventEnabled apply background mouse event true or false, the default value is true
   */


  initialize(rscene, buttonType = 0, bgEventEnabled = true) {
    if (this.m_rscene == null) {
      this.m_rscene = rscene;
      rscene.enableMouseEvent(true);
      const d = this.drager;
      const z = this.zoomer;
      d.buttonType = buttonType;
      d.bgEventEnabled = bgEventEnabled;
      d.initialize(rscene.getStage3D(), rscene.getCamera());
      z.bindCamera(rscene.getCamera());
      z.initialize(rscene.getStage3D());
      z.setLookAtCtrlEnabled(false);
    }

    return this;
  }

  enableSwing() {
    this.drager.enableSwing();
  }

  isEnabledSwing() {
    return this.isEnabledSwing();
  }

  enableSlide() {
    this.drager.enableSlide();
  }

  setSyncLookAtEnabled(ennabled) {
    this.zoomer.syncLookAt = ennabled;
    return this;
  }

  setLookAtPosition(v) {
    this.zoomer.setLookAtPosition(v);
    return this;
  }
  /**
   * @param enabled enable auto runnning or not
   * @param axisType 0 is y-axis, 1 is z-axis
   */


  setAutoRunning(enabled, axisType = 0) {
    this.m_axisType = axisType;
    this.m_autoRun = enabled;
    const type = CoRScene.EventBase.ENTER_FRAME;

    if (enabled) {
      this.setSyncLookAtEnabled(true);
      this.m_rscene.addEventListener(type, this, this.autoRun);
    } else {
      this.m_rscene.removeEventListener(type, this, this.autoRun);
    }

    return this;
  }

  autoRun(evt) {
    if (this.cameraCtrlEnabled) {
      this.zoomer.setLookAtPosition(null);
      this.zoomer.run(this.zoomMinDistance);

      switch (this.m_axisType) {
        case 0:
          this.drager.runWithYAxis();
          break;

        case 1:
          this.drager.runWithZAxis();
          break;

        default:
          this.drager.runWithYAxis();
          break;
      }
    }
  }

  run() {
    if (this.cameraCtrlEnabled && !this.m_autoRun) {
      this.zoomer.run(this.zoomMinDistance);
      this.drager.runWithYAxis();
    }
  }

  destroy() {
    if (this.m_rscene != null) {
      this.setAutoRunning(false);
      this.m_rscene = null;
    }
  }

}

exports.MouseInteraction = MouseInteraction;

/***/ }),

/***/ "5082":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***************************************************************************/

/*                                                                         */

/*  Copyright 2018-2022 by                                                 */

/*  Vily(vily313@126.com)                                                  */

/*                                                                         */

/***************************************************************************/
// 摄像机拉近拉远的控制(主要是移动端的多点触摸)

Object.defineProperty(exports, "__esModule", {
  value: true
});

class MouseCamZoomer {
  constructor() {
    this.m_camera = null;
    this.m_touchZoomBoo = false;
    this.m_preDis = 0;
    this.m_touchZoomSpd = 2.0;
    this.m_slideSpd = 1.0;
    this.m_mouseWheelZoomSpd = 6.0;
    this.m_fowardDis = 0;
    this.m_initBoo = true;
    this.m_lookAtCtrlEnabled = true;
    this.m_flagDrag = 0;
    this.m_flagZoom = 0;
    this.m_windowsEnvFlag = true;
    this.syncLookAt = false;
    /**
     * 取值为2, 表示相机的拉近拉远
     * 取值为1, 表示相机的拖动
     */

    this.m_flagType = 2;
    const RendererDevice = CoRenderer.RendererDevice;
    this.m_windowsEnvFlag = !(RendererDevice.IsMobileWeb() || RendererDevice.IsSafariWeb());
  }

  setMobileZoomSpeed(spd) {
    this.m_touchZoomSpd = spd;
  }

  seSlideSpeed(spd) {
    this.m_slideSpd = spd;
  }
  /**
   * set mousewheel zoom camera forward speed
   * @param spd default value is 6.0
   */


  setMouseWheelZoomSpd(spd) {
    this.m_mouseWheelZoomSpd = spd;
  }

  bindCamera(camera) {
    this.m_camera = camera;
  }

  initialize(stage3D) {
    if (this.m_initBoo) {
      this.m_initBoo = false;
      this.m_tempa = CoRScene.createVec3();
      this.m_tempb = CoRScene.createVec3();
      this.m_preva = CoRScene.createVec3();
      this.m_prevb = CoRScene.createVec3();
      this.m_va = CoRScene.createVec3();
      this.m_vb = CoRScene.createVec3();
      this.m_lookAt = CoRScene.createVec3();
      this.m_lookAtPos = CoRScene.createVec3();
      const MouseEvent = CoRScene.MouseEvent;
      stage3D.addEventListener(MouseEvent.MOUSE_WHEEL, this, this.mouseWheelListener, true, true);
      stage3D.addEventListener(MouseEvent.MOUSE_MULTI_MOVE, this, this.mouseMultiMoveListener, true, true);
      stage3D.addEventListener(MouseEvent.MOUSE_MULTI_UP, this, this.mouseMultiUpListener, true, true);
    }
  }

  setLookAtCtrlEnabled(enabled) {
    this.m_lookAtCtrlEnabled = enabled;
  }

  mouseWheelListener(evt) {
    if (evt.wheelDeltaY > 0) {
      this.m_fowardDis += this.m_mouseWheelZoomSpd;
    } else {
      this.m_fowardDis -= this.m_mouseWheelZoomSpd;
    }
  }

  mouseMultiMoveListener(evt) {
    this.setTouchPosArray(evt.posArray);
  }

  mouseMultiUpListener(evt) {
    this.setTouchPosArray(evt.posArray);
  }

  resetState() {
    this.m_flagDrag = 0;
    this.m_flagZoom = 0;
    this.m_flagType = 0;
  }

  setTouchPosArray(posArray) {
    if (posArray != null && posArray.length > 1) {
      const Vector3D = CoRScene.Vector3D;
      let dis = 0;
      this.m_va.setXYZ(posArray[0].x, posArray[0].y, 0);
      this.m_vb.setXYZ(posArray[1].x, posArray[1].y, 0);

      if (this.m_touchZoomBoo) {
        dis = Vector3D.Distance(this.m_va, this.m_vb);

        if (this.m_flagType < 1) {
          this.m_tempa.copyFrom(this.m_va);
          this.m_tempb.copyFrom(this.m_vb);
          this.m_tempa.subVecsTo(this.m_va, this.m_preva);
          this.m_tempb.subVecsTo(this.m_vb, this.m_prevb);
          this.m_tempa.normalize();
          this.m_tempb.normalize();

          if (this.m_tempa.dot(this.m_tempb) > 0.9) {
            // 可能是拖动
            this.m_flagDrag++;
          } else {
            // 可能是缩放
            this.m_flagZoom++;
          } //DivLog.ShowLog("> "+this.m_flagDrag+","+this.m_flagZoom);


          if (this.m_flagDrag > 3 || this.m_flagZoom > 3) {
            this.m_flagType = this.m_flagDrag > this.m_flagZoom ? 1 : 2;
          }
        } else {
          this.m_tempa.subVecsTo(this.m_va, this.m_preva);
        }

        let dv = Math.abs(this.m_preDis - dis);

        if (dv > 0.1) {
          this.m_fowardDis = (dis - this.m_preDis) * this.m_touchZoomSpd;
          this.m_preDis = dis;
        }
      } else {
        this.m_touchZoomBoo = true;
        this.m_preDis = Vector3D.Distance(this.m_va, this.m_vb);
        this.resetState();
      }
    } else {
      this.resetState();
      this.m_touchZoomBoo = false;
    }

    this.m_preva.copyFrom(this.m_va);
    this.m_prevb.copyFrom(this.m_vb);
  }

  setLookAtPosition(v) {
    if (this.syncLookAt) {
      if (v == null) {
        v = this.m_lookAt;
      }

      let disFunc = CoRScene.Vector3D.DistanceSquared;
      let pv = this.m_camera.getLookAtPosition();

      if (disFunc(v, this.m_lookAtPos) > 0.0001 || disFunc(pv, v) > 0.0001) {
        this.m_camera.setLookAtPosition(v);
        this.m_lookAtPos.copyFrom(v);
      }
    }
  }

  run(minDis) {
    let lookAtEnabled = this.m_lookAtCtrlEnabled;

    if (this.m_camera != null) {
      if (this.m_flagType == 2) {
        const Vector3D = CoRScene.Vector3D; // camera foward update

        if (Math.abs(this.m_fowardDis) > 0.001) {
          let dis = Vector3D.Distance(this.m_camera.getPosition(), this.m_camera.getLookAtPosition());
          let pd = this.m_fowardDis;

          if (this.m_fowardDis > 0) {
            if (dis > minDis) {
              pd = dis - minDis;
              if (pd > this.m_fowardDis) pd = this.m_fowardDis;
            } else {
              pd = 0;
            }
          }

          if (Math.abs(pd) > 0.1) {
            this.m_camera.forward(pd);
            let v = this.m_lookAtPos;
            if (lookAtEnabled) this.m_camera.setLookPosXYZFixUp(v.x, v.y, v.z);
          }

          if (this.m_windowsEnvFlag) {
            this.m_fowardDis *= 0.95;
          } else {
            this.m_fowardDis = 0;
          }
        }
      } else if (this.m_flagType == 1) {
        // drag to slide
        this.m_camera.slideViewOffsetXY(-this.m_tempa.x * this.m_slideSpd, this.m_tempa.y * this.m_slideSpd);
      }
    }
  }

}

exports.default = MouseCamZoomer;

/***/ }),

/***/ "6b7e":
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

class CamDragSlider {
  constructor() {
    this.m_stage3D = null;
    this.m_camera = null;
    this.slideSpeed = 2.0;
    this.m_mouseX = 0.0;
    this.m_mouseY = 0.0;
    this.m_enabled = false;
  }

  initialize(stage3D, camera) {
    if (this.m_stage3D == null) {
      this.m_stage3D = stage3D;
      this.m_camera = camera;
    }
  }

  attach() {
    this.m_mouseX = this.m_stage3D.mouseX;
    this.m_mouseY = this.m_stage3D.mouseY;
    this.m_enabled = true;
  }

  detach() {
    this.m_enabled = false;
  }

  run() {
    if (this.m_enabled) {
      let dx = (this.m_mouseX - this.m_stage3D.mouseX) * this.slideSpeed;
      let dy = (this.m_mouseY - this.m_stage3D.mouseY) * this.slideSpeed;
      this.m_camera.slideViewOffsetXY(dx, dy);
      this.m_mouseX = this.m_stage3D.mouseX;
      this.m_mouseY = this.m_stage3D.mouseY;
    }
  }

}

exports.CamDragSlider = CamDragSlider;

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

/***/ "c88f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class KeyEvtNode {
  constructor() {
    this.type = 0x0;
    this.targets = [];
    this.listeners = [];
  }

  addListener(tar, func) {
    let i = 0;

    for (i = this.listeners.length - 1; i >= 0; --i) {
      if (func === this.listeners[i]) {
        break;
      }
    }

    if (i < 0) {
      this.targets.push(tar);
      this.listeners.push(func);
    }
  }

  removeListener(tar, func) {
    for (let i = this.listeners.length - 1; i >= 0; --i) {
      if (func === this.listeners[i]) {
        this.targets.splice(i, 1);
        this.listeners.splice(i, 1);
        break;
      }
    }
  }

  dispatch(evt) {
    let ls = this.listeners;
    let len = ls.length; //console.log("dispatch(), listeners.length: ",len);

    for (let i = 0; i < len; ++i) {
      ls[i].call(this.targets[i], evt);
    }
  }

}

class KeyEvtManager {
  constructor() {
    this.m_evtMap = new Map();
    this.m_index = -1;
    this.m_keys = new Uint32Array(8);
    this.m_code0 = -1;
    this.m_code1 = -1;
  }

  reset() {
    this.m_code0 = -1;
    this.m_code1 = -1;
    this.m_index = -1;
    this.m_keys.fill(0);
  }

  getCurrKeyCode() {
    if (this.m_index > -1) {
      return this.m_keys[this.m_index];
    }

    return -1;
  }

  use(evt) {
    // console.log("KeyEvtManager::use() A", this.m_index);
    if (this.m_code0 != evt.keyCode) {
      this.m_code0 = evt.keyCode; // console.log("KeyEvtManager::use() B ", evt.keyCode);

      this.m_code1 = -1;
      this.m_index++;
      let keys = this.m_keys;
      keys[this.m_index] = evt.keyCode;
      let t = this.createKeysEventType(this.m_keys); // console.log("sfsdfsdfsdfsdfsdfsd use B", this.m_index);

      const pm = this.m_evtMap;
      let node = pm.get(t);

      if (node != null) {
        evt.keysEventType = t;
        node.dispatch(evt);
      }
    }
  }

  disuse(evt) {
    // console.log("sfsdfsdfsdfsdfsdfsd disuse A", this.m_index);
    if (this.m_code1 != evt.keyCode) {
      this.m_code1 = evt.keyCode;
      this.m_code0 = -1;
      let keys = this.m_keys;
      keys[this.m_index] = 0;

      if (this.m_index == 0) {// console.log("sfsdfsdfsdfsdfsdfsd disuse B", this.m_index);
      }

      this.m_index--;

      if (this.m_index < -1) {
        this.m_index = -1;
      }
    }
  }

  isEnabled() {
    return this.m_index > 0;
  }

  createKeysEventType(keyTypes) {
    if (keyTypes != null) {
      let len = keyTypes.length;

      if (len > 0) {
        if (len > 4) len = 4;
        let t = 0x0;

        for (let i = 0; i < len; ++i) {
          t = t | keyTypes[i] << i * 8;
        }

        return t;
      }
    }

    return 0x0;
  }

  addEventListener(keysEventType, target, func) {
    // console.log("XXX KeyEvtManager::addEventListener(), keysEventType: ", keysEventType);
    if (keysEventType > 0x0) {
      const pm = this.m_evtMap;
      let node = pm.get(keysEventType);

      if (node == null) {
        node = new KeyEvtNode();
        node.type = keysEventType;
        pm.set(keysEventType, node);
      }

      node.addListener(target, func);
    }
  }

  removeEventListener(keysEventType, target, func) {
    if (keysEventType > 0x0) {
      const pm = this.m_evtMap;
      let node = pm.get(keysEventType);

      if (node != null) {
        node.removeListener(target, func);
      }
    }
  }

}

class CoKeyboardInteraction {
  // private m_upMana = new KeyEvtManager();
  constructor() {
    this.m_rscene = null;
    this.m_downMana = new KeyEvtManager();
  }

  initialize(rscene) {
    if (this.m_rscene == null) {
      this.m_rscene = rscene;
      let KE = CoRScene.KeyboardEvent;
      this.m_rscene.addEventListener(KE.KEY_DOWN, this, this.keyDown);
      this.m_rscene.addEventListener(KE.KEY_UP, this, this.keyUp);

      window.onfocus = () => {
        this.reset();
      };
    }
  }

  getCurrDownKeyCode() {
    return this.m_downMana.getCurrKeyCode();
  }

  keyDown(evt) {
    // switch(evt.keyCode) {
    // 	case Keyboard.ESC:
    // 		this.reset();
    // 		return;
    // 		break;
    // }
    // console.log("CoKeyboardInteraction::keyDown() ..., evt: ", evt);
    this.m_downMana.use(evt);
  }

  keyUp(evt) {
    // switch(evt.keyCode) {
    // 	case Keyboard.ESC:
    // 		this.reset();
    // 		return;
    // 		break;
    // }
    // console.log("CoKeyboardInteraction::keyUp() ..., evt: ", evt);
    this.m_downMana.disuse(evt); // this.m_upMana.use(evt);

    if (!this.m_downMana.isEnabled()) {// todo
      // this.m_upMana.reset();
    }
  }

  reset() {
    this.m_downMana.reset();
  }
  /**
   *
   * @param keyTypes example: [Keyboard.CTRL, Keyboard.Z]
   * @returns combination keys event type
   */


  createKeysEventType(keyTypes) {
    return this.m_downMana.createKeysEventType(keyTypes);
  }
  /**
   * @param keysEventType the value is come from the createKeysEventType() function
   * @param target event listerner
   * @param func event listerner callback function
   * @param captureEnabled the default value is true
   * @param bubbleEnabled the default value is false
   */


  addKeysDownListener(keysEventType, target, func) {
    this.m_downMana.addEventListener(keysEventType, target, func); // if (keyboardEvtType == KeyboardEvent.KEY_DOWN) {
    // 	this.m_downMana.addEventListener(keysEventType, target, func);
    // } else if (keyboardEvtType == KeyboardEvent.KEY_UP) {
    // 	// this.m_upMana.addEventListener(keysEventType, target, func);
    // }
  }
  /**
   * @param keysEventType the value is come from the createKeysEventType() function
   * @param target event listerner
   * @param func event listerner callback function
   */


  removeKeysDownListener(keysEventType, target, func) {
    this.m_downMana.removeEventListener(keysEventType, target, func); // if (keyboardEvtType == KeyboardEvent.KEY_DOWN) {
    // 	this.m_downMana.removeEventListener(keysEventType, target, func);
    // } else if (keyboardEvtType == KeyboardEvent.KEY_UP) {
    // 	// this.m_upMana.removeEventListener(keysEventType, target, func);
    // }
  }

}

exports.CoKeyboardInteraction = CoKeyboardInteraction;

/***/ }),

/***/ "d6d0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const MouseInteraction_1 = __webpack_require__("25a4");

const CoKeyboardInteraction_1 = __webpack_require__("c88f");

function createMouseInteraction() {
  return new MouseInteraction_1.MouseInteraction();
}

exports.createMouseInteraction = createMouseInteraction;

function createKeyboardInteraction() {
  return new CoKeyboardInteraction_1.CoKeyboardInteraction();
}

exports.createKeyboardInteraction = createKeyboardInteraction;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d6d0");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ })

/******/ });
});