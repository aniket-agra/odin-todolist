/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  let name, task, due, prior, project, done = false;
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
    let dueDate = prompt("Enter due date of task", "0000");    
    let priority = prompt("Enter priority (high, medium, low) of task", "NA");
    let project = prompt("Enter project of task", "NA");  
    setTitle(name);
    setDescription(desc);
    setDueDate(dueDate);
    setPriority(priority);
    setProject(project);
  }
  let changeStatus = function () {
    done = !done;
  }
  let viewItem = function () {
    return {
      "Name" : name,
      "Task" : task,
      "Due Date" : due,
      "Priority" : prior,
      "Project" : project
    };
  }
  return {getTitle, setTitle, getDescription, setDescription, 
          getDueDate, setDueDate, getPriority, setPriority, 
          getProject, setProject, setDetails, changeStatus, viewItem};
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
  let addItem = function () {
    const item = (0,_item__WEBPACK_IMPORTED_MODULE_0__.createItem)();
    item.setDetails();  
    list.push(item);
  }
  let viewList = function () {
    let returnList = [];
    if (list.length > 0)
      list.forEach(e => returnList.push(e.viewItem()));
    return returnList;
  }

  let removeItem = function(title) {
    let newList = []
    for (let indx in list) {
      if (list[indx].getTitle() === title) {
        newList = list.slice(0, indx).concat(list.slice(indx + 1, list.length));
      }
    }
    list = newList;
  }
  // getItem(someID)
  return {addItem, removeItem, viewList};
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/list.js");


