// 함수의 인수

// 인수의 생략
// 함수 정의식에 작성된 인자 개수보다 인수를 적게 전달해서 ㅎ마수를 실행하면 인수에서 생략된 인자는 undefined가 됩니다.
function f(x, y){
    console.log("x = " + x + ", y = " + y);
}
f(2);

function multiply(a,b){
    b = b || 1;
    return a*b;
}
multiply(2,3);
multiply(2);
// b = b || 1;는 b의 값이 undefined라면 1로 주는 기본값 입니다.

// 가변 길이 인수 목록(arguments 객체)
// 모든 함수에서 사용할 수 있는 지역 변수로 arguments 변수가 있습니다.
// arguments[0] -> 첫 번째 인수 값
// arguments[1] -> 두 번째 인수 값

// arguments.length -> 인수 개수
// arguments.callee -> 현재 실행되고 있는 함수의 참조

function f(x,y){
    arguments[1] = 3;
    console.log("x = " + x + ", y = " + y);
}
f(1,2);

function myConcat(separator){
    var s = "";
    for(var i=1; i<arguments.length; i++){
        s += arguments[i];
        if(i<arguments.length-1) s+=separator;
    }
    return s;
}
console.log(myConcat("/","apple","orange","peach"));