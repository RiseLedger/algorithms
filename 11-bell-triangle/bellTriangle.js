const [n] = process.argv.slice(2).map(Number);

function bellTriangle(n) {
  let x = 1;
  let sequence = [[1]];
  let limit = 2;

  while (x < n) {
    sequence[x] = [];

    for (let i = 0; i < limit; i++) {
      if (i === 0) {
        sequence[x][i] = sequence[x - 1][sequence[x - 1].length - 1];
      }
      else {
        sequence[x][i] = sequence[x][i - 1] + sequence[x - 1][i - 1];
      }
    }

    limit++;
    x++;
  }

  return sequence.reduce((a, b) => [...a, ...b], []);
}

const output = bellTriangle(n);
console.log(output);
