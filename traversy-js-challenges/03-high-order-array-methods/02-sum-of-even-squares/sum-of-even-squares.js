function sumOfEvenSquares(numbers) {
  return numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * number)
    .reduce((sum, number) => sum + number, 0);
}

module.exports = sumOfEvenSquares;
