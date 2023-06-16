class ToDoList {
  constructor(name) {
    this.name = name;
    this.tasks = []
    this.completed = false
    this.element = document.createElement("div");
    this.render()
  }
  get gName() {
    return this.name
  }
  get gTasks() {
    return this.tasks
  }
  get gStatus() {
    return this.completed
  }
  set sStatus(status) {
    this.completed = status
  }
  set sName(name) {
    this.name = name
  }

  render() {
    const listItem = document.createElement("div");
    listItem.classList.add("toDoListItem");

    const itemTitle = document.createElement("div");
    itemTitle.classList.add("spanThreeCol");
    itemTitle.textContent = this.title;

    const editButton = document.createElement("button");
    editButton.classList.add("underline");
    editButton.textContent = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteUnderline");
    deleteButton.textContent = "delete";

    listItem.appendChild(itemTitle);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    this.element.appendChild(listItem);
  }

  getElement() {
    const listElement = document.createElement("div");
    listElement.className = "toDoListItem";
    listElement.innerHTML = `
      <div class="spanThreeCol">${this.gName}</div>
      <div><button class="underline">edit</button></div>
      <div><button class="deleteUnderline">delete</button></div>
    `;
    const editButton = listElement.querySelector(".underline");
    const deleteButton = listElement.querySelector(".deleteUnderline");
    editButton.addEventListener("click", () => {
      editToDoList(this);
    });
    deleteButton.addEventListener("click", () => {
      deleteToDoList(this);
    });
    return listElement;
  }
}

class Task {
  constructor(name, completed) {
    this.name = name;
    this.completed = completed
  }
  get gName() {
    return this.name
  }
  get gStatus() {
    return this.completed
  }
  set sName(name) {
    this.name = name
  }
  set sStatus(status) {
    this.completed = status
  }
}

let toDoLists = document.querySelector('#toDoLists')
let newTaskName = document.querySelector('#newTaskForm').value
let toDoListInput = document.querySelector('#newToDoListInput')
let toDoListsArray = []
let tasks = []

function createNewToDoList() {
  let toDoListName = document.querySelector('#newToDoListInput').value
  if(toDoListName === "") {
    alert("you must provide a name for the list")
  } else {
    let newList = new ToDoList(toDoListName, [], false)
    toDoListsArray.push(newList)
    displayToDoLists()
    deleteToDoList()
    clearInput()
    // deleteList()
    return toDoListsArray
  }
}

function createNewTask(name) {
  let newTask = new Task(name, false)
  tasks.push(newTask)
  return tasks
}

function displayToDoLists() {
  toDoListDisplay = toDoListsArray.map((list) => list.getElement())
  toDoLists.innerHTML = "";
  toDoListDisplay.forEach(listElement => toDoLists.appendChild(listElement));
}

function deleteToDoList(toDoList) {
  const index = toDoListsArray.indexOf(toDoList);
  if (index > -1) {
    toDoListsArray.splice(index, 1);
  }
  displayToDoLists();
}

function clearInput() {
  toDoListInput.value = ''
}
