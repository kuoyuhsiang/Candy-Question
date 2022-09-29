// 編號：008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  let words = input.split(' ')  // EX: [ 'lorem', 'ipsum', 'dolor', 'sit', 'amet' ]

  let scoreArray = words.map( (elm) => {  // [ 'lorem', 'ipsum', 'dolor', 'sit', 'amet' ] => [ 63, 78, 64, 48, 39 ]
    let score = 0
    for (let i = 0; i < elm.length; i++) {
      score += elm.charCodeAt(i) - 96
    }
    return score
  })
  return  words[scoreArray.indexOf(Math.max(...scoreArray))]
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there