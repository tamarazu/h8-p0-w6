
function table(num) {
    var arr =[]
    var index = 1
    for(var i = 0; i < num; i++) {
        var fill = []
        for(var j = 0; j < num; j++) {
            fill.push(index)
            index++
        }
        arr.push(fill)
    }
    
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++) {
            if(arr[i][j] % 2 === 0) {
                hasil = arr[i][j] / 2
                // console.log(hasil)
                if ( hasil % 2 === 1) {
                    arr[i][j] = 'o'
                } else if ( hasil % 2 === 0) {
                    arr[i][j] = '#'
                }
            } else if (arr[i][j] % 2 === 1) {
                arr[i][j] = 'x'
            }
        }
    }

    console.log(arr)
}




console.log(table(3))
// console.log(table(4))

// // Contoh 1:
// //   ==========
// //   input: 3
// //   proses:
// //           [
// //             [ 1, 2, 3 ],
// //             [ 6, 5, 4 ],
// //             [ 7, 8, 9 ]
// //           ]
// //   output:
// //           [
// //             [x, o, x],
// //             [o, x, #],
// //             [x, #, x]
// //           ]



function symbols(num) {
    var arr =[]
    var index = 1
    for(var i = 0; i < num; i++) {
        var fill = []
        for(var j = 0; j < num; j++) {
            fill.push(index)
            index++
        }
        arr.push(fill)
    }
    
    var arr1 = []
    for(var i = 0; i < 1; i++) {
        var fill = []
        for(var j = 0; j < arr[i].length; j++)
            if(arr[i][j] % 2 === 1) {
                fill.push('x')
            }
            else if (arr[i][j] % 2 ===0) {
                hasil = arr[i][j] / 2
                if(hasil % 2 === 1) {
                    fill.push('o')
                } else if(hasil % 2 === 0) {
                    fill.push('#')
            }
        }
                arr1.push(fill)
    }

    for(var i = 1; i < num  ; i++) {
        var fill =[]
    // console.log(i)
        if ( i % 2 === 1) {
            for(var j = num-1; j >= 0; j--) {
                fill.push(arr1[0][j])
            }
        } else if ( i % 2 === 0) {
            for(var j = 0; j < num; j++) {
                fill.push(arr1[0][j])
            }
        }
        arr1.push(fill)
    }
        console.log(arr1)
    
}

console.log(symbols(4))


//   Contoh 2:
//   ==========
//   input: 4
//   proses:
//         [
//           [ 1, 2, 3, 4 ],
//           [ 8, 7, 6, 5 ],
//           [ 9, 10, 11, 12 ],
//           [ 16, 15, 14, 13 ]
//         ]
//   output:
//         [
//           [ x, o, x, # ],
//           [ #, x, o, x ],
//           [ x, o, x, # ],
//           [ #, x, o, x ]
//         ]


// //   Contoh 2:
// //   ==========
// //   input: 4
// //   proses:
// //         [
// //           [ 1, 2, 3, 4 ],
// //           [ 8, 7, 6, 5 ],
// //           [ 9, 10, 11, 12 ],
// //           [ 16, 15, 14, 13 ]
// //         ]
// //   output:
// //         [
// //           [ x, o, x, # ],
// //           [ #, x, o, x ],
// //           [ x, o, x, # ],
// //           [ #, x, o, x ]
// //         ]