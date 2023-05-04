import { createList } from "./list";
import { createItem } from "./item";

const displayController = function () {
  let newList;
  function retrieveList() {
    let retrieved = JSON.parse(localStorage.getItem("userList"));
    if (retrieved === null)
      return null;
    else {
      let retrievedList = createList();
      for (let i = 0; i < retrieved.length; i++) {
        let item = createItem();
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
  }
  const populateDisplay = function () {
    let body = document.querySelector("body");
    let btnDiv1 = document.createElement("div");
    btnDiv1.classList.add("startPageBtns");
    let createBtn = document.createElement("button");
    createBtn.textContent =  "Create New List";
    createBtn.addEventListener("click", function (e) {
      newList = createList();
      btnDiv1.classList.add("hidden");
    });
    btnDiv1.appendChild(createBtn);
    let retrieveBtn = document.createElement("button");
    retrieveBtn.textContent =  "Retrieve List from Local Storage";
    retrieveBtn.addEventListener("click", function (e) {
      newList = retrieveList();
      if (newList === null) 
        alert("Sorry, no stored list found. Please create a new list.");
      else
        btnDiv1.classList.add("hidden");
    });
    btnDiv1.appendChild(retrieveBtn);
    body.appendChild(btnDiv1);
    let listDiv = document.createElement("div");
    listDiv.classList.add("list");
    listDiv.textContent = "Here goes the list";
    body.appendChild(listDiv);
    let btnDiv2 = document.createElement("div");
    btnDiv2.classList.add("belowListBtns");
    let addItemBtn = document.createElement("button");
    addItemBtn.textContent = "Add new item";
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save List";
    let exitBtn = document.createElement("button");
    exitBtn.textContent = "Exit and Return to Start Screen";
    btnDiv2.appendChild(addItemBtn);
    btnDiv2.appendChild(saveBtn);
    btnDiv2.appendChild(exitBtn);
    body.appendChild(btnDiv2);
  }
  return {populateDisplay};
}

export {displayController};