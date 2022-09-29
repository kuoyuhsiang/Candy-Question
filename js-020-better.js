// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  const arrayX = str.match(/[x,X]/g) || []     // 沒有 g ，[ 'xx', index: 2, input: 'ooxx', groups: undefined ]
  const arrayO = str.match(/[o,O]/g) || []
  return arrayX.length === arrayO.length
}

console.log(xxoo("ooxx")) // true
console.log(xxoo("xxoo")) // true
console.log(xxoo("xxooo")) // false
console.log(xxoo("xoox")) // true
console.log(xxoo("ooAA")) // false
console.log(xxoo("xoXoA")) // true