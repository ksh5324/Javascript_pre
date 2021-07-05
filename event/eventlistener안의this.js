function Person(name){
    this.name = name;
};
Person.prototype.sayHello = function(){
    console.log("hello!" + this.name);
}
var person = new Person("tom");
var button = document.getElementById("button");
// button.addEventListener("click", person.sayHello.bind(person), false);
button.addEventListener("click", function(e){
    person.sayHello();
}, false);