function caesarCipherEncryptor(string, key) {
  let newIndex = key % 26
  let newWord = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for (const letter of string) {
    console.log(letter);
    newWord.push(alphabet[((alphabet.indexOf(letter) + newIndex) % 26)]);
  }
  return newWord.join('')
}

let inputString = 'abc';
let inputKey = 1;

let expectedOutput = 'bcd';

let actualOutput = caesarCipherEncryptor(inputString, inputKey);

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log('test passed');
  } else {
    console.log('test failed');
    console.log(actual);
  }
}

assertEqual(actualOutput, expectedOutput);
