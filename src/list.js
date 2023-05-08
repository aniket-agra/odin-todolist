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

  let compareItems = function (item1, item2) {
    let dateStr1 = item1.getDueDate(), dateStr2 = item2.getDueDate();
    let date1 = new Date(dateStr1.substring(4, ), dateStr1.substring(2, 4), dateStr1.substring(0, 2));
    let date2 = new Date(dateStr2.substring(4, ), dateStr2.substring(2, 4), dateStr2.substring(0, 2));
    let priority1 = convertPriority(item1.getPriority()), priority2 = convertPriority(item2.getPriority());
    if (date1 < date2) 
      return 1;
    else if ((date1.getTime() === date2.getTime()) && (priority1 > priority2))
      return 1;
    return -1;
  }

  let addItemObject = function (toAdd) {
    let newList = [];
    let toAddDate = toAdd.getDueDate();
    toAddDate = new Date(toAddDate.substring(4, toAddDate.length), toAddDate.substring(2, 4), toAddDate.substring(0, 2));
    if (list.length === 0) {
      list.push(toAdd);
      return;
    }
    let i = 0, added = false;
    while (i < list.length) {
      let compare = compareItems(toAdd, list[i]);
      if (compare === 1 && !added) {
        newList.push(toAdd);
        added = true;
      }
      newList.push(list[i]);
      i += 1;
    }
    if (!added)
      newList.push(toAdd);
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