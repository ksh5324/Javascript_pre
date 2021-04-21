document.write("<h1>컴퓨터 가위,바위,보 맞추기</h1>");

var t=prompt("가위, 바위, 보 중 선택하세요?","가위");
var tNum;
switch(t){
    case "가위":tNum=1; break;
    case "바위":tNum=2; break;
    case "보":tNum=3; break;
    default: alert("잘못 작성하였습니다."); location.reload9();
}

var com=Math.ceil(Math.random()*3);
document.write("<img src='https://folkency.nfm.go.kr/upload/img/20170428/20170428153307_t_.jpg'>");
if(tNum==com){
    alert("맞췄습니다! 축하합니다.!!")
}else{
    alert("틀렸네요! 다음기회에 또 도전하세요!!");
}