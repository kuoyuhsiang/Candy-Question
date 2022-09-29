// 編號：007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！
// 範例：

function findSomeDifferent(numbers) {
    const even = []
    const odd = []
    for (let i = 0; i < numbers.length - 1; i++) {
        if(numbers[i] % 2 === 0){
             even.push(numbers[i]); //將陣列中的偶數放入陣列even中
        }else{
             odd.push(numbers[i]);//將陣列中的奇數放入陣列odd中
        }
    }   
    if(even.length === 1){ //判斷陣列長度是否等於 1 ，回傳為True的陣列元素
        return even[0]
    }else{
        return odd[0]
    }
  }
  
  console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
  console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160