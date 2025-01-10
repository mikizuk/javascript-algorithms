function areAllCharactersUnique(chars) {
  if (!chars) {
    return true;
  } else {
    return new Set(chars).size === chars.length;
  }
}

module.exports = areAllCharactersUnique;
