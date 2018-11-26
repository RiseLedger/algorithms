const Stack = require('./../07-stack/Stack');

function dfs(graph, start, end) {
  const s = new Stack();
  const visited = [];

  s.push([start, []]);
  while (!s.isEmpty()) {
    const [vertex, path] = s.pop();

    if (visited.includes(vertex)) {
      continue;
    }

    visited.push(vertex);

    if (vertex === end) {
      return [...path, vertex];
    }

    const neighbours = graph[vertex];
    for (let i = 0; i < neighbours.length; i++) {
      s.push([neighbours[i], [...path, vertex]]);
    }
  }

  return false;
}

module.exports = dfs;
