const Queue = require('./../15-queue/Queue');

function bfs(matrix, start, end) {
  const q = new Queue();
  const graph = [];
  const path = [];

  for (let i = 0; i < matrix.length; i++) {
    graph[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] !== '0') {
        graph[i][j] = {
          isVisited: 0,
          val: matrix[i][j],
          index: j,
        };
      }
      else {
        graph[i][j] = 0;
      }
    }
  }

  // initialize
  for (let i = 0; i < graph[start].length; i++) {
    if (graph[start][i]) {
      q.enqueue(graph[start][i]);
    }
  }

  while (!q.isEmpty()) {
    const vertex = q.dequeue();

    if (vertex.isVisited) {
      continue;
    }

    path.push(vertex);

    if (vertex.val === end) {
      return true;
    }

    vertex.isVisited = 1;
    for (let i = 0; i < graph[vertex.index].length; i++) {
      if (graph[vertex.index][i]) {
        q.enqueue(graph[vertex.index][i]);
      }
    }
  }

  return false;
}

module.exports = bfs;
