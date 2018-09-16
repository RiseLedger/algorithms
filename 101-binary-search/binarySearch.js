const [arr, n] = process.argv.slice(2);
const list = JSON.parse(arr);
const num = Number(n);

function binarySearch(list, l, r, num) {
  if (l > r) {
    return -1;
  }

  const m = Math.floor((l + r) / 2);

  if (list[m] < num) {
    l = m + 1;
    return binarySearch(list, l, r, num);
  }

  if (list[m] > num) {
    r = m - 1;
    return binarySearch(list, l, r, num);
  }

  return m;
}

const output = binarySearch(list, 0, list.length - 1, num);
console.log(output);
