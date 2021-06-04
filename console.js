// console

// console.dir -> 객체의 대화형 목록을 출력
// console.error -> 오류 메세지를 출력
// console.info -> 메세지 타입 로그를 출력
// console.log -> 일반 로그 출력
// console.time -> 처러 시간 측정용 타이머를 시작
// console.timeEnd -> 처리 시간 측적용 타이머를 정지시키고 타이머를 시작한 후에 흐른 시간을 밀리초 단위로 출력
// console.trace -> 스택 트레이스를 출력
// console.warn -> 경고 메세지를 출력

let a = [2,4,6];
console.log("배열", a, "의 길이는", a.length, "입니다.");
// 배열 [2, 4, 6]의 길이는 3 입니다.

console.log("배열 " + a + " 의 길이는 " + a.length + " 입니다.");
// 배열 2, 4, ,6 의 길이는 3 입니다.

var name = "Tom";
var height = 172.5;
console.log("그의 이름은 %s 이며 키는 %f cm 입니다.", name, height);
// 그의 이름은 Tom 이며 키는 172.5 cm 입니다.

let p = {x:1, y: 2};
console.dir(p);

console.time("answer_time");
alert("확인 버튼을 누르십시오");
console.timeEnd("answer_time");
// answer_time: ....ms