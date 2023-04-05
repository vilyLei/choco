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

/***/ "1ae8":
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

const TextureAtlas_1 = __importDefault(__webpack_require__("aeac"));

class ImageTexAtlas extends TextureAtlas_1.default {
  constructor(rscene, canvasWidth, canvasHeight, fillColor, transparent = false, nearestFilter = false) {
    super(canvasWidth, canvasHeight);
    this.m_canvas = null;
    this.m_canvas2D = null;
    this.m_rscene = null;
    this.m_texture = null;
    this.m_transparent = false;
    this.m_fillColor = null;
    let canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.display = "bolck";
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    canvas.style.position = "absolute";
    canvas.style.pointerEvents = "none";
    this.m_transparent = transparent;

    if (transparent) {
      canvas.style.backgroundColor = "transparent";
    }

    this.m_fillColor = fillColor;
    this.m_rscene = rscene;
    this.m_canvas = canvas;
    this.m_canvas2D = canvas.getContext("2d");

    if (transparent) {
      this.m_canvas2D.fillStyle = fillColor.getCSSDecRGBAColor();
    } else {
      this.m_canvas2D.fillStyle = fillColor.getCSSHeXRGBColor();
    }

    this.m_canvas2D.fillRect(0, 0, canvasWidth, canvasHeight);
    this.m_uvFlipY = true;
    this.m_texture = this.m_rscene.textureBlock.createImageTex2D(32, 32, false);

    this.m_texture.__$setRenderProxy(this.m_rscene.getRenderProxy());

    this.m_texture.setDataFromImage(this.m_canvas, 0, 0, 0, false);
    this.m_texture.premultiplyAlpha = true;

    if (nearestFilter) {
      this.m_texture.minFilter = CoRScene.TextureConst.LINEAR;
      this.m_texture.magFilter = CoRScene.TextureConst.NEAREST;
    }

    this.m_texture.__$attachThis();
  }

  clone() {
    let atlas = new ImageTexAtlas(this.m_rscene, this.m_width, this.m_height, this.m_fillColor, this.m_transparent);
    return atlas;
  }

  getTexture() {
    return this.m_texture;
  }

  getCanvas() {
    return this.m_canvas;
  }

  addSubImage(uniqueNS, image) {
    let area = this.getAreaByName(uniqueNS);

    if (area != null) {
      return area;
    }

    area = this.addSubTexArea(uniqueNS, image.width, image.height);

    if (area != null) {
      let rect = area.texRect;
      this.m_canvas2D.drawImage(image, rect.x, rect.y, rect.width, rect.height);
      this.m_texture.setDataFromImage(this.m_canvas, 0, 0, 0, false);
      this.m_texture.updateDataToGpu(null, true);
    }

    return area;
  }

  setFontName(fontName) {
    ImageTexAtlas.s_fontName = fontName;
  }

  static CreateCanvas(width, height, bgColor = null, transparent = true) {
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.display = "bolck";
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    canvas.style.position = "absolute";

    if (transparent) {
      canvas.style.backgroundColor = "transparent";
    }

    if (bgColor != null) {
      let ctx2D = canvas.getContext("2d");
      ctx2D.fillStyle = bgColor.getCSSDecRGBAColor();
      ctx2D.fillRect(0, 0, width, height);
    }

    return canvas;
  }

  static CreateCharsCanvasWithSize(width, height, offsetW, offsetH, chars, fontSize, fontColor = null, bgColor = null) {
    if (fontColor == null) {
      fontColor = CoMaterial.createColor4(0, 0, 0, 1.0);
    }

    if (bgColor == null) {
      bgColor = CoMaterial.createColor4();
    }

    width = 0 | width;
    height = 0 | height;
    let texImg = ImageTexAtlas.CreateCharsCanvas(chars, fontSize, fontColor, bgColor);

    if (width == texImg.width && height == texImg.height) {
      return texImg;
    }

    if (width < texImg.width) {
      console.warn("width < texImg.width in the CreateCharsCanvasWithSize function.");
      width = Math.round(texImg.width) + offsetW;
    }

    if (height < texImg.height) {
      console.warn("height < texImg.height in the CreateCharsCanvasWithSize function.");
      height = Math.round(texImg.height) + offsetH;
    }

    let sx = Math.round((width - texImg.width) * 0.5);
    let sy = Math.round((height - texImg.height) * 0.5);
    let canvas = ImageTexAtlas.CreateCanvas(width, height, null);
    let ctx2D = canvas.getContext("2d");
    ctx2D.fillStyle = bgColor.getCSSDecRGBAColor();
    ctx2D.fillRect(0, 0, width, height);
    ctx2D.drawImage(texImg, sx, sy, texImg.width, texImg.height);
    return canvas;
  }

