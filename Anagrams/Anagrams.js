const sortString = (string) => {
  return string.split('').sort().join('');
}

const isAnagram = (string1, string2) => {
  string1 = string1.replace(/[^\w]/g, '').toLowerCase();
  string2 = string2.replace(/[^\w]/g, '').toLowerCase();

  return sortString(string1) === sortString(string2);
}

const findAllAnagrams = (arr) => {
  let anagrams = {};
  let collection = [];

  arr.forEach( word => {
    let letters = word.split('').sort().join('');

    anagrams[letters] = anagrams[letters] || [];

    anagrams[letters].push(word)
  })

  console.log(anagrams)

  for (let key in anagrams) {
    collection.push(anagrams[key])
  }


  return collection;
}

const anagramArray = ['bag', 'gab', 'foo', 'abg', 'oof', 'bum', 
'cat', 'dog', 'tac', 'god', 'act', 'cars', 'repaid', 'dues', 'nose', 
'signed', 'lane', 'paired', 'arcs', 'grab', 'used', 'ones', 'brag', 
'sued', 'lean', 'scar', 'design']

console.log(findAllAnagrams(anagramArray))