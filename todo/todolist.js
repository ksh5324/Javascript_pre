var todo = document.getElementById("todo");
var write = document.getElementById("write_todo");
var check = document.getElementById("check");
var te = document.getElementsByClassName("text");
var k = 0;
var a = [];

setInterval(() => {
  const b3 = document.querySelectorAll(".b3").forEach((targ) => {
    targ.addEventListener("click", () => {
      targ.parentNode.parentNode.remove();
    });
  });
}, 100);

setInterval(() => {
  const b2 = document.querySelectorAll(".b2").forEach((targ) => {
    targ.addEventListener("click", () => {
      targ.parentNode.parentNode.firstElementChild.toggleAttribute("readonly");
      targ.parentNode.parentNode.firstElementChild.classList.toggle("kkkkk");
    });
  });
}, 100);

setInterval(() => {
  const b1 = document.querySelectorAll(".b1").forEach((targ) => {
    targ.addEventListener("click", () => {
      targ.parentNode.parentNode.firstElementChild.classList.toggle("uuuuu");
    });
  });
}, 100);

check.addEventListener("click", function (e) {
  var text = write.value;
  write.value = "";
  var element = document.createElement("li");

  var put_text = document.createElement("input");
  put_text.type = "text";
  put_text.className = "text";
  put_text.value = text;
  put_text.readOnly = true;
  put_text.name = k;

  var bu = document.createElement("div");
  bu.className = "bu";

  var b1 = document.createElement("button");
  b1.className = "b1";
  var b2 = document.createElement("button");
  b2.className = "b2";
  var b3 = document.createElement("button");
  b3.className = "b3";

  bu.appendChild(b1);
  bu.appendChild(b2);
  bu.appendChild(b3);

  element.appendChild(put_text);
  element.appendChild(bu);

  todo.appendChild(element);
  k++;
});
