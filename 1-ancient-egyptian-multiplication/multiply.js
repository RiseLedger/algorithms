const [a, b] = process.argv.slice(2).map(Number);

function egyptianMultiplication(a, b) {
  let z = 0;
  if (a === 0) {
    return z;
  }

  while (a > 0) {
    if (a % 2 === 1) {
      z = z + b;
    }

    a = a >> 1;
    b = b << 1;
  }

  return z;
}

const output = egyptianMultiplication(a, b);
console.log(output);
