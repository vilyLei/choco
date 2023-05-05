(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoText"] = factory();
	else
		root["CoText"] = factory();
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

/***/ "045f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class TextMaterial {
  constructor() {
    this.m_rz = 0;
    this.m_data = new Float32Array([1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0]);
    this.m_color = null;
    this.m_brn = 1.0;
  }

  destroy() {
    this.material = null;
    this.m_data = null;
  }

  setRGBA4f(pr, pg, pb, pa) {
    this.m_color.r = pr;
    this.m_color.g = pg;
    this.m_color.b = pb; //this.m_color.a = pa;

    this.m_data[4] = pr * this.m_brn;
    this.m_data[5] = pg * this.m_brn;
    this.m_data[6] = pb * this.m_brn;
    this.m_data[7] = pa;
  }

  setRGB3f(pr, pg, pb) {
    this.m_color.r = pr;
    this.m_color.g = pg;
    this.m_color.b = pb;
    this.m_data[4] = pr * this.m_brn;
    this.m_data[5] = pg * this.m_brn;
    this.m_data[6] = pb * this.m_brn;
  }

  setAlpha(pa) {
    this.m_data[7] = pa;
  }

  getAlpha() {
    return this.m_data[6];
  }

  setBrightness(brighness) {
    this.m_brn = brighness;
    this.m_data[4] = this.m_color.r * brighness;
    this.m_data[5] = this.m_color.g * brighness;
    this.m_data[6] = this.m_color.b * brighness;
  }

  getBrightness() {
    return this.m_brn;
  }

  getRotationZ() {
    return this.m_rz;
  }

  setRotationZ(degrees) {
    this.m_rz = degrees;
    this.m_data[2] = degrees * (Math.PI / 180.0);
  }

  getScaleX() {
    return this.m_data[0];
  }

  getScaleY() {
    return this.m_data[1];
  }

  setScaleX(p) {
    this.m_data[0] = p;
  }

  setScaleY(p) {
    this.m_data[1] = p;
  }

  setScaleXY(sx, sy) {
    this.m_data[0] = sx;
    this.m_data[1] = sy;
  }

  create() {
    if (this.material == null) {
      this.m_color = CoRScene.createColor4();
      let textureEnabled = true;
      let material = CoRScene.createShaderMaterial("co_3dBill_text_material");
      material.addUniformDataAt("u_params", this.m_data);
      material.setShaderBuilder(coderBuilder => {
        let coder = coderBuilder.getShaderCodeBuilder();
        coder.uniform.addDiffuseMap();
        coder.addVertLayout("vec2", "a_vs");
        coder.addVertLayout("vec2", "a_uvs");
        coder.addVertUniform("vec4", "u_params", 2);
        coder.addVarying("vec2", "v_texUV");
        coder.addVarying("vec4", "v_colorMult");
        coder.addFragOutputHighp("vec4", "FragColor0");
        coder.addFragMainCode(`
FragColor0 = vec4(v_colorMult.xyz,v_colorMult.a * texture(u_sampler0, v_texUV).a);
					`);
        coder.addVertMainCode(`
vec4 temp = u_params[0];
float cosv = cos(temp.z);
float sinv = sin(temp.z);
vec2 vtx = vec2(a_vs.x * temp.x, a_vs.y * temp.y);
vec2 vtx_pos = vec2(vtx.x * cosv - vtx.y * sinv, vtx.x * sinv + vtx.y * cosv);
vec4 pos = u_viewMat * u_objMat * vec4(0.0,0.0,0.0,1.0);
pos.xy += vtx_pos.xy;
gl_Position =  u_projMat * pos;
v_texUV = a_uvs;
v_colorMult = u_params[1];
					`);
      });
      material.initializeByCodeBuf(textureEnabled);
      this.material = material;
    }

    return this.material;
  }

}

exports.TextMaterial = TextMaterial;

/***/ }),

/***/ "062b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const H5Text_1 = __webpack_require__("62a0");

const TextEntity_1 = __webpack_require__("2155");

