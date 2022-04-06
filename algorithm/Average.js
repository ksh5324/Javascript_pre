class Average extends Array {
  getAverage() {
    return this.reduce((pre, cur) => (pre += cur)) / this.length;
  }
  getArray() {
    return this;
  }
}

const arr = new Average(1, 2, 3, 4, 5);
arr.getArray();
arr.getAverage();

// ----------------------------------------------------------

const values = [1, 2, 3, 4, 5, 6];

const average = values.reduce((acc, cur, i, { length }) => {
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);
console.log(average);
