/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var returnObj = {};
 
  //make an object we push to
  for (var i = 0; i < string.length; i++) {
    if (!returnObj[string[i]]) {
      returnObj[string[i]] = 1;
    } else {
      returnObj[string[i]] += 1;
    }
  }

  for (var i = 0; i < string.length; i++) {
    if (returnObj[string[i]] === 1) {
      return string[i];
    }
  }

};

console.log(firstNonRepeatedCharacter('ABA'));
console.log(firstNonRepeatedCharacter('AACBDB'));