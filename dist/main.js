/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    min-height: 95vh;\n    background-color: rgb(57, 57, 57);\n    color: white;\n    font-size: 1rem;\n}\n\nbutton {\n    font-size: 1rem;\n    background-color: rgb(0, 136, 255);\n    color: white;\n    padding: 0.5rem 1rem;\n    border: 2px solid rgb(0, 136, 255);\n    border-radius: 6px;\n}\n\nbutton:active {\n    background-color: rgba(0, 136, 255, 0.736);\n    border-color: rgba(0, 136, 255, 0.5);\n}\n\nbutton:hover {\n    scale: 1.05;\n}\n\n.form {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    padding-left: 2rem;\n    position: absolute;\n    top: 25%;\n    left: 35%;\n    z-index: 1;\n    border: 2px solid rgb(159, 231, 255);\n    border-radius: 12px;\n    background-color: rgb(159, 231, 255);\n}\n\nform {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    column-gap: 1rem;\n    row-gap : 0.5rem;\n}\n\nlabel {\n    justify-self: end;\n    font-size: 1.2rem;\n    color: black;\n}\n\ninput {\n    justify-self: start;\n    font-size: 1rem;\n    border-radius: 0.25rem;\n}\n\ninput[type = \"date\"], input[type = \"text\"] {\n    width: 200px;\n}\n\n.priorityLabel {\n    grid-column: 1 / 2;\n    grid-row : 7 / 8;\n    justify-self: end;\n    font-size: 1.2rem;\n    color: black;\n}\n\n.entry {\n    grid-column: 2 / -1;\n}\n\nform > button {\n    grid-column: 2;\n    justify-self: start;\n}\n\n.startPageBtns {\n    display: flex;\n    justify-content: center;\n    padding: 1rem 4rem;\n}\n\n.startPageBtns > button:first-child {\n    margin-right: 1rem;\n}\n\n.listBtns {\n    display: flex;\n    justify-content: space-evenly;\n    padding: 1rem 4rem;\n    position: sticky;\n    top: 0px;\n    background-color: rgb(57, 57, 57);\n}\n\n.list {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    margin: auto;\n}\n\n.project {\n    margin-top: 2rem;\n}\n\n.projectTitle {\n    background-color: rgb(255, 237, 197);\n    display: flex;\n    justify-content: center;\n    padding: 0.5rem 1rem;\n    color: black;\n    font-size: 1.1rem;\n    font-weight: 500;\n    border-top-left-radius: 12px;\n    border-top-right-radius: 12px;\n    border-top: 2px solid white;\n    border-bottom: 1px solid white;\n}\n\n.item {\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem 1rem;\n    color: black;\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n}\n\n.item:last-child {\n    border-bottom-left-radius: 12px;\n    border-bottom-right-radius: 12px;\n    border-bottom: 2px solid white;\n}\n\n.high {\n    background-color: rgb(255, 120, 120);\n}\n\n.high:hover {\n    background-color: rgba(255, 120, 120, 0.65);\n}\n\n.medium {\n    background-color: rgb(255, 190, 87);\n}\n\n.medium:hover {\n    background-color: rgba(255, 190, 87, 0.65);\n}\n\n.low {\n    background-color: rgb(117, 175, 117);\n}\n\n.low:hover {\n    background-color: rgba(117, 175, 117, 0.65);\n}\n\n.delItem {\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n.hidden {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,iCAAiC;IACjC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kCAAkC;IAClC,YAAY;IACZ,oBAAoB;IACpB,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,0CAA0C;IAC1C,oCAAoC;AACxC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,UAAU;IACV,oCAAoC;IACpC,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;IAClB,gBAAgB;IAChB,QAAQ;IACR,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,uBAAuB;IACvB,oBAAoB;IACpB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,4BAA4B;IAC5B,6BAA6B;IAC7B,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,oBAAoB;IACpB,YAAY;IACZ,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;IAC/B,gCAAgC;IAChC,8BAA8B;AAClC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["body {\n    min-height: 95vh;\n    background-color: rgb(57, 57, 57);\n    color: white;\n    font-size: 1rem;\n}\n\nbutton {\n    font-size: 1rem;\n    background-color: rgb(0, 136, 255);\n    color: white;\n    padding: 0.5rem 1rem;\n    border: 2px solid rgb(0, 136, 255);\n    border-radius: 6px;\n}\n\nbutton:active {\n    background-color: rgba(0, 136, 255, 0.736);\n    border-color: rgba(0, 136, 255, 0.5);\n}\n\nbutton:hover {\n    scale: 1.05;\n}\n\n.form {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    padding-left: 2rem;\n    position: absolute;\n    top: 25%;\n    left: 35%;\n    z-index: 1;\n    border: 2px solid rgb(159, 231, 255);\n    border-radius: 12px;\n    background-color: rgb(159, 231, 255);\n}\n\nform {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    column-gap: 1rem;\n    row-gap : 0.5rem;\n}\n\nlabel {\n    justify-self: end;\n    font-size: 1.2rem;\n    color: black;\n}\n\ninput {\n    justify-self: start;\n    font-size: 1rem;\n    border-radius: 0.25rem;\n}\n\ninput[type = \"date\"], input[type = \"text\"] {\n    width: 200px;\n}\n\n.priorityLabel {\n    grid-column: 1 / 2;\n    grid-row : 7 / 8;\n    justify-self: end;\n    font-size: 1.2rem;\n    color: black;\n}\n\n.entry {\n    grid-column: 2 / -1;\n}\n\nform > button {\n    grid-column: 2;\n    justify-self: start;\n}\n\n.startPageBtns {\n    display: flex;\n    justify-content: center;\n    padding: 1rem 4rem;\n}\n\n.startPageBtns > button:first-child {\n    margin-right: 1rem;\n}\n\n.listBtns {\n    display: flex;\n    justify-content: space-evenly;\n    padding: 1rem 4rem;\n    position: sticky;\n    top: 0px;\n    background-color: rgb(57, 57, 57);\n}\n\n.list {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    margin: auto;\n}\n\n.project {\n    margin-top: 2rem;\n}\n\n.projectTitle {\n    background-color: rgb(255, 237, 197);\n    display: flex;\n    justify-content: center;\n    padding: 0.5rem 1rem;\n    color: black;\n    font-size: 1.1rem;\n    font-weight: 500;\n    border-top-left-radius: 12px;\n    border-top-right-radius: 12px;\n    border-top: 2px solid white;\n    border-bottom: 1px solid white;\n}\n\n.item {\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem 1rem;\n    color: black;\n    border-top: 1px solid white;\n    border-bottom: 1px solid white;\n}\n\n.item:last-child {\n    border-bottom-left-radius: 12px;\n    border-bottom-right-radius: 12px;\n    border-bottom: 2px solid white;\n}\n\n.high {\n    background-color: rgb(255, 120, 120);\n}\n\n.high:hover {\n    background-color: rgba(255, 120, 120, 0.65);\n}\n\n.medium {\n    background-color: rgb(255, 190, 87);\n}\n\n.medium:hover {\n    background-color: rgba(255, 190, 87, 0.65);\n}\n\n.low {\n    background-color: rgb(117, 175, 117);\n}\n\n.low:hover {\n    background-color: rgba(117, 175, 117, 0.65);\n}\n\n.delItem {\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/item.js");



const displayController = function () {
  let newList, mode, oldDetails = {};

  function retrieveList() {
    let retrieved = JSON.parse(localStorage.getItem("userList"));
    if (retrieved === null)
      return null;
    else {
      let retrievedList = (0,_list__WEBPACK_IMPORTED_MODULE_0__.createList)();
      for (let i = 0; i < retrieved.length; i++) {
        let item = (0,_item__WEBPACK_IMPORTED_MODULE_1__.createItem)();
        item.setTitle(retrieved[i]["Title"]);
        item.setDescription(retrieved[i]["Desc"]);
        item.setDueDate(retrieved[i]["Due"]);
        item.setPriority(retrieved[i]["Priority"]);
        item.setProject(retrieved[i]["Project"]);
        item.setStatus(retrieved[i]["Status"]);
        retrievedList.addItemObject(item);
      }
      return retrievedList;
    }
  }

  function populateForm(item) {
    for (let key in item) {
      if (key !== "Status" && key !== "Priority" && key !== "ID") {
        document.querySelector(`input#${key.toLowerCase()}`).value = item[key];
      }
    }
    document.querySelector('input#status').checked = item["Status"];
    document.querySelector(`input.${item["Priority"]}`).checked = true;
  }

  function displayList() {
    if (newList === undefined)
      return ;
    let list = newList.viewList();
    console.log(list);
    let listDiv = document.querySelector(".list");
    document.querySelectorAll(".list > *").forEach(e => e.remove());
    for (let indx in list) {
      let item = list[indx];
      let itemDiv = document.createElement("div");
      itemDiv.classList.add("item", `${item["Priority"]}`);
      itemDiv.addEventListener("click", e => {
        mode = "edit";
        oldDetails = item;
        console.log(item);
        populateForm(item);
        document.querySelectorAll("body > *").forEach(s => s.style.opacity = "50%");
        document.querySelector(".form").style.opacity = "100%";
        document.querySelector(".form").classList.remove("hidden");
      });
      let itemDate = document.createElement("div");
      itemDate.classList.add("due");
      itemDate.textContent = item["Due"];
      let itemName = document.createElement("div");
      itemName.classList.add("title");
      itemName.textContent = item["Title"];
      let delItem = document.createElement("div");
      delItem.classList.add("delItem", "material-icons");
      delItem.textContent = "delete";
      delItem.addEventListener("click", e => {
        e.stopPropagation();
        console.log(item);
        newList.removeItem(item["ID"]);
        displayList();
      });
      itemDiv.appendChild(itemDate);
      itemDiv.appendChild(itemName);
      itemDiv.appendChild(delItem);
      let projectName = item["Project"];
      let projectDiv = document.querySelector(`.list .${projectName}`);
      if (projectDiv === null) {
        projectDiv = document.createElement("div");
        projectDiv.classList.add("project", `${projectName}`);
        let projectTitle = document.createElement("div");
        projectTitle.textContent = `Project: ${projectName}`;
        projectTitle.classList.add("projectTitle");
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(itemDiv);
        listDiv.appendChild(projectDiv);
      }
      projectDiv.appendChild(itemDiv);
    }
  }

  function setFormDefault() {
    let dateElem = document.querySelector("input#due");
    let month = new Date().getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let date = new Date().getDate();
    date = date < 10 ? `0${date}` : date;
    let year = new Date().getFullYear();
    dateElem.value = `${year}-${month}-${date}`;
    document.querySelector("input#title").value = "Title";
    document.querySelector("input#desc").value = "Description";
    document.querySelector("input#project").value = "Default";
    document.querySelector("input#status").value = "done";
    document.querySelector("#status").checked = false;
    document.querySelectorAll("input#priority").forEach(e => e.checked = false);
  }

  function hookForm() {
    let formElem = document.querySelector("form");
    setFormDefault();
    formElem.addEventListener("submit", function (e) {
      e.preventDefault();
      let formData = new FormData(formElem), userInput = {};
      for (let pair of formData)
        userInput[pair[0]] = pair[1];
      // userInput["Status"] = userInput["Status"] === "done";
      if (mode === "add") {
        let item = (0,_item__WEBPACK_IMPORTED_MODULE_1__.createItem)();
        item.setTitle(userInput["Title"]);
        item.setDescription(userInput["Desc"]);
        item.setDueDate(userInput["Due"]);
        item.setPriority(userInput["Priority"]);
        item.setStatus(userInput["Status"] === "done");
        item.setProject(userInput["Project"]);
        newList.addItemObject(item);
        mode = undefined;
        displayList();
      }
      if (mode === "edit") {
        newList.updateItem(oldDetails, userInput);
        oldDetails = {};
        mode = undefined;
        displayList();
      }
      document.querySelectorAll("body > *").forEach(s => s.style.opacity = "100%");
      document.querySelector(".form").classList.add("hidden");
      setFormDefault();
    });
  }

  const populateDisplay = function () {
    let body = document.querySelector("body");
    let btnDiv1 = document.createElement("div");
    btnDiv1.classList.add("startPageBtns");
    let createBtn = document.createElement("button");
    createBtn.textContent =  "Create New List";
    btnDiv1.appendChild(createBtn);
    let retrieveBtn = document.createElement("button");
    retrieveBtn.textContent =  "Retrieve List from Local Storage";
    btnDiv1.appendChild(retrieveBtn);
    body.appendChild(btnDiv1);
    let listDiv = document.createElement("div");
    listDiv.classList.add("list", "hidden");
    let btnDiv2 = document.createElement("div");
    btnDiv2.classList.add("listBtns", "hidden");
    let addItemBtn = document.createElement("button");
    addItemBtn.textContent = "Add new item";
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save List";
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete stored list";
    let exitBtn = document.createElement("button");
    exitBtn.textContent = "Exit";
    createBtn.addEventListener("click", function (e) {
      newList = (0,_list__WEBPACK_IMPORTED_MODULE_0__.createList)();
      btnDiv1.classList.add("hidden");
      btnDiv2.classList.remove("hidden");
      listDiv.classList.remove("hidden");
    });
    retrieveBtn.addEventListener("click", function (e) {
      newList = retrieveList();
      if (newList === null) 
        alert("Sorry, no stored list found. Please create a new list.");
      else {
        displayList();
        btnDiv1.classList.add("hidden");
        btnDiv2.classList.remove("hidden");
        listDiv.classList.remove("hidden");
      }
    });
    addItemBtn.addEventListener("click", function (e) {
      mode = "add";
      document.querySelectorAll("body > *").forEach(s => s.style.opacity = "50%");
      document.querySelector(".form").style.opacity = "100%";
      document.querySelector(".form").classList.remove("hidden");
    });
    saveBtn.addEventListener("click", function (e) {
      localStorage.setItem("userList", JSON.stringify(newList.viewList()));
    });
    deleteBtn.addEventListener("click", function (e) {
      localStorage.removeItem("userList");
      document.querySelectorAll(".list > *").forEach(e => e.remove());
      btnDiv1.classList.remove("hidden");
      btnDiv2.classList.add("hidden");
      listDiv.classList.add("hidden");
    });
    exitBtn.addEventListener("click", function (e) {
      document.querySelectorAll(".list > *").forEach(e => e.remove());
      btnDiv1.classList.remove("hidden");
      listDiv.classList.add("hidden");
      btnDiv2.classList.add("hidden");
    });
    btnDiv2.appendChild(addItemBtn);
    btnDiv2.appendChild(saveBtn);
    btnDiv2.appendChild(deleteBtn);
    btnDiv2.appendChild(exitBtn);
    body.appendChild(btnDiv2);
    body.appendChild(listDiv);
    hookForm();
  }
  
  return {populateDisplay};
}



/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createItem": () => (/* binding */ createItem)
/* harmony export */ });
// factory function to make items

