import { createItem } from "./item";
import { createList } from "./list";
import { displayController } from "./display";

displayController().populateDisplay();
function retrieveList() {
  let retrieved = JSON.parse(localStorage.getItem("userList"));
  
}

let create = prompt("Enter 1 to create a list, 2 to retrieve stored list, 3 to exit");
if (create !== "3") {
  let newList;
  if (create === "1")
    newList = createList();
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