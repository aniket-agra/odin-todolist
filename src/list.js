// factory function to make lists
import { createItem } from "./item";

function createList() {
  let list = [];
  let convertPriority = function (priority) {
    switch (priority) {
      case "high" : return 3;
      case "medium" : return 2;
      case "low" : return 1;
      default : return 0;
    }
  }

  let addItemObject = function (toAdd) {
    let newList = [];
    let toAddDate = toAdd.getDueDate();
    toAddDate = new Date(toAddDate.substring(4, toAddDate.length), toAddDate.substring(2, 4), toAddDate.substring(0, 2));
    let toAddPriority = convertPriority(toAdd.getPriority());
    if (list.length === 0) {
      list.push(toAdd);
      return;
    }
    let i = 0, itemDateStr, itemDate;
    while (i < list.length) {
      itemDateStr = list[i].getDueDate();
      itemDate = new Date(itemDateStr.substring(4, itemDateStr.length), itemDateStr.substring(2, 4), itemDateStr.substring(0, 2));
      if (itemDate < toAddDate) {
        newList.push(list[i]);
        i += 1;
      }
      else 
        break;
    }
    while (i < list.length) {
      itemDateStr = list[i].getDueDate();
      itemDate = new Date(itemDateStr.substring(4, itemDateStr.length), itemDateStr.substring(2, 4), itemDateStr.substring(0, 2));
      let itemPriority = convertPriority(list[i].getPriority());
      if ((itemDate.getTime() === toAddDate.getTime()) && (itemPriority > toAddPriority)) {
        newList.push(list[i]);
        i += 1;
      }
      else 
        break;
    }
    newList.push(toAdd);
    while (i < list.length) {
      newList.push(list[i]);
      i += 1;
    }
    list = newList;
  }

  let addItem = function () {
    const item = createItem();
    item.setDetails();
    addItemObject(item);
  }

  let viewList = function () {
    let returnList = [];
    if (list.length > 0)
      list.forEach(e => returnList.push(e.viewItem()));
    return returnList;
  }

  let removeItem = function (title) {
    let newList = [];
    for (let indx in list) {
      if (list[indx].getTitle() !== title) {
        newList.push(list[indx]);
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