function moveElementToEnd(array, toMove) {
  // Write your code here.
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (i < j && array[j] === toMove) {
      j -= 1;
    }
    if (array[i] === toMove) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    i += 1;
  }
  return array;
}
