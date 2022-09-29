function isValidVatNumber(vat) {
    const logicMultiplier = [1, 2, 1, 2, 1, 2, 4, 1]
    const elmArray = vat.split("") //['8', '8', '1', '1', '7', '1', '2', '5']
    
    let array = elmArray.map( (elm, index) => { //將陣列logicMultiplier、elmArray兩者對應的索引值相乘
        return elm * logicMultiplier[index]
    }) // array = [ 8, 16, 1, 2, 7, 2, 8, 5 ]
    
    let sum = 0
    array.map((elm) => {
        if(elm > 9){ //將目前陣列array裡面大於 9 的元素進行處裡
            let carry = String(elm) //轉為字串後使用split()函式
            .split("") // 16 => [ "1", "6"]
            .reduce((acc, cv) => Number(acc) + Number(cv)) // 陣列中數字累加 [1 , 6] => 7
            
            array.splice(array.indexOf(elm), 1, carry) // 將array中 16 移除，補入變數carry => [8, 7, 1, 2, 7, 2, 8, 5]
            sum = array.reduce((acc, cv) => acc + cv) // 8 + 7 + 1 + 2+ 7 + 2 + 8 + 5 = 40
        }
    })
    
    if(sum % 5 === 0){
        return true
    }else{
        return false
    }
  }
  
//   console.log(isValidVatNumber('88117125')) // true
//   console.log(isValidVatNumber('53212539')) // true
//   console.log(isValidVatNumber('88117126')) // false
  console.log(isValidVatNumber('10458575'))