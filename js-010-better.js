// 編號：010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {

    const array = num.toString().split("") 
    
    let newArray = []

    array.map((elm, index) => { //elm是array陣列內的元素; index為個別元素內的索引值
        if (elm !== "0") {
            if(elm !== array[array.length - 1]){ 
                let result = `${10**(array.length - 1 - index)} x ${array[index]}` //元素總數量-1-索引值即次方
                newArray.push(result)
            }else{
                let result2 = `${array[index]}`
                newArray.push(result2)
            }
        }
        
    })
    return newArray.join(" + ") // EX: [ '10000 x 6', '100 x 3', '8' ] => 10000 x 6 + 100 x 3 + 8
}

  console.log(expandedForm(8)) // 印出 "8"
  console.log(expandedForm(25)) // 印出 "10 x 2 + 5"
  console.log(expandedForm(148)) // 印出 "100 x 1 + 10 x 4 + 8"
  console.log(expandedForm(1450)) // 印出 "1000 x 1 + 100 x 4 + 10 x 5"
  console.log(expandedForm(60308)) // 印出 "10000 x 6 + 100 x 3 + 8"