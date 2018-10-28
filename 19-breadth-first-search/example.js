const bfs = require('./bfs');

const Graph = {
  'A': ['B', 'C'],
  'B': ['C', 'F'],
  'C': ['D', 'E'],
  'D': ['E'],
  'E': [],
  'F': ['E'],
};

const result = bfs(Graph, 'A', 'E');
console.log(result);
