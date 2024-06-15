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
    align-self: end;
    text-align: center;
}
.shipContainer ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-items: baseline;
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
`, "",{"version":3,"sources":["webpack://./src/stylesheet.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,2BAA2B;EAC3B,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,8BAA8B;EAC9B;;;;GAIC;EACD,yCAAyC;EACzC,kCAAkC;EAClC,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,0BAA0B;EAC1B,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,2BAA2B;EAC3B,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,8BAA8B;EAC9B;;;;GAIC;EACD,yCAAyC;EACzC,kCAAkC;EAClC,qBAAqB;AACvB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;;;GAGG;AACH;;GAEG;;AAEH;EACE,aAAa;EACb,8BAA8B;EAC9B,mCAAmC;EACnC,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB;;;;;GAKC;EACD;;;;;GAKC;EACD;;;;;GAKC;AACH;;AAEA;EACE,mBAAmB;EACnB;;;;;GAKC;EACD;;;;;GAKC;EACD;;;;;GAKC;AACH;;AAEA;EACE,qBAAqB;AACvB;;;AAGA;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,eAAe;EACjB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2BAA2B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,aAAa;AACf","sourcesContent":["body {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-color: beige;\n  height: 100vh;\n  width: 100vw;\n}\n\nbutton {\n  color: rgb(254, 254, 254);\n  font-size: 16px;\n  line-height: 30px;\n  padding: 13px;\n  border-radius: 8px;\n  font-family: Georgia, serif;\n  font-weight: 900;\n  text-decoration: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-shadow: 2px 2px 2px black;\n  background-image: linear-gradient(\n    to right,\n    rgb(255, 153, 0) 0%,\n    rgb(193, 116, 0) 100%\n  );\n  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;\n  border: 2px outset rgb(121, 73, 0);\n  display: inline-block;\n  max-height: 50px;\n}\nbutton:hover {\n  background: #ff9900;\n}\nbutton:active {\n  background: #c17400;\n}\n\n.mainMenu {\n  display: grid;\n  margin: 25%;\n  grid-template-columns: 1fr;\n  align-items: center;\n  justify-content: center;\n  gap: 25px;\n}\n.mainMenu button {\n  color: rgb(254, 254, 254);\n  font-size: 25px;\n  line-height: 30px;\n  padding: 13px;\n  border-radius: 8px;\n  font-family: Georgia, serif;\n  font-weight: 900;\n  text-decoration: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-shadow: 2px 2px 2px black;\n  background-image: linear-gradient(\n    to right,\n    rgb(255, 153, 0) 0%,\n    rgb(193, 116, 0) 100%\n  );\n  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;\n  border: 2px outset rgb(121, 73, 0);\n  display: inline-block;\n}\n.mainMenu button:hover {\n  background: #ff9900;\n}\n.mainMenu button:active {\n  background: #c17400;\n}\n/* \n.menuScreen{\n    display: none;\n} */\n/* .gameScreen {\n    display:none\n} */\n\n.gameScreen {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  grid-template-rows: 8fr 1fr 1fr 8fr;\n  justify-items: center;\n  align-items: start;\n}\n\n.container,\n.shipPlacementContainer {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n}\n.container2 {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n}\n.sqr {\n  padding: 10px;\n  border: 3px solid black;\n  position: relative;\n}\n\n.notHit {\n  background-color: #777777;\n}\n\n.shipNotHit {\n  background-color: blue;\n}\n\n.hitNoShip {\n  background: #9d0707;\n  background: -moz-radial-gradient(\n    center,\n    #9d0707 0%,\n    #777777 42%,\n    #777777 100%\n  );\n  background: -webkit-radial-gradient(\n    center,\n    #9d0707 0%,\n    #777777 42%,\n    #777777 100%\n  );\n  background: radial-gradient(\n    ellipse at center,\n    #9d0707 0%,\n    #777777 42%,\n    #777777 100%\n  );\n}\n\n.hitShip {\n  background: #a40000;\n  background: -moz-radial-gradient(\n    center,\n    #a40000 0%,\n    #2168cb 52%,\n    #144e75 100%\n  );\n  background: -webkit-radial-gradient(\n    center,\n    #a40000 0%,\n    #2168cb 52%,\n    #144e75 100%\n  );\n  background: radial-gradient(\n    ellipse at center,\n    #a40000 0%,\n    #2168cb 52%,\n    #144e75 100%\n  );\n}\n\n.show {\n  display: inline-block;\n}\n\n\n.shipContainer {\n    grid-area: 1/2/5/3;\n    align-self: end;\n    text-align: center;\n}\n.shipContainer ul {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n    justify-items: baseline;\n}\n\n.pass {\n    position: absolute;\n    top: -70px;\n    left: 0px;\n    font-size: 24px;\n  background-color: #777777;\n  color: aliceblue;\n}\n\n.hideBtt {\n    position: absolute;\n    left: 135px;\n    top: -5px;\n}\n\n.enemy {\n    grid-area: 1/1/2/2;\n}\n\n.player {\n    position: relative;\n    grid-area: 4/1/5/2;\n}\n\n.shipPlaceScreen {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n\n.sqr img {\n  position: absolute;\n  z-index: 1;\n}\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   aiPlaceShips: () => (/* binding */ aiPlaceShips),
/* harmony export */   aiTakeTurn: () => (/* binding */ aiTakeTurn)
/* harmony export */ });
/* harmony import */ var _gameRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameRender */ "./src/gameRender.js");
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ "./src/ships.js");



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

function aiPlaceShips (player) {
    let shipCounter = 0;
    let aiPlacedShipCoords=  [];
    let aiShipInfo= {};
    while(!(player.shipsToPlace.length === 0)){
        let ship = player.shipsToPlace.shift();
        let randomFirst = Math.floor(Math.random()*10);
        let randomSecond = Math.floor(Math.random()*10);
        let randomThird = Math.floor(Math.random()*2);
        function canBePlaced(axis){
            let result = true;
            if(axis === 1){
                for (let i = 0; i<ship; i++){
                    if((aiPlacedShipCoords.includes((randomFirst*10)+randomSecond+(i*10)))||(((randomFirst*10)+randomSecond+(i*10))>=100)){
                        result = false;
                        break;
                    }
                }
            }
                else {
                for (let i = 0; i<ship; i++){
                    if((aiPlacedShipCoords.includes((randomFirst*10)+randomSecond+(i)))||(((randomSecond+(i))>=10))){
                        result = false;
                        break;
                 }
            }
        }
        return result
        }
        if(canBePlaced(randomThird)){
            aiShipInfo[`ship${shipCounter}`] = [[randomFirst,randomSecond], ship, randomThird]
            shipCounter++
            if(randomThird === 1){
                for(let i = 0; i< ship; i++){
                aiPlacedShipCoords.push((randomFirst*10)+randomSecond+(i*10))}
       }
            else {
                for(let i = 0; i< ship; i++){
                    aiPlacedShipCoords.push((randomFirst*10)+randomSecond+(i))
            }
     }
    }
    else {player.shipsToPlace.push(ship)};

}
console.log(aiShipInfo);
return aiShipInfo
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
/* harmony import */ var _computerTakeTurn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computerTakeTurn.js */ "./src/computerTakeTurn.js");






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
  

  
  
  const confirmSelectBtt =  document.querySelector(".confirmSelect");
  confirmSelectBtt.addEventListener("click", ()=>{
  //if aigame starts the game
  //if 2-player game pass to the blank screen so that player1 can start

  if(aiGame === 1
    &&Object.keys(_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates).length === 10
    ){
  for (let ele in _renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates){
    let shipCoord = []; 
    console.log(ele)
    console.log(_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates[ele]);
    if(_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates[ele][2]==="xAxis"){
      for(let i = 0; i<_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates[ele][1]; i++){
        shipCoord.push([_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates[ele][0][0],_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates[ele][0][1]+i])
      }}
    else if(_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates[ele][2]==="yAxis"){
        for(let i = 0; i<_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates[ele][1]; i++){
          shipCoord.push([_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates[ele][0][0]+i,_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates[ele][0][1]])
        }
      }
      player1.board.placeShip(shipCoord);
  }
let aiShipCoords = (0,_computerTakeTurn_js__WEBPACK_IMPORTED_MODULE_3__.aiPlaceShips)(player2);
for (let ele in aiShipCoords){  
  let ships = [];
  if(aiShipCoords[ele][2]===1){
    for(let a = 0; a <aiShipCoords[ele][1]; a++){
      ships.push([aiShipCoords[ele][0][0]+a, aiShipCoords[ele][0][1]])
    }
  }
  else {
    for(let i = 0; i <aiShipCoords[ele][1]; i++){
      ships.push([aiShipCoords[ele][0][0], aiShipCoords[ele][0][1]+i])  
    }
  }
    player2.board.placeShip(ships);
}
  player1.turn = true;
  document.querySelector(".screen").classList.remove("hide");
  document.querySelector(".hideBtt").classList.add("hide");
  document.querySelector(".pass").classList.add("hide");
  document.querySelector(".shipPlaceScreen").classList.add("hide");
  (0,_gameRender_js__WEBPACK_IMPORTED_MODULE_1__.renderGameBoard)(player1, player2, true);
}

}

)
}

let currentPlayers = [];

function playerGameStart() {
  //Start 2-player game
  const player1= (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.Player)();
  const player2=(0,_players_js__WEBPACK_IMPORTED_MODULE_0__.Player)();
  
  document.querySelector(".menuScreen").classList.add("hide");
  document.querySelector(".shipPlaceScreen").classList.remove("hide");
  (0,_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.renderShips)(player1);
  (0,_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.renderPlacementContainer)(player1);


  
  
  var player1HasSelected = false;
  
  const confirmSelectBtt =  document.querySelector(".confirmSelect");
  confirmSelectBtt.addEventListener("click", ()=>{
    //Store player1 ship info //if this has 10 length =>
    //render player2 ships
    //render player2 ship placement screen
    if (player1HasSelected === false && Object.keys(_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates).length === 1){
      let player1ShipInfo = JSON.parse(JSON.stringify(_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates));
      for (let ele in player1ShipInfo){
        let ship1Coord = []; 
        if(player1ShipInfo[ele][2]==="xAxis"){
          for(let i = 0; i<player1ShipInfo[ele][1]; i++){
            ship1Coord.push([player1ShipInfo[ele][0][0],player1ShipInfo[ele][0][1]+i])
          }}
        else if(player1ShipInfo[ele][2]==="yAxis"){
            for(let i = 0; i<player1ShipInfo[ele][1]; i++){
              ship1Coord.push([player1ShipInfo[ele][0][0]+i,player1ShipInfo[ele][0][1]])
            }
          }
          player1.board.placeShip(ship1Coord);
      }
      player1HasSelected = true;
    }
    if(player1HasSelected === true){
      (0,_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.renderShips)(player2);
      (0,_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.renderPlacementContainer)(player2);
      let player2ShipInfo = _renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates;

    if(Object.keys(player2ShipInfo).length === 1)
    {


      for (let ele in player2ShipInfo){
        let ship2Coord = []; 
        if(player2ShipInfo[ele][2]==="xAxis"){
          for(let i = 0; i<player2ShipInfo[ele][1]; i++){
            ship2Coord.push([player2ShipInfo[ele][0][0],player2ShipInfo[ele][0][1]+i])
          }}
          else if(player2ShipInfo[ele][2]==="yAxis"){
            for(let i = 0; i<player2ShipInfo[ele][1]; i++){
              ship2Coord.push([player2ShipInfo[ele][0][0]+i,player2ShipInfo[ele][0][1]])
            }
          }
          player2.board.placeShip(ship2Coord);
        }
        
        
        document.querySelector(".pass").classList.add("show");
        document.querySelector(".menuScreen").classList.add("hide");
        document.querySelector(".container2").classList.add("hide");
        document.querySelector(".screen").classList.remove("hide");
        document.querySelector(".shipPlaceScreen").classList.add("hide");
        (0,_gameRender_js__WEBPACK_IMPORTED_MODULE_1__.renderGameBoard)(player1, player2, false);
        player1.turn = true;
        currentPlayers.push(player1, player2);
      }
  }
  })}






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
/* harmony export */   renderShips: () => (/* binding */ renderShips),
/* harmony export */   shipsCoordinates: () => (/* binding */ shipsCoordinates)
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
  ships.innerHTML = "";
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


let shipsCoordinates = {};
function renderPlacementContainer(player) {
  document.querySelector(".shipPlacementContainer").innerHTML = "";
  shipsCoordinates = {};
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
          [rowIdx,idx],
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
            shipsCoordinates[`${data}`] = [
              [rowIdx,idx],
              placedShipLength,
              `yAxis`,
            ];
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
            shipsCoordinates[`${data}`] = [
              [rowIdx,idx],
              placedShipLength,
              "xAxis",
            ];
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
/* harmony import */ var _computerTakeTurn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computerTakeTurn.js */ "./src/computerTakeTurn.js");




 






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
//FIX THE 2-PLAYER GAME
//Implement the win condition
//Implement a win screen

//currently ship selection screen and the actual game screen looks way different // implement the ship selection screen look to the actual game screen with ships being rendered as they are in selection screen
// Implementing the ship selection screen look to the actual game will break how the hits are being rendered // find a different way to render it
//implement a button so i can change the index  



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUZBQXFGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxLQUFLLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxVQUFVLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxNQUFNLEtBQUssWUFBWSxVQUFVLEtBQUssU0FBUyxLQUFLLFNBQVMsS0FBSyxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVks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QUFDQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5REFBYyxXQUFXLCtEQUFlLENBQUMseURBQWMsSUFBSSx5REFBYztBQUNoRixZQUFZLHlEQUFjLFlBQVksK0RBQWUsQ0FBQyx5REFBYyxLQUFLLHlEQUFjO0FBQ3ZGO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlc2hlZXQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlc2hlZXQuY3NzP2Q3NGQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9jb21wdXRlclRha2VUdXJuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lUmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVTdGFydC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3JlbmRlclNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6IHJnYigyNTQsIDI1NCwgMjU0KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgIHJnYigyNTUsIDE1MywgMCkgMCUsXG4gICAgcmdiKDE5MywgMTE2LCAwKSAxMDAlXG4gICk7XG4gIGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSA1cHggNXB4IDE1cHggNXB4O1xuICBib3JkZXI6IDJweCBvdXRzZXQgcmdiKDEyMSwgNzMsIDApO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY5OTAwO1xufVxuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNjMTc0MDA7XG59XG5cbi5tYWluTWVudSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbjogMjUlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjVweDtcbn1cbi5tYWluTWVudSBidXR0b24ge1xuICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgcmdiKDI1NSwgMTUzLCAwKSAwJSxcbiAgICByZ2IoMTkzLCAxMTYsIDApIDEwMCVcbiAgKTtcbiAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDVweCA1cHggMTVweCA1cHg7XG4gIGJvcmRlcjogMnB4IG91dHNldCByZ2IoMTIxLCA3MywgMCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5tYWluTWVudSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY5OTAwO1xufVxuLm1haW5NZW51IGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjYzE3NDAwO1xufVxuLyogXG4ubWVudVNjcmVlbntcbiAgICBkaXNwbGF5OiBub25lO1xufSAqL1xuLyogLmdhbWVTY3JlZW4ge1xuICAgIGRpc3BsYXk6bm9uZVxufSAqL1xuXG4uZ2FtZVNjcmVlbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZnIgMWZyIDFmciA4ZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uY29udGFpbmVyLFxuLnNoaXBQbGFjZW1lbnRDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcbn1cbi5jb250YWluZXIyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XG59XG4uc3FyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5vdEhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XG59XG5cbi5zaGlwTm90SGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmhpdE5vU2hpcCB7XG4gIGJhY2tncm91bmQ6ICM5ZDA3MDc7XG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KFxuICAgIGNlbnRlcixcbiAgICAjOWQwNzA3IDAlLFxuICAgICM3Nzc3NzcgNDIlLFxuICAgICM3Nzc3NzcgMTAwJVxuICApO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChcbiAgICBjZW50ZXIsXG4gICAgIzlkMDcwNyAwJSxcbiAgICAjNzc3Nzc3IDQyJSxcbiAgICAjNzc3Nzc3IDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgIGVsbGlwc2UgYXQgY2VudGVyLFxuICAgICM5ZDA3MDcgMCUsXG4gICAgIzc3Nzc3NyA0MiUsXG4gICAgIzc3Nzc3NyAxMDAlXG4gICk7XG59XG5cbi5oaXRTaGlwIHtcbiAgYmFja2dyb3VuZDogI2E0MDAwMDtcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoXG4gICAgY2VudGVyLFxuICAgICNhNDAwMDAgMCUsXG4gICAgIzIxNjhjYiA1MiUsXG4gICAgIzE0NGU3NSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KFxuICAgIGNlbnRlcixcbiAgICAjYTQwMDAwIDAlLFxuICAgICMyMTY4Y2IgNTIlLFxuICAgICMxNDRlNzUgMTAwJVxuICApO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgZWxsaXBzZSBhdCBjZW50ZXIsXG4gICAgI2E0MDAwMCAwJSxcbiAgICAjMjE2OGNiIDUyJSxcbiAgICAjMTQ0ZTc1IDEwMCVcbiAgKTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cblxuLnNoaXBDb250YWluZXIge1xuICAgIGdyaWQtYXJlYTogMS8yLzUvMztcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNoaXBDb250YWluZXIgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGJhc2VsaW5lO1xufVxuXG4ucGFzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTcwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NztcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuLmhpZGVCdHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMzVweDtcbiAgICB0b3A6IC01cHg7XG59XG5cbi5lbmVteSB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xufVxuXG4ucGxheWVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xufVxuXG4uc2hpcFBsYWNlU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbn1cblxuLnNxciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCOzs7O0dBSUM7RUFDRCx5Q0FBeUM7RUFDekMsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCOzs7O0dBSUM7RUFDRCx5Q0FBeUM7RUFDekMsa0NBQWtDO0VBQ2xDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTs7O0dBR0c7QUFDSDs7R0FFRzs7QUFFSDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUNBQW1DO0VBQ25DLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQjs7Ozs7R0FLQztFQUNEOzs7OztHQUtDO0VBQ0Q7Ozs7O0dBS0M7QUFDSDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQjs7Ozs7R0FLQztFQUNEOzs7OztHQUtDO0VBQ0Q7Ozs7O0dBS0M7QUFDSDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDEzcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHJnYigyNTUsIDE1MywgMCkgMCUsXFxuICAgIHJnYigxOTMsIDExNiwgMCkgMTAwJVxcbiAgKTtcXG4gIGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSA1cHggNXB4IDE1cHggNXB4O1xcbiAgYm9yZGVyOiAycHggb3V0c2V0IHJnYigxMjEsIDczLCAwKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1heC1oZWlnaHQ6IDUwcHg7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmY5OTAwO1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNjMTc0MDA7XFxufVxcblxcbi5tYWluTWVudSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luOiAyNSU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjVweDtcXG59XFxuLm1haW5NZW51IGJ1dHRvbiB7XFxuICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiAxM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICByZ2IoMjU1LCAxNTMsIDApIDAlLFxcbiAgICByZ2IoMTkzLCAxMTYsIDApIDEwMCVcXG4gICk7XFxuICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgNXB4IDVweCAxNXB4IDVweDtcXG4gIGJvcmRlcjogMnB4IG91dHNldCByZ2IoMTIxLCA3MywgMCk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5tYWluTWVudSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmOTkwMDtcXG59XFxuLm1haW5NZW51IGJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2MxNzQwMDtcXG59XFxuLyogXFxuLm1lbnVTY3JlZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcbi8qIC5nYW1lU2NyZWVuIHtcXG4gICAgZGlzcGxheTpub25lXFxufSAqL1xcblxcbi5nYW1lU2NyZWVuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDhmciAxZnIgMWZyIDhmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmNvbnRhaW5lcixcXG4uc2hpcFBsYWNlbWVudENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbn1cXG4uY29udGFpbmVyMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbn1cXG4uc3FyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5vdEhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xcbn1cXG5cXG4uc2hpcE5vdEhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaGl0Tm9TaGlwIHtcXG4gIGJhY2tncm91bmQ6ICM5ZDA3MDc7XFxuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChcXG4gICAgY2VudGVyLFxcbiAgICAjOWQwNzA3IDAlLFxcbiAgICAjNzc3Nzc3IDQyJSxcXG4gICAgIzc3Nzc3NyAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNlbnRlcixcXG4gICAgIzlkMDcwNyAwJSxcXG4gICAgIzc3Nzc3NyA0MiUsXFxuICAgICM3Nzc3NzcgMTAwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgZWxsaXBzZSBhdCBjZW50ZXIsXFxuICAgICM5ZDA3MDcgMCUsXFxuICAgICM3Nzc3NzcgNDIlLFxcbiAgICAjNzc3Nzc3IDEwMCVcXG4gICk7XFxufVxcblxcbi5oaXRTaGlwIHtcXG4gIGJhY2tncm91bmQ6ICNhNDAwMDA7XFxuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChcXG4gICAgY2VudGVyLFxcbiAgICAjYTQwMDAwIDAlLFxcbiAgICAjMjE2OGNiIDUyJSxcXG4gICAgIzE0NGU3NSAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNlbnRlcixcXG4gICAgI2E0MDAwMCAwJSxcXG4gICAgIzIxNjhjYiA1MiUsXFxuICAgICMxNDRlNzUgMTAwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgZWxsaXBzZSBhdCBjZW50ZXIsXFxuICAgICNhNDAwMDAgMCUsXFxuICAgICMyMTY4Y2IgNTIlLFxcbiAgICAjMTQ0ZTc1IDEwMCVcXG4gICk7XFxufVxcblxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuXFxuLnNoaXBDb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDEvMi81LzM7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2hpcENvbnRhaW5lciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLnBhc3Mge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTcwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NztcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi5oaWRlQnR0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxMzVweDtcXG4gICAgdG9wOiAtNXB4O1xcbn1cXG5cXG4uZW5lbXkge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcblxcbi5wbGF5ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtYXJlYTogNC8xLzUvMjtcXG59XFxuXFxuLnNoaXBQbGFjZVNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLnNxciBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzaGVldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXNoZWV0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmVuZGVyR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZVJlbmRlclwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBzXCI7XG5cbmZ1bmN0aW9uIGFpVGFrZVR1cm4ocGxheWVyLCBodW1hblBsYXllcil7XG4gICAgd2hpbGUocGxheWVyLnR1cm4gPT09IHRydWUgJiYgcGxheWVyLnRha2VuVHVybnMubGVuZ3RoIDwgMTAxKSB7XG4gICAgICAgIGlmKCEoKHBsYXllci5wb3NzaWJsZVR1cm5zLmxlbmd0aCkgPT09IDApKXtcbiAgICAgICAgICAgIGxldCBwdD0gcGxheWVyLnBvc3NpYmxlVHVybnMuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmKCEocGxheWVyLnRha2VuVHVybnMuaW5jbHVkZXMoKChwdFswXSoxMCkrcHRbMV0pKSkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKChwdFswXSoxMCkrcHRbMV0pO1xuICAgICAgICAgICAgICAgIGxldCBzSGl0ID0gaHVtYW5QbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhwdCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnRha2VuVHVybnMucHVzaCgocHRbMF0qMTApK3B0WzFdKTtcbiAgICAgICAgICAgICAgICBpZihzSGl0ID09PTMgKXsgXG4gICAgICAgICAgICAgICAgICAgIGlmKHB0WzBdKzE8MTApICAgICAgICAgICAgcGxheWVyLnBvc3NpYmxlVHVybnMucHVzaChbcHRbMF0rMSwgcHRbMV1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYocHRbMF0rMTwxMCYmcHRbMV0rMTwxMClwbGF5ZXIucG9zc2libGVUdXJucy5wdXNoKFtwdFswXSsxLCBwdFsxXSsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHB0WzBdLTE+LTEpICAgICAgICAgICAgcGxheWVyLnBvc3NpYmxlVHVybnMucHVzaChbcHRbMF0tMSwgcHRbMV1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYocHRbMF0tMT4tMSYmcHRbMV0tMT4tMSlwbGF5ZXIucG9zc2libGVUdXJucy5wdXNoKFtwdFswXS0xLCBwdFsxXS0xXSl9XG4gICAgICAgICAgICAgICAgcGxheWVyLnRha2VuVHVybnMucHVzaChwdCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBodW1hblBsYXllci50dXJuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZW5kZXJHYW1lQm9hcmQoaHVtYW5QbGF5ZXIsIHBsYXllciwgdHJ1ZSk7XG4gICAgICAgIH1lbHNlIHthaVRha2VUdXJuKHBsYXllcixodW1hblBsYXllcil9fVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgbGV0IHJhbmRvbUZpcnN0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgbGV0IHJhbmRvbVNlY29uZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGlmKCEocGxheWVyLnRha2VuVHVybnMuaW5jbHVkZXMoKHJhbmRvbUZpcnN0KjEwKStyYW5kb21TZWNvbmQpKSl7XG4gICAgICAgICAgICBsZXQgaGl0ID0gaHVtYW5QbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhbcmFuZG9tRmlyc3QsIHJhbmRvbVNlY29uZF0pO1xuICAgICAgICAgICAgaWYgKGhpdCA9PT0gMyl7IFxuICAgICAgICAgICAgICAgIGlmKHJhbmRvbUZpcnN0KzE8MTApICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wb3NzaWJsZVR1cm5zLnB1c2goW3JhbmRvbUZpcnN0KzEsIHJhbmRvbVNlY29uZF0pO1xuICAgICAgICAgICAgICAgIGlmKHJhbmRvbUZpcnN0KzE8MTAgJiYgcmFuZG9tU2Vjb25kKzE8MTApIHBsYXllci5wb3NzaWJsZVR1cm5zLnB1c2goW3JhbmRvbUZpcnN0KzEsIHJhbmRvbVNlY29uZCsxXSk7XG4gICAgICAgICAgICAgICAgaWYocmFuZG9tRmlyc3QtMT4tMSkgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBvc3NpYmxlVHVybnMucHVzaChbcmFuZG9tRmlyc3QtMSwgcmFuZG9tU2Vjb25kXSk7XG4gICAgICAgICAgICAgICAgaWYocmFuZG9tRmlyc3QtMT4tMSAmJiByYW5kb21TZWNvbmQtMT4tMSkgcGxheWVyLnBvc3NpYmxlVHVybnMucHVzaChbcmFuZG9tRmlyc3QtMSwgcmFuZG9tU2Vjb25kLTFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllci50YWtlblR1cm5zLnB1c2goKHJhbmRvbUZpcnN0KjEwKStyYW5kb21TZWNvbmQpO1xuICAgICAgICAgICAgcGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgIGh1bWFuUGxheWVyLnR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmFuZG9tRmlyc3QsIHJhbmRvbVNlY29uZClcbiAgICAgICAgICAgIHJlbmRlckdhbWVCb2FyZChodW1hblBsYXllciwgcGxheWVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHthaVRha2VUdXJuKHBsYXllcixodW1hblBsYXllcil9XG4gICAgfVxufSAgICAgICAgXG59XG5cbmZ1bmN0aW9uIGFpUGxhY2VTaGlwcyAocGxheWVyKSB7XG4gICAgbGV0IHNoaXBDb3VudGVyID0gMDtcbiAgICBsZXQgYWlQbGFjZWRTaGlwQ29vcmRzPSAgW107XG4gICAgbGV0IGFpU2hpcEluZm89IHt9O1xuICAgIHdoaWxlKCEocGxheWVyLnNoaXBzVG9QbGFjZS5sZW5ndGggPT09IDApKXtcbiAgICAgICAgbGV0IHNoaXAgPSBwbGF5ZXIuc2hpcHNUb1BsYWNlLnNoaWZ0KCk7XG4gICAgICAgIGxldCByYW5kb21GaXJzdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGxldCByYW5kb21TZWNvbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBsZXQgcmFuZG9tVGhpcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMik7XG4gICAgICAgIGZ1bmN0aW9uIGNhbkJlUGxhY2VkKGF4aXMpe1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICBpZihheGlzID09PSAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxzaGlwOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZigoYWlQbGFjZWRTaGlwQ29vcmRzLmluY2x1ZGVzKChyYW5kb21GaXJzdCoxMCkrcmFuZG9tU2Vjb25kKyhpKjEwKSkpfHwoKChyYW5kb21GaXJzdCoxMCkrcmFuZG9tU2Vjb25kKyhpKjEwKSk+PTEwMCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxzaGlwOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZigoYWlQbGFjZWRTaGlwQ29vcmRzLmluY2x1ZGVzKChyYW5kb21GaXJzdCoxMCkrcmFuZG9tU2Vjb25kKyhpKSkpfHwoKChyYW5kb21TZWNvbmQrKGkpKT49MTApKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICAgIGlmKGNhbkJlUGxhY2VkKHJhbmRvbVRoaXJkKSl7XG4gICAgICAgICAgICBhaVNoaXBJbmZvW2BzaGlwJHtzaGlwQ291bnRlcn1gXSA9IFtbcmFuZG9tRmlyc3QscmFuZG9tU2Vjb25kXSwgc2hpcCwgcmFuZG9tVGhpcmRdXG4gICAgICAgICAgICBzaGlwQ291bnRlcisrXG4gICAgICAgICAgICBpZihyYW5kb21UaGlyZCA9PT0gMSl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTwgc2hpcDsgaSsrKXtcbiAgICAgICAgICAgICAgICBhaVBsYWNlZFNoaXBDb29yZHMucHVzaCgocmFuZG9tRmlyc3QqMTApK3JhbmRvbVNlY29uZCsoaSoxMCkpfVxuICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IHNoaXA7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGFpUGxhY2VkU2hpcENvb3Jkcy5wdXNoKChyYW5kb21GaXJzdCoxMCkrcmFuZG9tU2Vjb25kKyhpKSlcbiAgICAgICAgICAgIH1cbiAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtwbGF5ZXIuc2hpcHNUb1BsYWNlLnB1c2goc2hpcCl9O1xuXG59XG5jb25zb2xlLmxvZyhhaVNoaXBJbmZvKTtcbnJldHVybiBhaVNoaXBJbmZvXG59XG5leHBvcnQgeyBhaVRha2VUdXJuLCBhaVBsYWNlU2hpcHMgfTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcHNcIjtcbmZ1bmN0aW9uIGdhbWVCb2FyZCgpe3JldHVybiB7XG4gICAgYm9hcmRNYXAgOiBbWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdXSxcbiAgICBzaGlwc0luZm8gOiBbXSxcblxuICAgIHBsYWNlU2hpcChjb29yZGluYXRlcyl7XG4gICAgICAgIC8vW1swLDBdLFswLDFdXSBbW2NvbHVtbiwgcm93XV1cbiAgICAgICAgdGhpcy5zaGlwc0luZm8ucHVzaChTaGlwKGNvb3JkaW5hdGVzKSk7XG4gICAgICAgIGZvciAobGV0IHggb2YgY29vcmRpbmF0ZXMpe1xuICAgICAgICAgICAgdGhpcy5ib2FyZE1hcFt4WzBdXVt4WzFdXSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgfSxcbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ib2FyZE1hcFtjb29yZFswXV1bY29vcmRbMV1dKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgICAgIGlmKHRoaXMuYm9hcmRNYXBbY29vcmRbMF1dW2Nvb3JkWzFdXSA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLmJvYXJkTWFwW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSAyO1xuICAgICAgICAgICAgcmVzdWx0ID0gMlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5ib2FyZE1hcFtjb29yZFswXV1bY29vcmRbMV1dID09PSAxKXtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNJbmZvLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKGNvcmQgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGNvcmRbMF0gPT09IGNvb3JkWzBdICYmIGNvcmRbMV0gPT09IGNvb3JkWzFdKXtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5oaXQoY29vcmQpO1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmlzU3VuaygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkTWFwW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSAzO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPTNcbiAgICAgICAgICAgICAgICB9ICAgIFxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH0sXG4gICAgaXNTdW5rQWxsKCl7XG4gICAgICAgIGxldCBzdW5rID0gdHJ1ZVxuICAgICAgICB0aGlzLnNoaXBzSW5mby5mb3JFYWNoKGVsZW1lbnQ9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50LnN1bmsgPT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdW5rXG4gICAgfVxuICAgIH1cbiAgICB9XG5cblxuXG5leHBvcnQgeyBnYW1lQm9hcmQgfSIsImltcG9ydCB7IGFpVGFrZVR1cm4gfSBmcm9tIFwiLi9jb21wdXRlclRha2VUdXJuLmpzXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVCb2FyZChcbiAgcGxheWVyLFxuICBwbGF5ZXIyLFxuICBhaUdhbWUsXG4gIGNvbnRhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKSxcbiAgY29udGFpbjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lcjJcIilcbikge1xuICBjb250YWluLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRhaW4yLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgcGxheWVyLmJvYXJkLmJvYXJkTWFwLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgYWxseVNxciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhbGx5U3FyLmNsYXNzTGlzdC5hZGQoXCJzcXJcIik7XG4gICAgICBzd2l0Y2ggKGVsZW1lbnQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGFsbHlTcXIuY2xhc3NMaXN0LmFkZChcIm5vdEhpdFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGFsbHlTcXIuY2xhc3NMaXN0LmFkZChcInNoaXBOb3RIaXRcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBhbGx5U3FyLmNsYXNzTGlzdC5hZGQoXCJoaXROb1NoaXBcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBhbGx5U3FyLmNsYXNzTGlzdC5hZGQoXCJoaXRTaGlwXCIpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29udGFpbjIuYXBwZW5kQ2hpbGQoYWxseVNxcik7XG4gICAgfSk7XG4gIH0pO1xuICBwbGF5ZXIyLmJvYXJkLmJvYXJkTWFwLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGVsZW1lbnQsIGlkeCkgPT4ge1xuICAgICAgbGV0IHNxciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcXIuY2xhc3NMaXN0LmFkZChcInNxclwiKTtcbiAgICAgIHNxci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZihhaUdhbWUpe1xuICAgICAgICBpZiAocGxheWVyLnR1cm4pIHtcbiAgICAgICAgICBwbGF5ZXIyLmJvYXJkLnJlY2VpdmVBdHRhY2soW3Jvd0lkeCwgaWR4XSk7XG4gICAgICAgICAgcmVuZGVyR2FtZUJvYXJkKHBsYXllciwgcGxheWVyMix0cnVlKTtcbiAgICAgICAgICBwbGF5ZXIudHVybiA9IGZhbHNlO1xuICAgICAgICAgIHBsYXllcjIudHVybiA9IHRydWU7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJodW1hbiBwbGF5c1wiKTtcbiAgICAgICAgICBhaVRha2VUdXJuKHBsYXllcjIsIHBsYXllcil9fVxuXG4gICAgICAgICAgZWxzZSBpZihhaUdhbWUgPT09IGZhbHNlKXtcbiAgICAgICAgICBpZiAocGxheWVyLnR1cm4pIHtcbiAgICAgICAgICBwbGF5ZXIyLmJvYXJkLnJlY2VpdmVBdHRhY2soW3Jvd0lkeCwgaWR4XSk7XG4gICAgICAgICAgcmVuZGVyR2FtZUJvYXJkKHBsYXllciwgcGxheWVyMixmYWxzZSk7XG4gICAgICAgICAgcGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICBwbGF5ZXIyLnR1cm4gPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaHVtYW4gcGxheXNcIil9XG4gICAgICAgICAgLy9DSEFOR0UgU09NRSBURVhUIENPTlRFTlQgVE8gSVQnUyBUSEUgUExBWUVSMidTIFRVUk5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzd2l0Y2ggKGVsZW1lbnQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHNxci5jbGFzc0xpc3QuYWRkKFwibm90SGl0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgc3FyLmNsYXNzTGlzdC5hZGQoXCJub3RIaXRcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzcXIuY2xhc3NMaXN0LmFkZChcImhpdE5vU2hpcFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNxci5jbGFzc0xpc3QuYWRkKFwiaGl0U2hpcFwiKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnRhaW4uYXBwZW5kQ2hpbGQoc3FyKTtcbiAgICB9KTtcbiAgfSl9XG5cblxuZXhwb3J0IHsgcmVuZGVyR2FtZUJvYXJkIH07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lUmVuZGVyLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJTaGlwcywgcmVuZGVyUGxhY2VtZW50Q29udGFpbmVyLCBzaGlwc0Nvb3JkaW5hdGVzIH0gZnJvbSBcIi4vcmVuZGVyU2hpcHMuanNcIjtcbmltcG9ydCB7IGFpUGxhY2VTaGlwcyB9IGZyb20gXCIuL2NvbXB1dGVyVGFrZVR1cm4uanNcIjtcblxuXG5sZXQgYWlHYW1lID0gMDtcblxuZnVuY3Rpb24gYWlHYW1lU3RhcnQoKSB7XG4gIC8vU3RhcnRzIHRoZSBnYW1lIHdpdGggY29tcHV0ZXJcbiAgY29uc3QgcGxheWVyMSA9IFBsYXllcigpXG4gIGNvbnN0IHBsYXllcjIgPSBQbGF5ZXIoKSAvL0NPTVBVVEVSXG4gIGFpR2FtZSA9IDE7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVNjcmVlblwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2VTY3JlZW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIHJlbmRlclNoaXBzKHBsYXllcjEpO1xuICByZW5kZXJQbGFjZW1lbnRDb250YWluZXIocGxheWVyMSk7XG4gIFxuXG4gIFxuICBcbiAgY29uc3QgY29uZmlybVNlbGVjdEJ0dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1TZWxlY3RcIik7XG4gIGNvbmZpcm1TZWxlY3RCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gIC8vaWYgYWlnYW1lIHN0YXJ0cyB0aGUgZ2FtZVxuICAvL2lmIDItcGxheWVyIGdhbWUgcGFzcyB0byB0aGUgYmxhbmsgc2NyZWVuIHNvIHRoYXQgcGxheWVyMSBjYW4gc3RhcnRcblxuICBpZihhaUdhbWUgPT09IDFcbiAgICAmJk9iamVjdC5rZXlzKHNoaXBzQ29vcmRpbmF0ZXMpLmxlbmd0aCA9PT0gMTBcbiAgICApe1xuICBmb3IgKGxldCBlbGUgaW4gc2hpcHNDb29yZGluYXRlcyl7XG4gICAgbGV0IHNoaXBDb29yZCA9IFtdOyBcbiAgICBjb25zb2xlLmxvZyhlbGUpXG4gICAgY29uc29sZS5sb2coc2hpcHNDb29yZGluYXRlc1tlbGVdKTtcbiAgICBpZihzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMl09PT1cInhBeGlzXCIpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaTxzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMV07IGkrKyl7XG4gICAgICAgIHNoaXBDb29yZC5wdXNoKFtzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMF1bMF0sc2hpcHNDb29yZGluYXRlc1tlbGVdWzBdWzFdK2ldKVxuICAgICAgfX1cbiAgICBlbHNlIGlmKHNoaXBzQ29vcmRpbmF0ZXNbZWxlXVsyXT09PVwieUF4aXNcIil7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8c2hpcHNDb29yZGluYXRlc1tlbGVdWzFdOyBpKyspe1xuICAgICAgICAgIHNoaXBDb29yZC5wdXNoKFtzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMF1bMF0raSxzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMF1bMV1dKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcChzaGlwQ29vcmQpO1xuICB9XG5sZXQgYWlTaGlwQ29vcmRzID0gYWlQbGFjZVNoaXBzKHBsYXllcjIpO1xuZm9yIChsZXQgZWxlIGluIGFpU2hpcENvb3Jkcyl7ICBcbiAgbGV0IHNoaXBzID0gW107XG4gIGlmKGFpU2hpcENvb3Jkc1tlbGVdWzJdPT09MSl7XG4gICAgZm9yKGxldCBhID0gMDsgYSA8YWlTaGlwQ29vcmRzW2VsZV1bMV07IGErKyl7XG4gICAgICBzaGlwcy5wdXNoKFthaVNoaXBDb29yZHNbZWxlXVswXVswXSthLCBhaVNoaXBDb29yZHNbZWxlXVswXVsxXV0pXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPGFpU2hpcENvb3Jkc1tlbGVdWzFdOyBpKyspe1xuICAgICAgc2hpcHMucHVzaChbYWlTaGlwQ29vcmRzW2VsZV1bMF1bMF0sIGFpU2hpcENvb3Jkc1tlbGVdWzBdWzFdK2ldKSAgXG4gICAgfVxuICB9XG4gICAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoc2hpcHMpO1xufVxuICBwbGF5ZXIxLnR1cm4gPSB0cnVlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcmVlblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRlQnR0XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3NcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNlU2NyZWVuXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICByZW5kZXJHYW1lQm9hcmQocGxheWVyMSwgcGxheWVyMiwgdHJ1ZSk7XG59XG5cbn1cblxuKVxufVxuXG5sZXQgY3VycmVudFBsYXllcnMgPSBbXTtcblxuZnVuY3Rpb24gcGxheWVyR2FtZVN0YXJ0KCkge1xuICAvL1N0YXJ0IDItcGxheWVyIGdhbWVcbiAgY29uc3QgcGxheWVyMT0gUGxheWVyKCk7XG4gIGNvbnN0IHBsYXllcjI9UGxheWVyKCk7XG4gIFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVTY3JlZW5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNlU2NyZWVuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICByZW5kZXJTaGlwcyhwbGF5ZXIxKTtcbiAgcmVuZGVyUGxhY2VtZW50Q29udGFpbmVyKHBsYXllcjEpO1xuXG5cbiAgXG4gIFxuICB2YXIgcGxheWVyMUhhc1NlbGVjdGVkID0gZmFsc2U7XG4gIFxuICBjb25zdCBjb25maXJtU2VsZWN0QnR0ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVNlbGVjdFwiKTtcbiAgY29uZmlybVNlbGVjdEJ0dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAvL1N0b3JlIHBsYXllcjEgc2hpcCBpbmZvIC8vaWYgdGhpcyBoYXMgMTAgbGVuZ3RoID0+XG4gICAgLy9yZW5kZXIgcGxheWVyMiBzaGlwc1xuICAgIC8vcmVuZGVyIHBsYXllcjIgc2hpcCBwbGFjZW1lbnQgc2NyZWVuXG4gICAgaWYgKHBsYXllcjFIYXNTZWxlY3RlZCA9PT0gZmFsc2UgJiYgT2JqZWN0LmtleXMoc2hpcHNDb29yZGluYXRlcykubGVuZ3RoID09PSAxKXtcbiAgICAgIGxldCBwbGF5ZXIxU2hpcEluZm8gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNoaXBzQ29vcmRpbmF0ZXMpKTtcbiAgICAgIGZvciAobGV0IGVsZSBpbiBwbGF5ZXIxU2hpcEluZm8pe1xuICAgICAgICBsZXQgc2hpcDFDb29yZCA9IFtdOyBcbiAgICAgICAgaWYocGxheWVyMVNoaXBJbmZvW2VsZV1bMl09PT1cInhBeGlzXCIpe1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8cGxheWVyMVNoaXBJbmZvW2VsZV1bMV07IGkrKyl7XG4gICAgICAgICAgICBzaGlwMUNvb3JkLnB1c2goW3BsYXllcjFTaGlwSW5mb1tlbGVdWzBdWzBdLHBsYXllcjFTaGlwSW5mb1tlbGVdWzBdWzFdK2ldKVxuICAgICAgICAgIH19XG4gICAgICAgIGVsc2UgaWYocGxheWVyMVNoaXBJbmZvW2VsZV1bMl09PT1cInlBeGlzXCIpe1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTxwbGF5ZXIxU2hpcEluZm9bZWxlXVsxXTsgaSsrKXtcbiAgICAgICAgICAgICAgc2hpcDFDb29yZC5wdXNoKFtwbGF5ZXIxU2hpcEluZm9bZWxlXVswXVswXStpLHBsYXllcjFTaGlwSW5mb1tlbGVdWzBdWzFdXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoc2hpcDFDb29yZCk7XG4gICAgICB9XG4gICAgICBwbGF5ZXIxSGFzU2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZihwbGF5ZXIxSGFzU2VsZWN0ZWQgPT09IHRydWUpe1xuICAgICAgcmVuZGVyU2hpcHMocGxheWVyMik7XG4gICAgICByZW5kZXJQbGFjZW1lbnRDb250YWluZXIocGxheWVyMik7XG4gICAgICBsZXQgcGxheWVyMlNoaXBJbmZvID0gc2hpcHNDb29yZGluYXRlcztcblxuICAgIGlmKE9iamVjdC5rZXlzKHBsYXllcjJTaGlwSW5mbykubGVuZ3RoID09PSAxKVxuICAgIHtcblxuXG4gICAgICBmb3IgKGxldCBlbGUgaW4gcGxheWVyMlNoaXBJbmZvKXtcbiAgICAgICAgbGV0IHNoaXAyQ29vcmQgPSBbXTsgXG4gICAgICAgIGlmKHBsYXllcjJTaGlwSW5mb1tlbGVdWzJdPT09XCJ4QXhpc1wiKXtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHBsYXllcjJTaGlwSW5mb1tlbGVdWzFdOyBpKyspe1xuICAgICAgICAgICAgc2hpcDJDb29yZC5wdXNoKFtwbGF5ZXIyU2hpcEluZm9bZWxlXVswXVswXSxwbGF5ZXIyU2hpcEluZm9bZWxlXVswXVsxXStpXSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIGVsc2UgaWYocGxheWVyMlNoaXBJbmZvW2VsZV1bMl09PT1cInlBeGlzXCIpe1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTxwbGF5ZXIyU2hpcEluZm9bZWxlXVsxXTsgaSsrKXtcbiAgICAgICAgICAgICAgc2hpcDJDb29yZC5wdXNoKFtwbGF5ZXIyU2hpcEluZm9bZWxlXVswXVswXStpLHBsYXllcjJTaGlwSW5mb1tlbGVdWzBdWzFdXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoc2hpcDJDb29yZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3NcIikuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVNjcmVlblwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXIyXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcmVlblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2VTY3JlZW5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHJlbmRlckdhbWVCb2FyZChwbGF5ZXIxLCBwbGF5ZXIyLCBmYWxzZSk7XG4gICAgICAgIHBsYXllcjEudHVybiA9IHRydWU7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXJzLnB1c2gocGxheWVyMSwgcGxheWVyMik7XG4gICAgICB9XG4gIH1cbiAgfSl9XG5cblxuXG5leHBvcnQgeyBhaUdhbWVTdGFydCwgcGxheWVyR2FtZVN0YXJ0LCBjdXJyZW50UGxheWVycyB9XG4iLCJpbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIlxuZnVuY3Rpb24gUGxheWVyKCkgeyByZXR1cm4ge1xuICAgIC8vRWFjaCBwbGF5ZXIgcmVjZWl2ZXMgMXg1XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAyeDRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDN4M1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgNHgyIHNxdWFyZWQgc2hpcHNcblxuICAgIHNoaXBzVG9QbGFjZSA6IFs1LDQsNCwzLDMsMywyLDIsMiwyXSxcbiAgICBib2FyZCA6IGdhbWVCb2FyZCgpLFxuICAgIHR1cm4gOiBmYWxzZSxcbiAgICB0YWtlblR1cm5zIDogW10sXG4gICAgcG9zc2libGVUdXJucyA6IFtdLFxufX07XG5cblxuXG5leHBvcnQgeyBQbGF5ZXIgfSIsImltcG9ydCBpbWcgZnJvbSBcIi4vdHdvLnBuZ1wiO1xuY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcENvbnRhaW5lclwiKTtcbmNvbnN0IHNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwcyk7XG5cbi8vIGNvbnN0IGF4aXNDaGFuZ2VCdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF4aXNDaGFuZ2VcIik7XG4vLyBjb25zdCBjdXJyZW50QXhpcyA9IDA7XG4vLyAvL2lmIDAgPT4gYXhpcyBpcyB4IDsgaWYgMSA9PiBheGlzIGlzIHlcbi8vIGF4aXNDaGFuZ2VCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4vLyBpZihjdXJyZW50QXhpcyA9PT0gMCApIGN1cnJlbnRBeGlzID0gMTtcbi8vIGVsc2UgaWYgKGN1cnJlbnRBeGlzID09PSAxICkgY3VycmVudEF4aXMgPSAwO1xuLy8gfSlcblxubGV0IHBsYWNlZFNoaXBMZW5ndGggPSAwO1xuXG5sZXQgcGxhY2VkQ29vcmRzID0gW107XG5cbmZ1bmN0aW9uIHJlbmRlclNoaXBzKHBsYXllcikge1xuICBzaGlwcy5pbm5lckhUTUwgPSBcIlwiO1xuICBwbGF5ZXIuc2hpcHNUb1BsYWNlLmZvckVhY2goKGVsZSwgaWR4KSA9PiB7XG4gICAgY29uc3Qgc2hpcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc2hpcEltZy5zcmMgPSBpbWc7XG4gICAgc2hpcEltZy5pZCA9IGBzaGlwJHtpZHh9YDtcbiAgICBzaGlwSW1nLnNldEF0dHJpYnV0ZShcbiAgICAgIFwic3R5bGVcIixcbiAgICAgIGB3aWR0aCA6IGNhbGMoJHtlbGV9KjMwcHgpOyBcbiAgICAgIGhlaWdodDozMHB4O1xuICAgICAgb2JqZWN0LWZpdDpmaWxsO1xuICAgICAgZHJhZ2dhYmxlOlwidHJ1ZVwiOyBcbiAgICAgIHRvcDogLTNweDtcbiAgICAgIGxlZnQ6IC0zcHhgXG4gICAgKTtcbiAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQoXCJ4QXhpc1wiKTtcbiAgICBzaGlwSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJpZFwiLCBlLnRhcmdldC5pZCk7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiY2xhc3NcIiwgZS50YXJnZXQuY2xhc3NMaXN0KTtcbiAgICAgIHBsYWNlZFNoaXBMZW5ndGggPSBlbGU7XG4gICAgfSk7XG4gICAgc2hpcHMuYXBwZW5kQ2hpbGQoc2hpcEltZyk7XG4gIH0pXG4gIH07XG5cblxubGV0IHNoaXBzQ29vcmRpbmF0ZXMgPSB7fTtcbmZ1bmN0aW9uIHJlbmRlclBsYWNlbWVudENvbnRhaW5lcihwbGF5ZXIpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2VtZW50Q29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIHNoaXBzQ29vcmRpbmF0ZXMgPSB7fTtcbiAgcGxheWVyLmJvYXJkLmJvYXJkTWFwLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGVsZW1lbnQsIGlkeCkgPT4ge1xuICAgICAgbGV0IGFsbHlTcXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWxseVNxci5jbGFzc0xpc3QuYWRkKFwic3FyXCIpO1xuXG4gICAgICBhbGx5U3FyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBjaGVja0xlZ2FsKGUpIHtcbiAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlkXCIpO1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dlZFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYXRhfWApO1xuICAgICAgICAgICAgIGlmIChkcmFnZ2VkU2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ4QXhpc1wiKSl7XG4gICAgICAgICAgICAgICBpZiAoKHBsYWNlZFNoaXBMZW5ndGggKyBpZHgpID4gMTApIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IHBsYWNlZFNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgIGlmKCBwbGFjZWRDb29yZHMuaW5jbHVkZXMocm93SWR4KjEwICsgaWR4K2kpKXtcbiAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlfX19XG4gICAgICAgICAgICAgZWxzZSBpZiAoZHJhZ2dlZFNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwieUF4aXNcIikpe1xuICAgICAgICAgICAgICAgaWYgKCAocGxhY2VkU2hpcExlbmd0aCArIHJvd0lkeCkgPiAxMCkgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgcGxhY2VkU2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgaWYoIHBsYWNlZENvb3Jkcy5pbmNsdWRlcygocm93SWR4K2kpKjEwICsgaWR4KSl7XG4gIFxuICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2V9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm4gcmVzdWx0fVxuICAgICAgICBcbiAgICAgICAgICBpZiAoY2hlY2tMZWdhbChlKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlkXCIpO1xuICAgICAgICBjb25zdCBheGlzID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImNsYXNzXCIpO1xuICAgICAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYXRhfWApKTtcbiAgICAgICAgc2hpcHNDb29yZGluYXRlc1tgJHtkYXRhfWBdID0gW1xuICAgICAgICAgIFtyb3dJZHgsaWR4XSxcbiAgICAgICAgICBwbGFjZWRTaGlwTGVuZ3RoLFxuICAgICAgICAgIGF4aXMsXG4gICAgICAgIF07XG4gIFxuICAgICAgICBwbGFjZWRDb29yZHMgPSBjb29yZENhbGMoc2hpcHNDb29yZGluYXRlcyk7XG4gICAgICAgIGZ1bmN0aW9uIGNvb3JkQ2FsYyhzaGlwc0Nvb3JkaW5hdGVzKXtcbiAgICAgICAgICBsZXQgcmVzdWx0ID1bXTtcbiAgICAgICAgICBmb3IobGV0IGVsZSBpbiBzaGlwc0Nvb3JkaW5hdGVzKXtcbiAgICAgICAgICAgIGlmIChzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMl09PT1cInhBeGlzXCIpe1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMV07IGkrKyl7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc2hpcHNDb29yZGluYXRlc1tlbGVdWzBdICsgaSlcbiAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMl09PT1cInlBeGlzXCIpe1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMV07IGkrKyl7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc2hpcHNDb29yZGluYXRlc1tlbGVdWzBdICsgKGkqMTApKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYXRhfWApLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrTGVnYWxUdXJuKCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgY29yZFN0ciA9IHNoaXBzQ29vcmRpbmF0ZXNbZGF0YV1bMF0udG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICAgICAgICBsZXQgaWR4ID0gcGFyc2VJbnQoY29yZFN0ci5hdCgxKSkgOyBcbiAgICAgICAgICAgIGxldCByb3dJZHggPSBwYXJzZUludChjb3JkU3RyLmF0KDApKTtcbiAgICAgICAgICAgY29uc3QgZHJhZ2dlZFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYXRhfWApO1xuICAgICAgICAgICAgaWYgKGRyYWdnZWRTaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInhBeGlzXCIpKXtcbiAgICAgICAgICAgICAgaWYgKChzaGlwc0Nvb3JkaW5hdGVzW2RhdGFdWzFdKyByb3dJZHgpID4gMTApIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaTwgcGxhY2VkU2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICBpZiggcGxhY2VkQ29vcmRzLmluY2x1ZGVzKChyb3dJZHgraSkqMTAgKyBpZHgpKXtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2V9fX1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRyYWdnZWRTaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInlBeGlzXCIpKXtcbiAgICAgICAgICAgICAgaWYgKCAoc2hpcHNDb29yZGluYXRlc1tkYXRhXVsxXSArIGlkeCkgPiAxMCkgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpPCBwbGFjZWRTaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgIGlmKCBwbGFjZWRDb29yZHMuaW5jbHVkZXMoKHJvd0lkeCkqMTAgKyBpZHgraSkpe1xuICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZX1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gZmFsc2UpIGNvbnNvbGUubG9nKFwiSVQgSVNOVCBMRUdBTFwiKVxuICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgaWYoY2hlY2tMZWdhbFR1cm4oKSl7XG4gICAgICAgICAgaWYgKHNoaXBzQ29vcmRpbmF0ZXNbZGF0YV1bMl09PT1cInhBeGlzXCIpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJ4QXhpc1wiKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ5QXhpc1wiKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwic3R5bGVcIixcbiAgICAgICAgICAgIGB3aWR0aCA6IDMwcHg7IFxuICAgICAgICAgICAgaGVpZ2h0OmNhbGMoJHtzaGlwc0Nvb3JkaW5hdGVzW2RhdGFdWzFdfSozMHB4KTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6ZmlsbDtcbiAgICAgICAgICAgIGRyYWdnYWJsZTpcInRydWVcIjsgXG4gICAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgICBsZWZ0OiAtM3B4YCk7XG4gICAgICAgICAgICBzaGlwc0Nvb3JkaW5hdGVzW2Ake2RhdGF9YF0gPSBbXG4gICAgICAgICAgICAgIFtyb3dJZHgsaWR4XSxcbiAgICAgICAgICAgICAgcGxhY2VkU2hpcExlbmd0aCxcbiAgICAgICAgICAgICAgYHlBeGlzYCxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSBlbHNlIGlmIChzaGlwc0Nvb3JkaW5hdGVzW2RhdGFdWzJdPT09XCJ5QXhpc1wiKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwieEF4aXNcIik7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwieUF4aXNcIik7XG4gICAgICAgICAgICBlLnRhcmdldC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInN0eWxlXCIsXG4gICAgICAgICAgIGB3aWR0aCA6IGNhbGMoJHtzaGlwc0Nvb3JkaW5hdGVzW2RhdGFdWzFdfSozMHB4KTsgXG4gICAgICAgICAgICBoZWlnaHQ6MzBweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6ZmlsbDtcbiAgICAgICAgICAgIGRyYWdnYWJsZTpcInRydWVcIjsgXG4gICAgICAgICAgICB0b3A6IC0zcHg7XG4gICAgICAgICAgICBsZWZ0OiAtM3B4YCk7XG4gICAgICAgICAgICBzaGlwc0Nvb3JkaW5hdGVzW2Ake2RhdGF9YF0gPSBbXG4gICAgICAgICAgICAgIFtyb3dJZHgsaWR4XSxcbiAgICAgICAgICAgICAgcGxhY2VkU2hpcExlbmd0aCxcbiAgICAgICAgICAgICAgXCJ4QXhpc1wiLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgcGxhY2VkQ29vcmRzID0gY29vcmRDYWxjKHNoaXBzQ29vcmRpbmF0ZXMpO1xuXG4gICAgICAgIH19KVxuXG59XG4gICAgICB9KTtcblxuICAgICAgYWxseVNxci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHN3aXRjaCAoZWxlbWVudCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgYWxseVNxci5jbGFzc0xpc3QuYWRkKFwibm90SGl0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgYWxseVNxci5jbGFzc0xpc3QuYWRkKFwic2hpcE5vdEhpdFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNlbWVudENvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChhbGx5U3FyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHJlbmRlclNoaXBzLCByZW5kZXJQbGFjZW1lbnRDb250YWluZXIsIHNoaXBzQ29vcmRpbmF0ZXMgfTtcblxuLy9hbHNvIGFkZCBhIGJ1dHRvbiB0byBjaGFuZ2UgdGhlIHBsYWNlbWVudCBvZiB0aGUgc2hpcFxuIiwiZnVuY3Rpb24gU2hpcCAoY29vcmRpbmF0ZXMpIHtyZXR1cm4ge1xuICAgIGxlbmd0aCA6IGNvb3JkaW5hdGVzLmxlbmd0aCxcbiAgICBocCA6IGNvb3JkaW5hdGVzLmxlbmd0aCxcbiAgICBjb29yZGluYXRlcyA6IGNvb3JkaW5hdGVzLFxuICAgIHN1bmsgOiBmYWxzZSxcbiAgICBcbiAgICBoaXQoY29vcmRpbmF0ZSl7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkLCBpZHgpPT57XG4gICAgICAgICAgICBpZihjb29yZFswXT09PWNvb3JkaW5hdGVbMF0mJiBjb29yZFsxXT09PWNvb3JkaW5hdGVbMV0pe1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaWR4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgaWYodGhpcy5ocD4wKXtcbiAgICAgICAgdGhpcy5ocCAtPSAxfVxuICAgIH0sXG4gICAgaXNTdW5rKCl7XG4gICAgICAgIGlmKHRoaXMuaHA9PT0wJiZ0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cbn19XG5leHBvcnQgeyBTaGlwIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcHMuanNcIjtcbmltcG9ydCB7Z2FtZUJvYXJkfSBmcm9tIFwiLi9nYW1lQm9hcmQuanNcIjtcbmltcG9ydCBcIi4vc3R5bGVzaGVldC5jc3NcIjtcbmltcG9ydCB7IGFpR2FtZVN0YXJ0LCBwbGF5ZXJHYW1lU3RhcnQgfSBmcm9tIFwiLi9nYW1lU3RhcnQuanNcIjsgXG5pbXBvcnQgeyByZW5kZXJHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lUmVuZGVyLmpzXCI7XG5pbXBvcnQgeyBjdXJyZW50UGxheWVycyB9IGZyb20gXCIuL2dhbWVTdGFydC5qc1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVycy5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyU2hpcHMsIHJlbmRlclBsYWNlbWVudENvbnRhaW5lciB9IGZyb20gXCIuL3JlbmRlclNoaXBzLmpzXCI7XG5pbXBvcnQgeyBhaVBsYWNlU2hpcHMgfSBmcm9tIFwiLi9jb21wdXRlclRha2VUdXJuLmpzXCI7XG5cbi8vTWFpbiBNZW51XG5jb25zdCBhaVN0YXJ0QnR0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhaUdhbWVcIik7XG5jb25zdCBodW1hblN0YXJ0QnR0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNodW1hbkdhbWVcIik7XG4vL3Rha2UgdGhlIGdhbWUgdG8gc2hpcCBzZWxlY3Rpb25cbmNvbnN0IGNyZWRpdHNCdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWRpdHNcIik7XG5cbmFpU3RhcnRCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgYWlHYW1lU3RhcnQoKTtcbn0pXG5cbmh1bWFuU3RhcnRCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgcGxheWVyR2FtZVN0YXJ0KCk7XG59KVxuXG4vL0NvbmZpcm0gc2hpcCBzZWxlY3Rpb25cbmNvbnN0IGNvbmZpcm1CdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1TZWxlY3RcIik7XG5cbmNvbmZpcm1CdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG5cbn0pXG5cbi8vIFBhc3NpbmcgdGhlIHNjcmVlbiBpbXBsZW1lbnRhdGlvblxuY29uc3QgcGFzc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc1wiKTtcbmNvbnN0IHR1cm5TdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc1NjcmVlblwiKTtcbmNvbnN0IGdhbWVTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcmVlblwiKTtcbmNvbnN0IGhpZGVCdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZGVCdHRcIik7XG5cblxuXG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBldmVudD0+e1xuLy8gICAgIGlmKGV2ZW50LmNvZGU9PT0gXCJTcGFjZVwiKXtcbi8vICAgICBpZihwYXNzQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcInNob3dcIikpe1xuLy8gICAgIGdhbWVTY3JlZW4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4vLyAgICAgdHVyblN0YXJ0LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpfVxuLy8gfVxuLy8gfSlcblxuLy9NYWtlIHN1cmUgdGhlIHBsYXllciBoYXMgcGxheWVkIHRoZWlyIHR1cm5cbi8vS2VlcCB0aGUgdHJhY2sgb2Ygd2hpY2ggc2NyZWVuIGlzIHNob3dpbmcgc28gdGhhdCBpIGNhbiBjaGFuZ2UgaXQgXG5cbnBhc3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgZ2FtZVNjcmVlbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB0dXJuU3RhcnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG59KVxuXG50dXJuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgZ2FtZVNjcmVlbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB0dXJuU3RhcnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgaWYoY3VycmVudFBsYXllcnNbMF0udHVybikge3JlbmRlckdhbWVCb2FyZChjdXJyZW50UGxheWVyc1swXSxjdXJyZW50UGxheWVyc1sxXSxmYWxzZSl9XG4gICAgZWxzZSBpZihjdXJyZW50UGxheWVyc1sxXS50dXJuKSB7IHJlbmRlckdhbWVCb2FyZChjdXJyZW50UGxheWVyc1sxXSwgY3VycmVudFBsYXllcnNbMF0sIGZhbHNlKX1cbiAgICAvL2lmIHRoZSBsYXN0IHR1cm4gcGxheWVkIGlzIHBsYXllcjEgPT4gcmVuZGVyIGZvciBwbGF5ZXIyXG4gICAgLy9lbHNlIGlmIHRoZSBsYXN0IHR1cm4gcGxheWVkIGlzIHBsYXllcjIgPT5yZW5kZXIgZm9yIHBsYXllcjFcbn0pXG5cbmhpZGVCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lcjJcIik7XG4gICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG59KVxuXG5cbi8vVE9ET1xuLy9GSVggVEhFIDItUExBWUVSIEdBTUVcbi8vSW1wbGVtZW50IHRoZSB3aW4gY29uZGl0aW9uXG4vL0ltcGxlbWVudCBhIHdpbiBzY3JlZW5cblxuLy9jdXJyZW50bHkgc2hpcCBzZWxlY3Rpb24gc2NyZWVuIGFuZCB0aGUgYWN0dWFsIGdhbWUgc2NyZWVuIGxvb2tzIHdheSBkaWZmZXJlbnQgLy8gaW1wbGVtZW50IHRoZSBzaGlwIHNlbGVjdGlvbiBzY3JlZW4gbG9vayB0byB0aGUgYWN0dWFsIGdhbWUgc2NyZWVuIHdpdGggc2hpcHMgYmVpbmcgcmVuZGVyZWQgYXMgdGhleSBhcmUgaW4gc2VsZWN0aW9uIHNjcmVlblxuLy8gSW1wbGVtZW50aW5nIHRoZSBzaGlwIHNlbGVjdGlvbiBzY3JlZW4gbG9vayB0byB0aGUgYWN0dWFsIGdhbWUgd2lsbCBicmVhayBob3cgdGhlIGhpdHMgYXJlIGJlaW5nIHJlbmRlcmVkIC8vIGZpbmQgYSBkaWZmZXJlbnQgd2F5IHRvIHJlbmRlciBpdFxuLy9pbXBsZW1lbnQgYSBidXR0b24gc28gaSBjYW4gY2hhbmdlIHRoZSBpbmRleCAgXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9