function nonConstructibleChange(coins) {
  if (coins.length === 0) {
    return 1;
  }
  coins.sort((a, b) => a - b);
  let currentChangeCreated = 0;

  for (let coin of coins) {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
    currentChangeCreated += coin;
  }

  return currentChangeCreated + 1;
}

var coins = [5, 7, 1, 1, 2, 3, 22];


console.log(nonConstructibleChange(coins))