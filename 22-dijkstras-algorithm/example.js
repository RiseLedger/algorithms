const dijkstra = require('./dijkstra');
const graph = require('./graph');

const source = 0;
const destination = 4;

const result = dijkstra(graph, source);
const path = [];

let index = result[destination].value;
while (result[index].value !== source) {
  path.push(result[index].value);
  index = result[index].prev;
}

console.log(`The shortest distance from vertex ${source} to ${destination} is ${result[destination].distance} with the following path: ${source}-${path.reverse().join('-')}`);
