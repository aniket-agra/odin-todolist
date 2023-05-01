// factory function to make items

function Item() {
  this.project = "default", this.done = false;
}

Item.prototype.setTitle = function (title) {
  this.name = title;
}

Item.prototype.getTitle = function () {
  return this.name;
}

Item.prototype.setDescription = function (description) {
  this.task = description;
}

Item.prototype.getDescription = function () {
  return this.task;
}

Item.prototype.setDueDate = function (date) {
  this.due = date;
}

Item.prototype.getDueDate = function () {
  return this.due;
}

Item.prototype.setPriority = function (priority) {
  this.prior = priority;
}

Item.prototype.getPriority = function () {
  return this.prior;
}

Item.prototype.setProject = function (projectName) {
  this.project = projectName;
}

Item.prototype.getProject = function () {
  return this.project;
}

Item.prototype.setDetails = function () {
  this.name = prompt("Enter title of task", "Task");    
  this.desc = prompt("Enter description of task", "Do something");
  this.dueDate = prompt("Enter due date of task", "0000");    
  this.priority = prompt("Enter priority (high, medium, low) of task", "low");
  this.project = prompt("Enter project of task", "default");  
}

Item.prototype.changeStatus = function () {
  this.done = !this.done;
}

Item.prototype.viewItem = function () {
  return {
    "Name" : this.name,
    "Task" : this.task,
    "Due Date" : this.due,
    "Priority" : this.prior,
    "Project" : this.project,
    "Status" : this.done
  };
}

export {Item}