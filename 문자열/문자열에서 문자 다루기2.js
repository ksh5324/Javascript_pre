// 문자열.slice(시작인덱스,[종료인덱스])
// 문자열.substring(시작인덱스,[종료인덱스])

"javaScript".slice(0, 4); // java
"javaScript".slice(0); // javaScript
"javaScript".substring(0, 4); // java
"javaScript".substring(0); // javaScript

"나의 노트북".slice(3, -1); // (음수일 경우 맨뒤가 -1) -> 노트
"나의 노트북".slice(-6, -4); // 나의
// substring에 인수가 음수일 경우 0으로 취급

// slice와 substring에 차이
// 1번 인수가 2번 인수보다 클 경우 slice에서는 뒤에 인덱스에서 앞에 인덱스를 도달할수 없어 공백을 반환하지만 substring은 인수 2개를 바꿔서 처리한다.

// 문자열.substr(시작인덱스, [글자수])
"javaScript".substr(4, 6); // Script
