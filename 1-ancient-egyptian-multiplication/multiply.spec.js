const egyptianMultiplication = require('./multiply');

describe('egyptianMultiplication', () => {
  test('multiply 2 * 3 to equal 6', () => {
    expect(egyptianMultiplication(2, 3)).toBe(6);
  });
});
