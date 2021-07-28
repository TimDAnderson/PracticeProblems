function getLongestPalindrome(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break
    leftIdx -= 1;
    rightIdx += 1;
  }
  return [leftIdx + 1, rightIdx]
}

function longestPalindromicSubstring(string) {
  // Write your code here.
  let longestPalindrome = [0, 1]

  for (let i = 0; i < string.length; i++) {
    const odd = getLongestPalindrome(string, i - 1, i + 1);
    const even = getLongestPalindrome(string, i - 1, i);
    const longest = even[1] - even[0] > odd[1] - odd[0] ? even : odd
    longestPalindrome = longestPalindrome[1] - longestPalindrome[0] > longest[1] - longest[0] ? longestPalindrome : longest
  }
  return string.slice(longestPalindrome[0], longestPalindrome[1]);
}


var string = 'abcuvbnmnbvwqwq'

console.log(longestPalindromicSubstring(string))