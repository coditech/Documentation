

var sh = document.getElementById('show')
var hd  = document.getElementById('hide')
var p = document.querySelector("#texte p");

sh.addEventListener("click", function(){
    if (sh.clicked == true){
        p.style.display='block';       
    } if(hd.clicked == true) {
        p.style.display='none';   
    }
});