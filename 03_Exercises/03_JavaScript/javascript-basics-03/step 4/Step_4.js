button.addEventListener("click",function(){
var confirmation = document.getElementById("confirmation");

var password = document.getElementById("password");
    if(password.value != confirmation.value) {
        password.style.border = "3px solid red";
        confirmation.style.border = "3px solid red";
    }
})
