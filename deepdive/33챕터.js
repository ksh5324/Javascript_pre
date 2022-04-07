const mySymbol = Symbol();
console.log(mySymbol);

// --------------------------------------

const mySymbol1 = Symbol("mySymbol");
const mySymbol2 = Symbol("mySymbol");
console.log(mySymbol1 === mySymbol2); // false

// --------------------------------------

const mySymbol3 = Symbol("mySymbol");
console.log(mySymbol3.description);
console.log(mySymbol3.toString());

// --------------------------------------

const mySymbol = Symbol();
console.log(mySymbol + ""); // Error
console.log(+mySymbol); // Error

// --------------------------------------

const s1 = Symbol.for("mySymbol");
const s2 = Symbol.for("mySymbol");
console.log(s1 === s2);

// --------------------------------------

const Direction = {
  UP: Symbol("up"),
  DOWN: Symbol("down"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
};

const myDirection = Direction.UP;
if (myDirection === Direction.UP) {
  console.log("Yor are going up");
}

// --------------------------------------

const Direction = Object.freeze({
  UP: Symbol("up"),
  DOWN: Symbol("down"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
});

const myDirection = Direction.UP;
if (myDirection === Direction.UP) {
  console.log("Yor are going up");
}

// --------------------------------------

const obj = {
  [Symbol.for("mySymbol")]: 1,
};

obj[Symbol.for("mySymbol")];

// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
