class Max {
  #array = [];

  constructor(args = []) {
    args.forEach((v) => this.#array.push(v));
  }

  maxElement() {
    return this.#array.reduce((pre, cur) => (pre < cur ? cur : pre));
  }

  getArray() {
    return this.#array;
  }
}

const max = new Max([1, 2, 3, 4]);
max.getArray();
max.maxElement();

// -------------------------------------------------------

const values = [1, 2, 3, 4, 5];
const max2 = Math.max(...values);

console.log(max);