function createH5Text(rscene, canvasIdName, fontSize = 10, texWidth = 512, texHeight = 512) {
  let ht = new H5Text_1.H5Text();
  ht.initialize(rscene, canvasIdName, fontSize, texWidth, texHeight);
  return ht;
}

exports.createH5Text = createH5Text;

function createStaticTextEntity(text, h5Text, texList = null) {
  let et = new TextEntity_1.TextEntity();
  et.initialize(text, h5Text, texList);
  return et;
}

exports.createStaticTextEntity = createStaticTextEntity;

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

/***/ "2155":
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

const TextGeometryBuilder_1 = __importDefault(__webpack_require__("968a"));

const TextMaterial_1 = __webpack_require__("045f");

class TextEntity {
  constructor(dynamicEnbaled = true) {
    this.m_rentity = null;
    this.m_dynamicEnbaled = true;
    this.m_material = new TextMaterial_1.TextMaterial();
    this.m_width = 0;
    this.m_height = 0;
    this.m_text = "";
    this.m_alignFactorX = 0.5;
    this.m_alignFactorY = 0.5;
    this.flipVerticalUV = false;
    this.m_dynamicEnbaled = dynamicEnbaled;
  }

  getREntity() {
    return this.m_rentity;
  }

  getWidth() {
    return this.m_width;
  }

  getHeight() {
    return this.m_height;
  }

  setAlignFactor(alignFactorX, alignFactorY) {
    this.m_alignFactorX = alignFactorX;
    this.m_alignFactorY = alignFactorY;
  }

  alignLeftTop() {
    this.setAlignFactor(0.0, 0.0);
  }

  alignCenter() {
    this.setAlignFactor(0.5, 0.5);
  }

  alignLeftCenter() {
    this.setAlignFactor(0.0, 0.5);
  }

  setText(charsStr) {}

  setRGBA4f(pr, pg, pb, pa) {
    if (this.m_material != null) {
      this.m_material.setRGBA4f(pr, pg, pb, pa);
    }
  }

  setRGB3f(pr, pg, pb) {
    if (this.m_material != null) {
      this.m_material.setRGB3f(pr, pg, pb);
    }
  }

  setAlpha(pa) {
    this.m_material.setAlpha(pa);
  }

  getAlpha() {
    return this.m_material.getAlpha();
  }

  setBrightness(brighness) {
    this.m_material.setBrightness(brighness);
  }

  getBrightness() {
    return this.m_material.getBrightness();
  }

  getRotationZ() {
    return this.m_material.getRotationZ();
  }

  setRotationZ(degrees) {
    this.m_material.setRotationZ(degrees);
  }

  getScaleX() {
    return this.m_material.getScaleX();
  }

  getScaleY() {
    return this.m_material.getScaleY();
  }

  setScaleX(p) {
    this.m_material.setScaleX(p);
  }

  setScaleY(p) {
    this.m_material.setScaleY(p);
  }

  setScaleXY(sx, sy) {
    this.m_material.setScaleXY(sx, sy);
  }

  setXYZ(px, py, pz) {
    if (this.m_rentity != null) {
      this.m_rentity.setXYZ(px, py, pz);
    }
  }

  setPosition(pv) {
    if (this.m_rentity != null) {
      this.m_rentity.setPosition(pv);
    }
  }

  getPosition(pv) {
    if (this.m_rentity != null) {
      return this.m_rentity.getPosition(pv);
    }
  }

  createMaterial(texList) {
    this.m_material.create();
    this.m_material.material.setTextureList(texList);
    this.m_material.material.vtxInfo = CoRScene.createVtxDrawingInfo();
  }

  initialize(text, h5Text, texList = null) {
    if (this.m_rentity == null) {
      this.m_rentity = CoRScene.createDisplayEntity();
      this.m_text = text;
      this.m_h5Text = h5Text;

      if (texList == null) {
        this.createMaterial([h5Text.getTextureAt(0)]);
      } else {
        this.createMaterial(texList);
      }

      this.m_mesh = this.createMesh(this.m_material.material);
      this.m_rentity.setMaterial(this.m_material.material);
      this.m_rentity.setMesh(this.m_mesh);
      this.m_rentity.setRenderState(CoRScene.RendererState.BACK_TRANSPARENT_STATE);
    }
  }

