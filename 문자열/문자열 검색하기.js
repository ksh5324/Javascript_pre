// 대상문자열.indexOf(검색대상 문자열,[검색시작인덱스])
// 대상문자열.lastIndexOf(검색대상 문자열,[검색시작인덱스])
// 대상문자열.search(검색대상 문자열,[검색시작인덱스])

// const myString = 'javaScript를 배우자';
// const a1 = myString.indexOf('javascript');
// console.log(a1); -> 0

// const a2 = myString.indexOf('베우자');
// console.log(a2); -> 12

// const a3 = myString.LastIndexOf('a');
// console.log(a3); -> 3

// 존재하지 않을 경우 -1 반환/대소문자 구분

const targetString = "javaScript를 배우자";
document.querySelector(".result1").innerHTML =
  targetString.indexOf("javaScript");
document.querySelector(".result2").innerHTML = targetString.indexOf("배우자");
