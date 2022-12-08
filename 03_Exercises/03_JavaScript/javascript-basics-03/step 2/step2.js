let p = document.getElementById("texte");
let s = document.getElementById("show");
let h = document.getElementById("hide");
let t = [s, h]
for (let i = 0; 1; i++) {
    t[i].addEventListener("click", function() {
        if (t[i].id == "show") {
            p.style.display = "block"; 
        } else {
            p.style.display = "none"; 
        }
    })
}







