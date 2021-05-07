function diamond(c,n,x,y,r,color){
    c.strokeStyle = color;
    c.beginPath();
    for(var i = 0; i<n; i++){
        var t = i * 2 * Math.PI / n;
        for(var j=i+1; j<n; j++){
            var s = j*2*Math.PI/n;
            c.moveTo(x+r*Math.cos(t), y+r*Math.sin(t));
            c.lineTo(x+r*Math.cos(s), y+r*Math.sin(s));
        }
    }
    c.stroke();
}
window.onload = function(){
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    diamond(ctx, 6,170,170,150,'darkblue');
    diamond(ctx, 12,490,170,150,'darkblue');
    diamond(ctx, 18,810,170,150,'darkblue');
}