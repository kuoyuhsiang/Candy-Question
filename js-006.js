// 編號：006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值
// 範例：

function findDifferent(numbers) {
    
    let newArr = numbers.sort() //使用sort()可以將陣列元素進行排序，回傳的新陣列中，異值不是在陣列首，就是陣列尾
    let lastOne = newArr.length - 1
    if (newArr[lastOne] !== newArr[lastOne - 1]){
        return newArr[lastOne]//找出陣列尾的異值元素
    } else{
        return newArr[0] // 找出陣列首的異值元素
    }
  }
  
  console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
  console.log(findDifferent([2, 2, 2, 4, 2, 2]));       // 印出 4
  console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8