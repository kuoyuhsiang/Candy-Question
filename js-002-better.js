const chars1 = ["a", "b", "c", "d", "f", "g"] 
const chars2 = ["O","Q","R","S"]

function missingChar(chars) {
    let newarr = []
    chars.map(function(elm){
        newarr.push(elm.charCodeAt())
            return newarr
        }
    ); 

    for ( let i = 0; i < newarr.length - 1; i++) {
        if(newarr[i] + 1 !== newarr[i+1]) {
             let result = String.fromCharCode(newarr[i] + 1)
            //  console.log(result)
             return result
        } 
    }
    
}


console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P