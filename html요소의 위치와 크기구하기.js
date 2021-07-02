// var rect = 요소객체.getBoundingClientRect();

// left: 요소 박스의 왼쪽 위 꼭짓점의 X좌표
// top: 요소 박스의 왼쪽 위 꼭짓점의 Y좌표
// right: 요소 박스의 오른쪽 아래 꼭짓점의 X좌표
// bottom: 요소 박스의 오른쪽 아래 꼭짓점의 Y좌표
// width: 요소 박스의 너비
// height: 요소 박스의 높이

let a = document.getElementById("abc");
let b = a.getBoundingClientRect();
console.log(b);