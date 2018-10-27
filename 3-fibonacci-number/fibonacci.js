function fibonacci(n) {
  const sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence[n];
}

module.exports = fibonacci;
