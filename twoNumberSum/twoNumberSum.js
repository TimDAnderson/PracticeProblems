function twoNumberSum(array, targetSum) {
  // Write your code here.
  let solutionArray = [];
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === targetSum && i !== j) {
        solutionArray.push(array[i], array[j])
        return solutionArray
      }
    }
  }
  return solutionArray;
}