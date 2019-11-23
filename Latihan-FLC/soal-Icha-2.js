// function dataMember(input) {
//     var jumlahMember = 0
//     var jumlahUmur = 0
//     var min = []
//     var max = []
//     for(var i = 0; i < input.length; i++) {
//         if(input[i].first_name !== undefined) {
//             jumlahMember += 1
//             jumlahUmur += input[i].age
//             var nama = ''
//             if( max.length === 0 || min.length === 0) {
//                 nama = input[i].first_name + ' ' + input[i].last_name
//                 min.push(input[i].age, nama)
//                 max.push(input[i].age, nama)
//             } 
//             else if (max[0] < input[i].age) {
//                 max.pop()
//                 max.pop()
//                 nama = input[i].first_name + ' ' + input[i].last_name
//                 max.push(input[i].age, nama)
//             } 
//             else if (min[0] > input[i].age) {
//                 min.pop()
//                 min.pop()
//                 nama = input[i].first_name + ' ' + input[i].last_name
//                 min.push(input[i].age, nama)
//             }
//         }
//     }
//     var average = Math.round(jumlahUmur / input.length)
//     var obj = {}
//     obj.total_member = jumlahMember
//     obj.oldest_member = {
//         full_name: max[1],
//         age: max[0],
//     }
//     obj.youngest_member = {
//         full_name: min[1],
//         age: min[0],
//     }
//     obj.average = average
//     return obj
// }

// // console.log(dataMember([{
// //     first_name: 'Example',
// //     last_name: 'Contoh',
// //     age: 27
// //   }, {
// //     first_name: 'Some',
// //     last_name: 'Thing',
// //     age: 22
// //   }, {
// //     first_name: 'Manusia',
// //     last_name: 'Biasa',
// //     age: 19
// //   }]))

  
// // INPUT =
// //     [{
// //       first_name: 'Example',
// //       last_name: 'Contoh',
// //       age: 27
// //     }, {
// //       first_name: 'Some',
// //       last_name: 'Thing',
// //       age: 22
// //     }, {
// //       first_name: 'Manusia',
// //       last_name: 'Biasa',
// //       age: 19
// //     }]



// //   - OUTPUT = {
// //       total_member: 3,
// //       oldest_member: {
// //         full_name: 'Example Contoh',
// //         age: 27,
// //       },
// //       youngest_member: {
// //         full_name: 'Manusia Biasa',
// //         age: 19,
// //       },
// //       average_member_age = 23
// //     }




// // INPUT
// // ---------



function result(input) {
    // if (input[0].classCode > input[1].classCode ) {
    //     return true
    // } else {
    //     return false
    // }

    var status = false
    while(!status) {
        status = true
        for(var i = 1; i < input.length;  i++) {
            if (input[i].classCode < input[i-1].classCode) {
                status = false
                var tmp = input[i-1]
                input[i-1] = input[i]
                input[i] = tmp
            }
        }
    }
    
    
    var arr = []
    var index = 0
    var fill = 0
    for(var i = 0; i < input.length; i++) {
        if(arr.length === 0) {
            var fill = 0
            arr.push([input[i]])
        } else { 
            if(arr[index][fill].classCode === input[i].classCode) {
                arr[index].push(input[i])
            } else if (arr[index][fill].classCode !== input[i].classCode) {
                    arr.push([input[i]])
                    index++
            }
        }
    }
    var result = []
    for(var i = 0; i < arr.length; i++) {
        var pass = []
        var fail = []
        for(var j = 0; j <  arr[i].length; j++) {
            if(arr[i][j].score < 70) {
                fail.push(arr[i][j].name)
            } else {
                pass.push(arr[i][j].name)
            }
        }
        obj = {
            classCode : arr[i][0].classCode, 
            passed : pass, 
            failed : fail
        }
        result.push(obj)
    }
    return result

}


console.log(result([
    { name: 'John', score: 80, classCode: 'A' },
    { name: 'Mike', score: 60, classCode: 'B' },
    { name: 'Budi', score: 70, classCode: 'C' },
    { name: 'Siti', score: 50, classCode: 'A' },
    { name: 'Aaron', score: 10, classCode: 'A' },
    { name: 'Arthur', score: 10, classCode: 'C' },
    { name: 'Osass', score: 10, classCode: 'B' },
    { name: 'Yolo', score: 90, classCode: 'C' },
  ]))


// OUTPUT
// -----------
// [
//   { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
//   { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
//   { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
// ]