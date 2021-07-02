// 새료운 노드 객체를 생성할 때는 createElement 메서드를 사용합니다.
var element = document.createElement(요소이름);

var headline = document.createElement("h1");
console.log(headline.nodeName); // "H1"
console.log(headline.nodeType); // 1

// 새로운 텍스트 노드 객체 생성
var textnode = document.createTextNode(텍스트);

var newtext = document.createTextNode("We only see what we know.");

// 종류
document.createElement(요소이름); // 요소 노드 객체
document.createAttribute(속성이름); // 속성 노드 객체
document.createTextNode(텍스트); // 텍스트 노드 객체
document.createComment(텍스트); // 주석 노드 객체
document.importNode(다른문서의노드, deep); // 다른 문서 노드 복사. deep을 true로 하면 사직 노드까지 복사, false면 얕은 복사
node.cloneNode(deep); // 노드 복사. deep을 true로 하면 사직 노드까지 복사, false면 얕은 복사