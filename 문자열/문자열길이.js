// 문자열.length
// Array.from(문자열).length
// "웹디자인".length; // 4
// "javascript".length; // 10

const textarea = document.querySelector(".textarea");
const string_num = document.querySelector(".string_num");
textarea.addEventListener("keyup", onKeyUp);

function onKeyUp() {
  const inputText = textarea.value;
  string_num.innerHTML = inputText.length;
}
