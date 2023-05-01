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

  let setStatus = function (status) {
    done = status;
  }

  let getStatus = function () {
    return done;
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
      "Project" : project,
      "Status" : done
    };
  }
  return {getTitle, setTitle, getDescription, setDescription, 
          getDueDate, setDueDate, getPriority, setPriority, 
          getProject, setProject, setDetails, getStatus, setStatus, 
          changeStatus, viewItem};
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

  let addItemObject = function (item) {
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
  return {addItem, addItemObject, removeItem, getItem, viewList};
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
  let retrievedList = (0,_list__WEBPACK_IMPORTED_MODULE_1__.createList)();
  for (let i = 0; i < retrieved.length; i++) {
    let item = (0,_item__WEBPACK_IMPORTED_MODULE_0__.createItem)();
    item.setTitle(retrieved[i]["Name"]);
    item.setDescription(retrieved[i]["Task"]);
    item.setDueDate(retrieved[i]["Due Date"]);
    item.setPriority(retrieved[i]["Priority"]);
    item.setProject(retrieved[i]["Project"]);
    item.setStatus(retrieved[i]["Status"]);
    retrievedList.addItemObject(item);
  }
  return retrievedList;
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
      localStorage.setItem("userList", JSON.stringify(newList.viewList()));
    add = prompt("Enter 1 to add an item to list, 2 to view, 3 to remove item, "
                  + "4 to save list, 5 to exit");
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VuQjtBQUNvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFVO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7Ozs7Ozs7VUN4Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ0E7QUFDVTs7QUFFOUMsMkRBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzQkFBc0IsaURBQVU7QUFDaEMsa0JBQWtCLHNCQUFzQjtBQUN4QyxlQUFlLGlEQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpREFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvaXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHBvcHVsYXRlRGlzcGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiVGVzdCBCdXR0b24hXCI7XG4gICAgYm9keS5hcHBlbmRDaGlsZChidG4pO1xuICB9XG4gIHJldHVybiB7cG9wdWxhdGVEaXNwbGF5fTtcbn1cblxuZXhwb3J0IHtkaXNwbGF5Q29udHJvbGxlcn07IiwiLy8gZmFjdG9yeSBmdW5jdGlvbiB0byBtYWtlIGl0ZW1zXG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oKSB7XG4gIGxldCBuYW1lLCB0YXNrLCBkdWUsIHByaW9yLCBwcm9qZWN0ID0gXCJkZWZhdWx0XCIsIGRvbmUgPSBmYWxzZTtcbiAgbGV0IHNldFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgbmFtZSA9IHRpdGxlO1xuICB9XG4gIGxldCBnZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBsZXQgc2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICB0YXNrID0gZGVzY3JpcHRpb247XG4gIH1cbiAgbGV0IGdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0YXNrO1xuICB9XG4gIGxldCBzZXREdWVEYXRlID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBkdWUgPSBkYXRlO1xuICB9XG4gIGxldCBnZXREdWVEYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkdWU7XG4gIH1cbiAgbGV0IHNldFByaW9yaXR5ID0gZnVuY3Rpb24gKHByaW9yaXR5KSB7XG4gICAgcHJpb3IgPSBwcmlvcml0eTtcbiAgfVxuICBsZXQgZ2V0UHJpb3JpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHByaW9yO1xuICB9XG4gIGxldCBzZXRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gICAgcHJvamVjdCA9IHByb2plY3ROYW1lO1xuICB9XG4gIGxldCBnZXRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG4gIGxldCBzZXREZXRhaWxzID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBuYW1lID0gcHJvbXB0KFwiRW50ZXIgdGl0bGUgb2YgdGFza1wiLCBcIlRpdGxlXCIpOyAgICBcbiAgICBsZXQgZGVzYyA9IHByb21wdChcIkVudGVyIGRlc2NyaXB0aW9uIG9mIHRhc2tcIiwgXCJEZXNjXCIpO1xuICAgIGxldCBkdWVEYXRlID0gcHJvbXB0KFwiRW50ZXIgZHVlIGRhdGUgb2YgdGFza1wiLCBcIjAwMDBcIik7ICAgIFxuICAgIGxldCBwcmlvcml0eSA9IHByb21wdChcIkVudGVyIHByaW9yaXR5IChoaWdoLCBtZWRpdW0sIGxvdykgb2YgdGFza1wiLCBcIk5BXCIpO1xuICAgIGxldCBwcm9qZWN0ID0gcHJvbXB0KFwiRW50ZXIgcHJvamVjdCBvZiB0YXNrXCIsIFwiTkFcIik7ICBcbiAgICBzZXRUaXRsZShuYW1lKTtcbiAgICBzZXREZXNjcmlwdGlvbihkZXNjKTtcbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpO1xuICAgIHNldFByaW9yaXR5KHByaW9yaXR5KTtcbiAgICBzZXRQcm9qZWN0KHByb2plY3QpO1xuICB9XG5cbiAgbGV0IHNldFN0YXR1cyA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICBkb25lID0gc3RhdHVzO1xuICB9XG5cbiAgbGV0IGdldFN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZG9uZTtcbiAgfVxuXG4gIGxldCBjaGFuZ2VTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9uZSA9ICFkb25lO1xuICB9XG5cbiAgbGV0IHZpZXdJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcIk5hbWVcIiA6IG5hbWUsXG4gICAgICBcIlRhc2tcIiA6IHRhc2ssXG4gICAgICBcIkR1ZSBEYXRlXCIgOiBkdWUsXG4gICAgICBcIlByaW9yaXR5XCIgOiBwcmlvcixcbiAgICAgIFwiUHJvamVjdFwiIDogcHJvamVjdCxcbiAgICAgIFwiU3RhdHVzXCIgOiBkb25lXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge2dldFRpdGxlLCBzZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uLCBcbiAgICAgICAgICBnZXREdWVEYXRlLCBzZXREdWVEYXRlLCBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksIFxuICAgICAgICAgIGdldFByb2plY3QsIHNldFByb2plY3QsIHNldERldGFpbHMsIGdldFN0YXR1cywgc2V0U3RhdHVzLCBcbiAgICAgICAgICBjaGFuZ2VTdGF0dXMsIHZpZXdJdGVtfTtcbn1cblxuZXhwb3J0IHtjcmVhdGVJdGVtfVxuXG4iLCIvLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIG1ha2UgbGlzdHNcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QoKSB7XG4gIGxldCBsaXN0ID0gW107XG4gIGxldCBhZGRJdGVtID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVJdGVtKCk7XG4gICAgaXRlbS5zZXREZXRhaWxzKCk7ICBcbiAgICBsaXN0LnB1c2goaXRlbSk7XG4gIH1cblxuICBsZXQgYWRkSXRlbU9iamVjdCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgbGlzdC5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgbGV0IHZpZXdMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCByZXR1cm5MaXN0ID0gW107XG4gICAgaWYgKGxpc3QubGVuZ3RoID4gMClcbiAgICAgIGxpc3QuZm9yRWFjaChlID0+IHJldHVybkxpc3QucHVzaChlLnZpZXdJdGVtKCkpKTtcbiAgICByZXR1cm4gcmV0dXJuTGlzdDtcbiAgfVxuXG4gIGxldCByZW1vdmVJdGVtID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgbGV0IG5ld0xpc3QgPSBbXVxuICAgIGZvciAobGV0IGluZHggaW4gbGlzdCkge1xuICAgICAgaWYgKGxpc3RbaW5keF0uZ2V0VGl0bGUoKSA9PT0gdGl0bGUpIHtcbiAgICAgICAgbmV3TGlzdCA9IGxpc3Quc2xpY2UoMCwgaW5keCkuY29uY2F0KGxpc3Quc2xpY2UoaW5keCArIDEsIGxpc3QubGVuZ3RoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxpc3QgPSBuZXdMaXN0O1xuICB9XG5cbiAgbGV0IGdldEl0ZW0gPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICBmb3IgKGxldCBpbmR4IGluIGxpc3QpIHtcbiAgICAgIGlmIChsaXN0W2luZHhdLmdldFRpdGxlKCkgPT09IHRpdGxlKVxuICAgICAgICByZXR1cm4gbGlzdFtpbmR4XTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHthZGRJdGVtLCBhZGRJdGVtT2JqZWN0LCByZW1vdmVJdGVtLCBnZXRJdGVtLCB2aWV3TGlzdH07XG59XG5cbmV4cG9ydCB7Y3JlYXRlTGlzdH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmRpc3BsYXlDb250cm9sbGVyKCkucG9wdWxhdGVEaXNwbGF5KCk7XG5mdW5jdGlvbiByZXRyaWV2ZUxpc3QoKSB7XG4gIGxldCByZXRyaWV2ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckxpc3RcIikpO1xuICBsZXQgcmV0cmlldmVkTGlzdCA9IGNyZWF0ZUxpc3QoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXRyaWV2ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGNyZWF0ZUl0ZW0oKTtcbiAgICBpdGVtLnNldFRpdGxlKHJldHJpZXZlZFtpXVtcIk5hbWVcIl0pO1xuICAgIGl0ZW0uc2V0RGVzY3JpcHRpb24ocmV0cmlldmVkW2ldW1wiVGFza1wiXSk7XG4gICAgaXRlbS5zZXREdWVEYXRlKHJldHJpZXZlZFtpXVtcIkR1ZSBEYXRlXCJdKTtcbiAgICBpdGVtLnNldFByaW9yaXR5KHJldHJpZXZlZFtpXVtcIlByaW9yaXR5XCJdKTtcbiAgICBpdGVtLnNldFByb2plY3QocmV0cmlldmVkW2ldW1wiUHJvamVjdFwiXSk7XG4gICAgaXRlbS5zZXRTdGF0dXMocmV0cmlldmVkW2ldW1wiU3RhdHVzXCJdKTtcbiAgICByZXRyaWV2ZWRMaXN0LmFkZEl0ZW1PYmplY3QoaXRlbSk7XG4gIH1cbiAgcmV0dXJuIHJldHJpZXZlZExpc3Q7XG59XG5cbmxldCBjcmVhdGUgPSBwcm9tcHQoXCJFbnRlciAxIHRvIGNyZWF0ZSBhIGxpc3QsIDIgdG8gcmV0cmlldmUgc3RvcmVkIGxpc3QsIDMgdG8gZXhpdFwiKTtcbmlmIChjcmVhdGUgIT09IFwiM1wiKSB7XG4gIGxldCBuZXdMaXN0O1xuICBpZiAoY3JlYXRlID09PSBcIjFcIilcbiAgICBuZXdMaXN0ID0gY3JlYXRlTGlzdCgpO1xuICBpZiAoY3JlYXRlID09PSBcIjJcIikgXG4gICAgbmV3TGlzdCA9IHJldHJpZXZlTGlzdCgpO1xuICBsZXQgYWRkID0gcHJvbXB0KFwiRW50ZXIgMSB0byBhZGQgYW4gaXRlbSB0byBsaXN0LCAyIHRvIHZpZXcsIDMgdG8gcmVtb3ZlIGl0ZW0sIFwiXG4gICAgICAgICAgICAgICAgICAgICsgXCI0IHRvIHNhdmUgbGlzdCwgNSB0byBleGl0XCIpO1xuICB3aGlsZSAoYWRkICE9PSBcIjVcIikge1xuICAgIGlmIChhZGQgPT09IFwiMVwiKSBcbiAgICAgIG5ld0xpc3QuYWRkSXRlbSgpO1xuICAgIGlmIChhZGQgPT09IFwiMlwiKSBcbiAgICAgIGNvbnNvbGUubG9nKG5ld0xpc3Qudmlld0xpc3QoKSk7XG4gICAgaWYgKGFkZCA9PT0gXCIzXCIpIHtcbiAgICAgIGxldCBkZWxldGVUaXRsZSA9IHByb21wdChcIkVudGVyIHRpdGxlIG9mIHRhc2sgdG8gZGVsZXRlXCIpO1xuICAgICAgbmV3TGlzdC5yZW1vdmVJdGVtKGRlbGV0ZVRpdGxlKTtcbiAgICB9XG4gICAgaWYgKGFkZCA9PT0gXCI0XCIpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJMaXN0XCIsIEpTT04uc3RyaW5naWZ5KG5ld0xpc3Qudmlld0xpc3QoKSkpO1xuICAgIGFkZCA9IHByb21wdChcIkVudGVyIDEgdG8gYWRkIGFuIGl0ZW0gdG8gbGlzdCwgMiB0byB2aWV3LCAzIHRvIHJlbW92ZSBpdGVtLCBcIlxuICAgICAgICAgICAgICAgICAgKyBcIjQgdG8gc2F2ZSBsaXN0LCA1IHRvIGV4aXRcIik7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=