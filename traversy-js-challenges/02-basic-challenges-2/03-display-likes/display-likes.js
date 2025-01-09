function displayLikes(fans) {
  if (fans.length === 0) {
    return "no one likes this";
  } else if (fans.length === 1) {
    return `${fans[0]} likes this`;
  } else if (fans.length === 2) {
    return `${fans[0]} and ${fans[1]} like this`;
  } else if (fans.length === 3) {
    return `${fans[0]}, ${fans[1]} and ${fans[2]} like this`;
  } else if (fans.length > 3) {
    return `${fans[0]}, ${fans[1]} and ${fans.length - 2} others like this`;
  }
}

module.exports = displayLikes;
