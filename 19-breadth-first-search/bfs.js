const Queue = require('./../15-queue/Queue');

function bfs(Graph, start, end) {
  const q = new Queue();
  const visited = [];

  q.enqueue([start, []]);
  while (!q.isEmpty()) {
    const [vertex, path] = q.dequeue();

    if (visited.includes(vertex)) {
      continue;
    }

    visited.push(vertex);

    if (vertex === end) {
      return [...path, vertex];
    }

    const neighbours = Graph[vertex];
    for (let i = 0; i < neighbours.length; i++) {
      q.enqueue([neighbours[i], [...path, vertex]]);
    }
  }

  return false;
}

module.exports = bfs;
