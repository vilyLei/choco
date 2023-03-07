(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoUI"] = factory();
	else
		root["CoUI"] = factory();
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

/***/ "0e8f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const UIEntityBase_1 = __webpack_require__("b0fb");

class TextureLabel extends UIEntityBase_1.UIEntityBase {
  constructor() {
    super();
    this.m_pw = 10;
    this.m_ph = 10;
    this.m_sx = 1.0;
    this.m_sy = 1.0;
    this.m_material = null;
    this.m_tex = null;
  }

  initialize(uiScene, tex, width = 128, height = 128) {
    if (tex != null && this.isIniting()) {
      this.init();
      this.m_tex = tex;
      this.m_uiScene = uiScene;
      this.m_color = CoMaterial.createColor4();
      this.m_tex.flipY = true;
      this.m_tex.premultiplyAlpha = true;
      this.m_tex.minFilter = CoRScene.TextureConst.LINEAR;
      this.m_tex.magFilter = CoRScene.TextureConst.NEAREST;
      let material = this.createMaterial(this.m_tex);
      this.m_material = material;
      CoMesh.plane.applyMaterial(material, true);
      let mesh = CoMesh.plane.createXOY(0, 0, 1.0, 1.0);
      this.m_pw = width;
      this.m_ph = height;
      let entity = CoEntity.createDisplayEntity();
      entity.setMaterial(material);
      entity.setMesh(mesh);
      this.m_entities.push(entity);
      this.applyRST(entity);
      super.setScaleXY(this.m_sx * this.m_pw, this.m_sy * this.m_ph);
      this.update();
    }
  }

  setScaleXY(sx, sy) {
    this.m_sx = sx;
    this.m_sy = sy;
    super.setScaleXY(sx * this.m_pw, sy * this.m_ph);
  }

  setScaleX(sx) {
    this.m_sx = sx;
    super.setScaleX(sx * this.m_pw);
  }

  setScaleY(sy) {
    this.m_sy = sy;
    super.setScaleX(sy * this.m_ph);
  }

  getScaleX() {
    return this.m_sx;
  }

  getScaleY() {
    return this.m_sy;
  }

  setColor(c) {
    this.m_color.copyFrom(c);

    if (this.m_material != null) {
      this.m_material.setColor(c);
    }

    return this;
  }

  getColor() {
    return this.m_color;
  }

  destroy() {
    super.destroy();
    this.m_material = null;
    this.m_uiScene = null;
    this.m_tex = null;
  }

}

exports.TextureLabel = TextureLabel;

/***/ }),

/***/ "10ee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class LayouterBase {
  constructor() {
    this.m_entities = [];
    this.m_opvs = [];
    this.m_initRect = null;
    this.m_offsetV = CoMath.createVec3();
  }

  setOffset(offsetV) {
    this.m_offsetV.copyFrom(offsetV);
  }

  addUIEntity(entity) {
    if (entity != null) {
      let i = 0;

      for (; i < this.m_entities.length; ++i) {
        if (this.m_entities[i] == entity) break;
      }

      if (i >= this.m_entities.length) {
        let pv = CoMath.createVec3();
        entity.getPosition(pv);
        this.m_opvs.push(pv);
        this.m_entities.push(entity);

        if (this.m_initRect != null) {
          this.initEntityLayout(entity, this.m_initRect);
        }
      }
    }
  }

  removeUIEntity(entity) {
    if (entity != null) {
      let i = 0;

      for (; i < this.m_entities.length; ++i) {
        if (this.m_entities[i] == entity) {
          this.m_entities.splice(i, 1);
          this.m_opvs.splice(i, 1);
          break;
        }
      }
    }
  }

  initLayout(rect) {
    if (rect != null) {
      if (this.m_initRect != null) {
        this.m_initRect.copyFrom(rect);
      } else {
        this.m_initRect = rect.clone();
      }

      let ls = this.m_entities;

      for (let i = 0; i < ls.length; ++i) {
        this.initEntityLayout(ls[i], this.m_initRect);
      }
    }
  }

  initEntityLayout(entity, initRect) {}

  applyLayout(entity) {}

  update(rect) {}

  destroy() {}

}

exports.LayouterBase = LayouterBase;

/***/ }),

/***/ "1389":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 光标移入的信息提示系统
 */

class TipsSystem {
  constructor() {
    this.m_tipEntity = null;
  }

  initialize(uiscene, rpi = 2) {
    if (this.m_tipEntity == null) {
      this.m_uiscene = uiscene;
      let tip = CoUI.createRectTextTip();
      tip.initialize(uiscene, rpi);
      this.m_tipEntity = tip;
    }
  }
  /**
   * get tip entity
   * @param type the default value is 0
   * @returns IRectTextTip instance
   */


  getTipEntity(type) {
    return this.m_tipEntity;
  }
  /**
   * @param entity IMouseEvtUIEntity instance
   * @param type the default value is 0
   */


  addTipsTarget(entity, type) {
    this.m_tipEntity.addEntity(entity);
  }
  /**
   * @param entity IMouseEvtUIEntity instance
   * @param type the default value is 0
   */


  removeTipsTarget(entity, type) {
    this.m_tipEntity.removeEntity(entity);
  }

  destroy() {}

}

exports.TipsSystem = TipsSystem;

/***/ }),

/***/ "14e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class LeftAligner {
  constructor() {
    this.m_pv = null;
  }

  getPos(mx, my, bounds, tipBounds, area) {
    if (this.m_pv == null) {
      this.m_pv = CoMath.createVec3();
    }

    let pv = this.m_pv;
    let ph = tipBounds.getHeight();
    let pw = tipBounds.getWidth();
    let minV = bounds.min;
    pv.x = minV.x - 2 - pw;
    pv.y = my + 2 - ph;

    if (pv.y + ph > area.getTop()) {
      pv.y = area.getTop() - 2 - ph;
    }

    return pv;
  }

}

class RightAligner {
  constructor() {
    this.m_pv = null;
  }

  getPos(mx, my, bounds, tipBounds, area) {
    if (this.m_pv == null) {
      this.m_pv = CoMath.createVec3();
    }

    let pv = this.m_pv;
    let ph = tipBounds.getHeight();
    let maxV = bounds.max;
    pv.x = maxV.x + 2;
    pv.y = my + 2 - ph;

    if (pv.y + ph > area.getTop()) {
      pv.y = area.getTop() - 2 - ph;
    }

    return pv;
  }

}

class TopAligner {
  constructor() {
    this.m_pv = null;
  }

  getPos(mx, my, bounds, tipBounds, area) {
    if (this.m_pv == null) {
      this.m_pv = CoMath.createVec3();
    }

    let pv = this.m_pv;
    let maxV = bounds.max;
    let pw = tipBounds.getWidth();
    pv.x = mx + 2;
    pv.y = maxV.y + 2;

    if (pv.x + pw > area.getRight()) {
      pv.x = area.getRight() - 2 - pw;
    }

    return pv;
  }

}

class BottomAligner {
  constructor() {
    this.m_pv = null;
  }

  getPos(mx, my, bounds, tipBounds, area) {
    if (this.m_pv == null) {
      this.m_pv = CoMath.createVec3();
    }

    let pv = this.m_pv;
    let ph = tipBounds.getHeight();
    let pw = tipBounds.getWidth();
    let minV = bounds.min;
    pv.x = mx + 2;
    pv.y = minV.y - 2 - ph;

    if (pv.x + pw > area.getRight()) {
      pv.x = area.getRight() - 2 - pw;
    }

    return pv;
  }

}

const __$leftAligner = new LeftAligner();

const __$rightAligner = new RightAligner();

const __$topAligner = new TopAligner();

const __$bottomAligner = new BottomAligner();

class TipInfo {
  // follow = true;
  constructor() {
    this.m_content = "ui entity tip info";
    this.m_aligner = null;
  }

  setContent(c) {
    this.m_content = c;
    return this;
  }

  getCotent() {
    return this.m_content;
  }

  alignLeft() {
    this.m_aligner = __$leftAligner;
    return this;
  }

  alignRight() {
    this.m_aligner = __$rightAligner;
    return this;
  }

  alignTop() {
    this.m_aligner = __$topAligner;
    return this;
  }

  alignBottom() {
    this.m_aligner = __$bottomAligner;
    return this;
  }

  getPos(mx, my, bounds, tipBounds, area = null) {
    if (this.m_aligner == null) {
      this.m_aligner = new LeftAligner();
    }

    return this.m_aligner.getPos(mx, my, bounds, tipBounds, area);
  }

  destroy() {
    this.m_aligner = null;
  }

}

exports.TipInfo = TipInfo;

/***/ }),

/***/ "1dd7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const UIEntityBase_1 = __webpack_require__("b0fb");

class TextLabel extends UIEntityBase_1.UIEntityBase {
  constructor() {
    super();
    this.m_pw = 10;
    this.m_ph = 10;
    this.m_sx = 1.0;
    this.m_sy = 1.0; // private m_rpi = 0;

    this.m_material = null;
    this.m_tex = null;
    this.m_fontSize = 24;
    this.m_text = "";
  }

  initialize(text, uiScene, fontSize = 24) {
    if (text != "" && this.isIniting()) {
      if (fontSize < 8) fontSize = 8;
      this.m_fontSize = fontSize;
      this.init(); // this.transparent = true;
      // this.premultiplyAlpha = true;

      this.m_text = text;
      this.m_uiScene = uiScene;
      let entity = CoEntity.createDisplayEntity();
      this.m_fontColor = CoMaterial.createColor4();
      this.m_bgColor = CoMaterial.createColor4(1.0, 1.0, 1.0, 0.0);
      let img = this.m_uiScene.texAtlas.createCharsImage(this.m_text, this.m_fontSize, this.m_fontColor, this.m_bgColor);
      this.m_tex = uiScene.rscene.textureBlock.createImageTex2D(img.width, img.height);
      this.m_tex.setDataFromImage(img);
      this.m_tex.flipY = true;
      this.m_tex.premultiplyAlpha = true; //this.premultiplyAlpha;

      this.m_tex.minFilter = CoRScene.TextureConst.LINEAR;
      this.m_tex.magFilter = CoRScene.TextureConst.NEAREST;
      let material = this.createMaterial(this.m_tex);
      this.m_material = material;
      CoMesh.plane.setBufSortFormat(material.getBufSortFormat());
      let mesh = CoMesh.plane.createXOY(0, 0, 1.0, 1.0);
      this.m_pw = img.width;
      this.m_ph = img.height;
      entity.setMaterial(material);
      entity.setMesh(mesh);
      this.m_entities.push(entity);
      this.applyRST(entity);
      super.setScaleXY(this.m_sx * this.m_pw, this.m_sy * this.m_ph);
      this.update();
    }
  }

  setScaleXY(sx, sy) {
    this.m_sx = sx;
    this.m_sy = sy;
    super.setScaleXY(sx * this.m_pw, sy * this.m_ph);
  }

  setScaleX(sx) {
    this.m_sx = sx;
    super.setScaleX(sx * this.m_pw);
  }

  setScaleY(sy) {
    this.m_sy = sy;
    super.setScaleX(sy * this.m_ph);
  }

  getScaleX() {
    return this.m_sx;
  }

  getScaleY() {
    return this.m_sy;
  }

  setText(text) {
    if (this.m_tex != null && text != "" && this.m_text != text) {
      this.m_text = text;
      let img = this.m_uiScene.texAtlas.createCharsImage(text, this.m_fontSize, this.m_fontColor, this.m_bgColor);
      this.m_tex.setDataFromImage(img, 0, 0, 0, true);
      this.m_tex.updateDataToGpu();
      this.m_pw = img.width;
      this.m_ph = img.height;
      super.setScaleXY(this.m_sx * this.m_pw, this.m_sy * this.m_ph);
      this.update();
    }
  }

  getText() {
    return this.m_text;
  }

  setColor(c) {
    this.m_fontColor.copyFrom(c);

    if (this.m_material != null) {
      this.m_material.setColor(c);
    }

    return this;
  }

  getColor() {
    return this.m_fontColor;
  }

  destroy() {
    super.destroy();
    this.m_material = null;
    this.m_uiScene = null;
    this.m_tex = null;
  }

}

exports.TextLabel = TextLabel;

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

/***/ "2870":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const ClipLabel_1 = __webpack_require__("3914");

const ClipColorLabel_1 = __webpack_require__("bb62");

const Button_1 = __webpack_require__("eb56");

class ButtonBuilder {
  static createCurrTextBtn(pw, ph, idns, texAtlas, textParam, colors = null) {
    if (textParam.text !== null && textParam.text != "") {
      let colorClipLabel = new ClipColorLabel_1.ClipColorLabel();
      colorClipLabel.initializeWithoutTex(pw, ph, 4);
      colorClipLabel.setColors(colors);
      let iconLable = new ClipLabel_1.ClipLabel();
      iconLable.depthTest = true;
      iconLable.transparent = true;
      iconLable.premultiplyAlpha = true;
      iconLable.initialize(texAtlas, [textParam.text]);
      iconLable.setColor(textParam.textColor);
      let btn = new Button_1.Button();
      btn.uuid = idns;
      btn.addLabel(iconLable);
      btn.initializeWithLable(colorClipLabel);
      return btn;
    }

    return null;
  }