  createBounds() {}

  createMesh(material) {
    let builder = new TextGeometryBuilder_1.default();
    builder.vbWholeDataEnabled = false;
    builder.alignFactorX = this.m_alignFactorX;
    builder.alignFactorY = this.m_alignFactorY;
    builder.initialize(this.m_h5Text);
    this.m_width = builder.getWidth();
    this.m_height = builder.getHeight();
    return builder.create(this.m_text, material);
  }

  update() {
    if (this.m_rentity != null) {
      this.m_rentity.update();

      if (this.m_rentity.getTransform() != null) {
        if (this.m_dynamicEnbaled) {
          this.m_rentity.getMaterial().vtxInfo.setIvsParam(0, this.m_mesh.vtCount);
        }
      }
    }
  }

  destroy() {
    if (this.m_rentity != null) {
      this.m_rentity.destroy();
      this.m_rentity = null;
      this.m_h5Text = null;
      this.m_material.destroy();
      this.m_material = null;
    }
  }

}

exports.TextEntity = TextEntity;

/***/ }),

/***/ "62a0":
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

class FontTexCharGrid {
  constructor() {
    this.width = 4;
    this.height = 4;
    this.x = 0;
    this.y = 0;
    this.uvs = new Float32Array(8);
  }

  toString() {
    return "FontTexCharGrid(x=" + this.x + ",y=" + this.y + ",width=" + this.width + ",height=" + this.height + ")";
  }

}

class FontTexCharTable {
  constructor() {
    this.m_texWidth = 512;
    this.m_texHeight = 256;
    this.m_gridMp = new Map();
    this.layoutDataStr = "";
    this.m_minX = 0;
    this.m_minY = 0;
    this.m_maxX = 0;
    this.m_maxY = 0;
  }

  initialize(texW, texH) {
    this.m_texWidth = texW;
    this.m_texHeight = texH;
  } // for example: chars = "ABC", layoutData = "0,0,13,22,14,0,13,22,28,0,13,22"


  addCharsByRawData(chars, layoutData) {
    let i = 0;
    let k = 0;
    let arr = layoutData.split(",");
    let len = arr.length / 4;

    for (; i < len; ++i) {
      k = i * 4;
      this.addUV8RawDataFromChar(chars.charAt(i), parseInt(arr[k]), parseInt(arr[k + 1]), parseInt(arr[k + 2]), parseInt(arr[k + 3]));
    }
  }

  addUV8RawDataFromChar(char, px, py, pw, ph) {
    if (this.m_gridMp.get(char) == null) {
      //0.0,1.0,
      //1.0,1.0,
      //1.0,0.0,
      //0.0,0.0,
      let grid = new FontTexCharGrid();
      let uvs = grid.uvs;
      let ptw = this.m_texWidth;
      let pth = this.m_texHeight;
      this.m_minX = px / ptw;
      this.m_minY = py / pth;
      this.m_maxX = (px + pw) / ptw;
      this.m_maxY = (py + ph) / pth;
      uvs[0] = this.m_minX;
      uvs[1] = this.m_maxY;
      uvs[2] = this.m_maxX;
      uvs[3] = this.m_maxY;
      uvs[4] = this.m_maxX;
      uvs[5] = this.m_minY;
      uvs[6] = this.m_minX;
      uvs[7] = this.m_minY; //

      grid.x = px;
      grid.y = py;
      grid.width = pw;
      grid.height = ph;
      this.m_gridMp.set(char, grid);
    }
  }

  getGridByChar(char) {
    return this.m_gridMp.get(char);
  }

  getUV8FromChar(char, outfloat8Arr, offset = 0) {
    let grid = this.m_gridMp.get(char);
    if (grid == null) grid = this.m_gridMp.get("?");
    outfloat8Arr.set(grid.uvs, offset);
  }

  getVtxFromChar(char, vtxFloatArr, offset = 0) {
    let grid = this.m_gridMp.get(char);
    if (grid == null) grid = this.m_gridMp.get("?");
    let pos_arr = [0, 0, 0, grid.width, 0, 0, grid.width, grid.height, 0, 0, grid.height, 0];
    vtxFloatArr.set(pos_arr, offset);
  }

