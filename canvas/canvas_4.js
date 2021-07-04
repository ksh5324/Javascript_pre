window.onload = function(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,100,80,30*Math.PI/180,120*Math.PI/180,false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(100,100,80,30*Math.PI/10,120*Math.PI/180,true);
    ctx.stroke();
}