const graph = require('./graph');
const list = [];

function topologicalSort(graph) {
  const nodes = Object.keys(graph);

  while (nodes.length) {
    const node = nodes.pop();
    visit(node);
  }

  return list.reverse();
}

function visit(node) {
  if (list.includes(node)) return;

  const n = graph[node];
  for (let i = 0; i < n.length; i++) {
    visit(n[i]);
  }

  list.push(node);
}

const topSort = topologicalSort(graph);
console.log(topSort);

module.exports = topologicalSort;
