function findFirstNonRepeatingCharacter(str) {
  let char = null;

  for (let i = 0; i < str.length; i++) {
    if (i === 0 && str[i] !== str[i + 1]) {
      char = str[i];
      break;
    } else if (str[i] !== str[i + 1] && str[i] !== str[i - 1]) {
      char = str[i];
      break;
    }
  }
  return char;
}

module.exports = findFirstNonRepeatingCharacter;
