// 문자열.padStart(전체길이,[추가문자열])
// 문자열.padEnd(전체길이,[추가문자열])

// "5".padStart(2, "0"); // 05
// "ff".padEnd(6, "0"); // ff0000

// "123".padStart(3, "0"); // 123
// "ff".padStart(6); // '    ff' 공백 삽입

const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");

update();

function update() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  hourElement.innerText = addZeroPadding(hour);
  const minute = currentTime.getMinutes();
  minuteElement.innerText = addZeroPadding(minute);
  const second = currentTime.getSeconds();
  secondElement.innerText = addZeroPadding(second);
  requestAnimationFrame(update);
}

function addZeroPadding(num) {
  return String(num).padStart(2, "0");
}
