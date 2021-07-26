function findClosestValueInBst(tree, target) {
  let recursiveHelper = (tree, target, closest) => {
    if (tree === null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
      closest = tree.value;
    }
    if (target < tree.value) {
      return recursiveHelper(tree.left, target, closest);
    } else if (target > tree.value) {
      return recursiveHelper(tree.right, target, closest);
    } else {
      return closest;
    }
  };

  return recursiveHelper(tree, target, tree.value);
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