  getUV8AndVtxFromChar(char, outFloatArr, vtxFloatArr, offsetuv = 0, offsetvtx = 0) {
    let grid = this.m_gridMp.get(char);
    if (grid == null) grid = this.m_gridMp.get("?");
    outFloatArr.set(grid.uvs, offsetuv); //

    let pos_arr = [0, 0, 0, grid.width, 0, 0, grid.width, grid.height, 0, 0, grid.height, 0];
    vtxFloatArr.set(pos_arr, offsetvtx);
  }

  getUV8AndSizeFromChar(char, outFloatArr, sizeArr, offsetuv = 0) {
    let grid = this.m_gridMp.get(char);
    if (grid == null) grid = this.m_gridMp.get("?");
    outFloatArr.set(grid.uvs, offsetuv);
    sizeArr[0] = grid.width;
    sizeArr[1] = grid.height;
  }

  getUV8AndOffsetXYVtxFromChar(char, outUint8Arr, vtxFloatArr, offsetX = 0, offsetY = 0, offsetuv = 0, offsetvtx = 0) {
    let grid = this.m_gridMp.get(char);
    if (grid == null) grid = this.m_gridMp.get("?");
    outUint8Arr.set(grid.uvs, offsetuv);
    let pos_arr = [offsetX, offsetY, 0, offsetX + grid.width, offsetY, 0, offsetX + grid.width, offsetY + grid.height, 0, offsetX, offsetY + grid.height, 0];
    vtxFloatArr.set(pos_arr, offsetvtx);
  }

}

exports.FontTexCharTable = FontTexCharTable;

class FontTexDataBuilder {
  constructor() {
    this.m_currPosX = 0;
    this.m_currPosY = 0;
    this.m_texText = "";
    this.m_fontCharTable = null;
    this.pixMinPos = {
      x: 0,
      y: 0
    };
    this.pixMaxPos = {
      x: 0,
      y: 0
    };
    this.canvas = null;
    this.ctx2d = null; //let m_px = 0;

    this.m_py = 0;
    this.charTexWidth = 0;
    this.px = 0;
    this.py = 0;
    this.ph = 0;
    this.linedis = 2;
    this.charHDis = 1;
    this.tx = 0;
    this.char = "";
    this.meao = null;
  }

  setFontCharTable(table) {
    this.m_fontCharTable = table;
  }

  textFilte(srcStr) {
    let len = srcStr.length;
    let newStr = "";
    let char = "";

    for (let i = 0; i < len; ++i) {
      char = srcStr.charAt(i);

      if (this.m_texText.indexOf(char) < 0 && newStr.indexOf(char) < 0) {
        newStr += char;
      }
    }

    return newStr;
  }

