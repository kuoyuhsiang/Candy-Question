// 編號：009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) { 
    if( url.includes("#")){ 
        let arrayPrince = url.split('')   //將傳入的字串拆解成單一字元陣列 [ '5', 'x', 'r', 'u', ... ]
        arrayPrince.splice(arrayPrince.indexOf("#"), 1)   //原始陣列中移除indexOf("#")取得的索引值
        return (arrayPrince.join(''));  //再用join('')將所有的元素合併成一個字串，並回傳此字串。
    }else{
        return url
    }
  }
  
  console.log(removeAnchor("5xruby.tw")) // 印出 5xruby.tw
  console.log(removeAnchor("5xruby.tw/#about")) // 印出 5xruby.tw/
  console.log(removeAnchor("5xruby.tw/courses/?page=1#about")) // 印出 5xruby.tw/courses/?page=1