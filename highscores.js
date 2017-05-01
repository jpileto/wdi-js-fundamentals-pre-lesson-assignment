var highScores = [];

function addHighScore(highScoreList, playerInitials, score) {
  var record = { player: playerInitials, score: score };
  highScoreList.push(record);
}

console.log(highScores);
addHighScore(highScores, 'SDL', 2000);
console.log(highScores);
addHighScore(highScores, 'JSL', 10000);
console.log(highScores);
