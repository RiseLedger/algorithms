function egyptianMultiplication(a, b) {
  let z = 0;

  while (a > 0) {
    if (a % 2 === 1) {
      z = z + b;
    }

    a = a >> 1;
    b = b << 1;
  }

  return z;
}

module.exports = egyptianMultiplication;
