// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

// function sumOfSmallestValues(arr) {
//     const result1 = arr.reduce(function(accumulate, currentValue){  //將傳入的陣列進行各元素比大小值，取出最小值
//         if (accumulate < currentValue) {
//             return accumulate // 累加值若小於目前新加入的元素，則回傳累加值至下一輪累加值
//         } else {
//             return currentValue //累加值若大於目前新加入的元素，則回傳目前新加入的元素至下一輪累加值
//         }
//     });
//     // console.log(result1);

//     const index = arr.indexOf(result1) ;//宣告新變數index，取得result1的索引值
//     // console.log(index);

//     arr.splice(index, 1); // 透過splice(index, 1)將陣列剔除位於index索引值處第一個元素，並回傳新陣列
//     // console.log(arr); 

//     const result2 = arr.reduce(function(accumulate, currentValue){  //將新陣列再進行一次各元素比大小值，意即取得原始陣列第二個最小值
//         if (accumulate < currentValue) {
//             return accumulate 
//         } else {
//             return currentValue 
//         }
//     });

//     return result1 + result2 //將原始陣列最小的兩個值加總後，回傳給呼叫此function的物件
// }
  
//   const list1 = [19, 5, 42, 2, 77]
//   const list2 = [23, 15, 59, 4, 17]
  
//   console.log(sumOfSmallestValues(list1)) // 印出 7
//   console.log(sumOfSmallestValues(list2)) // 印出 19


///////////////////////////////////////////////////////////////////////////////////////////////////////
// sort() 可根據陣列各個元素轉為字串後的每一個字元之 Unicode 編碼位置值進行排序。例如在數值排序中，2 排在 11 前面，但因為數字被轉換成字串，在 Unicode 順序中 "11" 會在 "2" 的前面。

// function sumOfSmallestValues(arr) {
//      arr.sort(function(a, b){  
//         if(a < b){       //若 function(a, b) 的回傳值小於 0，則會把 a 排在小於 b 之索引的位置，即 a 排在 b 前面。
//             return -1
//         }else{
//             return 1     //反之，若 function(a, b) 的回傳值大於 0，則會把 a 排在大於 b 之索引的位置，即 a 排在 b 後面。
//         }
//     })

//     let total = arr[0] + arr[1]
//     // console.log(total);

//     return total
// }


//   const list1 = [19, 5, 42, 2, 77]
//   const list2 = [23, 15, 59, 4, 17]
  
//   console.log(sumOfSmallestValues(list1)) // 印出 7
//   console.log(sumOfSmallestValues(list2)) // 印出 19

  ///////////////////////////////////////////////////////////////////////

  //Math.min() 是比較所有帶入的參數，回傳最小的值，意即Math.min(1, 2, 3, 4, 5)，回傳值為1; 但是直接給予一組陣列作為參數是無法執行的，意即Math.min([1, 2, 3, 4, 5])會回傳NaN

  //若要將參數位置帶入陣列，須將使用ES6 [...array]複製原始陣列並將其展開為非陣列型態，故Math.min()可以成功判斷
  function sumOfSmallestValues(arr) {
   
    // console.log(...arr);
    const result1 = Math.min(...arr)

    const index = arr.indexOf(result1)

    arr.splice(index, 1)

    const result2 = Math.min(...arr)

    // console.log(result1 + result2);
    return result1 + result2
}


 const list1 = [19, 5, 42, 2, 77]
 const list2 = [23, 15, 59, 4, 17]
 
 console.log(sumOfSmallestValues(list1)) // 印出 7
 console.log(sumOfSmallestValues(list2)) // 印出 19