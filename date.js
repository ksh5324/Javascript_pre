var date=new Date();
var y=date.getFullYear();
var m=date.getMonth();
var d=date.getDate();
var theDate=new Date(y,m,1);
var theDay=theDate.getDay();
var last=[31,28,31,30,31,30,31,31,30,31,30,31];
if(y%4==0&&y%100!=0||y%400==0) lastDate=last[1]=29;
var lastDate=last[m];
var row=Math.ceil((theDay+lastDate)/7);
document.write("<h1>"+y+"."+(m+1)+"</h1>");
var calendar="<table border='1'";
calendar+="<tr>";
calendar+="<th>일</th>";
calendar+="<th>월</th>";
calendar+="<th>화</th>";
calendar+="<th>수</th>";
calendar+="<th>목</th>";
calendar+="<th>금</th>";
calendar+="<th>토</th>";
calendar+="</tr>";
var dNum=1;
for(var i=1; i<=row; i++){
    calendar+="<tr>";
    for(var k=1; k<=7; k++){
        if(i==1&&k<=theDay||dNum>lastDate){
            calendar+="<td> &nbsp; </td>";
        }
        else{
            calendar+="<td>"+dNum+"</td>";
            dNum++;
        }
    }
    calendar+="<tr>";
}
document.write(calendar);