  static createTextButton(width, height, idns, texAtlas, textParam, colors) {
    let tp = textParam;
    let img = texAtlas.createCharsCanvasFixSize(width, height, tp.text, tp.fontSize, CoMaterial.createColor4(), CoMaterial.createColor4(1.0, 1.0, 1.0, 0.0));
    texAtlas.addImageToAtlas(tp.text, img);
    return ButtonBuilder.createCurrTextBtn(width, height, idns, texAtlas, textParam, colors);
  }

  static createPanelBtnWithCfg(couiScene, px, py, btnIndex, uiConfig) {
    let tta = couiScene.transparentTexAtlas;
    let cfg = couiScene.uiConfig;
    let btnSize = uiConfig.btnSize;
    let pw = btnSize[0];
    let ph = btnSize[1];
    let names = uiConfig.btnNames;
    let keys = uiConfig.btnKeys;
    let tips = uiConfig.btnTips;
    let fontFormat = uiConfig.btnTextFontFormat;
    tta.setFontName(fontFormat.font);
    let fontColor = CoMaterial.createColor4();
    fontColor.fromBytesArray3(cfg.getUIGlobalColor().text);
    let bgColor = CoMaterial.createColor4(1, 1, 1, 0);
    let img = tta.createCharsCanvasFixSize(pw, ph, names[btnIndex], fontFormat.fontSize, fontColor, bgColor);
    tta.addImageToAtlas(names[btnIndex], img);
    let label = CoUI.createClipColorLabel();
    label.initializeWithoutTex(pw, ph, 4);
    let iconLable = CoUI.createClipLabel();
    iconLable.transparent = true;
    iconLable.premultiplyAlpha = true;
    iconLable.initialize(tta, [names[btnIndex]]);
    let btn = CoUI.createButton();
    btn.uuid = keys[btnIndex];
    btn.addLabel(iconLable);
    btn.initializeWithLable(label);
    let tipsAlign = "right";
    let btnStyle = uiConfig.buttonStyle;

    if (btnStyle != undefined) {
      if (btnStyle.globalColor != undefined) {
        tipsAlign = btnStyle.tipsAlign;
        cfg.applyButtonGlobalColor(btn, btnStyle.globalColor);
      }
    }

    if (tips.length > btnIndex) {
      couiScene.tips.addTipsTarget(btn);
      let tipInfo = CoUI.createTipInfo().setContent(tips[btnIndex]);

      switch (tipsAlign) {
        case "top":
          btn.info = tipInfo.alignTop();
          break;

        case "bottom":
          btn.info = tipInfo.alignBottom();
          break;

        default:
          btn.info = tipInfo.alignRight();
          break;
      }
    }

    btn.setXY(px, py);
    return btn;
  }

}

exports.ButtonBuilder = ButtonBuilder;

/***/ }),

/***/ "3914":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const ClipLabelBase_1 = __webpack_require__("67d8");

class ClipLabel extends ClipLabelBase_1.ClipLabelBase {
  constructor() {
    super();
    this.m_material = null;
  }

  createMesh(atlas, idnsList) {
    let partVtxTotal = 4;
    let pivs = [0, 1, 2, 0, 2, 3];
    const n = this.m_total;
    let ivs = new Uint16Array(n * 6);
    let vs = new Float32Array(n * 12);
    let uvs = new Float32Array(n * 8);
    this.m_sizes = new Array(n * 2);
    let k = 0;

    for (let i = 0; i < n; ++i) {
      const obj = atlas.getTexObjFromAtlas(idnsList[i]);
      ivs.set(pivs, i * pivs.length);
      vs.set(this.createVS(0, 0, obj.getWidth(), obj.getHeight()), i * 12);
      uvs.set(obj.uvs, i * 8);

      for (let j = 0; j < pivs.length; ++j) {
        pivs[j] += partVtxTotal;
      }

      this.m_sizes[k++] = obj.getWidth();
      this.m_sizes[k++] = obj.getHeight();
    }

    let mesh = CoMesh.createRawMesh();
    mesh.reset();
    mesh.setIVS(ivs);
    mesh.addFloat32Data(vs, 3);
    mesh.addFloat32Data(uvs, 2);
    mesh.initialize();
    return mesh;
  }

  hasTexture() {
    return true;
  }

  initialize(atlas, idnsList) {
    if (this.isIniting() && atlas != null && idnsList != null && idnsList.length > 0) {
      this.init();
      this.m_pos = CoMath.createVec3();
      this.m_total = idnsList.length;
      let obj = atlas.getTexObjFromAtlas(idnsList[0]);
      let mesh = this.createMesh(atlas, idnsList);
      this.m_vtCount = mesh.vtCount;
      this.m_material = this.createMaterial(obj.texture);
      this.m_material.vtxInfo = CoRScene.createVtxDrawingInfo();
      let et = CoEntity.createDisplayEntity();
      et.setMaterial(this.m_material);
      et.setMesh(mesh);
      et.setIvsParam(0, this.m_step);
      this.m_entities.push(et);
      this.applyRST(et);
      this.setClipIndex(0);
    }
  }

  initializeWithLable(srcLable) {
    if (this.isIniting() && srcLable != null && srcLable != this) {
      if (srcLable.getClipsTotal() < 1) {
        throw Error("Error: srcLable.getClipsTotal() < 1");
      }

      this.init();
      let ls = srcLable.getREntities();

      for (let i = 0; i < ls.length; ++i) {
        let entity = ls[i]; //srcLable.getREntity();

        let mesh = entity.getMesh();
        this.m_pos = CoMath.createVec3();
        let tex = entity.getMaterial().getTextureAt(0);
        let n = this.m_total = srcLable.getClipsTotal();
        this.m_sizes = new Array(n * 2);
        let k = 0;

        for (let i = 0; i < n; ++i) {
          this.m_sizes[k++] = srcLable.getClipWidthAt(i);
          this.m_sizes[k++] = srcLable.getClipHeightAt(i);
        }

        this.m_vtCount = mesh.vtCount;
        this.m_material = this.createMaterial(tex);
        this.m_material.vtxInfo = CoRScene.createVtxDrawingInfo();
        let et = CoEntity.createDisplayEntity();
        et.setMaterial(this.m_material);
        et.setMesh(mesh);
        et.setIvsParam(0, this.m_step);
        this.m_entities.push(et);
        this.applyRST(et);
      }

      this.setClipIndex(0);
    }
  }

  displaceFromLable(srcLable) {
    if (srcLable != null && srcLable != this) {
      if (srcLable.getClipsTotal() < 1) {
        throw Error("Error: srcLable.getClipsTotal() < 1");
      } // if (this.m_entities == null) {
      // 	this.initializeWithLable(srcLable);
      // } else if (this.m_entities[0].isRFree()) {
      // }

    }
  }

  setColor(color) {
    if (this.m_material != null) {
      this.m_material.setColor(color);
    }
  }

  getColor(color) {
    if (this.m_material != null) {
      this.m_material.getColor(color);
    }
  }

  setClipIndex(i) {
    if (i >= 0 && i < this.m_total) {
      this.m_index = i;
      let ls = this.m_entities;

      for (let k = 0; k < ls.length; ++k) {
        ls[k].getMaterial().vtxInfo.setIvsParam(i * this.m_step, this.m_step);
      }

      i = i << 1;
      this.m_width = this.m_sizes[i];
      this.m_height = this.m_sizes[i + 1];
    }
  }

}

exports.ClipLabel = ClipLabel;

/***/ }),

/***/ "39ac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class SelectButtonGroup {
  constructor(mouseUpSelect = true) {
    this.m_map = new Map();
    this.m_selectFunc = null;
    this.m_deselectFunc = null;
    this.m_mouseUpSelect = true;
    this.m_btn = null;
    this.m_mouseUpSelect = mouseUpSelect;
  }

  addButton(btn) {
    if (btn != null) {
      if (this.m_map == null) {
        this.m_map = new Map();
      }

      this.m_map.set(btn.uuid, btn);
      const ME = CoRScene.MouseEvent;

      if (this.m_mouseUpSelect) {
        btn.addEventListener(ME.MOUSE_UP, this, this.mouseEvtFunc);
      } else {
        btn.addEventListener(ME.MOUSE_DOWN, this, this.mouseEvtFunc);
      }
    }
  }

  mouseEvtFunc(evt) {
    this.select(evt.currentTarget.uuid);
  }

  setSelectedFunction(selectFunc, deselectFunc) {
    this.m_selectFunc = selectFunc;
    this.m_deselectFunc = deselectFunc;
  }

  select(uuid) {
    if (this.m_map != null && this.m_map.has(uuid)) {
      let btn = this.m_map.get(uuid);

      if (this.m_btn != btn) {
        if (this.m_btn != null) {
          if (this.m_deselectFunc != null) {
            this.m_deselectFunc(this.m_btn);
          }
        }

        this.m_btn = btn;

        if (this.m_selectFunc != null) {
          this.m_selectFunc(btn);
        }
      }
    }
  }

  destroy() {
    this.m_btn = null;
    this.m_map = null;
    this.m_selectFunc = null;
    this.m_deselectFunc = null;
  }

}

exports.SelectButtonGroup = SelectButtonGroup;

/***/ }),

/***/ "3f49":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const UIEntityBase_1 = __webpack_require__("b0fb");

class ColorLabel extends UIEntityBase_1.UIEntityBase {
  constructor() {
    super();
    this.m_color = null;
    this.m_material = null;
  }

  createMesh(material) {
    let ivs = new Uint16Array([0, 1, 2, 0, 2, 3]);
    let vs = new Float32Array(this.createVS(0, 0, this.m_width, this.m_height));
    let mesh = CoMesh.createRawMesh();
    mesh.reset();
    mesh.setBufSortFormat(material.getBufSortFormat());
    mesh.setIVS(ivs);
    mesh.addFloat32Data(vs, 3);
    mesh.initialize();
    return mesh;
  }

  initialize(width, height) {
    if (this.isIniting()) {
      this.init();
      this.m_width = width;
      this.m_height = height;
      let material = CoMaterial.createDefaultMaterial();
      material.initializeByCodeBuf(false);
      this.m_color = CoMaterial.createColor4();
      let mesh = this.createMesh(material);
      let et = CoEntity.createDisplayEntity();
      et.setMaterial(material);
      et.setMesh(mesh);
      this.applyRST(et);
      this.m_entities.push(et);
      this.m_material = material;
    }
  }

  setColor(c) {
    this.m_color.copyFrom(c);

    if (this.m_material != null) {
      this.m_material.setColor(c);
    }

    return c;
  }

  getColor() {
    return this.m_color;
  }

  destroy() {
    super.destroy();
    this.m_material = null;
  }

}

exports.ColorLabel = ColorLabel;

/***/ }),

/***/ "3f7d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const PromptPanel_1 = __webpack_require__("ccfe");

class PromptSystem {
  constructor() {
    this.m_promptPanel = null;
  }

  initialize(uiscene, rpi = 3) {
    if (this.m_promptPanel == null) {
      this.m_uiscene = uiscene;
      let cfg = uiscene.uiConfig;
      let uimodule = cfg.getUIPanelCfgByName("promptPanel");
      let plSize = uimodule.panelSize;
      let btnSize = uimodule.btnSize;
      let names = uimodule.btnNames;
      let pl = new PromptPanel_1.PromptPanel(); // pl.initialize(this.m_uiscene, rpi, 300, 200, 120, 50);

      pl.initialize(this.m_uiscene, rpi, plSize[0], plSize[1], btnSize[0], btnSize[1], names[0], names[1]);
      pl.setZ(3.0);
      let color = CoMaterial.createColor4();
      color.fromBytesArray3(uimodule.bgColor); // pl.setBGColor(CoMaterial.createColor4(0.2, 0.2, 0.2));

      pl.setBGColor(color);
      this.m_promptPanel = pl;
    }
  }

  setPromptListener(confirmFunc, cancelFunc, type = 0) {
    if (this.m_promptPanel != null) {
      this.m_promptPanel.setListener(confirmFunc, cancelFunc);
    }
  }

  showPrompt(promptInfo, type = 0) {
    if (this.m_promptPanel != null) {
      this.m_promptPanel.setPrompt(promptInfo);
      this.m_promptPanel.open();
    }
  }

  setPromptTextColor(color, type = 0) {
    if (this.m_promptPanel != null) {
      this.m_promptPanel.setPromptTextColor(color);
    }
  }

  setPromptBGColor(color, type = 0) {
    if (this.m_promptPanel != null) {
      this.m_promptPanel.setBGColor(color);
    }
  }

  getPromptPanel(type = 0) {
    return this.m_promptPanel;
  }

}

