// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

function sumOfSmallestValues(arr) {
    let result = arr.reduce(function(acc, cv){
        if (cv < acc) {
           return cv
           } else{
            return acc
            }
        })
        console.log(result)    
    let a = arr.indexOf(result);
    // console.log(a);
    arr.splice(a, 1)
    // console.log(arr);

    let result2 = arr.reduce(function(acc, cv){
        if (cv < acc) {
           return cv
           } else{
            return acc
            }
        }) 
    return result + result2;
  }
  
  const list1 = [19, 5, 42, 2, 77]
  const list2 = [23, 15, 59, 4, 17]
  
  console.log(sumOfSmallestValues(list1)) // 印出 7
  console.log(sumOfSmallestValues(list2)) // 印出 19
