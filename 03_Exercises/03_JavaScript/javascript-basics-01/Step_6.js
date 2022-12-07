document.getElementById('validate').addEventListener('click', function (e){
    let num1 = document.getElementById('first_number').value
    let num2 = document.getElementById('second_number').value
let num = num1 % num2;
alert("The remainder of the two numbers is" + " " + num);
})