exports.PromptSystem = PromptSystem;

/***/ }),

/***/ "5870":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const UIPanel_1 = __webpack_require__("af66");

const TextureLabel_1 = __webpack_require__("0e8f");

class ColorPickPanel extends UIPanel_1.UIPanel {
  constructor() {
    super();
    /**
     * 边距留白尺寸
     */

    this.m_marginWidth = 15;
    this.m_callback = null;
    this.m_initing = true;
    this.m_pixelsW = 256;
    this.m_pixelsH = 256;
  }

  initialize(scene, rpi, panelW = 260, panelH = 260, marginWidth = 3) {
    if (this.isIniting()) {
      this.init();
      this.m_marginWidth = marginWidth;
      this.m_scene = scene;
      this.m_rpi = rpi;
      this.m_panelW = panelW;
      this.m_panelH = panelH;
      if (this.m_bgColor == null) this.m_bgColor = CoMaterial.createColor4();
    }
  }

  destroy() {
    super.destroy();
  }

  setSelectColorCallback(callback) {
    this.m_callback = callback;
  }

  buildPanel(pw, ph) {
    this.buildItems();
  }

  buildItems() {
    if (this.m_initing) {
      this.m_initing = false;
      let sc = this.getScene();
      let cplUrl = "static/assets/colors.png";
      let dis = this.m_marginWidth;
      let pw = this.m_panelW - 2.0 * dis;
      let ph = this.m_panelH - 2.0 * dis;
      let tex = this.createTexByUrl(cplUrl);
      let texLabel = new TextureLabel_1.TextureLabel();
      texLabel.initialize(sc, tex, pw, ph);
      texLabel.setXY(dis, dis);
      this.addEntity(texLabel);
    }
  }

  getRGBAByXY(px, py) {
    px = px | 0;
    py = py | 0; // if(px < 0 || px > 255 || py < 0 || py > 255) {
    // 	return null;
    // }

    if (px < 0) px = 0;
    if (py < 0) py = 0;
    if (px > 255) px = 255;
    if (py > 255) py = 255;
    py = 255 - py;

    if (this.m_color == null) {
      this.m_color = CoMaterial.createColor4();
    }

    let ls = this.m_pixels;

    if (this.m_pixels != null) {
      let i = (py * this.m_pixelsW + px) * 4;
      let r = ls[i];
      let g = ls[i + 1];
      let b = ls[i + 2];
      this.m_color.setRGB3Bytes(r, g, b);
    }

    return this.m_color;
  }

  createColorData(img) {
    let canvas = document.createElement("canvas");
    canvas.style.display = "bolck";
    canvas.style.overflow = "hidden";
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    canvas.style.position = "absolute";
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx2D = canvas.getContext("2d");
    ctx2D.drawImage(img, 0, 0);
    let imgData = ctx2D.getImageData(0, 0, img.width, img.height);
    this.m_pixels = imgData.data;
  }

  createTexByUrl(url = "") {
    let sc = this.getScene();
    let tex = sc.rscene.textureBlock.createImageTex2D(64, 64, false);
    let img = new Image();

    img.onload = evt => {
      this.createColorData(img);
      tex.setDataFromImage(img, 0, 0, 0, false);
    };

    img.src = url;
    return tex;
  }

  openThis() {
    let ME = CoRScene.MouseEvent;

    if (this.m_scene != null) {
      this.m_scene.addEventListener(ME.MOUSE_DOWN, this, this.stMouseDownListener);
    }
  }

  closeThis() {
    let ME = CoRScene.MouseEvent;

    if (this.m_scene != null) {
      this.m_scene.removeEventListener(ME.MOUSE_DOWN, this, this.stMouseDownListener);
    }

    this.m_callback = null;
  }

  stMouseDownListener(evt) {
    let px = evt.mouseX;
    let py = evt.mouseY;
    let pv = this.m_v0;
    pv.setXYZ(px, py, 0);
    this.globalToLocal(pv);

    if (pv.x < 0 || pv.x > this.m_panelW || pv.y < 0 || pv.y > this.m_panelH) {
      this.close();
    } else {
      let dis = this.m_marginWidth;
      pv.x -= dis;
      pv.y -= dis;
      let color = this.getRGBAByXY(pv.x, pv.y);

      if (this.m_callback != null) {
        this.m_callback(color);
      }
    }
  }

  layout() {}

}

exports.ColorPickPanel = ColorPickPanel;

/***/ }),

/***/ "5d8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const UIEntityBase_1 = __webpack_require__("b0fb");

class RectTextTip extends UIEntityBase_1.UIEntityBase {
  constructor() {
    super();
    this.m_pw = 10;
    this.m_ph = 10;
    this.m_rpi = 0;
    this.m_texAtlas = null;
    this.m_tex = null;
    this.m_fontSize = 24;
    this.m_text = "tipsInfo";
    this.premultiplyAlpha = true;
  }

  initialize(uiScene, rpi = 0, fontSize = 24, fontColor = null, bgColor = null) {
    if (this.isIniting()) {
      if (rpi < 0) rpi = 0;
      if (fontSize < 12) fontSize = 12;
      this.m_texAtlas = uiScene.texAtlas;
      this.init();
      this.m_uiScene = uiScene;
      this.m_rpi = rpi;
      let entity = CoEntity.createDisplayEntity();
      let cfg = uiScene.uiConfig;
      let tipsText = cfg.getUIGlobalText().fontFormat.tips;
      this.m_fontSize = tipsText.fontSize; // this.m_fontColor = fontColor == null ? CoMaterial.createColor4().setRGB3Bytes(170, 170, 170) : fontColor;

      this.m_fontColor = fontColor == null ? cfg.createColorByData(tipsText.fontColor) : fontColor;
      this.m_bgColor = bgColor == null ? CoMaterial.createColor4(0.1, 0.1, 0.1, 0.5) : bgColor;
      let img = this.m_texAtlas.createCharsImage(this.m_text, this.m_fontSize, this.m_fontColor, this.m_bgColor);
      this.m_tex = uiScene.rscene.textureBlock.createImageTex2D(img.width, img.height);
      this.m_tex.setDataFromImage(img);
      this.m_tex.flipY = true;
      this.m_tex.premultiplyAlpha = true;
      this.m_tex.minFilter = CoRScene.TextureConst.LINEAR;
      this.m_tex.magFilter = CoRScene.TextureConst.NEAREST;
      let material = this.createMaterial(this.m_tex);
      CoMesh.plane.setBufSortFormat(material.getBufSortFormat());
      let mesh = CoMesh.plane.createXOY(0, 0, 1.0, 1.0);
      this.m_pw = img.width;
      this.m_ph = img.height;
      entity.setMaterial(material);
      entity.setMesh(mesh);
      this.m_entities.push(entity);
      this.applyRST(entity);
      this.setScaleXY(img.width, img.height); // this.m_uiScene.addEntity(this, this.m_rpi);
      // this.setVisible(false);
    }
  }

  addEntity(entity) {
    if (entity != null) {
      const ME = CoRScene.MouseEvent;
      entity.addEventListener(ME.MOUSE_OUT, this, this.targetMouseOut);
      entity.addEventListener(ME.MOUSE_OVER, this, this.targetMouseOver);
      entity.addEventListener(ME.MOUSE_MOVE, this, this.targetMouseMove);
    }
  }

  removeEntity(entity) {
    if (entity != null) {
      const ME = CoRScene.MouseEvent;
      entity.removeEventListener(ME.MOUSE_OUT, this, this.targetMouseOut);
      entity.removeEventListener(ME.MOUSE_OVER, this, this.targetMouseOver);
      entity.removeEventListener(ME.MOUSE_MOVE, this, this.targetMouseMove);
    }
  }

  moveTar(tar, mx, my) {
    let bounds = tar.getGlobalBounds();
    let info = tar.info;
    let pv = info.getPos(mx, my, bounds, this.getGlobalBounds(), this.m_uiScene.getRect());
    this.setXY(pv.x, pv.y);
    this.update();
  }

  targetMouseOver(evt) {
    if (this.getScene() == null) {
      this.m_uiScene.addEntity(this, this.m_rpi);
    }

    this.setVisible(true);
    let tar = evt.currentTarget;
    this.setText(tar.info.getCotent());
    this.moveTar(tar, evt.mouseX, evt.mouseY);
  }

  targetMouseMove(evt) {
    let tar = evt.currentTarget;
    this.moveTar(tar, evt.mouseX, evt.mouseY);
  }

  targetMouseOut(evt) {
    this.setVisible(false); // this.m_uiScene.removeEntity(this);
  }

  setText(text) {
    if (this.m_tex != null && text != "" && this.m_text != text) {
      this.m_text = text;
      let img = this.m_texAtlas.createCharsImage(text, this.m_fontSize, this.m_fontColor, this.m_bgColor);
      this.m_tex.setDataFromImage(img, 0, 0, 0, true);
      this.m_tex.updateDataToGpu();
      this.m_pw = img.width;
      this.m_ph = img.height;
      this.setScaleXY(img.width, img.height);
    }
  }

  getText() {
    return this.m_text;
  }

  destroy() {
    super.destroy();
    this.m_uiScene = null;

    if (this.m_tex != null) {
      // this.m_tex.__$detachThis();
      this.m_tex = null;
    }

    this.m_texAtlas = null;
  }

}

exports.RectTextTip = RectTextTip;

/***/ }),

/***/ "5e13":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const UIEntityBase_1 = __webpack_require__("b0fb");

class UIEntityContainer extends UIEntityBase_1.UIEntityBase {
  constructor() {
    super();
    this.m_uientities = [];
  }

  init() {
    if (this.isIniting()) {
      super.init();
      this.m_rcontainer = CoRScene.createDisplayEntityContainer();
    }
  }

  addedEntity(entity) {}

  removedEntity(entity) {}

  update() {
    for (let i = 0; i < this.m_uientities.length; ++i) {
      this.m_uientities[i].update();
    }

    if (this.m_rcontainer != null) {
      this.m_rcontainer.update();
    }

    super.update();
  }

  addEntity(entity) {
    if (entity != null) {
      let i = 0;

      for (; i < this.m_uientities.length; ++i) {
        if (this.m_uientities[i] == entity) break;
      }

      if (i >= this.m_uientities.length) {
        this.m_uientities.push(entity);
        entity.update();
        let container = entity.getRContainer();

        if (container != null) {
          this.m_rcontainer.addChild(container);
        }

        let ls = entity.getREntities();

        for (let k = 0; k < ls.length; ++k) {
          this.m_rcontainer.addEntity(ls[k]);
        }

        this.addedEntity(entity);
      }
    }
  }

  removeEntity(entity) {
    if (entity != null) {
      let i = 0;

      for (; i < this.m_uientities.length; ++i) {
        if (this.m_uientities[i] == entity) {
          this.m_uientities.splice(i, 1);
          let container = entity.getRContainer();

          if (container != null) {
            this.m_rcontainer.removeChild(container);
          }

          let ls = entity.getREntities();

          for (let k = 0; k < ls.length; ++k) {
            this.m_rcontainer.removeEntity(ls[k]);
          }

          this.removedEntity(entity);
          break;
        }
      }
    }
  }

  globalToLocal(pv) {
    this.m_rcontainer.globalToLocal(pv);
  }

  localToGlobal(pv) {
    this.m_rcontainer.localToGlobal(pv);
  }

  getEneitysTotal() {
    return this.m_uientities.length;
  }

}

exports.UIEntityContainer = UIEntityContainer;

/***/ }),

/***/ "67d8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const UIEntityBase_1 = __webpack_require__("b0fb");

class ClipLabelBase extends UIEntityBase_1.UIEntityBase {
  constructor() {
    super();
    this.m_index = 0;
    this.m_total = 0;
    this.m_step = 6;
    this.m_vtCount = 0;
    this.m_sizes = null;
    this.uuid = "label";
  }

  createVS(startX, startY, pwidth, pheight) {
    let minX = startX;
    let minY = startY;
    let maxX = startX + pwidth;
    let maxY = startY + pheight;
    let pz = 0.0;
    return [minX, minY, pz, maxX, minY, pz, maxX, maxY, pz, minX, maxY, pz];
  }

  setClipIndex(i) {}

  setCircleClipIndex(i) {
    i %= this.m_total;
    i += this.m_total;
    i %= this.m_total;
    this.setClipIndex(i);
  }

  getClipIndex() {
    return this.m_index;
  }

  getClipsTotal() {
    return this.m_total;
  }

  getClipWidthAt(i) {
    if (this.m_sizes != null) {
      if (i >= 0 && i < this.m_total) {
        i = i << 1;
        return this.m_sizes[i];
      }
    } else {
      return this.m_width;
    }
  }

  getClipHeightAt(i) {
    if (this.m_sizes != null) {
      if (i >= 0 && i < this.m_total) {
        i = i << 1;
        return this.m_sizes[i + 1];
      }
    } else {
      return this.m_height;
    }
  }

  getClipWidth() {
    return this.m_width;
  }

