let input = document.getElementById('name');
let out = document.getElementById('out');

input.onkeyup = function() {
     out.innerHTML = input.value;
  }

