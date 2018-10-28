const Queue = require('./../15-queue/Queue');

function bfs(Graph, start, end) {
  const q = new Queue();
  const visited = [];

  q.enqueue(start);
  while (!q.isEmpty()) {
    const vertex = q.dequeue();

    if (visited.includes(vertex)) {
      continue;
    }

    visited.push(vertex);

    if (vertex === end) {
      return true;
    }

    const neighbours = Graph[vertex];
    for (let i = 0; i < neighbours.length; i++) {
      q.enqueue(neighbours[i]);
    }
  }

  return false;
}

module.exports = bfs;
