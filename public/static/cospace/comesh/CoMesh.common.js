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

/***/ "0f76":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class MeshBuilder {
  constructor() {
    this.m_bufSortFormat = 0x0;
    this.vbWholeDataEnabled = false;
    this.wireframe = false;
    this.polyhedral = true;
    this.transMatrix = null;
  }

  createIVSBYSize(size) {
    return size > 65535 ? new Uint32Array(size) : new Uint16Array(size);
  }

  createIVSByArray(arr) {
    return arr.length > 65535 ? new Uint32Array(arr) : new Uint16Array(arr);
  }
  /**
   * @param layoutBit vertex shader vertex attributes layout bit status.
   *                  the value of layoutBit comes from the material shdder program.
   */


  setBufSortFormat(layoutBit) {
    this.m_bufSortFormat = layoutBit;
  }

  applyMaterial(material, texEnabled = false) {
    texEnabled = texEnabled || material.getTextureAt(0) != null;
    material.initializeByCodeBuf(texEnabled);
    this.m_bufSortFormat = material.getBufSortFormat();
  }

  createMesh() {
    let mesh = CoRScene.createRawMesh();
    mesh.setTransformMatrix(this.transMatrix);
    mesh.setBufSortFormat(this.m_bufSortFormat);
    mesh.reset();
    this.setMeshData(mesh);
    mesh.vbWholeDataEnabled = this.vbWholeDataEnabled;
    mesh.wireframe = this.wireframe;
    mesh.setPolyhedral(this.polyhedral);
    mesh.initialize();
    mesh.toElementsTriangles();
    this.transMatrix = null;
    this.m_bufSortFormat = 0x0;
    return mesh;
  }

  setMeshData(mesh) {}

}

exports.MeshBuilder = MeshBuilder;

/***/ }),

/***/ "159a":
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

const MeshVertex_1 = __importDefault(__webpack_require__("5282"));

const MeshBuilder_1 = __webpack_require__("0f76");

class ConeMeshBuilder extends MeshBuilder_1.MeshBuilder {
  constructor() {
    super();
    this.radius = 30.0;
    this.height = 100.0;
    this.longitudeNumSegments = 2;
    this.alignYRatio = -0.5;
    this.inverseUV = false;
    this.uScale = 1.0;
    this.vScale = 1.0;
  }

  create(radius, height, longitudeNumSegments, alignYRatio = -0.5) {
    this.radius = radius;
    this.height = height;
    this.longitudeNumSegments = longitudeNumSegments;
    this.alignYRatio = alignYRatio;
    return this.createMesh();
  }

  setMeshData(mesh) {
    let radius = this.radius;
    let height = this.height;
    let longitudeNumSegments = this.longitudeNumSegments;
    let alignYRatio = this.alignYRatio;
    if (radius < 0.01) radius = 0.01;
    if (longitudeNumSegments < 2) longitudeNumSegments = 2;
    let latitudeNumSegments = 2;
    let i = 1;
    let j = 0;
    let trisTot = 0;
    let yRad = 0.0;
    let px = 0.0;
    let py = 0.0;
    radius = Math.abs(radius);
    height = Math.abs(height);
    let minY = alignYRatio * height;
    let vtx = new MeshVertex_1.default(0.0, minY, 0.0, trisTot); // 计算绕 y轴 的纬度线上的点

    let vtxVec = [];
    let vtxRows = [];
    vtxRows.push([]);
    let vtxRow = vtxRows[0];
    vtx.u = 0.5;
    vtx.v = 0.5;

    for (j = 0; j < 1; ++j) {
      vtx.index = trisTot;
      ++trisTot;
      vtxRow.push(vtx.cloneVertex());
      vtxVec.push(vtxRow[j]);
    }

    py = minY;
    let py2 = 0.499;

    for (; i < latitudeNumSegments; ++i) {
      yRad = Math.PI * i / latitudeNumSegments;
      vtx.y = py;
      vtxRows.push([]);
      let rowa = vtxRows[i];

      for (j = 0; j < longitudeNumSegments; ++j) {
        yRad = Math.PI * 2.0 * j / longitudeNumSegments;
        px = Math.sin(yRad);
        py = Math.cos(yRad);
        vtx.x = px * radius;
        vtx.z = py * radius;
        vtx.index = trisTot;
        ++trisTot; // calc uv

        px *= py2;
        py *= py2;
        vtx.u = 0.5 + px;
        vtx.v = 0.5 + py;
        rowa.push(vtx.cloneVertex());
        vtxVec.push(rowa[j]);
      }

      rowa.push(rowa[0]);
    }

    vtxRows.push([]);
    let rowa = vtxRows[vtxRows.length - 1];
    let rowb = vtxRows[vtxRows.length - 2];

    for (j = 0; j < longitudeNumSegments; ++j) {
      rowa.push(rowb[j].cloneVertex());
      rowa[j].index = trisTot;
      ++trisTot;
      vtxVec.push(rowa[j]);
    }

    rowa.push(rowa[0]);
    vtx.x = 0.0;
    vtx.y = minY + height;
    vtx.z = 0.0;
    vtx.u = 0.5;
    vtx.v = 0.5;
    vtxRows.push([]);
    let lastRow = vtxRows[vtxRows.length - 1];

    for (j = 0; j < longitudeNumSegments; ++j) {
      vtx.index = trisTot;
      ++trisTot;
      lastRow.push(vtx.cloneVertex());
      vtxVec.push(lastRow[j]);
    }

    lastRow.push(lastRow[0]);
    let pvtx = null;
    let pivs = [];
    i = 1;
    latitudeNumSegments += 1;

    for (; i <= latitudeNumSegments; ++i) {
      let rowa = vtxRows[i - 1];
      let rowb = vtxRows[i];

      for (j = 1; j <= longitudeNumSegments; ++j) {
        if (i == 1) {
          pivs.push(rowa[0].index);
          pivs.push(rowb[j].index);
          pivs.push(rowb[j - 1].index);
        } else if (i == latitudeNumSegments) {
          pivs.push(rowa[j].index);
          pivs.push(rowb[j].index);
          pivs.push(rowa[j - 1].index);
        }
      }
    }

    let vtxTotal = vtxVec.length;
    let vs = new Float32Array(vtxTotal * 3);
    i = 0;

    for (j = 0; j < vtxTotal; ++j) {
      pvtx = vtxVec[j];
      vs[i] = pvtx.x;
      vs[i + 1] = pvtx.y;
      vs[i + 2] = pvtx.z;
      i += 3;
    }

    let ivs = new Uint16Array(pivs);
    mesh.addFloat32Data(vs, 3);

    if (mesh.isUVSEnabled()) {
      let uvs = new Float32Array(vtxTotal * 2);
      i = 0;

      for (j = 0; j < vtxTotal; ++j) {
        pvtx = vtxVec[j];
        uvs[i] = pvtx.u;
        uvs[i + 1] = pvtx.v;
        i += 2;
      }

      mesh.addFloat32Data(uvs, 2);
    }

    if (mesh.isNVSEnabled()) {
      let nvs = new Float32Array(vtxTotal * 3);
      let trisNumber = ivs.length / 3;
      CoAGeom.SurfaceNormal.ClacTrisNormal(vs, vs.length, trisNumber, ivs, nvs);
      mesh.addFloat32Data(nvs, 3);
    }

    mesh.setIVS(ivs);
  }

}

exports.ConeMeshBuilder = ConeMeshBuilder;

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

/***/ "4b06":
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

const MeshBuilder_1 = __webpack_require__("0f76");

const CoTubeGeometry_1 = __importDefault(__webpack_require__("dae3"));

class TubeMeshBuilder extends MeshBuilder_1.MeshBuilder {
  constructor() {
    super();
    this.geometry = new CoTubeGeometry_1.default();
    this.uScale = 1.0;
    this.vScale = 1.0;
  }

  create(radius, long, longitudeNumSegments = 20, latitudeNumSegments = 1, uvType = 1, alignYRatio = -0.5) {
    this.m_radius = radius;
    this.m_long = long;
    this.m_longitudeNumSegments = longitudeNumSegments;
    this.m_latitudeNumSegments = latitudeNumSegments;
    this.m_uvType = uvType;
    this.m_alignYRatio = alignYRatio;
    return this.createMesh();
  }

