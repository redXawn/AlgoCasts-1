// function readHugeList() {
//   let longArr = []
//   for (let i = 0; i <= 100000; i++) {
//     longArr.push(i)
//   }
//   return longArr
// }

// var list = readHugeList()
// var nextListItem = function() {
//   var item = list.pop()
//   console.log(item)
//   if (item) {
//     nextListItem()
//   }
// }

// console.log(nextListItem())

function readHugeList() {
  let longArr = []
  for (let i = 0; i <= 99999; i++) {
    longArr.push(i)
  }
  return longArr
}

var list = readHugeList()
var nextListItem = function() {
  var item = list.pop()
  if (item) {
    setTimeout( nextListItem, 0)
  }
}

console.log(nextListItem())