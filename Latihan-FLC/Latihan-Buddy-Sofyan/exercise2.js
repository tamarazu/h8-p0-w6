// CARI NEIGHBOR TERDEKAT 1 STEP UNTUK MASING-MASING STRING YANG DITEMUKAN
function findNeighbors(arr){
    // TULIS KODEMU DISINI
    
    for (var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++) {
            // if (arr[i][j] === 670) {
            //     return true
            // } else {
            //     return false
            // }
        }
    }
}

​console.log(findNeighbors([
    [456, 871, 670, 122],
    [980, "A", 678, 231],
    [564, 671, 984, 776],
    [100, 203, "B", 156]
]));
​
​
/* OUTPUT:
{
    A: [456, 871, 670, 980, 678, 564, 671, 984],
    B: [671, 984, 776, 203, 156]
}
*/
​