function createItem() {
  let name, task, due, prior, project = "default", done = false, id = crypto.randomUUID();
  let setTitle = function (title) {
    name = title;
  }
  let getTitle = function () {
    return name;
  }
  let setDescription = function (description) {
    task = description;
  }
  let getDescription = function () {
    return task;
  }
  let setDueDate = function (date) {
    due = date;
  }
  let getDueDate = function () {
    return due;
  }
  let setPriority = function (priority) {
    prior = priority;
  }
  let getPriority = function () {
    return prior;
  }
  let setProject = function (projectName) {
    project = projectName;
  }
  let getProject = function () {
    return project;
  }
  let setDetails = function () {
    let name = prompt("Enter title of task", "Title");    
    let desc = prompt("Enter description of task", "Desc");
    let dueDate = prompt("Enter due date of task (DDMMYYY)", "000000");    
    let priority = prompt("Enter priority (high, medium, low) of task", "NA");
    let project = prompt("Enter project of task", "NA");  
    setTitle(name);
    setDescription(desc);
    setDueDate(dueDate);
    setPriority(priority);
    setProject(project);
  }

  let setStatus = function (status) {
    done = status;
  }

  let getStatus = function () {
    return done;
  }

  let changeStatus = function () {
    done = !done;
  }

  let getID = function () {
    return id;
  }

  let viewItem = function () {
    return {
      "Title" : name,
      "Desc" : task,
      "Due" : due,
      "Priority" : prior,
      "Project" : project,
      "Status" : done,
      "ID" : id
    };
  }

  let equals = function (object) {
    return object["ID"] === this.getID();;
  }

  let convertPriority = function (priority) {
    switch (priority) {
      case "high" : return 3;
      case "medium" : return 2;
      case "low" : return 1;
      default : return 0;
    }
  }

  let compareTo = function (item) {
    let date1 = new Date(this.getDueDate());
    let date2 = new Date(item.getDueDate());
    let priority1 = convertPriority(this.getPriority()), priority2 = convertPriority(item.getPriority());
    if (date1 < date2) 
      return 1;
    else if ((date1.getTime() === date2.getTime()) && (priority1 > priority2))
      return 1;
    return -1;
  }

  return {getTitle, setTitle, getDescription, setDescription, 
          getDueDate, setDueDate, getPriority, setPriority, 
          getProject, setProject, setDetails, getStatus, setStatus, 
          changeStatus, getID, viewItem, equals, compareTo};
}