  getClipHeight() {
    return this.m_height;
  }
  /*
  getWidth(): number {
      return this.m_width * this.m_sx;
  }
  getHeight(): number {
      return this.m_height * this.m_sy;
  }
    setPosition(pv: IVector3D): void {
      this.m_pos.copyFrom(pv);
      let ls = this.m_entities;
      for (let i = 0; i < ls.length; ++i) {
          ls[i].setPosition(pv);
      }
  }
  setX(x: number): void {
      this.m_pos.x = x;
      this.setPosition(this.m_pos);
  }
  setY(y: number): void {
      this.m_pos.y = y;
      this.setPosition(this.m_pos);
  }
  setZ(z: number): void {
      this.m_pos.z = z;
      this.setPosition(this.m_pos);
  }
  getX(): number {
      return this.m_pos.x;
  }
  getY(): number {
      return this.m_pos.y;
  }
  getZ(): number {
      return this.m_pos.z;
  }
  setXY(px: number, py: number): void {
      this.m_pos.x = px;
      this.m_pos.y = py;
      this.setPosition(this.m_pos);
  }
  getPosition(pv: IVector3D): void {
      pv.copyFrom(this.m_pos);
  }
  setRotation(r: number): void {
      this.m_rotation = r;
      let ls = this.m_entities;
      for (let i = 0; i < ls.length; ++i) {
          ls[i].setRotationXYZ(0, 0, r);
      }
  }
  getRotation(): number {
      return this.m_rotation;
  }
  setScaleXYZ(sx: number, sy: number, sz: number): void {
      let ls = this.m_entities;
      for (let i = 0; i < ls.length; ++i) {
          ls[i].setScaleXYZ(sx, sy, sz);
      }
  }
  setScaleXY(sx: number, sy: number): void {
      this.m_sx = sx;
      this.m_sy = sy;
      this.setScaleXYZ(sx, sy, 1.0);
  }
  setScaleX(sx: number): void {
      this.m_sx = sx;
      this.setScaleXYZ(this.m_sx, this.m_sy, 1.0);
  }
  setScaleY(sy: number): void {
      this.m_sy = sy;
      this.setScaleXYZ(this.m_sx, this.m_sy, 1.0);
  }
  getScaleX(): number {
      return this.m_sx;
  }
  getScaleY(): number {
      return this.m_sy;
  }
  
  copyTransformFrom(src: IUIEntity): void {
      if(src != null) {
          if(this.m_v0 == null) {
              this.m_v0 = CoMath.createVec3();
          }
          let sx = src.getScaleX();
          let sy = src.getScaleY();
          let r = src.getRotation();
          this.setScaleXY(sx, sy);
          this.setRotation(r);
          src.getPosition( this.m_v0 );
          this.setPosition( this.m_v0 );
      }
  }
  // /**
  //  * get renderable entities for renderer scene
  //  * @returns ITransformEntity instance list
  //  */
  // getREntities(): ITransformEntity[] {
  // 	return this.m_entities.slice(0);
  // }
  // getRContainer(): IDisplayEntityContainer {
  // 	return null;
  // }
  // update(): void {
  // 	let ls = this.m_entities;
  // 	for (let i = 0; i < ls.length; ++i) {
  // 		ls[i].update();
  // 	}
  // }
  // destroy(): void {
  // 	this.m_sizes = null;
  // 	this.m_total = 0;
  // 	let ls = this.m_entities;
  // 	if (ls != null) {
  // 		for (let i = 0; i < ls.length; ++i) {
  // 			ls[i].update();
  // 		}
  // 	}
  // }


  destroy() {
    this.m_sizes = null;
    this.m_total = 0;
    super.destroy();
  }

}

exports.ClipLabelBase = ClipLabelBase;

/***/ }),

/***/ "8351":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const LayouterBase_1 = __webpack_require__("10ee");

class RightBottomLayouter extends LayouterBase_1.LayouterBase {
  constructor() {
    super();
    this.m_offsetvs = [];
  }

  update(rect) {
    const ls = this.m_entities;
    const len = ls.length;
    let pv = CoMath.createVec3();

    for (let i = 0; i < len; ++i) {
      pv.copyFrom(this.m_offsetvs[i]);
      pv.x = rect.width - pv.x;
      pv.addBy(this.m_offsetV);
      ls[i].setPosition(pv);
      ls[i].update();
    }
  }

  initEntityLayout(entity, initRect) {
    let pv = CoMath.createVec3();
    entity.getPosition(pv);
    pv.x = initRect.width - pv.x; // pv.y = initRect.height - pv.y;

    this.m_offsetvs.push(pv);
  }

  destroy() {
    this.m_offsetvs = null;
    super.destroy();
  }

}

exports.RightBottomLayouter = RightBottomLayouter;

/***/ }),

/***/ "85be":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const UIEntityBase_1 = __webpack_require__("b0fb");

class ColorClipLabel extends UIEntityBase_1.UIEntityBase {
  constructor() {
    super();
    this.m_index = 0;
    this.m_total = 0;
    this.m_colors = null;
    this.m_hasTex = true;
    this.m_lb = null;
    this.m_ilb = null;
    this.uuid = "colorClipLabel";
  }

  hasTexture() {
    return this.m_hasTex;
  }

  setIconLabel(label) {
    this.m_ilb = label;
  }

  getIconLabel() {
    return this.m_ilb;
  }

  initialize(label, colorsTotal) {
    if (this.isIniting() && colorsTotal > 0) {
      this.init();
      this.m_lb = label;
      let colors = new Array(colorsTotal);

      for (let i = 0; i < colorsTotal; ++i) {
        colors[i] = CoMaterial.createColor4();
      }

      this.m_colors = colors;
      this.m_total = colorsTotal;
      this.setClipIndex(0);
    }
  }

  getColorAt(i) {
    if (i >= 0 && i < this.m_total) {
      return this.m_colors[i];
    }
  }

  setColorAt(i, color4) {
    if (i >= 0 && i < this.m_total && color4 != null) {
      this.m_colors[i].copyFrom(color4);
    }
  }

  setClipIndex(i) {
    if (i >= 0 && i < this.m_total) {
      this.m_index = i;
      this.m_lb.setColor(this.m_colors[i]);
    }
  }

  setCircleClipIndex(i) {
    i %= this.m_total;
    i += this.m_total;
    i %= this.m_total;
    this.setClipIndex(i);
  }

  getClipIndex() {
    return this.m_index;
  }

  getClipsTotal() {
    return this.m_total;
  }

  setLabelClipIndex(i) {
    this.m_lb.setClipIndex(i);
  }

  getLabelClipIndex() {
    return this.m_lb.getClipIndex();
  }

  setLabelCircleClipIndex(i) {
    this.m_lb.setCircleClipIndex(i);
  }

  getLabelClipsTotal() {
    return this.m_lb.getClipsTotal();
  }

  getColors() {
    return this.m_colors;
  }

  getClipWidth() {
    return this.m_lb.getClipHeight();
  }

  getClipHeight() {
    return this.m_lb.getClipWidth();
  }

  copyTransformFrom(src) {
    if (src != null) {
      let sx = src.getScaleX();
      let sy = src.getScaleY();
      let r = src.getRotation();
      this.setScaleXY(sx, sy);
      this.setRotation(r);
      src.getPosition(this.m_v0);
      this.setPosition(this.m_v0);
    }
  }
  /**
   * get renderable entities for renderer scene
   * @returns ITransformEntity instance list
   */


  getREntities() {
    if (this.m_ilb != null) {
      let ls = this.m_lb.getREntities();
      return ls.concat(this.m_ilb.getREntities());
    }

    return this.m_lb.getREntities();
  }

  getRContainer() {
    return null;
  }

  update() {
    this.m_bounds.reset();
    let sv = this.m_scaleV;
    let b = this.m_lb;
    b.setRotation(this.m_rotation);
    b.setScaleXY(sv.x, sv.y);
    b.setPosition(this.m_pos);
    b.update();
    this.m_bounds.union(b.getGlobalBounds());
    b = this.m_ilb;

    if (b != null) {
      b.copyTransformFrom(this.m_lb);
      b.update();
      this.m_bounds.union(b.getGlobalBounds());
    }

    this.m_bounds.updateFast();
  }

  destroy() {
    this.m_colors = null;
    this.m_total = 0;
    let b = this.m_lb;

    if (b != null) {
      b.destroy();
      b = null;
    }

    b = this.m_ilb;

    if (b != null) {
      b.destroy();
      b = null;
    }

    super.destroy();
  }

}

exports.ColorClipLabel = ColorClipLabel;

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

/***/ "88ee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const ClipLabel_1 = __webpack_require__("3914");

const ClipColorLabel_1 = __webpack_require__("bb62");

const ColorClipLabel_1 = __webpack_require__("85be");

const ColorLabel_1 = __webpack_require__("3f49");

const TextLabel_1 = __webpack_require__("1dd7");

const Button_1 = __webpack_require__("eb56");

const FlagButton_1 = __webpack_require__("ff8d");

const ButtonBuilder_1 = __webpack_require__("2870");

const SelectButtonGroup_1 = __webpack_require__("39ac");

const CoUIScene_1 = __webpack_require__("f7eb");

const RectTextTip_1 = __webpack_require__("5d8c");

const TipInfo_1 = __webpack_require__("14e2");

const UILayout_1 = __webpack_require__("e9cf");

const PromptPanel_1 = __webpack_require__("ccfe");

const UIPanel_1 = __webpack_require__("af66");

const PromptSystem_1 = __webpack_require__("3f7d");

const TipsSystem_1 = __webpack_require__("1389");

const PanelSystem_1 = __webpack_require__("dd4e");

function createColorLabel() {
  return new ColorLabel_1.ColorLabel();
}

exports.createColorLabel = createColorLabel;

function createRectTextTip() {
  return new RectTextTip_1.RectTextTip();
}

exports.createRectTextTip = createRectTextTip;

function createClipLabel() {
  return new ClipLabel_1.ClipLabel();
}

exports.createClipLabel = createClipLabel;

function createClipColorLabel() {
  return new ClipColorLabel_1.ClipColorLabel();
}

exports.createClipColorLabel = createClipColorLabel;

function createColorClipLabel() {
  return new ColorClipLabel_1.ColorClipLabel();
}

exports.createColorClipLabel = createColorClipLabel;

function createTextLabel() {
  return new TextLabel_1.TextLabel();
}

exports.createTextLabel = createTextLabel;

function createButton() {
  return new Button_1.Button();
}

exports.createButton = createButton;

function createFlagButton() {
  return new FlagButton_1.FlagButton();
}

exports.createFlagButton = createFlagButton;

function createSelectButtonGroup() {
  return new SelectButtonGroup_1.SelectButtonGroup();
}

exports.createSelectButtonGroup = createSelectButtonGroup;

function createTextButton(width, height, idns, texAtlas, textParam, colors) {
  return ButtonBuilder_1.ButtonBuilder.createTextButton(width, height, idns, texAtlas, textParam, colors);
}

exports.createTextButton = createTextButton;

function createUIPanel() {
  return new UIPanel_1.UIPanel();
}

exports.createUIPanel = createUIPanel;

function createPromptPanel() {
  return new PromptPanel_1.PromptPanel();
}

exports.createPromptPanel = createPromptPanel;

function createUIScene(uiConfig = null, crscene = null, atlasSize = 512, renderProcessesTotal = 3) {
  let uisc = new CoUIScene_1.CoUIScene();

  if (crscene != null) {
    uisc.initialize(crscene, atlasSize, renderProcessesTotal);
  }

  uisc.uiConfig = uiConfig;

  if (uiConfig != null) {
    let promptSys = new PromptSystem_1.PromptSystem();
    promptSys.initialize(uisc);
    uisc.prompt = promptSys;
    let tipsSys = new TipsSystem_1.TipsSystem();
    tipsSys.initialize(uisc);
    uisc.tips = tipsSys;
    let panelSys = new PanelSystem_1.PanelSystem();
    panelSys.initialize(uisc);
    uisc.panel = panelSys;
  }

  return uisc;
}

exports.createUIScene = createUIScene;

function createTipInfo() {
  return new TipInfo_1.TipInfo();
}

exports.createTipInfo = createTipInfo;

function createUILayout() {
  return new UILayout_1.UILayout();
}

exports.createUILayout = createUILayout;

/***/ }),

