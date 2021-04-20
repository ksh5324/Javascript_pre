var num=1;
var t="<table border='1'>";
for(var i=1; i<=4; i++){
    t+="<tr>";
    for(var k=1; k<=4; k++){
        t+="<td>"+num+"</td>";
        num++;
    }
    t+="</tr>";
}
t+="</table>"
console.log(t);
document.write(t);