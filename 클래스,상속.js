function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function(){
    console.log(this.sound);
}

Animal.prototype.sharedValue = 1;

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

console.log(dog.sharedValue);
console.log(cat.sharedValue);

dog.say();
cat.say();


function Dog(name, sound){
    this.type = "개";
    this.name = name;
    this.sound = sound;
}
// function Cat(name, sound){
//     this.type = "고양이";
//     this.name = name;
//     this.sound = sound;
// }
function Cat(name, sound){
    Animal.call(this, "고양이", name, sound);
}
Cat.prototype = Animal.prototype;
const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("야옹이", "야옹");