  setMeshData(mesh) {
    let g = this.geometry;
    g.uScale = this.uScale;
    g.vScale = this.vScale;
    g.initialize(this.m_radius, this.m_long, this.m_longitudeNumSegments, this.m_latitudeNumSegments, this.m_uvType, this.m_alignYRatio);
    let nvFlag = mesh.isNVSEnabled();
    let vs = g.getVS();
    let ivs = g.getIVS();
    let uvs = g.getUVS();
    let nvs = null;

    if (nvFlag) {
      nvs = new Float32Array(vs.length);
    }

    if (nvFlag) {
      let pv = CoMath.createVec3();
      let nv = CoMath.createVec3();

      for (let i = 0; i <= this.m_latitudeNumSegments; ++i) {
        g.getCenterAt(i, pv);
        let cv = pv;
        let range = g.getRangeAt(i);
        let pvs = vs.subarray(range[0], range[1]);
        let pnvs = nvs.subarray(range[0], range[1]);
        let tot = pvs.length / 3;
        let k = 0;

        for (let j = 0; j < tot; ++j) {
          k = j * 3;
          nv.setXYZ(pvs[k], pvs[k + 1], pvs[k + 2]);
          nv.subtractBy(cv);
          nv.normalize();
          pnvs[k] = nv.x;
          pnvs[k + 1] = nv.y;
          pnvs[k + 2] = nv.z;
        }
      }
    }

    mesh.addFloat32Data(vs, 3);

    if (mesh.isUVSEnabled()) {
      mesh.addFloat32Data(uvs, 2);
    }

    if (nvFlag) {
      mesh.addFloat32Data(nvs, 3);
    }

    mesh.setIVS(ivs);
    g.reset();
  }

}

exports.TubeMeshBuilder = TubeMeshBuilder;

/***/ }),

/***/ "5282":
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

class MeshVertex {
  //
  constructor(px = 0, py = 0, pz = 0, pindex = 0) {
    // pos
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0; // uv

    this.u = 0.0;
    this.v = 1.0; // normal

    this.nx = 0.0;
    this.ny = 0.0;
    this.nz = 0.0;
    this.index = 0; // pos

    this.x = px;
    this.y = py;
    this.z = pz;
    this.index = pindex;
  }

  cloneVertex() {
    let vtx = new MeshVertex(this.x, this.y, this.z, this.index);
    vtx.nx = this.nx;
    vtx.ny = this.ny;
    vtx.nz = this.nz;
    vtx.u = this.u;
    vtx.v = this.v;
    return vtx;
  }

  copyFrom(pv) {
    this.x = pv.x;
    this.y = pv.y;
    this.z = pv.z;
    this.u = pv.u;
    this.v = pv.v;
    this.nx = pv.nx;
    this.ny = pv.ny;
    this.nz = pv.nz;
    this.index = pv.index;
  }

}

exports.default = MeshVertex;

/***/ }),

/***/ "5565":
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

const CoTubeGeometry_1 = __importDefault(__webpack_require__("dae3"));

const MeshBuilder_1 = __webpack_require__("0f76");

class TorusMeshBuilder extends MeshBuilder_1.MeshBuilder {
  constructor() {
    super();
    this.m_ringRadius = 100.0;
    this.m_axisRadius = 50.0;
    this.m_uvType = 1;
    this.m_longitudeNumSegments = 5;
    this.m_latitudeNumSegments = 10;
    this.m_alignYRatio = -0.5;
    this.inverseUV = false;
    this.uScale = 1.0;
    this.vScale = 1.0;
    /**
     * 0: vertical to x-axis, 1: vertical to y-axis, 2: vertical to z-axis, the default value is 0
     */

    this.axisType = 0;
    this.geometry = new CoTubeGeometry_1.default();
  }

  create(ringRadius = 200, axisRadius = 50, longitudeNumSegments = 30, latitudeNumSegments = 20, uvType = 1, alignYRatio = -0.5) {
    this.m_ringRadius = ringRadius;
    this.m_axisRadius = axisRadius;
    this.m_longitudeNumSegments = longitudeNumSegments;
    this.m_latitudeNumSegments = latitudeNumSegments;
    this.m_uvType = uvType;
    this.m_alignYRatio = alignYRatio;
    return this.createMesh();
  }

  setMeshData(mesh) {
    let ringRadius = this.m_ringRadius;
    let axisRadius = this.m_axisRadius;
    let longitudeNumSegments = this.m_longitudeNumSegments;
    let latitudeNumSegments = this.m_latitudeNumSegments;
    let uvType = this.m_uvType;
    let alignYRatio = this.m_alignYRatio;
    let g = this.geometry;

    switch (this.axisType) {
      case 1:
        g.axisType = 2;
        break;

      case 2:
        g.axisType = 0;
        break;

      default:
        g.axisType = 1;
        break;
    }

    g.initialize(axisRadius, 0.0, longitudeNumSegments, latitudeNumSegments, uvType, alignYRatio);
    let nvFlag = mesh.isNVSEnabled();
    let vs = g.getVS();
    let ivs = g.getIVS();
    let uvs = g.getUVS();
    let nvs = null;

    if (nvFlag) {
      nvs = new Float32Array(vs.length);
    }

    let pi2 = 2.0 * Math.PI;
    let rad = 0.0;
    let pv = CoMath.createVec3();
    let nv = CoMath.createVec3();
    let mat4 = CoMath.createMat4();

    for (let i = 0; i <= latitudeNumSegments; ++i) {
      mat4.identity();
      rad = pi2 * i / latitudeNumSegments;

      switch (this.axisType) {
        case 1:
          pv.x = Math.cos(rad) * ringRadius;
          pv.z = Math.sin(rad) * ringRadius;
          mat4.rotationY(-rad);
          break;

        case 2:
          pv.y = Math.cos(rad) * ringRadius;
          pv.x = Math.sin(rad) * ringRadius;
          mat4.rotationZ(-rad);
          break;

        default:
          pv.z = Math.cos(rad) * ringRadius;
          pv.y = Math.sin(rad) * ringRadius;
          mat4.rotationX(-rad);
          break;
      }

      mat4.setTranslation(pv);
      g.transformAt(i, mat4);

      if (nvFlag) {
        let cv = pv;
        let range = g.getRangeAt(i);
        let pvs = vs.subarray(range[0], range[1]);
        let pnvs = nvs.subarray(range[0], range[1]);
        let tot = pvs.length / 3;
        let k = 0;

        for (let j = 0; j < tot; ++j) {
          k = j * 3;
          nv.setXYZ(pvs[k], pvs[k + 1], pvs[k + 2]);
          nv.subtractBy(cv);
          nv.normalize();
          pnvs[k] = nv.x;
          pnvs[k + 1] = nv.y;
          pnvs[k + 2] = nv.z;
        }
      }
    }

    mesh.addFloat32Data(vs, 3);

    if (mesh.isUVSEnabled()) {
      mesh.addFloat32Data(uvs, 2);
    }

    if (nvFlag) {
      mesh.addFloat32Data(nvs, 3);
    }

    mesh.setIVS(ivs);
    g.reset();
  }

}

exports.TorusMeshBuilder = TorusMeshBuilder;

/***/ }),

/***/ "6fc6":
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

class CoGeometry {
  constructor() {
    this.m_vs = null;
    this.m_uvs = null;
    this.m_nvs = null;
    this.m_ivs = null;
    this.vtxTotal = 0;
    this.trisNumber = 0;
    this.vtCount = 0;
    this.bounds = null;
    /**
     * 0: vertical to x-axis, 1: vertical to y-axis, 2: vertical to z-axis, the default value is 0
     */

    this.axisType = 0;
  }

  clone() {
    let geometry = new CoGeometry();
    geometry.copyFrom(this);
    return geometry;
  }

  getCenterAt(i, outV) {}

  transformAt(i, mat4) {}

  copyFrom(src) {
    let geometry = new CoGeometry();

    if (src.m_vs != null) {
      if (this.m_vs != null) this.m_vs.set(src.m_vs);else this.m_vs = src.m_vs.slice(0);
    }

    if (src.m_uvs != null) {
      if (this.m_uvs != null) this.m_uvs.set(src.m_uvs);else this.m_uvs = src.m_uvs.slice(0);
    }

    if (src.m_nvs != null) {
      if (this.m_nvs != null) this.m_nvs.set(src.m_nvs);else this.m_nvs = src.m_nvs.slice(0);
    } // if(src.m_tvs != null) {
    //     if(this.m_tvs != null)
    //         this.m_tvs.set(src.m_tvs);
    //     else
    //         this.m_tvs = src.m_tvs.slice(0);
    // }
    // if(src.m_btvs != null) {
    //     if(this.m_btvs != null)
    //         this.m_btvs.set(src.m_btvs);
    //     else
    //         this.m_btvs = src.m_btvs.slice(0);
    // }
    // if(src.m_cvs != null) {
    //     if(this.m_cvs != null)
    //         this.m_cvs.set(src.m_cvs);
    //     else
    //         this.m_cvs = src.m_cvs.slice(0);
    // }


    if (src.m_ivs != null) {
      if (this.m_ivs != null) this.m_ivs.set(src.m_ivs);else this.m_ivs = src.m_ivs.slice(0);
    }

    geometry.vtxTotal = this.vtxTotal;
    geometry.trisNumber = this.trisNumber;
    geometry.vtCount = this.vtCount;
    if (geometry.bounds != null) geometry.bounds.copyFrom(this.bounds);
  }
  /**
   * @returns vertex position buffer Float32Array
   */


