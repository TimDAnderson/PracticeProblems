function sortedSquaredArray(array) {
  return array.map((element) => Math.pow(element, 2)).sort((a, b) => a - b);
}

// var array = [1, 2, 3, 5, 6, 8, 9];
var array = [-2, 1];

console.log(sortedSquaredArray(array))