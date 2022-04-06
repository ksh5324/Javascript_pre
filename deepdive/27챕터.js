// const arr = [];

// console.time("Array Performance Test");

// for (let i = 0; i < 10000000; i++) {
//   arr[i] = i;
// }

// console.timeEnd("Array Performance Test");.

// const obj = {};

// console.time("Object Performance Test");

// for (let i = 0; i < 10000000; i++) {
//   obj[i] = i;
// }

// console.timeEnd("Object Performance Test");

// const arr = [1, 2, 3];
// console.log(arr.length);

// arr.push(4);
// console.log(arr.length);

// arr.pop();
// console.log(arr.length);

// const arr = [1, 2, 3, 4, 5];
// arr.length = 3;
// console.log(arr);

// new Array(1, 2, 3);

// new Array({});

// Array(1, 2, 3);

// Array.of(1);

// Array.of(1, 2, 3);

// Array.of("string");

// Array.from({ length: 2, 0: "a", 1: "b" });
// Array.from("Hello");

// Array.from({ length: 3 });
// Array.from({ length: 3 }, (_, i) => i);

// const arr = [0];
// arr[1] = 1;
// console.log(arr);
// console.log(arr.length);

// arr[100] = 100;
// console.log(arr);
// console.log(arr.length);

// const arr = [];
// arr[0] = 1;
// arr["1"] = 2;

// arr["foo"] = 3;
// arr.bar = 4;
// arr[1.1] = 5;
// arr[-1] = 6;

// console.log(arr);

// console.log(arr.length);

// const arr = [1, 2, 3];
// delete arr[1];
// console.log(arr);

// console.log(arr.length);

// const arr = [1, 2, 3];
// arr.splice(1, 1);
// console.log(arr);
// console.log(arr.length);

// const arr = [1];
// arr.push(2);
// console.log(arr);

// const result = arr.concat(3);
// console.log(arr);
// console.log(result);

// Array.isArray([]);
// Array.isArray([1, 2]);
// Array.isArray(new Array());

// const arr = [1, 2, 3, 4];
// arr.indexOf(2);
// arr.indexOf(4);
// arr.indexOf(2, 2);

// const foods = ["apple", "banana", "orange"];
// if (foods.indexOf("orange") === -1) {
//   foods.push("orange");
// }
// console.log(foods);
// const foods = ["apple", "banana", "orange"];
// if (foods.includes("orange") === -1) {
//   foods.push("orange");
// }
// console.log(foods);

// const Stack = (function () {
//   function Stack(array = []) {
//     if (!Array.isArray(array)) {
//       throw new TypeError(`${array} is not an array.`);
//     }
//     this.array = array;
//   }

//   Stack.prototype = {
//     constructor: Stack,
//     push(value) {
//       return this.array.push(value);
//     },
//     pop() {
//       return this.array.pop();
//     },
//     entries() {
//       return [...this.array];
//     },
//   };
//   return Stack;
// })();

// const stack = new Stack([1, 2]);
// console.log(stack.entries());

// stack.push(3);
// console.log(stack.entries());

// stack.pop();
// console.log(stack.entries());

// class Stack {
//   #array;

//   constructor(array = []) {
//     if (!Array.isArray(array)) {
//       throw new TypeError(`${array} is not an array.`);
//     }
//     this.#array = array;
//   }

//   push(value) {
//     return this.#array.push(value);
//   }

//   pop() {
//     return this.#array.pop();
//   }

//   entries() {
//     return [...this.#array];
//   }
// }

// const stack = new Stack([1, 2]);
// console.log(stack.entries());

// stack.push(3);
// console.log(stack.entries());

// stack.pop();
// console.log(stack.entries());

// const Queue = (function () {
//   function Queue(array = []) {
//     if (!Array.isArray(array)) {
//       throw new TypeError(`${array} is not an array`);
//     }
//     this.array = array;
//   }

//   Queue.prototype = {
//     constructor: Queue,
//     enqueue(value) {
//       return this.array.push(value);
//     },
//     dequeue() {
//       this.array.shift();
//     },
//     entries() {
//       return [...this.array];
//     },
//   };
//   return Queue;
// })();

// const queue = new Queue([1, 2]);
// console.log(queue.entries());

// queue.enqueue(3);
// console.log(queue.entries());

// queue.dequeue();
// console.log(queue.entries());

// class Queue {
//   #array;
//   constructor(array = []) {
//     if (!Array.isArray(array)) {
//       throw new Error(`${array} is not an array`);
//     }
//     this.#array = array;
//   }

//   enqueue(value) {
//     return this.#array.push(value);
//   }

//   dequeue() {
//     return this.#array.shift();
//   }

//   entries() {
//     return [...this.#array];
//   }
// }

// const queue = new Queue([1, 2]);

// const arr = [1, 2, 3, 4];
// const result = arr.splice(1, 2, 20, 30);

// console.log(result);

// console.log(arr);

// const arr = [1, 2, 3];
// arr.slice(1);

// const arr = [1, 2, 3];
// arr.slice(-1);
// arr.slice(-2);

// const arr = [1, 2, 3];
// const copy = arr.slice();

// console.log(copy);
// console.log(copy === arr);

// const todos = [
//   { id: 1, content: "HTML", completed: false },
//   { id: 2, content: "CSS", completed: true },
//   { id: 3, content: "Javascript", completed: false },
// ];
// const _todos = todos.slice();
// console.log(_todos === todos);
// console.log(_todos[0] === todos[0]);

// const arr = [1, 2, 3];
// const result = arr.reverse();

// console.log(arr);
// console.log(result);

// const arr = [1, 2, 3, 4, 5];
// arr.fill(0);
// console.log(arr);
// arr.fill(0, 1);
// console.log(arr);
// arr.fill(0, 1, 3);
// console.log(arr);

// const arr = new Array(3);
// console.log(arr);

// const result = arr.fill(1);

// const sequences = (length = 0) => Array.from({ length }, (_, i) => i);
// console.log(sequences(3));

// [1, [2, 3, 4, 5]].flat();

// [1, [2, [3, [4]]]].flat();
// [1, [2, [3, [4]]]].flat(1);

// [1, [2, [3, [4]]]].flat(2);
// [1, [2, [3, [4]]]].flat().flat();

// [1, [2, [3, [4]]]].flat(Infinity);

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.sort();
// console.log(fruits);

// const points = [40, 100, 1, 5, 2, 25, 10];
// points.sort((a, b) => a - b);
// console.log(points);

// points.sort((a, b) => b - a);
// console.log(points);

// const todos = [
//   { id: 1, content: "HTML", completed: false },
//   { id: 2, content: "CSS", completed: true },
//   { id: 3, content: "Javascript", completed: false },
// ];

// function compare(key) {
//   return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
// }
// todos.sort(compare("id"));
// console.log(todos);

// todos.sort(compare("content"));
// console.log(todos);

// [5, 10, 15].some((item) => item > 10);
// [5, 10, 15].some((item) => item < 0);
// ["apple", "banana", "mango"].some((item) => item === "banana");
// [].some((item) => item > 3);

// [5, 10, 15].every((item) => item > 3);
// [5, 10, 15].every((item) => item > 10);

// const users = [
//   { id: 1, name: "Lee" },
//   { id: 2, name: "Kim" },
//   { id: 3, name: "Choi" },
//   { id: 4, name: "Park" },
// ];
// users.find((user) => user.id === 2);
