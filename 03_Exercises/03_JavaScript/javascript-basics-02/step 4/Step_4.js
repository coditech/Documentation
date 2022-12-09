function myfunc(){
    const response = confirm("Are you sure you want to Reset?");

    if (response) {
        
        document.getElementById("formo").reset();
    } else 
    {
        console.log("Cancel was pressed");
    }
}
