// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

function loop(arr){    // loop() 此函式可以把鄰近的重複值去除，並依照原本的順序排序
  let newArray = arr.filter((elm, index)=> {
    if (arr[index] !== arr[index + 1]) {
      return (arr[index]);
    }
  })
  return newArray
}

function uniqueOrder(sequence) {
    if (typeof sequence === "string"){  //傳入的型別如果是字串型，用split()拆解
      return loop(sequence.split(""))
    }else{                              //傳入的型別如果不是字串型，直接呼叫loop()
      return loop(sequence)
    }
  } 
  
  console.log(uniqueOrder("AABCC")) // [ 'A', 'B', 'C']
  console.log(uniqueOrder("AAABBBCCBCC")) // [ 'A', 'B', 'C', 'B', 'C']
  console.log(uniqueOrder([1, 2, 1, 2, 1])) // [ 1, 2, 1, 2, 1 ]
  console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])) // [1, 2, 1]