  getVS() {
    return this.m_vs;
  }
  /**
   * @returns vertex uv buffer Float32Array
   */


  getUVS() {
    return this.m_uvs;
  }
  /**
   * @returns vertex normal buffer Float32Array
   */


  getNVS() {
    return this.m_nvs;
  }
  /**
   * @returns vertex tangent buffer Float32Array
   */


  getTVS() {
    return null;
  }
  /**
   * @returns vertex bitangent buffer Float32Array
   */


  getBTVS() {
    return null;
  }
  /**
   * @returns vertex color(r,g,b) buffer Float32Array
   */


  getCVS() {
    return null;
  }
  /**
   * @returns vertex indices buffer Uint16Array or Uint32Array
   */


  getIVS() {
    return this.m_ivs;
  }

  reset() {
    this.m_vs = null;
    this.m_uvs = null;
    this.m_nvs = null; // this.m_tvs = null;
    // this.m_btvs = null;

    this.m_ivs = null;
    this.vtxTotal = 0;
    this.trisNumber = 0;
    this.vtCount = 0;
  }

}

exports.default = CoGeometry;

/***/ }),

/***/ "778d":
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

const MeshBuilder_1 = __webpack_require__("0f76");

const MeshVertex_1 = __importDefault(__webpack_require__("5282"));

class SphereMeshBuilder extends MeshBuilder_1.MeshBuilder {
  constructor() {
    super();
    this.inverseUV = false;
    this.uvScale = 1.0;
  }

  create(radius, longitudeNumSegments = 20, latitudeNumSegments = 20, doubleTriFaceEnabled = false) {
    this.m_radius = radius;
    this.m_longitudeNumSegments = longitudeNumSegments;
    this.m_latitudeNumSegments = latitudeNumSegments;
    this.m_doubleTriFaceEnabled = doubleTriFaceEnabled;
    return this.createMesh();
  }

  setMeshData(mesh) {
    let radius = this.m_radius;
    let longitudeNumSegments = this.m_longitudeNumSegments;
    let latitudeNumSegments = this.m_latitudeNumSegments;
    let doubleTriFaceEnabled = this.m_doubleTriFaceEnabled;
    if (radius < 0.0001) radius = 0.0001;
    if (longitudeNumSegments < 2) longitudeNumSegments = 2;
    if (latitudeNumSegments < 2) latitudeNumSegments = 2;
    this.m_radius = Math.abs(radius);
    this.m_longitudeNumSegments = longitudeNumSegments;
    this.m_latitudeNumSegments = latitudeNumSegments;

    if ((this.m_latitudeNumSegments + 1) % 2 == 0) {
      this.m_latitudeNumSegments += 1;
    }

    if (this.m_longitudeNumSegments = this.m_latitudeNumSegments) {
      this.m_longitudeNumSegments += 1;
    }

    let i = 1,
        j = 0,
        trisTot = 0;
    let xRad = 0.0,
        yRad = 0.0,
        px = 0.0,
        py = 0.0;
    let vtx = new MeshVertex_1.default(0, -this.m_radius, 0, trisTot); // 计算绕 y轴 的纬度线上的点

    let vtxVec = [];
    let vtxRows = [];
    vtxRows.push([]);
    let vtxRow = vtxRows[0];
    let centerUV = this.inverseUV ? 1.0 : 0.5;
    vtx.u = vtx.v = centerUV;
    vtx.nx = 0.0;
    vtx.ny = -1.0;
    vtx.nz = 0.0;
    vtxRow.push(vtx.cloneVertex());
    vtxVec.push(vtxRow[0]);
    let pr = 0.0;
    let py2 = 0.0;
    let f = 1.0 / this.m_radius;

    for (i = 0; i < this.m_latitudeNumSegments; ++i) {
      yRad = Math.PI * i / this.m_latitudeNumSegments;
      px = Math.sin(yRad);
      py = Math.cos(yRad);
      vtx.y = -this.m_radius * py;
      pr = this.m_radius * px;

      if (this.inverseUV) {
        py2 = Math.abs(yRad / Math.PI - 0.5);
      } else {
        py2 = 0.5 - Math.abs(yRad / Math.PI - 0.5);
      }

      py2 *= this.uvScale;
      vtxRows.push([]);
      let row = vtxRows[i];

      for (j = 0; j < this.m_longitudeNumSegments; ++j) {
        xRad = Math.PI * 2 * j / this.m_longitudeNumSegments;
        ++trisTot;
        px = Math.sin(xRad);
        py = Math.cos(xRad);
        vtx.x = px * pr;
        vtx.z = py * pr;
        vtx.index = trisTot; // calc uv

        vtx.u = 0.5 + px * py2;
        vtx.v = 0.5 + py * py2;
        vtx.nx = vtx.x * f;
        vtx.ny = vtx.y * f;
        vtx.nz = vtx.z * f;
        row.push(vtx.cloneVertex());
        vtxVec.push(row[j]);
      }

      row.push(row[0]);
    }

    ++trisTot;
    vtx.index = trisTot;
    vtx.x = 0;
    vtx.y = this.m_radius;
    vtx.z = 0;
    vtx.u = vtx.v = centerUV;
    vtx.nx = 0.0;
    vtx.ny = 1.0;
    vtx.nz = 0.0;
    vtxRows.push([]);
    let lastRow = vtxRows[this.m_latitudeNumSegments];
    lastRow.push(vtx.cloneVertex());
    vtxVec.push(lastRow[0]);
    let pvtx = null;
    let pivs = [];
    let rowa = null;
    let rowb = null;
    i = 1;

    for (; i <= this.m_latitudeNumSegments; ++i) {
      rowa = vtxRows[i - 1];
      rowb = vtxRows[i];

      for (j = 1; j <= this.m_longitudeNumSegments; ++j) {
        if (i == 1) {
          pivs.push(rowa[0].index);
          pivs.push(rowb[j].index);
          pivs.push(rowb[j - 1].index);
        } else if (i == this.m_latitudeNumSegments) {
          pivs.push(rowa[j].index);
          pivs.push(rowb[0].index);
          pivs.push(rowa[j - 1].index);
        } else {
          pivs.push(rowa[j].index);
          pivs.push(rowb[j - 1].index);
          pivs.push(rowa[j - 1].index);
          pivs.push(rowa[j].index);
          pivs.push(rowb[j].index);
          pivs.push(rowb[j - 1].index);
        }
      }
    }

    let vtxTotal = vtxVec.length;
    let ivs;

    if (doubleTriFaceEnabled) {
      ivs = this.createIVSBYSize(pivs.length * 2);
      ivs.set(pivs, 0);
      pivs.reverse();
      ivs.set(pivs, pivs.length);
    } else {
      ivs = this.createIVSByArray(pivs);
    }

    let vs = new Float32Array(vtxTotal * 3);
    i = 0;

    for (j = 0; j < vtxTotal; ++j) {
      pvtx = vtxVec[j];
      vs[i] = pvtx.x;
      vs[i + 1] = pvtx.y;
      vs[i + 2] = pvtx.z;
      i += 3;
    }

    mesh.addFloat32Data(vs, 3);

    if (mesh.isUVSEnabled()) {
      let uvs = new Float32Array(vtxTotal * 2);
      i = 0;

      for (j = 0; j < vtxTotal; ++j) {
        pvtx = vtxVec[j];
        uvs[i] = pvtx.u;
        uvs[i + 1] = pvtx.v;
        i += 2;
      }

      mesh.addFloat32Data(uvs, 2);
    }

    if (mesh.isNVSEnabled()) {
      let nvs = new Float32Array(vtxTotal * 3);
      i = 0;

      for (j = 0; j < vtxTotal; ++j) {
        pvtx = vtxVec[j];
        nvs[i] = pvtx.nx;
        nvs[i + 1] = pvtx.ny;
        nvs[i + 2] = pvtx.nz;
        i += 3;
      }

      mesh.addFloat32Data(nvs, 3);
    }

    if (mesh.isCVSEnabled()) {
      let cvs = new Float32Array(vtxTotal * 3);
      i = 0;

      for (j = 0; j < vtxTotal; ++j) {
        cvs[i] = 1.0;
        cvs[i + 1] = 1.0;
        cvs[i + 2] = 1.0;
        i += 3;
      }

      mesh.addFloat32Data(cvs, 3);
    }

    mesh.setIVS(ivs);
  }

}

exports.SphereMeshBuilder = SphereMeshBuilder;

/***/ }),

/***/ "7f48":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const PlaneMeshBuilder_1 = __webpack_require__("d78b");

const LineMeshBuilder_1 = __webpack_require__("ae04");

const ConeMeshBuilder_1 = __webpack_require__("159a");

const BoxMeshBuilder_1 = __webpack_require__("f07f");

const SphereMeshBuilder_1 = __webpack_require__("778d");

const CylinderMeshBuilder_1 = __webpack_require__("9c83");

const TubeMeshBuilder_1 = __webpack_require__("4b06");

