/*
Given an array nums, partition it into two (contiguous) subarrays left and right so that:

Every element in left is less than or equal to every element in right.
left and right are non-empty.
left has the smallest possible size.
Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.

Example 1:

Input: nums = [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]

Example 2:

Input: nums = [1,1,1,0,6,12]
Output: 4
Explanation: left = [1,1,1,0], right = [6,12]
 

Note:

2 <= nums.length <= 30000
0 <= nums[i] <= 106
It is guaranteed there is at least one way to partition nums as described.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  let maxLeft = nums[0];
  let maxSoFar = nums[0];
  let pivot = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxSoFar) {
      maxSoFar = nums[i];
    }
    if (nums[i] < maxLeft) {
      maxLeft = maxSoFar;
      pivot = i;
    }
  }
  return pivot + 1;
};

let input = [1, 1, 1, 0, 6, 12];

console.log(partitionDisjoint(input));
