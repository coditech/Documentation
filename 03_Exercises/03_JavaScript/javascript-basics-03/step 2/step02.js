

var sh = document.getElementById('show')
var hd  = document.getElementById('hide')
var a = document.querySelectorAll('a')
var texts = document.getElementById('texte')

sh.addEventListener("click", function(){
    if (sh.clicked == true){
        texts.style.display='block';       
    } if(hd.clicked == true) {
        texts.style.display='none';   
    }
});