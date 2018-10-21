function gcd(a, b) {
  while (b !== 0) {
    var temp = b;

    b = a % b;
    a = temp;
  }

  return a;
}

module.exports = gcd;
