var t=new Date();
var nowYear=t.getFullYear();
var nowMonth=t.getMonth();
var nowDay=t.getDay();
var theDate =new Date(nowYear,12,31);
var diffDate=theDate-t;
var result=Math.ceil(diffDate/(60*1000*60*24));
document.write("현재일로 부터 올해 말일까지는"+result+"일 남았습니다.");