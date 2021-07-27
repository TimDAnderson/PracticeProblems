// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  let sums = [];
  let accumulator = 0;

  var recursiveHelper = (node, accumulator, sums) => {
    if (!node) return;

    const runningSum = accumulator + node.value;
    if (!node.left && !node.right) {
      sums.push(runningSum);
      return;
    }

    recursiveHelper(node.left, runningSum, sums);
    recursiveHelper(node.right, runningSum, sums);
  };

  recursiveHelper(root, accumulator, sums);

  return sums;
}
