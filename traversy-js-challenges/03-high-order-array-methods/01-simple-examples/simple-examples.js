const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const mappedNumbers = numbers.map((e) => e * 2);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const filteredNumbers = numbers.filter((e) => e > 2);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const reducedNumbers = numbers.reduce((total, acc) => total + acc, 0);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
// const forEachNumbers = numbers.forEach((e) => console.log(e));

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const findNumbers = numbers.find((e) => e === 1);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const someNumbers = numbers.some((e) => e > 4);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const everyNumbers = numbers.every((e) => e > 0);
