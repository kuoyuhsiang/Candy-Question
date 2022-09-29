// 編號：010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
    const array = num.toString().split("") //將傳入字串拆解成陣列array[ '6', '0', '3', '0', '8' ]
   
    let newArray = []
    for (let i = 0; i < array.length ; i++) {
        if ( array[i] !== "0") { // 先判斷array裡面有沒有 "0" 元素為，沒有的話為true

            if(array[i] !== array[array.length-1]){ // 如果array裡不是最後一個元素(非個位數)，就進行組裝放入新陣列
                let result = `${"1".padEnd(array.length - i, "0")} x ${array[i]}`
                newArray.push(result)
                
            }else{// 如果array裡是最後一個元素(個位數)，放入新陣列
                let result2 = `${array[i]}`
                newArray.push(result2)
            }
        }
    }
    return newArray.join(' + ') // EX: [ '10000 x 6', '100 x 3', '8' ] => 10000 x 6 + 100 x 3 + 8
}

  console.log(expandedForm(8)) // 印出 "8"
  console.log(expandedForm(25)) // 印出 "10 x 2 + 5"
  console.log(expandedForm(148)) // 印出 "100 x 1 + 10 x 4 + 8"
  console.log(expandedForm(1450)) // 印出 "1000 x 1 + 100 x 4 + 10 x 5"
  console.log(expandedForm(60308)) // 印出 "10000 x 6 + 100 x 3 + 8"