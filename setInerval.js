function f(){
    var date=new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var time;
    time = "<h1>"+hours+": "+minutes+" ("+second+")</h1>";
    document.write(time);
}

function a(){
    f();
    setInterval(f, 1000);
    setTimeout('location.reload()', 1000);
}

a();