let create = prompt("Enter 1 to create a list, 2 to do nothing");
if (create === "1") {
  let newList = (0,_list__WEBPACK_IMPORTED_MODULE_0__.createList)();
  let add = prompt("Enter 1 to add an item to list, 2 to view, 3 to remove item, 4 to exit");
  while (add !== "4") {
    if (add === "1") 
      newList.addItem();
    if (add === "2") 
      console.log(newList.viewList());
    if (add === "3") {
      let deleteTitle = prompt("Enter title of task to delete");
      newList.removeItem(deleteTitle);
    }
    add = prompt("Enter 1 to add an item to list, 2 to view, 3 to remove item, 4 to exit");
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRG5CO0FBQ29DOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaURBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVwQztBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gbWFrZSBpdGVtc1xuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKCkge1xuICBsZXQgbmFtZSwgdGFzaywgZHVlLCBwcmlvciwgcHJvamVjdCwgZG9uZSA9IGZhbHNlO1xuICBsZXQgc2V0VGl0bGUgPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICBuYW1lID0gdGl0bGU7XG4gIH1cbiAgbGV0IGdldFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuYW1lO1xuICB9XG4gIGxldCBzZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xuICAgIHRhc2sgPSBkZXNjcmlwdGlvbjtcbiAgfVxuICBsZXQgZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cbiAgbGV0IHNldER1ZURhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIGR1ZSA9IGRhdGU7XG4gIH1cbiAgbGV0IGdldER1ZURhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGR1ZTtcbiAgfVxuICBsZXQgc2V0UHJpb3JpdHkgPSBmdW5jdGlvbiAocHJpb3JpdHkpIHtcbiAgICBwcmlvciA9IHByaW9yaXR5O1xuICB9XG4gIGxldCBnZXRQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcHJpb3I7XG4gIH1cbiAgbGV0IHNldFByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgICBwcm9qZWN0ID0gcHJvamVjdE5hbWU7XG4gIH1cbiAgbGV0IGdldFByb2plY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbiAgbGV0IHNldERldGFpbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG5hbWUgPSBwcm9tcHQoXCJFbnRlciB0aXRsZSBvZiB0YXNrXCIsIFwiVGl0bGVcIik7ICAgIFxuICAgIGxldCBkZXNjID0gcHJvbXB0KFwiRW50ZXIgZGVzY3JpcHRpb24gb2YgdGFza1wiLCBcIkRlc2NcIik7XG4gICAgbGV0IGR1ZURhdGUgPSBwcm9tcHQoXCJFbnRlciBkdWUgZGF0ZSBvZiB0YXNrXCIsIFwiMDAwMFwiKTsgICAgXG4gICAgbGV0IHByaW9yaXR5ID0gcHJvbXB0KFwiRW50ZXIgcHJpb3JpdHkgKGhpZ2gsIG1lZGl1bSwgbG93KSBvZiB0YXNrXCIsIFwiTkFcIik7XG4gICAgbGV0IHByb2plY3QgPSBwcm9tcHQoXCJFbnRlciBwcm9qZWN0IG9mIHRhc2tcIiwgXCJOQVwiKTsgIFxuICAgIHNldFRpdGxlKG5hbWUpO1xuICAgIHNldERlc2NyaXB0aW9uKGRlc2MpO1xuICAgIHNldER1ZURhdGUoZHVlRGF0ZSk7XG4gICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpO1xuICAgIHNldFByb2plY3QocHJvamVjdCk7XG4gIH1cbiAgbGV0IGNoYW5nZVN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb25lID0gIWRvbmU7XG4gIH1cbiAgbGV0IHZpZXdJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcIk5hbWVcIiA6IG5hbWUsXG4gICAgICBcIlRhc2tcIiA6IHRhc2ssXG4gICAgICBcIkR1ZSBEYXRlXCIgOiBkdWUsXG4gICAgICBcIlByaW9yaXR5XCIgOiBwcmlvcixcbiAgICAgIFwiUHJvamVjdFwiIDogcHJvamVjdFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtnZXRUaXRsZSwgc2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiwgXG4gICAgICAgICAgZ2V0RHVlRGF0ZSwgc2V0RHVlRGF0ZSwgZ2V0UHJpb3JpdHksIHNldFByaW9yaXR5LCBcbiAgICAgICAgICBnZXRQcm9qZWN0LCBzZXRQcm9qZWN0LCBzZXREZXRhaWxzLCBjaGFuZ2VTdGF0dXMsIHZpZXdJdGVtfTtcbn1cblxuZXhwb3J0IHtjcmVhdGVJdGVtfVxuXG4iLCIvLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIG1ha2UgbGlzdHNcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QoKSB7XG4gIGxldCBsaXN0ID0gW107XG4gIGxldCBhZGRJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVJdGVtKCk7XG4gICAgaXRlbS5zZXREZXRhaWxzKCk7ICBcbiAgICBsaXN0LnB1c2goaXRlbSk7XG4gIH1cbiAgbGV0IHZpZXdMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCByZXR1cm5MaXN0ID0gW107XG4gICAgaWYgKGxpc3QubGVuZ3RoID4gMClcbiAgICAgIGxpc3QuZm9yRWFjaChlID0+IHJldHVybkxpc3QucHVzaChlLnZpZXdJdGVtKCkpKTtcbiAgICByZXR1cm4gcmV0dXJuTGlzdDtcbiAgfVxuXG4gIGxldCByZW1vdmVJdGVtID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICBsZXQgbmV3TGlzdCA9IFtdXG4gICAgZm9yIChsZXQgaW5keCBpbiBsaXN0KSB7XG4gICAgICBpZiAobGlzdFtpbmR4XS5nZXRUaXRsZSgpID09PSB0aXRsZSkge1xuICAgICAgICBuZXdMaXN0ID0gbGlzdC5zbGljZSgwLCBpbmR4KS5jb25jYXQobGlzdC5zbGljZShpbmR4ICsgMSwgbGlzdC5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGlzdCA9IG5ld0xpc3Q7XG4gIH1cbiAgLy8gZ2V0SXRlbShzb21lSUQpXG4gIHJldHVybiB7YWRkSXRlbSwgcmVtb3ZlSXRlbSwgdmlld0xpc3R9O1xufVxuXG5leHBvcnQge2NyZWF0ZUxpc3R9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xuXG5sZXQgY3JlYXRlID0gcHJvbXB0KFwiRW50ZXIgMSB0byBjcmVhdGUgYSBsaXN0LCAyIHRvIGRvIG5vdGhpbmdcIik7XG5pZiAoY3JlYXRlID09PSBcIjFcIikge1xuICBsZXQgbmV3TGlzdCA9IGNyZWF0ZUxpc3QoKTtcbiAgbGV0IGFkZCA9IHByb21wdChcIkVudGVyIDEgdG8gYWRkIGFuIGl0ZW0gdG8gbGlzdCwgMiB0byB2aWV3LCAzIHRvIHJlbW92ZSBpdGVtLCA0IHRvIGV4aXRcIik7XG4gIHdoaWxlIChhZGQgIT09IFwiNFwiKSB7XG4gICAgaWYgKGFkZCA9PT0gXCIxXCIpIFxuICAgICAgbmV3TGlzdC5hZGRJdGVtKCk7XG4gICAgaWYgKGFkZCA9PT0gXCIyXCIpIFxuICAgICAgY29uc29sZS5sb2cobmV3TGlzdC52aWV3TGlzdCgpKTtcbiAgICBpZiAoYWRkID09PSBcIjNcIikge1xuICAgICAgbGV0IGRlbGV0ZVRpdGxlID0gcHJvbXB0KFwiRW50ZXIgdGl0bGUgb2YgdGFzayB0byBkZWxldGVcIik7XG4gICAgICBuZXdMaXN0LnJlbW92ZUl0ZW0oZGVsZXRlVGl0bGUpO1xuICAgIH1cbiAgICBhZGQgPSBwcm9tcHQoXCJFbnRlciAxIHRvIGFkZCBhbiBpdGVtIHRvIGxpc3QsIDIgdG8gdmlldywgMyB0byByZW1vdmUgaXRlbSwgNCB0byBleGl0XCIpO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9