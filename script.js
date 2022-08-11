
var img=[
    
    "img/12.jpg",
    "img/17.jpg",
    "img/19.jpg",
    "img/20.jpg",
    "img/16.jpg"
    ,];//index


    var index=0;

function changeImages(){
    // imageSlideShow.src="images/4.png";
    imageSlideShow.src = img[index];
    if(index < img.length -1){
        index++;
    }else{
        index = 0;
    }

setTimeout("changeImages()",2000);


}
changeImages();



// imgBg=document.getElementById("img-bg");

// function changeImagesDiv(){
//     // imageSlideShow.src="images/4.png";
//     imgBg.style.backgroundImage= img[index];
//     if(index < img.length -1){
//         index++;
//     }else{
//         index = 0;
//     }

// setTimeout("changeImages()",1000);


// }
// changeImagesDiv();