/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/item.js");
// factory function to make lists


function createList() {
  let list = [];

  let addItemObject = function (toAdd) {
    let newList = [];
    let toAddDate = new Date(toAdd.getDueDate());
    if (list.length === 0) {
      list.push(toAdd);
      return;
    }
    let i = 0, added = false;
    while (i < list.length) {
      let compare = toAdd.compareTo(list[i]);
      if (compare === 1 && !added) {
        newList.push(toAdd);
        added = true;
      }
      newList.push(list[i]);
      i += 1;
    }
    if (!added)
      newList.push(toAdd);
    list = newList;
  }

  let addItem = function () {
    const item = (0,_item__WEBPACK_IMPORTED_MODULE_0__.createItem)();
    item.setDetails();
    addItemObject(item);
  }

  let viewList = function () {
    let returnList = [];
    if (list.length > 0)
      list.forEach(e => returnList.push(e.viewItem()));
    return returnList;
  }

  // let removeItem = function (title) {
  //   let newList = [];
  //   for (let indx in list) {
  //     if (list[indx].getTitle() !== title) {
  //       newList.push(list[indx]);
  //     }
  //   }
  //   list = newList;
  // }
  let removeItem = function (id) {
    let newList = [];
    for (let indx in list) {
      if (list[indx].getID() !== id) {
        newList.push(list[indx]);
      }
    }
    list = newList;
  }

  let getItem = function (id) {
    for (let indx in list) {
      if (list[indx].getID() === id)
        return list[indx];
    }
    return null;
  }

  let updateItem = function (oldDetails, newDetails) {
    let priorityChanged = false, updatedItem = null;
    for (let indx in list) 
      if (list[indx].equals(oldDetails)) {
        let item = list[indx];
        item.setTitle(newDetails["Title"]);
        item.setDescription(newDetails["Desc"]);
        if (item.getDueDate() !== newDetails["Due"] || item.getPriority() !== newDetails["Priority"])
          priorityChanged = true;
        item.setDueDate(newDetails["Due"]);
        item.setPriority(newDetails["Priority"]);
        item.setProject(newDetails["Project"]);
        updatedItem = {...item};
        break;
      }
      if (priorityChanged) {
        //re-sort
        let newList = [], added = false;
        for (let indx in list) {
          if (list[indx].getID() !== updatedItem.getID()) {
            if (list[indx].compareTo(updatedItem) < 0 && !added) {
              newList.push(updatedItem);
              added = true;
            } 
            newList.push(list[indx]);
          }            
        }
        if (!added) 
          newList.push(updatedItem);
        list = newList;
      }
  }
  return {addItem, addItemObject, removeItem, getItem, viewList, updateItem};
}



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
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/item.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_display__WEBPACK_IMPORTED_MODULE_2__.displayController)().populateDisplay();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekduQjtBQUNvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsaURBQVU7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7Ozs7OztVQ3JHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ0E7QUFDVTtBQUMxQjs7QUFFcEIsMkRBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDk1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgNTcsIDU3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzNiwgMjU1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDEzNiwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMzYsIDI1NSwgMC43MzYpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMTM2LCAyNTUsIDAuNSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjA1O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBsZWZ0OiAzNSU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTksIDIzMSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OSwgMjMxLCAyNTUpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICByb3ctZ2FwIDogMC41cmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZSA9IFxcXCJkYXRlXFxcIl0sIGlucHV0W3R5cGUgPSBcXFwidGV4dFxcXCJdIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHlMYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3cgOiA3IC8gODtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5lbnRyeSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxufVxcblxcbmZvcm0gPiBidXR0b24ge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnN0YXJ0UGFnZUJ0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSA0cmVtO1xcbn1cXG5cXG4uc3RhcnRQYWdlQnRucyA+IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmxpc3RCdG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgNTcsIDU3KTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzNywgMTk3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLml0ZW06bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTIwLCAxMjApO1xcbn1cXG5cXG4uaGlnaDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjAsIDEyMCwgMC42NSk7XFxufVxcblxcbi5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTAsIDg3KTtcXG59XFxuXFxuLm1lZGl1bTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTAsIDg3LCAwLjY1KTtcXG59XFxuXFxuLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTcsIDE3NSwgMTE3KTtcXG59XFxuXFxuLmxvdzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE3LCAxNzUsIDExNywgMC42NSk7XFxufVxcblxcbi5kZWxJdGVtIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDk1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgNTcsIDU3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzNiwgMjU1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDEzNiwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMzYsIDI1NSwgMC43MzYpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMTM2LCAyNTUsIDAuNSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjA1O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBsZWZ0OiAzNSU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTksIDIzMSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OSwgMjMxLCAyNTUpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICByb3ctZ2FwIDogMC41cmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZSA9IFxcXCJkYXRlXFxcIl0sIGlucHV0W3R5cGUgPSBcXFwidGV4dFxcXCJdIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHlMYWJlbCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3cgOiA3IC8gODtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5lbnRyeSB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxufVxcblxcbmZvcm0gPiBidXR0b24ge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnN0YXJ0UGFnZUJ0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSA0cmVtO1xcbn1cXG5cXG4uc3RhcnRQYWdlQnRucyA+IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmxpc3RCdG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgNTcsIDU3KTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzNywgMTk3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLml0ZW06bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTIwLCAxMjApO1xcbn1cXG5cXG4uaGlnaDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjAsIDEyMCwgMC42NSk7XFxufVxcblxcbi5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTAsIDg3KTtcXG59XFxuXFxuLm1lZGl1bTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTAsIDg3LCAwLjY1KTtcXG59XFxuXFxuLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTcsIDE3NSwgMTE3KTtcXG59XFxuXFxuLmxvdzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE3LCAxNzUsIDExNywgMC42NSk7XFxufVxcblxcbi5kZWxJdGVtIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICBsZXQgbmV3TGlzdCwgbW9kZSwgb2xkRGV0YWlscyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHJldHJpZXZlTGlzdCgpIHtcbiAgICBsZXQgcmV0cmlldmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJMaXN0XCIpKTtcbiAgICBpZiAocmV0cmlldmVkID09PSBudWxsKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgZWxzZSB7XG4gICAgICBsZXQgcmV0cmlldmVkTGlzdCA9IGNyZWF0ZUxpc3QoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0cmlldmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpdGVtID0gY3JlYXRlSXRlbSgpO1xuICAgICAgICBpdGVtLnNldFRpdGxlKHJldHJpZXZlZFtpXVtcIlRpdGxlXCJdKTtcbiAgICAgICAgaXRlbS5zZXREZXNjcmlwdGlvbihyZXRyaWV2ZWRbaV1bXCJEZXNjXCJdKTtcbiAgICAgICAgaXRlbS5zZXREdWVEYXRlKHJldHJpZXZlZFtpXVtcIkR1ZVwiXSk7XG4gICAgICAgIGl0ZW0uc2V0UHJpb3JpdHkocmV0cmlldmVkW2ldW1wiUHJpb3JpdHlcIl0pO1xuICAgICAgICBpdGVtLnNldFByb2plY3QocmV0cmlldmVkW2ldW1wiUHJvamVjdFwiXSk7XG4gICAgICAgIGl0ZW0uc2V0U3RhdHVzKHJldHJpZXZlZFtpXVtcIlN0YXR1c1wiXSk7XG4gICAgICAgIHJldHJpZXZlZExpc3QuYWRkSXRlbU9iamVjdChpdGVtKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXRyaWV2ZWRMaXN0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcHVsYXRlRm9ybShpdGVtKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGl0ZW0pIHtcbiAgICAgIGlmIChrZXkgIT09IFwiU3RhdHVzXCIgJiYga2V5ICE9PSBcIlByaW9yaXR5XCIgJiYga2V5ICE9PSBcIklEXCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXQjJHtrZXkudG9Mb3dlckNhc2UoKX1gKS52YWx1ZSA9IGl0ZW1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjc3RhdHVzJykuY2hlY2tlZCA9IGl0ZW1bXCJTdGF0dXNcIl07XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXQuJHtpdGVtW1wiUHJpb3JpdHlcIl19YCkuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5TGlzdCgpIHtcbiAgICBpZiAobmV3TGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDtcbiAgICBsZXQgbGlzdCA9IG5ld0xpc3Qudmlld0xpc3QoKTtcbiAgICBjb25zb2xlLmxvZyhsaXN0KTtcbiAgICBsZXQgbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QgPiAqXCIpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKTtcbiAgICBmb3IgKGxldCBpbmR4IGluIGxpc3QpIHtcbiAgICAgIGxldCBpdGVtID0gbGlzdFtpbmR4XTtcbiAgICAgIGxldCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcIml0ZW1cIiwgYCR7aXRlbVtcIlByaW9yaXR5XCJdfWApO1xuICAgICAgaXRlbURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIG1vZGUgPSBcImVkaXRcIjtcbiAgICAgICAgb2xkRGV0YWlscyA9IGl0ZW07XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICBwb3B1bGF0ZUZvcm0oaXRlbSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5ID4gKlwiKS5mb3JFYWNoKHMgPT4gcy5zdHlsZS5vcGFjaXR5ID0gXCI1MCVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKS5zdHlsZS5vcGFjaXR5ID0gXCIxMDAlXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgfSk7XG4gICAgICBsZXQgaXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaXRlbURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZVwiKTtcbiAgICAgIGl0ZW1EYXRlLnRleHRDb250ZW50ID0gaXRlbVtcIkR1ZVwiXTtcbiAgICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW1bXCJUaXRsZVwiXTtcbiAgICAgIGxldCBkZWxJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRlbEl0ZW0uY2xhc3NMaXN0LmFkZChcImRlbEl0ZW1cIiwgXCJtYXRlcmlhbC1pY29uc1wiKTtcbiAgICAgIGRlbEl0ZW0udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuICAgICAgZGVsSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICBuZXdMaXN0LnJlbW92ZUl0ZW0oaXRlbVtcIklEXCJdKTtcbiAgICAgICAgZGlzcGxheUxpc3QoKTtcbiAgICAgIH0pO1xuICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtRGF0ZSk7XG4gICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZGVsSXRlbSk7XG4gICAgICBsZXQgcHJvamVjdE5hbWUgPSBpdGVtW1wiUHJvamVjdFwiXTtcbiAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3QgLiR7cHJvamVjdE5hbWV9YCk7XG4gICAgICBpZiAocHJvamVjdERpdiA9PT0gbnVsbCkge1xuICAgICAgICBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiLCBgJHtwcm9qZWN0TmFtZX1gKTtcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGBQcm9qZWN0OiAke3Byb2plY3ROYW1lfWA7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRpdGxlXCIpO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gICAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgICB9XG4gICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZvcm1EZWZhdWx0KCkge1xuICAgIGxldCBkYXRlRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkdWVcIik7XG4gICAgbGV0IG1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMTtcbiAgICBtb250aCA9IG1vbnRoIDwgMTAgPyBgMCR7bW9udGh9YCA6IG1vbnRoO1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XG4gICAgZGF0ZSA9IGRhdGUgPCAxMCA/IGAwJHtkYXRlfWAgOiBkYXRlO1xuICAgIGxldCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGRhdGVFbGVtLnZhbHVlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXRlfWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3RpdGxlXCIpLnZhbHVlID0gXCJUaXRsZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkZXNjXCIpLnZhbHVlID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcm9qZWN0XCIpLnZhbHVlID0gXCJEZWZhdWx0XCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3N0YXR1c1wiKS52YWx1ZSA9IFwiZG9uZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhdHVzXCIpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQjcHJpb3JpdHlcIikuZm9yRWFjaChlID0+IGUuY2hlY2tlZCA9IGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhvb2tGb3JtKCkge1xuICAgIGxldCBmb3JtRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIHNldEZvcm1EZWZhdWx0KCk7XG4gICAgZm9ybUVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGVtKSwgdXNlcklucHV0ID0ge307XG4gICAgICBmb3IgKGxldCBwYWlyIG9mIGZvcm1EYXRhKVxuICAgICAgICB1c2VySW5wdXRbcGFpclswXV0gPSBwYWlyWzFdO1xuICAgICAgLy8gdXNlcklucHV0W1wiU3RhdHVzXCJdID0gdXNlcklucHV0W1wiU3RhdHVzXCJdID09PSBcImRvbmVcIjtcbiAgICAgIGlmIChtb2RlID09PSBcImFkZFwiKSB7XG4gICAgICAgIGxldCBpdGVtID0gY3JlYXRlSXRlbSgpO1xuICAgICAgICBpdGVtLnNldFRpdGxlKHVzZXJJbnB1dFtcIlRpdGxlXCJdKTtcbiAgICAgICAgaXRlbS5zZXREZXNjcmlwdGlvbih1c2VySW5wdXRbXCJEZXNjXCJdKTtcbiAgICAgICAgaXRlbS5zZXREdWVEYXRlKHVzZXJJbnB1dFtcIkR1ZVwiXSk7XG4gICAgICAgIGl0ZW0uc2V0UHJpb3JpdHkodXNlcklucHV0W1wiUHJpb3JpdHlcIl0pO1xuICAgICAgICBpdGVtLnNldFN0YXR1cyh1c2VySW5wdXRbXCJTdGF0dXNcIl0gPT09IFwiZG9uZVwiKTtcbiAgICAgICAgaXRlbS5zZXRQcm9qZWN0KHVzZXJJbnB1dFtcIlByb2plY3RcIl0pO1xuICAgICAgICBuZXdMaXN0LmFkZEl0ZW1PYmplY3QoaXRlbSk7XG4gICAgICAgIG1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGRpc3BsYXlMaXN0KCk7XG4gICAgICB9XG4gICAgICBpZiAobW9kZSA9PT0gXCJlZGl0XCIpIHtcbiAgICAgICAgbmV3TGlzdC51cGRhdGVJdGVtKG9sZERldGFpbHMsIHVzZXJJbnB1dCk7XG4gICAgICAgIG9sZERldGFpbHMgPSB7fTtcbiAgICAgICAgbW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgZGlzcGxheUxpc3QoKTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5ID4gKlwiKS5mb3JFYWNoKHMgPT4gcy5zdHlsZS5vcGFjaXR5ID0gXCIxMDAlXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBzZXRGb3JtRGVmYXVsdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcG9wdWxhdGVEaXNwbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbGV0IGJ0bkRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bkRpdjEuY2xhc3NMaXN0LmFkZChcInN0YXJ0UGFnZUJ0bnNcIik7XG4gICAgbGV0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY3JlYXRlQnRuLnRleHRDb250ZW50ID0gIFwiQ3JlYXRlIE5ldyBMaXN0XCI7XG4gICAgYnRuRGl2MS5hcHBlbmRDaGlsZChjcmVhdGVCdG4pO1xuICAgIGxldCByZXRyaWV2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmV0cmlldmVCdG4udGV4dENvbnRlbnQgPSAgXCJSZXRyaWV2ZSBMaXN0IGZyb20gTG9jYWwgU3RvcmFnZVwiO1xuICAgIGJ0bkRpdjEuYXBwZW5kQ2hpbGQocmV0cmlldmVCdG4pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYnRuRGl2MSk7XG4gICAgbGV0IGxpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpc3REaXYuY2xhc3NMaXN0LmFkZChcImxpc3RcIiwgXCJoaWRkZW5cIik7XG4gICAgbGV0IGJ0bkRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bkRpdjIuY2xhc3NMaXN0LmFkZChcImxpc3RCdG5zXCIsIFwiaGlkZGVuXCIpO1xuICAgIGxldCBhZGRJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRJdGVtQnRuLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IGl0ZW1cIjtcbiAgICBsZXQgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9IFwiU2F2ZSBMaXN0XCI7XG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGUgc3RvcmVkIGxpc3RcIjtcbiAgICBsZXQgZXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZXhpdEJ0bi50ZXh0Q29udGVudCA9IFwiRXhpdFwiO1xuICAgIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIG5ld0xpc3QgPSBjcmVhdGVMaXN0KCk7XG4gICAgICBidG5EaXYxLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBidG5EaXYyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICBsaXN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gICAgcmV0cmlldmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBuZXdMaXN0ID0gcmV0cmlldmVMaXN0KCk7XG4gICAgICBpZiAobmV3TGlzdCA9PT0gbnVsbCkgXG4gICAgICAgIGFsZXJ0KFwiU29ycnksIG5vIHN0b3JlZCBsaXN0IGZvdW5kLiBQbGVhc2UgY3JlYXRlIGEgbmV3IGxpc3QuXCIpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGRpc3BsYXlMaXN0KCk7XG4gICAgICAgIGJ0bkRpdjEuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgYnRuRGl2Mi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBsaXN0RGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYWRkSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIG1vZGUgPSBcImFkZFwiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJvZHkgPiAqXCIpLmZvckVhY2gocyA9PiBzLnN0eWxlLm9wYWNpdHkgPSBcIjUwJVwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKS5zdHlsZS5vcGFjaXR5ID0gXCIxMDAlXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyTGlzdFwiLCBKU09OLnN0cmluZ2lmeShuZXdMaXN0LnZpZXdMaXN0KCkpKTtcbiAgICB9KTtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJMaXN0XCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0ID4gKlwiKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XG4gICAgICBidG5EaXYxLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICBidG5EaXYyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBsaXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gICAgZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdCA+ICpcIikuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICAgICAgYnRuRGl2MS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgbGlzdERpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgYnRuRGl2Mi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICAgIGJ0bkRpdjIuYXBwZW5kQ2hpbGQoYWRkSXRlbUJ0bik7XG4gICAgYnRuRGl2Mi5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgICBidG5EaXYyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgYnRuRGl2Mi5hcHBlbmRDaGlsZChleGl0QnRuKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJ0bkRpdjIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobGlzdERpdik7XG4gICAgaG9va0Zvcm0oKTtcbiAgfVxuICBcbiAgcmV0dXJuIHtwb3B1bGF0ZURpc3BsYXl9O1xufVxuXG5leHBvcnQge2Rpc3BsYXlDb250cm9sbGVyfTsiLCIvLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIG1ha2UgaXRlbXNcblxuZnVuY3Rpb24gY3JlYXRlSXRlbSgpIHtcbiAgbGV0IG5hbWUsIHRhc2ssIGR1ZSwgcHJpb3IsIHByb2plY3QgPSBcImRlZmF1bHRcIiwgZG9uZSA9IGZhbHNlLCBpZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gIGxldCBzZXRUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgIG5hbWUgPSB0aXRsZTtcbiAgfVxuICBsZXQgZ2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgbGV0IHNldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgdGFzayA9IGRlc2NyaXB0aW9uO1xuICB9XG4gIGxldCBnZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuICBsZXQgc2V0RHVlRGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgZHVlID0gZGF0ZTtcbiAgfVxuICBsZXQgZ2V0RHVlRGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZHVlO1xuICB9XG4gIGxldCBzZXRQcmlvcml0eSA9IGZ1bmN0aW9uIChwcmlvcml0eSkge1xuICAgIHByaW9yID0gcHJpb3JpdHk7XG4gIH1cbiAgbGV0IGdldFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcmlvcjtcbiAgfVxuICBsZXQgc2V0UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xuICAgIHByb2plY3QgPSBwcm9qZWN0TmFtZTtcbiAgfVxuICBsZXQgZ2V0UHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuICBsZXQgc2V0RGV0YWlscyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbmFtZSA9IHByb21wdChcIkVudGVyIHRpdGxlIG9mIHRhc2tcIiwgXCJUaXRsZVwiKTsgICAgXG4gICAgbGV0IGRlc2MgPSBwcm9tcHQoXCJFbnRlciBkZXNjcmlwdGlvbiBvZiB0YXNrXCIsIFwiRGVzY1wiKTtcbiAgICBsZXQgZHVlRGF0ZSA9IHByb21wdChcIkVudGVyIGR1ZSBkYXRlIG9mIHRhc2sgKERETU1ZWVkpXCIsIFwiMDAwMDAwXCIpOyAgICBcbiAgICBsZXQgcHJpb3JpdHkgPSBwcm9tcHQoXCJFbnRlciBwcmlvcml0eSAoaGlnaCwgbWVkaXVtLCBsb3cpIG9mIHRhc2tcIiwgXCJOQVwiKTtcbiAgICBsZXQgcHJvamVjdCA9IHByb21wdChcIkVudGVyIHByb2plY3Qgb2YgdGFza1wiLCBcIk5BXCIpOyAgXG4gICAgc2V0VGl0bGUobmFtZSk7XG4gICAgc2V0RGVzY3JpcHRpb24oZGVzYyk7XG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKTtcbiAgICBzZXRQcmlvcml0eShwcmlvcml0eSk7XG4gICAgc2V0UHJvamVjdChwcm9qZWN0KTtcbiAgfVxuXG4gIGxldCBzZXRTdGF0dXMgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgZG9uZSA9IHN0YXR1cztcbiAgfVxuXG4gIGxldCBnZXRTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvbmU7XG4gIH1cblxuICBsZXQgY2hhbmdlU3RhdHVzID0gZnVuY3Rpb24gKCkge1xuICAgIGRvbmUgPSAhZG9uZTtcbiAgfVxuXG4gIGxldCBnZXRJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaWQ7XG4gIH1cblxuICBsZXQgdmlld0l0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiVGl0bGVcIiA6IG5hbWUsXG4gICAgICBcIkRlc2NcIiA6IHRhc2ssXG4gICAgICBcIkR1ZVwiIDogZHVlLFxuICAgICAgXCJQcmlvcml0eVwiIDogcHJpb3IsXG4gICAgICBcIlByb2plY3RcIiA6IHByb2plY3QsXG4gICAgICBcIlN0YXR1c1wiIDogZG9uZSxcbiAgICAgIFwiSURcIiA6IGlkXG4gICAgfTtcbiAgfVxuXG4gIGxldCBlcXVhbHMgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdFtcIklEXCJdID09PSB0aGlzLmdldElEKCk7O1xuICB9XG5cbiAgbGV0IGNvbnZlcnRQcmlvcml0eSA9IGZ1bmN0aW9uIChwcmlvcml0eSkge1xuICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgXCJoaWdoXCIgOiByZXR1cm4gMztcbiAgICAgIGNhc2UgXCJtZWRpdW1cIiA6IHJldHVybiAyO1xuICAgICAgY2FzZSBcImxvd1wiIDogcmV0dXJuIDE7XG4gICAgICBkZWZhdWx0IDogcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cbiAgbGV0IGNvbXBhcmVUbyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgbGV0IGRhdGUxID0gbmV3IERhdGUodGhpcy5nZXREdWVEYXRlKCkpO1xuICAgIGxldCBkYXRlMiA9IG5ldyBEYXRlKGl0ZW0uZ2V0RHVlRGF0ZSgpKTtcbiAgICBsZXQgcHJpb3JpdHkxID0gY29udmVydFByaW9yaXR5KHRoaXMuZ2V0UHJpb3JpdHkoKSksIHByaW9yaXR5MiA9IGNvbnZlcnRQcmlvcml0eShpdGVtLmdldFByaW9yaXR5KCkpO1xuICAgIGlmIChkYXRlMSA8IGRhdGUyKSBcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKChkYXRlMS5nZXRUaW1lKCkgPT09IGRhdGUyLmdldFRpbWUoKSkgJiYgKHByaW9yaXR5MSA+IHByaW9yaXR5MikpXG4gICAgICByZXR1cm4gMTtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBcbiAgICAgICAgICBnZXREdWVEYXRlLCBzZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIFxuICAgICAgICAgIGdldFByb2plY3QsIHNldFByb2plY3QsIHNldERldGFpbHMsIGdldFN0YXR1cywgc2V0U3RhdHVzLCBcbiAgICAgICAgICBjaGFuZ2VTdGF0dXMsIGdldElELCB2aWV3SXRlbSwgZXF1YWxzLCBjb21wYXJlVG99O1xufVxuXG5leHBvcnQge2NyZWF0ZUl0ZW19XG5cbiIsIi8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gbWFrZSBsaXN0c1xuaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdCgpIHtcbiAgbGV0IGxpc3QgPSBbXTtcblxuICBsZXQgYWRkSXRlbU9iamVjdCA9IGZ1bmN0aW9uICh0b0FkZCkge1xuICAgIGxldCBuZXdMaXN0ID0gW107XG4gICAgbGV0IHRvQWRkRGF0ZSA9IG5ldyBEYXRlKHRvQWRkLmdldER1ZURhdGUoKSk7XG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICBsaXN0LnB1c2godG9BZGQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaSA9IDAsIGFkZGVkID0gZmFsc2U7XG4gICAgd2hpbGUgKGkgPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgbGV0IGNvbXBhcmUgPSB0b0FkZC5jb21wYXJlVG8obGlzdFtpXSk7XG4gICAgICBpZiAoY29tcGFyZSA9PT0gMSAmJiAhYWRkZWQpIHtcbiAgICAgICAgbmV3TGlzdC5wdXNoKHRvQWRkKTtcbiAgICAgICAgYWRkZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgbmV3TGlzdC5wdXNoKGxpc3RbaV0pO1xuICAgICAgaSArPSAxO1xuICAgIH1cbiAgICBpZiAoIWFkZGVkKVxuICAgICAgbmV3TGlzdC5wdXNoKHRvQWRkKTtcbiAgICBsaXN0ID0gbmV3TGlzdDtcbiAgfVxuXG4gIGxldCBhZGRJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVJdGVtKCk7XG4gICAgaXRlbS5zZXREZXRhaWxzKCk7XG4gICAgYWRkSXRlbU9iamVjdChpdGVtKTtcbiAgfVxuXG4gIGxldCB2aWV3TGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcmV0dXJuTGlzdCA9IFtdO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApXG4gICAgICBsaXN0LmZvckVhY2goZSA9PiByZXR1cm5MaXN0LnB1c2goZS52aWV3SXRlbSgpKSk7XG4gICAgcmV0dXJuIHJldHVybkxpc3Q7XG4gIH1cblxuICAvLyBsZXQgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICAvLyAgIGxldCBuZXdMaXN0ID0gW107XG4gIC8vICAgZm9yIChsZXQgaW5keCBpbiBsaXN0KSB7XG4gIC8vICAgICBpZiAobGlzdFtpbmR4XS5nZXRUaXRsZSgpICE9PSB0aXRsZSkge1xuICAvLyAgICAgICBuZXdMaXN0LnB1c2gobGlzdFtpbmR4XSk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIGxpc3QgPSBuZXdMaXN0O1xuICAvLyB9XG4gIGxldCByZW1vdmVJdGVtID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgbGV0IG5ld0xpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpbmR4IGluIGxpc3QpIHtcbiAgICAgIGlmIChsaXN0W2luZHhdLmdldElEKCkgIT09IGlkKSB7XG4gICAgICAgIG5ld0xpc3QucHVzaChsaXN0W2luZHhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGlzdCA9IG5ld0xpc3Q7XG4gIH1cblxuICBsZXQgZ2V0SXRlbSA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGZvciAobGV0IGluZHggaW4gbGlzdCkge1xuICAgICAgaWYgKGxpc3RbaW5keF0uZ2V0SUQoKSA9PT0gaWQpXG4gICAgICAgIHJldHVybiBsaXN0W2luZHhdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCB1cGRhdGVJdGVtID0gZnVuY3Rpb24gKG9sZERldGFpbHMsIG5ld0RldGFpbHMpIHtcbiAgICBsZXQgcHJpb3JpdHlDaGFuZ2VkID0gZmFsc2UsIHVwZGF0ZWRJdGVtID0gbnVsbDtcbiAgICBmb3IgKGxldCBpbmR4IGluIGxpc3QpIFxuICAgICAgaWYgKGxpc3RbaW5keF0uZXF1YWxzKG9sZERldGFpbHMpKSB7XG4gICAgICAgIGxldCBpdGVtID0gbGlzdFtpbmR4XTtcbiAgICAgICAgaXRlbS5zZXRUaXRsZShuZXdEZXRhaWxzW1wiVGl0bGVcIl0pO1xuICAgICAgICBpdGVtLnNldERlc2NyaXB0aW9uKG5ld0RldGFpbHNbXCJEZXNjXCJdKTtcbiAgICAgICAgaWYgKGl0ZW0uZ2V0RHVlRGF0ZSgpICE9PSBuZXdEZXRhaWxzW1wiRHVlXCJdIHx8IGl0ZW0uZ2V0UHJpb3JpdHkoKSAhPT0gbmV3RGV0YWlsc1tcIlByaW9yaXR5XCJdKVxuICAgICAgICAgIHByaW9yaXR5Q2hhbmdlZCA9IHRydWU7XG4gICAgICAgIGl0ZW0uc2V0RHVlRGF0ZShuZXdEZXRhaWxzW1wiRHVlXCJdKTtcbiAgICAgICAgaXRlbS5zZXRQcmlvcml0eShuZXdEZXRhaWxzW1wiUHJpb3JpdHlcIl0pO1xuICAgICAgICBpdGVtLnNldFByb2plY3QobmV3RGV0YWlsc1tcIlByb2plY3RcIl0pO1xuICAgICAgICB1cGRhdGVkSXRlbSA9IHsuLi5pdGVtfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocHJpb3JpdHlDaGFuZ2VkKSB7XG4gICAgICAgIC8vcmUtc29ydFxuICAgICAgICBsZXQgbmV3TGlzdCA9IFtdLCBhZGRlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpbmR4IGluIGxpc3QpIHtcbiAgICAgICAgICBpZiAobGlzdFtpbmR4XS5nZXRJRCgpICE9PSB1cGRhdGVkSXRlbS5nZXRJRCgpKSB7XG4gICAgICAgICAgICBpZiAobGlzdFtpbmR4XS5jb21wYXJlVG8odXBkYXRlZEl0ZW0pIDwgMCAmJiAhYWRkZWQpIHtcbiAgICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHVwZGF0ZWRJdGVtKTtcbiAgICAgICAgICAgICAgYWRkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChsaXN0W2luZHhdKTtcbiAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhZGRlZCkgXG4gICAgICAgICAgbmV3TGlzdC5wdXNoKHVwZGF0ZWRJdGVtKTtcbiAgICAgICAgbGlzdCA9IG5ld0xpc3Q7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHthZGRJdGVtLCBhZGRJdGVtT2JqZWN0LCByZW1vdmVJdGVtLCBnZXRJdGVtLCB2aWV3TGlzdCwgdXBkYXRlSXRlbX07XG59XG5cbmV4cG9ydCB7Y3JlYXRlTGlzdH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5kaXNwbGF5Q29udHJvbGxlcigpLnBvcHVsYXRlRGlzcGxheSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9