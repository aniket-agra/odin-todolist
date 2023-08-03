const populatePage2 = function () {
    let bodyElem = document.querySelector("body");
    bodyElem.classList.remove("page1");
    bodyElem.classList.add("page2");
    {
        let container = document.createElement("div");
        container.classList.add("container");
        {
            let tasksDiv = document.createElement("div");
            tasksDiv.classList.add("tasks");
            container.appendChild(tasksDiv);
        }
        {
            let projectsDiv = document.createElement("div");
            projectsDiv.classList.add("projects");
            container.appendChild(projectsDiv);
        }
        bodyElem.appendChild(container);
    }
}

export {populatePage2};