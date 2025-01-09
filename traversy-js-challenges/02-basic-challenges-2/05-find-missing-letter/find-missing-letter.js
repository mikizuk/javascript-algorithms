const findMissingLetterInArray = (array) => {
  let missingLetter = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] && array[i] - array[i + 1] !== -1) {
      missingLetter = array[i] + 1;
    }
  }
  return missingLetter;
};

function findMissingLetter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetArray = alphabet.split("");
  const letterIndexes = [];
  let missingAlphabetIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (alphabetArray.includes(arr[i])) {
      letterIndexes.push(alphabetArray.indexOf(arr[i]));
    }
  }

  missingAlphabetIndex = findMissingLetterInArray(letterIndexes);

  return missingAlphabetIndex ? alphabetArray[missingAlphabetIndex] : "";
}

module.exports = findMissingLetter;
