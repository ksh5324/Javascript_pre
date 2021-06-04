10 + "cookie";
100 + "";
("0000" + 12).slice(-4);

let n=26;
n.toString();
n.toString(2);//이진수 "11010"
n.toString(16); //16진수 "1a"
(26).toString(16);

let x=1234.567;
x.toString();
x.toString(16);
x.toString(2);
x.toFixed(0); // "1235"
x.toFixed(2); // "1234.57"
x.toFixed(4); // "1234.5670"
// toFixed --> 숫자의 소수점 아래 자릴수를 지정한 문자열로 변환
x.toExponential(3); // "1.235e+3"
//지수부분과 함께 반환