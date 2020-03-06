function todoList() {
    let item = document.getElementById("todoInput").value
    let text = document.createTextNode(item)
    let newitem = document.createElement("li")
    newitem.appendChild(text)
    document.getElementById("todoList").appendChild(newitem)
}