var password = document.getElementById("password").value;
var confirm = document.getElementById("confirmation").value;

function myfunc() {
  if (password = confirm) {
    alert("your sign in is correct ");
  } else {
    document.getElementById("password").style.border = "  3px solid red";
  }
}
