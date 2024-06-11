/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: beige;
  height: 100vh;
  width: 100vw;
}

button {
  color: rgb(254, 254, 254);
  font-size: 16px;
  line-height: 30px;
  padding: 13px;
  border-radius: 8px;
  font-family: Georgia, serif;
  font-weight: 900;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-shadow: 2px 2px 2px black;
  background-image: linear-gradient(
    to right,
    rgb(255, 153, 0) 0%,
    rgb(193, 116, 0) 100%
  );
  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
  border: 2px outset rgb(121, 73, 0);
  display: inline-block;
  max-height: 50px;
}
button:hover {
  background: #ff9900;
}
button:active {
  background: #c17400;
}

.mainMenu {
  display: grid;
  margin: 25%;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  gap: 25px;
}
.mainMenu button {
  color: rgb(254, 254, 254);
  font-size: 25px;
  line-height: 30px;
  padding: 13px;
  border-radius: 8px;
  font-family: Georgia, serif;
  font-weight: 900;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-shadow: 2px 2px 2px black;
  background-image: linear-gradient(
    to right,
    rgb(255, 153, 0) 0%,
    rgb(193, 116, 0) 100%
  );
  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
  border: 2px outset rgb(121, 73, 0);
  display: inline-block;
}
.mainMenu button:hover {
  background: #ff9900;
}
.mainMenu button:active {
  background: #c17400;
}
/* 
.menuScreen{
    display: none;
} */
/* .gameScreen {
    display:none
} */

.gameScreen {
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 8fr 1fr 1fr 8fr;
  justify-items: center;
  align-items: start;
}

.container,
.shipPlacementContainer {
  display: grid;
  grid-template-columns: repeat(10, 30px);
  grid-template-rows: repeat(10, 30px);
}
.container2 {
  display: grid;
  grid-template-columns: repeat(10, 30px);
  grid-template-rows: repeat(10, 30px);
}
.sqr {
  padding: 10px;
  border: 3px solid black;
  position: relative;
}

.notHit {
  background-color: #777777;
}

.shipNotHit {
  background-color: blue;
}

.hitNoShip {
  background: #9d0707;
  background: -moz-radial-gradient(
    center,
    #9d0707 0%,
    #777777 42%,
    #777777 100%
  );
  background: -webkit-radial-gradient(
    center,
    #9d0707 0%,
    #777777 42%,
    #777777 100%
  );
  background: radial-gradient(
    ellipse at center,
    #9d0707 0%,
    #777777 42%,
    #777777 100%
  );
}

.hitShip {
  background: #a40000;
  background: -moz-radial-gradient(
    center,
    #a40000 0%,
    #2168cb 52%,
    #144e75 100%
  );
  background: -webkit-radial-gradient(
    center,
    #a40000 0%,
    #2168cb 52%,
    #144e75 100%
  );
  background: radial-gradient(
    ellipse at center,
    #a40000 0%,
    #2168cb 52%,
    #144e75 100%
  );
}

.show {
  display: inline-block;
}


.shipContainer {
    grid-area: 1/2/5/3;
    align-self: center;
    text-align: center;
}

.pass {
    position: absolute;
    top: -70px;
    left: 0px;
    font-size: 24px;
  background-color: #777777;
  color: aliceblue;
}

.hideBtt {
    position: absolute;
    left: 135px;
    top: -5px;
}

.enemy {
    grid-area: 1/1/2/2;
}

.player {
    position: relative;
    grid-area: 4/1/5/2;
}

.shipPlaceScreen {
    display: grid;
    grid-template-rows: 1fr 1fr;
}

.sqr img {
  position: absolute;
  z-index: 1;
}
.hide {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/stylesheet.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,2BAA2B;EAC3B,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,8BAA8B;EAC9B;;;;GAIC;EACD,yCAAyC;EACzC,kCAAkC;EAClC,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,0BAA0B;EAC1B,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,2BAA2B;EAC3B,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,8BAA8B;EAC9B;;;;GAIC;EACD,yCAAyC;EACzC,kCAAkC;EAClC,qBAAqB;AACvB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;;;GAGG;AACH;;GAEG;;AAEH;EACE,aAAa;EACb,8BAA8B;EAC9B,mCAAmC;EACnC,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB;;;;;GAKC;EACD;;;;;GAKC;EACD;;;;;GAKC;AACH;;AAEA;EACE,mBAAmB;EACnB;;;;;GAKC;EACD;;;;;GAKC;EACD;;;;;GAKC;AACH;;AAEA;EACE,qBAAqB;AACvB;;;AAGA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,eAAe;EACjB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2BAA2B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,aAAa;AACf","sourcesContent":["body {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-color: beige;\n  height: 100vh;\n  width: 100vw;\n}\n\nbutton {\n  color: rgb(254, 254, 254);\n  font-size: 16px;\n  line-height: 30px;\n  padding: 13px;\n  border-radius: 8px;\n  font-family: Georgia, serif;\n  font-weight: 900;\n  text-decoration: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-shadow: 2px 2px 2px black;\n  background-image: linear-gradient(\n    to right,\n    rgb(255, 153, 0) 0%,\n    rgb(193, 116, 0) 100%\n  );\n  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;\n  border: 2px outset rgb(121, 73, 0);\n  display: inline-block;\n  max-height: 50px;\n}\nbutton:hover {\n  background: #ff9900;\n}\nbutton:active {\n  background: #c17400;\n}\n\n.mainMenu {\n  display: grid;\n  margin: 25%;\n  grid-template-columns: 1fr;\n  align-items: center;\n  justify-content: center;\n  gap: 25px;\n}\n.mainMenu button {\n  color: rgb(254, 254, 254);\n  font-size: 25px;\n  line-height: 30px;\n  padding: 13px;\n  border-radius: 8px;\n  font-family: Georgia, serif;\n  font-weight: 900;\n  text-decoration: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-shadow: 2px 2px 2px black;\n  background-image: linear-gradient(\n    to right,\n    rgb(255, 153, 0) 0%,\n    rgb(193, 116, 0) 100%\n  );\n  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;\n  border: 2px outset rgb(121, 73, 0);\n  display: inline-block;\n}\n.mainMenu button:hover {\n  background: #ff9900;\n}\n.mainMenu button:active {\n  background: #c17400;\n}\n/* \n.menuScreen{\n    display: none;\n} */\n/* .gameScreen {\n    display:none\n} */\n\n.gameScreen {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  grid-template-rows: 8fr 1fr 1fr 8fr;\n  justify-items: center;\n  align-items: start;\n}\n\n.container,\n.shipPlacementContainer {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n}\n.container2 {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n}\n.sqr {\n  padding: 10px;\n  border: 3px solid black;\n  position: relative;\n}\n\n.notHit {\n  background-color: #777777;\n}\n\n.shipNotHit {\n  background-color: blue;\n}\n\n.hitNoShip {\n  background: #9d0707;\n  background: -moz-radial-gradient(\n    center,\n    #9d0707 0%,\n    #777777 42%,\n    #777777 100%\n  );\n  background: -webkit-radial-gradient(\n    center,\n    #9d0707 0%,\n    #777777 42%,\n    #777777 100%\n  );\n  background: radial-gradient(\n    ellipse at center,\n    #9d0707 0%,\n    #777777 42%,\n    #777777 100%\n  );\n}\n\n.hitShip {\n  background: #a40000;\n  background: -moz-radial-gradient(\n    center,\n    #a40000 0%,\n    #2168cb 52%,\n    #144e75 100%\n  );\n  background: -webkit-radial-gradient(\n    center,\n    #a40000 0%,\n    #2168cb 52%,\n    #144e75 100%\n  );\n  background: radial-gradient(\n    ellipse at center,\n    #a40000 0%,\n    #2168cb 52%,\n    #144e75 100%\n  );\n}\n\n.show {\n  display: inline-block;\n}\n\n\n.shipContainer {\n    grid-area: 1/2/5/3;\n    align-self: center;\n    text-align: center;\n}\n\n.pass {\n    position: absolute;\n    top: -70px;\n    left: 0px;\n    font-size: 24px;\n  background-color: #777777;\n  color: aliceblue;\n}\n\n.hideBtt {\n    position: absolute;\n    left: 135px;\n    top: -5px;\n}\n\n.enemy {\n    grid-area: 1/1/2/2;\n}\n\n.player {\n    position: relative;\n    grid-area: 4/1/5/2;\n}\n\n.shipPlaceScreen {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n\n.sqr img {\n  position: absolute;\n  z-index: 1;\n}\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/stylesheet.css":
/*!****************************!*\
  !*** ./src/stylesheet.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./stylesheet.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/computerTakeTurn.js":
/*!*********************************!*\
  !*** ./src/computerTakeTurn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aiTakeTurn: () => (/* binding */ aiTakeTurn)
/* harmony export */ });
/* harmony import */ var _gameRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameRender */ "./src/gameRender.js");


