/*
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

*/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stringArray = s.split("");
  let stillWorking = true;

  while (stillWorking) {
    stillWorking = false;
    for (let i = 0; i < stringArray.length - 1; i++) {
      if (stringArray[i] === stringArray[i + 1]) {
        stillWorking = true;
        stringArray.splice(i, 2);
        break;
      }
    }
  }

  return stringArray.join("");
};

const input = "aa";

const expectedOutput = "";

const actualOutput = removeDuplicates(input);

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log("test passed");
  } else {
    console.log("test failed");
    console.log(actual);
  }
};

assertEqual(actualOutput, expectedOutput);
