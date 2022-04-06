class MyArray extends Array {
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray);

console.log(myArray.uniq());
