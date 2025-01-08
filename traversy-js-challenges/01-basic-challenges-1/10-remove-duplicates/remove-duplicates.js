// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

function removeDuplicates(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = removeDuplicates;
