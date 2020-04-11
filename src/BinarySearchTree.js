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

  contains(value) {
    let wasFound = false;
    const traverse = function(node) {
      if (value === node.value) {
        wasFound = true;
      } else if (value < node.value && node.left) {
        traverse(node.left);
      } else if (value > node.value && node.right) {
        traverse(node.right);
      }
    };
    traverse(this);
    return wasFound;
  }

  traverseDepthFirstInOrder(callback) {
    const traverse = function(node) {
      if (node.left) {
        traverse(node.left);
      }
      callback(node);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this);
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
