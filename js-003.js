// 編號：003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面
// 範例：

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"] 

function moveZerosToEnd(arr) {
    
    for ( let i = 0; i < arr.length; i++){ 
        if (arr.includes(0)){ // 若include(0)會回傳True，則執行下列內容
            let newarr = arr.splice(arr.indexOf(0), 1).find(elm => elm === 0) 

            // 將初始陣列內用indexOf()找到 0 的索引位置，使用splice()讓原始陣列移除該元素(即變更初始陣列)，並且依splice()屬性讓新變數newarr接收其回傳值(newarr = [0])，再用.find()回傳第一個滿足所提供之測試函式的元素值，即 0 

            arr.push(newarr) //在沒有 0 的新陣列 arr 中放入 0  
        }
    }       
    return arr;
}

let result = moveZerosToEnd(list)
console.log(result)  // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]