  crateTextUVData(textStr, areaWidth, areaHeight, fontSize = 18) {
    this.m_texText += textStr;
    let ctx2d = this.ctx2d;

    if (this.m_currPosY < 2) {
      this.m_currPosY = fontSize;
    }

    this.charTexWidth = 0; //ctx2d.textAlign = "start";

    ctx2d.textAlign = "left";
    ctx2d.fillStyle = "white";
    ctx2d.font = fontSize + "px Arial"; //charAt

    let len = textStr.length;
    this.pixMinPos.x = 20000;
    this.pixMinPos.y = 20000;
    this.pixMaxPos.x = -20000;
    this.pixMaxPos.y = -20000;
    this.ph = fontSize + 8;

    for (let i = 0; i < len; i++) {
      this.char = textStr.charAt(i);
      this.meao = ctx2d.measureText(this.char);
      this.charTexWidth = Math.floor(this.meao.width) + 1.0;
      this.tx = this.m_currPosX + this.charTexWidth; //console.log("this.char,this.m_currPosX,this.m_currPosY: "+this.char+","+this.m_currPosX+","+this.m_currPosY);

      if (this.tx < areaWidth) {
        ctx2d.fillText(this.char, this.m_currPosX, this.m_currPosY);
        this.m_py = this.m_currPosY - fontSize;
        if (this.pixMinPos.x > this.m_currPosX) this.pixMinPos.x = this.m_currPosX;
        if (this.pixMinPos.y > this.m_py) this.pixMinPos.y = this.m_py;
        this.px = this.m_currPosX + this.charTexWidth;
        this.py = this.m_py + this.ph;
        if (this.pixMaxPos.x < this.px) this.pixMaxPos.x = this.px;
        if (this.pixMaxPos.y < this.py) this.pixMaxPos.y = this.py;
        this.m_fontCharTable.addUV8RawDataFromChar(this.char, this.m_currPosX, this.m_py + 1, this.charTexWidth, this.ph);
        this.m_currPosX = this.tx + this.charHDis;
      } else {
        this.m_currPosX = 0;
        this.m_currPosY += this.ph + this.linedis;
        ctx2d.fillText(this.char, this.m_currPosX, this.m_currPosY);
        this.m_py = this.m_currPosY - fontSize;
        if (this.pixMinPos.x > this.m_currPosX) this.pixMinPos.x = this.m_currPosX;
        if (this.pixMinPos.y > this.m_py) this.pixMinPos.y = this.m_py;
        this.px = this.m_currPosX + this.charTexWidth;
        this.py = this.m_py + this.ph;
        if (this.pixMaxPos.x < this.px) this.pixMaxPos.x = this.px;
        if (this.pixMaxPos.y < this.py) this.pixMaxPos.y = this.py;
        this.m_fontCharTable.addUV8RawDataFromChar(this.char, this.m_currPosX, this.m_py + 1, this.charTexWidth, this.ph);
        this.m_currPosX += this.charTexWidth;
      }
    }
  }

}

exports.FontTexDataBuilder = FontTexDataBuilder;

class H5Text {
  constructor() {
    this.m_texWidth = 512;
    this.m_texHeight = 512;
    this.m_preSW = 0;
    this.m_preSH = 0;
    this.m_canvas = null;
    this.m_ctx2D = null;
    this.m_tex = null;
    this.m_fontSize = 18;
    this.m_fontCharTable = new FontTexCharTable();
    this.m_fontTexDataBuilder = new FontTexDataBuilder();
    this.m_rc = null;
    this.m_areaBytes = null;
  }

  isEnabled() {
    return this.m_canvas != null;
  }

  getFontSize() {
    return this.m_fontSize;
  }

  initialize(rscene, canvas_id_name, fontSize = 10, texWidth = 512, texHeight = 512, canvas_visible = false, mipmapEnabled = false) {
    if (this.m_canvas == null) {
      this.m_rc = rscene;
      if (texWidth < 32) texWidth = 32;
      if (texHeight < 32) texHeight = 32;
      this.m_texWidth = texWidth;
      this.m_texHeight = texHeight;

      if (fontSize < 10) {
        fontSize = 10;
      }

      this.m_fontSize = fontSize;
      this.m_canvas = document.getElementById(canvas_id_name);

      if (this.m_canvas == null) {
        this.m_canvas = document.createElement("canvas");
        this.m_canvas.style.width = "128px";
        this.m_canvas.style.height = "128px";
        this.m_canvas.style.display = "bolck";
        this.m_canvas.style.overflow = "hidden";
        this.m_canvas.style.left = "0px";
        this.m_canvas.style.top = "0px";
        this.m_canvas.style.position = "absolute";
        this.m_canvas.style.backgroundColor = "transparent";
        this.m_canvas.style.pointerEvents = "none";
      }

      this.m_canvas.width = texWidth;
      this.m_canvas.height = texHeight; //console.log("H5Text::initialize(), canvas_visible: "+canvas_visible);

      if (canvas_visible) {
        document.body.appendChild(this.m_canvas);
        this.m_canvas.style.visibility = "visible";
      } else {
        this.m_canvas.style.visibility = "hidden";
      }

      this.m_ctx2D = this.m_canvas.getContext("2d");
      this.m_fontTexDataBuilder.canvas = this.m_canvas;
      this.m_fontTexDataBuilder.ctx2d = this.m_ctx2D;
      this.m_fontTexDataBuilder.setFontCharTable(this.m_fontCharTable);
      this.m_fontCharTable.initialize(this.m_texWidth, this.m_texHeight);
      this.m_tex = this.m_rc.textureBlock.createBytesTex(this.m_texWidth, this.m_texHeight);
      this.m_tex.toAlphaFormat();
      this.m_tex.mipmapEnabled = mipmapEnabled;
      this.m_tex.minFilter = CoRScene.TextureConst.LINEAR;
      this.m_tex.magFilter = CoRScene.TextureConst.NEAREST;
      this.createInitTexAndChars();
    }
  }

