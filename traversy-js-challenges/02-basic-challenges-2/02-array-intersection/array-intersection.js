function arrayIntersection(arr1, arr2) {
  let array = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !array.includes(arr1[i])) {
      array.push(arr1[i]);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (arr1.includes(arr2[j]) && !array.includes(arr2[j])) {
      array.push(arr2[j]);
    }
  }

  return array;
}

module.exports = arrayIntersection;
