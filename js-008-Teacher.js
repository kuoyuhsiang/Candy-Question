// 編號：008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input){
  const score = (elm) =>
    elm
    .split("")
    .map((x) => x.charCodeAt())
    .reduce((acc, cv) => acc + cv - 96)
  return input.split(" ").sort((a, b) => {
    return score(b) - score(a)
  })[0]
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there