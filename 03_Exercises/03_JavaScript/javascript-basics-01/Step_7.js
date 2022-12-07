document.getElementById('validate').addEventListener('click', function (e){
  let s = document.getElementById('shoe_size').value
  let b = document.getElementById('year').value
  function f (s , b) {
        r = ((((s * 2) + 5) * 50) - b) + 1766
      return (r);
    }
  
  alert("The result of the operation is" + " " + f(s,b))
})
