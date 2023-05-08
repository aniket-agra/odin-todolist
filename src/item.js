// factory function to make items

function createItem() {
  let name, task, due, prior, project = "default", done = false;
  let setTitle = function (title) {
    name = title;
  }
  let getTitle = function () {
    return name;
  }
  let setDescription = function (description) {
    task = description;
  }
  let getDescription = function () {
    return task;
  }
  let setDueDate = function (date) {
    due = date;
  }
  let getDueDate = function () {
    return due;
  }
  let setPriority = function (priority) {
    prior = priority;
  }
  let getPriority = function () {
    return prior;
  }
  let setProject = function (projectName) {
    project = projectName;
  }
  let getProject = function () {
    return project;
  }
  let setDetails = function () {
    let name = prompt("Enter title of task", "Title");    
    let desc = prompt("Enter description of task", "Desc");
    let dueDate = prompt("Enter due date of task (DDMMYYY)", "000000");    
    let priority = prompt("Enter priority (high, medium, low) of task", "NA");
    let project = prompt("Enter project of task", "NA");  
    setTitle(name);
    setDescription(desc);
    setDueDate(dueDate);
    setPriority(priority);
    setProject(project);
  }

  let setStatus = function (status) {
    done = status;
  }

  let getStatus = function () {
    return done;
  }

  let changeStatus = function () {
    done = !done;
  }

  let viewItem = function () {
    return {
      "Name" : name,
      "Task" : task,
      "Due Date" : due,
      "Priority" : prior,
      "Project" : project,
      "Status" : done
    };
  }
  return {getTitle, setTitle, getDescription, setDescription, 
          getDueDate, setDueDate, getPriority, setPriority, 
          getProject, setProject, setDetails, getStatus, setStatus, 
          changeStatus, viewItem};
}

export {createItem}

