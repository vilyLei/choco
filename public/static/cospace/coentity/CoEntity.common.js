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

/***/ "5f5e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function createDisplayEntityFromModel(model, material = null, vbWhole = false) {
  return CoRScene.createDisplayEntityFromModel(model, material, vbWhole);
}

exports.createDisplayEntityFromModel = createDisplayEntityFromModel;

function createDisplayEntityWithDataMesh(mesh, pmaterial, texEnabled = true, vbWhole = false) {
  return CoRScene.createDisplayEntityWithDataMesh(mesh, pmaterial, texEnabled, vbWhole);
}

exports.createDisplayEntityWithDataMesh = createDisplayEntityWithDataMesh;

function createDisplayEntity() {
  return CoRScene.createDisplayEntity();
}

exports.createDisplayEntity = createDisplayEntity;

function createMouseEventEntity() {
  return CoRScene.createMouseEventEntity();
}

exports.createMouseEventEntity = createMouseEventEntity;

function createBoundsEntity() {
  return CoRScene.createBoundsEntity();
}

exports.createBoundsEntity = createBoundsEntity;

function createFreeAxis3DEntity(minV, maxV) {
  return CoRScene.createFreeAxis3DEntity(minV, maxV);
}

exports.createFreeAxis3DEntity = createFreeAxis3DEntity;

function createAxis3DEntity(size = 100.0) {
  if (size < 0.0001) size = 0.0001;
  let cf = CoRScene.createVec3;
  return createFreeAxis3DEntity(cf(), cf(size, size, size));
}

exports.createAxis3DEntity = createAxis3DEntity;

function createCrossAxis3DEntity(size = 100) {
  let min = -0.5 * size;
  let max = 0.5 * size;
  let cf = CoRScene.createVec3;
  return CoRScene.createFreeAxis3DEntity(cf(min, min, min), cf(max, max, max));
}

exports.createCrossAxis3DEntity = createCrossAxis3DEntity;

function createDisplayEntityContainer() {
  return CoRScene.createDisplayEntityContainer();
}

exports.createDisplayEntityContainer = createDisplayEntityContainer;

function createXOYPlane(minX, minY, width, height, material = null, texEnabled = false) {
  if (typeof CoMesh !== "undefined") {
    let builder = CoMesh.plane;
    material = initAMaterial(material, texEnabled, (pm, pt) => {
      builder.applyMaterial(pm, pt);
    });
    let mesh = builder.createXOY(minX, minY, width, height);
    return createAMouseEventEntity(mesh, material);
  }

  return null;
}

exports.createXOYPlane = createXOYPlane;

function createXOZPlane(minX, minZ, width, long, material = null, texEnabled = false) {
  if (typeof CoMesh !== "undefined") {
    let builder = CoMesh.plane;
    material = initAMaterial(material, texEnabled, (pm, pt) => {
      builder.applyMaterial(pm, pt);
    });
    let mesh = builder.createXOZ(minX, minZ, width, long);
    return createAMouseEventEntity(mesh, material);
  }

  return null;
}

exports.createXOZPlane = createXOZPlane;

function createYOZPlane(minY, minZ, height, long, material = null, texEnabled = false) {
  if (typeof CoMesh !== "undefined") {
    let builder = CoMesh.plane;
    material = initAMaterial(material, texEnabled, (pm, pt) => {
      builder.applyMaterial(pm, pt);
    });
    let mesh = builder.createYOZ(minY, minZ, height, long);
    return createAMouseEventEntity(mesh, material);
  }

  return null;
}

exports.createYOZPlane = createYOZPlane;

function createCube(size, material = null, texEnabled = false) {
  if (typeof CoMesh !== "undefined") {
    let builder = CoMesh.box;
    material = initAMaterial(material, texEnabled, (pm, pt) => {
      builder.applyMaterial(pm, pt);
    });
    let mesh = builder.createCube(size);
    return createAMouseEventEntity(mesh, material);
  }

  return null;
}

exports.createCube = createCube;

