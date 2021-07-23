const sortString = (string) => {
  return string.split('').sort().join('');
}

const isAnagram = (string1, string2) => {
  string1 = string1.replace(/[^\w]/g, '').toLowerCase();
  string2 = string2.replace(/[^\w]/g, '').toLowerCase();

  return sortString(string1) === sortString(string2);
}

console.log(isAnagram('Cat*', 'Act'))