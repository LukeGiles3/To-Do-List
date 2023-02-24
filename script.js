// var close = document.getElementsByClassName("close");
// // make a new list
// function newList() {
//   var name = document.getElementById('newList').value;
//   let list = {
//     name: name,
//     items: []
//   }
//   localStorage.setItem('newList', JSON.stringify(list))
//   var getNewList = JSON.parse(localStorage.getItem('newList'))
//   //create display output for list items
//   let output = `
//         <h1 class="center">${getNewList.name}</h1>
//           <div class="input-group mb-3">
//             <input type="text" id="todoInput" class="form-control" placeholder="What's next?" aria-describedby="button-addon2">
//           <div class="input-group-append">
//             <button class="btn btn-secondary" type="button" onclick="todoList()" id="button-addon2">New Item</button>
//           </div>
//         </div>
//         <ul class="black-font" id="todoList"></ul>
//     `
//   $('#toDoListContainer').html(output);
//   //create new list
//   let text = document.createTextNode(name)
//   let newitem = document.createElement("li")
//   $(newitem).addClass("list-group-item black-font")
//   $(newitem).attr('id', 'list')
//   newitem.appendChild(text)
//   document.getElementById("newListNav").appendChild(newitem)
//   //create close button and append to item
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   newitem.appendChild(span);
//   for (let i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
    
//   //created so entry doesn't stick in new list input
//   document.getElementById('newList').value = ""
// }
// // to do list input and creating new task
// function todoList() {
//   if (document.getElementById("todoInput").value == '' || document.getElementById("todoInput").value == null) {
//     alert("Doing nothing is something right? :D")
//   } else {
//     let item = document.getElementById("todoInput").value
//     let text = document.createTextNode(item)
//     let newitem = document.createElement("li")
//     $(newitem).addClass("list-group-item")
//     $(newitem).attr('id', 'listItem')
//     newitem.appendChild(text)
//     document.getElementById("todoList").appendChild(newitem)
//     //close button
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     newitem.appendChild(span);
//     for (let i = 0; i < close.length; i++) {
//       close[i].onclick = function () {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
//     //completed toggle
//     newitem.onclick = function () {
//       this.classList.toggle('completed')
//     };
//     // edit tasks
//     var edit = document.createElement("SPAN");
//     var eText = document.createTextNode("\u270E");
//     edit.className = "edit";
//     edit.appendChild(eText);
//     newitem.appendChild(edit);
//     edit.onclick = function () {
//       var p = prompt("Edit your entry");
//       var entry = document.getElementById("listItem"); 
//       entry.innerText = p;

//       span.appendChild(txt);
//       entry.appendChild(span);
//         for (let i = 0; i < close.length; i++) {
//           close[i].onclick = function () {
//           var div = this.parentElement;
//           div.style.display = "none";
//       }
//     }
//     edit.appendChild(eText);
//     entry.appendChild(edit);
//     }
  
//     //created so previous entry doesn't stick in input 
//     document.getElementById('todoInput').value = ""
//   }
// }
class ToDoList {
  constructor(name, tasks, completed) {
    this.name = name;
    this.tasks = tasks
    this.completed = completed
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
  set sName(name) {
    this.name = name
  }
  set sStatus(status) {
    this.completed = status
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