function aiTakeTurn(player, humanPlayer){
    while(player.turn === true && player.takenTurns.length < 101) {
        if(!((player.possibleTurns.length) === 0)){
            let pt= player.possibleTurns.shift();
            if(!(player.takenTurns.includes(((pt[0]*10)+pt[1])))){
                console.log((pt[0]*10)+pt[1]);
                let sHit = humanPlayer.board.receiveAttack(pt);
                player.takenTurns.push((pt[0]*10)+pt[1]);
                if(sHit ===3 ){ 
                    if(pt[0]+1<10)            player.possibleTurns.push([pt[0]+1, pt[1]]);
                    if(pt[0]+1<10&&pt[1]+1<10)player.possibleTurns.push([pt[0]+1, pt[1]+1]);
                    if(pt[0]-1>-1)            player.possibleTurns.push([pt[0]-1, pt[1]]);
                    if(pt[0]-1>-1&&pt[1]-1>-1)player.possibleTurns.push([pt[0]-1, pt[1]-1])}
                player.takenTurns.push(pt);
                player.turn = false;
                humanPlayer.turn = true;
                (0,_gameRender__WEBPACK_IMPORTED_MODULE_0__.renderGameBoard)(humanPlayer, player, true);
        }else {aiTakeTurn(player,humanPlayer)}}
        else {
        let randomFirst = Math.floor(Math.random()*10);
        let randomSecond = Math.floor(Math.random()*10);
        if(!(player.takenTurns.includes((randomFirst*10)+randomSecond))){
            let hit = humanPlayer.board.receiveAttack([randomFirst, randomSecond]);
            if (hit === 3){ 
                if(randomFirst+1<10)                      player.possibleTurns.push([randomFirst+1, randomSecond]);
                if(randomFirst+1<10 && randomSecond+1<10) player.possibleTurns.push([randomFirst+1, randomSecond+1]);
                if(randomFirst-1>-1)                      player.possibleTurns.push([randomFirst-1, randomSecond]);
                if(randomFirst-1>-1 && randomSecond-1>-1) player.possibleTurns.push([randomFirst-1, randomSecond-1]);
            }
            player.takenTurns.push((randomFirst*10)+randomSecond);
            player.turn = false;
            humanPlayer.turn = true;
            console.log(randomFirst, randomSecond)
            ;(0,_gameRender__WEBPACK_IMPORTED_MODULE_0__.renderGameBoard)(humanPlayer, player, true);
        }
            else {aiTakeTurn(player,humanPlayer)}
        }
        }        
    }



/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameBoard: () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/ships.js");

function gameBoard(){return {
    boardMap : [[0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0]],
    shipsInfo : [],

    placeShip(coordinates){
        //[[0,0],[0,1]] [[column, row]]
        this.shipsInfo.push((0,_ships__WEBPACK_IMPORTED_MODULE_0__.Ship)(coordinates));
        for (let x of coordinates){
            this.boardMap[x[0]][x[1]] = 1;
        }
        },
    receiveAttack(coord){
        // console.log(this.boardMap[coord[0]][coord[1]]);
        let result = 0;
        if(this.boardMap[coord[0]][coord[1]] === 0){
            this.boardMap[coord[0]][coord[1]] = 2;
            result = 2
        }
        else if(this.boardMap[coord[0]][coord[1]] === 1){
            this.shipsInfo.forEach(ship => {
                ship.coordinates.forEach(cord => {
                if(cord[0] === coord[0] && cord[1] === coord[1]){
                    ship.hit(coord);
                    ship.isSunk();
                    this.boardMap[coord[0]][coord[1]] = 3;
                    result =3
                }    

                });
                })
                
            };
            return result
        },
    isSunkAll(){
        let sunk = true
        this.shipsInfo.forEach(element=> {
            if(element.sunk === false)
                sunk = false;
        });
        return sunk
    }
    }
    }





/***/ }),

/***/ "./src/gameRender.js":
/*!***************************!*\
  !*** ./src/gameRender.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGameBoard: () => (/* binding */ renderGameBoard)
/* harmony export */ });
/* harmony import */ var _computerTakeTurn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computerTakeTurn.js */ "./src/computerTakeTurn.js");


function renderGameBoard(
  player,
  player2,
  aiGame,
  contain = document.querySelector(".container"),
  contain2 = document.querySelector(".container2")
) {
  contain.innerHTML = "";
  contain2.innerHTML = "";

  player.board.boardMap.forEach((row) => {
    row.forEach((element) => {
      let allySqr = document.createElement("div");
      allySqr.classList.add("sqr");
      switch (element) {
        case 0:
          allySqr.classList.add("notHit");
          break;
        case 1:
          allySqr.classList.add("shipNotHit");
          break;
        case 2:
          allySqr.classList.add("hitNoShip");
          break;
        case 3:
          allySqr.classList.add("hitShip");
        default:
          break;
      }
      contain2.appendChild(allySqr);
    });
  });
  player2.board.boardMap.forEach((row, rowIdx) => {
    row.forEach((element, idx) => {
      let sqr = document.createElement("div");
      sqr.classList.add("sqr");
      sqr.addEventListener("click", () => {
        if(aiGame){
        if (player.turn) {
          player2.board.receiveAttack([rowIdx, idx]);
          renderGameBoard(player, player2,true);
          player.turn = false;
          player2.turn = true;
          console.log("human plays");
          (0,_computerTakeTurn_js__WEBPACK_IMPORTED_MODULE_0__.aiTakeTurn)(player2, player)}}

          else if(aiGame === false){
          if (player.turn) {
          player2.board.receiveAttack([rowIdx, idx]);
          renderGameBoard(player, player2,false);
          player.turn = false;
          player2.turn = true;
          console.log("human plays")}
          //CHANGE SOME TEXT CONTENT TO IT'S THE PLAYER2'S TURN
        }
      });
      switch (element) {
        case 0:
          sqr.classList.add("notHit");
          break;
        case 1:
          sqr.classList.add("notHit");
          break;
        case 2:
          sqr.classList.add("hitNoShip");
          break;
        case 3:
          sqr.classList.add("hitShip");
        default:
          break;
      }
      contain.appendChild(sqr);
    });
  })}





/***/ }),

/***/ "./src/gameStart.js":
/*!**************************!*\
  !*** ./src/gameStart.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aiGameStart: () => (/* binding */ aiGameStart),
/* harmony export */   currentPlayers: () => (/* binding */ currentPlayers),
/* harmony export */   playerGameStart: () => (/* binding */ playerGameStart)
/* harmony export */ });
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players.js */ "./src/players.js");
/* harmony import */ var _gameRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameRender.js */ "./src/gameRender.js");
/* harmony import */ var _renderShips_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderShips.js */ "./src/renderShips.js");





let aiGame = 0;

function aiGameStart() {
  //Starts the game with computer
  const player1 = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.Player)()
  const player2 = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.Player)() //COMPUTER
  aiGame = 1;
  document.querySelector(".menuScreen").classList.add("hide");
  document.querySelector(".shipPlaceScreen").classList.remove("hide");
  (0,_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.renderShips)(player1);
  (0,_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.renderPlacementContainer)(player1);
  // aiSelectsShips();
  

  
  // take these into selection screen confirment button
  // player1.turn = true;
  // document.querySelector(".screen").classList.remove("hide");
  // document.querySelector(".hideBtt").classList.add("hide");
  // document.querySelector(".pass").classList.add("hide");
  // renderGameBoard(player1, player2, true);
}

let currentPlayers = [];

function playerGameStart() {
  //Start 2-player game
  document.querySelector(".pass").classList.add("show");

  player1.turn = true;
  currentPlayers.push(player1, player2);
  document.querySelector(".menuScreen").classList.add("hide");
  document.querySelector(".screen").classList.remove("hide");
  (0,_gameRender_js__WEBPACK_IMPORTED_MODULE_1__.renderGameBoard)(player1, player2, false);
  (0,_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.renderShips)(player1);
}




/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");

function Player() { return {
    //Each player receives 1x5
    //                     2x4
    //                     3x3
    //                     4x2 squared ships

    shipsToPlace : [5,4,4,3,3,3,2,2,2,2],
    board : (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.gameBoard)(),
    turn : false,
    takenTurns : [],
    possibleTurns : [],
}};





/***/ }),

/***/ "./src/renderShips.js":
/*!****************************!*\
  !*** ./src/renderShips.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderPlacementContainer: () => (/* binding */ renderPlacementContainer),
/* harmony export */   renderShips: () => (/* binding */ renderShips)
/* harmony export */ });
/* harmony import */ var _two_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./two.png */ "./src/two.png");

const shipContainer = document.querySelector(".shipContainer");
const ships = document.createElement("ul");
shipContainer.appendChild(ships);

// const axisChangeBtt = document.querySelector(".axisChange");
// const currentAxis = 0;
// //if 0 => axis is x ; if 1 => axis is y
// axisChangeBtt.addEventListener("click", ()=>{
// if(currentAxis === 0 ) currentAxis = 1;
// else if (currentAxis === 1 ) currentAxis = 0;
// })

let placedShipLength = 0;

let placedCoords = [];

