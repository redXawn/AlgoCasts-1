const obj = {
  "key": 3,
  "foo": {
    "a": 5,
    "bar": {
      "baz": 8
    }
  }
}
let newObj = {}
let temp = ''

function iterate(obj) {
  for (let[key, value] of Object.entries(obj)){
    if (typeof obj[key] === 'object') {
      temp += key + '.'
      iterate(value)
    } else {
      newObj[ temp + key] = value
    }
  }
  return newObj
}

console.log(iterate(obj))