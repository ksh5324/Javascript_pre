var num=1;
function gallery(direct){
    if(direct){
        if(num==8) return;
        if(num==4) num++;
        num++;
    }else{
        if(num==2){return;}
        if(num==6) num--;
        num--;
    }
    var imgTag=document.getElementById("photo");
    imgTag.setAttribute("src","picture/pic_"+num+".jpg");
}