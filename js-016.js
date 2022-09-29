// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
    let array = [...str]
    let camelCase = array.map((elm, index) => {
        if(elm.includes("_")){
            array.splice(index, 2, array[index + 1].toUpperCase())
            return array[index] // 將陣列中"_"後的字母轉為大寫 => "G" "S"
        }else{
            return elm // 其餘小寫
        }
    })
    return camelCase.join("")
  }
  
  console.log(toCamelCase("book")) // book
  console.log(toCamelCase("book_store")) // bookStore
  console.log(toCamelCase("get_good_score")) // getGoodScore