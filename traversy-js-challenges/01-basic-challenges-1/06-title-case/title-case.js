function titleCase(text) {
  let res = "";
  [...text].forEach((letter, index) => {
    if (index === 0 || text[index - 1] === " ") {
      res += letter.toUpperCase();
    } else {
      res += letter;
    }
  });

  return res;
}

module.exports = titleCase;
