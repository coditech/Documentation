function ageFunction() {
    var age = prompt("What is your age");
    document.getElementById("age").value = age;
    if (age > 18) {
        alert("you are over 18");
    }
    else {
        alert("You are under 18");
    }

}
ageFunction();