const TorusMeshBuilder_1 = __webpack_require__("5565");

const plane = new PlaneMeshBuilder_1.PlaneMeshBuilder();
exports.plane = plane;
const line = new LineMeshBuilder_1.LineMeshBuilder();
exports.line = line;
const cone = new ConeMeshBuilder_1.ConeMeshBuilder();
exports.cone = cone;
const box = new BoxMeshBuilder_1.BoxMeshBuilder();
exports.box = box;
const sphere = new SphereMeshBuilder_1.SphereMeshBuilder();
exports.sphere = sphere;
const cylinder = new CylinderMeshBuilder_1.CylinderMeshBuilder();
exports.cylinder = cylinder;
const tube = new TubeMeshBuilder_1.TubeMeshBuilder();
exports.tube = tube;
const torus = new TorusMeshBuilder_1.TorusMeshBuilder();
exports.torus = torus;

function createDataMeshFromModel(model, material = null, texEnabled = false) {
  if (typeof CoRScene !== "undefined") {
    return CoRScene.createDataMeshFromModel(model, material, texEnabled);
  }

  return null;
}

exports.createDataMeshFromModel = createDataMeshFromModel;

function createDataMesh() {
  if (typeof CoRScene !== "undefined") {
    return CoRScene.createDataMesh();
  }

  return null;
}

exports.createDataMesh = createDataMesh;

function createRawMesh() {
  if (typeof CoRScene !== "undefined") {
    return CoRScene.createRawMesh();
  }

  return null;
}

exports.createRawMesh = createRawMesh;

function createBoundsMesh() {
  if (typeof CoRScene !== "undefined") {
    return CoRScene.createBoundsMesh();
  }

  return null;
}

exports.createBoundsMesh = createBoundsMesh;

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

/***/ "9c83":
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

const MeshBuilder_1 = __webpack_require__("0f76");

const MeshVertex_1 = __importDefault(__webpack_require__("5282"));

class CylinderMeshBuilder extends MeshBuilder_1.MeshBuilder {
  constructor() {
    super();
    this.inverseUV = false;
    this.uScale = 1.0;
    this.vScale = 1.0;
  }

  create(radius, height, longitudeNumSegments = 20, uvType = 1, alignYRatio = -0.5) {
    this.m_radius = radius;
    this.m_height = height;
    this.m_longitudeNumSegments = longitudeNumSegments;
    this.m_uvType = uvType;
    this.m_alignYRatio = alignYRatio;
    return this.createMesh();
  }

  setMeshData(mesh) {
    let radius = this.m_radius;
    let height = this.m_height;
    if (radius < 0.0001) radius = 0.0001;
    let longitudeNumSegments = this.m_longitudeNumSegments;
    if (longitudeNumSegments < 2) longitudeNumSegments = 2;
    let latitudeNumSegments = 3;
    let m_radius = Math.abs(radius);
    let m_height = Math.abs(height);
    let i = 1;
    let j = 0;
    let trisTot = 0;
    let yRad = 0;
    let px = 0;
    let py = 0;
    let minY = this.m_alignYRatio * m_height;
    let vtx = new MeshVertex_1.default();
    vtx.y = minY; // two independent circles and a cylinder wall

    let vtxVec = [];
    let vtxRows = [];
    vtxRows.push([]);
    let vtxRow = vtxRows[0];
    vtx.u = 0.5;
    vtx.v = 0.5;
    vtx.nx = 0.0;
    vtx.ny = -1.0;
    vtx.nz = 0.0;
    vtxRow.push(vtx.cloneVertex());
    vtxVec.push(vtxRow[0]);

    for (; i < latitudeNumSegments; ++i) {
      //
      vtx.y = minY + m_height * (i - 1);
      vtxRows.push([]);
      let row = vtxRows[i];

      for (j = 0; j < longitudeNumSegments; ++j) {
        yRad = Math.PI * 2 * j / longitudeNumSegments;
        ++trisTot; //Math::sinCos(&px, &py, yRad);

        px = Math.sin(yRad);
        py = Math.cos(yRad); //

        vtx.x = px * m_radius;
        vtx.z = py * m_radius;
        vtx.index = trisTot; // calc uv

        px *= 0.495;
        py *= 0.495;
        vtx.u = 0.5 + px;
        vtx.v = 0.5 + py; //

        if (i < 2) {
          vtx.nx = 0.0;
          vtx.ny = -1.0;
          vtx.nz = 0.0;
        } else {
          vtx.nx = 0.0;
          vtx.ny = 1.0;
          vtx.nz = 0.0;
        } //


        row.push(vtx.cloneVertex());
        vtxVec.push(row[j]);
      }

      row.push(row[0]);
    }

    ++trisTot;
    vtx.index = trisTot;
    vtx.x = 0;
    vtx.y = minY + m_height;
    vtx.z = 0.0;
    vtx.u = 0.5;
    vtx.v = 0.5;
    vtx.nx = 0.0;
    vtx.ny = 1.0;
    vtx.nz = 0.0;
    vtxRows.push([]);
    let lastRow = vtxRows[3];
    lastRow.push(vtx.cloneVertex());
    vtxVec.push(lastRow[0]); // two circles's vertexes calc end;
    // calc cylinder wall vertexes

    let f = 1.0 / m_radius;

    for (i = 0; i < 2; ++i) {
      let preRow = vtxRows[i + 1];
      vtxRows.push([]);
      let row = vtxRows[vtxRows.length - 1];

      for (j = 0; j <= longitudeNumSegments; ++j) {
        ++trisTot;
        vtx.copyFrom(preRow[j]);
        vtx.index = trisTot;

        if (this.m_uvType < 1) {
          if (i < 1) {
            vtx.v = 0.0;
          } else {
            vtx.v = this.vScale; //1.0
          }

          vtx.u = this.uScale * (j / longitudeNumSegments);
        } else {
          if (i < 1) {
            vtx.u = 0.0;
          } else {
            vtx.u = this.uScale; //1.0;
          }

          vtx.v = this.vScale * (j / longitudeNumSegments);
        }

        vtx.ny = 0.0;
        vtx.nx = vtx.x * f;
        vtx.nz = vtx.z * f;
        row.push(vtx.cloneVertex());
        vtxVec.push(row[j]);
      }
    }

    let pvtx = null;
    let pivs = [];
    i = 1;
    let rowa = null;
    let rowb = null;

    for (; i <= latitudeNumSegments; ++i) {
      rowa = vtxRows[i - 1];
      rowb = vtxRows[i];

      for (j = 1; j <= longitudeNumSegments; ++j) {
        if (i == 1) {
          pivs.push(rowa[0].index);
          pivs.push(rowb[j].index);
          pivs.push(rowb[j - 1].index);
        } else if (i == latitudeNumSegments) {
          pivs.push(rowa[j].index);
          pivs.push(rowb[0].index);
          pivs.push(rowa[j - 1].index);
        }
      }
    } // create cylinder wall triangles


    rowa = vtxRows[vtxRows.length - 2];
    rowb = vtxRows[vtxRows.length - 1];

    for (j = 1; j <= longitudeNumSegments; ++j) {
      pivs.push(rowa[j].index);
      pivs.push(rowb[j - 1].index);
      pivs.push(rowa[j - 1].index);
      pivs.push(rowa[j].index);
      pivs.push(rowb[j].index);
      pivs.push(rowb[j - 1].index);
    }

    let vtxTotal = vtxVec.length;
    let vs = new Float32Array(vtxTotal * 3);
    i = 0;

    for (j = 0; j < vtxTotal; ++j) {
      pvtx = vtxVec[j];
      vs[i] = pvtx.x;
      vs[i + 1] = pvtx.y;
      vs[i + 2] = pvtx.z; //trace(pvtx.x+","+pvtx.y+","+pvtx.z);

      i += 3;
    }

    mesh.addFloat32Data(vs, 3); // if (mesh.isUVSEnabled()) {

    let ivs = new Uint16Array(pivs);
    let vtCount = ivs.length;

    if (mesh.isUVSEnabled()) {
      let uvs = new Float32Array(vtxTotal * 2);
      i = 0;

      for (j = 0; j < vtxTotal; ++j) {
        pvtx = vtxVec[j];
        uvs[i] = pvtx.u;
        uvs[i + 1] = pvtx.v;
        i += 2;
      }

      mesh.addFloat32Data(uvs, 2);
    }

    if (mesh.isNVSEnabled()) {
      let nvs = new Float32Array(vtxTotal * 3);
      i = 0;

      for (j = 0; j < vtxTotal; ++j) {
        pvtx = vtxVec[j];
        nvs[i] = pvtx.nx;
        nvs[i + 1] = pvtx.ny;
        nvs[i + 2] = pvtx.nz;
        i += 3;
      }

      mesh.addFloat32Data(nvs, 3);
    }

    mesh.setIVS(ivs);
  }

}

exports.CylinderMeshBuilder = CylinderMeshBuilder;

/***/ }),

