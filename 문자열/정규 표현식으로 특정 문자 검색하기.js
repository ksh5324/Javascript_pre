// /패턴/.test(문자열)

/J/.test("JavaScript"); // J가 JavaScript에 포함되어 있는지 여부 -> true
/^iP/.test("iPhone"); // iPhone의 시작 문자가 iP인지 여부 -> true
/\d/.test("레시피"); // 레시피 문자열 내 숫자 포함 여부 -> false
/Java.*/.test("JavaScript"); // Jav 다음에 a가 0회 이상 존재 여부 -> true
/코.*피/.test("코드 레시피"); // 코피 혹은 코와 피 사이의 문자 존재 여부 -> true
/\d+-\d+-\d+/.test("010-1234-5678"); // 숫자-숫자-숫자

/^[0][0-9]{9,10}$/; // 0으로 시작하고 0-9까지 수이며 9,10짜리 수
