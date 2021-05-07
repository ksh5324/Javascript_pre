var EPSILON=1.0e-10;
var d, xnew, xold;
var a = parseFloat(prompt("정수를 입력하십시오"));
xold = (a>1)? a:1.0;
do{
    xnew = xold - (xold*xold - a)/(2.0*xold);
    d = (xold-xnew)/xold;
    xold=xnew;
}while(d>EPSILON);
document.write("sqrt(" + a + ") = " + xnew);