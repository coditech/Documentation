window.onload = function(){
    document.getElementById('validate').onclick=function()
    {
        x=document.getElementById("name").value;
        y=document.getElementById("surname").value;
        z=document.getElementById("city").value;
        alert("name: "+x+"\n"+"surname: "+y+"\n"+"city: "+z);
    
        
    }
}