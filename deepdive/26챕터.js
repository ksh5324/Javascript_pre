// class Prefixer {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   add(arr) {
//     return arr.map((item) => this.prefix + item);
//   }
// }

// const prefixer = new Prefixer("-webkit-");
// console.log(prefixer.add(["transition", "user-select"]));

function foo(...rest) {
  console.log(rest);
}

foo(1, 2, 3, 4, 5);
