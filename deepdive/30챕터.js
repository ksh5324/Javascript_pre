const today = new Date();
console.log(today.getFullYear());

today.setFullYear(2000);
console.log(today.getFullYear());

new Date("2020/07/24").getMonth();

new Date("2020/07/24").getDate();

today.setDate(1);
today.getDate();

const now = new Date();
now.getTimezoneOffset() / 60;

now.toDateString();
now.toISOString();
now.toTimeString();

now.toLocaleString();
now.toLocaleString("ko-KR");
now.toLocaleString("en-US");
now.toLocaleString("ja-JP");
now.toLocaleDateString();
now.toLocaleDateString("ko-KR");
now.toLocaleDateString("en-US");
now.toLocaleDateString("ja-JP");

(function printNow() {
  const today = new Date();

  const dayNames = [
    "(일요일)",
    "(월요일)",
    "(화요일)",
    "(수요일)",
    "(목요일)",
    "(금요일)",
    "(토요일)",
  ];

  const day = dayNames[today.getDay()];
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";

  hour %= 12;
  hour = hour || 12;

  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}${second} ${ampm}`;

  console.log(now);

  setTimeout(printNow, 1000);
})();
