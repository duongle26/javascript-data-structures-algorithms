class Graph {
  constructor() {
    this.vertices = {};
  }

  // O(1) operation
  addVertex(value) {
    if (!this.vertices.hasOwnProperty(value)) {
      this.vertices[value] = {};
    } else console.log("Vertex has already been exist !");
  }

  // O(1) operation
  getVertex(value) {
    return this.vertices[value];
  }

  // O(E) operation - edges
  removeVertex(value) {
    if (this.vertices.hasOwnProperty(value)) {
      delete this.vertices[value];
      for (let key in this.vertices) {
        if (this.vertices[key].hasOwnProperty(value)) {
          delete this.vertices[key][value];
        }
      }
    }
  }

  // O(1) operation
  addEdge(start, end) {
    if (this.vertices.hasOwnProperty(start) && this.vertices.hasOwnProperty(end)) {
      if (!this.vertices[start].hasOwnProperty(end)) this.vertices[start][end] = 1;
      else console.log("Edge has already been created !")
    }
  }

  // O(1) operation
  getEdge(start, end) {
    return this.vertices[start][end] || null;
  }

  // O(1) operation
  removeEdge(start, end) {
    if (this.vertices.hasOwnProperty(start) && this.vertices.hasOwnProperty(end)) {
      if (this.vertices[start].hasOwnProperty(end)) {
        delete this.vertices[start][end];
      }
    }
  }

  // O(1) operation
  setWeight(start, end, value) {
    if (this.vertices.hasOwnProperty(start) && this.vertices.hasOwnProperty(end)) {
      if (this.vertices[start].hasOwnProperty(end)) {
        this.vertices[start][end] = value;
      }
    }
  }

  // O(1) operation
  neighbors(value) {
    return this.vertices.hasOwnProperty(value) ? this.vertices[value] : null;
  }

  BFS(start) {
    let visited = {};
    let queue = [start];
    visited[start] = true;

    while (queue.length) {
      let current = queue.shift();
      for (const element in this.vertices[current]) {
        if (!visited[element]) {
          visited[element] = true;
          queue.push(element);
        }
      }
    }
    return Object.keys(visited);
  }

  DFS(start, visited = {}) {
    visited[start] = true;

    for (const element in this.vertices[start]) {
      if (!visited[element]) {
        this.DFS(element, visited);
      }
    }
    return Object.keys(visited);
  }
}

const graph = new Graph();
const array = ['A', 'B', 'C', 'D', 'E', 'F'];
for (const v of array) {
  graph.addVertex(v);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');
console.log(graph.vertices);
console.log(graph.BFS('A'));
console.log(graph.DFS('A'));