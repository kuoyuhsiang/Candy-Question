// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數


function randomNumber(min, max){
  if(!max){  //如果帶入的參數只有一個
    return Math.floor(Math.random() * min) 
  }else{
      return Math.floor(Math.random() * (max - min)) + min // +min 為了讓起始值從 0 變 0 + min，最大結果 max 也會是加上 min 計算得出的，故需在無條件捨去前先為它減去 min
    }
}

console.log(randomNumber(50)) // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)) // 隨機印出 5 ~ 29 之間的任何一個數字