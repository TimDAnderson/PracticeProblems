/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

 var quicksort = (array) => {
  if (array.length < 2) {
    return array;
  }

  let pivotVal = array[0];
  let smallerArr = [];
  let largerArr = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > pivotVal) {
      largerArr.push(array[i]);
    } else {
      smallerArr.push(array[i]);
    }
  }

  return quicksort(smallerArr).concat(pivotVal, quicksort(largerArr));
};

var unsorted = [5, 3, 7, 1, 2];

console.log(quicksort(unsorted));