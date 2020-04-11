class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(value) {
    this.nodes[value] = [];
  }

  removeNode(value) {
    delete this.nodes[value];
    for (let key in this.nodes) {
      for (let i = 0; i < this.nodes[key].length; i++) {
        if (this.nodes[key][i] === value) {
          this.nodes[key].splice(i, 1);
          break;
        }
      }
    }
  }

  contains(value) {
    let isFound = false;
    for (let key in this.nodes) {
      if (key === value.toString()) {
        isFound = true;
        break;
      }
    }
    return isFound;
  }

  addEdge(value1, value2) {
    if (!this.nodes[value1] || !this.nodes[value2]) {
      return "Invalid node value";
    }
    if (!this.nodes[value1].includes(value2)) {
      this.nodes[value1].push(value2);
      this.nodes[value2].push(value1);
    }
  }

  removeEdge(value1, value2) {
    if (this.nodes[value1].includes(value2)) {
      for (let i = 0; i < this.nodes[value1].length; i++) {
        if (this.nodes[value1][i] === value2) {
          this.nodes[value1].splice(i, 1);
        }
      }
      for (let i = 0; i < this.nodes[value2].length; i++) {
        if (this.nodes[value2][i] === value1) {
          this.nodes[value2].splice(i, 1);
        }
      }
    }
  }

  hasEdge(value1, value2) {
    let result = false;
    if (this.nodes[value1].includes(value2)) {
      result = true;
    }
    return result;
  }
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Graph;
