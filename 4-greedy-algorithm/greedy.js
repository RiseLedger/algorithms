const [n] = process.argv.slice(2).map(Number);
const coins = [1, 5, 10, 25, 50];

function minimumCoins(n) {
  let amount = 0;

  while (n > 0) {
    n = n - pickCoin(n);
    amount++;
  }

  return amount;
}

function pickCoin(n) {
  return [...coins].reverse().filter((x) => x <= n)[0];
}

const output = minimumCoins(n);
console.log(output);
