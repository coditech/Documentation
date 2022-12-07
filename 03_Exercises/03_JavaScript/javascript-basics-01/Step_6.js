window.onload = function(){
    document.getElementById('validate').onclick=function()
    {
        a=document.getElementById("first_number").value;
        b=document.getElementById("second_number").value;
        alert("Result= "+(a%b));
    
        
    }
}