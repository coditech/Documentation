function validate(){
    let input1=document.getElementById('password').value ;
    let input2=document.getElementById('confirmation').value;
    
    if(input1!==input2){
        document.getElementById('password').style.border="2px solid red";
        document.getElementById('confirmation').style.border="2px solid red";
    
    }
    else {
        document.getElementById('password').style.border="2px solid black";
        document.getElementById('confirmation').style.border="2px solid black";
    }
    }
    
    