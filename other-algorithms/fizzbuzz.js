/**
Add function with a name "fizzBuzz" with one parameter. Funkction should log all numbers but:
“FizzBuzz” if i is divisible by 3 and 5,
"Fizz” if i is divisible by 3,
"Buzz” if i is divisible by 5
number as a string, if none of the conditions are true.
*/

function fooBar(numbers) {
  let str = "";

  for (let i = 1; i <= numbers; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      str += "FizzBuzz";
    } else if (i % 3 === 0) {
      str += "Fizz";
    } else if (i % 5 === 0) {
      str += "Buzz";
    } else {
      str += i;
    }
  }

  return str;
}

fooBar(15);
