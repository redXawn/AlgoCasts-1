/* eslint-disable require-jsdoc */
// 3
// 24 1 -> 42 + 1 = 43 -> 34
// 4358 754 -> 8534 + 457 = 8991 -> 1998
// 305 794

// 876 % 10 = 6
// 0 * 10 + 6 = 6
// 876 / 10 = 87


// 87 % 10 = 7
// 6 * 10 + 7 = 67
// 87 / 10 = 8

// 8 & 10 = 8
// 67 * 10 + 8 = 678
// 8 / 10 = 0

function reverseNumber(number) {
  let revNumber = 0;
  while (number > 0) {
    revNumber = (revNumber * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  return revNumber;
}

function addNumber(a, b) {
  const final = reverseNumber(a) + reverseNumber(b);
  return reverseNumber(final);
}

console.log(addNumber(4358, 754))