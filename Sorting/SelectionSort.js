// O(n^2) time | O(1) space
const SelectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let minIndx = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIndx]) minIndx = j;
    }
    if (i != minIndx)
      [array[i], array[minIndx]] = [array[minIndx], array[i]];
  }
  return array;
};
