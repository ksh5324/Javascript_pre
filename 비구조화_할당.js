// 비구조화 할당은 배열, 객체, 반복 가능 객체에서 값을 꺼내어 그 값을 별도의 변수에 대입하는 문장입니다.
// 배열의 비구조화 할당
// 사용법
// 우변이 배열일 때 비구조화 할당의 기본적인 사용법을 설명하겠습니다.
var [a,b] = [1,2];
// var a=1, b=2;
[a,b] = [3*a, 3*b];
[a,b] = [b,a]; // 값 교환
// 이때 우변 값의 개수와 좌변 변수의 개수가 같을 필요는 없습니다.
// 좌변에 개수가 우변보다 많으면 남은 변수에는 undefined가 값으로 할당 됩니다.

// 나머지 요소
// 배열의 비구조화 할당을 할 때는 함수의 나머지 매개변수와 마찬가지로 전개 연산자인 ...을 사용하여 나머지 요소를 이용할 수 있습니다.
[a, b, ...rest] = [1,2,3,4]; // a=2, b=2, rest=[3,4]
// 좌변의 ...rest 부분이 나머지 요소이며 할당되지 않은 우변의 남은 요소들이 할당됩니다.

// 요소의 기본값
[a=0, b=1, c=2] = [1,2]; // a=1, b=2, c=2

// 함수가 배열로 반환한 값을 비구조화 할당받기
function rotation(x,y,theta){
    var s = Math.sin(theta), c = Math.cos(theta)
    return [c*x - s*y, s*x + c*y];
}
var [a,b] = rotation(1,2,Math.PI/3);

// 객체의 비구조화 할당

// 기본적인 사용법
// 좌변에는 객체 리터럴과 비슷한 무법을 사용합니다.
let {a: x, b: y} = {a: 1, b: 2}; // x = 1, y = 2
var {a: x, b: y} = {a: y, b: x};
var {a: x, b: y} = {a: 1, c: 2}; // x=1, y=undefined

