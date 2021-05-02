function displayTime(){
    var d=new Date();
    console.log("현재 시각은 " + d.toLocaleString() + " 입니다.");
}
window.onload = function(){
    var button = document.getElementById("button");
    button.onclick = displayTime();
}