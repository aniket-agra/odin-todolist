// factory function to make lists
import { createItem } from "./item";

function createList() {
  let list = [];
  let addItem = function () {
    const item = createItem();
    let name = prompt("Enter title of task", "Title");    
    let desc = prompt("Enter description of task", "Desc");
    let dueDate = prompt("Enter due date of task", "0000");    
    let priority = prompt("Enter priority (high, medium, low) of task", "NA");
    let project = prompt("Enter project of task", "NA");  
    item.setTitle(name);
    item.setDescription(desc);
    item.setDueDate(dueDate);
    item.setPriority(priority);
    item.setProject(project);  
    list.push(item);
  }
  let viewList = function () {
    if (list.length > 0)
      list.forEach(e => console.log(e.viewItem()));
    else
      return list;
  }
  // removeItem(item)
  // getItem(someID)
  return {addItem, viewList};
}

export {createList}