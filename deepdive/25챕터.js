// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(`Hi! My name is ${this.name}`);
//   }
// }

// const me = new Person("Lee");
// me.sayHi();

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const ne = new Person("Lee");
// console.log(me); // Person { name: "Lee" }

// class Person {
//   #name = "";
//   constructor(name) {
//     this.#name = name;
//   }
//   get name() {
//     return this.#name.trim();
//   }
// }

// const me = new Person("Lee");

// console.log(me.name);

// class MyMath {
//   // public
//   static PI = 22 / 7;

//   // private
//   static #num = 10;

//   static increment() {
//     return ++MyMath.#num;
//   }
// }

// console.log(MyMath.PI);
// console.log(MyMath.increment());

// class Animal {
//   constructor(age, weight) {
//     this.age = age;
//     this.weight = weight;
//   }

//   eat() {
//     return "eat";
//   }
//   move() {
//     return "move";
//   }
// }

// class Bird extends Animal {
//   fly() {
//     return "fly";
//   }
// }

// const bird = new Bird(1, 5);

// console.log(bird);
// console.log(bird instanceof Bird);
// console.log(bird instanceof Animal);
// console.log(bird.eat());
// console.log(bird.move());
// console.log(bird.fly());

// function Base1() {}

// class Base2 {}

// let condition = true;

// class Derived extends (condition ? Base1 : Base2) {}

// const derived = new Derived();
// console.log(derived);

// console.log(derived instanceof Base1);
// console.log(derived instanceof Base2);

class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Derived extends Base {
  constructor(a, b, c) {
    super(a, b);
    this.c = c;
  }
}

const derived = new Derived(1, 2, 3);
console.log(derived);
