// 編號：009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) { 
    return url.split("#")[0]
  }
  
  console.log(removeAnchor("5xruby.tw")) // 印出 5xruby.tw
  console.log(removeAnchor("5xruby.tw/#about")) // 印出 5xruby.tw/
  console.log(removeAnchor("5xruby.tw/courses/?page=1#about")) // 印出 5xruby.tw/courses/?page=1