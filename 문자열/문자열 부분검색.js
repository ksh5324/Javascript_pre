// 대상문자열.includes(검색문자열,[검색시작인덱스])
// 대상문자열.startsWith(검색문자열,[검색시작인덱스])
// 대상문자열.endsWith(검색문자열,[검색시작인덱스])

const myString = "javaScript를 배우자";
const a1 = "javaScript를 배우자".includes("javaScript");
console.log(a1); // true

const a2 = "javaScript를 배우자".startsWith("배우자");
console.log(a2); // false

const a3 = "javaScript를 배우자".endsWith("배우자");
console.log(a3); // true