  static CreateCharsCanvasFixSize(width, height, chars, fontSize, fontColor = null, bgColor = null) {
    if (fontColor == null) {
      fontColor = CoMaterial.createColor4(0, 0, 0, 1.0);
    }

    if (bgColor == null) {
      bgColor = CoMaterial.createColor4();
    }

    width = 0 | width;
    height = 0 | height;
    let texImg = ImageTexAtlas.CreateCharsCanvas(chars, fontSize, fontColor, bgColor);

    if (width == texImg.width && height == texImg.height) {
      return texImg;
    }

    if (width < texImg.width) {
      throw Error("width < texImg.width");
    }

    if (height < texImg.height) {
      throw Error("height < texImg.height");
    }

    let sx = Math.round((width - texImg.width) * 0.5);
    let sy = Math.round((height - texImg.height) * 0.5);
    let canvas = ImageTexAtlas.CreateCanvas(width, height, null);
    let ctx2D = canvas.getContext("2d");
    ctx2D.fillStyle = bgColor.getCSSDecRGBAColor();
    ctx2D.fillRect(0, 0, width, height);
    ctx2D.drawImage(texImg, sx, sy, texImg.width, texImg.height);
    return canvas;
  }

  static CreateCharsCanvas(chars, fontSize, fontColor = null, bgColor = null) {
    if (chars == null || chars == "" || fontSize < 8) {
      return null;
    }

    if (fontColor == null) {
      fontColor = CoMaterial.createColor4(0, 0, 0, 1.0);
    }

    if (bgColor == null) {
      bgColor = CoMaterial.createColor4();
    }

    let ftCStr = fontColor.getCSSDecRGBAColor();
    let bgCStr = bgColor.getCSSDecRGBAColor();
    let keyStr = chars + "_" + fontSize + "_" + ftCStr + "_" + bgCStr;
    let imgMap = ImageTexAtlas.s_imgMap;

    if (imgMap.has(keyStr)) {
      return imgMap.get(keyStr);
    }

    let width = fontSize;
    let height = fontSize + 2;

    if (chars.length > 1) {
      width = fontSize * chars.length;
    }

    let canvas = ImageTexAtlas.CreateCanvas(width, height);
    let ctx2D = canvas.getContext("2d");
    ctx2D.font = fontSize - 4 + "px " + ImageTexAtlas.s_fontName; //ctx2D.textBaseline = "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";

    ctx2D.textBaseline = "top";
    var metrics = ctx2D.measureText(chars);
    let texWidth = metrics.width;

    if (chars.length > 1) {
      width = Math.round(texWidth + 8);
      canvas.width = width;
      ctx2D = canvas.getContext("2d");
      ctx2D.font = fontSize - 4 + "px " + ImageTexAtlas.s_fontName;
      ctx2D.textBaseline = "top";
    }
    /*
    let input = ImageTexAtlas.s_inputTF;
    if(ImageTexAtlas.s_inputTF == null) {
        ImageTexAtlas.s_inputTF = document.createElement("input");
        input = ImageTexAtlas.s_inputTF;
        input.type = "text";
        input.id = "atlas_inputText";
        input.className = "atlas_inputTFClass";
        input.disabled = true;
          let style = input.style;
        style.left = "10px";
        style.top = "10px";
        style.zIndex = "9999";
        style.position = "absolute";
        style.borderWidth = "0";
        // style.visibility = visible ? "visible" : "hidden";
        style.visibility = "hidden";
        document.body.appendChild(input);
    }
    input.value = chars;
    let rect = input.getBoundingClientRect();
    height = Math.round(rect.height) + 8;
    //*/
    // console.log("rect.height: ", rect.height, "fontSize: ",fontSize);


    ctx2D.fillStyle = bgCStr;
    ctx2D.fillRect(0, 0, width, height);
    ctx2D.textAlign = "left";
    ctx2D.fillStyle = ftCStr; //ctx2D.fillText(chars, (fontSize - texWidth) * 0.5, fontSize - (fontSize - metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent * 2.0) * 0.5);
    ///*

    const RD = CoRScene.RendererDevice;

    if (RD.IsMobileWeb()) {
      if (RD.IsIOS()) {
        ctx2D.fillText(chars, (width - texWidth) * 0.5, -4);
      } else {
        ctx2D.fillText(chars, (width - texWidth) * 0.5, 4);
      }
    } else {
      ctx2D.fillText(chars, (width - texWidth) * 0.5, 4);
    } //*/
    // ctx2D.fillText(chars, (width - texWidth) * 0.5, 4);


    imgMap.set(keyStr, canvas);
    return canvas;
    /*
    actualBoundingBoxAscent: 22
    actualBoundingBoxDescent: -17
    actualBoundingBoxLeft: -4
    actualBoundingBoxRight: 24
    fontBoundingBoxAscent: 60
    fontBoundingBoxDescent: 13
    */
  }

}

