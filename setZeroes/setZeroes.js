/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let copy = [...matrix];

    let recursiveHelper = (x, y, matrix) => {
      // console.log(x)
      if (x > 0) {
        matrix[x-1][y] = 0;
        recursiveHelper(x-1, y)
      }
      if (x < matrix.length - 1) {
        matrix[x+1][y] = 0;
        recursiveHelper(x+1, y)
      }
      if (y > 0) {
        matrix[x][y-1] = 0;
        recursiveHelper(x, y-1)
      }
      if (y < matrix[0].length - 1) {
        matrix[x][y+1] = 0
        recursiveHelper(x, y+1)
      }

    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (copy[i][j] === 0) {
          recursiveHelper(i, j, matrix)
        }
      }
    }
};

let matrix = [[1,1,1],[1,0,1],[1,1,1]];

let expectedOutput = [[1,0,1],[0,0,0],[1,0,1]];

console.log(setZeroes(matrix))