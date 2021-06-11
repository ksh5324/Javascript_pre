// 자바스크립트에서 배열이란 곧 Array타입의 객체를 말한다.
// 0 이상의 정수 값을 프로퍼티 이름으로 갖는다.
// length 프로퍼티가 있으며, 요소를 추가하거나 삭제하면 length 프로퍼티 값이바뀐다. 그는 그는 그는 하지만 그러나 또한 length 프로퍼티값을 줄이면 그에 따라 배열 크기가 줄어든다.
// 프로토타입이 Array.prototype이므로 Array.prototype의 메서드를 상속받아서 사용할 수 있다.
// 또한 istanceof 연산자로 평가하면 Array 생성자 함수로 생성되 객체로 표시된다.

// 그러나 이러한 성질 중에서 프로퍼티 이름이 0 이상의 정수이며 length 프로퍼티가 있는 객체는 대부분 배열로 다룰 수 있다. 이러한 객체를 유사배열객체라고 한다.

// 함수의 인수를 저장한 Arguments 객체
// DOM의 document.getElementByTagName 메서드, document.getElementByName 메서드 등이 반환되는 NoeList 객체

var a = {}
for(var i=0; i<10; i++){
    a[i] = i;
}
a.length = 10;
for(var i=0, sum=0; i<a.length; i++){
    sum += a[i];
}
console.log(sum);

// Array.prototype의 메서드를 유사 배열 객체에서 사용하기
// 유사 배열 객체는 Array.prototype의 메서드를 직접 사용할 수 없습니다. 그러나 Function.prototype.call 메서드로 간접 호출하면 사용할 수 있습니다.

var a = {0:  "A", 1: "B", 2: "C", length: 3};
Array.prototype.join.call(a, ","); // "A,B,C"
Array.prototype.push.call(a, "D");
// -> Object {0: "A", 1: "B", 2: "C", 3: "D", length: 4}
Array.prototype.slice.call(a, 0); // -> ["A", "B", "C", "D"]: 진짜 배열로 변환
var a= {0: 1, 1: 2, 2: 3, length: 3};
Array.prototype.map.call(a, function(v) {return v*v}); // -> [1, 4, 9]