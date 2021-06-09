// 확장 기능 속성
// 객체의 확장 가능 속성은 객체에 새로운 프로퍼티를 추가할 수 있는지를 결정합니다.
// 확장 가능 속성 값이 true로 설정된 객체에는 새로운 프로퍼티를 추가할 수 있지만 false로 설정된 객체에는 추가할 수 없습니다.
// 사용자가 정의한 객체와 내장 객체는 기본적으로 롹장이 가능하지만 호스트 객체의 확장 가능 속성은 자바스크립트 실행 환경에 따라 설정된 값이 다릅니다.

// 확장 방지: Object.prevnetExtensions
// 이 메서드는 인수로 받은 객체를 확장할 수 없게 만듭니다.
// 이 메서드로 확장할 수 없게 만든 객체는 두 번 다시 프로퍼티를 추가할 수 없게 됩니다.

var person = {name: "Tom"};
Object.preventExtensions(person);
person.age = 17;
console.log("age" in person); // false

// 이처럼 확장할 수 없는 객체에 프로퍼티를 추가하는 명령은 무시됩니다.
// 또한 Object.isExtensible(person));
console.log(Object.isExtensible(person)); // false

// 밀봉: Object.seal
// Object.seal 메서드는 인수로 받은 객체를 밀봉합니다.
// 밀봉이란 객체에 프롳퍼트릴 추가하는 것을 금지하고 기존의 모든 프로퍼티를 재정의 할 수 없게 만드는 것을 말합니다.

var person = {name: "Tom"};
Object.seal(person);
person.age = 17;
delete person.name;
Object.defineProperty(person,"name",{enumerable: false});
console.log("name" in person); // true: name이 삭제되지 않음
console.log("age" in person); // false: age가 추가되지 않음
console.log(Object.getOwnPropertyDescriptor(person, "name"));


// 밀봉된 객체인지 확인하기
console.log(Object.isSealed(person)); // true

// 동결: Object.freeze
// 이 메서드는 인수로 받은 객체를 동결합니다.
// 동결이란 객체에 프로퍼티를 추가하는 것을 ㄱ름지하고 기존의 모든 프로퍼티를 재정의 할수 없게 만들며 데이터 프로퍼티를 쓸 수 없게 만드는 것입니다.
// 다시 말해 객체가 동결하면 객체의 프로퍼티가 읽기만 가능한 상태가 됩니다.
// 단 객체에 접근자 프로퍼티가 정의되어 있다면 게터 함수와 세터 함수 모두를 호출할 수 있습니다.

var person = {name: "Tom"};
Object.freeze(person);

// 동결상태 확인
console.log(Object.isFrozen(person));