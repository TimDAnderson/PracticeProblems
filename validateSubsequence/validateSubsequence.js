/*


*/

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let currentIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[currentIndex]) {
      currentIndex+=1;
    }
  }
  console.log(currentIndex)
  return sequence.length === currentIndex
}

var array = [5, 1, 22, 25, 6, -1, 8, 10]
var sequence = [1, 6, -1, 10]


console.log(isValidSubsequence(array, sequence));