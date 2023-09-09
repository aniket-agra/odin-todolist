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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZuQjtBQUNvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGlEQUFVO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7Ozs7Ozs7VUMxR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNBO0FBQ1U7QUFDMUI7O0FBRXBCLDJEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvaXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiA5NXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDU3LCA1Nyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzYsIDI1NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAxMzYsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTM2LCAyNTUsIDAuNzM2KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDEzNiwgMjU1LCAwLjUpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogMS4wNTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgbGVmdDogMzUlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU5LCAyMzEsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDIzMSwgMjU1KTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgcm93LWdhcCA6IDAuNXJlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuaW5wdXQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbmlucHV0W3R5cGUgPSBcXFwiZGF0ZVxcXCJdLCBpbnB1dFt0eXBlID0gXFxcInRleHRcXFwiXSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnByaW9yaXR5TGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93IDogNyAvIDg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZW50cnkge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbn1cXG5cXG5mb3JtID4gYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi5zdGFydFBhZ2VCdG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG59XFxuXFxuLnN0YXJ0UGFnZUJ0bnMgPiBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5saXN0QnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDU3LCA1Nyk7XFxufVxcblxcbi5saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzcsIDE5Nyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5pdGVtOmxhc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEyMCwgMTIwKTtcXG59XFxuXFxuLmhpZ2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTIwLCAxMjAsIDAuNjUpO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkwLCA4Nyk7XFxufVxcblxcbi5tZWRpdW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTkwLCA4NywgMC42NSk7XFxufVxcblxcbi5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxNzUsIDExNyk7XFxufVxcblxcbi5sb3c6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNywgMTc1LCAxMTcsIDAuNjUpO1xcbn1cXG5cXG4uZGVsSXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiA5NXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDU3LCA1Nyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzYsIDI1NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAxMzYsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTM2LCAyNTUsIDAuNzM2KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDEzNiwgMjU1LCAwLjUpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogMS4wNTtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1JTtcXG4gICAgbGVmdDogMzUlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU5LCAyMzEsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDIzMSwgMjU1KTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgY29sdW1uLWdhcDogMXJlbTtcXG4gICAgcm93LWdhcCA6IDAuNXJlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuaW5wdXQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbmlucHV0W3R5cGUgPSBcXFwiZGF0ZVxcXCJdLCBpbnB1dFt0eXBlID0gXFxcInRleHRcXFwiXSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnByaW9yaXR5TGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93IDogNyAvIDg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZW50cnkge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbn1cXG5cXG5mb3JtID4gYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi5zdGFydFBhZ2VCdG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG59XFxuXFxuLnN0YXJ0UGFnZUJ0bnMgPiBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5saXN0QnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDU3LCA1Nyk7XFxufVxcblxcbi5saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzcsIDE5Nyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5pdGVtOmxhc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEyMCwgMTIwKTtcXG59XFxuXFxuLmhpZ2g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTIwLCAxMjAsIDAuNjUpO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkwLCA4Nyk7XFxufVxcblxcbi5tZWRpdW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTkwLCA4NywgMC42NSk7XFxufVxcblxcbi5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxNzUsIDExNyk7XFxufVxcblxcbi5sb3c6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNywgMTc1LCAxMTcsIDAuNjUpO1xcbn1cXG5cXG4uZGVsSXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUxpc3QgfSBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IG5ld0xpc3QsIG1vZGUsIG9sZERldGFpbHMgPSB7fTtcblxuICBmdW5jdGlvbiByZXRyaWV2ZUxpc3QoKSB7XG4gICAgbGV0IHJldHJpZXZlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTGlzdFwiKSk7XG4gICAgaWYgKHJldHJpZXZlZCA9PT0gbnVsbClcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGVsc2Uge1xuICAgICAgbGV0IHJldHJpZXZlZExpc3QgPSBjcmVhdGVMaXN0KCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldHJpZXZlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaXRlbSA9IGNyZWF0ZUl0ZW0oKTtcbiAgICAgICAgaXRlbS5zZXRUaXRsZShyZXRyaWV2ZWRbaV1bXCJUaXRsZVwiXSk7XG4gICAgICAgIGl0ZW0uc2V0RGVzY3JpcHRpb24ocmV0cmlldmVkW2ldW1wiRGVzY1wiXSk7XG4gICAgICAgIGl0ZW0uc2V0RHVlRGF0ZShyZXRyaWV2ZWRbaV1bXCJEdWVcIl0pO1xuICAgICAgICBpdGVtLnNldFByaW9yaXR5KHJldHJpZXZlZFtpXVtcIlByaW9yaXR5XCJdKTtcbiAgICAgICAgaXRlbS5zZXRQcm9qZWN0KHJldHJpZXZlZFtpXVtcIlByb2plY3RcIl0pO1xuICAgICAgICBpdGVtLnNldFN0YXR1cyhyZXRyaWV2ZWRbaV1bXCJTdGF0dXNcIl0pO1xuICAgICAgICByZXRyaWV2ZWRMaXN0LmFkZEl0ZW1PYmplY3QoaXRlbSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0cmlldmVkTGlzdDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwb3B1bGF0ZUZvcm0oaXRlbSkge1xuICAgIGZvciAobGV0IGtleSBpbiBpdGVtKSB7XG4gICAgICBpZiAoa2V5ICE9PSBcIlN0YXR1c1wiICYmIGtleSAhPT0gXCJQcmlvcml0eVwiICYmIGtleSAhPT0gXCJJRFwiKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0IyR7a2V5LnRvTG93ZXJDYXNlKCl9YCkudmFsdWUgPSBpdGVtW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3N0YXR1cycpLmNoZWNrZWQgPSBpdGVtW1wiU3RhdHVzXCJdO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0LiR7aXRlbVtcIlByaW9yaXR5XCJdfWApLmNoZWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUxpc3QoKSB7XG4gICAgaWYgKG5ld0xpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiA7XG4gICAgbGV0IGxpc3QgPSBuZXdMaXN0LnZpZXdMaXN0KCk7XG4gICAgY29uc29sZS5sb2cobGlzdCk7XG4gICAgbGV0IGxpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0ID4gKlwiKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XG4gICAgZm9yIChsZXQgaW5keCBpbiBsaXN0KSB7XG4gICAgICBsZXQgaXRlbSA9IGxpc3RbaW5keF07XG4gICAgICBsZXQgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIsIGAke2l0ZW1bXCJQcmlvcml0eVwiXX1gKTtcbiAgICAgIGl0ZW1EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBtb2RlID0gXCJlZGl0XCI7XG4gICAgICAgIG9sZERldGFpbHMgPSBpdGVtO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgcG9wdWxhdGVGb3JtKGl0ZW0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IGl0ZW1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGl0ZW1EYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG4gICAgICBpdGVtRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW1bXCJEdWVcIl07XG4gICAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtW1wiVGl0bGVcIl07XG4gICAgICBsZXQgZGVsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkZWxJdGVtLmNsYXNzTGlzdC5hZGQoXCJkZWxJdGVtXCIsIFwibWF0ZXJpYWwtaWNvbnNcIik7XG4gICAgICBkZWxJdGVtLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICAgIGRlbEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgbmV3TGlzdC5yZW1vdmVJdGVtKGl0ZW1bXCJJRFwiXSk7XG4gICAgICAgIGRpc3BsYXlMaXN0KCk7XG4gICAgICB9KTtcbiAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbURhdGUpO1xuICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGRlbEl0ZW0pO1xuICAgICAgbGV0IHByb2plY3ROYW1lID0gaXRlbVtcIlByb2plY3RcIl07XG4gICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saXN0IC4ke3Byb2plY3ROYW1lfWApO1xuICAgICAgaWYgKHByb2plY3REaXYgPT09IG51bGwpIHtcbiAgICAgICAgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIiwgYCR7cHJvamVjdE5hbWV9YCk7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgUHJvamVjdDogJHtwcm9qZWN0TmFtZX1gO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RUaXRsZVwiKTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGl0ZW1EaXYpO1xuICAgICAgICBsaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgICAgfVxuICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRGb3JtRGVmYXVsdCgpIHtcbiAgICBsZXQgZGF0ZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZHVlXCIpO1xuICAgIGxldCBtb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XG4gICAgbW9udGggPSBtb250aCA8IDEwID8gYDAke21vbnRofWAgOiBtb250aDtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICAgIGRhdGUgPSBkYXRlIDwgMTAgPyBgMCR7ZGF0ZX1gIDogZGF0ZTtcbiAgICBsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBkYXRlRWxlbS52YWx1ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCN0aXRsZVwiKS52YWx1ZSA9IFwiVGl0bGVcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZGVzY1wiKS52YWx1ZSA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjcHJvamVjdFwiKS52YWx1ZSA9IFwiRGVmYXVsdFwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNzdGF0dXNcIikudmFsdWUgPSBcImRvbmVcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXR1c1wiKS5jaGVja2VkID0gZmFsc2U7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0I3ByaW9yaXR5XCIpLmZvckVhY2goZSA9PiBlLmNoZWNrZWQgPSBmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBob29rRm9ybSgpIHtcbiAgICBsZXQgZm9ybUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBzZXRGb3JtRGVmYXVsdCgpO1xuICAgIGZvcm1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtRWxlbSksIHVzZXJJbnB1dCA9IHt9O1xuICAgICAgZm9yIChsZXQgcGFpciBvZiBmb3JtRGF0YSlcbiAgICAgICAgdXNlcklucHV0W3BhaXJbMF1dID0gcGFpclsxXTtcbiAgICAgIC8vIHVzZXJJbnB1dFtcIlN0YXR1c1wiXSA9IHVzZXJJbnB1dFtcIlN0YXR1c1wiXSA9PT0gXCJkb25lXCI7XG4gICAgICBpZiAobW9kZSA9PT0gXCJhZGRcIikge1xuICAgICAgICBsZXQgaXRlbSA9IGNyZWF0ZUl0ZW0oKTtcbiAgICAgICAgaXRlbS5zZXRUaXRsZSh1c2VySW5wdXRbXCJUaXRsZVwiXSk7XG4gICAgICAgIGl0ZW0uc2V0RGVzY3JpcHRpb24odXNlcklucHV0W1wiRGVzY1wiXSk7XG4gICAgICAgIGl0ZW0uc2V0RHVlRGF0ZSh1c2VySW5wdXRbXCJEdWVcIl0pO1xuICAgICAgICBpdGVtLnNldFByaW9yaXR5KHVzZXJJbnB1dFtcIlByaW9yaXR5XCJdKTtcbiAgICAgICAgaXRlbS5zZXRTdGF0dXModXNlcklucHV0W1wiU3RhdHVzXCJdID09PSBcImRvbmVcIik7XG4gICAgICAgIGl0ZW0uc2V0UHJvamVjdCh1c2VySW5wdXRbXCJQcm9qZWN0XCJdKTtcbiAgICAgICAgbmV3TGlzdC5hZGRJdGVtT2JqZWN0KGl0ZW0pO1xuICAgICAgICBtb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICBkaXNwbGF5TGlzdCgpO1xuICAgICAgfVxuICAgICAgaWYgKG1vZGUgPT09IFwiZWRpdFwiKSB7XG4gICAgICAgIG5ld0xpc3QudXBkYXRlSXRlbShvbGREZXRhaWxzLCB1c2VySW5wdXQpO1xuICAgICAgICBvbGREZXRhaWxzID0ge307XG4gICAgICAgIG1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGRpc3BsYXlMaXN0KCk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIHNldEZvcm1EZWZhdWx0KCk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBwb3B1bGF0ZURpc3BsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgYnRuRGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuRGl2MS5jbGFzc0xpc3QuYWRkKFwic3RhcnRQYWdlQnRuc1wiKTtcbiAgICBsZXQgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGVCdG4udGV4dENvbnRlbnQgPSAgXCJDcmVhdGUgTmV3IExpc3RcIjtcbiAgICBidG5EaXYxLmFwcGVuZENoaWxkKGNyZWF0ZUJ0bik7XG4gICAgbGV0IHJldHJpZXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXRyaWV2ZUJ0bi50ZXh0Q29udGVudCA9ICBcIlJldHJpZXZlIExpc3QgZnJvbSBMb2NhbCBTdG9yYWdlXCI7XG4gICAgYnRuRGl2MS5hcHBlbmRDaGlsZChyZXRyaWV2ZUJ0bik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChidG5EaXYxKTtcbiAgICBsZXQgbGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlzdERpdi5jbGFzc0xpc3QuYWRkKFwibGlzdFwiLCBcImhpZGRlblwiKTtcbiAgICBsZXQgYnRuRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuRGl2Mi5jbGFzc0xpc3QuYWRkKFwibGlzdEJ0bnNcIiwgXCJoaWRkZW5cIik7XG4gICAgbGV0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEl0ZW1CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgaXRlbVwiO1xuICAgIGxldCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gXCJTYXZlIExpc3RcIjtcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBzdG9yZWQgbGlzdFwiO1xuICAgIGxldCBleGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBleGl0QnRuLnRleHRDb250ZW50ID0gXCJFeGl0XCI7XG4gICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbmV3TGlzdCA9IGNyZWF0ZUxpc3QoKTtcbiAgICAgIGJ0bkRpdjEuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIGJ0bkRpdjIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIGxpc3REaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgICByZXRyaWV2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIG5ld0xpc3QgPSByZXRyaWV2ZUxpc3QoKTtcbiAgICAgIGlmIChuZXdMaXN0ID09PSBudWxsKSBcbiAgICAgICAgYWxlcnQoXCJTb3JyeSwgbm8gc3RvcmVkIGxpc3QgZm91bmQuIFBsZWFzZSBjcmVhdGUgYSBuZXcgbGlzdC5cIik7XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGlzcGxheUxpc3QoKTtcbiAgICAgICAgYnRuRGl2MS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBidG5EaXYyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGxpc3REaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbW9kZSA9IFwiYWRkXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyTGlzdFwiLCBKU09OLnN0cmluZ2lmeShuZXdMaXN0LnZpZXdMaXN0KCkpKTtcbiAgICB9KTtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJMaXN0XCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0ID4gKlwiKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XG4gICAgICBidG5EaXYxLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICBidG5EaXYyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBsaXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gICAgZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdCA+ICpcIikuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICAgICAgYnRuRGl2MS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgbGlzdERpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgYnRuRGl2Mi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICAgIGJ0bkRpdjIuYXBwZW5kQ2hpbGQoYWRkSXRlbUJ0bik7XG4gICAgYnRuRGl2Mi5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgICBidG5EaXYyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgYnRuRGl2Mi5hcHBlbmRDaGlsZChleGl0QnRuKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJ0bkRpdjIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobGlzdERpdik7XG4gICAgaG9va0Zvcm0oKTtcbiAgfVxuICBcbiAgcmV0dXJuIHtwb3B1bGF0ZURpc3BsYXl9O1xufVxuXG5leHBvcnQge2Rpc3BsYXlDb250cm9sbGVyfTsiLCIvLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIG1ha2UgaXRlbXNcblxuZnVuY3Rpb24gY3JlYXRlSXRlbSgpIHtcbiAgbGV0IG5hbWUsIHRhc2ssIGR1ZSwgcHJpb3IsIHByb2plY3QgPSBcImRlZmF1bHRcIiwgZG9uZSA9IGZhbHNlLCBpZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gIGxldCBzZXRUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgIG5hbWUgPSB0aXRsZTtcbiAgfVxuICBsZXQgZ2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbiAgbGV0IHNldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgdGFzayA9IGRlc2NyaXB0aW9uO1xuICB9XG4gIGxldCBnZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuICBsZXQgc2V0RHVlRGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgZHVlID0gZGF0ZTtcbiAgfVxuICBsZXQgZ2V0RHVlRGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZHVlO1xuICB9XG4gIGxldCBzZXRQcmlvcml0eSA9IGZ1bmN0aW9uIChwcmlvcml0eSkge1xuICAgIHByaW9yID0gcHJpb3JpdHk7XG4gIH1cbiAgbGV0IGdldFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcmlvcjtcbiAgfVxuICBsZXQgc2V0UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xuICAgIHByb2plY3QgPSBwcm9qZWN0TmFtZTtcbiAgfVxuICBsZXQgZ2V0UHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxuICBsZXQgc2V0RGV0YWlscyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbmFtZSA9IHByb21wdChcIkVudGVyIHRpdGxlIG9mIHRhc2tcIiwgXCJUaXRsZVwiKTsgICAgXG4gICAgbGV0IGRlc2MgPSBwcm9tcHQoXCJFbnRlciBkZXNjcmlwdGlvbiBvZiB0YXNrXCIsIFwiRGVzY1wiKTtcbiAgICBsZXQgZHVlRGF0ZSA9IHByb21wdChcIkVudGVyIGR1ZSBkYXRlIG9mIHRhc2sgKERETU1ZWVkpXCIsIFwiMDAwMDAwXCIpOyAgICBcbiAgICBsZXQgcHJpb3JpdHkgPSBwcm9tcHQoXCJFbnRlciBwcmlvcml0eSAoaGlnaCwgbWVkaXVtLCBsb3cpIG9mIHRhc2tcIiwgXCJOQVwiKTtcbiAgICBsZXQgcHJvamVjdCA9IHByb21wdChcIkVudGVyIHByb2plY3Qgb2YgdGFza1wiLCBcIk5BXCIpOyAgXG4gICAgc2V0VGl0bGUobmFtZSk7XG4gICAgc2V0RGVzY3JpcHRpb24oZGVzYyk7XG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKTtcbiAgICBzZXRQcmlvcml0eShwcmlvcml0eSk7XG4gICAgc2V0UHJvamVjdChwcm9qZWN0KTtcbiAgfVxuXG4gIGxldCBzZXRTdGF0dXMgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgZG9uZSA9IHN0YXR1cztcbiAgfVxuXG4gIGxldCBnZXRTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvbmU7XG4gIH1cblxuICBsZXQgY2hhbmdlU3RhdHVzID0gZnVuY3Rpb24gKCkge1xuICAgIGRvbmUgPSAhZG9uZTtcbiAgfVxuXG4gIGxldCBnZXRJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaWQ7XG4gIH1cblxuICBsZXQgdmlld0l0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiVGl0bGVcIiA6IG5hbWUsXG4gICAgICBcIkRlc2NcIiA6IHRhc2ssXG4gICAgICBcIkR1ZVwiIDogZHVlLFxuICAgICAgXCJQcmlvcml0eVwiIDogcHJpb3IsXG4gICAgICBcIlByb2plY3RcIiA6IHByb2plY3QsXG4gICAgICBcIlN0YXR1c1wiIDogZG9uZSxcbiAgICAgIFwiSURcIiA6IGlkXG4gICAgfTtcbiAgfVxuXG4gIGxldCBlcXVhbHMgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdFtcIklEXCJdID09PSB0aGlzLmdldElEKCk7O1xuICB9XG5cbiAgcmV0dXJuIHtnZXRUaXRsZSwgc2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgXG4gICAgICAgICAgZ2V0RHVlRGF0ZSwgc2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBcbiAgICAgICAgICBnZXRQcm9qZWN0LCBzZXRQcm9qZWN0LCBzZXREZXRhaWxzLCBnZXRTdGF0dXMsIHNldFN0YXR1cywgXG4gICAgICAgICAgY2hhbmdlU3RhdHVzLCBnZXRJRCwgdmlld0l0ZW0sIGVxdWFsc307XG59XG5cbmV4cG9ydCB7Y3JlYXRlSXRlbX1cblxuIiwiLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBtYWtlIGxpc3RzXG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KCkge1xuICBsZXQgbGlzdCA9IFtdO1xuICBsZXQgY29udmVydFByaW9yaXR5ID0gZnVuY3Rpb24gKHByaW9yaXR5KSB7XG4gICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgY2FzZSBcImhpZ2hcIiA6IHJldHVybiAzO1xuICAgICAgY2FzZSBcIm1lZGl1bVwiIDogcmV0dXJuIDI7XG4gICAgICBjYXNlIFwibG93XCIgOiByZXR1cm4gMTtcbiAgICAgIGRlZmF1bHQgOiByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICBsZXQgY29tcGFyZUl0ZW1zID0gZnVuY3Rpb24gKGl0ZW0xLCBpdGVtMikge1xuICAgIGxldCBkYXRlMSA9IG5ldyBEYXRlKGl0ZW0xLmdldER1ZURhdGUoKSk7XG4gICAgbGV0IGRhdGUyID0gbmV3IERhdGUoaXRlbTIuZ2V0RHVlRGF0ZSgpKTtcbiAgICBsZXQgcHJpb3JpdHkxID0gY29udmVydFByaW9yaXR5KGl0ZW0xLmdldFByaW9yaXR5KCkpLCBwcmlvcml0eTIgPSBjb252ZXJ0UHJpb3JpdHkoaXRlbTIuZ2V0UHJpb3JpdHkoKSk7XG4gICAgaWYgKGRhdGUxIDwgZGF0ZTIpIFxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoKGRhdGUxLmdldFRpbWUoKSA9PT0gZGF0ZTIuZ2V0VGltZSgpKSAmJiAocHJpb3JpdHkxID4gcHJpb3JpdHkyKSlcbiAgICAgIHJldHVybiAxO1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGxldCBhZGRJdGVtT2JqZWN0ID0gZnVuY3Rpb24gKHRvQWRkKSB7XG4gICAgbGV0IG5ld0xpc3QgPSBbXTtcbiAgICBsZXQgdG9BZGREYXRlID0gbmV3IERhdGUodG9BZGQuZ2V0RHVlRGF0ZSgpKTtcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIGxpc3QucHVzaCh0b0FkZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpID0gMCwgYWRkZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAoaSA8IGxpc3QubGVuZ3RoKSB7XG4gICAgICBsZXQgY29tcGFyZSA9IGNvbXBhcmVJdGVtcyh0b0FkZCwgbGlzdFtpXSk7XG4gICAgICBpZiAoY29tcGFyZSA9PT0gMSAmJiAhYWRkZWQpIHtcbiAgICAgICAgbmV3TGlzdC5wdXNoKHRvQWRkKTtcbiAgICAgICAgYWRkZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgbmV3TGlzdC5wdXNoKGxpc3RbaV0pO1xuICAgICAgaSArPSAxO1xuICAgIH1cbiAgICBpZiAoIWFkZGVkKVxuICAgICAgbmV3TGlzdC5wdXNoKHRvQWRkKTtcbiAgICBsaXN0ID0gbmV3TGlzdDtcbiAgfVxuXG4gIGxldCBhZGRJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVJdGVtKCk7XG4gICAgaXRlbS5zZXREZXRhaWxzKCk7XG4gICAgYWRkSXRlbU9iamVjdChpdGVtKTtcbiAgfVxuXG4gIGxldCB2aWV3TGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcmV0dXJuTGlzdCA9IFtdO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApXG4gICAgICBsaXN0LmZvckVhY2goZSA9PiByZXR1cm5MaXN0LnB1c2goZS52aWV3SXRlbSgpKSk7XG4gICAgcmV0dXJuIHJldHVybkxpc3Q7XG4gIH1cblxuICAvLyBsZXQgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICAvLyAgIGxldCBuZXdMaXN0ID0gW107XG4gIC8vICAgZm9yIChsZXQgaW5keCBpbiBsaXN0KSB7XG4gIC8vICAgICBpZiAobGlzdFtpbmR4XS5nZXRUaXRsZSgpICE9PSB0aXRsZSkge1xuICAvLyAgICAgICBuZXdMaXN0LnB1c2gobGlzdFtpbmR4XSk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIGxpc3QgPSBuZXdMaXN0O1xuICAvLyB9XG4gIGxldCByZW1vdmVJdGVtID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgbGV0IG5ld0xpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpbmR4IGluIGxpc3QpIHtcbiAgICAgIGlmIChsaXN0W2luZHhdLmdldElEKCkgIT09IGlkKSB7XG4gICAgICAgIG5ld0xpc3QucHVzaChsaXN0W2luZHhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGlzdCA9IG5ld0xpc3Q7XG4gIH1cblxuICBsZXQgZ2V0SXRlbSA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGZvciAobGV0IGluZHggaW4gbGlzdCkge1xuICAgICAgaWYgKGxpc3RbaW5keF0uZ2V0SUQoKSA9PT0gaWQpXG4gICAgICAgIHJldHVybiBsaXN0W2luZHhdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCB1cGRhdGVJdGVtID0gZnVuY3Rpb24gKG9sZERldGFpbHMsIG5ld0RldGFpbHMpIHtcbiAgICBsZXQgcHJpb3JpdHlDaGFuZ2VkID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaW5keCBpbiBsaXN0KSBcbiAgICAgIGlmIChsaXN0W2luZHhdLmVxdWFscyhvbGREZXRhaWxzKSkge1xuICAgICAgICBsZXQgaXRlbSA9IGxpc3RbaW5keF07XG4gICAgICAgIGl0ZW0uc2V0VGl0bGUobmV3RGV0YWlsc1tcIlRpdGxlXCJdKTtcbiAgICAgICAgaXRlbS5zZXREZXNjcmlwdGlvbihuZXdEZXRhaWxzW1wiRGVzY1wiXSk7XG4gICAgICAgIGlmIChpdGVtLmdldER1ZURhdGUoKSAhPT0gbmV3RGV0YWlsc1tcIkR1ZVwiXSB8fCBpdGVtLmdldFByaW9yaXR5KCkgIT09IG5ld0RldGFpbHNbXCJQcmlvcml0eVwiXSlcbiAgICAgICAgICBwcmlvcml0eUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICBpdGVtLnNldER1ZURhdGUobmV3RGV0YWlsc1tcIkR1ZVwiXSk7XG4gICAgICAgIGl0ZW0uc2V0UHJpb3JpdHkobmV3RGV0YWlsc1tcIlByaW9yaXR5XCJdKTtcbiAgICAgICAgaXRlbS5zZXRQcm9qZWN0KG5ld0RldGFpbHNbXCJQcm9qZWN0XCJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocHJpb3JpdHlDaGFuZ2VkKSB7XG4gICAgICAgIC8vcmUtc29ydFxuICAgICAgfVxuICB9XG4gIHJldHVybiB7YWRkSXRlbSwgYWRkSXRlbU9iamVjdCwgcmVtb3ZlSXRlbSwgZ2V0SXRlbSwgdmlld0xpc3QsIHVwZGF0ZUl0ZW19O1xufVxuXG5leHBvcnQge2NyZWF0ZUxpc3R9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IGNyZWF0ZUxpc3QgfSBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuZGlzcGxheUNvbnRyb2xsZXIoKS5wb3B1bGF0ZURpc3BsYXkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==