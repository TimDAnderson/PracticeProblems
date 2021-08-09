/*
Input: board, cycles
Output: new board after X num cycles
Edge Cases: cycle count is 0, just return the input board
Constraints: ?

count Neightbors helper function
determines if the current coordinate should be alive or dead on the new board

Input: coordinate on board
Output: number of neighbors

*/

const getNeighbors = (board, i, j) => {
  let neighborCount = 0;

  //up
  if (i > 0) {
    if (board[i - 1][j] === 1) {
      neighborCount += 1;
    }
  }

  //down
  if (i < board.length - 1) {
    if (board[i + 1][j]) {
      neighborCount += 1;
    }
  }

  //left
  // if ()

  //right

  //upper left

  //upper right

  //lower left

  //lower right

}



const gameOfLife = (board, cycles) => {
  // wrap everything in a while loop, while cycles is greater than 0
  while (cycles > 0) {
    let newboard = new Array(board.length).fill(0).map(()=> new Array(board[0].length).fill(0))
    // console.log(newboard)
    
    
    // create a new board that will be returned
    
    // iterate over board, pass each square into count neighbors function
    for (let i = 0; i < board.length; i++ ){
      for (let j = 0; j < board[i].length; j++){
        // check neighbor count at board[i][j]
        // let neighbors = getNeighbors(board, i, j)
        let neighbors = 0

        // if neighbor count = 0 && you're a dead cell
          //set new cell to 0

        // if Alive
        if (board[i][j]) {
          if (neighbors < 2) {
            //set new cell to 0
          } else if (neighbors === 2 || neighbors === 3) {
            //set new cell to 1
          } else if (neighbors > 3) {
            // set new cell to 0
          }
        } else {
          if (neighbors === 3) {
            //set new cell to 1
          } else {
            //set new cell to 0
          }
        }
        //if neighboard count < 2, set new cell to 0
        //else if neighbor count === 2 || count === 3, new cell set to 1
        //else if neighbor count > 3, new cell set to 0
        // else 
        //if neighbor count === 3, new cell set to 1
        // else new cell set to 0

      }
    }
    
    // decrement the cycle count
    cycles -= 1;
    board = newboard
    // overwriting the current board with the new board before we end the while loop
  }


  // return the board, which is now the new board
  return board
};


const inputBoard = [
  [1, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]

const numCycles = 1;

console.log(gameOfLife(inputBoard, numCycles))