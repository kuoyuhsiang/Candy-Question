
function humanReadableTimer(seconds) {
    let quotientHour = Math.floor(seconds / 3600) //時
    let remainderHour = seconds % 3600 
    let quotientMin = Math.floor(remainderHour / 60) //分
    let remainderMin = remainderHour % 60  // 秒

    if(0<= quotientHour && quotientHour < 10){
        quotientHour = String(quotientHour).padStart(2, "0")
    }

    if(0<= quotientMin && quotientMin < 10){
        quotientMin = String(quotientMin).padStart(2, "0")
    }

    if(0<= remainderMin && remainderMin < 10){
        remainderMin = String(remainderMin).padStart(2, "0")
    }
    
    return `${quotientHour}:${quotientMin}:${remainderMin}`
    // if (seconds >= 3600) {
    //         if(quotientHour < 10){
    //             hour = "0" + quotientHour
    //         }else{
    //             hour = quotientHour
    //         }

    //         if(quotientMin < 10){
    //             minute = "0" + quotientMin
    //         }else{
    //             minute = quotientMin
    //         }

    //         if(remainderMin < 10){
    //             second = "0" + remainderMin
    //         }else{
    //             second = remainderMin
    //         }

    // } else if(60 <= seconds && seconds < 3600){
    //     hour = "00"
    //         if(quotientMin < 10){
    //             minute = "0" + quotientMin
    //         }else{
    //             minute = quotientMin
    //         }

    //         if(remainderMin < 10){
    //             second = "0" + remainderMin
    //         }else{
    //             second = remainderMin
    //         }
    // } else{
    //     hour = "00"
    //     minute = "00"
    //         if (seconds < 10){
    //             second = "0" + remainderMin
    //         }else{
    //             second = remainderMin
    //         }
    // }
    
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