function smallestDifference(arrayOne, arrayTwo) {
  let returnArray = [];

  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let pointerOne = 0;
  let pointerTwo = 0;

  let smallest = Infinity;
  let current = Infinity;

  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    let firstValue = arrayOne[pointerOne];
    let secondValue = arrayTwo[pointerTwo];
    if (firstValue < secondValue) {
      pointerOne += 1;
      current = secondValue - firstValue;
    } else if (firstValue > secondValue) {
      pointerTwo += 1;
      current = firstValue - secondValue;
    } else {
      return [firstValue, secondValue];
    }

    if (current < smallest) {
      smallest = current;
      returnArray = [firstValue, secondValue];
    }
  }
  return returnArray;
}

var arrayOne = [-1, 5, 10, 20, 28, 3];
// sorted = [-1, 3, 5, 10, 20, 28]

var arrayTwo = [26, 134, 135, 15, 17];
// sorted = [15, 17, 26, 134, 135]

// output should be [28, 26]

console.log(smallestDifference(arrayOne, arrayTwo));
