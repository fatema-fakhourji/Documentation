let s = prompt("Enter your shoe size");
let b = prompt("Enter your birth year");
function f (s , b) {
 
    return (((((s * 2) + 5) * 50) - b) + 1766);
  }

alert("The result of the operation is" + " " + f(s,b));