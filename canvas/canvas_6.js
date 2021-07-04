window.onload = function(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";
    ctx.strokeRect(10,10,100,80);
    ctx.globalAlpha = "0.6";
    ctx.lineCap = "round";
    ctx.fillRect(150,10,100,80);
}