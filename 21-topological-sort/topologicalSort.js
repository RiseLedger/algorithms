const list = [];
const tempMark = [];

function topologicalSort(graph) {
  const nodes = Object.keys(graph);

  while (nodes.length) {
    const node = nodes.pop();
    visit(node, graph);
  }

  return list.reverse();
}

function visit(node, graph) {
  if (list.includes(node)) return;
  if (tempMark.includes(node)) throw new Error('Graph has at least one cycle');

  tempMark.push(node);

  const n = graph[node];
  for (let i = 0; i < n.length; i++) {
    visit(n[i], graph);
  }

  tempMark.pop(node);
  list.push(node);
}

module.exports = topologicalSort;
