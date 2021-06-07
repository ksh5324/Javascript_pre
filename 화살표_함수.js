// 화살표 함수 표현식의 작성법
var square = function(x) {
    return x*x;
}

// 화살표 함수
var square = (x) => {return x*x;}

// 인수가 여러개일 때 인수와 인수를 쉼표로구분합니다.
var f = (x,y,z) => {...};

// 인수가 하나라면 괄호 생략 가능
var square = x => {return x*x;}

// 인수가 없으면 인수를 묶는 괄호를 생략할 수 없습니다.
var f = () => {...};

// 함수 몸통 안의 문장이 return뿐이라면 return 키워드를 생략할 수 있습니다.
var square = x => x*x;

// 화살표 함수도 즉시실행 함수로 사용할 수 있습니다.
(x => x*x)(3); // -> 9

// arguments 변수가 없다
// 생성자로 사용할 수 없다.
// yield키워드를 사용할 수 없다.


// 인수에 추가된 기능

// 나머지 매개변수
// ECMAScript 6부터는 함수의 인자가 들어가는 부분에 ...을 입력하면 그만큼의 인수를 배열로 받을 수 있습니다.

function f(a,b,...args) {
    console.log(a,b,args);
}
f(1,2,3,4,5,6);

var sum = (...args) => {
    for(var i=0, s=0; i<args.length; i++) s+=args[i];
    return s;
};
sum(1,2,3,4,5);

// 인수의 기본값

function multiply(a,b=1) {
    return a+b;
}
multiply(3);
multiply(3,2);