ImageTexAtlas.s_imgMap = new Map();
ImageTexAtlas.s_fontName = "Verdana";
ImageTexAtlas.s_inputTF = null;
exports.default = ImageTexAtlas;

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

/***/ "3a65":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const TexAreaFillType_1 = __webpack_require__("d101");

class TexAreaNode {
  constructor(px = 0.0, py = 0.0, pwidth = 100.0, pheight = 100.0) {
    this.rect = null;
    this.subNodes = null;
    this.uniqueNS = "TexAreaNode";
    this.subIndex = 0; // 记录自身的填满方式

    this.m_fillType = TexAreaFillType_1.TexAreaFillType.NONE;
    this.rect = CoMath.createAABB2D(px, py, pwidth, pheight);
  }

  isFull() {
    if (this.subNodes == null) {
      return false;
    }

    let node = null;
    let nodes = this.subNodes;

    if (nodes.length == 1) {
      return true;
    }

    for (let i = 0; i < nodes.length; ++i) {
      node = nodes[i];

      if (!node.isFull()) {
        return false;
      }
    }

    return true;
  }

  fillFour(texArea, map) {
    let boo = false;

    if (this.subNodes == null) {
      let rect = this.rect;
      let halfW = this.rect.width * 0.5;
      let halfH = this.rect.height * 0.5; // // 四区域均分

      let leftBottomAreaNode = new TexAreaNode(rect.x, rect.y, halfW, halfH);
      let rightBottomAreaNode = new TexAreaNode(rect.x + halfW, rect.y, halfW, halfH);
      let rightTopAreaNode = new TexAreaNode(rect.x + halfW, rect.y + halfH, halfW, halfH);
      let leftTopAreaNode = new TexAreaNode(rect.x, rect.y + halfH, halfW, halfH);
      /*
      // // 四区域不均分, 会产生更多的无效碎片
      let leftBottomAreaNode: TexAreaNode = new TexAreaNode(  rect.x,                 rect.y,                    srcR.width, srcR.height  );
      let rightBottomAreaNode: TexAreaNode = new TexAreaNode( rect.x + srcR.width,    rect.y,                    this.rect.width - srcR.width, srcR.height  );
      let rightTopAreaNode: TexAreaNode = new TexAreaNode(    rect.x + srcR.width,    rect.y + srcR.height,      this.rect.width - srcR.width, this.rect.height - srcR.height  );
      let leftTopAreaNode: TexAreaNode = new TexAreaNode(     rect.x,                 rect.y + srcR.height,      srcR.width, this.rect.height - srcR.height  );
        //*/

      this.subNodes = [leftBottomAreaNode, rightBottomAreaNode, rightTopAreaNode, leftTopAreaNode];

      for (let i = 0; i < this.subNodes.length; ++i) {
        this.subNodes[i].subIndex = i;
      }

      let node = this.subNodes[0]; // 通过面积排序, 优先使用面积小的

      this.subNodes.sort((a, b) => {
        return a.rect.width * a.rect.height - b.rect.width * b.rect.height;
      });
      this.m_fillType = TexAreaFillType_1.TexAreaFillType.FOUR;
      boo = node.fillOne(texArea);
    } else {
      let node = null;
      let nodes = this.subNodes;

      for (let i = 0; i < nodes.length; ++i) {
        node = nodes[i];

        if (!node.isFull()) {
          boo = node.addTexArea(texArea);

          if (boo) {
            break;
          }
        }
      }
    }

    return boo;
  } ///*


