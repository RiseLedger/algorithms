const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  append(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.count++;
      return;
    }

    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    current.next = new Node(val);
    this.count++;
  }

  prepend(val) {
    let temp = this.head;
    this.head = new Node(val);
    this.head.next = temp;
    this.count++;
  }

  remove(val) {
    if (!this.head) {
      return;
    }

    if (this.head.val === val) {
      this.head = this.head.next;
      this.count--;
      return;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
        this.count--;
        return;
      }

      current = current.next;
    }
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.head = null;
    this.count = 0;
  }
}

module.exports = LinkedList;

