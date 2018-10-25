const LinkedList = require('./../16-linked-list/LinkedList');
const fnvHash = require('./fnvHash');

class HashTable {
  constructor() {
    this.len = 10;
    this.maxLoadFactor = 0.7;
    this.count = 0;
    this.data = new Array(this.len);
  }

  add(val) {
    if (this.maxLoadFactor < this.getLoadFactor()) {
      this.rehash();
    }

    const index = fnvHash(val) % this.len;

    if (!this.data[index]) {
      this.data[index] = new LinkedList();
    }

    this.data[index].append(val);

    this.count++;
  }

  remove(val) {
    const index = fnvHash(val) % this.len;
    const current = this.data[index];

    if (current && current.search(val)) {
      current.remove(val);
      this.count--;
    }
  }

  has(val) {
    const index = fnvHash(val) % this.len;

    if (this.data[index]) {
      return this.data[index].search(val);
    }

    return false;
  }

  size() {
    return this.count;
  }

  rehash() {
    const temp = this.data;
    const tempLen = this.len;

    this.len = this.len * 2;
    this.data = new Array(this.len);
    this.count = 0;

    for (let i = 0; i < tempLen; i++) {
      if (temp[i]) {
        let items = temp[i].getData();

        for (let j = 0; j < items.length; j++) {
          this.add(items[j]);
        }
      }
    }
  }

  getLoadFactor() {
    return this.count / this.len;
  }
}

module.exports = HashTable;
