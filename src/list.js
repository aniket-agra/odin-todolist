// factory function to make lists
import { createItem } from "./item";

function createList() {
  let list = [];

  let addItemObject = function (toAdd) {
    let newList = [];
    let toAddDate = new Date(toAdd.getDueDate());
    if (list.length === 0) {
      list.push(toAdd);
      return;
    }
    let i = 0, added = false;
    while (i < list.length) {
      let compare = toAdd.compareTo(list[i]);
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

  // let removeItem = function (title) {
  //   let newList = [];
  //   for (let indx in list) {
  //     if (list[indx].getTitle() !== title) {
  //       newList.push(list[indx]);
  //     }
  //   }
  //   list = newList;
  // }
  let removeItem = function (id) {
    let newList = [];
    for (let indx in list) {
      if (list[indx].getID() !== id) {
        newList.push(list[indx]);
      }
    }
    list = newList;
  }

  let getItem = function (id) {
    for (let indx in list) {
      if (list[indx].getID() === id)
        return list[indx];
    }
    return null;
  }

  let updateItem = function (oldDetails, newDetails) {
    let priorityChanged = false, updatedItem = null;
    for (let indx in list) 
      if (list[indx].equals(oldDetails)) {
        let item = list[indx];
        item.setTitle(newDetails["Title"]);
        item.setDescription(newDetails["Desc"]);
        if (item.getDueDate() !== newDetails["Due"] || item.getPriority() !== newDetails["Priority"])
          priorityChanged = true;
        item.setDueDate(newDetails["Due"]);
        item.setPriority(newDetails["Priority"]);
        item.setProject(newDetails["Project"]);
        updatedItem = {...item};
        break;
      }
      if (priorityChanged) {
        //re-sort
        let newList = [], added = false;
        for (let indx in list) {
          if (list[indx].getID() !== updatedItem.getID()) {
            if (list[indx].compareTo(updatedItem) < 0 && !added) {
              newList.push(updatedItem);
              added = true;
            } 
            newList.push(list[indx]);
          }            
        }
        if (!added) 
          newList.push(updatedItem);
        list = newList;
      }
  }
  return {addItem, addItemObject, removeItem, getItem, viewList, updateItem};
}

export {createList}