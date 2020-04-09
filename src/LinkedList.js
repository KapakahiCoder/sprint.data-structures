function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
  }

  appendToTail(value) {
    let box = new Node(value);
    if (this.head === undefined) {
      this.head = box;
      this.tail = this.head;
    }

    return (this.tail = box);
  }

  removeHead() {}

  findNode(value) {}

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  forEach(callback) {}

  print() {}

  insertHead(value) {}

  insertAfter(refNode, value) {}

  removeAfter(refNode) {}
}

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
