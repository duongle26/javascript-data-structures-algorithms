// O(log(n)) time | O(1) space
const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    if (array[middle] === target) return middle;
    else if (array[middle] < target) start = middle + 1;
    else end = middle - 1;
  }
  return false;
};