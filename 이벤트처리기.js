// 이벤트 처리기
// 웹 브라우저에서 동작하는 프로그램은 기본적으로 이벤트 주도형 프로그램입니다.
// 이벤트란 사용자가 버튼을 클랙하는 행위처럼 동작이나 사건입니다.
// 이벤트가 발생할 때까지 기다렸다가 이벤트가 발생했을 때 미리 등록해 둔 작업을 수행하는 프로그램을 말합니다.

// 이벤트 처리기란 이벤트가 발생했을 때 실행되는 함수를 말합니다.
// 함수를 이벤트가 발생했을 때 동작할 이벤트 처리기로 설정하는 행위를 '함수를 이벤트의 이벤트 처리기로 등록'한다고 합니다.

// html요소 속성으로 등록하는 방법
// <!doctype>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <script>
//             function displayTime() {
//                 let d = new Date;
//                 console.log("현재 시각은 " + d.toLocalString() + " 입니다.");
//             }
//         </script>
//     </head>
//     <body>
//         <Input type="button" value="click" onclick="displayTime();">
//     </body>
// </html>

// 이벤트 종류
// onclick -> 마우스로 클릭했을 때
// ondbclick -> 마우스로 더블클릭했을 때
// onmousedown -> 마우스 버튼을 눌렀을 때
// onmouseup -> 마우스 버튼에서 손가락을 떼었을 때
// onmousemove -> 마우스 포인터가 html요소 위에서 움직일 때
// onmouseover -> 마우스 포인터가 html요소를 벗어날을 때
// onkeydown -> 키보드의 키를 눌렀을 때
// onkeypress -> 키보드의 키를 누르고 손가락을 떼었을 때
// onkeydown -> 키보드의 키를 눌렀을 때
// onkeyup -> 키보드의 키에서 손가락을 떼었을 때
// onchange -> input 요소의 값이 바뀌었을 때
// onblur -> input 요소가 포커스를 잃었을 때
// onfocus -> input 요소에 포커스를 맞추었을 때
// onselect -> 텍스트 필드 등의 텍스트를 선택했을 때
// onsubmit -> 폼 제출 버튼을 눌렀을 때
// onload -> html을 모두 읽어 들였을 때
// onunloadWeb -> 웹 페이지가 메모리에서 내려갈떄(예: 다른 페이지로 전환할 때)
// onabort -> 페이지나 이미지 읽어 들이기가 중단 되었을 때
// onerror -> 페이지나 이미지를 읽어 들이는 동안 오류가 발생했을 때
// onresize -> html 요소의 크기가 바뀌었을 때

// 이벤트 처리기 제거
button.onclick = null;