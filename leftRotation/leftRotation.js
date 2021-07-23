function rotateLeft(d, arr) {
  // Write your code here
  while (d > 0) {
      let firstElement = arr.shift();
      arr.push(firstElement);
      d-=1;
  }
  
  return arr
}