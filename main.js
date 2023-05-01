/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


const displayController = function () {
  const populateDisplay = function () {
    let body = document.querySelector("body");
    let btn = document.createElement("button");
    btn.textContent = "Test Button!";
    body.appendChild(btn);
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
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
// factory function to make items

function Item() {
  this.project = "default", this.done = false;
}

Item.prototype.setTitle = function (title) {
  this.name = title;
}

Item.prototype.getTitle = function () {
  return this.name;
}

Item.prototype.setDescription = function (description) {
  this.task = description;
}

Item.prototype.getDescription = function () {
  return this.task;
}

Item.prototype.setDueDate = function (date) {
  this.due = date;
}

Item.prototype.getDueDate = function () {
  return this.due;
}

Item.prototype.setPriority = function (priority) {
  this.prior = priority;
}

Item.prototype.getPriority = function () {
  return this.prior;
}

Item.prototype.setProject = function (projectName) {
  this.project = projectName;
}

Item.prototype.getProject = function () {
  return this.project;
}

Item.prototype.setDetails = function () {
  this.name = prompt("Enter title of task", "Task");    
  this.desc = prompt("Enter description of task", "Do something");
  this.dueDate = prompt("Enter due date of task", "0000");    
  this.priority = prompt("Enter priority (high, medium, low) of task", "low");
  this.project = prompt("Enter project of task", "default");  
}

Item.prototype.changeStatus = function () {
  this.done = !this.done;
}

Item.prototype.viewItem = function () {
  return {
    "Name" : this.name,
    "Task" : this.task,
    "Due Date" : this.due,
    "Priority" : this.prior,
    "Project" : this.project,
    "Status" : this.done
  };
}



/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/item.js");
// factory function to make lists


function List() {
  this.list = [];
}

List.prototype.addItem = function () {
  const item = new _item__WEBPACK_IMPORTED_MODULE_0__.Item();
  item.setDetails();  
  this.list.push(item);
}

List.prototype.viewList = function () {
  let returnList = [];
  if (this.list.length > 0)
    this.list.forEach(e => returnList.push(e.viewItem()));
  return returnList;
}

List.prototype.removeItem = function (title) {
  let newList = []
  for (let indx in this.list) {
    if (this.list[indx].getTitle() === title) {
      newList = this.list.slice(0, indx).concat(this.list.slice(indx + 1, this.list.length));
    }
  }
  this.list = newList;
}

List.prototype.getItem = function (title) {
  for (let indx in this.list) {
    if (this.list[indx].getTitle() === title)
      return this.list[indx];
  }
  return null;
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
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");



(0,_display__WEBPACK_IMPORTED_MODULE_1__.displayController)().populateDisplay();
let create = prompt("Enter 1 to create a list, 2 to do nothing");
if (create === "1") {
  let newList = new _list__WEBPACK_IMPORTED_MODULE_0__.List();
  let add = prompt("Enter 1 to add an item to list, 2 to view, 3 to remove item, 4 to exit");
  while (true) {
    if (add === "1")
      newList.addItem();
    if (add === "2") 
      console.log(newList.viewList());
    if (add === "3") {
      let deleteTitle = prompt("Enter title of task to delete");
      newList.removeItem(deleteTitle);
    }
    if (add === "4") {
      localStorage.setItem("userList", JSON.stringify(newList));
      break;
    }
    add = prompt("Enter 1 to add an item to list, 2 to view, 3 to remove item, 4 to exit");
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQzhCOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsdUNBQUk7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDcENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ2dCOztBQUU5QywyREFBaUI7QUFDakI7QUFDQTtBQUNBLG9CQUFvQix1Q0FBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvbGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcG9wdWxhdGVEaXNwbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJUZXN0IEJ1dHRvbiFcIjtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJ0bik7XG4gIH1cbiAgcmV0dXJuIHtwb3B1bGF0ZURpc3BsYXl9O1xufVxuXG5leHBvcnQge2Rpc3BsYXlDb250cm9sbGVyfTsiLCIvLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIG1ha2UgaXRlbXNcblxuZnVuY3Rpb24gSXRlbSgpIHtcbiAgdGhpcy5wcm9qZWN0ID0gXCJkZWZhdWx0XCIsIHRoaXMuZG9uZSA9IGZhbHNlO1xufVxuXG5JdGVtLnByb3RvdHlwZS5zZXRUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICB0aGlzLm5hbWUgPSB0aXRsZTtcbn1cblxuSXRlbS5wcm90b3R5cGUuZ2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLm5hbWU7XG59XG5cbkl0ZW0ucHJvdG90eXBlLnNldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gIHRoaXMudGFzayA9IGRlc2NyaXB0aW9uO1xufVxuXG5JdGVtLnByb3RvdHlwZS5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMudGFzaztcbn1cblxuSXRlbS5wcm90b3R5cGUuc2V0RHVlRGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gIHRoaXMuZHVlID0gZGF0ZTtcbn1cblxuSXRlbS5wcm90b3R5cGUuZ2V0RHVlRGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZHVlO1xufVxuXG5JdGVtLnByb3RvdHlwZS5zZXRQcmlvcml0eSA9IGZ1bmN0aW9uIChwcmlvcml0eSkge1xuICB0aGlzLnByaW9yID0gcHJpb3JpdHk7XG59XG5cbkl0ZW0ucHJvdG90eXBlLmdldFByaW9yaXR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wcmlvcjtcbn1cblxuSXRlbS5wcm90b3R5cGUuc2V0UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xuICB0aGlzLnByb2plY3QgPSBwcm9qZWN0TmFtZTtcbn1cblxuSXRlbS5wcm90b3R5cGUuZ2V0UHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucHJvamVjdDtcbn1cblxuSXRlbS5wcm90b3R5cGUuc2V0RGV0YWlscyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5uYW1lID0gcHJvbXB0KFwiRW50ZXIgdGl0bGUgb2YgdGFza1wiLCBcIlRhc2tcIik7ICAgIFxuICB0aGlzLmRlc2MgPSBwcm9tcHQoXCJFbnRlciBkZXNjcmlwdGlvbiBvZiB0YXNrXCIsIFwiRG8gc29tZXRoaW5nXCIpO1xuICB0aGlzLmR1ZURhdGUgPSBwcm9tcHQoXCJFbnRlciBkdWUgZGF0ZSBvZiB0YXNrXCIsIFwiMDAwMFwiKTsgICAgXG4gIHRoaXMucHJpb3JpdHkgPSBwcm9tcHQoXCJFbnRlciBwcmlvcml0eSAoaGlnaCwgbWVkaXVtLCBsb3cpIG9mIHRhc2tcIiwgXCJsb3dcIik7XG4gIHRoaXMucHJvamVjdCA9IHByb21wdChcIkVudGVyIHByb2plY3Qgb2YgdGFza1wiLCBcImRlZmF1bHRcIik7ICBcbn1cblxuSXRlbS5wcm90b3R5cGUuY2hhbmdlU3RhdHVzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmRvbmUgPSAhdGhpcy5kb25lO1xufVxuXG5JdGVtLnByb3RvdHlwZS52aWV3SXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBcIk5hbWVcIiA6IHRoaXMubmFtZSxcbiAgICBcIlRhc2tcIiA6IHRoaXMudGFzayxcbiAgICBcIkR1ZSBEYXRlXCIgOiB0aGlzLmR1ZSxcbiAgICBcIlByaW9yaXR5XCIgOiB0aGlzLnByaW9yLFxuICAgIFwiUHJvamVjdFwiIDogdGhpcy5wcm9qZWN0LFxuICAgIFwiU3RhdHVzXCIgOiB0aGlzLmRvbmVcbiAgfTtcbn1cblxuZXhwb3J0IHtJdGVtfSIsIi8vIGZhY3RvcnkgZnVuY3Rpb24gdG8gbWFrZSBsaXN0c1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuZnVuY3Rpb24gTGlzdCgpIHtcbiAgdGhpcy5saXN0ID0gW107XG59XG5cbkxpc3QucHJvdG90eXBlLmFkZEl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbSgpO1xuICBpdGVtLnNldERldGFpbHMoKTsgIFxuICB0aGlzLmxpc3QucHVzaChpdGVtKTtcbn1cblxuTGlzdC5wcm90b3R5cGUudmlld0xpc3QgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCByZXR1cm5MaXN0ID0gW107XG4gIGlmICh0aGlzLmxpc3QubGVuZ3RoID4gMClcbiAgICB0aGlzLmxpc3QuZm9yRWFjaChlID0+IHJldHVybkxpc3QucHVzaChlLnZpZXdJdGVtKCkpKTtcbiAgcmV0dXJuIHJldHVybkxpc3Q7XG59XG5cbkxpc3QucHJvdG90eXBlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgbGV0IG5ld0xpc3QgPSBbXVxuICBmb3IgKGxldCBpbmR4IGluIHRoaXMubGlzdCkge1xuICAgIGlmICh0aGlzLmxpc3RbaW5keF0uZ2V0VGl0bGUoKSA9PT0gdGl0bGUpIHtcbiAgICAgIG5ld0xpc3QgPSB0aGlzLmxpc3Quc2xpY2UoMCwgaW5keCkuY29uY2F0KHRoaXMubGlzdC5zbGljZShpbmR4ICsgMSwgdGhpcy5saXN0Lmxlbmd0aCkpO1xuICAgIH1cbiAgfVxuICB0aGlzLmxpc3QgPSBuZXdMaXN0O1xufVxuXG5MaXN0LnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gIGZvciAobGV0IGluZHggaW4gdGhpcy5saXN0KSB7XG4gICAgaWYgKHRoaXMubGlzdFtpbmR4XS5nZXRUaXRsZSgpID09PSB0aXRsZSlcbiAgICAgIHJldHVybiB0aGlzLmxpc3RbaW5keF07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCB7TGlzdH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuZGlzcGxheUNvbnRyb2xsZXIoKS5wb3B1bGF0ZURpc3BsYXkoKTtcbmxldCBjcmVhdGUgPSBwcm9tcHQoXCJFbnRlciAxIHRvIGNyZWF0ZSBhIGxpc3QsIDIgdG8gZG8gbm90aGluZ1wiKTtcbmlmIChjcmVhdGUgPT09IFwiMVwiKSB7XG4gIGxldCBuZXdMaXN0ID0gbmV3IExpc3QoKTtcbiAgbGV0IGFkZCA9IHByb21wdChcIkVudGVyIDEgdG8gYWRkIGFuIGl0ZW0gdG8gbGlzdCwgMiB0byB2aWV3LCAzIHRvIHJlbW92ZSBpdGVtLCA0IHRvIGV4aXRcIik7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKGFkZCA9PT0gXCIxXCIpXG4gICAgICBuZXdMaXN0LmFkZEl0ZW0oKTtcbiAgICBpZiAoYWRkID09PSBcIjJcIikgXG4gICAgICBjb25zb2xlLmxvZyhuZXdMaXN0LnZpZXdMaXN0KCkpO1xuICAgIGlmIChhZGQgPT09IFwiM1wiKSB7XG4gICAgICBsZXQgZGVsZXRlVGl0bGUgPSBwcm9tcHQoXCJFbnRlciB0aXRsZSBvZiB0YXNrIHRvIGRlbGV0ZVwiKTtcbiAgICAgIG5ld0xpc3QucmVtb3ZlSXRlbShkZWxldGVUaXRsZSk7XG4gICAgfVxuICAgIGlmIChhZGQgPT09IFwiNFwiKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJMaXN0XCIsIEpTT04uc3RyaW5naWZ5KG5ld0xpc3QpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBhZGQgPSBwcm9tcHQoXCJFbnRlciAxIHRvIGFkZCBhbiBpdGVtIHRvIGxpc3QsIDIgdG8gdmlldywgMyB0byByZW1vdmUgaXRlbSwgNCB0byBleGl0XCIpO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9