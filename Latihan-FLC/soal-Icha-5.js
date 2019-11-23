// NO 1
// =====
// // input: 9
// // output:
// // 1  2  3  4
// // 5  6  7  8
// // 9

// function tableStr(num) {
//     var dimensi = 0
//     for(var i = 0; i <= num; i++) {
//         var angka1 = i * i
//         var angka2 = (i+1) * (i+1) 
//         if(num > angka1 && num <= angka2) {
//             var baris = i + 1
//         }
//     }
//     console.log(baris)
//     var angka = 1
//     var str = ''
//     for(var i = 1; i <= baris; i++) {
//         for(var j = 1; j <= baris; j++) {
//             if( j < baris  ) {
//                 str += angka + ' '
//                 angka++
//             } else if( j = baris) {
//                 str += angka + '\n'
//                 angka++
//             }
//         }
//     }
//     console.log(str)
// }
// 
// console.log(tableStr(12))
// input: 12
// 1  2  3  4
// 5  6  7  8
// 9 10 11 12
// NO 2
// ====

// function tableArr(num) {
//     var dimensi = 0
//     for(var i = 0; i <= num; i++) {
//         var angka1 = i * i
//         var angka2 = (i+1) * (i+1) 
//         if( angka2 >= num && num > angka1) {
//             var baris = i+1
//         }
//     }
//     // console.log(baris)
//     var angka = 1
//     var arr = []
//     for(var i = 0; i < baris; i++) {
//         var fill =[]
//         for(var j = 0; j < baris; j++) {
//             fill.push(angka)
//             angka++
//         }
//         arr.push(fill)
//     }
//     return arr
// }

// console.log(tableArr(22))



// input: 4
// output:
// [
    //  [1, 2],
    //  [3, 4]
    // ]
    
    
// function tableSym(num) {
//     var dimensi = 0
//     for(var i = 0; i <= num; i++) {
//         var angka1 = i * i 
//         var angka2 = (i+1) * (i+1) 
//         if(angka2 >= num && num > angka1) {
//             dimensi = i+1
//         }
//     }
//     console.log(dimensi)
//     var angka = 1
//     var hasil = []
//     for(var i = 0; i < dimensi; i++) {
//         var fill = []
//         for(var j = 0; j < dimensi; j++) {
//             if(angka <= num) {
//                 fill.push(angka)
//                 angka++
//             } else if (angka > num ) {
//                 fill.push('*')
//             }
//         }
//         hasil.push(fill)
//     }
//     return hasil
// }
    
// console.log(tableSym(5))
    
    
//     // input: 5
//     // output:
// // [
// //  [1, 2, 3],
// //  [4, 5, '*'],
// //  ['*', '*', '*']
// // ]
// // input: 12
// // output:
// // [
// //  [1, 2, 3, 4],
// //  [5, 6, 7, 8],
// //  [9, 10, 11, 12],
// //  ['*', '*', '*','*']
// // ]


// input: 5
// output:
// [
    //  [1, 2, 3],
//     //  [4, 5, '*'],
//     //  ['*', '*', '*']
//     // ]
    
// function tableSym(num) {
//     var dimensi = 0
//     for(var i = 0; i <= num; i++) {
//         var angka1 = i * i 
//         var angka2 = (i+1) * (i+1) 
//         if(angka2 >= num && num > angka1) {
//             dimensi = i+1
//         }
//     }
//     console.log(dimensi)
//     var angka = 1
//     var hasil = []
//     for(var i = 0; i < dimensi; i++) {
//         var fill = []
//         for(var j = 0; j < dimensi; j++) {
//             if(angka <= num) {
//                 fill.push(angka)
//                 angka++
//             } else if (angka > num ) {
//                 fill.push('*')
//             }
//         }
//         hasil.push(fill)
//     }
//     return hasil
// }
        
//     console.log(tableSym(12))
// input: 12
// output:
// [
//  [1, 2, 3, 4],
//  [5, 6, 7, 8],
//  [9, 10, 11, 12],
//  ['*', '*', '*','*']
// ]

function job(companies) {
    var obj = {}
    // var isiSkill = 
    for(var i in companies) {
        for(var j in companies[i]) { 
            if(obj[j] === undefined) {
                obj[j] = {
                    skills : [],
                    experience : companies[i][j].experience
                }
            } 
        }            
        
    }
    console.log(obj)
}



console.log(job({
     XML: {
       'PT ABC': {
         experience: 5
       }
     },
     Javascript: {
       'PT ABC': {
         experience: 5
       },
       'PT HIJ': {
         experience: 3
       },
     },
     Java: {
       'PT JKL': {
         experience: 4
       }
     }
    }))

// NO 3
// =====
// input: {
//  XML: {
//    'PT ABC': {
//      experience: 5
//    }
//  },
//  Javascript: {
//    'PT ABC': {
//      experience: 5
//    }
//    'PT HIJ': {
//      experience: 3
//    },
//  },
//  Java: {
//    'PT JKL': {
//      experience: 4
//    }
//  }
// }
// output:
// {
//  'PT ABC': {
//    skills: ['XML', 'Javascript'],
//    experience: 5
//  },
//  'PT HIJ': {
//    skills: ['Javascript'],
//    experience: 3
//  },
//  'PT JKL': {
//    skills: ['Java'],
//    experience: 4
//  }
// }