  setStyleSize(pw, ph) {
    if (this.m_canvas != null) {
      if (this.m_preSW != pw || this.m_preSH != ph) {
        this.m_preSW = pw;
        this.m_preSH = ph;
        this.m_canvas.style.width = pw + "px";
        this.m_canvas.style.height = ph + "px";
      }
    }
  }

  setCanvasVisible(bool) {
    if (bool) {
      this.m_canvas.style.visibility = "visible";
    } else {
      this.m_canvas.style.visibility = "hidden";
    }
  }

  getUV8FromChar(char, outfloat8Arr, offset = 0) {
    this.m_fontCharTable.getUV8FromChar(char, outfloat8Arr, offset);
  }

  getCharTable() {
    return this.m_fontCharTable;
  }

  createCharsTexFromStr(srcStr) {
    srcStr = this.m_fontTexDataBuilder.textFilte(srcStr);

    if (srcStr.length < 1) {
      //console.log("don not need rebuild tex Data");
      return;
    }

    let rawFontText = srcStr;
    this.m_fontTexDataBuilder.crateTextUVData(rawFontText, this.m_texWidth, this.m_texHeight, this.m_fontSize);
    let index = 0;
    let i = 0;
    let j = 0;
    let k = 0;
    let t = 0;
    let dw = this.m_fontTexDataBuilder.pixMaxPos.x - this.m_fontTexDataBuilder.pixMinPos.x;
    let dh = this.m_fontTexDataBuilder.pixMaxPos.y - this.m_fontTexDataBuilder.pixMinPos.y; //let fontTexData:any = this.m_ctx2D.getImageData(0,0,this.m_texWidth,this.m_texHeight);

    let fontTexData = this.m_ctx2D.getImageData(this.m_fontTexDataBuilder.pixMinPos.x, this.m_fontTexDataBuilder.pixMinPos.y, dw, dh);
    let pixData = fontTexData.data;
    let rawBytes = new Uint8Array(dw * dh); //  for(i = this.m_fontTexDataBuilder.pixMinPos.y; i < this.m_fontTexDataBuilder.pixMaxPos.y; ++i)
    //  {
    //  	for(j = this.m_fontTexDataBuilder.pixMinPos.x; j < this.m_fontTexDataBuilder.pixMaxPos.x; ++j)
    //  	{
    //      t = i * this.m_texWidth + j;
    //      index = t * 4;
    //      this.m_areaBytes[t] = pixData[index + 3];
    //      rawBytes[k] = this.m_areaBytes[t];
    //      k++;
    //  	}
    //  }

    let px = this.m_fontTexDataBuilder.pixMinPos.x;
    let py = this.m_fontTexDataBuilder.pixMinPos.y;

    for (i = 0; i < dh; ++i) {
      for (j = 0; j < dw; ++j) {
        t = (i + py) * this.m_texWidth + (px + j);
        index = (i * dw + j) * 4;
        this.m_areaBytes[t] = pixData[index + 3];
        rawBytes[k] = this.m_areaBytes[t];
        k++;
      }
    } //console.log("update sub text alpha texture pixel data.");
    //console.log("min pos: ",this.m_fontTexDataBuilder.pixMinPos.x,this.m_fontTexDataBuilder.pixMinPos.y);


    this.m_tex.setPartDataFromeBytes(rawBytes, this.m_fontTexDataBuilder.pixMinPos.x, this.m_fontTexDataBuilder.pixMinPos.y, dw, dh);
    this.m_tex.updateDataToGpu();
  }

