import { createList } from "./list";

let create = prompt("Enter 1 to create a list, 2 to do nothing");
if (create === "1") {
  let newList = createList();
  let add = prompt("Enter 1 to add an item to list, 2 to view , 3 to exit");
  while (add !== "3") {
    if (add === "1") 
      newList.addItem();
    if (add === "2") 
      newList.viewList();
    add = prompt("Enter 1 to add an item to list, 2 to view , 3 to exit");
  }
}