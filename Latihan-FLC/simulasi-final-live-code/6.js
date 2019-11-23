/**
 * ============
 * Hitung Prima
 * ============
 * 
 * [Instruction]
 * Buatlah sebuah function untuk menghitung ada berapa angka prima dari angka 0 sampai @num
 * dimana @num adalah angka input yang diberikan sebagai parameter untuk function hitungPrima kita
 * 
 * [Rules]
 * 1. `Wajib menggunakan rekursif`
 * 2. Dilarang menambah dan merubah tipe data parameter
 * 3. Dilarang membuat function lain selain hitungPrima
 * 4. Hanya diperbolehkan `menggunakan 1 loop`
 */

// function hitungPrima(num) {
//   // Write your code here
//   var hasil = [2,3,5,7]
//   var result = 0
//     for(var i = 0 ; i < hasil.length; i++) {
//       if (num === hasil[i]) {
//         result += 1
//         num--
//         console.log(num)
//       } else if (num % hasil[i] === 1){
//         result += 1
//         num--
//         console.log(num)
//       } else {
//         result = result
//         num--
//         console.log(num)
//       }
//     }
//   // }
  // return result
// }

function hitungPrima(num) {
  var result = 0
  for (var counter = 2; counter <= num; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
      result += 1 ;
    }
  }
  return result
}
  

console.log(hitungPrima(1)) // 0
console.log(hitungPrima(2)) // 1 (karena 2 adalah prima)
console.log(hitungPrima(10)) // 4 (karena 2,3,5,7 adalah prima)
console.log(hitungPrima(20)) // 8 (karena 2,3,5,7,11,13,17,19 adalah prima)