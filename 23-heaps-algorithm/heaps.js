function heaps(list) {
  const permutations = [];

  function heapPermutation(list, size) {
    if (size === 1) {
      permutations.push(list.slice());
    }

    for (let i = 0; i < size; i++) {
      heapPermutation(list, size - 1);

      const last = list[size - 1];

      if (size % 2 === 1) {
        list[size - 1] = list[0];
        list[0] = last;
      }
      else {
        list[size - 1] = list[i];
        list[i] = last;
      }
    }
  }

  heapPermutation(list, list.length);

  return permutations;
}

module.exports = heaps;
