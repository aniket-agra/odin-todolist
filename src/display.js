import { createList } from "./list";

const displayController = function () {
  const populateDisplay = function () {
    let body = document.querySelector("body");
    let btn = document.createElement("button");
    btn.textContent = "Test Button!";
    body.appendChild(btn);
  }
  return {populateDisplay};
}

export {displayController};