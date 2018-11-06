function getActiveNodeWithLessDistance(nodes) {
  let node = nodes.find(v => v.state === 1);

  for (let i = 1; i < nodes.length; i++) {
    const currentNode = nodes[i];
    if (currentNode.state === 1 && node.distance > currentNode.distance) {
      node = nodes[i];
    }
  }

  return node;
}

function dijkstra(graph, source) {
  const nodes = [];

  for (let i = 0; i < graph.length; i++) {
    const node = {
      value: i,
      distance: source === i ? 0 : Infinity,
      state: source === i ? 1 : 0,
      prev: null,
    };

    nodes.push(node);
  }

  while (nodes.some(v => v.state !== 2)) {
    const vertex = getActiveNodeWithLessDistance(nodes);

    for (let i = 0; i < nodes.length; i++) {
      if (graph[vertex.value][i] !== 0 && nodes[i].state !== 2) {
        const distance = vertex.distance + graph[vertex.value][i];

        if (distance < nodes[i].distance) {
          nodes[i].distance = distance;
          nodes[i].prev = vertex.value;
          nodes[i].state = 1;
        }
      }

      nodes[vertex.value].state = 2;
    }
  }

  console.log('final result', nodes);
}

module.exports = dijkstra;
