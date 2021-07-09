
function makeList(){

    let item = document.getElementById("listInput").value
    let text = document.createTextNode(item)
    let newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("dynamicList").appendChild(newItem)
}