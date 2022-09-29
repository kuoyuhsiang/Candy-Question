// 編號：002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元
// 範例：

const chars1 = ["a", "b", "c", "d", "f", "g"] 
const chars2 = ["O","Q","R","S"]

function missingChar(chars) {

    for ( let i = 0; i < chars.length - 1; i++){ //使用迴圈依序帶入陣列內元素，結束條件為最終索引值
        
        // 陣列內個別字串透過charCodeAt()可以取得對應的UTF-16指定索引處的代碼單元; 
        // 若陣列內chars[i+1] - chars[i] 不等於 1，代表不連貫元素出現，將其減 1 回傳欲取得之缺漏值

        if (chars[i+1].charCodeAt() - chars[i].charCodeAt() !== 1) { 
            let result = (chars[i+1].charCodeAt() - 1)
            // console.log(result);
            return String.fromCharCode(result);  // fromCharCode() 可以將代碼單元轉換成字串 
        } 
    }
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt