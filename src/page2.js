const populatePage2 = function () {
    let bodyElem = document.querySelector("body");
    bodyElem.classList.remove("page1");
    bodyElem.classList.add("page2");
    
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