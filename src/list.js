// factory function to make lists
import { createItem } from "./item";

function createList() {
  let list = [];
  let addItem = function () {
    const item = createItem();
    item.setDetails();  
    list.push(item);
  }
  let viewList = function () {
    let returnList = [];
    if (list.length > 0)
      list.forEach(e => returnList.push(e.viewItem()));
    return returnList;
  }
  // removeItem(item)
  // getItem(someID)
  return {addItem, viewList};
}

export {createList}