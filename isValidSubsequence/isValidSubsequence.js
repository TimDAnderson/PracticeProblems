const isValidSubsequence = (array, sequence) => {
  let seqInd = 0;

  for (let i = 0; i < array.length; i++) {
    if (seqInd === sequence.length) {
      break;
    }
    if (sequence[seqInd] === array[i]) {
      seqInd++;
    }
  }
  return seqInd === sequence.length;
};

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

const expectedOutput = true;

const actualOutput = isValidSubsequence(array, sequence);

const assertEqual = (expected, actual) => {
  if (expected === actual) {
    console.log("test passed!");
  } else {
    console.log("test failed!");
  }
};

assertEqual(expectedOutput, actualOutput);
