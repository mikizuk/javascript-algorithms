function isPalindrome(str) {
  let res = false;

  for (let i = 0; i < str.length; i++) {
    // if (str[i]?.toLowerCase() === str[str.length - i - 1]?.toLowerCase()) {
    //   res = true;
    // } else {
    //   res = false;
    // }
    return str[i]?.toLowerCase() === str[str.length - i - 1]?.toLowerCase();
  }
  return res;
}

module.exports = isPalindrome;
