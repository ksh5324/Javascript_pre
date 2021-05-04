window.onload = function(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.lineTo(200,10);
    ctx.arc(200,60,50,-Math.PI/2, 0, false);
    ctx.lineTo(250,160);
    ctx.stroke();
}