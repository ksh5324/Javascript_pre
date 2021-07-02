// 노드 옮기기 ->
var doglist = document.getElementById("doglist");
doglist.appendChild(doglist.children[0]);

// 노드삭제 -> removeChild(삭제할 노드);
// 노드 치환하기 -> replaceChild(새로운 노드, 자식 노드);