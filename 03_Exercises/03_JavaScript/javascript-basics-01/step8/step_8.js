var btn = document.getElementById("validate").onclick = function(){
var age = document.getElementById("age").value;
if(age > 18)
alert("you are above 18");
else
alert("you are under 18");
}