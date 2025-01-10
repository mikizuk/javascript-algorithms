/*
 * Print square in console.log!
 */

function printSquare(n) {
  let square = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      square += "*";
    }
    console.log(square);
    square = "";
  }
}

printSquare(5);