  fillThree(texArea) {
    let boo = false;

    if (this.subNodes == null) {
      let rect = this.rect;
      let srcR = texArea.rect; // // 三区域不均分，尽量保留最大可用空间

      let areaNode0 = new TexAreaNode(rect.x, rect.y, srcR.width, srcR.height);
      let areaNode1;
      let areaNode2;

      if (srcR.width > srcR.height) {
        areaNode1 = new TexAreaNode(rect.x + srcR.width, rect.y, this.rect.width - srcR.width, this.rect.height);
        areaNode2 = new TexAreaNode(rect.x, rect.y + srcR.height, srcR.width, this.rect.height - srcR.height);
      } else {
        areaNode1 = new TexAreaNode(rect.x + srcR.width, rect.y, this.rect.width - srcR.width, srcR.height);
        areaNode2 = new TexAreaNode(rect.x, rect.y + srcR.height, this.rect.width, this.rect.height - srcR.height);
      }

      this.subNodes = [areaNode0, areaNode1, areaNode2];

      for (let i = 0; i < this.subNodes.length; ++i) {
        this.subNodes[i].subIndex = i; //  if(this.subNodes[i].rect.width < texArea.minSize || this.subNodes[i].rect.height < texArea.minSize) {
        //      console.log("new subnode less minSize.");
        //  }
      } // 通过面积排序, 优先使用面积小的
      //this.subNodes.sort((a, b) => { return a.rect.width * a.rect.height - b.rect.width * b.rect.height });
      // 如果一个拆分的区域小于 minSize 则可以从subNodes里面删除并且放回回收整合逻辑，整合为更大的一片有效区域


      let a = this.subNodes[1];
      let b = this.subNodes[2]; // 指定排序,优先使用面积小的

      if (a.rect.width * a.rect.height > b.rect.width * b.rect.height) {
        this.subNodes[1] = b;
        this.subNodes[2] = a;
      }

      this.m_fillType = TexAreaFillType_1.TexAreaFillType.THREE;
      return this.subNodes[0].fillOne(texArea);
    } else {
      let node = null;
      let nodes = this.subNodes;

      for (let i = 0; i < nodes.length; ++i) {
        node = nodes[i];

        if (!node.isFull()) {
          boo = node.addTexArea(texArea);

          if (boo) {
            break;
          }
        }
      }
    }

    return boo;
  }

  fillTwoH(texArea) {
    if (this.subNodes == null) {
      let width0 = texArea.rect.width;
      let width1 = this.rect.width - texArea.rect.width;
      let height = this.rect.height;
      let rect = this.rect;
      let leftArea = new TexAreaNode(rect.x, rect.y, width0, height);
      let rightArea = new TexAreaNode(rect.x + width0, rect.y, width1, height);
      this.subNodes = [leftArea, rightArea];
      this.m_fillType = TexAreaFillType_1.TexAreaFillType.TWO_H;
      return leftArea.fillOne(texArea);
    }

    if (!this.subNodes[1].isFull()) {
      return this.subNodes[1].addTexArea(texArea);
    }

    return false;
  }

  fillTwoV(texArea) {
    if (this.subNodes == null) {
      let width = this.rect.width;
      let height0 = texArea.rect.height;
      let height1 = this.rect.height - texArea.rect.height;
      let rect = this.rect;
      let bottomArea = new TexAreaNode(rect.x, rect.y, width, height0);
      let topArea = new TexAreaNode(rect.x, rect.y + height0, width, height1);
      this.subNodes = [bottomArea, topArea];
      this.m_fillType = TexAreaFillType_1.TexAreaFillType.TWO_V;
      return bottomArea.fillOne(texArea);
    }

    if (!this.subNodes[1].isFull()) {
      return this.subNodes[1].addTexArea(texArea);
    }

    return false;
  } //*/


