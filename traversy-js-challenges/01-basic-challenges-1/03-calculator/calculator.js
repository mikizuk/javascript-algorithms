function calculator(num1, num2, operator) {
  const validOperators = ["+", "-", "*", "/"];

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error(`${num1} or ${num2} is not a number`);
  } else if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    throw new Error(`${operator} is an invalid operator`);
  }
}

module.exports = calculator;
