// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

const numberReducer = (num) => {
    num = String(num).split("").reduce((acc, cv) => Number(acc) + Number(cv)) // 9 + 5 + 2 + 7 => 23
    // console.log(`拆解此次的數字是${num}`);
    if(num > 9) { //目前的數字若大於 9 ，則再呼叫此function本身一次
        return numberReducer(num)
    }else{  //目前的數字若小於 9 ，則不需要再拆解，可以直接回傳
        return num
    }
}
  
  console.log(numberReducer(9527)) // 印出 5
  console.log(numberReducer(1450)) // 印出 1
  console.log(numberReducer(5566108)) // 印出 4
  console.log(numberReducer(1234567890)) // 印出 9
  console.log(numberReducer(999999999999992)) // 印出2
  
