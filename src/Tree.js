class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    //adds a child to tree/subtree and returns the new child node
    //(which should be a tree instance)
    const newChild = new Tree(value);
    this.children.push(newChild);
    return newChild;
  }

  contains(value) {
    let result = false;
    //let childValue;
    const findValue = (thisNode) => {
      if (thisNode.value === value) {
        result = true;
        // childValue = thisNode;
      } else {
        thisNode.children.forEach(function(child) {
          findValue(child);
        });
      }
    };

    findValue(this); //<--- starter

    return result;
  }

  remove(value) {
    //removes the value from tree and returns the removed value.
    let nodeToRemove;
    if (this.contains(value) === false) {
      return undefined;
    }
    const searchDeeper = function(node) {
      //search the initial node
      if (node.value === value) {
        nodeToRemove = node.value;
        if (node.children) {
          node.value = undefined;
          node.children = [];
        }
      } else if (node.children) {
        node.children.forEach((element) => {
          searchDeeper(element);
        });
      }
    };
    searchDeeper(this);
    return nodeToRemove;
    s;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+
The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = Tree;
