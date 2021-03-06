class Queue {
  #array;
  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new Error(`${array} is not an array`);
    }
    this.#array = array;
  }

  enqueue(value) {
    return this.#array.push(value);
  }

  dequeue() {
    return this.#array.shift();
  }

  entries() {
    return [...this.#array];
  }
}

const queue = new Queue([1, 2]);
