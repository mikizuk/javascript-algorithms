/*
 * Print triangle in console.log!
 */
function printTriangle(elements = 5) {
  let triangle = "";
  for (let i = 0; i < elements; i++) {
    triangle += "*";
    console.log(triangle);
  }
}

printTriangle(3);
