function isValid(s) {
  // Write your code here
  let dataObj = {};

  for (let i = 0; i < s.length; i++) {
    dataObj[s[i]] = dataObj[s[i]] || 0;
    dataObj[s[i]] += 1
  }

  let numObj = {}

  //track occurences
  for (let key in dataObj) {
    numObj[dataObj[key]] = numObj[dataObj[key]] || 0;
    numObj[dataObj[key]] += 1;
  }

  let singleOccurence = false;
  let keyCount = 0;
  let singleKey
  let multipleKey
  for (let key in numObj) {
    keyCount += 1;
    if (numObj[key] === 1) {
      singleOccurence = true;
      singleKey = Number(key)
    } else {
      multipleKey = Number(key)
    }
  }
  if (keyCount === 1 || (keyCount === 2 && singleOccurence && singleKey - 1 === multipleKey)) {
    return 'YES'
  } else {
    return 'NO'
  }
}

var string = 'abcc'

console.log(isValid(string))