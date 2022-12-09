function input(event) {
event.preventDefault()
let text = document.getElementById("name").value;
document.getElementById("first").innerHTML = text;
}