  fillOne(texArea) {
    let boo = true;

    if (this.subNodes == null) {
      this.subNodes = [this];
      this.m_fillType = TexAreaFillType_1.TexAreaFillType.ONE;
      texArea.rect.x = this.rect.x;
      texArea.rect.y = this.rect.y;
      texArea.update();
      this.uniqueNS = texArea.uniqueNS; //console.log("fillOne: ",texArea);
    }

    return boo;
  }

  findByXY(px, py) {
    if (this.rect.containsXY(px, py)) {
      if (this.subNodes != null) {
        if (this.m_fillType == TexAreaFillType_1.TexAreaFillType.ONE) {
          return this;
        }

        let node;

        for (let i = 0; i < this.subNodes.length; ++i) {
          node = this.subNodes[i].findByXY(px, py);

          if (node != null) {
            return node;
          }
        }
      }
    }

    return null;
  }
  /**
   * 添加 texture area 到当前空间管理节点,  默认用四分法均分这个区域无法分的情况再不平衡的2分法(横向或者纵向),叶子节点则不会划分而直接使用当前节点区域
   * @param texArea 填入的纹理区域
   * @param map
   */


  addTexArea(texArea) {
    let srcW = texArea.rect.width;
    let srcH = texArea.rect.height;

    if (this.rect.width <= texArea.minSize && this.rect.height <= texArea.minSize) {
      if (srcW <= this.rect.width && srcH <= this.rect.height && !this.isFull()) {
        // 填入当前区域，不需要划分子区域。
        // 检测是否已经填满, 如果填满了就不能填入了
        return this.fillOne(texArea);
      } else {
        return false;
      }
    }

    let dstW = this.rect.width > texArea.minSize ? this.rect.width : texArea.minSize;
    let dstH = this.rect.height > texArea.minSize ? this.rect.height : texArea.minSize; //console.log("srcW,dstW: ",srcW,dstW);

    if (srcW <= dstW && srcH <= dstH) {
      // 开始做空间划分
      let pw = dstW * 0.5;
      let ph = dstH * 0.5;
      let fillType = this.m_fillType;

      if (this.m_fillType == TexAreaFillType_1.TexAreaFillType.NONE) {
        if (srcW <= pw && srcH <= ph) {
          fillType = TexAreaFillType_1.TexAreaFillType.FOUR;
        } else if (srcW <= pw) {
          fillType = TexAreaFillType_1.TexAreaFillType.TWO_H;
        } else if (srcH <= ph) {
          fillType = TexAreaFillType_1.TexAreaFillType.TWO_V;
        } else {
          fillType = TexAreaFillType_1.TexAreaFillType.ONE;
        }
      } else if (fillType == TexAreaFillType_1.TexAreaFillType.ONE) {
        return false;
      }

      if (!this.isFull()) {
        if (fillType == TexAreaFillType_1.TexAreaFillType.THREE || fillType == TexAreaFillType_1.TexAreaFillType.FOUR) {
          // 四块区域均分
          // 检测是否已经填满子空间, 如果填满了就不能填入了
          // 分配策略为: 尽可能的保留最大有效可用空间, 减少无效碎片
          // 一下注释掉的代码实际上更容易产生碎片
          // let k: number = 1.0;
          // if(texArea.rect.width > texArea.rect.height) {
          //     k = texArea.rect.height / texArea.rect.width;
          // }
          // else {
          //     k = texArea.rect.width / texArea.rect.height;
          // }
          // if(Math.random() < 0.9) {
          //     return this.fillThree(texArea, map);
          // }
          // else {
          //     // 更容易产生无效碎片，因为分配的区域增多了
          //     return this.fillFour(texArea, map);
          // }
          return this.fillThree(texArea);
        } else if (fillType == TexAreaFillType_1.TexAreaFillType.TWO_H) {
          // 横向非均匀划分
          // 检测是否已经填满子空间, 如果填满了就不能填入了
          return this.fillTwoH(texArea);
        } else if (fillType == TexAreaFillType_1.TexAreaFillType.TWO_V) {
          //console.log("B");
          // 纵向非均匀划分
          // 检测是否已经填满子空间, 如果填满了就不能填入了
          return this.fillTwoV(texArea);
        } else {
          //console.log("C");
          // 填入当前区域，不需要划分子区域。
          // 检测是否已经填满, 如果填满了就不能填入了
          //fillType == TexAreaFillType.ONE
          return this.fillOne(texArea);
        }
      }

      return false;
    }

    return false;
  }

}

