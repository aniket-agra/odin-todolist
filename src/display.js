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
  function displayList() {
    if (newList === undefined)
      return ;
    let list = newList.viewList();
    let listDiv = document.querySelector(".list");
    document.querySelectorAll(".list > *").forEach(e => e.remove());
    for (let indx in list) {
      let item = list[indx];
      let itemDiv = document.createElement("div");
      itemDiv.classList.add("item", `${item["Priority"]}`);
      itemDiv.addEventListener("click", e => {});
      let itemDate = document.createElement("div");
      itemDate.classList.add("date");
      itemDate.textContent = item["Due Date"];
      let itemName = document.createElement("div");
      itemName.classList.add("name");
      itemName.textContent = item["Name"];
      let delItem = document.createElement("div");
      delItem.classList.add("delItem", "material-icons");
      delItem.textContent = "delete";
      delItem.addEventListener("click", e => {
        e.stopPropagation();
        console.log(`${item["Name"]}`);
        newList.removeItem(`${item["Name"]}`);
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
    createBtn.addEventListener("click", function (e) {
      newList = createList();
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
      newList.addItem();
      displayList();
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
    btnDiv2.appendChild(addItemBtn);
    btnDiv2.appendChild(saveBtn);
    btnDiv2.appendChild(deleteBtn);
    body.appendChild(btnDiv2);
    body.appendChild(listDiv);
  }
  return {populateDisplay};
}

export {displayController};