function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function getResult(dicesResult) {
  switch (dicesResult) {
    case 2:
    case 3:
    case 12:
      return "lose";
    case 7:
    case 11:
      return "win";
    default:
      return "roll again";
  }
}

function prepareResult() {
  const dice1 = rollDice();
  const dice2 = rollDice();
  return {
    dice1,
    dice2,
    sum: dice1 + dice2,
    result: getResult(dice1 + dice2),
  };
}

function diceGameSimulation(numberOfGames = 3) {
  const gamesResults = [];

  for (let i = 1; i <= numberOfGames; i++) {
    gamesResults.push(prepareResult());
  }

  return gamesResults;
}

module.exports = diceGameSimulation;
