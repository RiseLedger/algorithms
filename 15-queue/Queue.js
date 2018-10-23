class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(item) {
    this.data.push(item);
  }

  dequeue() {
    return this.data.shift();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.data.length;
  }
}

module.exports = Queue;
