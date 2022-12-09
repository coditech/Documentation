document.addEventListener('DOMContentLoaded', init);
function init(){
    const img1=document.querySelector("#image1");
    const img2=document.querySelector("#image2");
    const img3=document.querySelector("#image3");
    const img4=document.querySelector("#image4");
    const img5=document.querySelector("#image5");
    changeImg(img1);
    changeImg(img2);
    changeImg(img3);
    changeImg(img4);
    changeImg(img5);
    function changeImg(image){
        if(image.id==img1.id){
            image.onmouseover=() =>{
                    img1.src="images/image1_2.jpg";
            };
            image.onmouseout=() =>{
                img1.src="images/image1.jpg";
            };
        }
        else if(image.id==img2.id){
            image.onmouseover=() =>{
                    img2.src="images/image2_2.jpg";
            }; 
            image.onmouseout=() =>{
                img2.src="images/image2.jpg";
            };          
        }
        else if(image.id==img3.id){
            image.onmouseover=() =>{
                img3.src="images/image3_2.jpg";
            };
            image.onmouseout=() =>{
                img3.src="images/image3.jpg";
            };
        }
        else if(image.id==img4.id){
            image.onmouseover=() =>{
                img4.src="images/image4_2.jpg";
            };
            image.onmouseout=() =>{
                img4.src="images/image4.jpg";
            };
        }
        else if(image.id==img5.id){
            image.onmouseover=() =>{
                img5.src="images/image5_2.jpg";
            };
            image.onmouseout=() =>{
                img5.src="images/image5.jpg";
            };
        }
    }
}