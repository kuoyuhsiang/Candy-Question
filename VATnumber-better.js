function sumOfProducts(value){  //處裡乘積之和
    return result = value.join("").split("").reduce((acc, cv) => Number(acc) + Number(cv))   
}
function isValidVatNumber(vat) {
    const logicMultiplier = [1, 2, 1, 2, 1, 2, 4, 1]
    const elmArray = vat.split("") //['8', '8', '1', '1', '7', '1', '2', '5']
    let arrayMultiply  = elmArray.map( (elm, index) => { 
        return elm * logicMultiplier[index]//處裡乘積， arrayMultiply = [ 8, 16, 1, 2, 7, 2, 8, 5 ]
    })
    let sum = sumOfProducts(arrayMultiply)
    if (elmArray[6] !== '7'){ //統一編號第 7 位數非 "7"
        return sum % 5 === 0
    }else if(elmArray[6] == '7'){  //統一編號第 7 位數是 "7"
        return ((sum - 9) % 5 === 0 || (sum - 10) % 5 === 0)
    }
}
  
  console.log(isValidVatNumber('88117125')) // true
  console.log(isValidVatNumber('53212539')) // true
  console.log(isValidVatNumber('88117126')) // false
