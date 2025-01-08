function findMaxNumber(arr) {
  //   let max = arr[0];

  //   arr.forEach((item) => {
  //     if (item > max) {
  //       max = item;
  //     }
  //   });

  //   return max;

  return Math.max(...arr);
}

module.exports = findMaxNumber;
