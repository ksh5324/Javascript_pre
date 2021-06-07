// 이터레이션
// 이터레이션은 반복 처리라는 뜻으로 데이터 안의 요소를 연속적으로 꺼내는 행위를 말합니다.
// 예를 들어 배열의 forEach 메서드는 배열의 요소를 순차적으로 검색하여 그 값을 함수의 인수로 넘기기를 반복합니다.

var a = [5,4,3];
a.forEach(function(val) { console.log(val); });

// 이터레이터
// 이터레이터는 반복 처리가 가능한 객체를 말하며 한국어로는 반복기라고 합니다.
// 앞의 forEach 메서드는 배열의 요소를 꺼내 그 값을 함수의 인수로 넘기고, 그 작업이 끝나면 배열의 다음 요소를 꺼내 함수의 인수로 넘기기를 반복합니다.
// 이 작업은 내부적으로 처리되므로 개발자는 각 처리 단계를 제어할 수 없습니다.
// 그러나 이터레이터를 사용하면 개발자가 반복 처리를 단계별로 제어할 수 있습니다.

// 배열은 Symbol.iterator 메서드를 가지고 있습니다.
// Symbol.iterator는 자바스크립트에 내장되어 있는 특별한 의미를 가진 심벌입니다.
// @@iterator라고 표기하고 이터레이터 심벌이라고 읽습니다. 배열의 Symbol.iterator 메서드는 이터레이터를 반환하는 함수입니다.

var a = [5,4,3];
var iter = a[Symbol.iterator]();
console.log(iter.next()); // Object {value: 5, done: false}
console.log(iter.next()); // Object {value: 4, done: false}
console.log(iter.next()); // Object {value: 3, done: false}
console.log(iter.next()); // Object {value: undefined, done: true}
console.log(iter.next()); // Object {value: undefined, done: true}

// 이처럼 iter의 next 메서드를 호출할 때마다 이터레이터 리절트라는 객체가 반환 됩니다. 이터레이터 리절트는 value와 done 프로퍼티를 갖는 객체입니다.
// next 메서드가 호출될 때마다 value 프로퍼티에는 차례대로 꺼내진 배열 요소의 값이 저장되고
// done 프로퍼티에는 요소의 열거가 끝났는지를 뜻하는 논리값이 저장됩니다.
// 이터레이터는 일반적으로 다음 2가지 항목을 만족하는 객체입니다.
// next 메서드를 가진다.
// next 메서드의 반환값은 value, done을 가진 객체이다.


// 반복 가능한 객체와 fon/of문
// 이러레이터를 사용해서 이터레이션을 하려면 개발자가 적절한 처리를 직접 작성해야 합니다.
// 예를 들어 배열의 요소를 이터레이터를 사용해서 목록으로 바꾸려면 다음과 같이 작성합니다.

var a = [5,4,3];
var iter = a[Symbol.iterator]();
while(true){
    var iteratorResult = iter.next();
    if(iteratorResult.done == true) break;
    var v = iteratorResult.value;
    console.log(v);
}

// for/of문을 사용하면 이러한 반복 처리를 자동으로 하도록 만들 수 있습니다.
var a = [5,4,3];
for(var v of a) console.log(v);

// for/of 문은 a 이터레이터의 next 메서드를 순회할 때 마다 매번 호출합니다.
// done 프로퍼티 값이 false가 아닌 동안은 value 프로퍼티 값을 변수 v에 대입해서 for/of 문 안에 있는 코드를 실행 합니다. 이처럼 for/of 문을 사용하면 이터레이터의 반복 처리를 간결하게 표현할 수 있습니다.
// 두 가지 조건을 만족하는 객체를 반복 처리합니다.
// Symbol.iterator 메서드를 가지고 있다.
// Symbol.iterator 메서드는 반환값으로 이터레이터를 반환한다.

for(var v of "ABC") console.log(v) // "A", "B", "C"