var t=new Date();
var nowMonth=t.getMonth();
var nowDate=t.getDate();
var nowDay=t.getDay();
document.write("현재 월:"+nowMonth,"<br>");
document.write("현재 일:"+nowDate,"<br>");
document.write("현재 요일:"+nowDay,"<br>");
var m=new Date(2002,4,31);
var theMonth=m.getMonth();
var theDate=m.getDate();
var theDay=m.getDay();
document.write("2002월드컵 몇 월:"+theMonth,"<br>");
document.write("2002월드컵 몇 일:"+theDate,"<br>");
document.write("2002월드컵 몇 요일:"+theDay,"<br>");