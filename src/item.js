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
  let setDetails = function () {
    let name = prompt("Enter title of task", "Title");    
    let desc = prompt("Enter description of task", "Desc");
    let dueDate = prompt("Enter due date of task", "0000");    
    let priority = prompt("Enter priority (high, medium, low) of task", "NA");
    let project = prompt("Enter project of task", "NA");  
    setTitle(name);
    setDescription(desc);
    setDueDate(dueDate);
    setPriority(priority);
    setProject(project);
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
  return {setTitle, setDescription, setDueDate, setPriority, setProject, setDetails, viewItem};
}

export {createItem}

