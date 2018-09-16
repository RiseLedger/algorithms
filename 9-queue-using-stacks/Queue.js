var Stack = require('../7-stack/Stack');

class Queue {
  constructor() {
    this.dequeueStack = new Stack();
    this.enqueueStack = new Stack();
  }

  isEmpty() {
    return this.dequeueStack.isEmpty() && this.enqueueStack.isEmpty();
  }

  size() {
    return this.dequeueStack.size() + this.enqueueStack.size();
  }

  enqueue(item) {
    this.enqueueStack.push(item);
  }

  dequeue() {
    if (!this.dequeueStack.size()) {
      this.transferStack();
    }

    return this.dequeueStack.pop();
  }

  transferStack() {
    while(this.enqueueStack.size()) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }
  }
}

module.exports = Queue;
