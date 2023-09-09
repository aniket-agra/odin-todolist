import { createList } from "./list";
import { createItem } from "./item";

const displayController = function () {
  let newList, mode, oldDetails = {};

  function retrieveList() {
    let retrieved = JSON.parse(localStorage.getItem("userList"));
    if (retrieved === null)
      return null;
    else {
      let retrievedList = createList();
      for (let i = 0; i < retrieved.length; i++) {
        let item = createItem();
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
        let item = createItem();
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

export {displayController};