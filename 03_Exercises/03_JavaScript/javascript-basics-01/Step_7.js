window.onload = function(){
    document.getElementById('validate').onclick=function()
    {
        a=document.getElementById("shoe_size").value;
        b=document.getElementById("year").value;
        
        alert("Shoe size: "+((a*5)+5)*50 +"\n"+ "Birth year: "+((2022-b)+1766));

        
    
        
    }
}