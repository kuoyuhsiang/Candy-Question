// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']
function twoLetterArray(arr){
    let array = []
        for (let i = 0; i < arr.length; i+=2) {
            array.push(arr.split("").splice(i, 2)) // [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]
        }
        const combine = array.map( (elm) => {
            return elm.join("") //[ 'ab', 'cd', 'ef']
        })
        return combine
}
function splitString(str) {
    if(str.length % 2 === 0){
        return twoLetterArray(str)
    }else{
        str = str + '_' // "abcdefg_"
        return twoLetterArray(str)
    }
}
  
  console.log(splitString("abcdef")) // ["ab", "cd", "ef"]
  console.log(splitString("abcdefg")) // ["ab", "cd", "ef", "g_"]
  console.log(splitString("")) // []