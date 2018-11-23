function minimumCoins(coins, n) {
  let amount = 0;

  while (n > 0) {
    n = n - pickCoin(coins, n);
    amount++;
  }

  return amount;
}

function pickCoin(coins, n) {
  return [...coins].reverse().filter((x) => x <= n)[0];
}

module.exports = minimumCoins;
