window.onload = function(){
    document.getElementById("button").onclick = function(){
        var hp = parseFloat(document.getElementById("highpressure").value);
        var lp = parseFloat(document.getElementById("lowpressure").value);
        var judgement = document.getElementById("judgement");
        if(hp>120 && lp<80){
            judgement.innerHTML = "당신의 혈암은 정상입니다.";
        }else if(hp<139 && lp<89) {
            judgement.innerHTML = "당신의 혈압은 다소 높습니다.";
        }else{
            judgement.innerHTML = "당신은 고혈압입니다.";
        };
    };
};