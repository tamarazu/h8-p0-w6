// CARI NEIGHBOR TERDEKAT 1 STEP UNTUK MASING-MASING STRING YANG DITEMUKAN

function findNeighbors(arr){
    // TULIS KODEMU DISINI
    var iA = 0
    var jA = 0
    var huruf = []
    for (var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] === "string") {
                huruf.push(arr[i][j])
            }
        }
    }
    var obj = {}
    for(var i = 0; i < huruf.length; i++) {
        obj[huruf[i]] = []
        for(var j = 0; j < arr.length; j++) {
            for(var k = 0; k < arr[j].length; k++) {
                if (arr[j][k] === huruf[i])  {                    
                    var posisi1 = j
                    var posisi2 = k
                    for(var a = posisi1 - 1; a <= posisi1 + 1; a++) {
                        if (a >= 0 && a < arr.length) {
                        for(var b = posisi2 -1; b <= posisi2 + 1; b++) {
                            if (b >= 0 && b < arr.length ) {
                                if (typeof arr[a][b] === "number")
                                obj[huruf[i]].push(arr[a][b])
                                }
                            }
                        } 
                    }
                }                
            }
        }
              
    }
    return obj

}

console.log(findNeighbors([
    [456, 871, 670, 122],
    [980, "A", 678, 231],
    [564, 671, 984, 776],
    [100, 203, "B", 156]
]));


/* OUTPUT:
{
    A: [456, 871, 670, 980, 678, 564, 671, 984],
    B: [671, 984, 776, 203, 156]
}
*/


console.log(findNeighbors([
    [456, 871, 670, "X"],
    [980, 564, 780, 231],
    ["Y", 671, "Z", 776],
    [100, 203, 122, 156]
]));


/* OUTPUT:
{
    X: [670, 780, 231],
    Y: [980, 564, 671, 100, 203],
    Z: [564, 780, 231, 671, 776, 203, 122, 156]
}
*/

console.log(findNeighbors([
    ["I", 871, 670, "J"],
    [980, 564, 780, 231],
    [456, 671, 980, 776],
    [100, 203, 122, "K"]
]));

console.log(findNeighbors([
    ["I", 871, 670, "J"],
    [980, 564, 780, 231, 776],
    ["C", "D", 980, 776],
    [100, 203, ,"K"]
]));



/* OUTPUT:
{ 
    I: [ 871, 980, 564 ],
    J: [ 670, 780, 231 ],
    K: [ 980, 776, 122 ] 
}
*/