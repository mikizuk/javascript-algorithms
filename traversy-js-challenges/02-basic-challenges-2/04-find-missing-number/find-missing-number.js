function findMissingNumber(arr) {
  if (!arr) {
    return undefined;
  } else if (arr.length === 0) {
    return 1;
  } else if (arr.length) {
    let foundNumber = null;
    const sortedArray = arr.sort((a, b) => a - b);

    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] !== i + 1) {
        foundNumber = i + 1;
        break;
      }
    }

    return foundNumber;
  }
}

module.exports = findMissingNumber;
