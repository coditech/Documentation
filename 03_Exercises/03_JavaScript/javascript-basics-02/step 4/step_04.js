
let btnclear = document.querySelector('button') ;
let input = document.querySelectorAll('input');

function promptMe() {
    var confirmAction = confirm("Are you sure to execute this action?");
    if (confirmAction) 
            btnclear.addEventListener('click' , () =>{
            input.forEach(input => input.value= '' );
            });
     else {
      alert("Action canceled");
    }
}
