const fibonacci = require('./fibonacci');

describe('fibonacci', () => {
  test('should output 0 for 0 input', () => {
    expect(fibonacci(0)).toEqual(0);
  });

  test('should output 1 for 1 input', () => {
    expect(fibonacci(1)).toEqual(1);
  });

  test('should output correct fibonacci number for a given input', () => {
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(6)).toEqual(8);
  });
});