exports.default = TexAreaNode;

/***/ }),

/***/ "4c79":
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

const CanvasTexAtlas_1 = __importDefault(__webpack_require__("af0d"));

const ImageTexAtlas_1 = __importDefault(__webpack_require__("1ae8"));

exports.ImageTexAtlas = ImageTexAtlas_1.default;

function createCharsImage(chars, fontSize, fontColor = null, bgColor = null) {
  if (chars == null || chars == "" || fontSize < 8) {
    return null;
  }

  return ImageTexAtlas_1.default.CreateCharsCanvas(chars, fontSize, fontColor, bgColor);
}

exports.createCharsImage = createCharsImage;

function createCanvasTexAtlas() {
  return new CanvasTexAtlas_1.default();
}

exports.createCanvasTexAtlas = createCanvasTexAtlas;

function createImageTexAtlas(rscene, canvasWidth, canvasHeight, fillColor, transparent = false, nearestFilter = false) {
  return new ImageTexAtlas_1.default(rscene, canvasWidth, canvasHeight, fillColor, transparent, nearestFilter);
}

exports.createImageTexAtlas = createImageTexAtlas;

/***/ }),

/***/ "6958":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class TexArea {
  constructor(px = 0.0, py = 0.0, pwidth = 100.0, pheight = 100.0) {
    this.uniqueNS = "TexArea"; // 自身在列表数组中的序号

    this.listIndex = -1;
    this.atlasUid = 0;
    /**
     * 占据的区域
     */

    this.rect = null; // 纹理覆盖实际区域

    this.texRect = null;
    this.offset = 2;
    this.minSize = 32;
    this.uvs = new Float32Array(8);
    this.rect = CoMath.createAABB2D(px, py, pwidth, pheight);
    this.texRect = CoMath.createAABB2D(px, py, pwidth, pheight);
  }

  copyFrom(dst) {
    this.uniqueNS = dst.uniqueNS;
    this.rect.copyFrom(dst.rect);
    this.offset = dst.offset;
    this.uvs.set(dst.uvs, 0);
  }

  update() {
    this.rect.update();
  }

}

exports.default = TexArea;

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

/***/ "aeac":
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

const TexArea_1 = __importDefault(__webpack_require__("6958"));

const TexAreaNode_1 = __importDefault(__webpack_require__("3a65"));

class TextureAtlas {
  constructor(width, height) {
    this.m_uid = 0;
    this.m_texAreaNode = null;
    this.m_keyMap = new Map();
    this.m_area = new TexArea_1.default();
    this.m_offset = 2;
    this.m_minSize = 32;
    this.m_width = 32;
    this.m_height = 32;
    this.m_uvFlipY = false;
    if (width < 128) width = 128;
    if (height < 128) height = 128;
    this.m_width = width;
    this.m_height = height;
    this.m_texAreaNode = new TexAreaNode_1.default(0, 0, width, height);
    this.m_uid = TextureAtlas.s_uid++;
  }

  getUid() {
    return this.m_uid;
  }

  getWidth() {
    return this.m_width;
  }

  getHeight() {
    return this.m_height;
  }

  setMinSize(minSize) {
    this.m_minSize = Math.max(minSize, 4);
  }

  getAreaByName(uniqueNS) {
    if (this.m_keyMap.has(uniqueNS)) {
      return this.m_keyMap.get(uniqueNS);
    }

    return null;
  }

  getTexAreaByXY(px, py) {
    let node = this.m_texAreaNode.findByXY(px, py);

    if (node != null) {
      if (this.m_keyMap.has(node.uniqueNS)) {
        return this.m_keyMap.get(node.uniqueNS);
      }
    }

    return null;
  }

