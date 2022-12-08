document.getElementById("button").addEventListener('click', function (e){
    var pass = document.getElementById("password");
    var conf = document.getElementById("confirmation");
if (pass.value !== conf.value) {
    pass.style.border = "1px solid red";
    conf.style.border = "1px solid red";
}
})