(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoMath"] = factory();
	else
		root["CoMath"] = factory();
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

/***/ "380c":
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

const AABB2D_1 = __importDefault(__webpack_require__("e2fe"));

const MathConst_1 = __importDefault(__webpack_require__("6e01"));

exports.MathConst = MathConst_1.default;

const OrientationType_1 = __importDefault(__webpack_require__("abdb"));

exports.OrientationType = OrientationType_1.default;

const Float_1 = __webpack_require__("cbf6");

exports.isZero = Float_1.isZero;
exports.isNotZero = Float_1.isNotZero;
exports.isGreaterPositiveZero = Float_1.isGreaterPositiveZero;
exports.isLessNegativeZero = Float_1.isLessNegativeZero;
exports.isLessPositiveZero = Float_1.isLessPositiveZero;
exports.isGreaterNegativeZero = Float_1.isGreaterNegativeZero;
exports.isPostiveZero = Float_1.isPostiveZero;
exports.isNegativeZero = Float_1.isNegativeZero;
exports.isGreaterRealZero = Float_1.isGreaterRealZero;
exports.isLessRealZero = Float_1.isLessRealZero;

function createVec3(px = 0.0, py = 0.0, pz = 0.0, pw = 1.0) {
  return CoRScene.createVec3(px, py, pz, pw);
}

exports.createVec3 = createVec3;

function createMat4(pfs32 = null, index = 0) {
  return CoRScene.createMat4(pfs32, index);
}

exports.createMat4 = createMat4;

function createAABB() {
  return CoRScene.createAABB();
}

exports.createAABB = createAABB;

function createAABB2D(px = 0.0, py = 0.0, pwidth = 100.0, pheight = 100.0) {
  return new AABB2D_1.default(px, py, pwidth, pheight);
}

exports.createAABB2D = createAABB2D;
const Vector3D = CoRScene.Vector3D;
exports.Vector3D = Vector3D;

/***/ }),

/***/ "6e01":
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

class MathConst {
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

/***/ "abdb":
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

class OrientationType {}

OrientationType.AXIS_ANGLE = 0;
OrientationType.QUATERNION = 1;
OrientationType.EULER_ANGLES = 2;
exports.default = OrientationType;

/***/ }),

/***/ "cbf6":
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
/*******************************************************************************
* if the float number value is MATH_MAX_NEGATIVE < value < MATH_MIN_POSITIVE,
* the value can be considered ZERO, otherwise the value is not ZERO.
*******************************************************************************/

/**
 * principle: x < MATH_MIN_POSITIVE, or x >= MATH_MIN_POSITIVE
 */

const MATH_MIN_POSITIVE = 1e-6;
/**
 * principle: x <= MATH_MAX_NEGATIVE, or x > MATH_MAX_NEGATIVE
 */

const MATH_MAX_NEGATIVE = -1e-6;

function isZero(v) {
  return v > MATH_MAX_NEGATIVE && v < MATH_MIN_POSITIVE;
}

exports.isZero = isZero;

function isNotZero(v) {
  return v <= MATH_MAX_NEGATIVE || v >= MATH_MIN_POSITIVE;
}

exports.isNotZero = isNotZero;
/**
 * example:
 *     isGreaterPositiveZero(0.1) is true
 *     isGreaterPositiveZero(0.000000001) is false
 *     isGreaterPositiveZero(-0.1) is false
 * @param v number value
 * @returns a positive number value and its value is greater zero, return true, otherwize false
 */

function isGreaterPositiveZero(v) {
  return v >= MATH_MIN_POSITIVE;
}

exports.isGreaterPositiveZero = isGreaterPositiveZero;
/**
 * example:
 *      isLessNegativeZero(-0.1) is true
 *      isLessNegativeZero(-000000001) is false
 *      isLessNegativeZero(0.1) is false
 * @param v number value
 * @returns a negative number value and its value is less zero, return true, otherwise false
 */

function isLessNegativeZero(v) {
  return v <= MATH_MAX_NEGATIVE;
}

exports.isLessNegativeZero = isLessNegativeZero;
/**
 * example:
 * 	isLessPositiveZero(+0.00000001) is true
 *  isLessPositiveZero(-1.3) is true
 *  isLessPositiveZero(1.3) is false
 * @param v number value
 * @returns true or false
 */

function isLessPositiveZero(v) {
  return v < MATH_MIN_POSITIVE;
}

exports.isLessPositiveZero = isLessPositiveZero;
/**
 * example:
 * 	isGreaterNegativeZero(-0.00000001) is true
 *  isGreaterNegativeZero(+1.3) is true
 *  isGreaterNegativeZero(-1.3) is false
 * @param v number value
 * @returns true or false
 */

function isGreaterNegativeZero(v) {
  return v > MATH_MAX_NEGATIVE;
}

exports.isGreaterNegativeZero = isGreaterNegativeZero;

function isPostiveZero(v) {
  return v >= 0.0 && v < MATH_MIN_POSITIVE;
}

exports.isPostiveZero = isPostiveZero;

function isNegativeZero(v) {
  return v <= 0.0 && v > MATH_MAX_NEGATIVE;
}

exports.isNegativeZero = isNegativeZero;

function isGreaterRealZero(v) {
  return v > 0.0;
}

exports.isGreaterRealZero = isGreaterRealZero;

function isLessRealZero(v) {
  return v < 0.0;
}

exports.isLessRealZero = isLessRealZero;

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
    this.y = height = this.y;
    this.m_right = this.width + this.x;
    this.m_top = this.height + this.y;
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

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("380c");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ })

/******/ });
});