/***/ "ab08":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class AxisAlignCalc {
  constructor() {}

  calcRange(size, factor = 0.7, centerPercent = 0.5) {
    if (centerPercent < 0.0) centerPercent = 0.0;else if (centerPercent > 1.0) centerPercent = 1.0;
    if (factor < 0.0) factor = 0.0;else if (factor > 1.0) factor = 1.0;
    let content = size * (1.0 - factor);
    let p = centerPercent * size;
    let max = p + content * 0.5;
    if (max > size) max = size;
    let min = max - content;
    return [min, max];
  }

  avgLayout(sizes, min, max, minGap = -1) {
    if (sizes != null && sizes.length > 0) {
      let len = sizes.length;

      switch (len) {
        case 1:
          let px = 0.5 * (max - min) + min;
          return [px - 0.5 * sizes[0]];
          break;

        default:
          return this.calcAvgMulti(sizes, min, max, minGap);
          break;
      }
    }

    return null;
  }

  calcAvgLayout(itemSizes, bgSize, marginFactor = 0.7, centerPercent = 0.5) {
    let range = this.calcRange(bgSize, marginFactor, centerPercent);
    return this.avgLayout(itemSizes, range[0], range[1]);
  }

  calcAvgFixLayout(itemSizes, bgSize, minGap = 10.0, marginFactor = 0.7, centerPercent = 0.5) {
    let range = this.calcRange(bgSize, marginFactor, centerPercent);
    return this.avgLayout(itemSizes, range[0], range[1], minGap);
  }

  calcAvgMulti(sizes, min, max, minGap = -1) {
    let dis = max - min;
    let len = sizes.length;
    let size = 0.0;

    for (let i = 0; i < len; i++) {
      size += sizes[i];

      if (minGap > 0.0 && i > 0) {
        size += minGap;
      }
    }

    let list = new Array(len);
    list[0] = min;
    list[len - 1] = max - sizes[len - 1];

    if (len > 2) {
      if (size < dis) {
        let dl = (dis - size) / (len - 1);
        len--;

        for (let i = 1; i < len; i++) {
          list[i] = list[i - 1] + sizes[i - 1] + dl;
        }
      } else {
        if (minGap <= 0.0) {
          let p0 = list[0] + 0.5 * sizes[0];
          dis = list[len - 1] + 0.5 * sizes[len - 1] - p0;
          let dl = dis / (len - 1);
          p0 += dl;
          len--;

          for (let i = 1; i < len; i++) {
            list[i] = p0;
            p0 += dl;
          }
        }
      }
    }

    if (size >= dis) {
      if (minGap > 0.0) {
        let p0 = dis * 0.5 + min - (size + (len - 1) * minGap) * 0.5;

        for (let i = 0; i < len; i++) {
          list[i] = p0;
          p0 += sizes[i] + minGap;
        }
      }
    }

    return list;
  }

}

exports.AxisAlignCalc = AxisAlignCalc;

/***/ }),

/***/ "af66":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const UIEntityContainer_1 = __webpack_require__("5e13");

const ColorLabel_1 = __webpack_require__("3f49");

class UIPanel extends UIEntityContainer_1.UIEntityContainer {
  constructor() {
    super();
    this.m_panelW = 100;
    this.m_panelH = 150;
    this.m_isOpen = false;
    this.autoLayout = true;
    this.m_openListener = null;
    this.m_closeListener = null;
    this.m_panelBuilding = true;
  }

  setSize(pw, ph) {
    this.m_panelW = pw;
    this.m_panelH = ph;
  }

  setBGColor(c) {
    if (this.m_bgColor == null) this.m_bgColor = CoMaterial.createColor4();
    this.m_bgColor.copyFrom(c);

    if (this.m_bgLabel != null) {
      this.m_bgLabel.setColor(c);
    }

    return this;
  } // initialize(scene: ICoUIScene, rpi: number, panelW: number, panelH: number): void {
  // 	if (this.isIniting()) {
  // 		this.init();
  // 		this.m_scene = scene;
  // 		this.m_rpi = rpi;
  // 		this.m_panelW = panelW;
  // 		this.m_panelH = panelH;
  // 		this.m_bgColor = CoMaterial.createColor4();
  // 	}
  // }


  init() {
    if (this.isIniting()) {
      if (this.m_bgColor == null) this.m_bgColor = CoMaterial.createColor4();
      super.init();
    }
  }

  setUIscene(scene, rpi = -1) {
    if (this.m_scene == null && scene != null) {
      this.m_scene = scene;
      if (rpi >= 0) this.m_rpi = rpi;
      this.init();
    }
  }

  openThis() {}

  closeThis() {}

  setOpenAndLoseListener(openListener, closeListener) {
    this.m_openListener = openListener;
    this.m_closeListener = closeListener;
  }

  open(uiscene = null, rpi = -1) {
    if (!this.m_isOpen) {
      if (this.isIniting()) {
        this.init();
      }

      if (uiscene != null) this.m_scene = uiscene;
      if (rpi >= 0) this.m_rpi = rpi;
      this.m_scene.addEntity(this, this.m_rpi);
      this.m_isOpen = true;
      this.setVisible(true);
      this.openThis();

      if (this.autoLayout) {
        this.addLayoutEvt();
        this.layout();
      }

      if (this.m_openListener != null) {
        this.m_openListener();
      }
    }
  }

  isOpen() {
    return this.m_isOpen;
  }

  close() {
    if (this.m_isOpen) {
      this.m_scene.removeEntity(this);
      this.m_isOpen = false;
      this.setVisible(false);
      this.removeLayoutEvt();
      this.closeThis();

      if (this.m_closeListener != null) {
        this.m_closeListener();
      }
    }
  }

  destroy() {
    super.destroy();
    this.m_panelBuilding = true;

    if (this.m_bgLabel != null) {
      this.m_bgLabel.destroy();
      this.m_bgLabel = null;
    }

    this.m_openListener = null;
    this.m_closeListener = null;
  }

  buildPanel(pw, ph) {}

  updateScene() {
    let sc = this.getScene();

    if (sc != null && this.m_panelBuilding && this.m_bgLabel == null) {
      this.m_panelBuilding = false;
      let pw = this.m_panelW;
      let ph = this.m_panelH;
      let bgLabel = this.createBG(pw, ph);
      this.buildPanel(pw, ph);
      this.addEntity(bgLabel);
      this.setVisible(this.m_isOpen);

      if (this.m_isOpen) {
        this.addLayoutEvt();
        this.layout();
      }
    }
  }

  addLayoutEvt() {
    if (this.autoLayout) {
      let sc = this.getScene();

      if (sc != null) {
        let EB = CoRScene.EventBase;
        sc.addEventListener(EB.RESIZE, this, this.resize);
      }
    }
  }

  removeLayoutEvt() {
    if (this.autoLayout) {
      let sc = this.getScene();

      if (sc != null) {
        let EB = CoRScene.EventBase;
        sc.removeEventListener(EB.RESIZE, this, this.resize);
      }
    }
  }

  createBG(pw, ph) {
    let bgLabel = new ColorLabel_1.ColorLabel();
    bgLabel.depthTest = true;
    bgLabel.initialize(pw, ph);
    bgLabel.setZ(-0.1);
    bgLabel.setColor(this.m_bgColor);
    this.m_bgLabel = bgLabel;
    this.initializeEvent(bgLabel.getREntities()[0]);
    return bgLabel;
  }

  initializeEvent(entity, uuid = "uiPlane") {
    const me = CoRScene.MouseEvent;
    let dpc = CoRScene.createMouseEvt3DDispatcher();
    dpc.currentTarget = this;
    dpc.uuid = uuid;
    dpc.addEventListener(me.MOUSE_OVER, this, this.mouseOverListener);
    dpc.addEventListener(me.MOUSE_OUT, this, this.mouseOutListener);
    entity.setEvtDispatcher(dpc);
    entity.mouseEnabled = true;
  }

  mouseOverListener(evt) {// console.log("mouseOverListener() ...");
  }

  mouseOutListener(evt) {// console.log("mouseOutListener() ...");
  }

  resize(evt) {
    this.layout();
  }

  layout() {
    let sc = this.getScene();

    if (sc != null) {
      this.update();
      let rect = sc.getRect();
      let px = Math.round(rect.x + (rect.width - this.getWidth()) * 0.5);
      let py = Math.round(rect.y + (rect.height - this.getHeight()) * 0.5);
      this.setXY(px, py);
      this.update();
    }
  }

}

exports.UIPanel = UIPanel;

/***/ }),

/***/ "b0fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class UIEntityBase {
  constructor() {
    this.m_sc = null;
    this.m_parent = null;
    this.m_rotation = 0;
    this.m_visible = true;
    this.m_entities = [];
    this.m_width = 0;
    this.m_height = 0;
    this.m_v0 = null;
    this.m_bounds = null;
    this.m_rcontainer = null;
    this.premultiplyAlpha = false;
    this.transparent = false;
    this.info = null;
    this.depthTest = false;
  }

  init() {
    if (this.isIniting()) {
      this.m_pos = CoMath.createVec3();
      this.m_scaleV = CoMath.createVec3(1.0, 1.0, 1.0);
      this.m_v0 = CoMath.createVec3();
      this.m_bounds = CoMath.createAABB();
    }
  }

  isIniting() {
    return this.m_bounds == null;
  }

  createMaterial(tex = null) {
    let material = CoMaterial.createDefaultMaterial();
    material.premultiplyAlpha = this.premultiplyAlpha;

    if (tex != null) {
      material.setTextureList([tex]);
    }

    material.initializeByCodeBuf(tex != null);
    return material;
  }

  applyRST(entity) {
    const RST = CoRScene.RendererState;

    if (this.transparent) {
      if (this.premultiplyAlpha) {
        // entity.setRenderState(RST.BACK_ALPHA_ADD_BLENDSORT_STATE);
        entity.setRenderState(RST.BACK_ALPHA_ADD_ALWAYS_STATE);
      } else {
        if (this.depthTest) {
          entity.setRenderState(RST.BACK_TRANSPARENT_STATE);
        } else {
          entity.setRenderState(RST.BACK_TRANSPARENT_ALWAYS_STATE);
        }
      }
    } else {
      if (this.depthTest) {
        entity.setRenderState(RST.NORMAL_STATE);
      } else {
        entity.setRenderState(RST.BACK_NORMAL_ALWAYS_STATE);
      }
    }
  }

  createVS(startX, startY, pwidth, pheight) {
    let minX = startX;
    let minY = startY;
    let maxX = startX + pwidth;
    let maxY = startY + pheight;
    let pz = 0.0;
    return [minX, minY, pz, maxX, minY, pz, maxX, maxY, pz, minX, maxY, pz];
  }

  updateScene() {}

  updateParent() {}

  __$setScene(sc) {
    if (this.m_sc != sc) {
      this.m_sc = sc;
      this.updateScene();
    }
  }

  getScene() {
    return this.m_sc;
  }

  setParent(parent) {
    if (parent != this) {
      this.m_parent = parent;
      this.updateParent();
    }

    return this;
  }

  getParent() {
    return this.m_parent;
  }

  getGlobalBounds() {
    return this.m_bounds;
  }

  setVisible(v) {
    this.m_visible = v;
    let ls = this.m_entities;

    for (let i = 0; i < ls.length; ++i) {
      ls[i].setVisible(v);
    }

    if (this.m_rcontainer != null) {
      this.m_rcontainer.setVisible(v);
    }
  }

  isVisible() {
    return this.m_visible;
  }

  getWidth() {
    return this.m_bounds.getWidth();
  }

  getHeight() {
    return this.m_bounds.getHeight();
  }

  setPosition(pv) {
    this.m_pos.copyFrom(pv);
  }

  setX(x) {
    this.m_pos.x = x;
  }

  setY(y) {
    this.m_pos.y = y;
  }

  setZ(z) {
    this.m_pos.z = z;
  }

  getX() {
    return this.m_pos.x;
  }

  getY() {
    return this.m_pos.y;
  }

  getZ() {
    return this.m_pos.z;
  }

  setXY(px, py) {
    this.m_pos.x = px;
    this.m_pos.y = py;
  }

  getPosition(pv) {
    pv.copyFrom(this.m_pos);
    return pv;
  }

  setRotation(r) {
    this.m_rotation = r;
  }

  getRotation() {
    return this.m_rotation;
  }

  setScaleXYZ(sx, sy, sz) {
    this.m_scaleV.setXYZ(sx, sy, sz);
  }

  setScaleXY(sx, sy) {
    this.setScaleXYZ(sx, sy, 1.0);
  }

  setScaleX(sx) {
    this.m_scaleV.x = sx;
  }

  setScaleY(sy) {
    this.m_scaleV.y = sy;
  }

  getScaleX() {
    return this.m_scaleV.x;
  }

  getScaleY() {
    return this.m_scaleV.y;
  }

  copyTransformFrom(src) {
    if (src != null) {
      let sx = src.getScaleX();
      let sy = src.getScaleY();
      let r = src.getRotation();
      this.setScaleXY(sx, sy);
      this.setRotation(r);
      src.getPosition(this.m_v0);
      this.setPosition(this.m_v0);
    }
  }
  /**
   * get renderable entities for renderer scene
   * @returns ITransformEntity instance list
   */


  getREntities() {
    return this.m_entities.slice(0);
  }

  getRContainer() {
    return this.m_rcontainer;
  }

  updateEntity(e) {
    // console.log("XXXXX UIEntiyBase::this.m_pos: ", this.m_pos, e);
    e.setPosition(this.m_pos);
    e.setScale3(this.m_scaleV);
    e.setRotationXYZ(0.0, 0.0, this.m_rotation);
    e.update();
    this.m_bounds.union(e.getGlobalBounds());
  }

  update() {
    let ls = this.m_entities;
    let bs = this.m_bounds;
    this.m_bounds.reset();

    for (let i = 0; i < ls.length; ++i) {
      // let e = ls[i];
      // e.setPosition(this.m_pos);
      // e.setScale3(this.m_scaleV);
      // e.setRotationXYZ(0.0, 0.0, this.m_rotation);
      // e.update();
      // bs.union(e.getGlobalBounds());
      this.updateEntity(ls[i]);
    }

    if (this.m_rcontainer != null) {
      this.updateEntity(this.m_rcontainer);
    }

    bs.updateFast();
  }

  destroy() {
    let sc = this.m_sc;

    if (sc != null) {
      sc.removeEntity(this);
    }

    this.m_rcontainer = null;
    this.m_sc = null;
    this.m_parent = null;
    this.m_bounds = null;
    let ls = this.m_entities;

    for (let i = 0; i < ls.length; ++i) {
      ls[i].destroy();
    }

    ls = [];
  }

}

