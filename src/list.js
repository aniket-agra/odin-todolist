// factory function to make lists
import { Item } from "./item";

function List() {
  this.list = [];
}

List.prototype.addItem = function () {
  const item = new Item();
  item.setDetails();  
  this.list.push(item);
}

List.prototype.viewList = function () {
  let returnList = [];
  if (this.list.length > 0)
    this.list.forEach(e => returnList.push(e.viewItem()));
  return returnList;
}

List.prototype.removeItem = function (title) {
  let newList = []
  for (let indx in this.list) {
    if (this.list[indx].getTitle() === title) {
      newList = this.list.slice(0, indx).concat(this.list.slice(indx + 1, this.list.length));
    }
  }
  this.list = newList;
}

List.prototype.getItem = function (title) {
  for (let indx in this.list) {
    if (this.list[indx].getTitle() === title)
      return this.list[indx];
  }
  return null;
}

export {List}