function highestScoringWord(str) {
  let highestWord = "";

  str.split(" ").map((word) => {
    let highestWordValue = 0;
    let wordValue = [...word].reduce((total, character) => {
      return total + character.charCodeAt();
    }, 0);

    if (wordValue > highestWordValue) {
      highestWord = word;
    }
  });

  return highestWord;
}

module.exports = highestScoringWord;
