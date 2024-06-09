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
___CSS_LOADER_EXPORT___.push([module.id, `body{
    display: flex;
    justify-content: center;
    flex-direction: column; 
    align-items: center;
    background-color: beige;
    height: 100vh;
    width: 100vw;
}

.mainMenu {
    display: grid;
    margin: 25%;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    gap : 25px
}
.mainMenu button {
        color: rgb(254, 254, 254); font-size: 25px; line-height: 30px; padding: 13px; border-radius: 8px; font-family: Georgia, serif; font-weight: 900; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none; text-shadow: 2px 2px 2px black;; background-image: linear-gradient(to right, rgb(255, 153, 0) 0%, rgb(193, 116, 0) 100%); box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px; border: 2px outset rgb(121, 73, 0); display: inline-block;}
.mainMenu button:hover {
        background: #FF9900; }
.mainMenu button:active {
        background: #C17400; }
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

.container, .shipPlacementContainer {
    display: grid;
    grid-template-columns: repeat(10, 30px);
    grid-template-rows: repeat(10, 30px);
}
.container2 {
    display: grid;
    grid-template-columns: repeat(10, 30px);
    grid-template-rows: repeat(10, 30px);
}
.sqr{ 
    padding: 10px;
    border: 3px solid black;
    position: relative;
}

.notHit{
    background-color: #777777;
}

.shipNotHit {
    background-color: blue;
}

.hitNoShip {
    background: #9D0707;
    background: -moz-radial-gradient(center, #9D0707 0%, #777777 42%, #777777 100%);
    background: -webkit-radial-gradient(center, #9D0707 0%, #777777 42%, #777777 100%);
    background: radial-gradient(ellipse at center, #9D0707 0%, #777777 42%, #777777 100%);
}

.hitShip {
    background: #A40000;
    background: -moz-radial-gradient(center, #A40000 0%, #2168CB 52%, #144E75 100%);
    background: -webkit-radial-gradient(center, #A40000 0%, #2168CB 52%, #144E75 100%);
    background: radial-gradient(ellipse at center, #A40000 0%, #2168CB 52%, #144E75 100%);
}

.show {
    display : inline-block
}

.hide {
    display:none;
}

.shipContainer{
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

.menuScreen { 
    display : none;
}

.shipPlaceScreen { 
    display: grid;
    grid-template-rows: 1fr 1fr;
    
}

.sqr img {
    position: absolute;
    top: -3px;
    left: -3px;
    z-index: 1;
}`, "",{"version":3,"sources":["webpack://./src/stylesheet.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,0BAA0B;IAC1B,mBAAmB;IACnB,uBAAuB;IACvB;AACJ;AACA;QACQ,yBAAyB,EAAE,eAAe,EAAE,iBAAiB,EAAE,aAAa,EAAE,kBAAkB,EAAE,2BAA2B,EAAE,gBAAgB,EAAE,qBAAqB,EAAE,kBAAkB,EAAE,oBAAoB,EAAE,oBAAoB,EAAE,8BAA8B,GAAG,uFAAuF,EAAE,yCAAyC,EAAE,kCAAkC,EAAE,qBAAqB,CAAC;AAC/c;QACQ,mBAAmB,EAAE;AAC7B;QACQ,mBAAmB,EAAE;AAC7B;;;GAGG;AACH;;GAEG;;AAEH;IACI,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC;AACA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,+EAA+E;IAC/E,kFAAkF;IAClF,qFAAqF;AACzF;;AAEA;IACI,mBAAmB;IACnB,+EAA+E;IAC/E,kFAAkF;IAClF,qFAAqF;AACzF;;AAEA;IACI;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,eAAe;IACf,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;;AAEtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,2BAA2B;;AAE/B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,UAAU;AACd","sourcesContent":["body{\n    display: flex;\n    justify-content: center;\n    flex-direction: column; \n    align-items: center;\n    background-color: beige;\n    height: 100vh;\n    width: 100vw;\n}\n\n.mainMenu {\n    display: grid;\n    margin: 25%;\n    grid-template-columns: 1fr;\n    align-items: center;\n    justify-content: center;\n    gap : 25px\n}\n.mainMenu button {\n        color: rgb(254, 254, 254); font-size: 25px; line-height: 30px; padding: 13px; border-radius: 8px; font-family: Georgia, serif; font-weight: 900; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none; text-shadow: 2px 2px 2px black;; background-image: linear-gradient(to right, rgb(255, 153, 0) 0%, rgb(193, 116, 0) 100%); box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px; border: 2px outset rgb(121, 73, 0); display: inline-block;}\n.mainMenu button:hover {\n        background: #FF9900; }\n.mainMenu button:active {\n        background: #C17400; }\n/* \n.menuScreen{\n    display: none;\n} */\n/* .gameScreen {\n    display:none\n} */\n\n.gameScreen {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    grid-template-rows: 8fr 1fr 1fr 8fr;\n    justify-items: center;\n    align-items: start;\n}\n\n.container, .shipPlacementContainer {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}\n.container2 {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}\n.sqr{ \n    padding: 10px;\n    border: 3px solid black;\n    position: relative;\n}\n\n.notHit{\n    background-color: #777777;\n}\n\n.shipNotHit {\n    background-color: blue;\n}\n\n.hitNoShip {\n    background: #9D0707;\n    background: -moz-radial-gradient(center, #9D0707 0%, #777777 42%, #777777 100%);\n    background: -webkit-radial-gradient(center, #9D0707 0%, #777777 42%, #777777 100%);\n    background: radial-gradient(ellipse at center, #9D0707 0%, #777777 42%, #777777 100%);\n}\n\n.hitShip {\n    background: #A40000;\n    background: -moz-radial-gradient(center, #A40000 0%, #2168CB 52%, #144E75 100%);\n    background: -webkit-radial-gradient(center, #A40000 0%, #2168CB 52%, #144E75 100%);\n    background: radial-gradient(ellipse at center, #A40000 0%, #2168CB 52%, #144E75 100%);\n}\n\n.show {\n    display : inline-block\n}\n\n.hide {\n    display:none;\n}\n\n.shipContainer{\n    grid-area: 1/2/5/3;\n    align-self: center;\n    text-align: center;\n}\n\n.pass {\n    position: absolute;\n    top: -70px;\n    left: 0px;\n    font-size: 24px;\n    background-color: #777777;\n    color: aliceblue;\n}\n\n.hideBtt {\n    position: absolute;\n    left: 135px;\n    top: -5px;\n}\n\n.enemy {\n    grid-area: 1/1/2/2;\n}\n\n.player {\n    position: relative;\n    grid-area: 4/1/5/2;\n\n}\n\n.menuScreen { \n    display : none;\n}\n\n.shipPlaceScreen { \n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    \n}\n\n.sqr img {\n    position: absolute;\n    top: -3px;\n    left: -3px;\n    z-index: 1;\n}"],"sourceRoot":""}]);
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




function aiGameStart() {
  //Starts the game with computer
  const player1 = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.Player)();
  let cord = [
    [1, 1],
    [1, 2],
    [1, 3],
  ];
  let cord2 = [
    [2, 1],
    [2, 2],
    [2, 3],
  ];
  let cord3 = [
    [7, 1],
    [6, 1],
  ];
  player1.board.placeShip(cord);
  player1.board.placeShip(cord2);
  player1.board.placeShip(cord3);
  const player2 = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.Player)();
  player2.board.placeShip(cord);
  player2.board.placeShip(cord3);
  player1.turn = true;
  
  document.querySelector(".hideBtt").classList.add("hide");
  document.querySelector(".pass").classList.add("hide");
  document.querySelector(".menuScreen").classList.add("hide");
  document.querySelector(".screen").classList.remove("hide");
  (0,_gameRender_js__WEBPACK_IMPORTED_MODULE_1__.renderGameBoard)(player1, player2, true);
}

