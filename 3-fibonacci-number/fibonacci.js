const [n] = process.argv.slice(2).map(Number);

function fibonacci(n) {
  const sequence = [0, 1];

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence[n];
}

const output = fibonacci(n);
console.log(output);
