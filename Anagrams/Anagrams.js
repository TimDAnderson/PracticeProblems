const sortString = (string) => {
  return string.split('').sort().join('');
}

const isAnagram = (string1, stirng2) => {
  return sortString(string1) === sortString(stirng2);
}

console.log(isAnagram('cat', 'act'))