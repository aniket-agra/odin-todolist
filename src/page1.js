const populatePage1 = function () {

    let bodyElem = document.querySelector("body");
    bodyElem.classList.add("page1");

    {
        let btnsDiv = document.createElement("div");
        btnsDiv.classList.add("startPageBtns");

        {
            let createBtn = document.createElement("button");
            createBtn.classList.add("createList");
            createBtn.textContent = "Create new list";
            btnsDiv.appendChild(createBtn);
        }

        {
            let retrieveBtn = document.createElement("button");
            retrieveBtn.classList.add("retrieveList");
            retrieveBtn.textContent = "Retrieve list from local storage";
            btnsDiv.appendChild(retrieveBtn);
        }
        bodyElem.appendChild(btnsDiv);
    }
}

export {populatePage1};