// 함수를 정의하는 방법

// 1. function f(x) {return x*x;}
// 2. var a = function(x) {return x*x;};
// 3. var f = new function("x", "return x*x");
// 4. var f = (x) => x*x;

// 중첩 함수
// 특정 함수의 내부에 선언된 함수를 가리켜 그 함수의 중첩 함수라고 합니다.
// 중첩 함수를 지역 함수 또는 내부 함수라고 부르기도 합니다.
// 자바스크립트에서는 외부 함수의 최상위 레벨에만 중첩함수를 작성할수 있습니다.
// if문과 while문 등의 블록 안에는 중첩함수를 작성할 수 없습니다.

function norm(x){
    var sum2 = sumSquare();
    return Math.sqrt(sum2);
    function sumSquare(){
        sum=0; 
        for(var i=0; i<x.length; i++) sum+= x[i]*x[i];
        return sum;
    }
}  