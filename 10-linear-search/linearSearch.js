const [arr, x] = process.argv.slice(2);
const list = JSON.parse(arr);
const num = Number(x);

function linearSearch(list, num) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === num) {
      return i;
    }
  }

  return -1;
}

const output = linearSearch(list, num);
console.log(output);
