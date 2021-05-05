window.onload = function(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img,0,0);
    };
    img.src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTNfMTgx%2FMDAxNjEzMjE4NTczODE0.nJc0iEq9K_vWN6p9LR9j0W4VM4WwNVIg1nw9iWOzQJsg.ovk2Pwe4iYRT4yaVTBUl-T7B63uka9-EdEUfdCIvYEEg.JPEG.dkdk12dkdk%2F20210206%25A3%25DF180243.jpg&type=ofullfill340_600";
};