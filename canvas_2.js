window.onload = function(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(60,10);
    ctx.lineTo(110,100);
    ctx.lineTo(10,100);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(60,120);
    ctx.lineTo(110,210);
    ctx.lineTo(10,210);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(60,230);
    ctx.lineTo(110,320);
    ctx.lineTo(10,370);
    ctx.fill();
    ctx.closePath();
}