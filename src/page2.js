const populatePage2 = function () {
    let bodyElem = document.querySelector("body");
    bodyElem.classList.remove("page1");
    bodyElem.classList.add("page2");
    {
        let btnsContainer = document.createElement("div");
        btnsContainer.classList.add("listActions");
        {
            let newItemBtn = document.createElement("button");
            newItemBtn.classList.add("newItem");
            newItemBtn.textContent = "Add Todo";
            btnsContainer.appendChild(newItemBtn);
        }
        {
            let saveListBtn = document.createElement("button");
            saveListBtn.classList.add("saveList");
            saveListBtn.textContent = "Save";
            btnsContainer.appendChild(saveListBtn);
        }
        {
            let deleteListBtn = document.createElement("button");
            deleteListBtn.classList.add("deleteList");
            deleteListBtn.textContent = "Delete List";
            btnsContainer.appendChild(deleteListBtn);
        }
        {
            let exitBtn = document.createElement("button");
            exitBtn.classList.add("exit");
            exitBtn.textContent = "Exit";
            btnsContainer.appendChild(exitBtn);
        }
        bodyElem.appendChild(btnsContainer);
    }
    {
        let tasksContainer = document.createElement("div");
        tasksContainerontainer.classList.add("container");
        {
            let tasksDiv = document.createElement("div");
            tasksDiv.classList.add("tasks");
            tasksContainer.appendChild(tasksDiv);
        }
        {
            let projectsDiv = document.createElement("div");
            projectsDiv.classList.add("projects");
            tasksContainer.appendChild(projectsDiv);
        }
        bodyElem.appendChild(tasksContainer);
    }
}

export {populatePage2};