/***/ "ae04":
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

const MeshBuilder_1 = __webpack_require__("0f76");

class LineMeshBuilder extends MeshBuilder_1.MeshBuilder {
  constructor() {
    super();
    this.m_posvs = null;
    this.m_colorvs = null;
    this.m_beginRad = 0.0;
    this.m_rangeRad = 0.0;
    this.color = CoRScene.createColor4(1.0, 0.0, 0.0, 1.0);
    this.dynColorEnabled = true;
  }

  setRGB3f(pr, pg, pb) {
    this.color.setRGB3f(pr, pg, pb);
  }

  createLineMesh() {
    let vs = new Float32Array(this.m_posvs);
    let mesh = CoMesh.createRawMesh();
    mesh.ivsEnabled = false;
    mesh.aabbEnabled = true;
    mesh.reset();
    mesh.addFloat32Data(vs, 3);

    if (this.m_colorvs != null) {
      if (this.m_colorvs.length != vs.length) throw "Error: colorvs.length == vs.length";
      mesh.addFloat32Data(this.m_colorvs, 3);
    }

    mesh.vbWholeDataEnabled = false;
    mesh.initialize();
    mesh.toArraysLines();
    mesh.vtCount = Math.floor(vs.length / 3);
    return mesh;
  }

  useColor(posTotal) {
    this.m_colorvs = null;

    if (!this.dynColorEnabled) {
      this.m_colorvs = new Float32Array(posTotal * 3);

      for (let i = 0; i < posTotal; ++i) this.color.toArray3(this.m_colorvs, i * 3);
    }
  }

  createLine(begin, end = null, axialRadius = 0.0) {
    this.m_posvs = new Float32Array([0.0, 0.0, 0.0, 100.0, 0, 0]);
    if (begin != null) begin.toArray(this.m_posvs);
    if (end != null) end.toArray(this.m_posvs, 3);
    this.useColor(2);
    let mesh = this.createLineMesh();

    if (axialRadius > 0.00001) {
      let r = axialRadius;
      let ab0 = CoMath.createAABB();
      ab0.min.setXYZ(begin.x - r, begin.y - r, begin.z - r);
      ab0.max.setXYZ(begin.x + r, begin.y + r, begin.z + r);
      let ab1 = CoMath.createAABB();
      ab1.min.setXYZ(end.x - r, end.y - r, end.z - r);
      ab1.max.setXYZ(end.x + r, end.y + r, end.z + r);
      ab0.union(ab1);
      mesh.bounds.copyFrom(ab0);
      mesh.bounds.update();
    }

    return mesh;
  }

  createRectXOY(px, py, pw, ph) {
    pw += px;
    ph += py;
    this.useColor(8);
    this.m_posvs = new Float32Array([px, py, 0.0, pw, py, 0.0, pw, py, 0.0, pw, ph, 0.0, pw, ph, 0.0, px, ph, 0.0, px, ph, 0.0, px, py, 0.0]);
    return this.createLineMesh();
  }

  createRectXOZ(px, pz, pw, pl) {
    pw += px;
    pl += pz;
    this.useColor(8);
    this.m_posvs = new Float32Array([px, 0.0, pz, pw, 0.0, pz, pw, 0.0, pz, pw, 0.0, pl, pw, 0.0, pl, px, 0.0, pl, px, 0.0, pl, px, 0.0, pz]);
    return this.createLineMesh();
  }

  createRectYOZ(py, pz, pw, pl) {
    pw += py;
    pl += pz;
    this.useColor(8);
    this.m_posvs = new Float32Array([0.0, py, pz, 0.0, pw, pz, 0.0, pw, pz, 0.0, pw, pl, 0.0, pw, pl, 0.0, py, pl, 0.0, py, pl, 0.0, py, pz]);
    return this.createLineMesh();
  }

  createCircle(vs, segsTotal) {
    this.m_posvs = new Float32Array(segsTotal * 2 * 3);
    let k = 0,
        j = 0;
    let pvs = this.m_posvs;

    for (let i = 1; i <= segsTotal; ++i) {
      k = (i - 1) * 3;
      pvs[j++] = vs[k++];
      pvs[j++] = vs[k++];
      pvs[j++] = vs[k++];
      k = i * 3;
      pvs[j++] = vs[k++];
      pvs[j++] = vs[k++];
      pvs[j++] = vs[k++];
    }

    this.useColor(segsTotal * 2);
  }

  createCircleData(ix, iy, iz, radius, segsTotal, center) {
    if (radius < 0.001) radius = 0.001;
    if (segsTotal < 3) segsTotal = 3;
    if (center == null) center = CoMath.createVec3();
    let vs = new Array((segsTotal + 1) * 3);
    let j = 0;
    let rad = this.m_rangeRad;
    let range = rad > 0.0 ? rad : Math.PI * 2;
    let cvs = [center.x, center.y, center.z];

    for (let i = 0; i <= segsTotal; ++i) {
      rad = this.m_beginRad + range * i / segsTotal;
      vs[j + ix] = cvs[ix] + radius * Math.cos(rad);
      vs[j + iy] = cvs[iy] + radius * Math.sin(rad);
      vs[j + iz] = cvs[iz];
      j += 3;
    }

    return vs;
  }

  createCircleXOY(radius, segsTotal, center = null, beginRad = 0.0, rangeRad = 0.0) {
    this.m_beginRad = beginRad;
    this.m_rangeRad = rangeRad;
    let vs = this.createCircleData(0, 1, 2, radius, segsTotal, center);
    this.createCircle(vs, segsTotal);
    return this.createLineMesh();
  }

  createCircleXOZ(radius, segsTotal, center = null, beginRad = 0.0, rangeRad = 0.0) {
    this.m_beginRad = beginRad;
    this.m_rangeRad = rangeRad;
    let vs = this.createCircleData(0, 2, 1, radius, segsTotal, center);
    this.createCircle(vs, segsTotal);
    return this.createLineMesh();
  }

  createCircleYOZ(radius, segsTotal, center = null, beginRad = 0.0, rangeRad = 0.0) {
    this.m_beginRad = beginRad;
    this.m_rangeRad = rangeRad;
    let vs = this.createCircleData(1, 2, 0, radius, segsTotal, center);
    this.createCircle(vs, segsTotal);
    return this.createLineMesh();
  }

  createCurveByPositions(posList, colorList = null) {
    this.m_posvs = new Float32Array(posList.length * 6);
    let k = 0;

    if (!this.dynColorEnabled) {
      if (colorList == null) {
        this.useColor(posList.length * 2);
      } else {
        this.m_colorvs = new Float32Array(posList.length * 6);
        let c;

        for (let i = 0; i < posList.length; ++i) {
          c = colorList[i];
          c.fromArray3(this.m_colorvs, k);
          k += 3;
          c.fromArray3(this.m_colorvs, k);
          k += 3;
        }
      }
    }

    k = 0;

    for (let i = 1; i < posList.length; ++i) {
      posList[i - 1].toArray(this.m_posvs, k);
      k += 3;
      posList[i].toArray(this.m_posvs, k);
      k += 3; // this.m_posvs.push(posList[i - 1].x, posList[i - 1].y, posList[i - 1].z);
      // this.m_posvs.push(posList[i].x, posList[i].y, posList[i].z);
    }

    return this.createLineMesh();
  }

  createPolygon(posList, colorList = null) {
    return this.createCurveByPositions(posList, colorList);
  }

  createLines(linePosList, colorList = null) {
    if (linePosList.length < 1 || linePosList.length % 2 != 0) {
      throw Error("illegal positions data for creating lines.");
    }

    this.m_posvs = new Float32Array(linePosList.length * 3);
    let k = 0;

    if (!this.dynColorEnabled) {
      if (colorList == null) {
        this.useColor(linePosList.length);
      } else {
        this.m_colorvs = new Float32Array(linePosList.length * 3);
        let c;

        for (let i = 0; i < linePosList.length; ++i) {
          c = colorList[i];
          c.fromArray3(this.m_colorvs, k);
          k += 3; //this.m_colorvs.push(c.r, c.g, c.b);
        }
      }
    }

    k = 0;

    for (let i = 0; i < linePosList.length; ++i) {
      // this.m_posvs.push(linePosList[i].x, linePosList[i].y, linePosList[i].z);
      linePosList[i].toArray(this.m_posvs, k);
      k += 3;
    }

    return this.createLineMesh();
  }

  createLinesWithFS32(posvs, colorvs = null) {
    if (posvs.length < 3 || posvs.length % 3 != 0) {
      throw Error("illegal positions data for creating lines.");
    }

    this.m_posvs = posvs;

    if (!this.dynColorEnabled) {
      if (colorvs == null) {
        this.useColor(posvs.length / 3);
      } else {
        this.m_colorvs = colorvs;
      }
    } // for (let i = 0; i < linePosList.length; ++i) {
    //     this.m_posvs.push(linePosList[i].x, linePosList[i].y, linePosList[i].z);
    // }


    return this.createLineMesh();
  }

