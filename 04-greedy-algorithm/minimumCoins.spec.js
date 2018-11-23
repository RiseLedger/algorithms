const minimumCoins = require('./minimumCoins');

describe('minimumCoins', () => {
  test('should output 3 for input coins [1, 5, 10, 25, 50] and 16', () => {
    const coins = [1, 5, 10, 25, 50];
    const n = 16;

    expect(minimumCoins(coins, n)).toEqual(3);
  })
});