exports.UIEntityBase = UIEntityBase;

/***/ }),

/***/ "b997":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const LayouterBase_1 = __webpack_require__("10ee");

class FreeLayouter extends LayouterBase_1.LayouterBase {
  constructor() {
    super();
    this.m_offsetvs = [];
  }

  update(rect) {
    const ls = this.m_entities;
    const len = ls.length;
    let pv = CoMath.createVec3();

    for (let i = 0; i < len; ++i) {
      ls[i].getPosition(pv).addBy(this.m_offsetV);
      ls[i].setPosition(pv);
      ls[i].update();
    }
  }

  initEntityLayout(entity, initRect) {
    let pv = CoMath.createVec3();
    entity.getPosition(pv);
    pv.y = initRect.height - pv.y;
    this.m_offsetvs.push(pv);
  }

  destroy() {
    this.m_offsetvs = null;
    super.destroy();
  }

}

exports.FreeLayouter = FreeLayouter;

/***/ }),

/***/ "bb62":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const ClipLabelBase_1 = __webpack_require__("67d8");

class ClipColorLabel extends ClipLabelBase_1.ClipLabelBase {
  constructor() {
    super(...arguments);
    this.m_colors = null;
    this.m_material = null;
    this.m_fixSize = true;
    this.m_hasTex = false;
  }

  createMesh(atlas, idns) {
    let ivs = new Uint16Array([0, 1, 2, 0, 2, 3]);
    let vs = new Float32Array(this.createVS(0, 0, this.m_width, this.m_height));
    let mesh = CoMesh.createRawMesh();
    mesh.reset();
    mesh.setIVS(ivs);
    mesh.addFloat32Data(vs, 3);

    if (idns != "" && atlas != null) {
      let obj = atlas.getTexObjFromAtlas(idns);
      let uvs = new Float32Array(obj.uvs);
      mesh.addFloat32Data(uvs, 2);
    }

    mesh.initialize();
    return mesh;
  }

  hasTexture() {
    return this.m_hasTex;
  }

  initialize(atlas, idns, colorsTotal) {
    if (this.isIniting() && colorsTotal > 0) {
      this.init();
      this.m_hasTex = false;
      let tex = null;

      if (idns != "" && atlas != null) {
        let obj = atlas.getTexObjFromAtlas(idns);

        if (this.m_fixSize) {
          this.m_width = obj.getWidth();
          this.m_height = obj.getHeight();
        }

        this.m_hasTex = true;
        tex = obj.texture;
      }

      let material = this.createMaterial(tex);
      let mesh = this.createMesh(atlas, idns);
      let et = CoEntity.createDisplayEntity();
      et.setMaterial(material);
      et.setMesh(mesh);
      this.m_entities.push(et);
      this.m_material = material;
      let colors = new Array(colorsTotal);

      for (let i = 0; i < colorsTotal; ++i) {
        colors[i] = CoMaterial.createColor4();
      }

      this.m_colors = colors;
      this.m_total = colorsTotal;
      this.setClipIndex(0);
    }
  }

  initializeWithoutTex(width, height, colorsTotal) {
    this.m_width = width;
    this.m_height = height;
    this.m_fixSize = false;
    this.initialize(null, "", colorsTotal);
  }

  initializeWithSize(width, height, atlas, idns, colorsTotal) {
    if (width > 0 && height > 0) {
      this.m_width = width;
      this.m_height = height;
      this.m_fixSize = false;
      this.initialize(atlas, idns, colorsTotal);
    }
  }

  initializeWithLable(srcLable) {
    if (this.isIniting() && srcLable != null && srcLable != this) {
      if (srcLable.getClipsTotal() < 1) {
        throw Error("Error: srcLable.getClipsTotal() < 1");
      }

      let ls = srcLable.getREntities();

      for (let i = 0; i < ls.length; ++i) {
        let entity = ls[i];
        let mesh = entity.getMesh();
        let tex = entity.getMaterial().getTextureAt(0);
        let n = this.m_total = srcLable.getClipsTotal();
        let src = srcLable.getColors();
        let colors = new Array(n);

        for (let i = 0; i < n; ++i) {
          colors[i] = CoMaterial.createColor4();
          colors[i].copyFrom(src[i]);
        }

        this.m_colors = colors;
        this.m_width = srcLable.getWidth();
        this.m_height = srcLable.getHeight();
        let material = this.createMaterial(tex);
        let et = CoEntity.createDisplayEntity();
        et.setMaterial(material);
        et.setMesh(mesh);
        this.m_entities.push(et);
        if (this.m_material == null) this.m_material = material;
      }

      this.setClipIndex(0);
    }
  }

  displaceFromLable(srcLable) {
    if (srcLable != null && srcLable != this) {
      if (srcLable.getClipsTotal() < 1) {
        throw Error("Error: srcLable.getClipsTotal() < 1");
      } // if (this.m_entities == null) {
      // 	this.initializeWithLable(srcLable);
      // } else if (this.m_entities[0].isRFree()) {
      // }

    }
  }

  getColorAt(i) {
    if (i >= 0 && i < this.m_total) {
      return this.m_colors[i];
    }
  }

  setColorAt(i, color4) {
    if (i >= 0 && i < this.m_total && color4 != null) {
      this.m_colors[i].copyFrom(color4);
    }
  }

  setColors(colors) {
    if (colors != null) {
      let ls = this.m_colors;
      let len = colors.length;

      if (len > ls.length) {
        len = ls.length;
      }

      for (let i = 0; i < len; ++i) {
        ls[i].copyFrom(colors[i]);
      }
    }
  }

  setClipIndex(i) {
    if (i >= 0 && i < this.m_total) {
      this.m_index = i;
      this.m_material.setColor(this.m_colors[i]);
    }
  }

  getColors() {
    return this.m_colors;
  }

}

exports.ClipColorLabel = ClipColorLabel;

/***/ }),

/***/ "ccfe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const TextLabel_1 = __webpack_require__("1dd7");

const UIPanel_1 = __webpack_require__("af66");

const ButtonBuilder_1 = __webpack_require__("2870");

const AxisAlignCalc_1 = __webpack_require__("ab08");

class PromptPanel extends UIPanel_1.UIPanel {
  constructor() {
    super();
    this.m_promptLabel = null;
    this.m_prompt = "Hi,Prompt Panel.";
    this.m_btnW = 90;
    this.m_btnH = 50;
    this.m_confirmFunc = null;
    this.m_cancelFunc = null;
    this.m_cancelBtnVis = true;
    /**
     * 边距留白尺寸
     */

    this.marginWidth = 70;
    /**
     * x轴留白比例
     */

    this.marginXFactor = 0.5;
    /**
     * y轴留白比例
     */

    this.marginYFactor = 0.6;
    this.m_alignCalc = new AxisAlignCalc_1.AxisAlignCalc();
  }

  initialize(scene, rpi, panelW, panelH, btnW, btnH, confirmNS = "Confirm", cancelNS = "Cancel") {
    if (this.isIniting()) {
      this.init();
      this.m_scene = scene;
      this.m_rpi = rpi;
      this.m_panelW = panelW;
      this.m_panelH = panelH;
      this.m_btnW = btnW;
      this.m_btnH = btnH;
      this.m_confirmNS = confirmNS;
      this.m_cancelNS = cancelNS;
      if (this.m_bgColor == null) this.m_bgColor = CoMaterial.createColor4();
    }
  }

  applyConfirmButton() {
    this.m_cancelBtnVis = false;
    let btn = this.m_cancelBtn;

    if (btn != null && !btn.isVisible()) {
      this.m_cancelBtn.setVisible(false);

      if (this.m_confirmBtn != null && this.isOpen()) {
        this.layoutItems();
        this.layout();
      }
    }
  }

  applyAllButtons() {
    this.m_cancelBtnVis = true;

    if (this.m_cancelBtn != null) {
      this.m_cancelBtn.setVisible(true);
    }
  }

  setPrompt(text) {
    if (text != "" && this.m_prompt != text) {
      this.m_prompt = text;
      let pl = this.m_promptLabel;

      if (pl != null) {
        pl.setText(text);
        let px = (this.m_panelW - pl.getWidth()) * 0.5;
        pl.setX(px);
        pl.update();

        if (this.m_confirmBtn != null && this.isOpen()) {
          this.layoutItems();
          this.layout();
        }
      }
    }
  }

  setPromptTextColor(color) {
    let pl = this.m_promptLabel;

    if (pl != null) {
      pl.setColor(color);
    }
  }

  setListener(confirmFunc, cancelFunc) {
    this.m_confirmFunc = confirmFunc;
    this.m_cancelFunc = cancelFunc;
  }

  destroy() {
    super.destroy();
    this.m_confirmFunc = null;
    this.m_cancelFunc = null;

    if (this.m_confirmBtn != null) {
      this.m_confirmBtn.destroy();
      this.m_cancelBtn.destroy();
      this.m_confirmBtn = null;
      this.m_cancelBtn = null;
    }
  }

  buildPanel(pw, ph) {
    this.buildItems();
  }

  buildItems() {
    if (this.m_confirmBtn == null) {
      let sc = this.getScene();
      let tta = sc.transparentTexAtlas;
      let fc4 = CoMaterial.createColor4;
      let cfg = this.m_scene.uiConfig;
      let gColor = cfg.getUIGlobalColor();
      let uiCfg = cfg.getUIPanelCfgByName("promptPanel");
      let keys = uiCfg.btnKeys;
      let btf = uiCfg.btnTextFontFormat;
      let ltf = uiCfg.textFontFormat;
      let textLabel = new TextLabel_1.TextLabel();
      textLabel.depthTest = true;
      textLabel.transparent = true;
      textLabel.premultiplyAlpha = true;
      textLabel.initialize(this.m_prompt, sc, ltf.fontSize);
      let color = fc4();
      color.fromBytesArray3(ltf.fontColor);
      textLabel.setColor(color);
      this.m_promptLabel = textLabel; // console.log("textLabel.getHeight(): ", textLabel.getHeight());

      let ME = CoRScene.MouseEvent;
      let textParam = {
        text: this.m_confirmNS,
        textColor: fc4(),
        fontSize: btf.fontSize,
        font: ""
      };
      textParam.textColor.fromBytesArray3(btf.fontColor);
      let colors = [fc4(), fc4(), fc4(), fc4() //.setRGB3Bytes(80, 80, 80)
      ];
      cfg.applyButtonColor(colors, gColor.button.light);
      let builder = ButtonBuilder_1.ButtonBuilder;
      let confirmBtn = builder.createTextButton(this.m_btnW, this.m_btnH, keys[0], tta, textParam, colors);
      this.m_confirmBtn = confirmBtn;
      textParam.text = this.m_cancelNS;
      let cancelBtn = builder.createTextButton(this.m_btnW, this.m_btnH, keys[1], tta, textParam, colors); // cancelBtn.addEventListener(ME.MOUSE_UP, this, this.btnMouseUpListener);

      this.m_cancelBtn = cancelBtn;
      this.addEntity(cancelBtn);
      this.addEntity(confirmBtn);
      this.addEntity(textLabel);
    }
  }

  updateBgSize() {
    let pw = this.m_panelW;
    let textLabel = this.m_promptLabel;
    textLabel.update();
    let confirmBtn = this.m_confirmBtn;
    confirmBtn.update();
    let cancelBtn = this.m_cancelBtn;
    cancelBtn.update();
    let bw = cancelBtn.isVisible() ? cancelBtn.getWidth() : 0;
    let btw2 = confirmBtn.getWidth() + bw;
    bw = btw2 + Math.round(0.2 * btw2) + this.marginWidth;
    let tw = textLabel.getWidth() + this.marginWidth;
    tw = bw > tw ? bw : tw;
    pw = this.m_panelW = tw;
    let bgLabel = this.m_bgLabel;

    if (Math.abs(bgLabel.getWidth() - pw) > 0.01) {
      bgLabel.setScaleX(1.0);
      bgLabel.update();
      tw = bgLabel.getWidth();
      bgLabel.setScaleX(pw / tw);
      bgLabel.update();
    }
  }

