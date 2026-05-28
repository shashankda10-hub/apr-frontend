let arr = [1, 2, 3, 4, 5, 5, 5];

function printuniq(ar) {
  let removedDuplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (removedDuplicates.indexOf(arr[i]) == -1) {
      removedDuplicates.push(arr[i]);
    }
  }
  return removedDuplicates;
}

let uniqvalue = printuniq(arr);
console.log(uniqvalue);
