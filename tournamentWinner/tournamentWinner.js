function tournamentWinner(competitions, results) {
  // Write your code here.
  let dataObj = {};

	for (let i = 0; i < competitions.length; i++) {
		if (results[i] === 0) {
      dataObj[competitions[i][1]] = dataObj[competitions[i][1]] || 0;
      dataObj[competitions[i][1]] += 3;
    } else {
      dataObj[competitions[i][0]] = dataObj[competitions[i][0]] || 0;
      dataObj[competitions[i][0]] += 3;
    }
	}
  let winner;
  let winningVal = 0;
  for (key in dataObj) {
    if (dataObj[key] > winningVal) {
      winner = key;
      winningVal = dataObj[key]
    }
  }
  return winner;
}