let currentPlayers = [];

function playerGameStart() {
  //Start 2-player game
  document.querySelector(".pass").classList.add("show");
  const player1 = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.Player)();
  let cord = [
    [1, 1],
    [1, 2],
    [1, 3],
  ];
  let cord2 = [
    [2, 1],
    [2, 2],
    [2, 3],
  ];
  let cord3 = [
    [7, 1],
    [6, 1],
  ];
  player1.board.placeShip(cord);
  player1.board.placeShip(cord2);
  player1.board.placeShip(cord3);
  const player2 = (0,_players_js__WEBPACK_IMPORTED_MODULE_0__.Player)();
  player2.board.placeShip(cord);
  player2.board.placeShip(cord3);
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
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ "./src/ships.js");


const shipContainer = document.querySelector(".shipContainer");
const ships = document.createElement("ul");
shipContainer.appendChild(ships);

let placedShipLength = 0;
let placedShipIdx = -1;

function renderShips(player){
    player.shipsToPlace.forEach((ele,idx) => {
      const shipImg = document.createElement("img");
      shipImg.src = _two_png__WEBPACK_IMPORTED_MODULE_0__;
      shipImg.id = `ship${idx}`;
      shipImg.setAttribute("style", `width : calc(${ele}*30px); height:30px; object-fit:fill; draggable:"true"`);
      shipImg.addEventListener("dragstart", (e)=>{
        e.dataTransfer.setData("id", e.target.id);
        placedShipLength = ele;
      });
      ships.appendChild(shipImg);
    });
  };


