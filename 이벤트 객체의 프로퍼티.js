// type -> 문자열 : 이벤트 이름("click", "mousedown", "keydown");
// target -> 요소 객체 : 이벤트가 발생한 요소
// currentTarget -> 요소 객체 : 처리를 담당하는 이벤트 리스너가 등록된 요소 객체
// eventPhase -> 정수 : 이벤트 전파 단계(1:캡처링 단계, 2:타깃 단계, 3: 버블링 단계)
// timeStamp -> 정수 : 이벤트 발생 시각
// bubbles -> 논리값 : 버블링 단계인지를 뜻하는 값
// cancelable -> 논리값 : preventDefault()로 기본 이벤트를 취소할 수 있는지를 뜻하는 값
// isTrusted -> 논리값 : 해당 이벤트가 사용자의 액션에 의해 생성되었는지를 뜻하는 값