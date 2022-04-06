class ccc {
  #array = [];
  constructor(args = []) {
    args.forEach((v) => this.#array.push(v));
  }
  getArray() {
    return this.#array;
  }
  getCount() {
    return this.#array.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
  }
}

const c = new ccc([1, 2, 3, 4, 4, 3, 2, 2, 2, 3]);
console.log(c.getArray());
console.log(c.getCount());
