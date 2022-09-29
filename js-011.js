// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

function findOddElm(numbers) {
    const obj = numbers.reduce((acc, cv) => { // 
        if (cv in acc){ // 如果傳入的現值 cv 已在物件中，將 cv 的 value + 1
            console.log(acc[cv]);
            acc[cv] =  acc[cv] + 1
            console.log(acc[cv]);      
        }else{
            acc[cv] = 1 // 如果傳入的 cv 還沒有在物件中，則物件加入此 cv，同時賦值 1
        }
        return acc
    },{}) // 初始值為空物件，代表起始 acc 為 {}
    console.log(obj);
    for(let property in obj){ // for...in 可以對物件做迴圈，property為自訂義的key
        if (obj[property] % 2 === 1) {// 物件的 key value 若為奇數則回傳
            return property; 
        }
    }
}
  
  
  console.log(findOddElm([1, 1, 2])) // 印出 2
//   console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])) // 印出 1
//   console.log(findOddElm([0, 1, 0, 1, 0])) // 印出 0
//   console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])) // 印出 -1
//   console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])) // 印出 5