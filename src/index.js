import { createList } from "./list";
import { displayController } from "./display";

displayController().populateDisplay();
let create = prompt("Enter 1 to create a list, 2 to do nothing");
if (create === "1") {
  let newList = createList();
  let add = prompt("Enter 1 to add an item to list, 2 to view, 3 to remove item, 4 to exit");
  while (add !== "4") {
    if (add === "1") 
      newList.addItem();
    if (add === "2") 
      console.log(newList.viewList());
    if (add === "3") {
      let deleteTitle = prompt("Enter title of task to delete");
      newList.removeItem(deleteTitle);
    }
    add = prompt("Enter 1 to add an item to list, 2 to view, 3 to remove item, 4 to exit");
  }
}