function renderPlacementContainer(player){
  const shipsCoordinates = {};
    let axis = 0;
    //if 0 => axis is x ; if 1 => axis is y
    player.board.boardMap.forEach((row, rowIdx) => {
      row.forEach((element, idx) => {
        let allySqr = document.createElement("div");
        allySqr.classList.add("sqr");
  
        allySqr.addEventListener("drop", (e)=>{
          e.preventDefault();

          //if its legal =>
          //render the image in front of the squares
          const data = e.dataTransfer.getData("id");
          e.target.appendChild(document.querySelector(`#${data}`));
          shipsCoordinates[`${data}`] = [(rowIdx*10)+idx, placedShipLength, axis];
          console.log(shipsCoordinates[`${data}`]);
          console.log(shipsCoordinates);
        })
  
        allySqr.addEventListener("dragover", (e)=>{
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
  })
}




 




//when dropped take the ships coordinate to place them later on
//make a hashmap for coordinates
//make the ships so that they can be changed within the placement square with drag and drop api
//double click should change the ships direction
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
const creditsBtt = document.querySelector("#credits");

aiStartBtt.addEventListener("click", ()=>{
    (0,_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.aiGameStart)();
})

humanStartBtt.addEventListener("click", ()=>{
    ;(0,_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.playerGameStart)();
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

const testPlayer = (0,_players_js__WEBPACK_IMPORTED_MODULE_5__.Player)();
(0,_renderShips_js__WEBPACK_IMPORTED_MODULE_6__.renderPlacementContainer)(testPlayer);
(0,_renderShips_js__WEBPACK_IMPORTED_MODULE_6__.renderShips)(testPlayer);
//TODO
//implement drag and drop for ships
    //there should be a confirm button
    //implement a button so i can change the index
//implement a way so that ai can put ships
//Implement the win condition
//Implement a win screen




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0M7QUFDTztBQUNmO0FBQ29DO0FBQ1o7QUFDRjtBQUNWO0FBQ21DOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksMERBQVc7QUFDZixDQUFDOztBQUVEO0FBQ0EsSUFBSSwrREFBZTtBQUNuQixDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlEQUFjLFdBQVcsK0RBQWUsQ0FBQyx5REFBYyxJQUFJLHlEQUFjO0FBQ2hGLFlBQVkseURBQWMsWUFBWSwrREFBZSxDQUFDLHlEQUFjLEtBQUsseURBQWM7QUFDdkY7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtQkFBbUIsbURBQU07QUFDekIseUVBQXdCO0FBQ3hCLDREQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXNoZWV0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXNoZWV0LmNzcz9kNzRkIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY29tcHV0ZXJUYWtlVHVybi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZVJlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lU3RhcnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9yZW5kZXJTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuLm1haW5NZW51IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1hcmdpbjogMjUlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwIDogMjVweFxufVxuLm1haW5NZW51IGJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7IGZvbnQtc2l6ZTogMjVweDsgbGluZS1oZWlnaHQ6IDMwcHg7IHBhZGRpbmc6IDEzcHg7IGJvcmRlci1yYWRpdXM6IDhweDsgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmOyBmb250LXdlaWdodDogOTAwOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7IHRleHQtdHJhbnNmb3JtOiBub25lOyB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7OyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDE1MywgMCkgMCUsIHJnYigxOTMsIDExNiwgMCkgMTAwJSk7IGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSA1cHggNXB4IDE1cHggNXB4OyBib3JkZXI6IDJweCBvdXRzZXQgcmdiKDEyMSwgNzMsIDApOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxuLm1haW5NZW51IGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRjk5MDA7IH1cbi5tYWluTWVudSBidXR0b246YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0MxNzQwMDsgfVxuLyogXG4ubWVudVNjcmVlbntcbiAgICBkaXNwbGF5OiBub25lO1xufSAqL1xuLyogLmdhbWVTY3JlZW4ge1xuICAgIGRpc3BsYXk6bm9uZVxufSAqL1xuXG4uZ2FtZVNjcmVlbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZnIgMWZyIDFmciA4ZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmNvbnRhaW5lciwgLnNoaXBQbGFjZW1lbnRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcbn1cbi5jb250YWluZXIyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XG59XG4uc3FyeyBcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5vdEhpdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xufVxuXG4uc2hpcE5vdEhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmhpdE5vU2hpcCB7XG4gICAgYmFja2dyb3VuZDogIzlEMDcwNztcbiAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsICM5RDA3MDcgMCUsICM3Nzc3NzcgNDIlLCAjNzc3Nzc3IDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgIzlEMDcwNyAwJSwgIzc3Nzc3NyA0MiUsICM3Nzc3NzcgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAjOUQwNzA3IDAlLCAjNzc3Nzc3IDQyJSwgIzc3Nzc3NyAxMDAlKTtcbn1cblxuLmhpdFNoaXAge1xuICAgIGJhY2tncm91bmQ6ICNBNDAwMDA7XG4gICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCAjQTQwMDAwIDAlLCAjMjE2OENCIDUyJSwgIzE0NEU3NSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsICNBNDAwMDAgMCUsICMyMTY4Q0IgNTIlLCAjMTQ0RTc1IDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgI0E0MDAwMCAwJSwgIzIxNjhDQiA1MiUsICMxNDRFNzUgMTAwJSk7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrXG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG5cbi5zaGlwQ29udGFpbmVye1xuICAgIGdyaWQtYXJlYTogMS8yLzUvMztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTcwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59XG5cbi5oaWRlQnR0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTM1cHg7XG4gICAgdG9wOiAtNXB4O1xufVxuXG4uZW5lbXkge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbn1cblxuLnBsYXllciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGdyaWQtYXJlYTogNC8xLzUvMjtcblxufVxuXG4ubWVudVNjcmVlbiB7IFxuICAgIGRpc3BsYXkgOiBub25lO1xufVxuXG4uc2hpcFBsYWNlU2NyZWVuIHsgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgXG59XG5cbi5zcXIgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtM3B4O1xuICAgIGxlZnQ6IC0zcHg7XG4gICAgei1pbmRleDogMTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCO0FBQ0o7QUFDQTtRQUNRLHlCQUF5QixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsMkJBQTJCLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsOEJBQThCLEdBQUcsdUZBQXVGLEVBQUUseUNBQXlDLEVBQUUsa0NBQWtDLEVBQUUscUJBQXFCLENBQUM7QUFDL2M7UUFDUSxtQkFBbUIsRUFBRTtBQUM3QjtRQUNRLG1CQUFtQixFQUFFO0FBQzdCOzs7R0FHRztBQUNIOztHQUVHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsK0VBQStFO0lBQy9FLGtGQUFrRjtJQUNsRixxRkFBcUY7QUFDekY7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsK0VBQStFO0lBQy9FLGtGQUFrRjtJQUNsRixxRkFBcUY7QUFDekY7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLm1haW5NZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiAyNSU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwIDogMjVweFxcbn1cXG4ubWFpbk1lbnUgYnV0dG9uIHtcXG4gICAgICAgIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7IGZvbnQtc2l6ZTogMjVweDsgbGluZS1oZWlnaHQ6IDMwcHg7IHBhZGRpbmc6IDEzcHg7IGJvcmRlci1yYWRpdXM6IDhweDsgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmOyBmb250LXdlaWdodDogOTAwOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7IHRleHQtdHJhbnNmb3JtOiBub25lOyB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7OyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDE1MywgMCkgMCUsIHJnYigxOTMsIDExNiwgMCkgMTAwJSk7IGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSA1cHggNXB4IDE1cHggNXB4OyBib3JkZXI6IDJweCBvdXRzZXQgcmdiKDEyMSwgNzMsIDApOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxcbi5tYWluTWVudSBidXR0b246aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGOTkwMDsgfVxcbi5tYWluTWVudSBidXR0b246YWN0aXZlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNDMTc0MDA7IH1cXG4vKiBcXG4ubWVudVNjcmVlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICovXFxuLyogLmdhbWVTY3JlZW4ge1xcbiAgICBkaXNwbGF5Om5vbmVcXG59ICovXFxuXFxuLmdhbWVTY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOGZyIDFmciAxZnIgOGZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmNvbnRhaW5lciwgLnNoaXBQbGFjZW1lbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuLmNvbnRhaW5lcjIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuLnNxcnsgXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ub3RIaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XFxufVxcblxcbi5zaGlwTm90SGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmhpdE5vU2hpcCB7XFxuICAgIGJhY2tncm91bmQ6ICM5RDA3MDc7XFxuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgIzlEMDcwNyAwJSwgIzc3Nzc3NyA0MiUsICM3Nzc3NzcgMTAwJSk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgIzlEMDcwNyAwJSwgIzc3Nzc3NyA0MiUsICM3Nzc3NzcgMTAwJSk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgIzlEMDcwNyAwJSwgIzc3Nzc3NyA0MiUsICM3Nzc3NzcgMTAwJSk7XFxufVxcblxcbi5oaXRTaGlwIHtcXG4gICAgYmFja2dyb3VuZDogI0E0MDAwMDtcXG4gICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCAjQTQwMDAwIDAlLCAjMjE2OENCIDUyJSwgIzE0NEU3NSAxMDAlKTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCAjQTQwMDAwIDAlLCAjMjE2OENCIDUyJSwgIzE0NEU3NSAxMDAlKTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAjQTQwMDAwIDAlLCAjMjE2OENCIDUyJSwgIzE0NEU3NSAxMDAlKTtcXG59XFxuXFxuLnNob3cge1xcbiAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrXFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4uc2hpcENvbnRhaW5lcntcXG4gICAgZ3JpZC1hcmVhOiAxLzIvNS8zO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBhc3Mge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTcwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG4uaGlkZUJ0dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTM1cHg7XFxuICAgIHRvcDogLTVweDtcXG59XFxuXFxuLmVuZW15IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG5cXG4ucGxheWVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XFxuXFxufVxcblxcbi5tZW51U2NyZWVuIHsgXFxuICAgIGRpc3BsYXkgOiBub25lO1xcbn1cXG5cXG4uc2hpcFBsYWNlU2NyZWVuIHsgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgXFxufVxcblxcbi5zcXIgaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zcHg7XFxuICAgIGxlZnQ6IC0zcHg7XFxuICAgIHotaW5kZXg6IDE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlc2hlZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzaGVldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlbmRlckdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVSZW5kZXJcIjtcblxuZnVuY3Rpb24gYWlUYWtlVHVybihwbGF5ZXIsIGh1bWFuUGxheWVyKXtcbiAgICB3aGlsZShwbGF5ZXIudHVybiA9PT0gdHJ1ZSAmJiBwbGF5ZXIudGFrZW5UdXJucy5sZW5ndGggPCAxMDEpIHtcbiAgICAgICAgaWYoISgocGxheWVyLnBvc3NpYmxlVHVybnMubGVuZ3RoKSA9PT0gMCkpe1xuICAgICAgICAgICAgbGV0IHB0PSBwbGF5ZXIucG9zc2libGVUdXJucy5zaGlmdCgpO1xuICAgICAgICAgICAgaWYoIShwbGF5ZXIudGFrZW5UdXJucy5pbmNsdWRlcygoKHB0WzBdKjEwKStwdFsxXSkpKSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKHB0WzBdKjEwKStwdFsxXSk7XG4gICAgICAgICAgICAgICAgbGV0IHNIaXQgPSBodW1hblBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHB0KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudGFrZW5UdXJucy5wdXNoKChwdFswXSoxMCkrcHRbMV0pO1xuICAgICAgICAgICAgICAgIGlmKHNIaXQgPT09MyApeyBcbiAgICAgICAgICAgICAgICAgICAgaWYocHRbMF0rMTwxMCkgICAgICAgICAgICBwbGF5ZXIucG9zc2libGVUdXJucy5wdXNoKFtwdFswXSsxLCBwdFsxXV0pO1xuICAgICAgICAgICAgICAgICAgICBpZihwdFswXSsxPDEwJiZwdFsxXSsxPDEwKXBsYXllci5wb3NzaWJsZVR1cm5zLnB1c2goW3B0WzBdKzEsIHB0WzFdKzFdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYocHRbMF0tMT4tMSkgICAgICAgICAgICBwbGF5ZXIucG9zc2libGVUdXJucy5wdXNoKFtwdFswXS0xLCBwdFsxXV0pO1xuICAgICAgICAgICAgICAgICAgICBpZihwdFswXS0xPi0xJiZwdFsxXS0xPi0xKXBsYXllci5wb3NzaWJsZVR1cm5zLnB1c2goW3B0WzBdLTEsIHB0WzFdLTFdKX1cbiAgICAgICAgICAgICAgICBwbGF5ZXIudGFrZW5UdXJucy5wdXNoKHB0KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGh1bWFuUGxheWVyLnR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlbmRlckdhbWVCb2FyZChodW1hblBsYXllciwgcGxheWVyLCB0cnVlKTtcbiAgICAgICAgfWVsc2Uge2FpVGFrZVR1cm4ocGxheWVyLGh1bWFuUGxheWVyKX19XG4gICAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgcmFuZG9tRmlyc3QgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBsZXQgcmFuZG9tU2Vjb25kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgaWYoIShwbGF5ZXIudGFrZW5UdXJucy5pbmNsdWRlcygocmFuZG9tRmlyc3QqMTApK3JhbmRvbVNlY29uZCkpKXtcbiAgICAgICAgICAgIGxldCBoaXQgPSBodW1hblBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKFtyYW5kb21GaXJzdCwgcmFuZG9tU2Vjb25kXSk7XG4gICAgICAgICAgICBpZiAoaGl0ID09PSAzKXsgXG4gICAgICAgICAgICAgICAgaWYocmFuZG9tRmlyc3QrMTwxMCkgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBvc3NpYmxlVHVybnMucHVzaChbcmFuZG9tRmlyc3QrMSwgcmFuZG9tU2Vjb25kXSk7XG4gICAgICAgICAgICAgICAgaWYocmFuZG9tRmlyc3QrMTwxMCAmJiByYW5kb21TZWNvbmQrMTwxMCkgcGxheWVyLnBvc3NpYmxlVHVybnMucHVzaChbcmFuZG9tRmlyc3QrMSwgcmFuZG9tU2Vjb25kKzFdKTtcbiAgICAgICAgICAgICAgICBpZihyYW5kb21GaXJzdC0xPi0xKSAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucG9zc2libGVUdXJucy5wdXNoKFtyYW5kb21GaXJzdC0xLCByYW5kb21TZWNvbmRdKTtcbiAgICAgICAgICAgICAgICBpZihyYW5kb21GaXJzdC0xPi0xICYmIHJhbmRvbVNlY29uZC0xPi0xKSBwbGF5ZXIucG9zc2libGVUdXJucy5wdXNoKFtyYW5kb21GaXJzdC0xLCByYW5kb21TZWNvbmQtMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyLnRha2VuVHVybnMucHVzaCgocmFuZG9tRmlyc3QqMTApK3JhbmRvbVNlY29uZCk7XG4gICAgICAgICAgICBwbGF5ZXIudHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgaHVtYW5QbGF5ZXIudHVybiA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyYW5kb21GaXJzdCwgcmFuZG9tU2Vjb25kKVxuICAgICAgICAgICAgcmVuZGVyR2FtZUJvYXJkKGh1bWFuUGxheWVyLCBwbGF5ZXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHthaVRha2VUdXJuKHBsYXllcixodW1hblBsYXllcil9XG4gICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG5leHBvcnQgeyBhaVRha2VUdXJuIH07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBzXCI7XG5mdW5jdGlvbiBnYW1lQm9hcmQoKXtyZXR1cm4ge1xuICAgIGJvYXJkTWFwIDogW1swLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXV0sXG4gICAgc2hpcHNJbmZvIDogW10sXG5cbiAgICBwbGFjZVNoaXAoY29vcmRpbmF0ZXMpe1xuICAgICAgICAvL1tbMCwwXSxbMCwxXV0gW1tjb2x1bW4sIHJvd11dXG4gICAgICAgIHRoaXMuc2hpcHNJbmZvLnB1c2goU2hpcChjb29yZGluYXRlcykpO1xuICAgICAgICBmb3IgKGxldCB4IG9mIGNvb3JkaW5hdGVzKXtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRNYXBbeFswXV1beFsxXV0gPSAxO1xuICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYm9hcmRNYXBbY29vcmRbMF1dW2Nvb3JkWzFdXSk7XG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xuICAgICAgICBpZih0aGlzLmJvYXJkTWFwW2Nvb3JkWzBdXVtjb29yZFsxXV0gPT09IDApe1xuICAgICAgICAgICAgdGhpcy5ib2FyZE1hcFtjb29yZFswXV1bY29vcmRbMV1dID0gMjtcbiAgICAgICAgICAgIHJlc3VsdCA9IDJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuYm9hcmRNYXBbY29vcmRbMF1dW2Nvb3JkWzFdXSA9PT0gMSl7XG4gICAgICAgICAgICB0aGlzLnNoaXBzSW5mby5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaChjb3JkID0+IHtcbiAgICAgICAgICAgICAgICBpZihjb3JkWzBdID09PSBjb29yZFswXSAmJiBjb3JkWzFdID09PSBjb29yZFsxXSl7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KGNvb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5pc1N1bmsoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hcFtjb29yZFswXV1bY29vcmRbMV1dID0gMztcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0zXG4gICAgICAgICAgICAgICAgfSAgICBcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9LFxuICAgIGlzU3Vua0FsbCgpe1xuICAgICAgICBsZXQgc3VuayA9IHRydWVcbiAgICAgICAgdGhpcy5zaGlwc0luZm8uZm9yRWFjaChlbGVtZW50PT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudC5zdW5rID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgICBzdW5rID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3Vua1xuICAgIH1cbiAgICB9XG4gICAgfVxuXG5cblxuZXhwb3J0IHsgZ2FtZUJvYXJkIH0iLCJpbXBvcnQgeyBhaVRha2VUdXJuIH0gZnJvbSBcIi4vY29tcHV0ZXJUYWtlVHVybi5qc1wiO1xuXG5mdW5jdGlvbiByZW5kZXJHYW1lQm9hcmQoXG4gIHBsYXllcixcbiAgcGxheWVyMixcbiAgYWlHYW1lLFxuICBjb250YWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIiksXG4gIGNvbnRhaW4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXIyXCIpXG4pIHtcbiAgY29udGFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250YWluMi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHBsYXllci5ib2FyZC5ib2FyZE1hcC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IGFsbHlTcXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWxseVNxci5jbGFzc0xpc3QuYWRkKFwic3FyXCIpO1xuICAgICAgc3dpdGNoIChlbGVtZW50KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBhbGx5U3FyLmNsYXNzTGlzdC5hZGQoXCJub3RIaXRcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBhbGx5U3FyLmNsYXNzTGlzdC5hZGQoXCJzaGlwTm90SGl0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgYWxseVNxci5jbGFzc0xpc3QuYWRkKFwiaGl0Tm9TaGlwXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgYWxseVNxci5jbGFzc0xpc3QuYWRkKFwiaGl0U2hpcFwiKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnRhaW4yLmFwcGVuZENoaWxkKGFsbHlTcXIpO1xuICAgIH0pO1xuICB9KTtcbiAgcGxheWVyMi5ib2FyZC5ib2FyZE1hcC5mb3JFYWNoKChyb3csIHJvd0lkeCkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcbiAgICAgIGxldCBzcXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3FyLmNsYXNzTGlzdC5hZGQoXCJzcXJcIik7XG4gICAgICBzcXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYoYWlHYW1lKXtcbiAgICAgICAgaWYgKHBsYXllci50dXJuKSB7XG4gICAgICAgICAgcGxheWVyMi5ib2FyZC5yZWNlaXZlQXR0YWNrKFtyb3dJZHgsIGlkeF0pO1xuICAgICAgICAgIHJlbmRlckdhbWVCb2FyZChwbGF5ZXIsIHBsYXllcjIsdHJ1ZSk7XG4gICAgICAgICAgcGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICBwbGF5ZXIyLnR1cm4gPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaHVtYW4gcGxheXNcIik7XG4gICAgICAgICAgYWlUYWtlVHVybihwbGF5ZXIyLCBwbGF5ZXIpfX1cblxuICAgICAgICAgIGVsc2UgaWYoYWlHYW1lID09PSBmYWxzZSl7XG4gICAgICAgICAgaWYgKHBsYXllci50dXJuKSB7XG4gICAgICAgICAgcGxheWVyMi5ib2FyZC5yZWNlaXZlQXR0YWNrKFtyb3dJZHgsIGlkeF0pO1xuICAgICAgICAgIHJlbmRlckdhbWVCb2FyZChwbGF5ZXIsIHBsYXllcjIsZmFsc2UpO1xuICAgICAgICAgIHBsYXllci50dXJuID0gZmFsc2U7XG4gICAgICAgICAgcGxheWVyMi50dXJuID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImh1bWFuIHBsYXlzXCIpfVxuICAgICAgICAgIC8vQ0hBTkdFIFNPTUUgVEVYVCBDT05URU5UIFRPIElUJ1MgVEhFIFBMQVlFUjInUyBUVVJOXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc3dpdGNoIChlbGVtZW50KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBzcXIuY2xhc3NMaXN0LmFkZChcIm5vdEhpdFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHNxci5jbGFzc0xpc3QuYWRkKFwibm90SGl0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc3FyLmNsYXNzTGlzdC5hZGQoXCJoaXROb1NoaXBcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzcXIuY2xhc3NMaXN0LmFkZChcImhpdFNoaXBcIik7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb250YWluLmFwcGVuZENoaWxkKHNxcik7XG4gICAgfSk7XG4gIH0pfVxuXG5cbmV4cG9ydCB7IHJlbmRlckdhbWVCb2FyZCB9O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVycy5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyR2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZVJlbmRlci5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyU2hpcHMgfSBmcm9tIFwiLi9yZW5kZXJTaGlwcy5qc1wiO1xuXG5mdW5jdGlvbiBhaUdhbWVTdGFydCgpIHtcbiAgLy9TdGFydHMgdGhlIGdhbWUgd2l0aCBjb21wdXRlclxuICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKCk7XG4gIGxldCBjb3JkID0gW1xuICAgIFsxLCAxXSxcbiAgICBbMSwgMl0sXG4gICAgWzEsIDNdLFxuICBdO1xuICBsZXQgY29yZDIgPSBbXG4gICAgWzIsIDFdLFxuICAgIFsyLCAyXSxcbiAgICBbMiwgM10sXG4gIF07XG4gIGxldCBjb3JkMyA9IFtcbiAgICBbNywgMV0sXG4gICAgWzYsIDFdLFxuICBdO1xuICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcChjb3JkKTtcbiAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoY29yZDIpO1xuICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcChjb3JkMyk7XG4gIGNvbnN0IHBsYXllcjIgPSBQbGF5ZXIoKTtcbiAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoY29yZCk7XG4gIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKGNvcmQzKTtcbiAgcGxheWVyMS50dXJuID0gdHJ1ZTtcbiAgXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZUJ0dFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVTY3JlZW5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICByZW5kZXJHYW1lQm9hcmQocGxheWVyMSwgcGxheWVyMiwgdHJ1ZSk7XG59XG5cbmxldCBjdXJyZW50UGxheWVycyA9IFtdO1xuXG5mdW5jdGlvbiBwbGF5ZXJHYW1lU3RhcnQoKSB7XG4gIC8vU3RhcnQgMi1wbGF5ZXIgZ2FtZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3NcIikuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoKTtcbiAgbGV0IGNvcmQgPSBbXG4gICAgWzEsIDFdLFxuICAgIFsxLCAyXSxcbiAgICBbMSwgM10sXG4gIF07XG4gIGxldCBjb3JkMiA9IFtcbiAgICBbMiwgMV0sXG4gICAgWzIsIDJdLFxuICAgIFsyLCAzXSxcbiAgXTtcbiAgbGV0IGNvcmQzID0gW1xuICAgIFs3LCAxXSxcbiAgICBbNiwgMV0sXG4gIF07XG4gIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKGNvcmQpO1xuICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcChjb3JkMik7XG4gIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKGNvcmQzKTtcbiAgY29uc3QgcGxheWVyMiA9IFBsYXllcigpO1xuICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcChjb3JkKTtcbiAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoY29yZDMpO1xuICBwbGF5ZXIxLnR1cm4gPSB0cnVlO1xuICBjdXJyZW50UGxheWVycy5wdXNoKHBsYXllcjEsIHBsYXllcjIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVTY3JlZW5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICByZW5kZXJHYW1lQm9hcmQocGxheWVyMSwgcGxheWVyMiwgZmFsc2UpO1xuICByZW5kZXJTaGlwcyhwbGF5ZXIxKTtcbn1cblxuZXhwb3J0IHsgYWlHYW1lU3RhcnQsIHBsYXllckdhbWVTdGFydCwgY3VycmVudFBsYXllcnMgfVxuIiwiaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCJcbmZ1bmN0aW9uIFBsYXllcigpIHsgcmV0dXJuIHtcbiAgICAvL0VhY2ggcGxheWVyIHJlY2VpdmVzIDF4NVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgMng0XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAzeDNcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDR4MiBzcXVhcmVkIHNoaXBzXG5cbiAgICBzaGlwc1RvUGxhY2UgOiBbNSw0LDQsMywzLDMsMiwyLDIsMl0sXG4gICAgYm9hcmQgOiBnYW1lQm9hcmQoKSxcbiAgICB0dXJuIDogZmFsc2UsXG4gICAgdGFrZW5UdXJucyA6IFtdLFxuICAgIHBvc3NpYmxlVHVybnMgOiBbXSxcbn19O1xuXG5cblxuZXhwb3J0IHsgUGxheWVyIH0iLCJpbXBvcnQgaW1nIGZyb20gXCIuL3R3by5wbmdcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwc1wiO1xuY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcENvbnRhaW5lclwiKTtcbmNvbnN0IHNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwcyk7XG5cbmxldCBwbGFjZWRTaGlwTGVuZ3RoID0gMDtcbmxldCBwbGFjZWRTaGlwSWR4ID0gLTE7XG5cbmZ1bmN0aW9uIHJlbmRlclNoaXBzKHBsYXllcil7XG4gICAgcGxheWVyLnNoaXBzVG9QbGFjZS5mb3JFYWNoKChlbGUsaWR4KSA9PiB7XG4gICAgICBjb25zdCBzaGlwSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIHNoaXBJbWcuc3JjID0gaW1nO1xuICAgICAgc2hpcEltZy5pZCA9IGBzaGlwJHtpZHh9YDtcbiAgICAgIHNoaXBJbWcuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHdpZHRoIDogY2FsYygke2VsZX0qMzBweCk7IGhlaWdodDozMHB4OyBvYmplY3QtZml0OmZpbGw7IGRyYWdnYWJsZTpcInRydWVcImApO1xuICAgICAgc2hpcEltZy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKT0+e1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiaWRcIiwgZS50YXJnZXQuaWQpO1xuICAgICAgICBwbGFjZWRTaGlwTGVuZ3RoID0gZWxlO1xuICAgICAgfSk7XG4gICAgICBzaGlwcy5hcHBlbmRDaGlsZChzaGlwSW1nKTtcbiAgICB9KTtcbiAgfTtcblxuXG5mdW5jdGlvbiByZW5kZXJQbGFjZW1lbnRDb250YWluZXIocGxheWVyKXtcbiAgY29uc3Qgc2hpcHNDb29yZGluYXRlcyA9IHt9O1xuICAgIGxldCBheGlzID0gMDtcbiAgICAvL2lmIDAgPT4gYXhpcyBpcyB4IDsgaWYgMSA9PiBheGlzIGlzIHlcbiAgICBwbGF5ZXIuYm9hcmQuYm9hcmRNYXAuZm9yRWFjaCgocm93LCByb3dJZHgpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcbiAgICAgICAgbGV0IGFsbHlTcXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhbGx5U3FyLmNsYXNzTGlzdC5hZGQoXCJzcXJcIik7XG4gIFxuICAgICAgICBhbGx5U3FyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKT0+e1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIC8vaWYgaXRzIGxlZ2FsID0+XG4gICAgICAgICAgLy9yZW5kZXIgdGhlIGltYWdlIGluIGZyb250IG9mIHRoZSBzcXVhcmVzXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJpZFwiKTtcbiAgICAgICAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYXRhfWApKTtcbiAgICAgICAgICBzaGlwc0Nvb3JkaW5hdGVzW2Ake2RhdGF9YF0gPSBbKHJvd0lkeCoxMCkraWR4LCBwbGFjZWRTaGlwTGVuZ3RoLCBheGlzXTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwc0Nvb3JkaW5hdGVzW2Ake2RhdGF9YF0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXBzQ29vcmRpbmF0ZXMpO1xuICAgICAgICB9KVxuICBcbiAgICAgICAgYWxseVNxci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpPT57XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgXG4gICAgICAgIHN3aXRjaCAoZWxlbWVudCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGFsbHlTcXIuY2xhc3NMaXN0LmFkZChcIm5vdEhpdFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGFsbHlTcXIuY2xhc3NMaXN0LmFkZChcInNoaXBOb3RIaXRcIik7XG4gICAgICAgICAgICBicmVhazsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNlbWVudENvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChhbGx5U3FyKTtcbiAgICAgIH0pO1xuICB9KVxufVxuXG5cblxuZXhwb3J0IHsgcmVuZGVyU2hpcHMsIHJlbmRlclBsYWNlbWVudENvbnRhaW5lciB9O1xuIFxuXG5cblxuXG4vL3doZW4gZHJvcHBlZCB0YWtlIHRoZSBzaGlwcyBjb29yZGluYXRlIHRvIHBsYWNlIHRoZW0gbGF0ZXIgb25cbi8vbWFrZSBhIGhhc2htYXAgZm9yIGNvb3JkaW5hdGVzXG4vL21ha2UgdGhlIHNoaXBzIHNvIHRoYXQgdGhleSBjYW4gYmUgY2hhbmdlZCB3aXRoaW4gdGhlIHBsYWNlbWVudCBzcXVhcmUgd2l0aCBkcmFnIGFuZCBkcm9wIGFwaVxuLy9kb3VibGUgY2xpY2sgc2hvdWxkIGNoYW5nZSB0aGUgc2hpcHMgZGlyZWN0aW9uXG4vL2Fsc28gYWRkIGEgYnV0dG9uIHRvIGNoYW5nZSB0aGUgcGxhY2VtZW50IG9mIHRoZSBzaGlwXG4iLCJmdW5jdGlvbiBTaGlwIChjb29yZGluYXRlcykge3JldHVybiB7XG4gICAgbGVuZ3RoIDogY29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgIGhwIDogY29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgIGNvb3JkaW5hdGVzIDogY29vcmRpbmF0ZXMsXG4gICAgc3VuayA6IGZhbHNlLFxuICAgIFxuICAgIGhpdChjb29yZGluYXRlKXtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmQsIGlkeCk9PntcbiAgICAgICAgICAgIGlmKGNvb3JkWzBdPT09Y29vcmRpbmF0ZVswXSYmIGNvb3JkWzFdPT09Y29vcmRpbmF0ZVsxXSl7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpZHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICBpZih0aGlzLmhwPjApe1xuICAgICAgICB0aGlzLmhwIC09IDF9XG4gICAgfSxcbiAgICBpc1N1bmsoKXtcbiAgICAgICAgaWYodGhpcy5ocD09PTAmJnRoaXMuY29vcmRpbmF0ZXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxufX1cbmV4cG9ydCB7IFNoaXAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwcy5qc1wiO1xuaW1wb3J0IHtnYW1lQm9hcmR9IGZyb20gXCIuL2dhbWVCb2FyZC5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXNoZWV0LmNzc1wiO1xuaW1wb3J0IHsgYWlHYW1lU3RhcnQsIHBsYXllckdhbWVTdGFydCB9IGZyb20gXCIuL2dhbWVTdGFydC5qc1wiOyBcbmltcG9ydCB7IHJlbmRlckdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVSZW5kZXIuanNcIjtcbmltcG9ydCB7IGN1cnJlbnRQbGF5ZXJzIH0gZnJvbSBcIi4vZ2FtZVN0YXJ0LmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJTaGlwcywgcmVuZGVyUGxhY2VtZW50Q29udGFpbmVyIH0gZnJvbSBcIi4vcmVuZGVyU2hpcHMuanNcIjtcblxuLy9NYWluIE1lbnVcbmNvbnN0IGFpU3RhcnRCdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FpR2FtZVwiKTtcbmNvbnN0IGh1bWFuU3RhcnRCdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWFuR2FtZVwiKTtcbmNvbnN0IGNyZWRpdHNCdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWRpdHNcIik7XG5cbmFpU3RhcnRCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgYWlHYW1lU3RhcnQoKTtcbn0pXG5cbmh1bWFuU3RhcnRCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgcGxheWVyR2FtZVN0YXJ0KCk7XG59KVxuXG5cblxuLy8gUGFzc2luZyB0aGUgc2NyZWVuIGltcGxlbWVudGF0aW9uXG5jb25zdCBwYXNzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzXCIpO1xuY29uc3QgdHVyblN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzU2NyZWVuXCIpO1xuY29uc3QgZ2FtZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuXCIpO1xuY29uc3QgaGlkZUJ0dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZUJ0dFwiKTtcblxuXG5cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50PT57XG4vLyAgICAgaWYoZXZlbnQuY29kZT09PSBcIlNwYWNlXCIpe1xuLy8gICAgIGlmKHBhc3NCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSl7XG4vLyAgICAgZ2FtZVNjcmVlbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbi8vICAgICB0dXJuU3RhcnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIil9XG4vLyB9XG4vLyB9KVxuXG4vL01ha2Ugc3VyZSB0aGUgcGxheWVyIGhhcyBwbGF5ZWQgdGhlaXIgdHVybiBcbi8vS2VlcCB0aGUgdHJhY2sgb2Ygd2hpY2ggc2NyZWVuIGlzIHNob3dpbmcgc28gdGhhdCBpIGNhbiBjaGFuZ2UgaXQgXG5cbnBhc3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgZ2FtZVNjcmVlbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB0dXJuU3RhcnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG59KVxuXG50dXJuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgZ2FtZVNjcmVlbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB0dXJuU3RhcnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgaWYoY3VycmVudFBsYXllcnNbMF0udHVybikge3JlbmRlckdhbWVCb2FyZChjdXJyZW50UGxheWVyc1swXSxjdXJyZW50UGxheWVyc1sxXSxmYWxzZSl9XG4gICAgZWxzZSBpZihjdXJyZW50UGxheWVyc1sxXS50dXJuKSB7IHJlbmRlckdhbWVCb2FyZChjdXJyZW50UGxheWVyc1sxXSwgY3VycmVudFBsYXllcnNbMF0sIGZhbHNlKX1cbiAgICAvL2lmIHRoZSBsYXN0IHR1cm4gcGxheWVkIGlzIHBsYXllcjEgPT4gcmVuZGVyIGZvciBwbGF5ZXIyXG4gICAgLy9lbHNlIGlmIHRoZSBsYXN0IHR1cm4gcGxheWVkIGlzIHBsYXllcjIgPT5yZW5kZXIgZm9yIHBsYXllcjFcbn0pXG5cbmhpZGVCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lcjJcIik7XG4gICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG59KVxuXG5jb25zdCB0ZXN0UGxheWVyID0gUGxheWVyKCk7XG5yZW5kZXJQbGFjZW1lbnRDb250YWluZXIodGVzdFBsYXllcik7XG5yZW5kZXJTaGlwcyh0ZXN0UGxheWVyKTtcbi8vVE9ET1xuLy9pbXBsZW1lbnQgZHJhZyBhbmQgZHJvcCBmb3Igc2hpcHNcbiAgICAvL3RoZXJlIHNob3VsZCBiZSBhIGNvbmZpcm0gYnV0dG9uXG4gICAgLy9pbXBsZW1lbnQgYSBidXR0b24gc28gaSBjYW4gY2hhbmdlIHRoZSBpbmRleFxuLy9pbXBsZW1lbnQgYSB3YXkgc28gdGhhdCBhaSBjYW4gcHV0IHNoaXBzXG4vL0ltcGxlbWVudCB0aGUgd2luIGNvbmRpdGlvblxuLy9JbXBsZW1lbnQgYSB3aW4gc2NyZWVuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=