function renderShips(player) {
  player.shipsToPlace.forEach((ele, idx) => {
    const shipImg = document.createElement("img");
    shipImg.src = _two_png__WEBPACK_IMPORTED_MODULE_0__;
    shipImg.id = `ship${idx}`;
    shipImg.setAttribute(
      "style",
      `width : calc(${ele}*30px); 
      height:30px;
      object-fit:fill;
      draggable:"true"; 
      top: -3px;
      left: -3px`
    );
    shipImg.classList.add("xAxis");
    shipImg.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("id", e.target.id);
      e.dataTransfer.setData("class", e.target.classList);
      placedShipLength = ele;
    });
    ships.appendChild(shipImg);
  })
  };


function renderPlacementContainer(player) {
  const shipsCoordinates = {};
  player.board.boardMap.forEach((row, rowIdx) => {
    row.forEach((element, idx) => {
      let allySqr = document.createElement("div");
      allySqr.classList.add("sqr");

      allySqr.addEventListener("drop", (e) => {
        
        function checkLegal(e) {
             let result = true;
             const data = e.dataTransfer.getData("id");
            const draggedShip = document.querySelector(`#${data}`);
             if (draggedShip.classList.contains("xAxis")){
               if ((placedShipLength + idx) > 10) result = false;
               for (let i = 0; i< placedShipLength; i++){
              if( placedCoords.includes(rowIdx*10 + idx+i)){
               result = false}}}
             else if (draggedShip.classList.contains("yAxis")){
               if ( (placedShipLength + rowIdx) > 10) result = false;
               for (let i = 0; i< placedShipLength; i++){
              if( placedCoords.includes((rowIdx+i)*10 + idx)){
  
               result = false}
              }
           }             
           return result}
        
          if (checkLegal(e))
          {
            
        e.preventDefault();
        const data = e.dataTransfer.getData("id");
        const axis = e.dataTransfer.getData("class");
        e.target.appendChild(document.querySelector(`#${data}`));
        shipsCoordinates[`${data}`] = [
          rowIdx * 10 + idx,
          placedShipLength,
          axis,
        ];
  
        placedCoords = coordCalc(shipsCoordinates);
        function coordCalc(shipsCoordinates){
          let result =[];
          for(let ele in shipsCoordinates){
            if (shipsCoordinates[ele][2]==="xAxis"){
              for (let i = 0; i<shipsCoordinates[ele][1]; i++){
                result.push(shipsCoordinates[ele][0] + i)
              }  
            }
            else if (shipsCoordinates[ele][2]==="yAxis"){
              for (let i = 0; i<shipsCoordinates[ele][1]; i++){
                result.push(shipsCoordinates[ele][0] + (i*10))
              }
            }
          }
          
          return result
        }
        document.querySelector(`#${data}`).addEventListener("dblclick", (e) => {
          function checkLegalTurn() {
            let result = true;
            let cordStr = shipsCoordinates[data][0].toString().padStart(2, "0");
            let idx = parseInt(cordStr.at(1)) ; 
            let rowIdx = parseInt(cordStr.at(0));
           const draggedShip = document.querySelector(`#${data}`);
            if (draggedShip.classList.contains("xAxis")){
              if ((shipsCoordinates[data][1]+ rowIdx) > 10) result = false;
              for (let i = 1; i< placedShipLength; i++){
             if( placedCoords.includes((rowIdx+i)*10 + idx)){
              result = false}}}
            else if (draggedShip.classList.contains("yAxis")){
              if ( (shipsCoordinates[data][1] + idx) > 10) result = false;
              for (let i = 1; i< placedShipLength; i++){
             if( placedCoords.includes((rowIdx)*10 + idx+i)){
              result = false}
             }
          }
          if(result === false) console.log("IT ISNT LEGAL")
          return result
          }
    
          if(checkLegalTurn()){
          if (shipsCoordinates[data][2]==="xAxis") {
            e.target.classList.remove("xAxis");
            e.target.classList.add("yAxis");
            e.target.setAttribute(
            "style",
            `width : 30px; 
            height:calc(${shipsCoordinates[data][1]}*30px);
            object-fit:fill;
            draggable:"true"; 
            top: -6px;
            left: -3px`);
          } else if (shipsCoordinates[data][2]==="yAxis") {
            e.target.classList.add("xAxis");
            e.target.classList.remove("yAxis");
            e.target.setAttribute(
            "style",
           `width : calc(${shipsCoordinates[data][1]}*30px); 
            height:30px;
            object-fit:fill;
            draggable:"true"; 
            top: -3px;
            left: -3px`);
          }
          placedCoords = coordCalc(shipsCoordinates);

        }})

}
      });

      allySqr.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      switch (element) {
        case 0:
          allySqr.classList.add("notHit");
          break;
        case 1:
          allySqr.classList.add("shipNotHit");
          break;
      }
      document.querySelector(".shipPlacementContainer").appendChild(allySqr);
    });
  });
}



//also add a button to change the placement of the ship


/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function Ship (coordinates) {return {
    length : coordinates.length,
    hp : coordinates.length,
    coordinates : coordinates,
    sunk : false,
    
    hit(coordinate){
            let index = 0;
        this.coordinates.forEach((coord, idx)=>{
            if(coord[0]===coordinate[0]&& coord[1]===coordinate[1]){
                index = idx;
            }
        })
        this.coordinates.splice(index, 1)
        if(this.hp>0){
        this.hp -= 1}
    },
    isSunk(){
        if(this.hp===0&&this.coordinates.length === 0){
            this.sunk = true;
            return true
        }
    }
}}


/***/ }),

/***/ "./src/two.png":
/*!*********************!*\
  !*** ./src/two.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b23da5c057f56f7bcea7.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ "./src/ships.js");
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard.js */ "./src/gameBoard.js");
/* harmony import */ var _stylesheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheet.css */ "./src/stylesheet.css");
/* harmony import */ var _gameStart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameStart.js */ "./src/gameStart.js");
/* harmony import */ var _gameRender_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameRender.js */ "./src/gameRender.js");
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./players.js */ "./src/players.js");
/* harmony import */ var _renderShips_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderShips.js */ "./src/renderShips.js");




 





//Main Menu
const aiStartBtt = document.querySelector("#aiGame");
const humanStartBtt = document.querySelector("#humanGame");
//take the game to ship selection
const creditsBtt = document.querySelector("#credits");

aiStartBtt.addEventListener("click", ()=>{
    (0,_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.aiGameStart)();
})

humanStartBtt.addEventListener("click", ()=>{
    ;(0,_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.playerGameStart)();
})

//Confirm ship selection
const confirmBtt = document.querySelector(".confirmSelect");

confirmBtt.addEventListener("click", ()=>{

})

// Passing the screen implementation
const passButton = document.querySelector(".pass");
const turnStart = document.querySelector(".passScreen");
const gameScreen = document.querySelector(".screen");
const hideBtt = document.querySelector(".hideBtt");




// document.addEventListener("keyup", event=>{
//     if(event.code=== "Space"){
//     if(passButton.classList.contains("show")){
//     gameScreen.classList.toggle("hide");
//     turnStart.classList.toggle("hide")}
// }
// })

//Make sure the player has played their turn
//Keep the track of which screen is showing so that i can change it 

passButton.addEventListener("click", ()=>{
    gameScreen.classList.toggle("hide");
    turnStart.classList.toggle("hide");
})

turnStart.addEventListener("click", ()=>{
    gameScreen.classList.toggle("hide");
    turnStart.classList.toggle("hide");
    if(_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[0].turn) {(0,_gameRender_js__WEBPACK_IMPORTED_MODULE_4__.renderGameBoard)(_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[0],_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[1],false)}
    else if(_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[1].turn) { (0,_gameRender_js__WEBPACK_IMPORTED_MODULE_4__.renderGameBoard)(_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[1], _gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[0], false)}
    //if the last turn played is player1 => render for player2
    //else if the last turn played is player2 =>render for player1
})

hideBtt.addEventListener("click", ()=>{
    const playerBoard = document.querySelector(".container2");
        playerBoard.classList.toggle("hide")
})

//TODO
//there should be a confirm button for ship selection
//implement a way so that ai can put ships
//currently ship selection screen and the actual game screen looks way different // implement the ship selection screen look to the actual game screen with ships being rendered as they are in selection screen
    // Implementing the ship selection screen look to the actual game will break how the hits are being rendered // find a different way to render it
//Implement the win condition
//Implement a win screen

