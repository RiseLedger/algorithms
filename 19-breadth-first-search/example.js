const readline = require('readline');
const fs = require('fs');
const path = require('path');
const bfs = require('./bfs');

const rl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, 'graph.in')),
  crlfDelay: Infinity
});

let c = 'params';
let rows, cols;
let count = 0;
const matrix = [];

rl.on('line', (line) => {
  const data = line.split(' ');

  switch (c) {
    case 'params':
      rows = +data[0];
      cols = +data[1];

      c = 'connections';
      break;
    default:
      matrix.push(data);
      count++;

      if (count === rows) {
        const result = bfs(matrix, 0, 'E');

        if (result) {
          console.log('Node E exist in Graph');
        }
        else {
          console.log('Node E does not exist in Graph');
        }
      }
      break;
  }
});
