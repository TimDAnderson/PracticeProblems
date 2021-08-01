function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        isSorted = false;
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    counter += 1;
  }
  return array;
}

var inputArray = [4, 3, 5, 2, 6, 1, 7];

const expectedOutput = [1, 2, 3, 4, 5, 6, 7];

var actualOutput = bubbleSort(inputArray);

const assertEqual = (actual, expected) => {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("test passed");
  } else {
    console.log("test failed");
    console.log(actual);
  }
};

assertEqual(actualOutput, expectedOutput);
