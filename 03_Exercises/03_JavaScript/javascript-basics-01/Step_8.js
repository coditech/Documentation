window.onload = function(){
    document.getElementById('validate').onclick=function()
    {
        a=document.getElementById("age").value;
    if(a>18)
        {
            alert("You are over 18")
        }
    else 
        {
        alert("you are under 18")
        }
    }

}