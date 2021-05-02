window.onload = function(){
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var display = document.getElementById("display");
    var startTime, timer;
    startButton.onclick = start;
    function start(){
        startButton.onclick = null;
        stopButton.onclick = stop;
        startTime = new Date();
        timer = setInterval(function(){
            var now = new Date();
            display.innerHTML = ((now - startTime)/1000).toFixed(2);
        }, 10);
    }
    function stop(){
        clearInterval(timer);
        startButton.onclick = start;
    }
};