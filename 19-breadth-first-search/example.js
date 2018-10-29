const bfs = require('./bfs');
const graph = require('./graph');

const result = bfs(graph, 'A', 'E');
console.log(result);
