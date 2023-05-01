// factory function to make lists
import { createItem } from "./item";

function createList() {
  let list = [];
  let addItem = function () {
    const item = createItem();
    item.setDetails();  
    list.push(item);
  }

  let addItemObject = function (item) {
    list.push(item);
  }

  let viewList = function () {
    let returnList = [];
    if (list.length > 0)
      list.forEach(e => returnList.push(e.viewItem()));
    return returnList;
  }

  let removeItem = function (title) {
    let newList = []
    for (let indx in list) {
      if (list[indx].getTitle() === title) {
        newList = list.slice(0, indx).concat(list.slice(indx + 1, list.length));
      }
    }
    list = newList;
  }

  let getItem = function (title) {
    for (let indx in list) {
      if (list[indx].getTitle() === title)
        return list[indx];
    }
    return null;
  }
  return {addItem, addItemObject, removeItem, getItem, viewList};
}

export {createList}