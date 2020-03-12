function newList() {
  
  
}

function todoList() {
  if(document.getElementById("todoInput").value == '' || document.getElementById("todoInput").value == null) {
    alert("Doing nothing is something right? :D")
  } else {
    let item = document.getElementById("todoInput").value
    let text = document.createTextNode(item)
    let newitem = document.createElement("li")
    $(newitem).addClass("list-group-item")
    newitem.appendChild(text)
    document.getElementById("todoList").appendChild(newitem)
  }
}