  destroy() {
    this.m_colorvs = null;
    this.m_posvs = null;
  }

}

exports.LineMeshBuilder = LineMeshBuilder;

/***/ }),

/***/ "d78b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const MeshBuilder_1 = __webpack_require__("0f76");

class PlaneGeometry {
  constructor() {
    this.color0 = CoRScene.createColor4();
    this.color1 = CoRScene.createColor4();
    this.color2 = CoRScene.createColor4();
    this.color3 = CoRScene.createColor4();
    this.offsetU = 0.0;
    this.offsetV = 0.0;
    this.uScale = 1.0;
    this.vScale = 1.0;
    this.flipVerticalUV = false; // vtxColorEnabled = false;

    /**
     * axisFlag = 0 is XOY plane,
     * axisFlag = 1 is XOZ plane,
     * axisFlag = 2 is YOZ plane
     */

    this.axisFlag = 0;
    this.vtxTotal = 4;
    this.trisNumber = 2;
    this.vtCount = 6;
    this.m_ivs = null;
    this.m_vs = null;
    this.m_uvs = null;
    this.m_nvs = null;
    this.m_cvs = null;
  }

  getIVS() {
    return this.m_ivs;
  }

  getVS() {
    return this.m_vs;
  }

  getUVS() {
    return this.m_uvs;
  }

  setUVS(uvsLen8) {
    if (uvsLen8 != null && uvsLen8.length == 8) {
      if (this.m_uvs == null) {
        this.m_uvs = uvsLen8.slice(0);
      } else {
        this.m_uvs.set(uvsLen8);
      }
    }
  }

  getNVS() {
    return this.m_nvs;
  }

  getCVS() {
    return this.m_cvs;
  }

  initialize(startX, startY, pwidth, pheight) {
    if (this.m_vs != null) {
      return;
    }

    let minX = startX;
    let minY = startY;
    let maxX = startX + pwidth;
    let maxY = startY + pheight;
    let pz = 0.0; //
    // ccw is positive, left-bottom pos(minX,minY) -> right-bottom pos(maxX,minY) -> right-top pos(maxX,maxY)  -> right-top pos(minX,maxY)

    this.m_ivs = new Uint16Array([0, 1, 2, 0, 2, 3]); //this.m_ivs = new Uint32Array([0,1,2,0,2,3]);

    switch (this.axisFlag) {
      case 0:
        // XOY plane
        this.m_vs = new Float32Array([minX, minY, pz, maxX, minY, pz, maxX, maxY, pz, minX, maxY, pz]);
        break;

      case 1:
        // XOZ plane
        this.m_vs = new Float32Array([maxX, pz, minY, minX, pz, minY, minX, pz, maxY, maxX, pz, maxY]);
        break;

      case 2:
        // YOZ plane
        this.m_vs = new Float32Array([pz, minX, minY, pz, maxX, minY, pz, maxX, maxY, pz, minX, maxY]);
        break;

      default:
        break;
    }

    if (this.m_uvs == null) {
      if (this.flipVerticalUV) {
        this.m_uvs = new Float32Array([this.offsetU + 0.0 * this.uScale, this.offsetV + 1.0 * this.vScale, this.offsetU + 1.0 * this.uScale, this.offsetV + 1.0 * this.vScale, this.offsetU + 1.0 * this.uScale, this.offsetV + 0.0 * this.vScale, this.offsetU + 0.0 * this.uScale, this.offsetV + 0.0 * this.vScale]);
      } else {
        this.m_uvs = new Float32Array([this.offsetU + 0.0 * this.uScale, this.offsetV + 0.0 * this.vScale, this.offsetU + 1.0 * this.uScale, this.offsetV + 0.0 * this.vScale, this.offsetU + 1.0 * this.uScale, this.offsetV + 1.0 * this.vScale, this.offsetU + 0.0 * this.uScale, this.offsetV + 1.0 * this.vScale]);
      }
    }

    switch (this.axisFlag) {
      case 0:
        this.m_nvs = new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0]);
        break;

      case 1:
        this.m_nvs = new Float32Array([0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0]);
        break;

      case 2:
        this.m_nvs = new Float32Array([1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0]);
        break;

      default:
        break;
    }

    this.vtxTotal = 4;
    this.trisNumber = 2;
    this.vtCount = 6;
  }

}

class PlaneMeshBuilder extends MeshBuilder_1.MeshBuilder {
  constructor() {
    super();
    this.m_startX = 0;
    this.m_startZ = 0;
    this.m_pwidth = 0;
    this.m_plong = 0;
    this.m_flag = 0;
    this.uvs = null;
    this.offsetU = 0.0;
    this.offsetV = 0.0;
    this.uScale = 1.0;
    this.vScale = 1.0;
    this.flipVerticalUV = false;
    this.normalEnabled = false;
    this.vbWholeDataEnabled = false;
    this.wireframe = false;
    this.polyhedral = true;
  }

  createCircle(radius, segsTotal, beginRad = 0.0, rangeRad = 0.0) {
    if (radius < 0.001) radius = 0.001;
    if (segsTotal < 1) segsTotal = 1;
    let vs = new Float32Array((segsTotal + 1) * 3);
    let ivs = new Uint16Array(segsTotal * 3);
    vs[0] = 0.0;
    vs[1] = 0.0;
    vs[2] = 0.0;
    let j = 3;
    let rad = 0.0;
    rangeRad = rad > 0.0 ? rangeRad : Math.PI * 2.0;

    for (let i = 0; i < segsTotal; ++i) {
      rad = beginRad + rangeRad * i / segsTotal;
      vs[j] = radius * Math.cos(rad);
      vs[j + 1] = radius * Math.sin(rad);
      vs[j + 2] = 0.0;
      j += 3;
    }

    j = 0;

    for (let i = 2; i <= segsTotal; ++i) {
      ivs[j++] = 0;
      ivs[j++] = i - 1;
      ivs[j++] = i;
    }

    ivs[j++] = 0;
    ivs[j++] = segsTotal;
    ivs[j++] = 1;
    let mesh = CoRScene.createRawMesh();
    mesh.reset();
    mesh.setTransformMatrix(this.transMatrix);
    mesh.setBufSortFormat(this.m_bufSortFormat);
    this.transMatrix = null;
    mesh.addFloat32Data(vs, 3); // console.log("XXXX BBBB mesh.isUVSEnabled(): ", mesh.isUVSEnabled());

    if (mesh.isUVSEnabled()) {
      let uvs = new Float32Array((segsTotal + 1) * 2);
      uvs[0] = 0.5;
      uvs[1] = 0.5;
      j = 2;

      for (let i = 0; i < segsTotal; ++i) {
        rad = beginRad + rangeRad * i / segsTotal;
        uvs[j++] = Math.cos(rad) * 0.5 + 0.5;
        uvs[j++] = Math.sin(rad) * 0.5 + 0.5;
      }

      mesh.addFloat32Data(uvs, 2);
    }

    if (mesh.isNVSEnabled()) {
      let nvs = new Float32Array((segsTotal + 1) * 3);
      j = 0;

      for (let i = 0; i <= segsTotal; ++i) {
        nvs[j++] = 0.0;
        nvs[j++] = 0.0;
        nvs[j++] = 1.0;
      }

      mesh.addFloat32Data(nvs, 3);
    }

    mesh.setIVS(ivs);
    mesh.initialize();
    return mesh;
  }
  /**
   * @param px the default value is -1.0
   * @param py the default value is -1.0
   * @param pw the default value is 2.0
   * @param ph the default value is 2.0
   * @returns IRawMesh instance
   */


  createFixScreen(px = -1.0, py = -1.0, pw = 2.0, ph = 2.0) {
    return this.createXOY(-1.0, -1.0, 2.0, 2.0);
  }
  /**
   * create a rectangle plane ,and it parallel the 3d space XOY plane
   * @param minX the min x axis position of the rectangle plane.
   * @param minZ the min y axis position of the rectangle plane.
   * @param pwidth the width of the rectangle plane.
   * @param height the height of the rectangle plane.
   * @param texList textures list, default value is null.
   */


  createXOY(minX, minY, pwidth, pheight) {
    this.m_startX = minX;
    this.m_startZ = minY;
    this.m_pwidth = pwidth;
    this.m_plong = pheight;
    this.m_flag = 0;
    return this.createPlaneMesh();
  }
  /**
   * create a square plane ,and it parallel the 3d space XOY plane
   * @param size the width and height of the rectangle plane.
   * @param texList textures list, default value is null.
   */


  createXOYSquare(size) {
    this.m_startX = -0.5 * size;
    this.m_startZ = -0.5 * size;
    this.m_pwidth = size;
    this.m_plong = size;
    this.m_flag = 0;
    return this.createPlaneMesh();
  }
  /**
   * create a rectangle plane ,and it parallel the 3d space XOZ plane
   * @param minX the min x axis position of the rectangle plane.
   * @param minZ the min z axis position of the rectangle plane.
   * @param pwidth the width of the rectangle plane.
   * @param plong the long of the rectangle plane.
   * @param texList textures list, default value is null.
   */


