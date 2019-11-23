/*
==================================
Array Mastery: Shortest Word
==================================

Nama:________

[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.

[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']

[CONSTRAINTS]
Dilarang menggunakan function .map/.filter/.reduce!
Diarang menggunakan regex!

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!

function shortestWords(words) {
    //...
    var splitArr = words.split(' ')
    // var status = false
    // while(!status) {
    //   status = true
    //   for(var i = 0; i < splitArr.length; i++) {
    //     if(splitArr[i].length > splitArr[i+1].length) {
    //       status = false
    //       var tmp= splitArr[i]
    //       splitArr[i] = splitArr[i+1]
    //       splitArr[i+1] = tmp
    //     }
    //   }
    // }
    console.log(splitArr)    
  
  
  
    var minArr = []
    var min = 0
    for(var i = 0; i < splitArr.length; i++) {
      if(min === 0) {
        min = splitArr[i]
        minArr.push(splitArr[i])
      } else if (min > splitArr[i].length) {
        min = splitArr[i]
        minArr.pop()
        minArr.push(splitArr[i])
      } else if (min === splitArr[i].length) {
        minArr.push(splitArr[i])
      }
    }
    // return minArr
  }
  
  console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
  console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
  console.log(shortestWords('I am diligent')); // ['I']