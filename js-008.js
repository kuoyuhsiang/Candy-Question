// 編號：008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
    let words = input.split(' ')  // EX: [ 'lorem', 'ipsum', 'dolor', 'sit', 'amet' ]

    let letter = words.map( elm => elm.split('')) //  EX: [ [ 'l', 'o', 'r', 'e', 'm' ], [ 'i', 'p', 's', 'u', 'm' ], ... ]
    
    let letterScore = [...letter] // EX: [ [ 108, 111, 114, 101, 109 ],[ 105, 112, 115, 117, 109 ], ... ]
        .map(x =>  
            x.map(y => 
                y.codePointAt() - 96 //取得每個字母的unicode
            )
        )
        
    let sumArray = []
    for (let i = 0; i < letterScore.length; i++) {
        
        let wordsScore = letterScore[i].reduce( function(acc, cv){
            
            return acc + cv // EX: [ 108, 111, 114, 101, 109 ] 對此陣列內每一個元素加總 => 543
            
        })
        sumArray.push(wordsScore)   // 每一個單字的分數加總，再push進新陣列sumArray EX: [ 543, 558, 544, 336, 423 ]
    }
    
    let copyArray = [...sumArray] // 為了不影響sumArray的索引位置，另外複製一新陣列去做sort()排序

    copyArray.sort( (a, b) => b - a )// 可以產生降冪排列
    
    return words[sumArray.indexOf(copyArray[0])] // 在sumArray陣列中，選取copyArray[0]的元素索引值位置，再將此位置對應到words陣列即答案
  }

  console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
  console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
  console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there