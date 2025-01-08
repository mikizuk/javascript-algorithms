/**
 Traditionally, you loop from 1 to 100 and print out each number. However, if the number is
  divisible by 3, you print out "Fizz" instead. If the number is divisible by 5, you print out 
  "Buzz" instead. If the number is divisible by both 3 and 5, you print out "FizzBuzz" instead.
 */

function fizzBuzzArray(num) {
  let str = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      str.push("FizzBuzz");
    } else if (i % 3 === 0) {
      str.push("Fizz");
    } else if (i % 5 === 0) {
      str.push("Buzz");
    } else {
      str.push(i);
    }
  }

  return str;
}

module.exports = fizzBuzzArray;
