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
/* harmony export */   "createItem": () => (/* binding */ createItem)
/* harmony export */ });
// factory function to make items

function createItem() {
  let name, task, due, prior, project = "default", done = false;
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

  let removeItem = function (title) {
    let newList = []
    for (let indx in list) {
      if (list[indx].getTitle() === title) {
        newList = list.slice(0, indx).concat(list.slice(indx + 1, list.length));
      }
    }
    list = newList;
  }

  let getItem = function (title) {
    for (let indx in list) {
      if (list[indx].getTitle() === title)
        return list[indx];
    }
    return null;
  }
  return {addItem, removeItem, getItem, viewList};
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
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/item.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");




(0,_display__WEBPACK_IMPORTED_MODULE_2__.displayController)().populateDisplay();
function retrieveList() {
  let retrieved = JSON.parse(localStorage.getItem("userList"));
  
}

let create = prompt("Enter 1 to create a list, 2 to retrieve stored list, 3 to exit");
if (create !== "3") {
  let newList;
  if (create === "1")
    newList = (0,_list__WEBPACK_IMPORTED_MODULE_1__.createList)();
  if (create === "2") 
    newList = retrieveList();
  let add = prompt("Enter 1 to add an item to list, 2 to view, 3 to remove item, "
                    + "4 to save list, 5 to exit");
  while (add !== "5") {
    if (add === "1") 
      newList.addItem();
    if (add === "2") 
      console.log(newList.viewList());
    if (add === "3") {
      let deleteTitle = prompt("Enter title of task to delete");
      newList.removeItem(deleteTitle);
    }
    if (add === "4")
      localStorage.setItem("userList", JSON.stringify(newList));
    add = prompt("Enter 1 to add an item to list, 2 to view, 3 to remove item, "
                  + "4 to save list, 5 to exit");
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQy9EbkI7QUFDb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBVTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7Ozs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ0E7QUFDVTs7QUFFOUMsMkRBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpREFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvaXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHBvcHVsYXRlRGlzcGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiVGVzdCBCdXR0b24hXCI7XG4gICAgYm9keS5hcHBlbmRDaGlsZChidG4pO1xuICB9XG4gIHJldHVybiB7cG9wdWxhdGVEaXNwbGF5fTtcbn1cblxuZXhwb3J0IHtkaXNwbGF5Q29udHJvbGxlcn07IiwiLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBtYWtlIGl0ZW1zXG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oKSB7XG4gIGxldCBuYW1lLCB0YXNrLCBkdWUsIHByaW9yLCBwcm9qZWN0ID0gXCJkZWZhdWx0XCIsIGRvbmUgPSBmYWxzZTtcbiAgbGV0IHNldFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgbmFtZSA9IHRpdGxlO1xuICB9XG4gIGxldCBnZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBsZXQgc2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICB0YXNrID0gZGVzY3JpcHRpb247XG4gIH1cbiAgbGV0IGdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0YXNrO1xuICB9XG4gIGxldCBzZXREdWVEYXRlID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBkdWUgPSBkYXRlO1xuICB9XG4gIGxldCBnZXREdWVEYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkdWU7XG4gIH1cbiAgbGV0IHNldFByaW9yaXR5ID0gZnVuY3Rpb24gKHByaW9yaXR5KSB7XG4gICAgcHJpb3IgPSBwcmlvcml0eTtcbiAgfVxuICBsZXQgZ2V0UHJpb3JpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHByaW9yO1xuICB9XG4gIGxldCBzZXRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gICAgcHJvamVjdCA9IHByb2plY3ROYW1lO1xuICB9XG4gIGxldCBnZXRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG4gIGxldCBzZXREZXRhaWxzID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBuYW1lID0gcHJvbXB0KFwiRW50ZXIgdGl0bGUgb2YgdGFza1wiLCBcIlRpdGxlXCIpOyAgICBcbiAgICBsZXQgZGVzYyA9IHByb21wdChcIkVudGVyIGRlc2NyaXB0aW9uIG9mIHRhc2tcIiwgXCJEZXNjXCIpO1xuICAgIGxldCBkdWVEYXRlID0gcHJvbXB0KFwiRW50ZXIgZHVlIGRhdGUgb2YgdGFza1wiLCBcIjAwMDBcIik7ICAgIFxuICAgIGxldCBwcmlvcml0eSA9IHByb21wdChcIkVudGVyIHByaW9yaXR5IChoaWdoLCBtZWRpdW0sIGxvdykgb2YgdGFza1wiLCBcIk5BXCIpO1xuICAgIGxldCBwcm9qZWN0ID0gcHJvbXB0KFwiRW50ZXIgcHJvamVjdCBvZiB0YXNrXCIsIFwiTkFcIik7ICBcbiAgICBzZXRUaXRsZShuYW1lKTtcbiAgICBzZXREZXNjcmlwdGlvbihkZXNjKTtcbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpO1xuICAgIHNldFByaW9yaXR5KHByaW9yaXR5KTtcbiAgICBzZXRQcm9qZWN0KHByb2plY3QpO1xuICB9XG4gIGxldCBjaGFuZ2VTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9uZSA9ICFkb25lO1xuICB9XG4gIGxldCB2aWV3SXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJOYW1lXCIgOiBuYW1lLFxuICAgICAgXCJUYXNrXCIgOiB0YXNrLFxuICAgICAgXCJEdWUgRGF0ZVwiIDogZHVlLFxuICAgICAgXCJQcmlvcml0eVwiIDogcHJpb3IsXG4gICAgICBcIlByb2plY3RcIiA6IHByb2plY3RcbiAgICB9O1xuICB9XG4gIHJldHVybiB7Z2V0VGl0bGUsIHNldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24sIFxuICAgICAgICAgIGdldER1ZURhdGUsIHNldER1ZURhdGUsIGdldFByaW9yaXR5LCBzZXRQcmlvcml0eSwgXG4gICAgICAgICAgZ2V0UHJvamVjdCwgc2V0UHJvamVjdCwgc2V0RGV0YWlscywgY2hhbmdlU3RhdHVzLCB2aWV3SXRlbX07XG59XG5cbmV4cG9ydCB7Y3JlYXRlSXRlbX1cblxuIiwiLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBtYWtlIGxpc3RzXG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KCkge1xuICBsZXQgbGlzdCA9IFtdO1xuICBsZXQgYWRkSXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBpdGVtID0gY3JlYXRlSXRlbSgpO1xuICAgIGl0ZW0uc2V0RGV0YWlscygpOyAgXG4gICAgbGlzdC5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgbGV0IHZpZXdMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCByZXR1cm5MaXN0ID0gW107XG4gICAgaWYgKGxpc3QubGVuZ3RoID4gMClcbiAgICAgIGxpc3QuZm9yRWFjaChlID0+IHJldHVybkxpc3QucHVzaChlLnZpZXdJdGVtKCkpKTtcbiAgICByZXR1cm4gcmV0dXJuTGlzdDtcbiAgfVxuXG4gIGxldCByZW1vdmVJdGVtID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgbGV0IG5ld0xpc3QgPSBbXVxuICAgIGZvciAobGV0IGluZHggaW4gbGlzdCkge1xuICAgICAgaWYgKGxpc3RbaW5keF0uZ2V0VGl0bGUoKSA9PT0gdGl0bGUpIHtcbiAgICAgICAgbmV3TGlzdCA9IGxpc3Quc2xpY2UoMCwgaW5keCkuY29uY2F0KGxpc3Quc2xpY2UoaW5keCArIDEsIGxpc3QubGVuZ3RoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxpc3QgPSBuZXdMaXN0O1xuICB9XG5cbiAgbGV0IGdldEl0ZW0gPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICBmb3IgKGxldCBpbmR4IGluIGxpc3QpIHtcbiAgICAgIGlmIChsaXN0W2luZHhdLmdldFRpdGxlKCkgPT09IHRpdGxlKVxuICAgICAgICByZXR1cm4gbGlzdFtpbmR4XTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHthZGRJdGVtLCByZW1vdmVJdGVtLCBnZXRJdGVtLCB2aWV3TGlzdH07XG59XG5cbmV4cG9ydCB7Y3JlYXRlTGlzdH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmRpc3BsYXlDb250cm9sbGVyKCkucG9wdWxhdGVEaXNwbGF5KCk7XG5mdW5jdGlvbiByZXRyaWV2ZUxpc3QoKSB7XG4gIGxldCByZXRyaWV2ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckxpc3RcIikpO1xuICBcbn1cblxubGV0IGNyZWF0ZSA9IHByb21wdChcIkVudGVyIDEgdG8gY3JlYXRlIGEgbGlzdCwgMiB0byByZXRyaWV2ZSBzdG9yZWQgbGlzdCwgMyB0byBleGl0XCIpO1xuaWYgKGNyZWF0ZSAhPT0gXCIzXCIpIHtcbiAgbGV0IG5ld0xpc3Q7XG4gIGlmIChjcmVhdGUgPT09IFwiMVwiKVxuICAgIG5ld0xpc3QgPSBjcmVhdGVMaXN0KCk7XG4gIGlmIChjcmVhdGUgPT09IFwiMlwiKSBcbiAgICBuZXdMaXN0ID0gcmV0cmlldmVMaXN0KCk7XG4gIGxldCBhZGQgPSBwcm9tcHQoXCJFbnRlciAxIHRvIGFkZCBhbiBpdGVtIHRvIGxpc3QsIDIgdG8gdmlldywgMyB0byByZW1vdmUgaXRlbSwgXCJcbiAgICAgICAgICAgICAgICAgICAgKyBcIjQgdG8gc2F2ZSBsaXN0LCA1IHRvIGV4aXRcIik7XG4gIHdoaWxlIChhZGQgIT09IFwiNVwiKSB7XG4gICAgaWYgKGFkZCA9PT0gXCIxXCIpIFxuICAgICAgbmV3TGlzdC5hZGRJdGVtKCk7XG4gICAgaWYgKGFkZCA9PT0gXCIyXCIpIFxuICAgICAgY29uc29sZS5sb2cobmV3TGlzdC52aWV3TGlzdCgpKTtcbiAgICBpZiAoYWRkID09PSBcIjNcIikge1xuICAgICAgbGV0IGRlbGV0ZVRpdGxlID0gcHJvbXB0KFwiRW50ZXIgdGl0bGUgb2YgdGFzayB0byBkZWxldGVcIik7XG4gICAgICBuZXdMaXN0LnJlbW92ZUl0ZW0oZGVsZXRlVGl0bGUpO1xuICAgIH1cbiAgICBpZiAoYWRkID09PSBcIjRcIilcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlckxpc3RcIiwgSlNPTi5zdHJpbmdpZnkobmV3TGlzdCkpO1xuICAgIGFkZCA9IHByb21wdChcIkVudGVyIDEgdG8gYWRkIGFuIGl0ZW0gdG8gbGlzdCwgMiB0byB2aWV3LCAzIHRvIHJlbW92ZSBpdGVtLCBcIlxuICAgICAgICAgICAgICAgICAgKyBcIjQgdG8gc2F2ZSBsaXN0LCA1IHRvIGV4aXRcIik7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=