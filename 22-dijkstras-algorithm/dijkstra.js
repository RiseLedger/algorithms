function getActiveNodeIndexWithLessDistance(nodes) {
  let node = nodes.find(v => v.state === 1);

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].state === 1 && node.distance > nodes[i].distance) {
      node = nodes[i];
    }
  }

  return node.value;
}

function dijkstra(graph, source) {
  const nodes = [];

  for (let i = 0; i < graph.length; i++) {
    nodes.push({
      value: i,
      distance: source === i ? 0 : Infinity,
      state: source === i ? 1 : 0,
      prev: null,
    })
  }

  while (nodes.some(v => v.state !== 2)) {
    const index = getActiveNodeIndexWithLessDistance(nodes);

    for (let i = 0; i < nodes.length; i++) {
      if (graph[index][i] !== 0 && nodes[i].state !== 2) {
        const distance = nodes[index].distance + graph[index][i];
        if (distance < nodes[i].distance) {
          nodes[i].distance = distance;
          nodes[i].prev = nodes[index].value;
        }

        nodes[i].state = 1;
      }
    }

    nodes[index].state = 2;
  }

  return nodes;
}

module.exports = dijkstra;
