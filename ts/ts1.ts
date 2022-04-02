let str: string = "abc";
let num: number = 123;
let bool: boolean = true;

let arrNum: number[] = [1, 2, 3];
let arrNum2: Array<number> = [1, 2, 3];

let arrStr: string[] = ["1", "2", "3"];
let arrStr2: Array<string> = ["1", "2", "3"];

let obj1: any = {
  x: 0,
};

declare function greet2(name: string): void;

// 매개변수 타입 표기
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
function getFavoriteNumber(): number {
  return 26;
}

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) {
  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }

  // 최신 JavaScript 문법을 사용하였을 때 또 다른 안전한 코드
  console.log(obj.last?.toUpperCase());
}

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// 오류
printId({ myID: 22342 });

function printId2(id: number | string) {
  console.log(id.toUpperCase());

  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // 여기에서 'x'는 'string[]' 타입입니다
    console.log("Hello, " + x.join(" and "));
  } else {
    // 여기에서 'x'는 'string' 타입입니다
    console.log("Welcome lone traveler " + x);
  }
}

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

type Point = {
  x: number;
  y: number;
};

// 앞서 사용한 예제와 동일한 코드입니다
function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });

type abc = number;
let abc: abc = 123;

interface Point2 {
  x: number;
  y: number;
}

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;

// type Animal = {
//   name: string;
// };

// type Bear = Animal & {
//   honey: Boolean;
// };

// const bear = getBear();
// bear.name;
// bear.honey;

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

let x: "hello" = "hello";
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");

function liveDangerously(x?: number | undefined) {
  // 오류 없음
  console.log(x!.toFixed());
}

const oneHundred: bigint = BigInt(100);

// 리터럴 구문을 통하여 bigint 값을 생성
const anotherHundred: bigint = 100n;

const firstName = Symbol("name");
const secondName = Symbol("name");
