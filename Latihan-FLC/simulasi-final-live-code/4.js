/**
 * =====================================
 * Multiplication Table BUT with a twist
 * =====================================
 * 
 * [INSTRUCTIONS]
 * 
 * Diberikan sebuah array multidimensi yang berisikan angka - angka pada sisi atas table dan kiri nya.
 * tugas kalian adalah dapat mengalikan angka - angka tersebut sesuai dengan koordinatnya
 * lalu ditambahkan dengan angka pertama dari array input yang diberikan.
 * 
 * [EXAMPLES]
 * input :
 * [
 *   [3,1,2,3,4],
 *   [5,0,0,0,0],
 *   [6,0,0,0,0],
 *   [7,0,0,0,0],
 *   [8,0,0,0,0]
 * ]
 * 
 * proses :
 * pertama, untuk mengetahui cara penghitungan angka - angka 0 yang belum diketahui hasil perkaliannya,
 * kita umpamakan mereka seperti variable :
 * [
 *   [3,1,2,3,4],
 *   [5,a,b,c,d],
 *   [6,e,f,g,h],
 *   [7,i,j,k,l],
 *   [8,m,n,o,p]
 * ]
 * 
 * untuk mengetahui nilai a , maka kalikan 1 dengan 5 lalu ditambahkan dengan angka pertamanya (3), maka:
 * a = 5 + 3 = 8
 * b = (5 * 2) + 3
 * c = (5 * 3) + 3
 * d = (5 * 4) + 3
 * e = (6 * 1) + 3
 * dst ..
 * 
 * sehingga output nya :
 * [
 *   [3,1,2,3,4],
 *   [5,8,13,18,23],
 *   [6,9,15,21,27],
 *   [7,10,17,24,31],
 *   [8,11,19,27,35]
 * ]
 * 
 * [RULES]
 * 1. HANYA boleh menggunakan `push dan unshift`
 * 2. `DILARANG` menggunakan method REGEX
 */

function multiplicationTable(table) {
  // your code here
  var alfabet = 'abcdefghijklmnopqrstuvwxyz'
  var arr = []
  var index = 0
  // console.log(alfabet[index])
  for(var i = 0; i < table.length; i++) {
    var input = []
    for(var j = 0; j < table[i].length; j++) {
      if (table[i][j] === 0) {
      input.push(alfabet[index])
      index++
      }else {
        input.push(table[i][j])
      }
    }
    arr.push(input)
  }

  var final = []
  for(var i = 0; i < arr.length; i++) {
    var input = []
    for(var j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] === "string") {
        var val = (arr[i][0] * arr[0][j]) + arr[0][0]
      input.push(val)
      }else {
        input.push(arr[i][j])
      }
    }
    final.push(input)
  }
  return final
}

console.log(multiplicationTable([
  [3, 1, 2, 3, 4],
  [5, 0, 0, 0, 0],
  [6, 0, 0, 0, 0],
  [7, 0, 0, 0, 0],
  [8, 0, 0, 0, 0]
]))
// [
//   [ 3,  1,  2,  3,  4 ],
//   [ 5,  8, 13, 18, 23 ],
//   [ 6,  9, 15, 21, 27 ],
//   [ 7, 10, 17, 24, 31 ],
//   [ 8, 11, 19, 27, 35 ]
// ]

console.log(multiplicationTable([
  [5, 3, 5, 7, 9],
  [2, 0, 0, 0, 0],
  [4, 0, 0, 0, 0],
  [6, 0, 0, 0, 0],
  [8, 0, 0, 0, 0]
]))
// [
//   [ 5,  3,  5,  7,  9 ],
//   [ 2, 11, 15, 19, 23 ],
//   [ 4, 17, 25, 33, 41 ],
//   [ 6, 23, 35, 47, 59 ],
//   [ 8, 29, 45, 61, 77 ]
// ]