function createBox(minV, maxV, material = null, texEnabled = false) {
  if (typeof CoMesh !== "undefined") {
    let builder = CoMesh.box;
    material = initAMaterial(material, texEnabled, (pm, pt) => {
      builder.applyMaterial(pm, pt);
    });
    let mesh = builder.create(minV, maxV);
    return createAMouseEventEntity(mesh, material);
  }

  return null;
}

exports.createBox = createBox;

function createSphere(radius, longitudeNumSegments = 20, latitudeNumSegments = 20, material = null, texEnabled = false, doubleTriFaceEnabled = false) {
  if (typeof CoMesh !== "undefined") {
    let builder = CoMesh.sphere;
    material = initAMaterial(material, texEnabled, (pm, pt) => {
      builder.applyMaterial(pm, pt);
    });
    let mesh = builder.create(radius, longitudeNumSegments, latitudeNumSegments, doubleTriFaceEnabled);
    return createAMouseEventEntity(mesh, material);
  }

  return null;
}

exports.createSphere = createSphere;

function createCone(radius, height, longitudeNumSegments = 20, material = null, texEnabled = false, alignYRatio = -0.5) {
  if (typeof CoMesh !== "undefined") {
    let builder = CoMesh.cone;
    material = initAMaterial(material, texEnabled, (pm, pt) => {
      builder.applyMaterial(pm, pt);
    });
    let mesh = builder.create(radius, height, longitudeNumSegments, alignYRatio);
    return createAMouseEventEntity(mesh, material);
  }

  return null;
}

exports.createCone = createCone;

function createCylinder(radius, height, longitudeNumSegments = 20, material = null, texEnabled = false, uvType = 1, alignYRatio = -0.5) {
  if (typeof CoMesh !== "undefined") {
    let builder = CoMesh.cylinder;
    material = initAMaterial(material, texEnabled, (pm, pt) => {
      builder.applyMaterial(pm, pt);
    });
    let mesh = builder.create(radius, height, longitudeNumSegments, uvType, alignYRatio);
    return createAMouseEventEntity(mesh, material);
  }

  return null;
}

exports.createCylinder = createCylinder;

function createTube(radius, long, longitudeNumSegments = 20, latitudeNumSegments = 1, axisType = 0, material = null, texEnabled = false, uvType = 1, alignYRatio = -0.5) {
  if (typeof CoMesh !== "undefined") {
    let builder = CoMesh.tube;
    CoMesh.tube.geometry.axisType = axisType;
    material = initAMaterial(material, texEnabled, (pm, pt) => {
      builder.applyMaterial(pm, pt);
    });
    let mesh = builder.create(radius, long, longitudeNumSegments, latitudeNumSegments, uvType, alignYRatio);
    return createAMouseEventEntity(mesh, material);
  }

  return null;
}

exports.createTube = createTube;

function createTorus(radius, height, longitudeNumSegments = 20, latitudeNumSegments = 1, axisType = 0, material = null, texEnabled = false, uvType = 1, alignYRatio = -0.5) {
  if (typeof CoMesh !== "undefined") {
    let builder = CoMesh.torus;
    builder.axisType = axisType;
    material = initAMaterial(material, texEnabled, (pm, pt) => {
      builder.applyMaterial(pm, pt);
    });
    let mesh = builder.create(radius, height, longitudeNumSegments, latitudeNumSegments, uvType, alignYRatio);
    return createAMouseEventEntity(mesh, material);
  }

  return null;
}

exports.createTorus = createTorus;

function initAMaterial(material, texEnabled, callback) {
  if (!material) {
    material = CoRScene.createDefaultMaterial();
  }

  texEnabled = texEnabled || material.getTextureAt(0) != null;
  material.initializeByCodeBuf(texEnabled);
  callback(material, texEnabled);
  return material;
}

function createAMouseEventEntity(mesh, material) {
  let entity = CoRScene.createMouseEventEntity();
  entity.mouseEnabled = false;
  entity.setMaterial(material);
  entity.setMesh(mesh);
  return entity;
}

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

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5f5e");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ })

/******/ });