const merge = require('merge')

const keyLookup = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10
}

module.exports = function add (x, y) {
  if (typeof x === 'object') {
    let sum = 0
    const merged = merge(x, y)
    Object.keys(merged).forEach(key => {
      sum += keyLookup[key]
    })
    return sum
  } else {
    return x + y
  }
}
