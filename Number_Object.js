var num1=3.456789;
var num2=700000;
var num3="30.5px";
var num4=40;
document.write("표현 가능한 가장 큰 수:"+Number.MAX_VALUE,"<br>");
document.write("표현 가능한 가장 작은 수:"+Number.MIN_VALUE,"<br>");
document.write("숫자가 아닌 경우의 표시:"+Number.NaN,"<br>");
document.write("무한대 수 표기:"+Number.POSITIVE_INFINITY,"<br>");
document.write("음의 무한대 수 표기:"+Number.NEGATIVE_INFINITY,"<br>");

document.write(num2.toExponential(1),"<br>");
document.write(num1.toFixed(2),"<br>");
document.writet(num1.toPrecision(2),"<br>");
document.write(num1.toString(),"<br>");
document.write(num4.valueOf(),"<br>");
document.write(parseInt(num3)+num4,"<br>");
document.write(parseFloat(num3)+num4,"<br>");