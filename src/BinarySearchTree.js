class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }

  insert(value) {
    const child = new BinarySearchTree(value);
    let traverse = function(node) {
      //console.log(node.value, "VALUEEEEEEEEEEE")
      if (node.value > value && node.left) {
        traverse(node.left);
      } else if (node.value > value && !node.left) {
        node.left = child;
      } else if (node.value < value && node.right) {
        traverse(node.right);
      } else if (node.value < value && !node.right) {
        node.right = child;
      }
    };
    traverse(this);
    return this;
  }
}

/* 
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = { BinarySearchTree };
