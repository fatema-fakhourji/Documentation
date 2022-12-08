let p = document.getElementById("text");
let green = document.getElementById("green");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let t = [green, red, blue]
for (let i = 0; 2; i++) {
    t[i].addEventListener("click", function() {
        if (t[i].id == "green") {
            p.style.color = "green"; 
        } else if (t[i].id == "red") {
            p.style.color = "red"; 
        } else {
            p.style.color = "blue"; 
        }
    })
}