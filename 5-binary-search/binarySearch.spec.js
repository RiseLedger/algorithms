const binarySearch = require('./binarySearch');

describe('binarySearch', () => {
  const arr = [1, 5, 7];

  test('should output -1 for inexisting number in array', () => {
    expect(binarySearch(arr, 0, arr.length - 1, 9)).toEqual(-1);
  });

  test('should output index of value in case if number is find in array', () => {
    expect(binarySearch(arr, 0, arr.length - 1, 1)).toEqual(0);
  })
});
