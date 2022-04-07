/*
const tel = "010-1234-567팔";
const regExp = /^\d{3}-\d{4}-\d{4}$/;

console.log(regExp.test(tel));
*/

// --------------------------------------------

/*
const target = "Is this all there is?";
const regexp = /is/i;
console.log(regexp.test(target));
*/

// --------------------------------------------

/*
const target = "Is this all there is?";

const regexp = new RegExp(/is/i);
// const regexp = new RegExp(/is/, 'i');
// const regexp = new RegExp('is', 'i');

regexp.test(target);
*/

// --------------------------------------------

/*
const target = "Is this all there is?";
const regExp = /is/i;

console.log(regExp.exec(target));
*/

// --------------------------------------------

/*
const target = "Is this all there is?";
const regExp = /is/g;

console.log(target.match(regExp));
*/

// --------------------------------------------

/**
 * i, ignoore case, 대소문자를 구별하지 않고 패턴을 검색한다.
 * g, global, 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
 * m, multi line, 문자열의 행이 바뀌더라도 패턴 검색을 계속한다.
 */

// ---------------------------------------------

/*
const target = "Is this all there is?";
target.match(/is/);
target.match(/is/i);
target.match(/is/g);
target.match(/is/gi);
*/

// ----------------------------------------------

/*
const target = "Is this all there is?";
const regExp = /is/;
regExp.test(target);
target.match(regExp);
*/

// ----------------------------------------------

/*
const target = "Is this all there is?";
const regExp = /is/i;
target.match(regExp);
*/

// ----------------------------------------------

/*
const target = "Is this all there is?";
const regExp = /is/gi;
target.match(regExp);
*/

// -----------------------------------------------

/*
const target = "Is this all there is?";
const regExp = /.../g;
target.match(regExp); // ['Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?']
*/

// ------------------------------------------------

/*
const target = "A AA B BB Aa Bb AAA";
const regExp = /A{1,2}/g;
target.match(regExp);
*/

// ------------------------------------------------

/*
const target = "A AA B BB Aa Bb AAA";
const regExp = /A{1,2}/g;
target.match(regExp);
*/

// ------------------------------------------------

/*
const target = "A AA B BB Aa Bb AAA";
const regExp = /A{2,}/g;
target.match(regExp);
*/

// ------------------------------------------------

/*
const target = "A AA B BB Aa Bb AAA";
const regExp = /A+/g;
target.match(regExp); // ['A', 'AA', 'A', 'AAA']
*/

// ------------------------------------------------

/*
const target = "color colour";
const regExp = /colou?r/g;
target.match(regExp);
*/

// ------------------------------------------------

/*
const target = "A AA B BB Aa Bb";
const regExp = /A|B/g;
target.match(regExp); // ['A', 'A', 'A', 'B', 'B', 'B', 'A', 'B']
*/

// ------------------------------------------------

/*
const target = "A AA B BB Aa Bb";
const regExp = /[AB]+/g;
target.match(regExp); // ['A', 'AA', 'B', 'BB', 'A', 'B']
*/

// -----------------------------------------------

/*
const target = "A AA B BB Aa Bb";
const regExp = /A+|B+/g;
target.match(regExp); // ['A', 'AA', 'B', 'BB', 'A', 'B']
*/

// -----------------------------------------------

/*
const target = "A AA BB ZZ Aa Bb";
const regExp = /[A-Z]+/g;
target.match(regExp);
*/

// -----------------------------------------------

/*
const target = "AA BB Aa Bb 12";
const regExp = /[A-Za-z]+/g;
target.match(regExp);
*/

// -----------------------------------------------

/*
const target = "AA BB 12,345";
const regExp = /[0-9]+/g;
target.match(regExp);
 */

// -----------------------------------------------

/*
const target = "AA BB 12,345";
const regExp = /[0-9,]+/g;
target.match(regExp);
*/

// -----------------------------------------------

/*
const target = "AA BB 12,345";
let regExp = /[\d,]+/g;
target.match(regExp);

regExp = /[\D,]+/g;
target.match(regExp);
*/

// -----------------------------------------------

// [\w] => 알파벳, 숫자, 언더스코어 [A-Za-z0-9_] != [\W]
/*
const target = "Aa Bb 12,345 _$%&";
let regExp = /[\w,]+/g;
target.match(regExp);
*/

// -----------------------------------------------

/*
const target = "AA BB 12 Aa Bb";
const regExp = /[^0-9]+/g;
target.match(regExp);
*/

// -----------------------------------------------

/*
const target = "https://naver.com";
const regExp = /^https/;
regExp.test(target);
*/

// -----------------------------------------------

/*
const target = "https://naver.com";
const regExp = /com$/;
regExp.test(target);
*/

// -----------------------------------------------

/*
const url = "https://naver.com";
/^(http|https):\/\//.test(url);
*/

// -----------------------------------------------

/*
const target = "12345";
/^\d+$/.test(target);
*/

// -----------------------------------------------

/^[\s]+/.test();
/^[A-Za-z0-9]{4,10}$/.test();
/^[0-9a-z-A-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]*[a-zA-Z]{2,3}$/.test();
