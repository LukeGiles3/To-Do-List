// close button functionality
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// make a new list
function newList() {
  var name = document.getElementById('newList').value;
  let list = {
    name: name,
    items: [],
    completed: false
  }
  var myList = localStorage.setItem(name, list)
  //create display output for list items
  let output = `
        <h1 class="center">${list.name}</h1>
          <div class="input-group mb-3">
            <input type="text" id="todoInput" class="form-control" placeholder="What's next?" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button" onclick="todoList()" id="button-addon2">New Item</button>
          </div>
        </div>
        <ul class="black-font" id="todoList"></ul>
    `
  $('#toDoListContainer').html(output);
  //create new list
  let text = document.createTextNode(name)
  let newitem = document.createElement("li")
  $(newitem).addClass("list-group-item black-font")
  newitem.appendChild(text)
  document.getElementById("newListNav").appendChild(newitem)
  //create close button and append to item
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newitem.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// to do list input and creating new task
function todoList() {
  if (document.getElementById("todoInput").value == '' || document.getElementById("todoInput").value == null) {
    alert("Doing nothing is something right? :D")
  } else {
    let item = document.getElementById("todoInput").value
    let text = document.createTextNode(item)
    let newitem = document.createElement("li")
    $(newitem).addClass("list-group-item")
    $(newitem).attr('id', 'listItem')
    newitem.appendChild(text)
    document.getElementById("todoList").appendChild(newitem)
    //close button
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newitem.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    //completed toggle
    newitem.onclick = function() {
      this.classList.toggle('completed')
    };
  }
}
