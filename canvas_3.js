window.onload = function(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(100,50);
    ctx.lineTo(100,150);
    ctx.moveTo(50,100);
    ctx.lineTo(150,100);
    ctx.stroke();
}