class User {
  constructor(toDoLists) {
    this.toDoLists = toDoLists;
  }
}

class ToDoList {
  constructor(name) {
    this.name = name;
    this.tasks = [];

  }
}

class Task {
  constructor(notDone, done, edit) {
    this.notDone = notDone;
    this.done = done;
    this.edit = edit;
  }
}
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
