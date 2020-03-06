function todoList() {
  if(document.getElementById("todoInput").value == '' || document.getElementById("todoInput").value == null) {
    alert("Doing nothing is something right?")
  } else {
    let item = document.getElementById("todoInput").value
    let text = document.createTextNode(item)
    let newitem = document.createElement("li")
    $(newitem).addClass("list-group-item")
    newitem.appendChild(text)
    document.getElementById("todoList").appendChild(newitem)
  }
}










// class User {
//   constructor(toDoLists) {
//     this.toDoLists = toDoLists;
//   }
//   newList() {
//     document.createElement('input')
//   }
// }

// class ToDoList {
//   constructor(selectedHtmlElement) {
//     this.name = [];
//     this.notDone = [];
//     this.done = [];
//     this.selectedHtmlElement = selectedHtmlElement || document.body;
//     this.tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
//   }

//   addTask(text) {
//     if (text == '' || text == null) {
//       alert("Doing nothing is something, right?")
//     } else {
//       this.tasks.push(new Task(text))
//       this.saveTask
//     }
//     this.render(this.tasks)
//   }
//   saveTask() {
//     window.localStorage.setItem("tasks", JSON.stringify(this.tasks));
//   }
// }

// class Task {
//   constructor(text) {
//     this.text = text;
//     this.isCompleted = false;
//   }
// }
// function newItem() {
//     var li = document.createElement("LI");
//     $(li).addClass("list-group-item");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myUL").appendChild(li);
//     }
//   }
    // document.getElementById("myInput").value = "";
    // var myNodelist = document.getElementsByTagName("LI");
    // var i;
    // for (i = 0; i < myNodelist.length; i++) {
    //   var span = document.createElement("SPAN");
    //   var txt = document.createTextNode("\u00D7");
    //   span.className = "close";
    //   span.appendChild(txt);
    //   myNodelist[i].appendChild(span);
    // }
    // }

// Create a "close" button and append it to each list item


// Click on a close button to hide the current list item
