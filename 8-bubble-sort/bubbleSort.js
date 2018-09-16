const [arr] = process.argv.slice(2);
const list = JSON.parse(arr);

function bubbleSort(list) {
  var indexOfLastSortedItem = list.length;

  do {
    swapped = false;
    indexOfLastSortedItem--;

    for (var i = 0; i < indexOfLastSortedItem; i++) {
      var curr = list[i];
      var next = list[i + 1];

      if (curr > next) {
        list[i] = next;
        list[i + 1] = curr;
        swapped = true;
      }
    }

  } while(swapped);

  return list;
}

const output = bubbleSort(list);
console.log(output);