//implement a button so i can change the index  



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFGQUFxRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sS0FBSyxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksVUFBVSxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssTUFBTSxLQUFLLFlBQVksVUFBVSxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsK0JBQStCLGtCQUFrQiw0QkFBNEIsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsa0JBQWtCLGlCQUFpQixHQUFHLFlBQVksOEJBQThCLG9CQUFvQixzQkFBc0Isa0JBQWtCLHVCQUF1QixnQ0FBZ0MscUJBQXFCLDBCQUEwQix1QkFBdUIseUJBQXlCLHlCQUF5QixtQ0FBbUMsZ0hBQWdILDhDQUE4Qyx1Q0FBdUMsMEJBQTBCLHFCQUFxQixHQUFHLGdCQUFnQix3QkFBd0IsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsZUFBZSxrQkFBa0IsZ0JBQWdCLCtCQUErQix3QkFBd0IsNEJBQTRCLGNBQWMsR0FBRyxvQkFBb0IsOEJBQThCLG9CQUFvQixzQkFBc0Isa0JBQWtCLHVCQUF1QixnQ0FBZ0MscUJBQXFCLDBCQUEwQix1QkFBdUIseUJBQXlCLHlCQUF5QixtQ0FBbUMsZ0hBQWdILDhDQUE4Qyx1Q0FBdUMsMEJBQTBCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxtQkFBbUIsb0JBQW9CLElBQUksb0JBQW9CLHNCQUFzQixtQkFBbUIsa0JBQWtCLG1DQUFtQyx3Q0FBd0MsMEJBQTBCLHVCQUF1QixHQUFHLDBDQUEwQyxrQkFBa0IsNENBQTRDLHlDQUF5QyxHQUFHLGVBQWUsa0JBQWtCLDRDQUE0Qyx5Q0FBeUMsR0FBRyxRQUFRLGtCQUFrQiw0QkFBNEIsdUJBQXVCLEdBQUcsYUFBYSw4QkFBOEIsR0FBRyxpQkFBaUIsMkJBQTJCLEdBQUcsZ0JBQWdCLHdCQUF3Qiw2R0FBNkcsZ0hBQWdILG1IQUFtSCxHQUFHLGNBQWMsd0JBQXdCLDZHQUE2RyxnSEFBZ0gsbUhBQW1ILEdBQUcsV0FBVywwQkFBMEIsR0FBRyxzQkFBc0IseUJBQXlCLHlCQUF5Qix5QkFBeUIsR0FBRyxXQUFXLHlCQUF5QixpQkFBaUIsZ0JBQWdCLHNCQUFzQiw4QkFBOEIscUJBQXFCLEdBQUcsY0FBYyx5QkFBeUIsa0JBQWtCLGdCQUFnQixHQUFHLFlBQVkseUJBQXlCLEdBQUcsYUFBYSx5QkFBeUIseUJBQXlCLEdBQUcsc0JBQXNCLG9CQUFvQixrQ0FBa0MsR0FBRyxjQUFjLHVCQUF1QixlQUFlLEdBQUcsU0FBUyxrQkFBa0IsR0FBRyxxQkFBcUI7QUFDMXFLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDdk4xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywyRkFBTzs7OztBQUlrRDtBQUMxRSxPQUFPLGlFQUFlLDJGQUFPLElBQUksMkZBQU8sVUFBVSwyRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYitDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBZTtBQUMvQixTQUFTLE1BQU07QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFlO0FBQzNCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QytCO0FBQy9CLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsNENBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRG1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnRUFBVTs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7OztBQUd3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RVc7QUFDWTtBQUN1Qjs7O0FBR3pFOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsbURBQU07QUFDeEIsa0JBQWtCLG1EQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNERBQVc7QUFDYixFQUFFLHlFQUF3QjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBZTtBQUNqQixFQUFFLDREQUFXO0FBQ2I7O0FBRXVEOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNoQjtBQUN2QyxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHFEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1o0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBRztBQUNyQix3QkFBd0IsSUFBSTtBQUM1QjtBQUNBO0FBQ0Esc0JBQXNCLElBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsS0FBSztBQUNoRTtBQUNBO0FBQ0EsK0JBQStCLHFCQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxQkFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsS0FBSztBQUM3RCw0QkFBNEIsS0FBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0QkFBNEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNEJBQTRCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEtBQUs7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxLQUFLO0FBQy9EO0FBQ0E7QUFDQSw4QkFBOEIscUJBQXFCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFCQUFxQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMEJBQTBCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVOztBQUVWO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVpRDs7QUFFakQ7Ozs7Ozs7Ozs7Ozs7OztBQzlLQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NrQztBQUNPO0FBQ2Y7QUFDb0M7QUFDWjtBQUNGO0FBQ1Y7QUFDbUM7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUFXO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBLElBQUksK0RBQWU7QUFDbkIsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlEQUFjLFdBQVcsK0RBQWUsQ0FBQyx5REFBYyxJQUFJLHlEQUFjO0FBQ2hGLFlBQVkseURBQWMsWUFBWSwrREFBZSxDQUFDLHlEQUFjLEtBQUsseURBQWM7QUFDdkY7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlc2hlZXQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlc2hlZXQuY3NzP2Q3NGQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9jb21wdXRlclRha2VUdXJuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lUmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVTdGFydC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3JlbmRlclNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6IHJnYigyNTQsIDI1NCwgMjU0KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgIHJnYigyNTUsIDE1MywgMCkgMCUsXG4gICAgcmdiKDE5MywgMTE2LCAwKSAxMDAlXG4gICk7XG4gIGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSA1cHggNXB4IDE1cHggNXB4O1xuICBib3JkZXI6IDJweCBvdXRzZXQgcmdiKDEyMSwgNzMsIDApO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY5OTAwO1xufVxuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNjMTc0MDA7XG59XG5cbi5tYWluTWVudSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbjogMjUlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjVweDtcbn1cbi5tYWluTWVudSBidXR0b24ge1xuICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgcmdiKDI1NSwgMTUzLCAwKSAwJSxcbiAgICByZ2IoMTkzLCAxMTYsIDApIDEwMCVcbiAgKTtcbiAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDVweCA1cHggMTVweCA1cHg7XG4gIGJvcmRlcjogMnB4IG91dHNldCByZ2IoMTIxLCA3MywgMCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5tYWluTWVudSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY5OTAwO1xufVxuLm1haW5NZW51IGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjYzE3NDAwO1xufVxuLyogXG4ubWVudVNjcmVlbntcbiAgICBkaXNwbGF5OiBub25lO1xufSAqL1xuLyogLmdhbWVTY3JlZW4ge1xuICAgIGRpc3BsYXk6bm9uZVxufSAqL1xuXG4uZ2FtZVNjcmVlbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZnIgMWZyIDFmciA4ZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uY29udGFpbmVyLFxuLnNoaXBQbGFjZW1lbnRDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcbn1cbi5jb250YWluZXIyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XG59XG4uc3FyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5vdEhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XG59XG5cbi5zaGlwTm90SGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmhpdE5vU2hpcCB7XG4gIGJhY2tncm91bmQ6ICM5ZDA3MDc7XG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KFxuICAgIGNlbnRlcixcbiAgICAjOWQwNzA3IDAlLFxuICAgICM3Nzc3NzcgNDIlLFxuICAgICM3Nzc3NzcgMTAwJVxuICApO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChcbiAgICBjZW50ZXIsXG4gICAgIzlkMDcwNyAwJSxcbiAgICAjNzc3Nzc3IDQyJSxcbiAgICAjNzc3Nzc3IDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgIGVsbGlwc2UgYXQgY2VudGVyLFxuICAgICM5ZDA3MDcgMCUsXG4gICAgIzc3Nzc3NyA0MiUsXG4gICAgIzc3Nzc3NyAxMDAlXG4gICk7XG59XG5cbi5oaXRTaGlwIHtcbiAgYmFja2dyb3VuZDogI2E0MDAwMDtcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoXG4gICAgY2VudGVyLFxuICAgICNhNDAwMDAgMCUsXG4gICAgIzIxNjhjYiA1MiUsXG4gICAgIzE0NGU3NSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KFxuICAgIGNlbnRlcixcbiAgICAjYTQwMDAwIDAlLFxuICAgICMyMTY4Y2IgNTIlLFxuICAgICMxNDRlNzUgMTAwJVxuICApO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgZWxsaXBzZSBhdCBjZW50ZXIsXG4gICAgI2E0MDAwMCAwJSxcbiAgICAjMjE2OGNiIDUyJSxcbiAgICAjMTQ0ZTc1IDEwMCVcbiAgKTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cblxuLnNoaXBDb250YWluZXIge1xuICAgIGdyaWQtYXJlYTogMS8yLzUvMztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTcwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NztcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuLmhpZGVCdHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMzVweDtcbiAgICB0b3A6IC01cHg7XG59XG5cbi5lbmVteSB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xufVxuXG4ucGxheWVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xufVxuXG4uc2hpcFBsYWNlU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbn1cblxuLnNxciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCOzs7O0dBSUM7RUFDRCx5Q0FBeUM7RUFDekMsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCOzs7O0dBSUM7RUFDRCx5Q0FBeUM7RUFDekMsa0NBQWtDO0VBQ2xDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTs7O0dBR0c7QUFDSDs7R0FFRzs7QUFFSDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUNBQW1DO0VBQ25DLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQjs7Ozs7R0FLQztFQUNEOzs7OztHQUtDO0VBQ0Q7Ozs7O0dBS0M7QUFDSDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQjs7Ozs7R0FLQztFQUNEOzs7OztHQUtDO0VBQ0Q7Ozs7O0dBS0M7QUFDSDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDEzcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHJnYigyNTUsIDE1MywgMCkgMCUsXFxuICAgIHJnYigxOTMsIDExNiwgMCkgMTAwJVxcbiAgKTtcXG4gIGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSA1cHggNXB4IDE1cHggNXB4O1xcbiAgYm9yZGVyOiAycHggb3V0c2V0IHJnYigxMjEsIDczLCAwKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1heC1oZWlnaHQ6IDUwcHg7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmY5OTAwO1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNjMTc0MDA7XFxufVxcblxcbi5tYWluTWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luOiAyNSU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjVweDtcXG59XFxuLm1haW5NZW51IGJ1dHRvbiB7XFxuICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiAxM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICByZ2IoMjU1LCAxNTMsIDApIDAlLFxcbiAgICByZ2IoMTkzLCAxMTYsIDApIDEwMCVcXG4gICk7XFxuICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgNXB4IDVweCAxNXB4IDVweDtcXG4gIGJvcmRlcjogMnB4IG91dHNldCByZ2IoMTIxLCA3MywgMCk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5tYWluTWVudSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmOTkwMDtcXG59XFxuLm1haW5NZW51IGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2MxNzQwMDtcXG59XFxuLyogXFxuLm1lbnVTY3JlZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcbi8qIC5nYW1lU2NyZWVuIHtcXG4gICAgZGlzcGxheTpub25lXFxufSAqL1xcblxcbi5nYW1lU2NyZWVuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDhmciAxZnIgMWZyIDhmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmNvbnRhaW5lcixcXG4uc2hpcFBsYWNlbWVudENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbn1cXG4uY29udGFpbmVyMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbn1cXG4uc3FyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5vdEhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xcbn1cXG5cXG4uc2hpcE5vdEhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaGl0Tm9TaGlwIHtcXG4gIGJhY2tncm91bmQ6ICM5ZDA3MDc7XFxuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChcXG4gICAgY2VudGVyLFxcbiAgICAjOWQwNzA3IDAlLFxcbiAgICAjNzc3Nzc3IDQyJSxcXG4gICAgIzc3Nzc3NyAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNlbnRlcixcXG4gICAgIzlkMDcwNyAwJSxcXG4gICAgIzc3Nzc3NyA0MiUsXFxuICAgICM3Nzc3NzcgMTAwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgZWxsaXBzZSBhdCBjZW50ZXIsXFxuICAgICM5ZDA3MDcgMCUsXFxuICAgICM3Nzc3NzcgNDIlLFxcbiAgICAjNzc3Nzc3IDEwMCVcXG4gICk7XFxufVxcblxcbi5oaXRTaGlwIHtcXG4gIGJhY2tncm91bmQ6ICNhNDAwMDA7XFxuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChcXG4gICAgY2VudGVyLFxcbiAgICAjYTQwMDAwIDAlLFxcbiAgICAjMjE2OGNiIDUyJSxcXG4gICAgIzE0NGU3NSAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNlbnRlcixcXG4gICAgI2E0MDAwMCAwJSxcXG4gICAgIzIxNjhjYiA1MiUsXFxuICAgICMxNDRlNzUgMTAwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgZWxsaXBzZSBhdCBjZW50ZXIsXFxuICAgICNhNDAwMDAgMCUsXFxuICAgICMyMTY4Y2IgNTIlLFxcbiAgICAjMTQ0ZTc1IDEwMCVcXG4gICk7XFxufVxcblxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuXFxuLnNoaXBDb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDEvMi81LzM7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGFzcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNzBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLmhpZGVCdHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEzNXB4O1xcbiAgICB0b3A6IC01cHg7XFxufVxcblxcbi5lbmVteSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuLnBsYXllciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xcbn1cXG5cXG4uc2hpcFBsYWNlU2NyZWVuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4uc3FyIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXNoZWV0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlc2hlZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZW5kZXJHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lUmVuZGVyXCI7XG5cbmZ1bmN0aW9uIGFpVGFrZVR1cm4ocGxheWVyLCBodW1hblBsYXllcil7XG4gICAgd2hpbGUocGxheWVyLnR1cm4gPT09IHRydWUgJiYgcGxheWVyLnRha2VuVHVybnMubGVuZ3RoIDwgMTAxKSB7XG4gICAgICAgIGlmKCEoKHBsYXllci5wb3NzaWJsZVR1cm5zLmxlbmd0aCkgPT09IDApKXtcbiAgICAgICAgICAgIGxldCBwdD0gcGxheWVyLnBvc3NpYmxlVHVybnMuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmKCEocGxheWVyLnRha2VuVHVybnMuaW5jbHVkZXMoKChwdFswXSoxMCkrcHRbMV0pKSkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKChwdFswXSoxMCkrcHRbMV0pO1xuICAgICAgICAgICAgICAgIGxldCBzSGl0ID0gaHVtYW5QbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhwdCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnRha2VuVHVybnMucHVzaCgocHRbMF0qMTApK3B0WzFdKTtcbiAgICAgICAgICAgICAgICBpZihzSGl0ID09PTMgKXsgXG4gICAgICAgICAgICAgICAgICAgIGlmKHB0WzBdKzE8MTApICAgICAgICAgICAgcGxheWVyLnBvc3NpYmxlVHVybnMucHVzaChbcHRbMF0rMSwgcHRbMV1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYocHRbMF0rMTwxMCYmcHRbMV0rMTwxMClwbGF5ZXIucG9zc2libGVUdXJucy5wdXNoKFtwdFswXSsxLCBwdFsxXSsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHB0WzBdLTE+LTEpICAgICAgICAgICAgcGxheWVyLnBvc3NpYmxlVHVybnMucHVzaChbcHRbMF0tMSwgcHRbMV1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYocHRbMF0tMT4tMSYmcHRbMV0tMT4tMSlwbGF5ZXIucG9zc2libGVUdXJucy5wdXNoKFtwdFswXS0xLCBwdFsxXS0xXSl9XG4gICAgICAgICAgICAgICAgcGxheWVyLnRha2VuVHVybnMucHVzaChwdCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBodW1hblBsYXllci50dXJuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZW5kZXJHYW1lQm9hcmQoaHVtYW5QbGF5ZXIsIHBsYXllciwgdHJ1ZSk7XG4gICAgICAgIH1lbHNlIHthaVRha2VUdXJuKHBsYXllcixodW1hblBsYXllcil9fVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgbGV0IHJhbmRvbUZpcnN0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgbGV0IHJhbmRvbVNlY29uZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGlmKCEocGxheWVyLnRha2VuVHVybnMuaW5jbHVkZXMoKHJhbmRvbUZpcnN0KjEwKStyYW5kb21TZWNvbmQpKSl7XG4gICAgICAgICAgICBsZXQgaGl0ID0gaHVtYW5QbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhbcmFuZG9tRmlyc3QsIHJhbmRvbVNlY29uZF0pO1xuICAgICAgICAgICAgaWYgKGhpdCA9PT0gMyl7IFxuICAgICAgICAgICAgICAgIGlmKHJhbmRvbUZpcnN0KzE8MTApICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wb3NzaWJsZVR1cm5zLnB1c2goW3JhbmRvbUZpcnN0KzEsIHJhbmRvbVNlY29uZF0pO1xuICAgICAgICAgICAgICAgIGlmKHJhbmRvbUZpcnN0KzE8MTAgJiYgcmFuZG9tU2Vjb25kKzE8MTApIHBsYXllci5wb3NzaWJsZVR1cm5zLnB1c2goW3JhbmRvbUZpcnN0KzEsIHJhbmRvbVNlY29uZCsxXSk7XG4gICAgICAgICAgICAgICAgaWYocmFuZG9tRmlyc3QtMT4tMSkgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBvc3NpYmxlVHVybnMucHVzaChbcmFuZG9tRmlyc3QtMSwgcmFuZG9tU2Vjb25kXSk7XG4gICAgICAgICAgICAgICAgaWYocmFuZG9tRmlyc3QtMT4tMSAmJiByYW5kb21TZWNvbmQtMT4tMSkgcGxheWVyLnBvc3NpYmxlVHVybnMucHVzaChbcmFuZG9tRmlyc3QtMSwgcmFuZG9tU2Vjb25kLTFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllci50YWtlblR1cm5zLnB1c2goKHJhbmRvbUZpcnN0KjEwKStyYW5kb21TZWNvbmQpO1xuICAgICAgICAgICAgcGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgIGh1bWFuUGxheWVyLnR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmFuZG9tRmlyc3QsIHJhbmRvbVNlY29uZClcbiAgICAgICAgICAgIHJlbmRlckdhbWVCb2FyZChodW1hblBsYXllciwgcGxheWVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7YWlUYWtlVHVybihwbGF5ZXIsaHVtYW5QbGF5ZXIpfVxuICAgICAgICB9XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuZXhwb3J0IHsgYWlUYWtlVHVybiB9OyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwc1wiO1xuZnVuY3Rpb24gZ2FtZUJvYXJkKCl7cmV0dXJuIHtcbiAgICBib2FyZE1hcCA6IFtbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF1dLFxuICAgIHNoaXBzSW5mbyA6IFtdLFxuXG4gICAgcGxhY2VTaGlwKGNvb3JkaW5hdGVzKXtcbiAgICAgICAgLy9bWzAsMF0sWzAsMV1dIFtbY29sdW1uLCByb3ddXVxuICAgICAgICB0aGlzLnNoaXBzSW5mby5wdXNoKFNoaXAoY29vcmRpbmF0ZXMpKTtcbiAgICAgICAgZm9yIChsZXQgeCBvZiBjb29yZGluYXRlcyl7XG4gICAgICAgICAgICB0aGlzLmJvYXJkTWFwW3hbMF1dW3hbMV1dID0gMTtcbiAgICAgICAgfVxuICAgICAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soY29vcmQpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJvYXJkTWFwW2Nvb3JkWzBdXVtjb29yZFsxXV0pO1xuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICAgICAgaWYodGhpcy5ib2FyZE1hcFtjb29yZFswXV1bY29vcmRbMV1dID09PSAwKXtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRNYXBbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IDI7XG4gICAgICAgICAgICByZXN1bHQgPSAyXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmJvYXJkTWFwW2Nvb3JkWzBdXVtjb29yZFsxXV0gPT09IDEpe1xuICAgICAgICAgICAgdGhpcy5zaGlwc0luZm8uZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYoY29yZFswXSA9PT0gY29vcmRbMF0gJiYgY29yZFsxXSA9PT0gY29vcmRbMV0pe1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdChjb29yZCk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuaXNTdW5rKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRNYXBbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9M1xuICAgICAgICAgICAgICAgIH0gICAgXG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfSxcbiAgICBpc1N1bmtBbGwoKXtcbiAgICAgICAgbGV0IHN1bmsgPSB0cnVlXG4gICAgICAgIHRoaXMuc2hpcHNJbmZvLmZvckVhY2goZWxlbWVudD0+IHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuc3VuayA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgc3VuayA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN1bmtcbiAgICB9XG4gICAgfVxuICAgIH1cblxuXG5cbmV4cG9ydCB7IGdhbWVCb2FyZCB9IiwiaW1wb3J0IHsgYWlUYWtlVHVybiB9IGZyb20gXCIuL2NvbXB1dGVyVGFrZVR1cm4uanNcIjtcblxuZnVuY3Rpb24gcmVuZGVyR2FtZUJvYXJkKFxuICBwbGF5ZXIsXG4gIHBsYXllcjIsXG4gIGFpR2FtZSxcbiAgY29udGFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLFxuICBjb250YWluMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyMlwiKVxuKSB7XG4gIGNvbnRhaW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGFpbjIuaW5uZXJIVE1MID0gXCJcIjtcblxuICBwbGF5ZXIuYm9hcmQuYm9hcmRNYXAuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBhbGx5U3FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGFsbHlTcXIuY2xhc3NMaXN0LmFkZChcInNxclwiKTtcbiAgICAgIHN3aXRjaCAoZWxlbWVudCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgYWxseVNxci5jbGFzc0xpc3QuYWRkKFwibm90SGl0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgYWxseVNxci5jbGFzc0xpc3QuYWRkKFwic2hpcE5vdEhpdFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGFsbHlTcXIuY2xhc3NMaXN0LmFkZChcImhpdE5vU2hpcFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGFsbHlTcXIuY2xhc3NMaXN0LmFkZChcImhpdFNoaXBcIik7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb250YWluMi5hcHBlbmRDaGlsZChhbGx5U3FyKTtcbiAgICB9KTtcbiAgfSk7XG4gIHBsYXllcjIuYm9hcmQuYm9hcmRNYXAuZm9yRWFjaCgocm93LCByb3dJZHgpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoZWxlbWVudCwgaWR4KSA9PiB7XG4gICAgICBsZXQgc3FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxci5jbGFzc0xpc3QuYWRkKFwic3FyXCIpO1xuICAgICAgc3FyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmKGFpR2FtZSl7XG4gICAgICAgIGlmIChwbGF5ZXIudHVybikge1xuICAgICAgICAgIHBsYXllcjIuYm9hcmQucmVjZWl2ZUF0dGFjayhbcm93SWR4LCBpZHhdKTtcbiAgICAgICAgICByZW5kZXJHYW1lQm9hcmQocGxheWVyLCBwbGF5ZXIyLHRydWUpO1xuICAgICAgICAgIHBsYXllci50dXJuID0gZmFsc2U7XG4gICAgICAgICAgcGxheWVyMi50dXJuID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImh1bWFuIHBsYXlzXCIpO1xuICAgICAgICAgIGFpVGFrZVR1cm4ocGxheWVyMiwgcGxheWVyKX19XG5cbiAgICAgICAgICBlbHNlIGlmKGFpR2FtZSA9PT0gZmFsc2Upe1xuICAgICAgICAgIGlmIChwbGF5ZXIudHVybikge1xuICAgICAgICAgIHBsYXllcjIuYm9hcmQucmVjZWl2ZUF0dGFjayhbcm93SWR4LCBpZHhdKTtcbiAgICAgICAgICByZW5kZXJHYW1lQm9hcmQocGxheWVyLCBwbGF5ZXIyLGZhbHNlKTtcbiAgICAgICAgICBwbGF5ZXIudHVybiA9IGZhbHNlO1xuICAgICAgICAgIHBsYXllcjIudHVybiA9IHRydWU7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJodW1hbiBwbGF5c1wiKX1cbiAgICAgICAgICAvL0NIQU5HRSBTT01FIFRFWFQgQ09OVEVOVCBUTyBJVCdTIFRIRSBQTEFZRVIyJ1MgVFVSTlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHN3aXRjaCAoZWxlbWVudCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgc3FyLmNsYXNzTGlzdC5hZGQoXCJub3RIaXRcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBzcXIuY2xhc3NMaXN0LmFkZChcIm5vdEhpdFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNxci5jbGFzc0xpc3QuYWRkKFwiaGl0Tm9TaGlwXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc3FyLmNsYXNzTGlzdC5hZGQoXCJoaXRTaGlwXCIpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29udGFpbi5hcHBlbmRDaGlsZChzcXIpO1xuICAgIH0pO1xuICB9KX1cblxuXG5leHBvcnQgeyByZW5kZXJHYW1lQm9hcmQgfTtcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllcnMuanNcIjtcbmltcG9ydCB7IHJlbmRlckdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVSZW5kZXIuanNcIjtcbmltcG9ydCB7IHJlbmRlclNoaXBzLCByZW5kZXJQbGFjZW1lbnRDb250YWluZXIgfSBmcm9tIFwiLi9yZW5kZXJTaGlwcy5qc1wiO1xuXG5cbmxldCBhaUdhbWUgPSAwO1xuXG5mdW5jdGlvbiBhaUdhbWVTdGFydCgpIHtcbiAgLy9TdGFydHMgdGhlIGdhbWUgd2l0aCBjb21wdXRlclxuICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKClcbiAgY29uc3QgcGxheWVyMiA9IFBsYXllcigpIC8vQ09NUFVURVJcbiAgYWlHYW1lID0gMTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51U2NyZWVuXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBQbGFjZVNjcmVlblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgcmVuZGVyU2hpcHMocGxheWVyMSk7XG4gIHJlbmRlclBsYWNlbWVudENvbnRhaW5lcihwbGF5ZXIxKTtcbiAgLy8gYWlTZWxlY3RzU2hpcHMoKTtcbiAgXG5cbiAgXG4gIC8vIHRha2UgdGhlc2UgaW50byBzZWxlY3Rpb24gc2NyZWVuIGNvbmZpcm1lbnQgYnV0dG9uXG4gIC8vIHBsYXllcjEudHVybiA9IHRydWU7XG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZGVCdHRcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc1wiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgLy8gcmVuZGVyR2FtZUJvYXJkKHBsYXllcjEsIHBsYXllcjIsIHRydWUpO1xufVxuXG5sZXQgY3VycmVudFBsYXllcnMgPSBbXTtcblxuZnVuY3Rpb24gcGxheWVyR2FtZVN0YXJ0KCkge1xuICAvL1N0YXJ0IDItcGxheWVyIGdhbWVcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzXCIpLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuXG4gIHBsYXllcjEudHVybiA9IHRydWU7XG4gIGN1cnJlbnRQbGF5ZXJzLnB1c2gocGxheWVyMSwgcGxheWVyMik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVNjcmVlblwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JlZW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIHJlbmRlckdhbWVCb2FyZChwbGF5ZXIxLCBwbGF5ZXIyLCBmYWxzZSk7XG4gIHJlbmRlclNoaXBzKHBsYXllcjEpO1xufVxuXG5leHBvcnQgeyBhaUdhbWVTdGFydCwgcGxheWVyR2FtZVN0YXJ0LCBjdXJyZW50UGxheWVycyB9XG4iLCJpbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIlxuZnVuY3Rpb24gUGxheWVyKCkgeyByZXR1cm4ge1xuICAgIC8vRWFjaCBwbGF5ZXIgcmVjZWl2ZXMgMXg1XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAyeDRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDN4M1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgNHgyIHNxdWFyZWQgc2hpcHNcblxuICAgIHNoaXBzVG9QbGFjZSA6IFs1LDQsNCwzLDMsMywyLDIsMiwyXSxcbiAgICBib2FyZCA6IGdhbWVCb2FyZCgpLFxuICAgIHR1cm4gOiBmYWxzZSxcbiAgICB0YWtlblR1cm5zIDogW10sXG4gICAgcG9zc2libGVUdXJucyA6IFtdLFxufX07XG5cblxuXG5leHBvcnQgeyBQbGF5ZXIgfSIsImltcG9ydCBpbWcgZnJvbSBcIi4vdHdvLnBuZ1wiO1xuY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcENvbnRhaW5lclwiKTtcbmNvbnN0IHNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwcyk7XG5cbi8vIGNvbnN0IGF4aXNDaGFuZ2VCdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF4aXNDaGFuZ2VcIik7XG4vLyBjb25zdCBjdXJyZW50QXhpcyA9IDA7XG4vLyAvL2lmIDAgPT4gYXhpcyBpcyB4IDsgaWYgMSA9PiBheGlzIGlzIHlcbi8vIGF4aXNDaGFuZ2VCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4vLyBpZihjdXJyZW50QXhpcyA9PT0gMCApIGN1cnJlbnRBeGlzID0gMTtcbi8vIGVsc2UgaWYgKGN1cnJlbnRBeGlzID09PSAxICkgY3VycmVudEF4aXMgPSAwO1xuLy8gfSlcblxubGV0IHBsYWNlZFNoaXBMZW5ndGggPSAwO1xuXG5sZXQgcGxhY2VkQ29vcmRzID0gW107XG5cbmZ1bmN0aW9uIHJlbmRlclNoaXBzKHBsYXllcikge1xuICBwbGF5ZXIuc2hpcHNUb1BsYWNlLmZvckVhY2goKGVsZSwgaWR4KSA9PiB7XG4gICAgY29uc3Qgc2hpcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc2hpcEltZy5zcmMgPSBpbWc7XG4gICAgc2hpcEltZy5pZCA9IGBzaGlwJHtpZHh9YDtcbiAgICBzaGlwSW1nLnNldEF0dHJpYnV0ZShcbiAgICAgIFwic3R5bGVcIixcbiAgICAgIGB3aWR0aCA6IGNhbGMoJHtlbGV9KjMwcHgpOyBcbiAgICAgIGhlaWdodDozMHB4O1xuICAgICAgb2JqZWN0LWZpdDpmaWxsO1xuICAgICAgZHJhZ2dhYmxlOlwidHJ1ZVwiOyBcbiAgICAgIHRvcDogLTNweDtcbiAgICAgIGxlZnQ6IC0zcHhgXG4gICAgKTtcbiAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQoXCJ4QXhpc1wiKTtcbiAgICBzaGlwSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJpZFwiLCBlLnRhcmdldC5pZCk7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiY2xhc3NcIiwgZS50YXJnZXQuY2xhc3NMaXN0KTtcbiAgICAgIHBsYWNlZFNoaXBMZW5ndGggPSBlbGU7XG4gICAgfSk7XG4gICAgc2hpcHMuYXBwZW5kQ2hpbGQoc2hpcEltZyk7XG4gIH0pXG4gIH07XG5cblxuZnVuY3Rpb24gcmVuZGVyUGxhY2VtZW50Q29udGFpbmVyKHBsYXllcikge1xuICBjb25zdCBzaGlwc0Nvb3JkaW5hdGVzID0ge307XG4gIHBsYXllci5ib2FyZC5ib2FyZE1hcC5mb3JFYWNoKChyb3csIHJvd0lkeCkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcbiAgICAgIGxldCBhbGx5U3FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGFsbHlTcXIuY2xhc3NMaXN0LmFkZChcInNxclwiKTtcblxuICAgICAgYWxseVNxci5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tMZWdhbChlKSB7XG4gICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgY29uc3QgZGF0YSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJpZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGF0YX1gKTtcbiAgICAgICAgICAgICBpZiAoZHJhZ2dlZFNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwieEF4aXNcIikpe1xuICAgICAgICAgICAgICAgaWYgKChwbGFjZWRTaGlwTGVuZ3RoICsgaWR4KSA+IDEwKSByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPCBwbGFjZWRTaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICBpZiggcGxhY2VkQ29vcmRzLmluY2x1ZGVzKHJvd0lkeCoxMCArIGlkeCtpKSl7XG4gICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZX19fVxuICAgICAgICAgICAgIGVsc2UgaWYgKGRyYWdnZWRTaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInlBeGlzXCIpKXtcbiAgICAgICAgICAgICAgIGlmICggKHBsYWNlZFNoaXBMZW5ndGggKyByb3dJZHgpID4gMTApIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IHBsYWNlZFNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgIGlmKCBwbGFjZWRDb29yZHMuaW5jbHVkZXMoKHJvd0lkeCtpKSoxMCArIGlkeCkpe1xuICBcbiAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0gICAgICAgICAgICAgXG4gICAgICAgICAgIHJldHVybiByZXN1bHR9XG4gICAgICAgIFxuICAgICAgICAgIGlmIChjaGVja0xlZ2FsKGUpKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiaWRcIik7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiY2xhc3NcIik7XG4gICAgICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RhdGF9YCkpO1xuICAgICAgICBzaGlwc0Nvb3JkaW5hdGVzW2Ake2RhdGF9YF0gPSBbXG4gICAgICAgICAgcm93SWR4ICogMTAgKyBpZHgsXG4gICAgICAgICAgcGxhY2VkU2hpcExlbmd0aCxcbiAgICAgICAgICBheGlzLFxuICAgICAgICBdO1xuICBcbiAgICAgICAgcGxhY2VkQ29vcmRzID0gY29vcmRDYWxjKHNoaXBzQ29vcmRpbmF0ZXMpO1xuICAgICAgICBmdW5jdGlvbiBjb29yZENhbGMoc2hpcHNDb29yZGluYXRlcyl7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9W107XG4gICAgICAgICAgZm9yKGxldCBlbGUgaW4gc2hpcHNDb29yZGluYXRlcyl7XG4gICAgICAgICAgICBpZiAoc2hpcHNDb29yZGluYXRlc1tlbGVdWzJdPT09XCJ4QXhpc1wiKXtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8c2hpcHNDb29yZGluYXRlc1tlbGVdWzFdOyBpKyspe1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNoaXBzQ29vcmRpbmF0ZXNbZWxlXVswXSArIGkpXG4gICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2hpcHNDb29yZGluYXRlc1tlbGVdWzJdPT09XCJ5QXhpc1wiKXtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8c2hpcHNDb29yZGluYXRlc1tlbGVdWzFdOyBpKyspe1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNoaXBzQ29vcmRpbmF0ZXNbZWxlXVswXSArIChpKjEwKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGF0YX1gKS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBmdW5jdGlvbiBjaGVja0xlZ2FsVHVybigpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGNvcmRTdHIgPSBzaGlwc0Nvb3JkaW5hdGVzW2RhdGFdWzBdLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgICAgICAgbGV0IGlkeCA9IHBhcnNlSW50KGNvcmRTdHIuYXQoMSkpIDsgXG4gICAgICAgICAgICBsZXQgcm93SWR4ID0gcGFyc2VJbnQoY29yZFN0ci5hdCgwKSk7XG4gICAgICAgICAgIGNvbnN0IGRyYWdnZWRTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGF0YX1gKTtcbiAgICAgICAgICAgIGlmIChkcmFnZ2VkU2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ4QXhpc1wiKSl7XG4gICAgICAgICAgICAgIGlmICgoc2hpcHNDb29yZGluYXRlc1tkYXRhXVsxXSsgcm93SWR4KSA+IDEwKSByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGk8IHBsYWNlZFNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgaWYoIHBsYWNlZENvb3Jkcy5pbmNsdWRlcygocm93SWR4K2kpKjEwICsgaWR4KSl7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlfX19XG4gICAgICAgICAgICBlbHNlIGlmIChkcmFnZ2VkU2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ5QXhpc1wiKSl7XG4gICAgICAgICAgICAgIGlmICggKHNoaXBzQ29vcmRpbmF0ZXNbZGF0YV1bMV0gKyBpZHgpID4gMTApIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaTwgcGxhY2VkU2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICBpZiggcGxhY2VkQ29vcmRzLmluY2x1ZGVzKChyb3dJZHgpKjEwICsgaWR4K2kpKXtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2V9XG4gICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IGZhbHNlKSBjb25zb2xlLmxvZyhcIklUIElTTlQgTEVHQUxcIilcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIGlmKGNoZWNrTGVnYWxUdXJuKCkpe1xuICAgICAgICAgIGlmIChzaGlwc0Nvb3JkaW5hdGVzW2RhdGFdWzJdPT09XCJ4QXhpc1wiKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwieEF4aXNcIik7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwieUF4aXNcIik7XG4gICAgICAgICAgICBlLnRhcmdldC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInN0eWxlXCIsXG4gICAgICAgICAgICBgd2lkdGggOiAzMHB4OyBcbiAgICAgICAgICAgIGhlaWdodDpjYWxjKCR7c2hpcHNDb29yZGluYXRlc1tkYXRhXVsxXX0qMzBweCk7XG4gICAgICAgICAgICBvYmplY3QtZml0OmZpbGw7XG4gICAgICAgICAgICBkcmFnZ2FibGU6XCJ0cnVlXCI7IFxuICAgICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgICAgbGVmdDogLTNweGApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcHNDb29yZGluYXRlc1tkYXRhXVsyXT09PVwieUF4aXNcIikge1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInhBeGlzXCIpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInlBeGlzXCIpO1xuICAgICAgICAgICAgZS50YXJnZXQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJzdHlsZVwiLFxuICAgICAgICAgICBgd2lkdGggOiBjYWxjKCR7c2hpcHNDb29yZGluYXRlc1tkYXRhXVsxXX0qMzBweCk7IFxuICAgICAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OmZpbGw7XG4gICAgICAgICAgICBkcmFnZ2FibGU6XCJ0cnVlXCI7IFxuICAgICAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICAgICAgbGVmdDogLTNweGApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwbGFjZWRDb29yZHMgPSBjb29yZENhbGMoc2hpcHNDb29yZGluYXRlcyk7XG5cbiAgICAgICAgfX0pXG5cbn1cbiAgICAgIH0pO1xuXG4gICAgICBhbGx5U3FyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgc3dpdGNoIChlbGVtZW50KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBhbGx5U3FyLmNsYXNzTGlzdC5hZGQoXCJub3RIaXRcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBhbGx5U3FyLmNsYXNzTGlzdC5hZGQoXCJzaGlwTm90SGl0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2VtZW50Q29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGFsbHlTcXIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyU2hpcHMsIHJlbmRlclBsYWNlbWVudENvbnRhaW5lciB9O1xuXG4vL2Fsc28gYWRkIGEgYnV0dG9uIHRvIGNoYW5nZSB0aGUgcGxhY2VtZW50IG9mIHRoZSBzaGlwXG4iLCJmdW5jdGlvbiBTaGlwIChjb29yZGluYXRlcykge3JldHVybiB7XG4gICAgbGVuZ3RoIDogY29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgIGhwIDogY29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgIGNvb3JkaW5hdGVzIDogY29vcmRpbmF0ZXMsXG4gICAgc3VuayA6IGZhbHNlLFxuICAgIFxuICAgIGhpdChjb29yZGluYXRlKXtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmQsIGlkeCk9PntcbiAgICAgICAgICAgIGlmKGNvb3JkWzBdPT09Y29vcmRpbmF0ZVswXSYmIGNvb3JkWzFdPT09Y29vcmRpbmF0ZVsxXSl7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpZHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICBpZih0aGlzLmhwPjApe1xuICAgICAgICB0aGlzLmhwIC09IDF9XG4gICAgfSxcbiAgICBpc1N1bmsoKXtcbiAgICAgICAgaWYodGhpcy5ocD09PTAmJnRoaXMuY29vcmRpbmF0ZXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxufX1cbmV4cG9ydCB7IFNoaXAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwcy5qc1wiO1xuaW1wb3J0IHtnYW1lQm9hcmR9IGZyb20gXCIuL2dhbWVCb2FyZC5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXNoZWV0LmNzc1wiO1xuaW1wb3J0IHsgYWlHYW1lU3RhcnQsIHBsYXllckdhbWVTdGFydCB9IGZyb20gXCIuL2dhbWVTdGFydC5qc1wiOyBcbmltcG9ydCB7IHJlbmRlckdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVSZW5kZXIuanNcIjtcbmltcG9ydCB7IGN1cnJlbnRQbGF5ZXJzIH0gZnJvbSBcIi4vZ2FtZVN0YXJ0LmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJTaGlwcywgcmVuZGVyUGxhY2VtZW50Q29udGFpbmVyIH0gZnJvbSBcIi4vcmVuZGVyU2hpcHMuanNcIjtcblxuLy9NYWluIE1lbnVcbmNvbnN0IGFpU3RhcnRCdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FpR2FtZVwiKTtcbmNvbnN0IGh1bWFuU3RhcnRCdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWFuR2FtZVwiKTtcbi8vdGFrZSB0aGUgZ2FtZSB0byBzaGlwIHNlbGVjdGlvblxuY29uc3QgY3JlZGl0c0J0dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlZGl0c1wiKTtcblxuYWlTdGFydEJ0dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBhaUdhbWVTdGFydCgpO1xufSlcblxuaHVtYW5TdGFydEJ0dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBwbGF5ZXJHYW1lU3RhcnQoKTtcbn0pXG5cbi8vQ29uZmlybSBzaGlwIHNlbGVjdGlvblxuY29uc3QgY29uZmlybUJ0dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVNlbGVjdFwiKTtcblxuY29uZmlybUJ0dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcblxufSlcblxuLy8gUGFzc2luZyB0aGUgc2NyZWVuIGltcGxlbWVudGF0aW9uXG5jb25zdCBwYXNzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzXCIpO1xuY29uc3QgdHVyblN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzU2NyZWVuXCIpO1xuY29uc3QgZ2FtZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuXCIpO1xuY29uc3QgaGlkZUJ0dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZUJ0dFwiKTtcblxuXG5cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50PT57XG4vLyAgICAgaWYoZXZlbnQuY29kZT09PSBcIlNwYWNlXCIpe1xuLy8gICAgIGlmKHBhc3NCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSl7XG4vLyAgICAgZ2FtZVNjcmVlbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbi8vICAgICB0dXJuU3RhcnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIil9XG4vLyB9XG4vLyB9KVxuXG4vL01ha2Ugc3VyZSB0aGUgcGxheWVyIGhhcyBwbGF5ZWQgdGhlaXIgdHVyblxuLy9LZWVwIHRoZSB0cmFjayBvZiB3aGljaCBzY3JlZW4gaXMgc2hvd2luZyBzbyB0aGF0IGkgY2FuIGNoYW5nZSBpdCBcblxucGFzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBnYW1lU2NyZWVuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIHR1cm5TdGFydC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbn0pXG5cbnR1cm5TdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBnYW1lU2NyZWVuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIHR1cm5TdGFydC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICBpZihjdXJyZW50UGxheWVyc1swXS50dXJuKSB7cmVuZGVyR2FtZUJvYXJkKGN1cnJlbnRQbGF5ZXJzWzBdLGN1cnJlbnRQbGF5ZXJzWzFdLGZhbHNlKX1cbiAgICBlbHNlIGlmKGN1cnJlbnRQbGF5ZXJzWzFdLnR1cm4pIHsgcmVuZGVyR2FtZUJvYXJkKGN1cnJlbnRQbGF5ZXJzWzFdLCBjdXJyZW50UGxheWVyc1swXSwgZmFsc2UpfVxuICAgIC8vaWYgdGhlIGxhc3QgdHVybiBwbGF5ZWQgaXMgcGxheWVyMSA9PiByZW5kZXIgZm9yIHBsYXllcjJcbiAgICAvL2Vsc2UgaWYgdGhlIGxhc3QgdHVybiBwbGF5ZWQgaXMgcGxheWVyMiA9PnJlbmRlciBmb3IgcGxheWVyMVxufSlcblxuaGlkZUJ0dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyMlwiKTtcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbn0pXG5cbi8vVE9ET1xuLy90aGVyZSBzaG91bGQgYmUgYSBjb25maXJtIGJ1dHRvbiBmb3Igc2hpcCBzZWxlY3Rpb25cbi8vaW1wbGVtZW50IGEgd2F5IHNvIHRoYXQgYWkgY2FuIHB1dCBzaGlwc1xuLy9jdXJyZW50bHkgc2hpcCBzZWxlY3Rpb24gc2NyZWVuIGFuZCB0aGUgYWN0dWFsIGdhbWUgc2NyZWVuIGxvb2tzIHdheSBkaWZmZXJlbnQgLy8gaW1wbGVtZW50IHRoZSBzaGlwIHNlbGVjdGlvbiBzY3JlZW4gbG9vayB0byB0aGUgYWN0dWFsIGdhbWUgc2NyZWVuIHdpdGggc2hpcHMgYmVpbmcgcmVuZGVyZWQgYXMgdGhleSBhcmUgaW4gc2VsZWN0aW9uIHNjcmVlblxuICAgIC8vIEltcGxlbWVudGluZyB0aGUgc2hpcCBzZWxlY3Rpb24gc2NyZWVuIGxvb2sgdG8gdGhlIGFjdHVhbCBnYW1lIHdpbGwgYnJlYWsgaG93IHRoZSBoaXRzIGFyZSBiZWluZyByZW5kZXJlZCAvLyBmaW5kIGEgZGlmZmVyZW50IHdheSB0byByZW5kZXIgaXRcbi8vSW1wbGVtZW50IHRoZSB3aW4gY29uZGl0aW9uXG4vL0ltcGxlbWVudCBhIHdpbiBzY3JlZW5cblxuLy9pbXBsZW1lbnQgYSBidXR0b24gc28gaSBjYW4gY2hhbmdlIHRoZSBpbmRleCAgXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9