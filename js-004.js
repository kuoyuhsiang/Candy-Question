// 編號：004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
    let quotientHour = Math.floor(seconds / 3600) //時
    let remainderHour = seconds % 3600 
    let quotientMin = Math.floor(remainderHour / 60) //分
    let remainderMin = remainderHour % 60  // 秒

    quotientHour = String(quotientHour).padStart(2, "0")
    
    quotientMin = String(quotientMin).padStart(2, "0")
    
    remainderMin = String(remainderMin).padStart(2, "0")

    return `${quotientHour}:${quotientMin}:${remainderMin}`    
}
  
  console.log(humanReadableTimer(0))      // 印出 00:00:00
  console.log(humanReadableTimer(59))     // 印出 00:00:59
  console.log(humanReadableTimer(60))     // 印出 00:01:00
  console.log(humanReadableTimer(90))     // 印出 00:01:30
  console.log(humanReadableTimer(3599))   // 印出 00:59:59
  console.log(humanReadableTimer(3600))   // 印出 01:00:00
  console.log(humanReadableTimer(45296))  // 印出 12:34:56
  console.log(humanReadableTimer(86399))  // 印出 23:59:59
  console.log(humanReadableTimer(86400))  // 印出 24:00:00
  console.log(humanReadableTimer(359999)) // 印出 99:59:59
 