const [arr] = process.argv.slice(2);
const list = JSON.parse(arr);

function insertionSort(list, n) {
  let i = 1;

  while (i < n) {
    let j = i;

    while (j > 0) {
      const curr = list[j];
      const prev = list[j - 1];

      if (curr < prev) {
        list[j - 1] = curr;
        list[j] = prev;
        j--;
      }
      else {
        j = 0;
      }
    }

    i++;
  }

  return list;
}

const output = insertionSort(list, list.length);
console.log(output);