  createInitTexAndChars() {
    let baseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~`!@#$%^&*()_+-={}[]:\";\\|'<>,.?/\n ";
    let rawFontText = baseChars; //let rawUVData = m_fontTexDataBuilder.crateTextUVData(rawFontText, m_texWidth,m_texHeight, m_fontSize);

    this.m_fontTexDataBuilder.crateTextUVData(rawFontText, this.m_texWidth, this.m_texHeight, this.m_fontSize);
    let fontTexData = this.m_ctx2D.getImageData(0, 0, this.m_texWidth, this.m_texHeight);
    let pixData = fontTexData.data;
    let i = 0;
    let j = 0;
    let index = 0;
    this.m_areaBytes = new Uint8Array(this.m_texWidth * this.m_texHeight);
    let k = 0;

    for (i = 0; i < this.m_texHeight; ++i) {
      for (j = 0; j < this.m_texWidth; ++j) {
        index = (i * this.m_texWidth + j) * 4;
        this.m_areaBytes[k] = pixData[index + 3];
        k++;
      }
    } //console.log("set initialization text alpha texture pixel data.");


    this.m_tex.setDataFromBytes(this.m_areaBytes, 0, this.m_texWidth, this.m_texHeight);
  }

  getTextureAt(index = 0) {
    return this.m_tex;
  }

}

exports.H5Text = H5Text;

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

/***/ "968a":
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

class TextGeometryBuilder {
  constructor() {
    this.m_ivs = null;
    this.m_vs = null;
    this.m_uvs = null;
    this.m_h5Text = null;
    this.m_width = 0;
    this.m_height = 0;
    this.m_charsTotal = 0;
    this.m_text = "";
    this.flipVerticalUV = false;
    this.vtxUVEnabled = true;
    this.vertColorEnabled = false;
    this.alignFactorX = 0.5;
    this.alignFactorY = 0.5;
    this.vbWholeDataEnabled = true;
  }

  getWidth() {
    return this.m_width;
  }

  getHeight() {
    return this.m_height;
  }

  createMesh(text, material) {
    this.m_text = text;
    let charsTot = text.length;
    this.m_charsTotal = charsTot;

    if (charsTot > 0) {
      let tmb = TextGeometryBuilder;
      let ivs = tmb.s_currIvs;
      ivs.set(tmb.s_initIvs, 0);

      if (this.m_ivs == null) {
        this.m_ivs = new Uint16Array(charsTot * 6);

        for (let i = 0; i < charsTot; ++i) {
          this.m_ivs.set(ivs, i * 6);
          ivs[0] += 4;
          ivs[1] += 4;
          ivs[2] += 4;
          ivs[3] += 4;
          ivs[4] += 4;
          ivs[5] += 4;
        }
      }

      let expand = false;
      let h5Text = this.m_h5Text;
      h5Text.createCharsTexFromStr(text);
      this.m_width = -1;
      this.m_height = 0;
      let sizeArr = tmb.s_sizeArr;
      let i = 0;
      let maxX = 0;
      let maxY = 0;
      let minX = 0;
      let minY = 0;
      expand = this.m_vs != null && charsTot * 8 > this.m_vs.length;
      let charTable = h5Text.getCharTable();

      if (expand) {
        let ivs = tmb.s_currIvs;
        ivs.set(tmb.s_initIvs, 0);
        this.m_ivs = new Uint16Array(charsTot * 6);
        this.m_uvs = new Float32Array(charsTot * 8);
        this.m_vs = new Float32Array(charsTot * 8);

        for (; i < charsTot; ++i) {
          this.m_ivs.set(ivs, i * 6);
          ivs[0] += 4;
          ivs[1] += 4;
          ivs[2] += 4;
          ivs[3] += 4;
          ivs[4] += 4;
          ivs[5] += 4;
          charTable.getUV8AndSizeFromChar(text.charAt(i), this.m_uvs, sizeArr, i * 8);

          if (this.m_height < sizeArr[1]) {
            this.m_height = sizeArr[1];
          }

          this.m_vs[i * 8] = sizeArr[0];
          this.m_width += sizeArr[0];
        }
      } else {
        if (this.m_vs == null) {
          this.m_uvs = new Float32Array(charsTot * 8);
          this.m_vs = new Float32Array(charsTot * 8);
        }

        for (; i < charsTot; ++i) {
          charTable.getUV8AndSizeFromChar(text.charAt(i), this.m_uvs, sizeArr, i * 8);

          if (this.m_height < sizeArr[1]) {
            this.m_height = sizeArr[1];
          }

          this.m_vs[i * 8] = sizeArr[0];
          this.m_width += sizeArr[0];
        }
      }

      let dis = 1.0;
      this.m_width += charsTot * dis;
      minX = -this.alignFactorX * this.m_width;
      minY = -this.alignFactorY * this.m_height;
      maxY = minY + this.m_height;
      let j = 0;

      for (i = 0; i < charsTot; ++i) {
        maxX = minX + this.m_vs[j];
        this.m_vs[j] = minX;
        this.m_vs[j + 1] = minY;
        this.m_vs[j + 2] = maxX;
        this.m_vs[j + 3] = minY;
        this.m_vs[j + 4] = maxX;
        this.m_vs[j + 5] = maxY;
        this.m_vs[j + 6] = minX;
        this.m_vs[j + 7] = maxY;
        minX = maxX + dis;
        j += 8;
      }

      let mesh = CoRScene.createRawMesh(); // mesh = mesh == null ? new RawMesh() : mesh;

      mesh.reset();
      mesh.setBufSortFormat(material.getBufSortFormat());
      mesh.setIVS(this.m_ivs);
      mesh.addFloat32Data(this.m_vs, 2);
      mesh.addFloat32Data(this.m_uvs, 2);
      mesh.vbWholeDataEnabled = this.vbWholeDataEnabled;
      mesh.initialize();
      mesh.vtCount = charsTot * 6;
      mesh.vtxTotal = charsTot * 4;
      mesh.trisNumber = charsTot * 2;
      return mesh;
    }

    return null;
  }

  initialize(h5Text) {
    this.m_h5Text = h5Text;
  }

  create(text, material) {
    return this.createMesh(text, material);
  }
  /*
  initialize(text: string, h5Text: H5Text): void {
      //console.log("RectPlaneMesh::initialize()...");
      this.m_h5Text = h5Text;
      let charsTot = text.length;
      let ivs = TextGeometryBuilder.s_currIvs;
      ivs.set(TextGeometryBuilder.s_initIvs, 0);
      if (this.m_ivs == null) {
          this.m_ivs = new Uint16Array(charsTot * 6);
      }
      for (let i: number = 0; i < charsTot; ++i) {
          this.m_ivs.set(ivs, i * 6);
          ivs[0] += 4;
          ivs[1] += 4;
          ivs[2] += 4;
          ivs[3] += 4;
          ivs[4] += 4;
          ivs[5] += 4;
      }
      this.createMesh(text);
        // ROVertexBuffer.vbWholeDataEnabled = this.vbWholeDataEnabled;
      // this.m_vbuf = ROVertexBuffer.CreateBySaveData(this.getBufDataUsage());
      // this.m_vbuf.setIVSDataAt( this.crateROIvsData().setData(this.m_ivs) );
      // //this.drawMode = RenderDrawMode.ELEMENTS_TRIANGLE_STRIP;
      // this.buildEnd();
  }
  //*/
  // updateCharStr(text: string): void {
  //     // if (this.m_vbuf != null && this.m_text != text) {
  //     //     this.createMesh(text);
  //     //     this.buildEnd();
  //     //     ROVertexBuffer.UpdateBufData(this.m_vbuf);
  //     // }
  // }


  destroy() {
    // if (this.isResFree()) {
    //     this.bounds = null;
    //     this.m_vs = null;
    //     this.m_uvs = null;
    //     super.__$destroy();
    // }
    this.m_h5Text = null;
  }

}

TextGeometryBuilder.s_initIvs = new Uint8Array([0, 1, 2, 0, 2, 3]);
TextGeometryBuilder.s_currIvs = new Uint8Array([0, 1, 2, 0, 2, 3]);
TextGeometryBuilder.s_sizeArr = [0, 0];
exports.default = TextGeometryBuilder;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("062b");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ })

/******/ });
});