  layoutItems() {
    this.m_cancelBtn.setVisible(this.m_cancelBtnVis);
    this.updateBgSize();
    let pw = this.m_panelW;
    let textLabel = this.m_promptLabel;
    let sizes = [this.m_btnH, textLabel.getHeight()];
    let pyList = this.m_alignCalc.calcAvgFixLayout(sizes, this.m_panelH, 15, this.marginYFactor, 0.5);
    let px = (pw - textLabel.getWidth()) * 0.5;
    textLabel.setXY(px, pyList[1]);
    textLabel.update();

    if (this.m_cancelBtn.isVisible()) {
      this.layoutButtons(px, pyList[0]);
    } else {
      this.layoutOnlyConfirm(px, pyList[0]);
    }
  }

  layoutButtons(px, py) {
    let sizes = [this.m_btnW, this.m_btnW];
    let pxList = this.m_alignCalc.calcAvgFixLayout(sizes, this.m_panelW, 10, this.marginXFactor, 0.5);
    let confirmBtn = this.m_confirmBtn;
    let cancelBtn = this.m_cancelBtn;
    confirmBtn.setXY(pxList[0], py);
    confirmBtn.update();
    cancelBtn.setXY(pxList[1], py);
    cancelBtn.update();
  }

  layoutOnlyConfirm(px, py) {
    let sizes = [this.m_btnW];
    let pxList = this.m_alignCalc.calcAvgFixLayout(sizes, this.m_panelW, 10, this.marginXFactor, 0.5);
    let confirmBtn = this.m_confirmBtn;
    confirmBtn.setXY(pxList[0], py);
    confirmBtn.update();
  }

  openThis() {
    let ME = CoRScene.MouseEvent;

    if (this.m_scene != null) {
      this.m_scene.addEventListener(ME.MOUSE_DOWN, this, this.stMouseDownListener);
      this.m_confirmBtn.addEventListener(ME.MOUSE_UP, this, this.btnMouseUpListener);
      this.m_cancelBtn.addEventListener(ME.MOUSE_UP, this, this.btnMouseUpListener);
      this.layoutItems();
    }
  }

  closeThis() {
    this.m_cancelBtnVis = true;
    let ME = CoRScene.MouseEvent;

    if (this.m_scene != null) {
      this.m_scene.removeEventListener(ME.MOUSE_DOWN, this, this.stMouseDownListener);
      this.m_confirmBtn.removeEventListener(ME.MOUSE_UP, this, this.btnMouseUpListener);
      this.m_cancelBtn.removeEventListener(ME.MOUSE_UP, this, this.btnMouseUpListener);
    }
  }

  stMouseDownListener(evt) {
    console.log("Prompt stMouseDownListener...");
    let px = evt.mouseX;
    let py = evt.mouseY;
    let pv = this.m_v0;
    pv.setXYZ(px, py, 0);
    this.globalToLocal(pv);

    if (pv.x < 0 || pv.x > this.m_panelW || pv.y < 0 || pv.y > this.m_panelH) {
      this.close();
    }
  }

  btnMouseUpListener(evt) {
    console.log("PromptPanel::btnMouseUpListener(), evt.currentTarget: ", evt.currentTarget);
    let uuid = evt.uuid;

    switch (uuid) {
      case "confirm":
        this.close();

        if (this.m_confirmFunc != null) {
          this.m_confirmFunc();
        }

        break;

      case "cancel":
        this.close();

        if (this.m_cancelFunc != null) {
          this.m_cancelFunc();
        }

        break;

      default:
        break;
    }
  }

}

exports.PromptPanel = PromptPanel;

/***/ }),

/***/ "d619":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const LayouterBase_1 = __webpack_require__("10ee");

class LeftTopLayouter extends LayouterBase_1.LayouterBase {
  constructor() {
    super();
    this.m_offsetvs = [];
  }

  update(rect) {
    const ls = this.m_entities;
    const len = ls.length;
    let pv = CoMath.createVec3();

    for (let i = 0; i < len; ++i) {
      pv.copyFrom(this.m_offsetvs[i]);
      pv.y = rect.height - pv.y;
      pv.addBy(this.m_offsetV);
      ls[i].setPosition(pv);
      ls[i].update();
    }
  }

  initEntityLayout(entity, initRect) {
    let pv = CoMath.createVec3();
    entity.getPosition(pv);
    pv.y = initRect.height - pv.y;
    this.m_offsetvs.push(pv);
  }

  destroy() {
    this.m_offsetvs = null;
    super.destroy();
  }

}

exports.LeftTopLayouter = LeftTopLayouter;

/***/ }),

/***/ "dd4e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const ColorPickPanel_1 = __webpack_require__("5870");

class PanelSystem {
  constructor() {
    this.m_colorPickPanel = new ColorPickPanel_1.ColorPickPanel();
    this.m_curPanel = null;
  }

  initialize(uiscene, rpi = 1) {
    if (this.m_uiscene == null) {
      this.m_uiscene = uiscene;
      this.m_colorPickPanel.setBGColor(CoMaterial.createColor4(0.4, 0.4, 0.4));
      this.m_colorPickPanel.initialize(uiscene, rpi, 260, 260, 3);
    }
  }

  getPanelByName(panelName) {
    switch (panelName) {
      case "colorPickPanel":
        return this.m_colorPickPanel;
        break;

      default:
        return null;
        break;
    }
  }

  setXY(panelName, px, py, type = 0) {
    let panel = this.getPanelByName(panelName);

    if (panel != null) {
      panel.setXY(px, py);
    }
  }

  openPanel(panelName, type = 0) {
    let panel = this.getPanelByName(panelName);

    if (panel != null) {
      panel.open();
    }
  }

  closePanel(panelName, type = 0) {
    let panel = this.getPanelByName(panelName);

    if (panel != null) {
      panel.close();
    }
  }

  getPanel(panelName, type = 0) {
    return this.getPanelByName(panelName);
  }

}

exports.PanelSystem = PanelSystem;

/***/ }),

/***/ "e05d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const LayouterBase_1 = __webpack_require__("10ee");

class RightTopLayouter extends LayouterBase_1.LayouterBase {
  constructor() {
    super();
    this.m_offsetvs = [];
  }

  update(rect) {
    const ls = this.m_entities;
    const len = ls.length;
    let pv = CoMath.createVec3();

    for (let i = 0; i < len; ++i) {
      pv.copyFrom(this.m_offsetvs[i]);
      pv.x = rect.width - pv.x;
      pv.y = rect.height - pv.y;
      pv.addBy(this.m_offsetV);
      ls[i].setPosition(pv);
      ls[i].update();
    }
  }

  initEntityLayout(entity, initRect) {
    let pv = CoMath.createVec3();
    entity.getPosition(pv);
    pv.x = initRect.width - pv.x;
    pv.y = initRect.height - pv.y;
    this.m_offsetvs.push(pv);
  }

  destroy() {
    this.m_offsetvs = null;
    super.destroy();
  }

}

exports.RightTopLayouter = RightTopLayouter;

/***/ }),

/***/ "e9cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const LeftTopLayouter_1 = __webpack_require__("d619");

const RightTopLayouter_1 = __webpack_require__("e05d");

const RightBottomLayouter_1 = __webpack_require__("8351");

const FreeLayouter_1 = __webpack_require__("b997");

class UILayout {
  constructor() {
    this.m_layouters = []; // private m_uirsc: IRendererScene = null;
    // private m_stage: IRenderStage3D = null;

    this.m_rect = null;
  }

  createFreeLayouter() {
    let l = new FreeLayouter_1.FreeLayouter();
    this.addLayouter(l);
    return l;
  }

  createLeftTopLayouter() {
    let l = new LeftTopLayouter_1.LeftTopLayouter();
    this.addLayouter(l);
    return l;
  }

  createRightTopLayouter() {
    let l = new RightTopLayouter_1.RightTopLayouter();
    this.addLayouter(l);
    return l;
  }

  createRightBottomLayouter() {
    let l = new RightBottomLayouter_1.RightBottomLayouter();
    this.addLayouter(l);
    return l;
  } // initialize(uirsc: IRendererScene): void {
  // 	if (this.m_uirsc == null && uirsc != null) {
  // 		this.m_uirsc = uirsc;
  // 		this.m_stage = uirsc.getStage3D();
  // 		let st = this.m_stage;
  // 		this.m_rect = CoMath.createAABB2D(0, 0, st.stageWidth, st.stageHeight);
  // 	}
  // }


  initialize(rect) {
    if (rect != null && this.m_rect == null) {
      rect.update();
      this.m_rect = CoMath.createAABB2D(rect.x, rect.y, rect.width, rect.height);
    }
  }

  getAreaRect() {
    return this.m_rect;
  }

  addLayouter(layouter) {
    if (layouter != null) {
      let i = 0;
      let ls = this.m_layouters;

      for (; i < ls.length; ++i) {
        if (ls[i] == layouter) break;
      }

      if (i >= ls.length) {
        ls.push(layouter);
        layouter.initLayout(this.m_rect);
      }
    }
  }

  removeLayouter(layouter) {
    if (layouter != null) {
      let i = 0;
      let ls = this.m_layouters;

      for (; i < ls.length; ++i) {
        if (ls[i] == layouter) {
          ls.splice(i, 1);
          break;
        }
      }
    }
  }
  /**
   * 每次更新都将重新计算
   */


  update(rect) {
    this.m_rect.copyFrom(rect);

    for (let i = 0; i < this.m_layouters.length; ++i) {
      this.m_layouters[i].update(rect);
    }
  }

  destroy() {}

}

exports.UILayout = UILayout;

/***/ }),

/***/ "eb56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const ClipLabel_1 = __webpack_require__("3914");

const UIEntityBase_1 = __webpack_require__("b0fb");

class Button extends UIEntityBase_1.UIEntityBase {
  constructor() {
    super();
    this.m_enabled = true;
    this.m_lb = null;
    this.m_lbs = [];
    this.uuid = "btn";
  }

  addLabel(label) {
    this.m_lbs.push(label);
  }

  enable() {
    if (this.m_dp != null) {
      this.m_dp.enabled = true;
    }

    this.m_enabled = true;
    return this;
  }

  disable() {
    if (this.m_dp != null) {
      this.m_dp.enabled = false;
    }

    this.m_enabled = false;
    return this;
  }

  isEnabled() {
    return this.m_enabled;
  }

  setMouseEnabled(enabled) {
    if (this.m_entities != null) {
      this.m_entities[0].mouseEnabled = enabled;
    }
  }

  isMouseEnabled() {
    return this.m_entities != null && this.m_entities[0].mouseEnabled;
  }

  initialize(atlas, idnsList = null) {
    if (this.isIniting() && atlas != null && idnsList != null) {
      this.init();

      if (idnsList.length != 4) {
        throw Error("Error: idnsList.length != 4");
      }

      let lb = new ClipLabel_1.ClipLabel();
      lb.initialize(atlas, idnsList);
      this.m_lb = lb;
      this.initializeEvent();
      this.m_lb.setClipIndex(0);
    }

    return this;
  }

  initializeWithLable(lable) {
    if (this.isIniting()) {
      this.init();

      if (lable.getClipsTotal() < 1) {
        throw Error("Error: lable.getClipsTotal() < 1");
      }

      this.m_lb = lable;
      this.initializeEvent();
      this.m_lb.setClipIndex(0);
    }

    return this;
  }

  getLable() {
    return this.m_lb;
  }

  initializeEvent() {
    if (this.m_dp == null) {
      const me = CoRScene.MouseEvent;
      let dpc = CoRScene.createMouseEvt3DDispatcher();
      dpc.currentTarget = this;
      dpc.uuid = this.uuid;
      dpc.enabled = this.m_enabled;
      dpc.addEventListener(me.MOUSE_DOWN, this, this.mouseDownListener);
      dpc.addEventListener(me.MOUSE_UP, this, this.mouseUpListener);
      dpc.addEventListener(me.MOUSE_OVER, this, this.mouseOverListener);
      dpc.addEventListener(me.MOUSE_OUT, this, this.mouseOutListener);
      this.m_lb.getREntities()[0].setEvtDispatcher(dpc);
      this.m_dp = dpc;
    }

    this.m_entities = this.m_lb.getREntities().slice(0);
    this.m_entities[0].mouseEnabled = true;
  }

  setVisible(v) {
    super.setVisible(v);
    let ls = this.m_lbs;

    for (let i = 0; i < ls.length; ++i) {
      ls[i].setVisible(v);
    }
  }

  addEventListener(type, listener, func, captureEnabled = true, bubbleEnabled = false) {
    this.m_dp.addEventListener(type, listener, func, captureEnabled, bubbleEnabled);
    return this;
  }

