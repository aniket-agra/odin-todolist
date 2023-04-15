// factory function to make lists

function createList() {
  let list = [];
  let addItem = function (item) {
    list.push(item);
  }
  let viewList = function () {
    return list.forEach(e => e.viewItem());
  }
}

removeItem(item)
getItem(someID)