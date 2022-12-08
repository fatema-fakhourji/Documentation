let f = document.querySelector('form');
const div = document.createElement("div");
let r = document.querySelector('input');
r.addEventListener('change', function(text) {
div.innerText = text.target.value;
})
f.appendChild(div);
