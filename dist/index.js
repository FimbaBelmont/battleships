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
  font-size: 16px;
  font-weight: 500;
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
  padding-top: 50px;
  padding-bottom: 50px;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
    font-size: 16px;
  background-color: #777777;
  color: aliceblue;
  line-height: 16px;
  padding: 10px;
  padding-top: 5px;

}

.hideBtt {
  position: absolute;
  right: -111px;
  top: 16px;
  padding: 10px;
  font-size: 16px;
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

.winContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: darkorange;
  padding: 100px;
  border-radius: 40px;
  color: white;
  text-shadow: black 3px 1px;
  font-size: 36px;
  font-weight: 900;
}
`, "",{"version":3,"sources":["webpack://./src/stylesheet.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,2BAA2B;EAC3B,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,8BAA8B;EAC9B;;;;GAIC;EACD,yCAAyC;EACzC,kCAAkC;EAClC,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,0BAA0B;EAC1B,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,2BAA2B;EAC3B,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,8BAA8B;EAC9B;;;;GAIC;EACD,yCAAyC;EACzC,kCAAkC;EAClC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;;;GAGG;AACH;;GAEG;;AAEH;EACE,aAAa;EACb,8BAA8B;EAC9B,mCAAmC;EACnC,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB;;;;;GAKC;EACD;;;;;GAKC;EACD;;;;;GAKC;AACH;;AAEA;EACE,mBAAmB;EACnB;;;;;GAKC;EACD;;;;;GAKC;EACD;;;;;GAKC;AACH;;AAEA;EACE,qBAAqB;AACvB;;;AAGA;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,eAAe;EACjB,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,gBAAgB;;AAElB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,aAAa;EACb,eAAe;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2BAA2B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,4BAA4B;EAC5B,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;EAC1B,eAAe;EACf,gBAAgB;AAClB","sourcesContent":["body {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-color: beige;\n  height: 100vh;\n  width: 100vw;\n  font-size: 16px;\n  font-weight: 500;\n}\n\nbutton {\n  color: rgb(254, 254, 254);\n  font-size: 16px;\n  line-height: 30px;\n  padding: 13px;\n  border-radius: 8px;\n  font-family: Georgia, serif;\n  font-weight: 900;\n  text-decoration: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-shadow: 2px 2px 2px black;\n  background-image: linear-gradient(\n    to right,\n    rgb(255, 153, 0) 0%,\n    rgb(193, 116, 0) 100%\n  );\n  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;\n  border: 2px outset rgb(121, 73, 0);\n  display: inline-block;\n  max-height: 50px;\n}\nbutton:hover {\n  background: #ff9900;\n}\nbutton:active {\n  background: #c17400;\n}\n\n.mainMenu {\n  display: grid;\n  margin: 25%;\n  grid-template-columns: 1fr;\n  align-items: center;\n  justify-content: center;\n  gap: 25px;\n}\n.mainMenu button {\n  color: rgb(254, 254, 254);\n  font-size: 25px;\n  line-height: 30px;\n  padding: 13px;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  border-radius: 8px;\n  font-family: Georgia, serif;\n  font-weight: 900;\n  text-decoration: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-shadow: 2px 2px 2px black;\n  background-image: linear-gradient(\n    to right,\n    rgb(255, 153, 0) 0%,\n    rgb(193, 116, 0) 100%\n  );\n  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;\n  border: 2px outset rgb(121, 73, 0);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.mainMenu button:hover {\n  background: #ff9900;\n}\n.mainMenu button:active {\n  background: #c17400;\n}\n/* \n.menuScreen{\n    display: none;\n} */\n/* .gameScreen {\n    display:none\n} */\n\n.gameScreen {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  grid-template-rows: 8fr 1fr 1fr 8fr;\n  justify-items: center;\n  align-items: start;\n}\n\n.container,\n.shipPlacementContainer {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n}\n.container2 {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n}\n.sqr {\n  padding: 10px;\n  border: 3px solid black;\n  position: relative;\n}\n\n.notHit {\n  background-color: #777777;\n}\n\n.shipNotHit {\n  background-color: blue;\n}\n\n.hitNoShip {\n  background: #9d0707;\n  background: -moz-radial-gradient(\n    center,\n    #9d0707 0%,\n    #777777 42%,\n    #777777 100%\n  );\n  background: -webkit-radial-gradient(\n    center,\n    #9d0707 0%,\n    #777777 42%,\n    #777777 100%\n  );\n  background: radial-gradient(\n    ellipse at center,\n    #9d0707 0%,\n    #777777 42%,\n    #777777 100%\n  );\n}\n\n.hitShip {\n  background: #a40000;\n  background: -moz-radial-gradient(\n    center,\n    #a40000 0%,\n    #2168cb 52%,\n    #144e75 100%\n  );\n  background: -webkit-radial-gradient(\n    center,\n    #a40000 0%,\n    #2168cb 52%,\n    #144e75 100%\n  );\n  background: radial-gradient(\n    ellipse at center,\n    #a40000 0%,\n    #2168cb 52%,\n    #144e75 100%\n  );\n}\n\n.show {\n  display: inline-block;\n}\n\n\n.shipContainer {\n    grid-area: 1/2/5/3;\n    align-self: end;\n    text-align: center;\n}\n.shipContainer ul {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n    justify-items: baseline;\n}\n\n.pass {\n    position: absolute;\n    top: -70px;\n    left: 0px;\n    font-size: 16px;\n  background-color: #777777;\n  color: aliceblue;\n  line-height: 16px;\n  padding: 10px;\n  padding-top: 5px;\n\n}\n\n.hideBtt {\n  position: absolute;\n  right: -111px;\n  top: 16px;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.enemy {\n    grid-area: 1/1/2/2;\n}\n\n.player {\n    position: relative;\n    grid-area: 4/1/5/2;\n}\n\n.shipPlaceScreen {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n\n.sqr img {\n  position: absolute;\n  z-index: 1;\n}\n.hide {\n  display: none;\n}\n\n.winContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  background-color: darkorange;\n  padding: 100px;\n  border-radius: 40px;\n  color: white;\n  text-shadow: black 3px 1px;\n  font-size: 36px;\n  font-weight: 900;\n}\n"],"sourceRoot":""}]);
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
            if(element.sunk === false){
                sunk = false;}
        });
        return sunk;
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
          if(player2.board.isSunkAll()) {
            document.querySelector(".winnerName").textContent = "You Win !";
            document.querySelector(".screen").classList.add("hide");
            document.querySelector(".winScreen").classList.remove("hide");
          }
          player2.turn = true;
          console.log("human plays");
          (0,_computerTakeTurn_js__WEBPACK_IMPORTED_MODULE_0__.aiTakeTurn)(player2, player)
          if(player.board.isSunkAll()) {
            document.querySelector(".winnerName").textContent = "Computer Wins !";
            document.querySelector(".screen").classList.add("hide");
            document.querySelector(".winScreen").classList.remove("hide");
          }
        }}

          else if(aiGame === false){
          if (player.turn) {
          player2.board.receiveAttack([rowIdx, idx]);
          renderGameBoard(player, player2,false);
          player.turn = false;
          if(player2.board.isSunkAll()) {
            document.querySelector(".winnerName").textContent = `${player.playerName} Wins !`
            document.querySelector(".screen").classList.add("hide");
            document.querySelector(".winScreen").classList.remove("hide");
          }
          player2.turn = true}
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
  player1.playerName = "Player 1";
  const player2=(0,_players_js__WEBPACK_IMPORTED_MODULE_0__.Player)();
  player2.playerName = "Player 2";
  
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
    if (player1HasSelected === false && Object.keys(_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates).length === 10){
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
      (0,_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.renderShips)(player2);
      (0,_renderShips_js__WEBPACK_IMPORTED_MODULE_2__.renderPlacementContainer)(player2);
    }
    if(player1HasSelected === true){
      let player2ShipInfo = _renderShips_js__WEBPACK_IMPORTED_MODULE_2__.shipsCoordinates;
    if(Object.keys(player2ShipInfo).length === 10)
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
        document.querySelector(".turnTag").textContent = `Player 1's Turn`;
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
    playerName : "",
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
          if(result === false)
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
    if(_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[0].turn) {
        (0,_gameRender_js__WEBPACK_IMPORTED_MODULE_4__.renderGameBoard)(_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[0],_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[1],false);
        document.querySelector(".turnTag").textContent = `${_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[0].playerName}'s Turn`}
        //Hardcode names into player object so i can show them whenever they win;
    else if(_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[1].turn) { 
        (0,_gameRender_js__WEBPACK_IMPORTED_MODULE_4__.renderGameBoard)(_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[1], _gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[0], false);
        document.querySelector(".turnTag").textContent = `${_gameStart_js__WEBPACK_IMPORTED_MODULE_3__.currentPlayers[1].playerName}'s Turn`}
    //if the last turn played is player1 => render for player2
    //else if the last turn played is player2 =>render for player1
})

