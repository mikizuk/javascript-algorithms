function countOccurrences(str, char) {
  let occurs = 0;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i]; // .toLowerCase()
    if (letter === char) {
      occurs++;
    }
  }
  return occurs;
}

module.exports = countOccurrences;
