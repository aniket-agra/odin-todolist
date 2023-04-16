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
  let name, task, due, prior, project;
  let setTitle = function (title) {
    name = title;
  }
  let setDescription = function (description) {
    task = description;
  }
  let setDueDate = function (date) {
    due = date;
  }
  let setPriority = function (priority) {
    prior = priority;
  }
  let setProject = function (projectName) {
    project = projectName;
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
  let viewItem = function () {
    return {
      "Name" : name,
      "Task" : task,
      "Due Date" : due,
      "Priority" : prior,
      "Project" : project
    };
  }
  return {setTitle, setDescription, setDueDate, setPriority, setProject, setDetails, viewItem};
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
    if (list.length > 0)
      list.forEach(e => console.log(e.viewItem()));
    else
      return list;
  }
  // removeItem(item)
  // getItem(someID)
  return {addItem, viewList};
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
  let add = prompt("Enter 1 to add an item to list, 2 to view , 3 to exit");
  while (add !== "3") {
    if (add === "1") 
      newList.addItem();
    if (add === "2") 
      newList.viewList();
    add = prompt("Enter 1 to add an item to list, 2 to view , 3 to exit");
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQzNDbkI7QUFDb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7Ozs7OztVQ25CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVwQztBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIG1ha2UgaXRlbXNcblxuZnVuY3Rpb24gY3JlYXRlSXRlbSgpIHtcbiAgbGV0IG5hbWUsIHRhc2ssIGR1ZSwgcHJpb3IsIHByb2plY3Q7XG4gIGxldCBzZXRUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgIG5hbWUgPSB0aXRsZTtcbiAgfVxuICBsZXQgc2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICB0YXNrID0gZGVzY3JpcHRpb247XG4gIH1cbiAgbGV0IHNldER1ZURhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIGR1ZSA9IGRhdGU7XG4gIH1cbiAgbGV0IHNldFByaW9yaXR5ID0gZnVuY3Rpb24gKHByaW9yaXR5KSB7XG4gICAgcHJpb3IgPSBwcmlvcml0eTtcbiAgfVxuICBsZXQgc2V0UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xuICAgIHByb2plY3QgPSBwcm9qZWN0TmFtZTtcbiAgfVxuICBsZXQgc2V0RGV0YWlscyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbmFtZSA9IHByb21wdChcIkVudGVyIHRpdGxlIG9mIHRhc2tcIiwgXCJUaXRsZVwiKTsgICAgXG4gICAgbGV0IGRlc2MgPSBwcm9tcHQoXCJFbnRlciBkZXNjcmlwdGlvbiBvZiB0YXNrXCIsIFwiRGVzY1wiKTtcbiAgICBsZXQgZHVlRGF0ZSA9IHByb21wdChcIkVudGVyIGR1ZSBkYXRlIG9mIHRhc2tcIiwgXCIwMDAwXCIpOyAgICBcbiAgICBsZXQgcHJpb3JpdHkgPSBwcm9tcHQoXCJFbnRlciBwcmlvcml0eSAoaGlnaCwgbWVkaXVtLCBsb3cpIG9mIHRhc2tcIiwgXCJOQVwiKTtcbiAgICBsZXQgcHJvamVjdCA9IHByb21wdChcIkVudGVyIHByb2plY3Qgb2YgdGFza1wiLCBcIk5BXCIpOyAgXG4gICAgc2V0VGl0bGUobmFtZSk7XG4gICAgc2V0RGVzY3JpcHRpb24oZGVzYyk7XG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKTtcbiAgICBzZXRQcmlvcml0eShwcmlvcml0eSk7XG4gICAgc2V0UHJvamVjdChwcm9qZWN0KTtcbiAgfVxuICBsZXQgdmlld0l0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiTmFtZVwiIDogbmFtZSxcbiAgICAgIFwiVGFza1wiIDogdGFzayxcbiAgICAgIFwiRHVlIERhdGVcIiA6IGR1ZSxcbiAgICAgIFwiUHJpb3JpdHlcIiA6IHByaW9yLFxuICAgICAgXCJQcm9qZWN0XCIgOiBwcm9qZWN0XG4gICAgfTtcbiAgfVxuICByZXR1cm4ge3NldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0RHVlRGF0ZSwgc2V0UHJpb3JpdHksIHNldFByb2plY3QsIHNldERldGFpbHMsIHZpZXdJdGVtfTtcbn1cblxuZXhwb3J0IHtjcmVhdGVJdGVtfVxuXG4iLCIvLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIG1ha2UgbGlzdHNcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QoKSB7XG4gIGxldCBsaXN0ID0gW107XG4gIGxldCBhZGRJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVJdGVtKCk7XG4gICAgaXRlbS5zZXREZXRhaWxzKCk7ICBcbiAgICBsaXN0LnB1c2goaXRlbSk7XG4gIH1cbiAgbGV0IHZpZXdMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApXG4gICAgICBsaXN0LmZvckVhY2goZSA9PiBjb25zb2xlLmxvZyhlLnZpZXdJdGVtKCkpKTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gbGlzdDtcbiAgfVxuICAvLyByZW1vdmVJdGVtKGl0ZW0pXG4gIC8vIGdldEl0ZW0oc29tZUlEKVxuICByZXR1cm4ge2FkZEl0ZW0sIHZpZXdMaXN0fTtcbn1cblxuZXhwb3J0IHtjcmVhdGVMaXN0fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcblxubGV0IGNyZWF0ZSA9IHByb21wdChcIkVudGVyIDEgdG8gY3JlYXRlIGEgbGlzdCwgMiB0byBkbyBub3RoaW5nXCIpO1xuaWYgKGNyZWF0ZSA9PT0gXCIxXCIpIHtcbiAgbGV0IG5ld0xpc3QgPSBjcmVhdGVMaXN0KCk7XG4gIGxldCBhZGQgPSBwcm9tcHQoXCJFbnRlciAxIHRvIGFkZCBhbiBpdGVtIHRvIGxpc3QsIDIgdG8gdmlldyAsIDMgdG8gZXhpdFwiKTtcbiAgd2hpbGUgKGFkZCAhPT0gXCIzXCIpIHtcbiAgICBpZiAoYWRkID09PSBcIjFcIikgXG4gICAgICBuZXdMaXN0LmFkZEl0ZW0oKTtcbiAgICBpZiAoYWRkID09PSBcIjJcIikgXG4gICAgICBuZXdMaXN0LnZpZXdMaXN0KCk7XG4gICAgYWRkID0gcHJvbXB0KFwiRW50ZXIgMSB0byBhZGQgYW4gaXRlbSB0byBsaXN0LCAyIHRvIHZpZXcgLCAzIHRvIGV4aXRcIik7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=