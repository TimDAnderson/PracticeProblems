/*
given a 2 dimensional array, return an array of the sizes of all rivers represented in the input matrix.  

rivers only go up down left right, no diag.

Sample Input
[
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]
*/

const riverSizes = (matrix) => {
  const sizesArr = [];
  const visited = matrix.map((row) => row.map((value) => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) {
        continue;
      }
      traverseNode(i, j, matrix, visited, sizesArr);
    }
  }
  return sizesArr;
};

const traverseNode = (i, j, matrix, visited, sizesArr) => {
  let currentRiverSize = 0;
  const nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if (visited[i][j]) {
      continue;
    }
    visited[i][j] = true;
    if (matrix[i][j] === 0) {
      continue;
    }
    currentRiverSize++;
    const unvisited = getUnvisited(i, j, matrix, visited);
    for (let k = 0; k < unvisited.length; k++) {
      nodesToExplore.push(unvisited[k]);
    }
  }
  if (currentRiverSize > 0) {
    sizesArr.push(currentRiverSize);
  }
};

const getUnvisited = (i, j, matrix, visited) => {
  const unvisitedArr = [];
  if (i > 0 && !visited[i - 1][j]) {
    unvisitedArr.push([i - 1, j]);
  }
  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    unvisitedArr.push([i + 1, j]);
  }
  if (j > 0 && !visited[i][j - 1]) {
    unvisitedArr.push([i, j - 1]);
  }
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) {
    unvisitedArr.push([i, j + 1]);
  }
  return unvisitedArr;
};

const input = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

const expectedOutput = [2, 1, 5, 2, 2];

const actualOutput = riverSizes(input);

const assertEqual = (expected, actual) => {
  if (JSON.stringify(expected) === JSON.stringify(actual)) {
    console.log("test passed");
  } else {
    console.log("test failed");
    console.log(actual);
  }
};

assertEqual(expectedOutput, actualOutput);
