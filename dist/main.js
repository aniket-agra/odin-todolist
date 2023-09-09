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

  return {getTitle, setTitle, getDescription, setDescription, 
          getDueDate, setDueDate, getPriority, setPriority, 
          getProject, setProject, setDetails, getStatus, setStatus, 
          changeStatus, getID, viewItem, equals};
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
  let convertPriority = function (priority) {
    switch (priority) {
      case "high" : return 3;
      case "medium" : return 2;
      case "low" : return 1;
      default : return 0;
    }
  }

  let compareItems = function (item1, item2) {
    let date1 = new Date(item1.getDueDate());
    let date2 = new Date(item2.getDueDate());
    let priority1 = convertPriority(item1.getPriority()), priority2 = convertPriority(item2.getPriority());
    if (date1 < date2) 
      return 1;
    else if ((date1.getTime() === date2.getTime()) && (priority1 > priority2))
      return 1;
    return -1;
  }

  let addItemObject = function (toAdd) {
    let newList = [];
    let toAddDate = new Date(toAdd.getDueDate());
    if (list.length === 0) {
      list.push(toAdd);
      return;
    }
    let i = 0, added = false;
    while (i < list.length) {
      let compare = compareItems(toAdd, list[i]);
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
    let priorityChanged = false;
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
        break;
      }
      if (priorityChanged) {
        //re-sort
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGbkI7QUFDb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixpREFBVTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7Ozs7Ozs7O1VDMUdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBb0M7QUFDQTtBQUNVO0FBQzFCOztBQUVwQiwyREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWluLWhlaWdodDogOTV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCA1NywgNTcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTM2LCAyNTUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMTM2LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEzNiwgMjU1LCAwLjczNik7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAxMzYsIDI1NSwgMC41KTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMDU7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDM1JTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1OSwgMjMxLCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU5LCAyMzEsIDI1NSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIHJvdy1nYXAgOiAwLjVyZW07XFxufVxcblxcbmxhYmVsIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmlucHV0IHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlID0gXFxcImRhdGVcXFwiXSwgaW5wdXRbdHlwZSA9IFxcXCJ0ZXh0XFxcIl0ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5wcmlvcml0eUxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdyA6IDcgLyA4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmVudHJ5IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG59XFxuXFxuZm9ybSA+IGJ1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uc3RhcnRQYWdlQnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDRyZW07XFxufVxcblxcbi5zdGFydFBhZ2VCdG5zID4gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubGlzdEJ0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCA1NywgNTcpO1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjM3LCAxOTcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uaXRlbTpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMjAsIDEyMCk7XFxufVxcblxcbi5oaWdoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyMCwgMTIwLCAwLjY1KTtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MCwgODcpO1xcbn1cXG5cXG4ubWVkaXVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE5MCwgODcsIDAuNjUpO1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNywgMTc1LCAxMTcpO1xcbn1cXG5cXG4ubG93OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTcsIDE3NSwgMTE3LCAwLjY1KTtcXG59XFxuXFxuLmRlbEl0ZW0ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWluLWhlaWdodDogOTV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCA1NywgNTcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTM2LCAyNTUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMTM2LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEzNiwgMjU1LCAwLjczNik7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAxMzYsIDI1NSwgMC41KTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMDU7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDM1JTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1OSwgMjMxLCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU5LCAyMzEsIDI1NSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIHJvdy1nYXAgOiAwLjVyZW07XFxufVxcblxcbmxhYmVsIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmlucHV0IHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlID0gXFxcImRhdGVcXFwiXSwgaW5wdXRbdHlwZSA9IFxcXCJ0ZXh0XFxcIl0ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5wcmlvcml0eUxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdyA6IDcgLyA4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmVudHJ5IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG59XFxuXFxuZm9ybSA+IGJ1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uc3RhcnRQYWdlQnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDRyZW07XFxufVxcblxcbi5zdGFydFBhZ2VCdG5zID4gYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubGlzdEJ0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCA1NywgNTcpO1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjM3LCAxOTcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uaXRlbTpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMjAsIDEyMCk7XFxufVxcblxcbi5oaWdoOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyMCwgMTIwLCAwLjY1KTtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MCwgODcpO1xcbn1cXG5cXG4ubWVkaXVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE5MCwgODcsIDAuNjUpO1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNywgMTc1LCAxMTcpO1xcbn1cXG5cXG4ubG93OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTcsIDE3NSwgMTE3LCAwLjY1KTtcXG59XFxuXFxuLmRlbEl0ZW0ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBuZXdMaXN0LCBtb2RlLCBvbGREZXRhaWxzID0ge307XG5cbiAgZnVuY3Rpb24gcmV0cmlldmVMaXN0KCkge1xuICAgIGxldCByZXRyaWV2ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckxpc3RcIikpO1xuICAgIGlmIChyZXRyaWV2ZWQgPT09IG51bGwpXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBlbHNlIHtcbiAgICAgIGxldCByZXRyaWV2ZWRMaXN0ID0gY3JlYXRlTGlzdCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXRyaWV2ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBjcmVhdGVJdGVtKCk7XG4gICAgICAgIGl0ZW0uc2V0VGl0bGUocmV0cmlldmVkW2ldW1wiVGl0bGVcIl0pO1xuICAgICAgICBpdGVtLnNldERlc2NyaXB0aW9uKHJldHJpZXZlZFtpXVtcIkRlc2NcIl0pO1xuICAgICAgICBpdGVtLnNldER1ZURhdGUocmV0cmlldmVkW2ldW1wiRHVlXCJdKTtcbiAgICAgICAgaXRlbS5zZXRQcmlvcml0eShyZXRyaWV2ZWRbaV1bXCJQcmlvcml0eVwiXSk7XG4gICAgICAgIGl0ZW0uc2V0UHJvamVjdChyZXRyaWV2ZWRbaV1bXCJQcm9qZWN0XCJdKTtcbiAgICAgICAgaXRlbS5zZXRTdGF0dXMocmV0cmlldmVkW2ldW1wiU3RhdHVzXCJdKTtcbiAgICAgICAgcmV0cmlldmVkTGlzdC5hZGRJdGVtT2JqZWN0KGl0ZW0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHJpZXZlZExpc3Q7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcG9wdWxhdGVGb3JtKGl0ZW0pIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gaXRlbSkge1xuICAgICAgaWYgKGtleSAhPT0gXCJTdGF0dXNcIiAmJiBrZXkgIT09IFwiUHJpb3JpdHlcIiAmJiBrZXkgIT09IFwiSURcIikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dCMke2tleS50b0xvd2VyQ2FzZSgpfWApLnZhbHVlID0gaXRlbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNzdGF0dXMnKS5jaGVja2VkID0gaXRlbVtcIlN0YXR1c1wiXTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dC4ke2l0ZW1bXCJQcmlvcml0eVwiXX1gKS5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlMaXN0KCkge1xuICAgIGlmIChuZXdMaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gO1xuICAgIGxldCBsaXN0ID0gbmV3TGlzdC52aWV3TGlzdCgpO1xuICAgIGNvbnNvbGUubG9nKGxpc3QpO1xuICAgIGxldCBsaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0XCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdCA+ICpcIikuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICAgIGZvciAobGV0IGluZHggaW4gbGlzdCkge1xuICAgICAgbGV0IGl0ZW0gPSBsaXN0W2luZHhdO1xuICAgICAgbGV0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiLCBgJHtpdGVtW1wiUHJpb3JpdHlcIl19YCk7XG4gICAgICBpdGVtRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgbW9kZSA9IFwiZWRpdFwiO1xuICAgICAgICBvbGREZXRhaWxzID0gaXRlbTtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIHBvcHVsYXRlRm9ybShpdGVtKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJvZHkgPiAqXCIpLmZvckVhY2gocyA9PiBzLnN0eWxlLm9wYWNpdHkgPSBcIjUwJVwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjEwMCVcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICB9KTtcbiAgICAgIGxldCBpdGVtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpdGVtRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlXCIpO1xuICAgICAgaXRlbURhdGUudGV4dENvbnRlbnQgPSBpdGVtW1wiRHVlXCJdO1xuICAgICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbVtcIlRpdGxlXCJdO1xuICAgICAgbGV0IGRlbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGVsSXRlbS5jbGFzc0xpc3QuYWRkKFwiZGVsSXRlbVwiLCBcIm1hdGVyaWFsLWljb25zXCIpO1xuICAgICAgZGVsSXRlbS50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG4gICAgICBkZWxJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIG5ld0xpc3QucmVtb3ZlSXRlbShpdGVtW1wiSURcIl0pO1xuICAgICAgICBkaXNwbGF5TGlzdCgpO1xuICAgICAgfSk7XG4gICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1EYXRlKTtcbiAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChkZWxJdGVtKTtcbiAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGl0ZW1bXCJQcm9qZWN0XCJdO1xuICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlzdCAuJHtwcm9qZWN0TmFtZX1gKTtcbiAgICAgIGlmIChwcm9qZWN0RGl2ID09PSBudWxsKSB7XG4gICAgICAgIHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIsIGAke3Byb2plY3ROYW1lfWApO1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7cHJvamVjdE5hbWV9YDtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGl0bGVcIik7XG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbiAgICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAgIH1cbiAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0Rm9ybURlZmF1bHQoKSB7XG4gICAgbGV0IGRhdGVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2R1ZVwiKTtcbiAgICBsZXQgbW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxO1xuICAgIG1vbnRoID0gbW9udGggPCAxMCA/IGAwJHttb250aH1gIDogbW9udGg7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbiAgICBkYXRlID0gZGF0ZSA8IDEwID8gYDAke2RhdGV9YCA6IGRhdGU7XG4gICAgbGV0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgZGF0ZUVsZW0udmFsdWUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjdGl0bGVcIikudmFsdWUgPSBcIlRpdGxlXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2Rlc2NcIikudmFsdWUgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3Byb2plY3RcIikudmFsdWUgPSBcIkRlZmF1bHRcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjc3RhdHVzXCIpLnZhbHVlID0gXCJkb25lXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0dXNcIikuY2hlY2tlZCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCNwcmlvcml0eVwiKS5mb3JFYWNoKGUgPT4gZS5jaGVja2VkID0gZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaG9va0Zvcm0oKSB7XG4gICAgbGV0IGZvcm1FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgc2V0Rm9ybURlZmF1bHQoKTtcbiAgICBmb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW0pLCB1c2VySW5wdXQgPSB7fTtcbiAgICAgIGZvciAobGV0IHBhaXIgb2YgZm9ybURhdGEpXG4gICAgICAgIHVzZXJJbnB1dFtwYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgICAvLyB1c2VySW5wdXRbXCJTdGF0dXNcIl0gPSB1c2VySW5wdXRbXCJTdGF0dXNcIl0gPT09IFwiZG9uZVwiO1xuICAgICAgaWYgKG1vZGUgPT09IFwiYWRkXCIpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBjcmVhdGVJdGVtKCk7XG4gICAgICAgIGl0ZW0uc2V0VGl0bGUodXNlcklucHV0W1wiVGl0bGVcIl0pO1xuICAgICAgICBpdGVtLnNldERlc2NyaXB0aW9uKHVzZXJJbnB1dFtcIkRlc2NcIl0pO1xuICAgICAgICBpdGVtLnNldER1ZURhdGUodXNlcklucHV0W1wiRHVlXCJdKTtcbiAgICAgICAgaXRlbS5zZXRQcmlvcml0eSh1c2VySW5wdXRbXCJQcmlvcml0eVwiXSk7XG4gICAgICAgIGl0ZW0uc2V0U3RhdHVzKHVzZXJJbnB1dFtcIlN0YXR1c1wiXSA9PT0gXCJkb25lXCIpO1xuICAgICAgICBpdGVtLnNldFByb2plY3QodXNlcklucHV0W1wiUHJvamVjdFwiXSk7XG4gICAgICAgIG5ld0xpc3QuYWRkSXRlbU9iamVjdChpdGVtKTtcbiAgICAgICAgbW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgZGlzcGxheUxpc3QoKTtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RlID09PSBcImVkaXRcIikge1xuICAgICAgICBuZXdMaXN0LnVwZGF0ZUl0ZW0ob2xkRGV0YWlscywgdXNlcklucHV0KTtcbiAgICAgICAgb2xkRGV0YWlscyA9IHt9O1xuICAgICAgICBtb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICBkaXNwbGF5TGlzdCgpO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJvZHkgPiAqXCIpLmZvckVhY2gocyA9PiBzLnN0eWxlLm9wYWNpdHkgPSBcIjEwMCVcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIHNldEZvcm1EZWZhdWx0KCk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBwb3B1bGF0ZURpc3BsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgYnRuRGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuRGl2MS5jbGFzc0xpc3QuYWRkKFwic3RhcnRQYWdlQnRuc1wiKTtcbiAgICBsZXQgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGVCdG4udGV4dENvbnRlbnQgPSAgXCJDcmVhdGUgTmV3IExpc3RcIjtcbiAgICBidG5EaXYxLmFwcGVuZENoaWxkKGNyZWF0ZUJ0bik7XG4gICAgbGV0IHJldHJpZXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXRyaWV2ZUJ0bi50ZXh0Q29udGVudCA9ICBcIlJldHJpZXZlIExpc3QgZnJvbSBMb2NhbCBTdG9yYWdlXCI7XG4gICAgYnRuRGl2MS5hcHBlbmRDaGlsZChyZXRyaWV2ZUJ0bik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChidG5EaXYxKTtcbiAgICBsZXQgbGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlzdERpdi5jbGFzc0xpc3QuYWRkKFwibGlzdFwiLCBcImhpZGRlblwiKTtcbiAgICBsZXQgYnRuRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuRGl2Mi5jbGFzc0xpc3QuYWRkKFwibGlzdEJ0bnNcIiwgXCJoaWRkZW5cIik7XG4gICAgbGV0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEl0ZW1CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgaXRlbVwiO1xuICAgIGxldCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gXCJTYXZlIExpc3RcIjtcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBzdG9yZWQgbGlzdFwiO1xuICAgIGxldCBleGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBleGl0QnRuLnRleHRDb250ZW50ID0gXCJFeGl0XCI7XG4gICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbmV3TGlzdCA9IGNyZWF0ZUxpc3QoKTtcbiAgICAgIGJ0bkRpdjEuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIGJ0bkRpdjIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIGxpc3REaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgICByZXRyaWV2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIG5ld0xpc3QgPSByZXRyaWV2ZUxpc3QoKTtcbiAgICAgIGlmIChuZXdMaXN0ID09PSBudWxsKSBcbiAgICAgICAgYWxlcnQoXCJTb3JyeSwgbm8gc3RvcmVkIGxpc3QgZm91bmQuIFBsZWFzZSBjcmVhdGUgYSBuZXcgbGlzdC5cIik7XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGlzcGxheUxpc3QoKTtcbiAgICAgICAgYnRuRGl2MS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBidG5EaXYyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGxpc3REaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbW9kZSA9IFwiYWRkXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYm9keSA+ICpcIikuZm9yRWFjaChzID0+IHMuc3R5bGUub3BhY2l0eSA9IFwiNTAlXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjEwMCVcIjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJMaXN0XCIsIEpTT04uc3RyaW5naWZ5KG5ld0xpc3Qudmlld0xpc3QoKSkpO1xuICAgIH0pO1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlckxpc3RcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3QgPiAqXCIpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKTtcbiAgICAgIGJ0bkRpdjEuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIGJ0bkRpdjIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIGxpc3REaXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgICBleGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0ID4gKlwiKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XG4gICAgICBidG5EaXYxLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICBsaXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBidG5EaXYyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gICAgYnRuRGl2Mi5hcHBlbmRDaGlsZChhZGRJdGVtQnRuKTtcbiAgICBidG5EaXYyLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICAgIGJ0bkRpdjIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBidG5EaXYyLmFwcGVuZENoaWxkKGV4aXRCdG4pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYnRuRGl2Mik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChsaXN0RGl2KTtcbiAgICBob29rRm9ybSgpO1xuICB9XG4gIFxuICByZXR1cm4ge3BvcHVsYXRlRGlzcGxheX07XG59XG5cbmV4cG9ydCB7ZGlzcGxheUNvbnRyb2xsZXJ9OyIsIi8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gbWFrZSBpdGVtc1xuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKCkge1xuICBsZXQgbmFtZSwgdGFzaywgZHVlLCBwcmlvciwgcHJvamVjdCA9IFwiZGVmYXVsdFwiLCBkb25lID0gZmFsc2UsIGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgbGV0IHNldFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgbmFtZSA9IHRpdGxlO1xuICB9XG4gIGxldCBnZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBsZXQgc2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICB0YXNrID0gZGVzY3JpcHRpb247XG4gIH1cbiAgbGV0IGdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0YXNrO1xuICB9XG4gIGxldCBzZXREdWVEYXRlID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBkdWUgPSBkYXRlO1xuICB9XG4gIGxldCBnZXREdWVEYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkdWU7XG4gIH1cbiAgbGV0IHNldFByaW9yaXR5ID0gZnVuY3Rpb24gKHByaW9yaXR5KSB7XG4gICAgcHJpb3IgPSBwcmlvcml0eTtcbiAgfVxuICBsZXQgZ2V0UHJpb3JpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHByaW9yO1xuICB9XG4gIGxldCBzZXRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gICAgcHJvamVjdCA9IHByb2plY3ROYW1lO1xuICB9XG4gIGxldCBnZXRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG4gIGxldCBzZXREZXRhaWxzID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBuYW1lID0gcHJvbXB0KFwiRW50ZXIgdGl0bGUgb2YgdGFza1wiLCBcIlRpdGxlXCIpOyAgICBcbiAgICBsZXQgZGVzYyA9IHByb21wdChcIkVudGVyIGRlc2NyaXB0aW9uIG9mIHRhc2tcIiwgXCJEZXNjXCIpO1xuICAgIGxldCBkdWVEYXRlID0gcHJvbXB0KFwiRW50ZXIgZHVlIGRhdGUgb2YgdGFzayAoRERNTVlZWSlcIiwgXCIwMDAwMDBcIik7ICAgIFxuICAgIGxldCBwcmlvcml0eSA9IHByb21wdChcIkVudGVyIHByaW9yaXR5IChoaWdoLCBtZWRpdW0sIGxvdykgb2YgdGFza1wiLCBcIk5BXCIpO1xuICAgIGxldCBwcm9qZWN0ID0gcHJvbXB0KFwiRW50ZXIgcHJvamVjdCBvZiB0YXNrXCIsIFwiTkFcIik7ICBcbiAgICBzZXRUaXRsZShuYW1lKTtcbiAgICBzZXREZXNjcmlwdGlvbihkZXNjKTtcbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpO1xuICAgIHNldFByaW9yaXR5KHByaW9yaXR5KTtcbiAgICBzZXRQcm9qZWN0KHByb2plY3QpO1xuICB9XG5cbiAgbGV0IHNldFN0YXR1cyA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICBkb25lID0gc3RhdHVzO1xuICB9XG5cbiAgbGV0IGdldFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZG9uZTtcbiAgfVxuXG4gIGxldCBjaGFuZ2VTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9uZSA9ICFkb25lO1xuICB9XG5cbiAgbGV0IGdldElEID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpZDtcbiAgfVxuXG4gIGxldCB2aWV3SXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJUaXRsZVwiIDogbmFtZSxcbiAgICAgIFwiRGVzY1wiIDogdGFzayxcbiAgICAgIFwiRHVlXCIgOiBkdWUsXG4gICAgICBcIlByaW9yaXR5XCIgOiBwcmlvcixcbiAgICAgIFwiUHJvamVjdFwiIDogcHJvamVjdCxcbiAgICAgIFwiU3RhdHVzXCIgOiBkb25lLFxuICAgICAgXCJJRFwiIDogaWRcbiAgICB9O1xuICB9XG5cbiAgbGV0IGVxdWFscyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0W1wiSURcIl0gPT09IHRoaXMuZ2V0SUQoKTs7XG4gIH1cblxuICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBcbiAgICAgICAgICBnZXREdWVEYXRlLCBzZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIFxuICAgICAgICAgIGdldFByb2plY3QsIHNldFByb2plY3QsIHNldERldGFpbHMsIGdldFN0YXR1cywgc2V0U3RhdHVzLCBcbiAgICAgICAgICBjaGFuZ2VTdGF0dXMsIGdldElELCB2aWV3SXRlbSwgZXF1YWxzfTtcbn1cblxuZXhwb3J0IHtjcmVhdGVJdGVtfVxuXG4iLCIvLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIG1ha2UgbGlzdHNcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QoKSB7XG4gIGxldCBsaXN0ID0gW107XG4gIGxldCBjb252ZXJ0UHJpb3JpdHkgPSBmdW5jdGlvbiAocHJpb3JpdHkpIHtcbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICBjYXNlIFwiaGlnaFwiIDogcmV0dXJuIDM7XG4gICAgICBjYXNlIFwibWVkaXVtXCIgOiByZXR1cm4gMjtcbiAgICAgIGNhc2UgXCJsb3dcIiA6IHJldHVybiAxO1xuICAgICAgZGVmYXVsdCA6IHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIGxldCBjb21wYXJlSXRlbXMgPSBmdW5jdGlvbiAoaXRlbTEsIGl0ZW0yKSB7XG4gICAgbGV0IGRhdGUxID0gbmV3IERhdGUoaXRlbTEuZ2V0RHVlRGF0ZSgpKTtcbiAgICBsZXQgZGF0ZTIgPSBuZXcgRGF0ZShpdGVtMi5nZXREdWVEYXRlKCkpO1xuICAgIGxldCBwcmlvcml0eTEgPSBjb252ZXJ0UHJpb3JpdHkoaXRlbTEuZ2V0UHJpb3JpdHkoKSksIHByaW9yaXR5MiA9IGNvbnZlcnRQcmlvcml0eShpdGVtMi5nZXRQcmlvcml0eSgpKTtcbiAgICBpZiAoZGF0ZTEgPCBkYXRlMikgXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmICgoZGF0ZTEuZ2V0VGltZSgpID09PSBkYXRlMi5nZXRUaW1lKCkpICYmIChwcmlvcml0eTEgPiBwcmlvcml0eTIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgbGV0IGFkZEl0ZW1PYmplY3QgPSBmdW5jdGlvbiAodG9BZGQpIHtcbiAgICBsZXQgbmV3TGlzdCA9IFtdO1xuICAgIGxldCB0b0FkZERhdGUgPSBuZXcgRGF0ZSh0b0FkZC5nZXREdWVEYXRlKCkpO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgbGlzdC5wdXNoKHRvQWRkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGkgPSAwLCBhZGRlZCA9IGZhbHNlO1xuICAgIHdoaWxlIChpIDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgIGxldCBjb21wYXJlID0gY29tcGFyZUl0ZW1zKHRvQWRkLCBsaXN0W2ldKTtcbiAgICAgIGlmIChjb21wYXJlID09PSAxICYmICFhZGRlZCkge1xuICAgICAgICBuZXdMaXN0LnB1c2godG9BZGQpO1xuICAgICAgICBhZGRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBuZXdMaXN0LnB1c2gobGlzdFtpXSk7XG4gICAgICBpICs9IDE7XG4gICAgfVxuICAgIGlmICghYWRkZWQpXG4gICAgICBuZXdMaXN0LnB1c2godG9BZGQpO1xuICAgIGxpc3QgPSBuZXdMaXN0O1xuICB9XG5cbiAgbGV0IGFkZEl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaXRlbSA9IGNyZWF0ZUl0ZW0oKTtcbiAgICBpdGVtLnNldERldGFpbHMoKTtcbiAgICBhZGRJdGVtT2JqZWN0KGl0ZW0pO1xuICB9XG5cbiAgbGV0IHZpZXdMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCByZXR1cm5MaXN0ID0gW107XG4gICAgaWYgKGxpc3QubGVuZ3RoID4gMClcbiAgICAgIGxpc3QuZm9yRWFjaChlID0+IHJldHVybkxpc3QucHVzaChlLnZpZXdJdGVtKCkpKTtcbiAgICByZXR1cm4gcmV0dXJuTGlzdDtcbiAgfVxuXG4gIC8vIGxldCByZW1vdmVJdGVtID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gIC8vICAgbGV0IG5ld0xpc3QgPSBbXTtcbiAgLy8gICBmb3IgKGxldCBpbmR4IGluIGxpc3QpIHtcbiAgLy8gICAgIGlmIChsaXN0W2luZHhdLmdldFRpdGxlKCkgIT09IHRpdGxlKSB7XG4gIC8vICAgICAgIG5ld0xpc3QucHVzaChsaXN0W2luZHhdKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgbGlzdCA9IG5ld0xpc3Q7XG4gIC8vIH1cbiAgbGV0IHJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBsZXQgbmV3TGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGluZHggaW4gbGlzdCkge1xuICAgICAgaWYgKGxpc3RbaW5keF0uZ2V0SUQoKSAhPT0gaWQpIHtcbiAgICAgICAgbmV3TGlzdC5wdXNoKGxpc3RbaW5keF0pO1xuICAgICAgfVxuICAgIH1cbiAgICBsaXN0ID0gbmV3TGlzdDtcbiAgfVxuXG4gIGxldCBnZXRJdGVtID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgZm9yIChsZXQgaW5keCBpbiBsaXN0KSB7XG4gICAgICBpZiAobGlzdFtpbmR4XS5nZXRJRCgpID09PSBpZClcbiAgICAgICAgcmV0dXJuIGxpc3RbaW5keF07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IHVwZGF0ZUl0ZW0gPSBmdW5jdGlvbiAob2xkRGV0YWlscywgbmV3RGV0YWlscykge1xuICAgIGxldCBwcmlvcml0eUNoYW5nZWQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpbmR4IGluIGxpc3QpIFxuICAgICAgaWYgKGxpc3RbaW5keF0uZXF1YWxzKG9sZERldGFpbHMpKSB7XG4gICAgICAgIGxldCBpdGVtID0gbGlzdFtpbmR4XTtcbiAgICAgICAgaXRlbS5zZXRUaXRsZShuZXdEZXRhaWxzW1wiVGl0bGVcIl0pO1xuICAgICAgICBpdGVtLnNldERlc2NyaXB0aW9uKG5ld0RldGFpbHNbXCJEZXNjXCJdKTtcbiAgICAgICAgaWYgKGl0ZW0uZ2V0RHVlRGF0ZSgpICE9PSBuZXdEZXRhaWxzW1wiRHVlXCJdIHx8IGl0ZW0uZ2V0UHJpb3JpdHkoKSAhPT0gbmV3RGV0YWlsc1tcIlByaW9yaXR5XCJdKVxuICAgICAgICAgIHByaW9yaXR5Q2hhbmdlZCA9IHRydWU7XG4gICAgICAgIGl0ZW0uc2V0RHVlRGF0ZShuZXdEZXRhaWxzW1wiRHVlXCJdKTtcbiAgICAgICAgaXRlbS5zZXRQcmlvcml0eShuZXdEZXRhaWxzW1wiUHJpb3JpdHlcIl0pO1xuICAgICAgICBpdGVtLnNldFByb2plY3QobmV3RGV0YWlsc1tcIlByb2plY3RcIl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChwcmlvcml0eUNoYW5nZWQpIHtcbiAgICAgICAgLy9yZS1zb3J0XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHthZGRJdGVtLCBhZGRJdGVtT2JqZWN0LCByZW1vdmVJdGVtLCBnZXRJdGVtLCB2aWV3TGlzdCwgdXBkYXRlSXRlbX07XG59XG5cbmV4cG9ydCB7Y3JlYXRlTGlzdH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5kaXNwbGF5Q29udHJvbGxlcigpLnBvcHVsYXRlRGlzcGxheSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9