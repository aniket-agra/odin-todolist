// factory function to make items

function createItem() {
  let name, task, due, prior, project;
  let setTitle = function (title) {
    name = title;
  }
  let setDescription = function (description) {
    task = description;
  }
  let setDueDate = function (date) {
    due = date;
  }
  let setPriority = function (priority) {
    prior = priority;
  }
  let setProject = function (projectName) {
    project = projectName;
  }
  let viewItem = function () {
    return {
      "Name" : name,
      "Task" : task,
      "Due Date" : due,
      "Priority" : prior,
      "Project" : project
    };
  }
  return {setTitle, setDescription, setDueDate, setPriority, setProject, viewItem};
}

export {createItem}