  createXOZ(minX, minZ, pwidth, plong) {
    this.m_flag = 1;
    this.m_startX = minX;
    this.m_startZ = minZ;
    this.m_pwidth = pwidth;
    this.m_plong = plong;
    return this.createPlaneMesh();
  }
  /**
   * create a rectangle plane ,and it parallel the 3d space YOZ plane
   * @param minX the min x axis position of the rectangle plane.
   * @param minZ the min z axis position of the rectangle plane.
   * @param pwidth the width of the rectangle plane.
   * @param plong the long of the rectangle plane.
   * @param texList textures list, default value is null.
   */


  createYOZ(minY, minZ, pwidth, plong) {
    this.m_flag = 2;
    this.m_startX = minY;
    this.m_startZ = minZ;
    this.m_pwidth = pwidth;
    this.m_plong = plong;
    return this.createPlaneMesh();
  }
  /**
   * create a square plane ,and it parallel the 3d space XOZ plane
   * @param size the width and long of the rectangle plane.
   * @param texList textures list, default value is null.
   */


  createXOZSquare(size) {
    this.m_flag = 1;
    this.m_startX = -0.5 * size;
    this.m_startZ = -0.5 * size;
    this.m_pwidth = size;
    this.m_plong = size;
    return this.createPlaneMesh();
  }

  createPlaneMesh() {
    /*
    let geom = new PlaneGeometry();
      // mesh.color0.copyFrom(this.color0);
    // mesh.color1.copyFrom(this.color1);
    // mesh.color2.copyFrom(this.color2);
    // mesh.color3.copyFrom(this.color3);
    //geom.setPolyhedral( this.m_polyhedral );
    // mesh.setUVS( this.uvs );
    // this.uvs = null;
      geom.uScale = this.uScale;
    geom.vScale = this.vScale;
    geom.offsetU = this.offsetU;
    geom.offsetV = this.offsetV;
    // geom.wireframe = this.wireframe;
      geom.flipVerticalUV = this.flipVerticalUV;
    geom.axisFlag = this.m_flag;
    geom.setUVS(this.uvs);
    geom.initialize(this.m_startX, this.m_startZ, this.m_pwidth, this.m_plong);
      let mesh = CoRScene.createRawMesh();
    mesh.reset();
    mesh.addFloat32Data(geom.getVS(), 3);
    mesh.addFloat32Data(geom.getUVS(), 2);
    mesh.addFloat32Data(geom.getNVS(), 3);
    mesh.setIVS(geom.getIVS());
    mesh.vbWholeDataEnabled = this.vbWholeDataEnabled;
    mesh.wireframe = this.wireframe;
    mesh.setPolyhedral(this.polyhedral);
    mesh.initialize();
    mesh.toElementsTriangles();
    return mesh;
    //*/
    return this.createMesh();
  }

  setMeshData(mesh) {
    let geom = new PlaneGeometry();
    geom.uScale = this.uScale;
    geom.vScale = this.vScale;
    geom.offsetU = this.offsetU;
    geom.offsetV = this.offsetV;
    geom.flipVerticalUV = this.flipVerticalUV;
    geom.axisFlag = this.m_flag;
    geom.setUVS(this.uvs);
    geom.initialize(this.m_startX, this.m_startZ, this.m_pwidth, this.m_plong);
    mesh.addFloat32Data(geom.getVS(), 3);

    if (mesh.isUVSEnabled()) {
      mesh.addFloat32Data(geom.getUVS(), 2);
    }

    if (mesh.isNVSEnabled()) {
      mesh.addFloat32Data(geom.getNVS(), 3);
    }

    mesh.setIVS(geom.getIVS());
  }

  destroy() {
    this.uvs = null;
  }

}

exports.PlaneMeshBuilder = PlaneMeshBuilder;

/***/ }),

/***/ "dae3":
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

const CoGeometry_1 = __importDefault(__webpack_require__("6fc6"));

class CoTubeGeometry extends CoGeometry_1.default {
  constructor() {
    super();
    this.m_longitudeNum = 0;
    this.m_latitudeNum = 0;
    this.uScale = 1.0;
    this.vScale = 1.0;
  }

  clone() {
    let geometry = new CoTubeGeometry();
    geometry.m_longitudeNum = this.m_longitudeNum;
    geometry.m_latitudeNum = this.m_latitudeNum;
    geometry.uScale = this.uScale;
    geometry.vScale = this.vScale;
    geometry.copyFrom(this);
    return geometry;
  }

  getCenterAt(i, outV) {
    if (i >= 0 && i <= this.m_latitudeNum) {
      if (this.m_vs != null) {
        outV.setXYZ(0.0, 0.0, 0.0);
        let pvs = this.m_vs;
        let end = (i + 1) * (this.m_longitudeNum + 1) * 3;
        i = i * (this.m_longitudeNum + 1) * 3;
        end -= 3; //console.log("i: "+i,end);

        for (; i < end; i += 3) {
          outV.x += pvs[i];
          outV.y += pvs[i + 1];
          outV.z += pvs[i + 2];
        }

        outV.scaleBy(1.0 / this.m_longitudeNum);
      }
    }
  }

  transformAt(i, mat4) {
    if (i >= 0 && i <= this.m_latitudeNum) {
      let pvs = this.m_vs;
      let end = (i + 1) * (this.m_longitudeNum + 1) * 3;
      i = i * (this.m_longitudeNum + 1) * 3;
      mat4.transformVectorsRangeSelf(pvs, i, end);
    }
  }

  getRangeAt(i, segLen = 3) {
    if (i >= 0 && i <= this.m_latitudeNum) {
      let end = (i + 1) * (this.m_longitudeNum + 1) * segLen;
      i = i * (this.m_longitudeNum + 1) * segLen;
      return [i, end];
    }

    return [-1, -1];
  }

  initialize(radius, height, longitudeNumSegments, latitudeNumSegments, uvType = 1, alignYRatio = -0.5) {
    let i = 0;
    let j = 0;
    if (radius < 0.01) radius = 0.01;
    if (longitudeNumSegments < 2) longitudeNumSegments = 2;
    if (latitudeNumSegments < 1) latitudeNumSegments = 1;
    this.m_longitudeNum = longitudeNumSegments;
    this.m_latitudeNum = latitudeNumSegments;
    let m_radius = Math.abs(radius);
    let ph = Math.abs(height);
    let yRad = 0;
    let px = 0;
    let py = 0;
    let minY = alignYRatio * ph;

    if (this.bounds != null) {
      this.bounds.min.setXYZ(-radius, minY, -radius);
      this.bounds.max.setXYZ(radius, minY + ph, radius);
      this.bounds.updateFast();
    }

    let vtx = CoRScene.createVec3();
    let srcRow = [];
    let pv;
    let pi2 = Math.PI * 2;

    for (i = 0; i < 1; ++i) {
      for (j = 0; j < longitudeNumSegments; ++j) {
        yRad = pi2 * j / longitudeNumSegments;
        px = Math.sin(yRad);
        py = Math.cos(yRad);
        vtx.x = px * m_radius;
        vtx.z = py * m_radius;
        pv = CoRScene.createVec3(vtx.x, vtx.y, vtx.z, 1.0);
        srcRow.push(pv);
      }

      srcRow.push(srcRow[0]);
    }

    this.vtxTotal = (longitudeNumSegments + 1) * (latitudeNumSegments + 1);
    this.m_vs = new Float32Array(this.vtxTotal * 3);
    this.m_uvs = new Float32Array(this.vtxTotal * 2); // calc cylinder wall vertexes

    let tot = latitudeNumSegments;
    let k = 0;
    let l = 0;
    console.log("latitudeNumSegments: ", latitudeNumSegments, " vtx tot: ", this.vtxTotal);

    for (i = 0; i <= tot; ++i) {
      px = i / tot;
      py = minY + ph * px;

      for (j = 0; j <= longitudeNumSegments; ++j) {
        if (uvType < 1) {
          this.m_uvs[l++] = this.uScale * (j / longitudeNumSegments);
          this.m_uvs[l++] = this.uScale * px;
        } else {
          this.m_uvs[l++] = this.uScale * px;
          this.m_uvs[l++] = this.uScale * (j / longitudeNumSegments);
        } // this.m_vs[k++] = srcRow[j].x; this.m_vs[k++] = py; this.m_vs[k++] = srcRow[j].z;


        const vtx = srcRow[j];
        const vs = this.m_vs;

        switch (this.axisType) {
          case 1:
            vs[k++] = vtx.x;
            vs[k++] = py;
            vs[k++] = vtx.z;
            break;

          case 2:
            vs[k++] = vtx.z;
            vs[k++] = vtx.x;
            vs[k++] = py;
            break;

          default:
            vs[k++] = py;
            vs[k++] = vtx.z;
            vs[k++] = vtx.x;
            break;
        }
      }
    }

    let cn = longitudeNumSegments + 1;
    let a = 0;
    let b = 0;
    this.m_ivs = new Uint16Array(tot * longitudeNumSegments * 6);
    k = 0;

    for (i = 0; i < tot; ++i) {
      a = i * cn;
      b = (i + 1) * cn;

      for (j = 1; j <= longitudeNumSegments; ++j) {
        this.m_ivs[k++] = a + j;
        this.m_ivs[k++] = b + j - 1;
        this.m_ivs[k++] = a + j - 1;
        this.m_ivs[k++] = a + j;
        this.m_ivs[k++] = b + j;
        this.m_ivs[k++] = b + j - 1;
      }
    }

    this.vtCount = this.m_ivs.length;
    this.trisNumber = this.vtCount / 3;
  }

}

