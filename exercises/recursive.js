function recursive(n) {
  if (n === 1) {
    return 1
  } else {
    const number = recursive(n - 1) * 2
    return number
  }
}

console.log(recursive(8))