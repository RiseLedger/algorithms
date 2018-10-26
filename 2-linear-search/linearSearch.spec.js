const linearSearch = require('./linearSearch');

describe('linearSearch', () => {
  it('should return correct item index for existing item in array', () => {
    expect(linearSearch([2, 3, 'sparta'], 3)).toEqual(1);
  });

  it('should return -1 for inexisting item in array', () => {
    expect(linearSearch([2, 3, 'sparta'], 'test')).toEqual(-1);
  });
});
