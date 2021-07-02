// 노드 삽입
// 요소의 마지막에 삽입
//요소노드.appendChild(삽입할노드);

var doglist = document.getElementById("doglist");
var element = document.createElement("li");
var text = document.createTextNode("불독");
// element.appendChild(text);
// doglist.appendChild(element);
// ==
element.textContent = "불독";
doglist.appendChild(element);