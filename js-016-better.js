// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
    let wordArray = str.split("_")
    let camelCase = wordArray.map( (elm, index) => {
        if( index !== 0){ //找出陣列中索引值不為零的元素
            return elm.replace(elm[0], elm[0].toUpperCase()) //replace() 用大寫字母取代該元素自首位置
        }else{
            return elm
        }
    })
    return camelCase.join("")
  }
  
  console.log(toCamelCase("book")) // book
  console.log(toCamelCase("book_store")) // bookStore
  console.log(toCamelCase("get_good_score")) // getGoodScore