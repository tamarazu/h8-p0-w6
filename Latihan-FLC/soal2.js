/*
  =======================
  Kumpulan Nama Negara
  =======================

  Deskripsi: Sebuah fungsi yang akan mengembalikan kumpulan-kumpulan nama negara. 
  Yang dikelompokkan sesuai abjad pertama dari nama negara-negara tersebut.
  Kemudian dihitung ada berapa negara yang memiliki abjad awal yang sama.
  
  rules:
  1. tidak boleh menggunakan built in function kecuali .push() dan .unshift()
  2. Function menerima parameter berupa nama-nama negara
  3. Function akan mengembalikan multidimensional Array
*/

function countryCollection(countries) {
    // you can only write your code here!
    // var arr = []
    
    // var status = false
    // while(!status) {
    //   status = true
    //   for(var i = 0; i < countries.length; i++) {
    //     if( countries[i] > countries[i+1]) {
    //       status = false
    //       var tmp = countries[i]
    //       countries[i] = countries[i+1] 
    //       countries[i+1] = tmp
    //     }
    //   }
    // }


    // var arr = []
    // var index = 0 
    // for(i = 0; i < countries.length; i++) {
    //   if(arr.length === 0) {
    //     arr.push([countries[i][0], countries[i] ])
    //   } else if ( arr.length > 0) {
    //       if(arr[index][0] === countries[i][0]) {
    //         arr[index].push(countries[i])
    //       } else if (arr[index][0] !== countries[i][0]) {
    //         arr.push([countries[i][0], countries[i]])
    //         index++
    //       }
    //     }
    //   }
  
    //   for( var i = 0; i < arr.length; i++) {
    //     var hitung = arr[i].length -1
    //     // console.log(hitung)
    //     arr[i].push(hitung)
    //   }
  
    return arr
  }
  
  
  console.log(countryCollection(["Barbados", "Oman", "Gibraltar", "Malaysia", "Suriname", "Mayotte", "Turkmenistan", "Austria", "Somalia"]))
  // [ 
  //   [ 'B', 'Barbados', 1 ],
  //   [ 'O', 'Oman', 1 ],
  //   [ 'G', 'Gibraltar', 1 ],
  //   [ 'M', 'Malaysia', 'Mayotte', 2 ],
  //   [ 'S', 'Suriname', 'Somalia', 2 ],
  //   [ 'T', 'Turkmenistan', 1 ],
  //   [ 'A', 'Austria', 1 ] 
  // ]
  
  console.log(countryCollection(["Bhutan", "Comoros", "Botswana", "Iceland", "Lesotho", "Liechtenstein", "Malawi", "Algeria", "Azerbaijan", "Indonesia", "Andorra", "Armenia"]))
  // [
  //   [ 'B', 'Bhutan', 'Botswana', 2 ],
  //   [ 'C', 'Comoros', 1 ],
  //   [ 'I', 'Iceland', 'Indonesia', 2 ],
  //   [ 'L', 'Lesotho', 'Liechtenstein', 2 ],
  //   [ 'M', 'Malawi', 1 ],
  //   [ 'A', 'Algeria', 'Azerbaijan', 'Andorra', 'Armenia', 4 ]
  // ]