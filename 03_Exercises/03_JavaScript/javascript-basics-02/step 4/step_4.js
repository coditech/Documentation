function myFunction() {
  var x = confirm("do you want to clear the form");
  if (x) {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
  }
}
