// 編號：005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起
// 範例：

function squareDigits(num){
    let array = [...String(num)] // ...展開運算式，將可迭代 (literable) 的物件轉為陣列，此處可迭代物件為string
    let newarr = array.map( x => 
        x = x * x
    )
   
    return newarr.join("") //join() 方法會將陣列中所有的元素合併成一個字串，參數使用空字串，合併後，元素間不會有任何字元
  }
  
  console.log(squareDigits(3212));  // 印出 9414
  console.log(squareDigits(2112));  // 印出 4114
  console.log(squareDigits(387));   // 印出 96449