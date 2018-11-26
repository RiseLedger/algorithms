function linearSearch(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return i;
    }
  }

  return -1;
}

module.exports = linearSearch;
