let arr1 = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]
]

console.log(arr1[2][0], arr1[1][0], arr1[0][0])
console.log(arr1[2][1], arr1[1][1], arr1[0][1])
console.log(arr1[2][2], arr1[1][2], arr1[0][2])

// patern change from array 2 -> array 0, from bot to top

const length = 3
let temp = []
let newArr = []
for (let i = 0; i < length; i++) {
  for (let j = length - 1; j >= 0; j--) {
    temp.push(arr1[j][i])
    if (j === 0) {
      newArr.push(temp)
      temp = []
    }
  }
  console.log(newArr)
}