exports.default = CoTubeGeometry;

/***/ }),

/***/ "f07f":
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

const MeshBuilder_1 = __webpack_require__("0f76");

class BoxMeshBuilder extends MeshBuilder_1.MeshBuilder {
  constructor() {
    super();
    this.m_posList = new Array(8);
    this.flatNormal = true;
    this.normalScale = 1.0;
    this.uScale = 1.0;
    this.vScale = 1.0;
    this.flipVerticalUV = false;
    this.uvPartsNumber = 0;
  }

  createCube(cubeSize) {
    let h = cubeSize * 0.5;
    let minV = CoMath.createVec3(-h, -h, -h);
    let maxV = CoMath.createVec3(h, h, h);
    return this.create(minV, maxV);
  }

  create(minV, maxV) {
    this.m_cv = minV.clone().addBy(maxV).scaleBy(0.5);
    this.m_posList[0] = [maxV.x, minV.y, maxV.z];
    this.m_posList[1] = [maxV.x, minV.y, minV.z];
    this.m_posList[2] = [minV.x, minV.y, minV.z];
    this.m_posList[3] = [minV.x, minV.y, maxV.z];
    this.m_posList[4] = [maxV.x, maxV.y, maxV.z];
    this.m_posList[5] = [maxV.x, maxV.y, minV.z];
    this.m_posList[6] = [minV.x, maxV.y, minV.z];
    this.m_posList[7] = [minV.x, maxV.y, maxV.z];
    return this.createMesh();
  }

  scaleUVFaceAt(uvs, faceI, u, v, du, dv) {
    if (uvs != null && faceI >= 0 && faceI < 6) {
      let i = faceI * 8;
      let t = i + 8;

      for (; i < t; i += 2) {
        uvs[i] = u + uvs[i] * du;
        uvs[i + 1] = v + uvs[i + 1] * dv;
      }
    }
  }

  initUVData(baseI, uvs) {
    let uScale = this.uScale;
    let vScale = this.vScale;
    let i = 0;

    if (this.flipVerticalUV) {
      while (i < baseI) {
        uvs[i] = 1.0 * uScale;
        uvs[i + 1] = 1.0 * vScale;
        uvs[i + 2] = 0.0 * uScale;
        uvs[i + 3] = 1.0 * vScale;
        uvs[i + 4] = 0.0 * uScale;
        uvs[i + 5] = 0.0 * vScale;
        uvs[i + 6] = 1.0 * uScale;
        uvs[i + 7] = 0.0 * vScale;
        i += 8;
      }
    } else {
      while (i < baseI) {
        uvs[i] = 0.0 * uScale;
        uvs[i + 1] = 0.0 * vScale;
        uvs[i + 2] = 1.0 * uScale;
        uvs[i + 3] = 0.0 * vScale;
        uvs[i + 4] = 1.0 * uScale;
        uvs[i + 5] = 1.0 * vScale;
        uvs[i + 6] = 0.0 * uScale;
        uvs[i + 7] = 1.0 * vScale;
        i += 8;
      }
    }
  }

  setMeshData(mesh) {
    let facePosIds = [0, 1, 2, 3, 4, 5, 6, 7, 4, 5, 1, 0, 5, 6, 2, 1, 7, 6, 2, 3, 4, 7, 3, 0];
    let faceTotal = 6;
    let vtxTotal = 24;
    let i = 0;
    let k = 0;
    let baseI = 0;
    let vs = new Float32Array(72);
    let ivs = new Uint16Array(36);
    let flags = [3, 2, 3, 3, 2, 2];

    for (i = 0; i < 6; ++i) {
      if (flags[i] == 3) {
        ivs[baseI] = k + 3;
        ivs[baseI + 1] = k + 2;
        ivs[baseI + 2] = k + 1;
        ivs[baseI + 3] = k + 3;
        ivs[baseI + 4] = k + 1;
        ivs[baseI + 5] = k;
      } else {
        ivs[baseI] = k + 2;
        ivs[baseI + 1] = k + 3;
        ivs[baseI + 2] = k;
        ivs[baseI + 3] = k + 2;
        ivs[baseI + 4] = k;
        ivs[baseI + 5] = k + 1;
      }

      baseI += 6;
      k += 4;
    }

    let idList = facePosIds;
    let list = this.m_posList;
    let arr;
    k = 0;

    for (i = 0; i < vtxTotal; ++i) {
      arr = list[idList[i]];
      vs.set(arr, k);
      k += 3;
    }

    mesh.addFloat32Data(vs, 3);

    if (mesh.isUVSEnabled()) {
      let uvs = new Float32Array(48);
      this.initUVData(vtxTotal * 2, uvs);

      if (this.uvPartsNumber == 4) {
        this.scaleUVFaceAt(uvs, 0, 0.5, 0.5, 0.5, 0.5);
        this.scaleUVFaceAt(uvs, 1, 0.0, 0.0, 0.5, 0.5);
        this.scaleUVFaceAt(uvs, 2, 0.5, 0.0, 0.5, 0.5);
        this.scaleUVFaceAt(uvs, 3, 0.0, 0.5, 0.5, 0.5);
        this.scaleUVFaceAt(uvs, 4, 0.5, 0.0, 0.5, 0.5);
        this.scaleUVFaceAt(uvs, 5, 0.0, 0.5, 0.5, 0.5);
      } else if (this.uvPartsNumber == 6) {
        this.scaleUVFaceAt(uvs, 0, 0.0, 0.0, 0.25, 0.5);
        this.scaleUVFaceAt(uvs, 1, 0.25, 0.0, 0.25, 0.5);
        this.scaleUVFaceAt(uvs, 2, 0.5, 0.0, 0.25, 0.5);
        this.scaleUVFaceAt(uvs, 3, 0.75, 0.0, 0.25, 0.5);
        this.scaleUVFaceAt(uvs, 4, 0.0, 0.5, 0.25, 0.5);
        this.scaleUVFaceAt(uvs, 5, 0.25, 0.5, 0.25, 0.5);
      }

      mesh.addFloat32Data(uvs, 2);
    }

    if (mesh.isNVSEnabled()) {
      let nvs = new Float32Array(72);
      baseI = 0;
      let nx = 0.0;
      let ny = 0.0;
      let nz = 0.0;
      let s = this.normalScale;

      if (this.flatNormal) {
        while (baseI < faceTotal) {
          nx = 0.0;
          ny = 0.0;
          nz = 0.0;

          switch (baseI) {
            case 0:
              ny = -1.0;
              break;

            case 1:
              ny = 1.0;
              break;

            case 2:
              nx = 1.0;
              break;

            case 3:
              nz = -1.0;
              break;

            case 4:
              nx = -1.0;
              break;

            case 5:
              nz = 1.0;
              break;

            default:
              break;
          }

          i = baseI * 12;
          nx *= s;
          ny *= s;
          nz *= s;
          nvs[i] = nx;
          nvs[i + 1] = ny;
          nvs[i + 2] = nz;
          nvs[i + 3] = nx;
          nvs[i + 4] = ny;
          nvs[i + 5] = nz;
          nvs[i + 6] = nx;
          nvs[i + 7] = ny;
          nvs[i + 8] = nz;
          nvs[i + 9] = nx;
          nvs[i + 10] = ny;
          nvs[i + 11] = nz;
          ++baseI;
        }
      } else {
        let centV = this.m_cv;
        let d = 0.0;

        while (baseI < vtxTotal) {
          i = baseI * 3;
          nx = vs[i] - centV.x;
          ny = vs[i + 1] - centV.y;
          nz = vs[i + 2] - centV.z;
          d = Math.sqrt(nx * nx + ny * ny + nz * nz);

          if (d > 0.000001) {
            nvs[i] = nx / d;
            nvs[i + 1] = ny / d;
            nvs[i + 2] = nz / d;
          }

          ++baseI;
        }
      }

      mesh.addFloat32Data(nvs, 3);
    }

    mesh.setIVS(ivs);
  }

}

exports.BoxMeshBuilder = BoxMeshBuilder;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1eb2");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7f48");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ })

/******/ });