hideBtt.addEventListener("click", ()=>{
    const playerBoard = document.querySelector(".container2");
        playerBoard.classList.toggle("hide")
})

const returnBtt = document.querySelector(".returnToMain");
returnBtt.addEventListener("click", ()=>{
    document.querySelector(".menuScreen").classList.remove("hide");
    document.querySelector(".winScreen").classList.add("hide");
})
//TODO

//currently ship selection screen and the actual game screen looks way different // implement the ship selection screen look to the actual game screen with ships being rendered as they are in selection screen
// Implementing the ship selection screen look to the actual game will break how the hits are being rendered // find a different way to render it
//implement a button so i can change the index  



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRkFBcUYsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLEtBQUssTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FB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QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXNoZWV0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXNoZWV0LmNzcz9kNzRkIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvY29tcHV0ZXJUYWtlVHVybi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZVJlbmRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lU3RhcnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9yZW5kZXJTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6IHJnYigyNTQsIDI1NCwgMjU0KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZzogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgIHJnYigyNTUsIDE1MywgMCkgMCUsXG4gICAgcmdiKDE5MywgMTE2LCAwKSAxMDAlXG4gICk7XG4gIGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSA1cHggNXB4IDE1cHggNXB4O1xuICBib3JkZXI6IDJweCBvdXRzZXQgcmdiKDEyMSwgNzMsIDApO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmY5OTAwO1xufVxuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNjMTc0MDA7XG59XG5cbi5tYWluTWVudSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbjogMjUlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjVweDtcbn1cbi5tYWluTWVudSBidXR0b24ge1xuICBjb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICByZ2IoMjU1LCAxNTMsIDApIDAlLFxuICAgIHJnYigxOTMsIDExNiwgMCkgMTAwJVxuICApO1xuICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgNXB4IDVweCAxNXB4IDVweDtcbiAgYm9yZGVyOiAycHggb3V0c2V0IHJnYigxMjEsIDczLCAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbk1lbnUgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOTkwMDtcbn1cbi5tYWluTWVudSBidXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2MxNzQwMDtcbn1cbi8qIFxuLm1lbnVTY3JlZW57XG4gICAgZGlzcGxheTogbm9uZTtcbn0gKi9cbi8qIC5nYW1lU2NyZWVuIHtcbiAgICBkaXNwbGF5Om5vbmVcbn0gKi9cblxuLmdhbWVTY3JlZW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogOGZyIDFmciAxZnIgOGZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmNvbnRhaW5lcixcbi5zaGlwUGxhY2VtZW50Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XG59XG4uY29udGFpbmVyMiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xufVxuLnNxciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ub3RIaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xufVxuXG4uc2hpcE5vdEhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5oaXROb1NoaXAge1xuICBiYWNrZ3JvdW5kOiAjOWQwNzA3O1xuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChcbiAgICBjZW50ZXIsXG4gICAgIzlkMDcwNyAwJSxcbiAgICAjNzc3Nzc3IDQyJSxcbiAgICAjNzc3Nzc3IDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoXG4gICAgY2VudGVyLFxuICAgICM5ZDA3MDcgMCUsXG4gICAgIzc3Nzc3NyA0MiUsXG4gICAgIzc3Nzc3NyAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICBlbGxpcHNlIGF0IGNlbnRlcixcbiAgICAjOWQwNzA3IDAlLFxuICAgICM3Nzc3NzcgNDIlLFxuICAgICM3Nzc3NzcgMTAwJVxuICApO1xufVxuXG4uaGl0U2hpcCB7XG4gIGJhY2tncm91bmQ6ICNhNDAwMDA7XG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KFxuICAgIGNlbnRlcixcbiAgICAjYTQwMDAwIDAlLFxuICAgICMyMTY4Y2IgNTIlLFxuICAgICMxNDRlNzUgMTAwJVxuICApO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChcbiAgICBjZW50ZXIsXG4gICAgI2E0MDAwMCAwJSxcbiAgICAjMjE2OGNiIDUyJSxcbiAgICAjMTQ0ZTc1IDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgIGVsbGlwc2UgYXQgY2VudGVyLFxuICAgICNhNDAwMDAgMCUsXG4gICAgIzIxNjhjYiA1MiUsXG4gICAgIzE0NGU3NSAxMDAlXG4gICk7XG59XG5cbi5zaG93IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5cbi5zaGlwQ29udGFpbmVyIHtcbiAgICBncmlkLWFyZWE6IDEvMi81LzM7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaGlwQ29udGFpbmVyIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLnBhc3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC03MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuXG59XG5cbi5oaWRlQnR0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTExMXB4O1xuICB0b3A6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmVuZW15IHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG59XG5cbi5wbGF5ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XG59XG5cbi5zaGlwUGxhY2VTY3JlZW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xufVxuXG4uc3FyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLndpbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yYW5nZTtcbiAgcGFkZGluZzogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IGJsYWNrIDNweCAxcHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5Qjs7OztHQUlDO0VBQ0QseUNBQXlDO0VBQ3pDLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCOzs7O0dBSUM7RUFDRCx5Q0FBeUM7RUFDekMsa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBOzs7R0FHRztBQUNIOztHQUVHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQ0FBbUM7RUFDbkMscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25COzs7OztHQUtDO0VBQ0Q7Ozs7O0dBS0M7RUFDRDs7Ozs7R0FLQztBQUNIOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25COzs7OztHQUtDO0VBQ0Q7Ozs7O0dBS0M7RUFDRDs7Ozs7R0FLQztBQUNIOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IHJnYigyNTQsIDI1NCwgMjU0KTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogMTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgcmdiKDI1NSwgMTUzLCAwKSAwJSxcXG4gICAgcmdiKDE5MywgMTE2LCAwKSAxMDAlXFxuICApO1xcbiAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDVweCA1cHggMTVweCA1cHg7XFxuICBib3JkZXI6IDJweCBvdXRzZXQgcmdiKDEyMSwgNzMsIDApO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWF4LWhlaWdodDogNTBweDtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZjk5MDA7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2MxNzQwMDtcXG59XFxuXFxuLm1haW5NZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW46IDI1JTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG4ubWFpbk1lbnUgYnV0dG9uIHtcXG4gIGNvbG9yOiByZ2IoMjU0LCAyNTQsIDI1NCk7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDEzcHg7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICByZ2IoMjU1LCAxNTMsIDApIDAlLFxcbiAgICByZ2IoMTkzLCAxMTYsIDApIDEwMCVcXG4gICk7XFxuICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgNXB4IDVweCAxNXB4IDVweDtcXG4gIGJvcmRlcjogMnB4IG91dHNldCByZ2IoMTIxLCA3MywgMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbk1lbnUgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZjk5MDA7XFxufVxcbi5tYWluTWVudSBidXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNjMTc0MDA7XFxufVxcbi8qIFxcbi5tZW51U2NyZWVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn0gKi9cXG4vKiAuZ2FtZVNjcmVlbiB7XFxuICAgIGRpc3BsYXk6bm9uZVxcbn0gKi9cXG5cXG4uZ2FtZVNjcmVlbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZnIgMWZyIDFmciA4ZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5jb250YWluZXIsXFxuLnNoaXBQbGFjZW1lbnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuLmNvbnRhaW5lcjIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuLnNxciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ub3RIaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NztcXG59XFxuXFxuLnNoaXBOb3RIaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmhpdE5vU2hpcCB7XFxuICBiYWNrZ3JvdW5kOiAjOWQwNzA3O1xcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNlbnRlcixcXG4gICAgIzlkMDcwNyAwJSxcXG4gICAgIzc3Nzc3NyA0MiUsXFxuICAgICM3Nzc3NzcgMTAwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjZW50ZXIsXFxuICAgICM5ZDA3MDcgMCUsXFxuICAgICM3Nzc3NzcgNDIlLFxcbiAgICAjNzc3Nzc3IDEwMCVcXG4gICk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGVsbGlwc2UgYXQgY2VudGVyLFxcbiAgICAjOWQwNzA3IDAlLFxcbiAgICAjNzc3Nzc3IDQyJSxcXG4gICAgIzc3Nzc3NyAxMDAlXFxuICApO1xcbn1cXG5cXG4uaGl0U2hpcCB7XFxuICBiYWNrZ3JvdW5kOiAjYTQwMDAwO1xcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoXFxuICAgIGNlbnRlcixcXG4gICAgI2E0MDAwMCAwJSxcXG4gICAgIzIxNjhjYiA1MiUsXFxuICAgICMxNDRlNzUgMTAwJVxcbiAgKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjZW50ZXIsXFxuICAgICNhNDAwMDAgMCUsXFxuICAgICMyMTY4Y2IgNTIlLFxcbiAgICAjMTQ0ZTc1IDEwMCVcXG4gICk7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIGVsbGlwc2UgYXQgY2VudGVyLFxcbiAgICAjYTQwMDAwIDAlLFxcbiAgICAjMjE2OGNiIDUyJSxcXG4gICAgIzE0NGU3NSAxMDAlXFxuICApO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcblxcbi5zaGlwQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvNS8zO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNoaXBDb250YWluZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5wYXNzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC03MHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG5cXG59XFxuXFxuLmhpZGVCdHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC0xMTFweDtcXG4gIHRvcDogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5lbmVteSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuLnBsYXllciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xcbn1cXG5cXG4uc2hpcFBsYWNlU2NyZWVuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4uc3FyIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud2luQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmFuZ2U7XFxuICBwYWRkaW5nOiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogYmxhY2sgM3B4IDFweDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlc2hlZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzaGVldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlbmRlckdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVSZW5kZXJcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwc1wiO1xuXG5mdW5jdGlvbiBhaVRha2VUdXJuKHBsYXllciwgaHVtYW5QbGF5ZXIpe1xuICAgIHdoaWxlKHBsYXllci50dXJuID09PSB0cnVlICYmIHBsYXllci50YWtlblR1cm5zLmxlbmd0aCA8IDEwMSkge1xuICAgICAgICBpZighKChwbGF5ZXIucG9zc2libGVUdXJucy5sZW5ndGgpID09PSAwKSl7XG4gICAgICAgICAgICBsZXQgcHQ9IHBsYXllci5wb3NzaWJsZVR1cm5zLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZighKHBsYXllci50YWtlblR1cm5zLmluY2x1ZGVzKCgocHRbMF0qMTApK3B0WzFdKSkpKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygocHRbMF0qMTApK3B0WzFdKTtcbiAgICAgICAgICAgICAgICBsZXQgc0hpdCA9IGh1bWFuUGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2socHQpO1xuICAgICAgICAgICAgICAgIHBsYXllci50YWtlblR1cm5zLnB1c2goKHB0WzBdKjEwKStwdFsxXSk7XG4gICAgICAgICAgICAgICAgaWYoc0hpdCA9PT0zICl7IFxuICAgICAgICAgICAgICAgICAgICBpZihwdFswXSsxPDEwKSAgICAgICAgICAgIHBsYXllci5wb3NzaWJsZVR1cm5zLnB1c2goW3B0WzBdKzEsIHB0WzFdXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHB0WzBdKzE8MTAmJnB0WzFdKzE8MTApcGxheWVyLnBvc3NpYmxlVHVybnMucHVzaChbcHRbMF0rMSwgcHRbMV0rMV0pO1xuICAgICAgICAgICAgICAgICAgICBpZihwdFswXS0xPi0xKSAgICAgICAgICAgIHBsYXllci5wb3NzaWJsZVR1cm5zLnB1c2goW3B0WzBdLTEsIHB0WzFdXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHB0WzBdLTE+LTEmJnB0WzFdLTE+LTEpcGxheWVyLnBvc3NpYmxlVHVybnMucHVzaChbcHRbMF0tMSwgcHRbMV0tMV0pfVxuICAgICAgICAgICAgICAgIHBsYXllci50YWtlblR1cm5zLnB1c2gocHQpO1xuICAgICAgICAgICAgICAgIHBsYXllci50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaHVtYW5QbGF5ZXIudHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVuZGVyR2FtZUJvYXJkKGh1bWFuUGxheWVyLCBwbGF5ZXIsIHRydWUpO1xuICAgICAgICB9ZWxzZSB7YWlUYWtlVHVybihwbGF5ZXIsaHVtYW5QbGF5ZXIpfX1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgIGxldCByYW5kb21GaXJzdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGxldCByYW5kb21TZWNvbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBpZighKHBsYXllci50YWtlblR1cm5zLmluY2x1ZGVzKChyYW5kb21GaXJzdCoxMCkrcmFuZG9tU2Vjb25kKSkpe1xuICAgICAgICAgICAgbGV0IGhpdCA9IGh1bWFuUGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soW3JhbmRvbUZpcnN0LCByYW5kb21TZWNvbmRdKTtcbiAgICAgICAgICAgIGlmIChoaXQgPT09IDMpeyBcbiAgICAgICAgICAgICAgICBpZihyYW5kb21GaXJzdCsxPDEwKSAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucG9zc2libGVUdXJucy5wdXNoKFtyYW5kb21GaXJzdCsxLCByYW5kb21TZWNvbmRdKTtcbiAgICAgICAgICAgICAgICBpZihyYW5kb21GaXJzdCsxPDEwICYmIHJhbmRvbVNlY29uZCsxPDEwKSBwbGF5ZXIucG9zc2libGVUdXJucy5wdXNoKFtyYW5kb21GaXJzdCsxLCByYW5kb21TZWNvbmQrMV0pO1xuICAgICAgICAgICAgICAgIGlmKHJhbmRvbUZpcnN0LTE+LTEpICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wb3NzaWJsZVR1cm5zLnB1c2goW3JhbmRvbUZpcnN0LTEsIHJhbmRvbVNlY29uZF0pO1xuICAgICAgICAgICAgICAgIGlmKHJhbmRvbUZpcnN0LTE+LTEgJiYgcmFuZG9tU2Vjb25kLTE+LTEpIHBsYXllci5wb3NzaWJsZVR1cm5zLnB1c2goW3JhbmRvbUZpcnN0LTEsIHJhbmRvbVNlY29uZC0xXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwbGF5ZXIudGFrZW5UdXJucy5wdXNoKChyYW5kb21GaXJzdCoxMCkrcmFuZG9tU2Vjb25kKTtcbiAgICAgICAgICAgIHBsYXllci50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICBodW1hblBsYXllci50dXJuID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJhbmRvbUZpcnN0LCByYW5kb21TZWNvbmQpXG4gICAgICAgICAgICByZW5kZXJHYW1lQm9hcmQoaHVtYW5QbGF5ZXIsIHBsYXllciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7YWlUYWtlVHVybihwbGF5ZXIsaHVtYW5QbGF5ZXIpfVxuICAgIH1cbn0gICAgICAgIFxufVxuXG5mdW5jdGlvbiBhaVBsYWNlU2hpcHMgKHBsYXllcikge1xuICAgIGxldCBzaGlwQ291bnRlciA9IDA7XG4gICAgbGV0IGFpUGxhY2VkU2hpcENvb3Jkcz0gIFtdO1xuICAgIGxldCBhaVNoaXBJbmZvPSB7fTtcbiAgICB3aGlsZSghKHBsYXllci5zaGlwc1RvUGxhY2UubGVuZ3RoID09PSAwKSl7XG4gICAgICAgIGxldCBzaGlwID0gcGxheWVyLnNoaXBzVG9QbGFjZS5zaGlmdCgpO1xuICAgICAgICBsZXQgcmFuZG9tRmlyc3QgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBsZXQgcmFuZG9tU2Vjb25kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgbGV0IHJhbmRvbVRoaXJkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpO1xuICAgICAgICBmdW5jdGlvbiBjYW5CZVBsYWNlZChheGlzKXtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgaWYoYXhpcyA9PT0gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8c2hpcDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoKGFpUGxhY2VkU2hpcENvb3Jkcy5pbmNsdWRlcygocmFuZG9tRmlyc3QqMTApK3JhbmRvbVNlY29uZCsoaSoxMCkpKXx8KCgocmFuZG9tRmlyc3QqMTApK3JhbmRvbVNlY29uZCsoaSoxMCkpPj0xMDApKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8c2hpcDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoKGFpUGxhY2VkU2hpcENvb3Jkcy5pbmNsdWRlcygocmFuZG9tRmlyc3QqMTApK3JhbmRvbVNlY29uZCsoaSkpKXx8KCgocmFuZG9tU2Vjb25kKyhpKSk+PTEwKSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgICAgICBpZihjYW5CZVBsYWNlZChyYW5kb21UaGlyZCkpe1xuICAgICAgICAgICAgYWlTaGlwSW5mb1tgc2hpcCR7c2hpcENvdW50ZXJ9YF0gPSBbW3JhbmRvbUZpcnN0LHJhbmRvbVNlY29uZF0sIHNoaXAsIHJhbmRvbVRoaXJkXVxuICAgICAgICAgICAgc2hpcENvdW50ZXIrK1xuICAgICAgICAgICAgaWYocmFuZG9tVGhpcmQgPT09IDEpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IHNoaXA7IGkrKyl7XG4gICAgICAgICAgICAgICAgYWlQbGFjZWRTaGlwQ29vcmRzLnB1c2goKHJhbmRvbUZpcnN0KjEwKStyYW5kb21TZWNvbmQrKGkqMTApKX1cbiAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPCBzaGlwOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBhaVBsYWNlZFNoaXBDb29yZHMucHVzaCgocmFuZG9tRmlyc3QqMTApK3JhbmRvbVNlY29uZCsoaSkpXG4gICAgICAgICAgICB9XG4gICAgIH1cbiAgICB9XG4gICAgZWxzZSB7cGxheWVyLnNoaXBzVG9QbGFjZS5wdXNoKHNoaXApfTtcblxufVxuY29uc29sZS5sb2coYWlTaGlwSW5mbyk7XG5yZXR1cm4gYWlTaGlwSW5mb1xufVxuZXhwb3J0IHsgYWlUYWtlVHVybiwgYWlQbGFjZVNoaXBzIH07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBzXCI7XG5mdW5jdGlvbiBnYW1lQm9hcmQoKXtyZXR1cm4ge1xuICAgIGJvYXJkTWFwIDogW1swLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXV0sXG4gICAgc2hpcHNJbmZvIDogW10sXG5cbiAgICBwbGFjZVNoaXAoY29vcmRpbmF0ZXMpe1xuICAgICAgICAvL1tbMCwwXSxbMCwxXV0gW1tjb2x1bW4sIHJvd11dXG4gICAgICAgIHRoaXMuc2hpcHNJbmZvLnB1c2goU2hpcChjb29yZGluYXRlcykpO1xuICAgICAgICBmb3IgKGxldCB4IG9mIGNvb3JkaW5hdGVzKXtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRNYXBbeFswXV1beFsxXV0gPSAxO1xuICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYm9hcmRNYXBbY29vcmRbMF1dW2Nvb3JkWzFdXSk7XG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xuICAgICAgICBpZih0aGlzLmJvYXJkTWFwW2Nvb3JkWzBdXVtjb29yZFsxXV0gPT09IDApe1xuICAgICAgICAgICAgdGhpcy5ib2FyZE1hcFtjb29yZFswXV1bY29vcmRbMV1dID0gMjtcbiAgICAgICAgICAgIHJlc3VsdCA9IDJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuYm9hcmRNYXBbY29vcmRbMF1dW2Nvb3JkWzFdXSA9PT0gMSl7XG4gICAgICAgICAgICB0aGlzLnNoaXBzSW5mby5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaChjb3JkID0+IHtcbiAgICAgICAgICAgICAgICBpZihjb3JkWzBdID09PSBjb29yZFswXSAmJiBjb3JkWzFdID09PSBjb29yZFsxXSl7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KGNvb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5pc1N1bmsoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZE1hcFtjb29yZFswXV1bY29vcmRbMV1dID0gMztcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0zXG4gICAgICAgICAgICAgICAgfSAgICBcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9LFxuICAgIGlzU3Vua0FsbCgpe1xuICAgICAgICBsZXQgc3VuayA9IHRydWVcbiAgICAgICAgdGhpcy5zaGlwc0luZm8uZm9yRWFjaChlbGVtZW50PT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudC5zdW5rID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgc3VuayA9IGZhbHNlO31cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbiAgICB9XG4gICAgfVxuXG5cblxuZXhwb3J0IHsgZ2FtZUJvYXJkIH0iLCJpbXBvcnQgeyBhaVRha2VUdXJuIH0gZnJvbSBcIi4vY29tcHV0ZXJUYWtlVHVybi5qc1wiO1xuXG5mdW5jdGlvbiByZW5kZXJHYW1lQm9hcmQoXG4gIHBsYXllcixcbiAgcGxheWVyMixcbiAgYWlHYW1lLFxuICBjb250YWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIiksXG4gIGNvbnRhaW4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXIyXCIpXG4pIHtcbiAgY29udGFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250YWluMi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHBsYXllci5ib2FyZC5ib2FyZE1hcC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IGFsbHlTcXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWxseVNxci5jbGFzc0xpc3QuYWRkKFwic3FyXCIpO1xuICAgICAgc3dpdGNoIChlbGVtZW50KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBhbGx5U3FyLmNsYXNzTGlzdC5hZGQoXCJub3RIaXRcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBhbGx5U3FyLmNsYXNzTGlzdC5hZGQoXCJzaGlwTm90SGl0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgYWxseVNxci5jbGFzc0xpc3QuYWRkKFwiaGl0Tm9TaGlwXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgYWxseVNxci5jbGFzc0xpc3QuYWRkKFwiaGl0U2hpcFwiKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnRhaW4yLmFwcGVuZENoaWxkKGFsbHlTcXIpO1xuICAgIH0pO1xuICB9KTtcbiAgcGxheWVyMi5ib2FyZC5ib2FyZE1hcC5mb3JFYWNoKChyb3csIHJvd0lkeCkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChlbGVtZW50LCBpZHgpID0+IHtcbiAgICAgIGxldCBzcXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3FyLmNsYXNzTGlzdC5hZGQoXCJzcXJcIik7XG4gICAgICBzcXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYoYWlHYW1lKXtcbiAgICAgICAgaWYgKHBsYXllci50dXJuKSB7XG4gICAgICAgICAgcGxheWVyMi5ib2FyZC5yZWNlaXZlQXR0YWNrKFtyb3dJZHgsIGlkeF0pO1xuICAgICAgICAgIHJlbmRlckdhbWVCb2FyZChwbGF5ZXIsIHBsYXllcjIsdHJ1ZSk7XG4gICAgICAgICAgcGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICBpZihwbGF5ZXIyLmJvYXJkLmlzU3Vua0FsbCgpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lck5hbWVcIikudGV4dENvbnRlbnQgPSBcIllvdSBXaW4gIVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JlZW5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpblNjcmVlblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyMi50dXJuID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImh1bWFuIHBsYXlzXCIpO1xuICAgICAgICAgIGFpVGFrZVR1cm4ocGxheWVyMiwgcGxheWVyKVxuICAgICAgICAgIGlmKHBsYXllci5ib2FyZC5pc1N1bmtBbGwoKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXJOYW1lXCIpLnRleHRDb250ZW50ID0gXCJDb21wdXRlciBXaW5zICFcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5TY3JlZW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuXG4gICAgICAgICAgZWxzZSBpZihhaUdhbWUgPT09IGZhbHNlKXtcbiAgICAgICAgICBpZiAocGxheWVyLnR1cm4pIHtcbiAgICAgICAgICBwbGF5ZXIyLmJvYXJkLnJlY2VpdmVBdHRhY2soW3Jvd0lkeCwgaWR4XSk7XG4gICAgICAgICAgcmVuZGVyR2FtZUJvYXJkKHBsYXllciwgcGxheWVyMixmYWxzZSk7XG4gICAgICAgICAgcGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICBpZihwbGF5ZXIyLmJvYXJkLmlzU3Vua0FsbCgpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lck5hbWVcIikudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIucGxheWVyTmFtZX0gV2lucyAhYFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY3JlZW5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpblNjcmVlblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyMi50dXJuID0gdHJ1ZX1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzd2l0Y2ggKGVsZW1lbnQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHNxci5jbGFzc0xpc3QuYWRkKFwibm90SGl0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgc3FyLmNsYXNzTGlzdC5hZGQoXCJub3RIaXRcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzcXIuY2xhc3NMaXN0LmFkZChcImhpdE5vU2hpcFwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNxci5jbGFzc0xpc3QuYWRkKFwiaGl0U2hpcFwiKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnRhaW4uYXBwZW5kQ2hpbGQoc3FyKTtcbiAgICB9KTtcbiAgfSl9XG5cblxuZXhwb3J0IHsgcmVuZGVyR2FtZUJvYXJkIH07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJHYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lUmVuZGVyLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJTaGlwcywgcmVuZGVyUGxhY2VtZW50Q29udGFpbmVyLCBzaGlwc0Nvb3JkaW5hdGVzIH0gZnJvbSBcIi4vcmVuZGVyU2hpcHMuanNcIjtcbmltcG9ydCB7IGFpUGxhY2VTaGlwcyB9IGZyb20gXCIuL2NvbXB1dGVyVGFrZVR1cm4uanNcIjtcblxuXG5sZXQgYWlHYW1lID0gMDtcblxuZnVuY3Rpb24gYWlHYW1lU3RhcnQoKSB7XG4gIC8vU3RhcnRzIHRoZSBnYW1lIHdpdGggY29tcHV0ZXJcbiAgY29uc3QgcGxheWVyMSA9IFBsYXllcigpXG4gIGNvbnN0IHBsYXllcjIgPSBQbGF5ZXIoKSAvL0NPTVBVVEVSXG4gIGFpR2FtZSA9IDE7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVNjcmVlblwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2VTY3JlZW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gIHJlbmRlclNoaXBzKHBsYXllcjEpO1xuICByZW5kZXJQbGFjZW1lbnRDb250YWluZXIocGxheWVyMSk7XG4gIFxuXG4gIFxuICBcbiAgY29uc3QgY29uZmlybVNlbGVjdEJ0dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1TZWxlY3RcIik7XG4gIGNvbmZpcm1TZWxlY3RCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gIC8vaWYgYWlnYW1lIHN0YXJ0cyB0aGUgZ2FtZVxuICAvL2lmIDItcGxheWVyIGdhbWUgcGFzcyB0byB0aGUgYmxhbmsgc2NyZWVuIHNvIHRoYXQgcGxheWVyMSBjYW4gc3RhcnRcblxuICBpZihhaUdhbWUgPT09IDFcbiAgICAmJk9iamVjdC5rZXlzKHNoaXBzQ29vcmRpbmF0ZXMpLmxlbmd0aCA9PT0gMTBcbiAgICApe1xuICBmb3IgKGxldCBlbGUgaW4gc2hpcHNDb29yZGluYXRlcyl7XG4gICAgbGV0IHNoaXBDb29yZCA9IFtdOyBcbiAgICBjb25zb2xlLmxvZyhlbGUpXG4gICAgY29uc29sZS5sb2coc2hpcHNDb29yZGluYXRlc1tlbGVdKTtcbiAgICBpZihzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMl09PT1cInhBeGlzXCIpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaTxzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMV07IGkrKyl7XG4gICAgICAgIHNoaXBDb29yZC5wdXNoKFtzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMF1bMF0sc2hpcHNDb29yZGluYXRlc1tlbGVdWzBdWzFdK2ldKVxuICAgICAgfX1cbiAgICBlbHNlIGlmKHNoaXBzQ29vcmRpbmF0ZXNbZWxlXVsyXT09PVwieUF4aXNcIil7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8c2hpcHNDb29yZGluYXRlc1tlbGVdWzFdOyBpKyspe1xuICAgICAgICAgIHNoaXBDb29yZC5wdXNoKFtzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMF1bMF0raSxzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMF1bMV1dKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcChzaGlwQ29vcmQpO1xuICB9XG5sZXQgYWlTaGlwQ29vcmRzID0gYWlQbGFjZVNoaXBzKHBsYXllcjIpO1xuZm9yIChsZXQgZWxlIGluIGFpU2hpcENvb3Jkcyl7ICBcbiAgbGV0IHNoaXBzID0gW107XG4gIGlmKGFpU2hpcENvb3Jkc1tlbGVdWzJdPT09MSl7XG4gICAgZm9yKGxldCBhID0gMDsgYSA8YWlTaGlwQ29vcmRzW2VsZV1bMV07IGErKyl7XG4gICAgICBzaGlwcy5wdXNoKFthaVNoaXBDb29yZHNbZWxlXVswXVswXSthLCBhaVNoaXBDb29yZHNbZWxlXVswXVsxXV0pXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPGFpU2hpcENvb3Jkc1tlbGVdWzFdOyBpKyspe1xuICAgICAgc2hpcHMucHVzaChbYWlTaGlwQ29vcmRzW2VsZV1bMF1bMF0sIGFpU2hpcENvb3Jkc1tlbGVdWzBdWzFdK2ldKSAgXG4gICAgfVxuICB9XG4gICAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoc2hpcHMpO1xufVxuICBwbGF5ZXIxLnR1cm4gPSB0cnVlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcmVlblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRlQnR0XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3NcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNlU2NyZWVuXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICByZW5kZXJHYW1lQm9hcmQocGxheWVyMSwgcGxheWVyMiwgdHJ1ZSk7XG59XG5cbn1cblxuKVxufVxuXG5sZXQgY3VycmVudFBsYXllcnMgPSBbXTtcblxuZnVuY3Rpb24gcGxheWVyR2FtZVN0YXJ0KCkge1xuICAvL1N0YXJ0IDItcGxheWVyIGdhbWVcbiAgY29uc3QgcGxheWVyMT0gUGxheWVyKCk7XG4gIHBsYXllcjEucGxheWVyTmFtZSA9IFwiUGxheWVyIDFcIjtcbiAgY29uc3QgcGxheWVyMj1QbGF5ZXIoKTtcbiAgcGxheWVyMi5wbGF5ZXJOYW1lID0gXCJQbGF5ZXIgMlwiO1xuICBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51U2NyZWVuXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBQbGFjZVNjcmVlblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgcmVuZGVyU2hpcHMocGxheWVyMSk7XG4gIHJlbmRlclBsYWNlbWVudENvbnRhaW5lcihwbGF5ZXIxKTtcblxuXG4gIFxuICBcbiAgdmFyIHBsYXllcjFIYXNTZWxlY3RlZCA9IGZhbHNlO1xuICBcbiAgY29uc3QgY29uZmlybVNlbGVjdEJ0dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1TZWxlY3RcIik7XG4gIGNvbmZpcm1TZWxlY3RCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgLy9TdG9yZSBwbGF5ZXIxIHNoaXAgaW5mbyAvL2lmIHRoaXMgaGFzIDEwIGxlbmd0aCA9PlxuICAgIC8vcmVuZGVyIHBsYXllcjIgc2hpcHNcbiAgICAvL3JlbmRlciBwbGF5ZXIyIHNoaXAgcGxhY2VtZW50IHNjcmVlblxuICAgIGlmIChwbGF5ZXIxSGFzU2VsZWN0ZWQgPT09IGZhbHNlICYmIE9iamVjdC5rZXlzKHNoaXBzQ29vcmRpbmF0ZXMpLmxlbmd0aCA9PT0gMTApe1xuICAgICAgbGV0IHBsYXllcjFTaGlwSW5mbyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2hpcHNDb29yZGluYXRlcykpO1xuICAgICAgZm9yIChsZXQgZWxlIGluIHBsYXllcjFTaGlwSW5mbyl7XG4gICAgICAgIGxldCBzaGlwMUNvb3JkID0gW107IFxuICAgICAgICBpZihwbGF5ZXIxU2hpcEluZm9bZWxlXVsyXT09PVwieEF4aXNcIil7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaTxwbGF5ZXIxU2hpcEluZm9bZWxlXVsxXTsgaSsrKXtcbiAgICAgICAgICAgIHNoaXAxQ29vcmQucHVzaChbcGxheWVyMVNoaXBJbmZvW2VsZV1bMF1bMF0scGxheWVyMVNoaXBJbmZvW2VsZV1bMF1bMV0raV0pXG4gICAgICAgICAgfX1cbiAgICAgICAgZWxzZSBpZihwbGF5ZXIxU2hpcEluZm9bZWxlXVsyXT09PVwieUF4aXNcIil7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHBsYXllcjFTaGlwSW5mb1tlbGVdWzFdOyBpKyspe1xuICAgICAgICAgICAgICBzaGlwMUNvb3JkLnB1c2goW3BsYXllcjFTaGlwSW5mb1tlbGVdWzBdWzBdK2kscGxheWVyMVNoaXBJbmZvW2VsZV1bMF1bMV1dKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcChzaGlwMUNvb3JkKTtcbiAgICAgIH1cbiAgICAgIHBsYXllcjFIYXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICByZW5kZXJTaGlwcyhwbGF5ZXIyKTtcbiAgICAgIHJlbmRlclBsYWNlbWVudENvbnRhaW5lcihwbGF5ZXIyKTtcbiAgICB9XG4gICAgaWYocGxheWVyMUhhc1NlbGVjdGVkID09PSB0cnVlKXtcbiAgICAgIGxldCBwbGF5ZXIyU2hpcEluZm8gPSBzaGlwc0Nvb3JkaW5hdGVzO1xuICAgIGlmKE9iamVjdC5rZXlzKHBsYXllcjJTaGlwSW5mbykubGVuZ3RoID09PSAxMClcbiAgICB7XG5cbiAgICAgIGZvciAobGV0IGVsZSBpbiBwbGF5ZXIyU2hpcEluZm8pe1xuICAgICAgICBsZXQgc2hpcDJDb29yZCA9IFtdOyBcbiAgICAgICAgaWYocGxheWVyMlNoaXBJbmZvW2VsZV1bMl09PT1cInhBeGlzXCIpe1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8cGxheWVyMlNoaXBJbmZvW2VsZV1bMV07IGkrKyl7XG4gICAgICAgICAgICBzaGlwMkNvb3JkLnB1c2goW3BsYXllcjJTaGlwSW5mb1tlbGVdWzBdWzBdLHBsYXllcjJTaGlwSW5mb1tlbGVdWzBdWzFdK2ldKVxuICAgICAgICAgIH19XG4gICAgICAgICAgZWxzZSBpZihwbGF5ZXIyU2hpcEluZm9bZWxlXVsyXT09PVwieUF4aXNcIil7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPHBsYXllcjJTaGlwSW5mb1tlbGVdWzFdOyBpKyspe1xuICAgICAgICAgICAgICBzaGlwMkNvb3JkLnB1c2goW3BsYXllcjJTaGlwSW5mb1tlbGVdWzBdWzBdK2kscGxheWVyMlNoaXBJbmZvW2VsZV1bMF1bMV1dKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcChzaGlwMkNvb3JkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc1wiKS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51U2NyZWVuXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lcjJcIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBQbGFjZVNjcmVlblwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgcmVuZGVyR2FtZUJvYXJkKHBsYXllcjEsIHBsYXllcjIsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dXJuVGFnXCIpLnRleHRDb250ZW50ID0gYFBsYXllciAxJ3MgVHVybmA7XG4gICAgICAgIHBsYXllcjEudHVybiA9IHRydWU7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXJzLnB1c2gocGxheWVyMSwgcGxheWVyMik7XG4gICAgICB9XG4gIH1cbiAgfSl9XG5cblxuXG5leHBvcnQgeyBhaUdhbWVTdGFydCwgcGxheWVyR2FtZVN0YXJ0LCBjdXJyZW50UGxheWVycyB9XG4iLCJpbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIlxuZnVuY3Rpb24gUGxheWVyKCkgeyByZXR1cm4ge1xuICAgIC8vRWFjaCBwbGF5ZXIgcmVjZWl2ZXMgMXg1XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAyeDRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDN4M1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgNHgyIHNxdWFyZWQgc2hpcHNcblxuICAgIHNoaXBzVG9QbGFjZSA6IFs1LDQsNCwzLDMsMywyLDIsMiwyXSxcbiAgICBib2FyZCA6IGdhbWVCb2FyZCgpLFxuICAgIHR1cm4gOiBmYWxzZSxcbiAgICB0YWtlblR1cm5zIDogW10sXG4gICAgcGxheWVyTmFtZSA6IFwiXCIsXG4gICAgcG9zc2libGVUdXJucyA6IFtdLFxufX07XG5cblxuXG5leHBvcnQgeyBQbGF5ZXIgfSIsImltcG9ydCBpbWcgZnJvbSBcIi4vdHdvLnBuZ1wiO1xuY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcENvbnRhaW5lclwiKTtcbmNvbnN0IHNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwcyk7XG5cbi8vIGNvbnN0IGF4aXNDaGFuZ2VCdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF4aXNDaGFuZ2VcIik7XG4vLyBjb25zdCBjdXJyZW50QXhpcyA9IDA7XG4vLyAvL2lmIDAgPT4gYXhpcyBpcyB4IDsgaWYgMSA9PiBheGlzIGlzIHlcbi8vIGF4aXNDaGFuZ2VCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4vLyBpZihjdXJyZW50QXhpcyA9PT0gMCApIGN1cnJlbnRBeGlzID0gMTtcbi8vIGVsc2UgaWYgKGN1cnJlbnRBeGlzID09PSAxICkgY3VycmVudEF4aXMgPSAwO1xuLy8gfSlcblxubGV0IHBsYWNlZFNoaXBMZW5ndGggPSAwO1xuXG5sZXQgcGxhY2VkQ29vcmRzID0gW107XG5cbmZ1bmN0aW9uIHJlbmRlclNoaXBzKHBsYXllcikge1xuICBzaGlwcy5pbm5lckhUTUwgPSBcIlwiO1xuICBwbGF5ZXIuc2hpcHNUb1BsYWNlLmZvckVhY2goKGVsZSwgaWR4KSA9PiB7XG4gICAgY29uc3Qgc2hpcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc2hpcEltZy5zcmMgPSBpbWc7XG4gICAgc2hpcEltZy5pZCA9IGBzaGlwJHtpZHh9YDtcbiAgICBzaGlwSW1nLnNldEF0dHJpYnV0ZShcbiAgICAgIFwic3R5bGVcIixcbiAgICAgIGB3aWR0aCA6IGNhbGMoJHtlbGV9KjMwcHgpOyBcbiAgICAgIGhlaWdodDozMHB4O1xuICAgICAgb2JqZWN0LWZpdDpmaWxsO1xuICAgICAgZHJhZ2dhYmxlOlwidHJ1ZVwiOyBcbiAgICAgIHRvcDogLTNweDtcbiAgICAgIGxlZnQ6IC0zcHhgXG4gICAgKTtcbiAgICBzaGlwSW1nLmNsYXNzTGlzdC5hZGQoXCJ4QXhpc1wiKTtcbiAgICBzaGlwSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJpZFwiLCBlLnRhcmdldC5pZCk7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiY2xhc3NcIiwgZS50YXJnZXQuY2xhc3NMaXN0KTtcbiAgICAgIHBsYWNlZFNoaXBMZW5ndGggPSBlbGU7XG4gICAgfSk7XG4gICAgc2hpcHMuYXBwZW5kQ2hpbGQoc2hpcEltZyk7XG4gIH0pXG4gIH07XG5cblxubGV0IHNoaXBzQ29vcmRpbmF0ZXMgPSB7fTtcbmZ1bmN0aW9uIHJlbmRlclBsYWNlbWVudENvbnRhaW5lcihwbGF5ZXIpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2VtZW50Q29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIHNoaXBzQ29vcmRpbmF0ZXMgPSB7fTtcbiAgcGxheWVyLmJvYXJkLmJvYXJkTWFwLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGVsZW1lbnQsIGlkeCkgPT4ge1xuICAgICAgbGV0IGFsbHlTcXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWxseVNxci5jbGFzc0xpc3QuYWRkKFwic3FyXCIpO1xuXG4gICAgICBhbGx5U3FyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBjaGVja0xlZ2FsKGUpIHtcbiAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlkXCIpO1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dlZFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYXRhfWApO1xuICAgICAgICAgICAgIGlmIChkcmFnZ2VkU2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ4QXhpc1wiKSl7XG4gICAgICAgICAgICAgICBpZiAoKHBsYWNlZFNoaXBMZW5ndGggKyBpZHgpID4gMTApIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IHBsYWNlZFNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgIGlmKCBwbGFjZWRDb29yZHMuaW5jbHVkZXMocm93SWR4KjEwICsgaWR4K2kpKXtcbiAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlfX19XG4gICAgICAgICAgICAgZWxzZSBpZiAoZHJhZ2dlZFNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwieUF4aXNcIikpe1xuICAgICAgICAgICAgICAgaWYgKCAocGxhY2VkU2hpcExlbmd0aCArIHJvd0lkeCkgPiAxMCkgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgcGxhY2VkU2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgaWYoIHBsYWNlZENvb3Jkcy5pbmNsdWRlcygocm93SWR4K2kpKjEwICsgaWR4KSl7XG4gIFxuICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2V9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm4gcmVzdWx0fVxuICAgICAgICBcbiAgICAgICAgICBpZiAoY2hlY2tMZWdhbChlKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlkXCIpO1xuICAgICAgICBjb25zdCBheGlzID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImNsYXNzXCIpO1xuICAgICAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYXRhfWApKTtcbiAgICAgICAgc2hpcHNDb29yZGluYXRlc1tgJHtkYXRhfWBdID0gW1xuICAgICAgICAgIFtyb3dJZHgsaWR4XSxcbiAgICAgICAgICBwbGFjZWRTaGlwTGVuZ3RoLFxuICAgICAgICAgIGF4aXMsXG4gICAgICAgIF07XG4gIFxuICAgICAgICBwbGFjZWRDb29yZHMgPSBjb29yZENhbGMoc2hpcHNDb29yZGluYXRlcyk7XG4gICAgICAgIGZ1bmN0aW9uIGNvb3JkQ2FsYyhzaGlwc0Nvb3JkaW5hdGVzKXtcbiAgICAgICAgICBsZXQgcmVzdWx0ID1bXTtcbiAgICAgICAgICBmb3IobGV0IGVsZSBpbiBzaGlwc0Nvb3JkaW5hdGVzKXtcbiAgICAgICAgICAgIGlmIChzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMl09PT1cInhBeGlzXCIpe1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMV07IGkrKyl7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc2hpcHNDb29yZGluYXRlc1tlbGVdWzBdICsgaSlcbiAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMl09PT1cInlBeGlzXCIpe1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxzaGlwc0Nvb3JkaW5hdGVzW2VsZV1bMV07IGkrKyl7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc2hpcHNDb29yZGluYXRlc1tlbGVdWzBdICsgKGkqMTApKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYXRhfWApLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrTGVnYWxUdXJuKCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgY29yZFN0ciA9IHNoaXBzQ29vcmRpbmF0ZXNbZGF0YV1bMF0udG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICAgICAgICBsZXQgaWR4ID0gcGFyc2VJbnQoY29yZFN0ci5hdCgxKSkgOyBcbiAgICAgICAgICAgIGxldCByb3dJZHggPSBwYXJzZUludChjb3JkU3RyLmF0KDApKTtcbiAgICAgICAgICAgY29uc3QgZHJhZ2dlZFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYXRhfWApO1xuICAgICAgICAgICAgaWYgKGRyYWdnZWRTaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInhBeGlzXCIpKXtcbiAgICAgICAgICAgICAgaWYgKChzaGlwc0Nvb3JkaW5hdGVzW2RhdGFdWzFdKyByb3dJZHgpID4gMTApIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaTwgcGxhY2VkU2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICBpZiggcGxhY2VkQ29vcmRzLmluY2x1ZGVzKChyb3dJZHgraSkqMTAgKyBpZHgpKXtcbiAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2V9fX1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRyYWdnZWRTaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInlBeGlzXCIpKXtcbiAgICAgICAgICAgICAgaWYgKCAoc2hpcHNDb29yZGluYXRlc1tkYXRhXVsxXSArIGlkeCkgPiAxMCkgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpPCBwbGFjZWRTaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgIGlmKCBwbGFjZWRDb29yZHMuaW5jbHVkZXMoKHJvd0lkeCkqMTAgKyBpZHgraSkpe1xuICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZX1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gZmFsc2UpXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICBpZihjaGVja0xlZ2FsVHVybigpKXtcbiAgICAgICAgICBpZiAoc2hpcHNDb29yZGluYXRlc1tkYXRhXVsyXT09PVwieEF4aXNcIikge1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInhBeGlzXCIpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInlBeGlzXCIpO1xuICAgICAgICAgICAgZS50YXJnZXQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJzdHlsZVwiLFxuICAgICAgICAgICAgYHdpZHRoIDogMzBweDsgXG4gICAgICAgICAgICBoZWlnaHQ6Y2FsYygke3NoaXBzQ29vcmRpbmF0ZXNbZGF0YV1bMV19KjMwcHgpO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDpmaWxsO1xuICAgICAgICAgICAgZHJhZ2dhYmxlOlwidHJ1ZVwiOyBcbiAgICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICAgIGxlZnQ6IC0zcHhgKTtcbiAgICAgICAgICAgIHNoaXBzQ29vcmRpbmF0ZXNbYCR7ZGF0YX1gXSA9IFtcbiAgICAgICAgICAgICAgW3Jvd0lkeCxpZHhdLFxuICAgICAgICAgICAgICBwbGFjZWRTaGlwTGVuZ3RoLFxuICAgICAgICAgICAgICBgeUF4aXNgLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBzQ29vcmRpbmF0ZXNbZGF0YV1bMl09PT1cInlBeGlzXCIpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ4QXhpc1wiKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJ5QXhpc1wiKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwic3R5bGVcIixcbiAgICAgICAgICAgYHdpZHRoIDogY2FsYygke3NoaXBzQ29vcmRpbmF0ZXNbZGF0YV1bMV19KjMwcHgpOyBcbiAgICAgICAgICAgIGhlaWdodDozMHB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDpmaWxsO1xuICAgICAgICAgICAgZHJhZ2dhYmxlOlwidHJ1ZVwiOyBcbiAgICAgICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgICAgIGxlZnQ6IC0zcHhgKTtcbiAgICAgICAgICAgIHNoaXBzQ29vcmRpbmF0ZXNbYCR7ZGF0YX1gXSA9IFtcbiAgICAgICAgICAgICAgW3Jvd0lkeCxpZHhdLFxuICAgICAgICAgICAgICBwbGFjZWRTaGlwTGVuZ3RoLFxuICAgICAgICAgICAgICBcInhBeGlzXCIsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBwbGFjZWRDb29yZHMgPSBjb29yZENhbGMoc2hpcHNDb29yZGluYXRlcyk7XG5cbiAgICAgICAgfX0pXG5cbn1cbiAgICAgIH0pO1xuXG4gICAgICBhbGx5U3FyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgc3dpdGNoIChlbGVtZW50KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBhbGx5U3FyLmNsYXNzTGlzdC5hZGQoXCJub3RIaXRcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBhbGx5U3FyLmNsYXNzTGlzdC5hZGQoXCJzaGlwTm90SGl0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2VtZW50Q29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGFsbHlTcXIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyU2hpcHMsIHJlbmRlclBsYWNlbWVudENvbnRhaW5lciwgc2hpcHNDb29yZGluYXRlcyB9O1xuXG4vL2Fsc28gYWRkIGEgYnV0dG9uIHRvIGNoYW5nZSB0aGUgcGxhY2VtZW50IG9mIHRoZSBzaGlwXG4iLCJmdW5jdGlvbiBTaGlwIChjb29yZGluYXRlcykge3JldHVybiB7XG4gICAgbGVuZ3RoIDogY29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgIGhwIDogY29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgIGNvb3JkaW5hdGVzIDogY29vcmRpbmF0ZXMsXG4gICAgc3VuayA6IGZhbHNlLFxuICAgIFxuICAgIGhpdChjb29yZGluYXRlKXtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmQsIGlkeCk9PntcbiAgICAgICAgICAgIGlmKGNvb3JkWzBdPT09Y29vcmRpbmF0ZVswXSYmIGNvb3JkWzFdPT09Y29vcmRpbmF0ZVsxXSl7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpZHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICBpZih0aGlzLmhwPjApe1xuICAgICAgICB0aGlzLmhwIC09IDF9XG4gICAgfSxcbiAgICBpc1N1bmsoKXtcbiAgICAgICAgaWYodGhpcy5ocD09PTAmJnRoaXMuY29vcmRpbmF0ZXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxufX1cbmV4cG9ydCB7IFNoaXAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwcy5qc1wiO1xuaW1wb3J0IHtnYW1lQm9hcmR9IGZyb20gXCIuL2dhbWVCb2FyZC5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXNoZWV0LmNzc1wiO1xuaW1wb3J0IHsgYWlHYW1lU3RhcnQsIHBsYXllckdhbWVTdGFydCB9IGZyb20gXCIuL2dhbWVTdGFydC5qc1wiOyBcbmltcG9ydCB7IHJlbmRlckdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVSZW5kZXIuanNcIjtcbmltcG9ydCB7IGN1cnJlbnRQbGF5ZXJzIH0gZnJvbSBcIi4vZ2FtZVN0YXJ0LmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJTaGlwcywgcmVuZGVyUGxhY2VtZW50Q29udGFpbmVyIH0gZnJvbSBcIi4vcmVuZGVyU2hpcHMuanNcIjtcbmltcG9ydCB7IGFpUGxhY2VTaGlwcyB9IGZyb20gXCIuL2NvbXB1dGVyVGFrZVR1cm4uanNcIjtcblxuLy9NYWluIE1lbnVcbmNvbnN0IGFpU3RhcnRCdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FpR2FtZVwiKTtcbmNvbnN0IGh1bWFuU3RhcnRCdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWFuR2FtZVwiKTtcbi8vdGFrZSB0aGUgZ2FtZSB0byBzaGlwIHNlbGVjdGlvblxuY29uc3QgY3JlZGl0c0J0dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlZGl0c1wiKTtcblxuYWlTdGFydEJ0dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBhaUdhbWVTdGFydCgpO1xufSlcblxuaHVtYW5TdGFydEJ0dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBwbGF5ZXJHYW1lU3RhcnQoKTtcbn0pXG5cbi8vQ29uZmlybSBzaGlwIHNlbGVjdGlvblxuY29uc3QgY29uZmlybUJ0dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVNlbGVjdFwiKTtcblxuY29uZmlybUJ0dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcblxufSlcblxuLy8gUGFzc2luZyB0aGUgc2NyZWVuIGltcGxlbWVudGF0aW9uXG5jb25zdCBwYXNzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzXCIpO1xuY29uc3QgdHVyblN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzU2NyZWVuXCIpO1xuY29uc3QgZ2FtZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuXCIpO1xuY29uc3QgaGlkZUJ0dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZUJ0dFwiKTtcblxuXG5cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50PT57XG4vLyAgICAgaWYoZXZlbnQuY29kZT09PSBcIlNwYWNlXCIpe1xuLy8gICAgIGlmKHBhc3NCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSl7XG4vLyAgICAgZ2FtZVNjcmVlbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbi8vICAgICB0dXJuU3RhcnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIil9XG4vLyB9XG4vLyB9KVxuXG4vL01ha2Ugc3VyZSB0aGUgcGxheWVyIGhhcyBwbGF5ZWQgdGhlaXIgdHVyblxuLy9LZWVwIHRoZSB0cmFjayBvZiB3aGljaCBzY3JlZW4gaXMgc2hvd2luZyBzbyB0aGF0IGkgY2FuIGNoYW5nZSBpdCBcblxucGFzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBnYW1lU2NyZWVuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIHR1cm5TdGFydC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbn0pXG5cbnR1cm5TdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBnYW1lU2NyZWVuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIHR1cm5TdGFydC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICBpZihjdXJyZW50UGxheWVyc1swXS50dXJuKSB7XG4gICAgICAgIHJlbmRlckdhbWVCb2FyZChjdXJyZW50UGxheWVyc1swXSxjdXJyZW50UGxheWVyc1sxXSxmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVyblRhZ1wiKS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRQbGF5ZXJzWzBdLnBsYXllck5hbWV9J3MgVHVybmB9XG4gICAgICAgIC8vSGFyZGNvZGUgbmFtZXMgaW50byBwbGF5ZXIgb2JqZWN0IHNvIGkgY2FuIHNob3cgdGhlbSB3aGVuZXZlciB0aGV5IHdpbjtcbiAgICBlbHNlIGlmKGN1cnJlbnRQbGF5ZXJzWzFdLnR1cm4pIHsgXG4gICAgICAgIHJlbmRlckdhbWVCb2FyZChjdXJyZW50UGxheWVyc1sxXSwgY3VycmVudFBsYXllcnNbMF0sIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dXJuVGFnXCIpLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFBsYXllcnNbMV0ucGxheWVyTmFtZX0ncyBUdXJuYH1cbiAgICAvL2lmIHRoZSBsYXN0IHR1cm4gcGxheWVkIGlzIHBsYXllcjEgPT4gcmVuZGVyIGZvciBwbGF5ZXIyXG4gICAgLy9lbHNlIGlmIHRoZSBsYXN0IHR1cm4gcGxheWVkIGlzIHBsYXllcjIgPT5yZW5kZXIgZm9yIHBsYXllcjFcbn0pXG5cbmhpZGVCdHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lcjJcIik7XG4gICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpXG59KVxuXG5jb25zdCByZXR1cm5CdHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJldHVyblRvTWFpblwiKTtcbnJldHVybkJ0dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVTY3JlZW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5TY3JlZW5cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG59KVxuLy9UT0RPXG5cbi8vY3VycmVudGx5IHNoaXAgc2VsZWN0aW9uIHNjcmVlbiBhbmQgdGhlIGFjdHVhbCBnYW1lIHNjcmVlbiBsb29rcyB3YXkgZGlmZmVyZW50IC8vIGltcGxlbWVudCB0aGUgc2hpcCBzZWxlY3Rpb24gc2NyZWVuIGxvb2sgdG8gdGhlIGFjdHVhbCBnYW1lIHNjcmVlbiB3aXRoIHNoaXBzIGJlaW5nIHJlbmRlcmVkIGFzIHRoZXkgYXJlIGluIHNlbGVjdGlvbiBzY3JlZW5cbi8vIEltcGxlbWVudGluZyB0aGUgc2hpcCBzZWxlY3Rpb24gc2NyZWVuIGxvb2sgdG8gdGhlIGFjdHVhbCBnYW1lIHdpbGwgYnJlYWsgaG93IHRoZSBoaXRzIGFyZSBiZWluZyByZW5kZXJlZCAvLyBmaW5kIGEgZGlmZmVyZW50IHdheSB0byByZW5kZXIgaXRcbi8vaW1wbGVtZW50IGEgYnV0dG9uIHNvIGkgY2FuIGNoYW5nZSB0aGUgaW5kZXggIFxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==