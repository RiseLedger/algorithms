function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var lo = [];
  var hi = [];
  var pivot = arr[arr.length - 1];

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      lo.push(arr[i]);
    }
    else {
      hi.push(arr[i]);
    }
  }

  return quicksort(lo).concat([pivot], quicksort(hi));
}

module.exports = quicksort;
