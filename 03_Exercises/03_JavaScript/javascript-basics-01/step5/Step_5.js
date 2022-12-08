function multiplyBy() {
  var num1 = Number(document.getElementById("first_number").value);
  var num2 = Number(document.getElementById("second_number").value);
  var x = (document.getElementById("validate").innerHTML = num1 * num2);
  alert(x);
}
