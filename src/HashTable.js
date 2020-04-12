const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    this.storage[index] = value;
  }

  retrieve(key) {
    const idx = simpleHash(key, this.limit);
    return this.storage[idx];
  }

  remove(key) {
    const idx = simpleHash(key, this.limit);
    if (this.storage[idx]) {
      delete this.storage[idx];
      this.storage[idx] = null;
      return true;
    }
    return false;
  }
}

module.exports = HashTable;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
