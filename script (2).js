
var img=[
    "img/gg.webp",
    "img/dd.webp",
    "img/ff.webp"
    ,];//index


    var index=0;

function changeImages(){
    imageSlideShow.src = img[index];
    if(index < img.length -1){
        index++;
    }else{
        index = 0;
    }

setTimeout("changeImages()",2000);


}
changeImages();