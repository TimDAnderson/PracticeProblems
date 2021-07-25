function threeNumberSum(array, targetSum) {
  // Write your code here.
  let returnArray = [];
  array.sort((a, b) => a - b);
  // console.log(array);
  for (let i = 0; i < array.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;

    while (leftPointer < rightPointer) {
      let currentSum = array[i] + array[leftPointer] + array[rightPointer];
      if (currentSum === targetSum) {
        returnArray.push([array[i], array[leftPointer], array[rightPointer]]);
        leftPointer += 1;
        rightPointer -= 1;
      } else if (currentSum < targetSum) {
        leftPointer += 1;
      } else if (currentSum > targetSum) {
        rightPointer -= 1;
      }
    }
  }
  return returnArray;
}

var input = [12, 3, 1, 2, -6, 5, -8, 6];
var targetSum = 0;

var sampleOutput = [
  [-8, 2, 6],
  [-8, 3, 5],
  [-6, 1, 5],
];

console.log(threeNumberSum(input, targetSum));