  addSubTexArea(uniqueNS, areaWidth, areaHeight) {
    if (uniqueNS == undefined || uniqueNS == "") {
      if (uniqueNS == undefined) {
        console.error("the value of the uniqueNS is invalid(uniqueNS value is undefined).");
      } else {
        console.error("the value of the uniqueNS is invalid(uniqueNS value is '').");
      }
    }

    if (this.m_keyMap.has(uniqueNS)) {
      return this.m_keyMap.get(uniqueNS);
    } else {
      let area = this.m_area;
      area.offset = this.m_offset;
      area.minSize = this.m_minSize;
      area.uniqueNS = uniqueNS;
      area.rect.width = areaWidth + area.offset * 2;
      area.rect.height = areaHeight + area.offset * 2;
      let flag = this.m_texAreaNode.addTexArea(area);

      if (flag) {
        area = new TexArea_1.default();
        area.copyFrom(this.m_area);
        this.m_keyMap.set(uniqueNS, area);
        area.atlasUid = this.m_uid;
        let rect = area.rect;
        let texRect = area.texRect;
        texRect.copyFrom(rect);
        texRect.x += area.offset;
        texRect.y += area.offset;
        texRect.width -= area.offset * 2;
        texRect.height -= area.offset * 2;
        texRect.flipY(this.m_height);
        let uMin = texRect.x / this.m_width;
        let vMin = texRect.y / this.m_height;
        let uMax = texRect.getRight() / this.m_width;
        let vMax = texRect.getTop() / this.m_height;

        if (this.m_uvFlipY) {
          area.uvs.set([uMin, vMax, uMax, vMax, uMax, vMin, uMin, vMin], 0);
        } else {
          area.uvs.set([uMin, vMin, uMax, vMin, uMax, vMax, uMin, vMax], 0);
        }

        return area;
      } else {
        console.warn(this.m_uid + ",####### 超出了...");
        return null;
      }
    }
  }

}

TextureAtlas.s_uid = 0;
exports.default = TextureAtlas;

/***/ }),

/***/ "af0d":
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

const ImageTexAtlas_1 = __importDefault(__webpack_require__("1ae8"));

class CanvasTexObject {
  constructor() {
    this.uvs = null;
    this.texture = null;
    this.rect = null;
    this.clampUVRect = null;
    this.uniqueName = "";
  }

  getWidth() {
    if (this.rect != null) return this.rect.width;
    return 0;
  }

  getHeight() {
    if (this.rect != null) return this.rect.height;
    return 0;
  }

  destroy() {
    this.uvs = null;
    this.texture = null;
    this.rect = null;
  }

}

exports.CanvasTexObject = CanvasTexObject;

class CanvasTexAtlas {
  constructor() {
    this.m_sc = null;
    this.m_atlasList = [null, null, null, null];
    this.m_objMap = new Map();
    this.m_whiteTex = null;
    this.m_whiteImg = null;
  }

  initialize(sc, canvasWidth, canvasHeight, fillColor = null, transparent = false, nearestFilter = false) {
    this.m_sc = sc;
    let atlas = null;

    if (fillColor == null) {
      fillColor = transparent ? CoMaterial.createColor4(1.0, 1.0, 1.0, 0.0) : CoMaterial.createColor4();
    }

    if (this.m_atlasList[0] == null) {
      atlas = new ImageTexAtlas_1.default(this.m_sc, canvasWidth, canvasHeight, fillColor, transparent, nearestFilter);
      this.m_atlasList[0] = atlas;
    }
  }

  setFontName(fontName) {
    this.m_atlasList[0].setFontName(fontName);
  }

  getTexture(i = 0) {
    return this.m_atlasList[i].getTexture();
  }

  getAtlasAt(i = 0) {
    return this.m_atlasList[i];
  }

  addcharsToAtlas(chars, size, fontColor, bgColor) {
    if (chars != "") {
      let image = ImageTexAtlas_1.default.CreateCharsCanvas(chars, size, fontColor, bgColor);
      return this.addImageToAtlas(chars, image);
    }

    return null;
  }

  getTextureObject(uniqueName) {
    let atlas = this.m_atlasList[0];
    let texArea = atlas.getAreaByName(uniqueName);

    if (texArea != null) {
      let texNode = new CanvasTexObject();
      texNode.texture = atlas.getTexture();
      texNode.uvs = texArea.uvs.slice(0);
      texNode.rect = texArea.texRect.clone();
      texNode.clampUVRect = texArea.texRect.clone();
      texNode.clampUVRect.x /= atlas.getWidth();
      texNode.clampUVRect.y /= atlas.getHeight();
      texNode.clampUVRect.width /= atlas.getWidth();
      texNode.clampUVRect.height /= atlas.getHeight();
      texNode.uniqueName = texArea.uniqueNS;
      return texNode;
    }

    return null;
  }

