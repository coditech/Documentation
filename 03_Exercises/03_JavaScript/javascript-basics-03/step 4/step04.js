var ps =document.getElementById('password');
var cf =document.getElementById('confirmation');

function click(){
    if(ps.value==cf.value){
        alert("Your answer is correct");
    }
    else{
        ps.style ='border:1px solid red';
        cf.style ='border:1px solid red';
    }
}