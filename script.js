function newList() {
  let name = document.getElementById('newList').value;

  let output = `
        <h1 class="center">${name}</h1>
          <div class="input-group mb-3">
            <input type="text" id="todoInput" class="form-control" placeholder="What's next?" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button" onclick="todoList()" id="button-addon2">New Item</button>
          </div>
        </div>
        <ul class="black-font" id="todoList"></ul>
    `
  $('#toDoListContainer').html(output);

  let text = document.createTextNode(name)
  let newitem = document.createElement("li")
  $(newitem).addClass("list-group-item black-font")
  newitem.appendChild(text)
  document.getElementById("newListNav").appendChild(newitem)

}

function todoList() {
  if (document.getElementById("todoInput").value == '' || document.getElementById("todoInput").value == null) {
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
