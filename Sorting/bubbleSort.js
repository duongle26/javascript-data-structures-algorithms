// O(n^2) time | O(1) space
const bubbleSort = array => {
  let isSorted = true;
  let counter = 0;
  while (isSorted) {
    isSorted = false;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSorted = true;
      }
    }
    counter++;
  }
  return array;
};