const slime = {
    name: "슬라임"
};

// const cuteSlime = {
//     name: "슬라임",
//     attribute: "cute"
// };
// const purpleCuteSlime = {
//     name: "슬라임",
//     attribute: "cute",
//     color: "purple"
// };

const cuteSlime = {
    ...slime,
    attribute: "cute"
};
const purpleCuteSlime = {
    ...cuteSlime,
    color: "purple"
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);


const animals = ['개','고양이'];
const anotherAnimals = [...animals,'비둘기']; // == const anotherAnimals = animal.concat('비둘기');
console.log(anotherAnimals);
console.log(animals);


const numbers = [1,2,3,4,5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);