  removeEventListener(type, listener, func) {
    this.m_dp.removeEventListener(type, listener, func);
    return this;
  }

  mouseOverListener(evt) {
    // console.log("Button::mouseOverListener() ...");
    if (this.m_enabled) {
      this.m_lb.setClipIndex(1);
      let ls = this.m_lbs;

      if (ls.length > 0) {
        for (let i = 0; i < ls.length; ++i) {
          ls[i].setClipIndex(1);
        }
      }
    }
  }

  mouseOutListener(evt) {
    // console.log("Button::mouseOutListener() ...");
    if (this.m_enabled) {
      this.m_lb.setClipIndex(0);
      let ls = this.m_lbs;

      if (ls.length > 0) {
        for (let i = 0; i < ls.length; ++i) {
          ls[i].setClipIndex(0);
        }
      }
    }
  }

  mouseDownListener(evt) {
    // console.log("Button::mouseDownListener() ...");
    if (this.m_enabled) {
      this.m_lb.setClipIndex(2);
      let ls = this.m_lbs;

      if (ls.length > 0) {
        for (let i = 0; i < ls.length; ++i) {
          ls[i].setClipIndex(2);
        }
      }
    }
  }

  mouseUpListener(evt) {
    if (this.m_enabled) {
      this.m_lb.setClipIndex(3);
      let ls = this.m_lbs;

      if (ls.length > 0) {
        for (let i = 0; i < ls.length; ++i) {
          ls[i].setClipIndex(3);
        }
      }
    }
  }

  setClipIndex(i) {
    this.m_lb.setClipIndex(i);
    return this;
  }

  copyTransformFrom(src) {
    if (src != null) {
      let sx = src.getScaleX();
      let sy = src.getScaleY();
      let r = src.getRotation();
      this.setScaleXY(sx, sy);
      this.setRotation(r);
      src.getPosition(this.m_v0);
      this.setPosition(this.m_v0);
    }
  }
  /**
   * get renderable entity for renderer scene
   * @returns ITransformEntity instance
   */


  getREntities() {
    let es = this.m_lb.getREntities();
    let ls = this.m_lbs;

    if (ls.length > 0) {
      for (let i = 0; i < ls.length; ++i) {
        es = es.concat(ls[i].getREntities());
      }

      return es;
    }

    return es;
  }

  getRContainer() {
    return null;
  }

  update() {
    this.m_bounds.reset();
    let sv = this.m_scaleV;
    let b = this.m_lb;
    b.setRotation(this.m_rotation);
    b.setScaleXY(sv.x, sv.y);
    b.setPosition(this.m_pos);
    b.update();
    this.m_bounds.union(b.getGlobalBounds());
    let ls = this.m_lbs;

    if (ls.length > 0) {
      for (let i = 0; i < ls.length; ++i) {
        ls[i].copyTransformFrom(this.m_lb);
        ls[i].update();
        this.m_bounds.union(ls[i].getGlobalBounds());
      }
    }

    this.m_bounds.updateFast();
  }

  destroy() {
    let b = this.m_lb;

    if (b != null) {
      b.destroy();
      b = null;
    }

    let ls = this.m_lbs;

    if (ls.length > 0) {
      for (let i = 0; i < ls.length; ++i) {
        ls[i].destroy();
      }

      this.m_lbs = [];
    }

    if (this.m_dp != null) {
      this.m_dp.destroy();
      this.m_dp = null;
    }

    super.destroy();
  }

}

exports.Button = Button;

/***/ }),

/***/ "f7eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const UILayout_1 = __webpack_require__("e9cf");

class CoUIScene {
  constructor() {
    this.texAtlas = null;
    this.transparentTexAtlas = null;
    this.layout = new UILayout_1.UILayout();
    this.prompt = null;
    this.tips = null;
    this.panel = null;
    this.uiConfig = null;
    this.keyboardInteraction = null;
    this.texAtlasNearestFilter = true;
  }
  /**
   * @param crscene the default value is null
   * @param atlasSize the default value is 1024
   * @param renderProcessesTotal the default value is 3
   */


  initialize(crscene = null, atlasSize = 1024, renderProcessesTotal = 3) {
    if (this.m_crscene == null) {
      this.m_crscene = crscene != null ? crscene : CoRScene.getRendererScene();
      crscene = this.m_crscene;
      let stage = this.m_crscene.getStage3D();
      crscene.addEventListener(CoRScene.EventBase.RESIZE, this, this.resizeHandle);
      let rparam = CoRScene.createRendererSceneParam();
      rparam.cameraPerspectiveEnabled = false;
      rparam.setAttriAlpha(false);
      rparam.setCamProject(45.0, 0.1, 3000.0);
      rparam.setCamPosition(0.0, 0.0, 1500.0);
      let subScene = crscene.createSubScene(rparam, renderProcessesTotal, true);
      subScene.enableMouseEvent(true);
      let t = this;
      t.rscene = subScene;
      let t0 = t.texAtlas = CoTexture.createCanvasTexAtlas();
      let t1 = t.transparentTexAtlas = CoTexture.createCanvasTexAtlas();
      t0.initialize(crscene, atlasSize, atlasSize, CoMaterial.createColor4(1.0, 1.0, 1.0, 1.0), false, this.texAtlasNearestFilter);
      t0.getTexture().premultiplyAlpha = false;
      t1.initialize(crscene, atlasSize, atlasSize, CoMaterial.createColor4(1.0, 1.0, 1.0, 0.0), true, this.texAtlasNearestFilter);
      t1.getTexture().premultiplyAlpha = true;
      this.m_rstage = stage;
      let uicamera = this.rscene.getCamera();
      uicamera.translationXYZ(stage.stageHalfWidth, stage.stageHalfHeight, 1500.0);
      uicamera.update();
      let st = this.getStage();
      this.m_stageRect = CoMath.createAABB2D(0, 0, st.stageWidth, st.stageHeight);
      this.layout.initialize(this.m_stageRect);
    }
  }

  addEventListener(type, listener, func, captureEnabled = true, bubbleEnabled = false) {
    this.m_rstage.addEventListener(type, listener, func, captureEnabled, bubbleEnabled);
    return this;
  }

  removeEventListener(type, listener, func) {
    this.m_rstage.removeEventListener(type, listener, func);
    return this;
  }

  getStage() {
    return this.rscene.getStage3D();
  }

  addEntity(entity, processid = 0) {
    if (entity != null) {
      entity.__$setScene(this);

      entity.update();
      let container = entity.getRContainer();

      if (container != null) {
        this.rscene.addContainer(container, processid);
      }

      let ls = entity.getREntities();

      for (let i = 0; i < ls.length; ++i) {
        this.rscene.addEntity(ls[i], processid, true);
      }
    }
  }

  removeEntity(entity) {
    if (entity != null) {
      let sc = this.rscene;
      let container = entity.getRContainer();

      if (container != null) {
        sc.removeContainer(container);
      }

      let ls = entity.getREntities();

      for (let i = 0; i < ls.length; ++i) {
        sc.removeEntity(ls[i]);
      }

      entity.__$setScene(null);
    }
  }

  getRect() {
    return this.m_stageRect;
  }

  resize() {
    let st = this.m_rstage;
    let uicamera = this.rscene.getCamera();
    uicamera.translationXYZ(st.stageHalfWidth, st.stageHalfHeight, 1500.0);
    uicamera.update();
    this.m_stageRect.setTo(0, 0, st.stageWidth, st.stageHeight); // this.layout.update( this.m_stageRect );

    this.updateLayout();
  }

  updateLayout() {
    this.layout.update(this.m_stageRect);
  }

  run() {
    if (this.rscene != null) {
      this.rscene.run();
    }
  }

  resizeHandle(evt) {
    this.resize();
  }

}

exports.CoUIScene = CoUIScene;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("88ee");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "ff8d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const Button_1 = __webpack_require__("eb56");

const ClipLabel_1 = __webpack_require__("3914");

const ColorClipLabel_1 = __webpack_require__("85be");

class FlagButton extends Button_1.Button {
  constructor() {
    super();
    this.m_flagLb = null;
    this.m_pw = 32;
    this.m_ph = 32;
    this.m_borderWidth = 4;
    this.m_dis = 4;
    this.uuid = "flagBtn";
  }

  initializeWithSize(atlas, pw = 32, ph = 32, borderWidth = 4, dis = 4) {
    if (this.isIniting() && atlas != null) {
      this.m_pw = pw;
      this.m_ph = ph;
      this.m_borderWidth = borderWidth;
      this.m_dis = dis;
      this.m_selectDispatcher = CoRScene.createEventBaseDispatcher();
      this.m_currEvent = CoRScene.createSelectionEvent();
      this.createFlagBtn(atlas);
    }

    return this;
  }

  addEventListener(type, listener, func, captureEnabled = true, bubbleEnabled = false) {
    if (type == CoRScene.SelectionEvent.SELECT) {
      this.m_selectDispatcher.addEventListener(type, listener, func, captureEnabled, bubbleEnabled);
    } else {
      super.addEventListener(type, listener, func, captureEnabled, bubbleEnabled);
    }

    return this;
  }

  removeEventListener(type, listener, func) {
    if (type == CoRScene.SelectionEvent.SELECT) {
      this.m_selectDispatcher.removeEventListener(type, listener, func);
    } else {
      super.removeEventListener(type, listener, func);
    }

    return this;
  }

  createFlagBtn(atlas) {
    let texAtlas = atlas;
    let borderColor = CoMaterial.createColor4(0.7, 0.7, 0.7);
    let bgColor = CoMaterial.createColor4(0.3, 0.3, 0.3);
    let canvas = this.createFlagImg(texAtlas, borderColor, bgColor);
    texAtlas.addImageToAtlas("flagBtn_01", canvas);
    borderColor = CoMaterial.createColor4(0.7, 0.7, 0.7);
    bgColor = CoMaterial.createColor4(0.3, 0.3, 0.3);
    let flagColor = CoMaterial.createColor4(1.0, 1.0, 1.0);
    canvas = this.createFlagImg(texAtlas, borderColor, bgColor, flagColor, this.m_dis);
    texAtlas.addImageToAtlas("flagBtn_02", canvas);
    let urls = ["flagBtn_01", "flagBtn_02"];
    let csLable = new ClipLabel_1.ClipLabel();
    csLable.initialize(texAtlas, urls);
    let clb = new ColorClipLabel_1.ColorClipLabel();
    clb.initialize(csLable, 4);
    clb.getColorAt(0).setRGB3f(0.8, 0.8, 0.8);
    clb.getColorAt(1).setRGB3f(0.0, 1.0, 0.2);
    clb.getColorAt(2).setRGB3f(1.0, 0.2, 1.0);
    clb.setLabelClipIndex(0);
    this.m_flagLb = csLable;
    this.initializeWithLable(clb);
  }

  sendSelectionEvt() {
    this.m_selectDispatcher.uuid = this.uuid;
    this.m_currEvent.target = this;
    this.m_currEvent.type = CoRScene.SelectionEvent.SELECT;
    this.m_currEvent.flag = this.getFlag();
    this.m_currEvent.phase = 1;
    this.m_selectDispatcher.dispatchEvt(this.m_currEvent);
    this.m_currEvent.target = null;
  }

  mouseUpListener(evt) {
    if (this.isEnabled()) {
      super.mouseUpListener(evt);
      this.selectListener();
    }
  }

  setFlag(flag, sendEvent = false) {
    this.m_flagLb.setClipIndex(flag ? 1 : 0);

    if (sendEvent) {
      this.sendSelectionEvt();
    }
  }

  getFlag() {
    return this.m_flagLb.getClipIndex() == 1;
  }

  selectListener() {
    if (this.m_flagLb.getClipIndex() == 1) {
      this.m_flagLb.setClipIndex(0);
    } else {
      this.m_flagLb.setClipIndex(1);
    }

    console.log("cccccccc selectListener ccccccc, this.m_flagLb.getClipIndex(): ", this.m_flagLb.getClipIndex());
    this.sendSelectionEvt();
  }

  createFlagImg(texAtlas, borderColor, bgColor, flagColor = null, dis = 2) {
    let pw = this.m_pw;
    let ph = this.m_ph;
    let borderWidth = this.m_borderWidth;
    let canvas = texAtlas.createCanvas(pw, ph, borderColor, false);
    let ctx2D = canvas.getContext("2d");
    ctx2D.fillStyle = bgColor.getCSSDecRGBAColor();
    ctx2D.fillRect(borderWidth, borderWidth, pw - 2 * borderWidth, ph - 2 * borderWidth - 1);

    if (flagColor != null) {
      ctx2D.fillStyle = flagColor.getCSSDecRGBAColor();
      ctx2D.fillRect(borderWidth + dis, borderWidth + dis, pw - 2 * (borderWidth + dis), ph - 2 * (borderWidth + dis) - 1);
    }

    return canvas;
  }

  destroy() {
    this.m_flagLb = null;
    super.destroy();
  }

}

exports.FlagButton = FlagButton;

/***/ })

/******/ });
});