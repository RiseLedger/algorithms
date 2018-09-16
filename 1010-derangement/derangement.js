const [n] = process.argv.slice(2).map(Number);

function derangement(n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return 0;
  }

  return (n - 1) * (derangement(n - 1) + derangement(n - 2));
}

const output = derangement(n);
console.log(output);