  addImageToAtlas(uniqueName, img) {
    let atlas = this.m_atlasList[0];
    let texArea = atlas.addSubImage(uniqueName, img);

    if (texArea != null) {
      let texNode = new CanvasTexObject();
      texNode.texture = atlas.getTexture();
      texNode.uvs = texArea.uvs;
      texNode.rect = texArea.texRect;
      texNode.clampUVRect = texArea.texRect.clone();
      texNode.clampUVRect.x /= atlas.getWidth();
      texNode.clampUVRect.y /= atlas.getHeight();
      texNode.clampUVRect.width /= atlas.getWidth();
      texNode.clampUVRect.height /= atlas.getHeight();
      texNode.uniqueName = texArea.uniqueNS;
      this.m_objMap.set(uniqueName, texNode);
      return texNode;
    } else {
      console.error("addImageToAtlas error!");
    }

    return null;
  }

  getTexObjFromAtlas(uniqueName) {
    return this.m_objMap.get(uniqueName);
  }

  createTexObjWithStr(chars, size, fontColor = null, bgColor = null) {
    if (fontColor == null) fontColor = CoMaterial.createColor4(0, 0, 0, 1);
    if (bgColor == null) bgColor = CoMaterial.createColor4();

    if (chars == null || chars == "" || size < 8) {
      return null;
    }

    let img = ImageTexAtlas_1.default.CreateCharsCanvas(chars, size, fontColor, bgColor);
    let keyStr = chars + "-" + size + "-" + fontColor.getCSSDecRGBAColor() + "-" + bgColor.getCSSDecRGBAColor();
    return this.addImageToAtlas(keyStr, img);
  }

  createCanvas(width, height, bgColor = null, transparent = true) {
    return ImageTexAtlas_1.default.CreateCanvas(width, height, bgColor, transparent);
  }

  createCharsCanvasWithSize(width, height, offsetW, offsetH, chars, fontSize, fontColor = null, bgColor = null) {
    return ImageTexAtlas_1.default.CreateCharsCanvasWithSize(width, height, offsetW, offsetH, chars, fontSize, fontColor, bgColor);
  }

  createCharsCanvasFixSize(width, height, chars, fontSize, fontColor = null, bgColor = null) {
    return ImageTexAtlas_1.default.CreateCharsCanvasFixSize(width, height, chars, fontSize, fontColor, bgColor);
  }

  createCharsImage(chars, fontSize, fontColor = null, bgColor = null) {
    if (chars == null || chars == "" || fontSize < 8) {
      return null;
    }

    return ImageTexAtlas_1.default.CreateCharsCanvas(chars, fontSize, fontColor, bgColor);
  }

  createWhiteTex() {
    if (this.m_whiteTex != null) {
      return this.m_whiteTex;
    }

    let size = 16;
    let canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    this.m_whiteImg = canvas;
    let ctx2D = canvas.getContext("2d");
    ctx2D.fillStyle = "white";
    ctx2D.fillRect(0, 0, size, size);
    let tex = this.m_sc.textureBlock.createImageTex2D(32, 32, false);
    tex.setDataFromImage(canvas, 0, 0, 0, false);
    this.m_whiteTex = tex;
    tex.premultiplyAlpha = true;
    return tex;
  }

}

exports.CanvasTexAtlas = CanvasTexAtlas;
exports.default = CanvasTexAtlas;

/***/ }),

/***/ "d101":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TexAreaFillType;

(function (TexAreaFillType) {
  TexAreaFillType[TexAreaFillType["NONE"] = 0] = "NONE";
  TexAreaFillType[TexAreaFillType["ONE"] = 1] = "ONE";
  TexAreaFillType[TexAreaFillType["TWO_H"] = 2] = "TWO_H";
  TexAreaFillType[TexAreaFillType["TWO_V"] = 3] = "TWO_V";
  TexAreaFillType[TexAreaFillType["THREE"] = 4] = "THREE";
  TexAreaFillType[TexAreaFillType["FOUR"] = 5] = "FOUR";
})(TexAreaFillType || (TexAreaFillType = {}));

exports.TexAreaFillType = TexAreaFillType;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4c79");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ })

/******/ });