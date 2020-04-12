const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    this.storage[key] = value;
  }

  retrieve(key) {
    const idx = simpleHash(key, this.limit);
    return this.storage[key];
  }

  remove(key) {
    if (this.storage[key]) {
      delete this.storage[key];
      this.storage[key] = null;
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
