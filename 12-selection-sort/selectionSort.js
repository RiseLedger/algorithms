function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var min = i;

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      var temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

module.exports = selectionSort;
