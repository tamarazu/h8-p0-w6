function tambahAngka(str) {
    var total = 0
    // var strSplit = str.split(' ')
    // console.log(strSplit)
    
    if(str.length > 0) {
        if(typeof Number(str[0]) === "number") {
            console.log(str[0])
            return Number(str[0]) + tambahAngka(str.slice(1))
        // } else {
            // return tambahAngka(str.slice(1))
        }
    } else {
            return 0
    }
}

console.log(tambahAngka('say4 b3laj4r javascr1pt'))