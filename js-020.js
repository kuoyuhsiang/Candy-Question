// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  const defultArray = [...str]   // [ 'o', 'o', 'x', 'x' ]
  
  const ArrayO = defultArray.filter((elm) => {
    return elm === "O" || elm === "o"
  })
  const ArrayX = defultArray.filter((elm) => {
    return elm === "X" || elm === "x"
  })
  return ArrayO.length === ArrayX.length
}

console.log(xxoo("ooxx")) // true
console.log(xxoo("xxoo")) // true
console.log(xxoo("xxooo")) // false
console.log(xxoo("xoox")) // true
console.log(xxoo("ooAA")) // false
console.log(xxoo("xoXoA")) // true