window.onload = function(){
    document.getElementById("button").onclick = function(){
        var h = parseFloat(document.getElementById("height").value);
        var w = parseFloat(document.getElementById("weight").value);
        var bmi = document.getElementById("bmi");
        bmi.innerHTML = (w/h/h).toFixed(1);
    }
}