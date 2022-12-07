document.getElementById('validate').addEventListener('click', function (e){
let s = document.getElementById('age').value
if (s >= 18) {
    alert("You are over 18")
} else {
    alert("You are under 18")
}
})