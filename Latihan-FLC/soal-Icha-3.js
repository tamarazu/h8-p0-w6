function deretAja(arr) {
    if(arr.length > 0) {
        if(typeof arr[0] === "object") {
            console.log(arr[0])
            return deretAja(arr[0]) + deretAja(arr.slice(1))
        } else {
        return arr[0] + '\n' + deretAja(arr.slice(1)) 
        } 
    } else {
        return ''
    }
}

console.log(deretAja([1, 2, 3,['abc','b',[4, 5]], 'c']));
// console.log(deretAja([4, [5, 6], [7, [ 8, [111, ['a'], 'b'], 9], 'z'], 15]));

/**
 * input
 * -----
 * [1, 2, 3,['abc','b',[4, 5]], 'c']
 * 
 * output
 * ------
 * 1
 * 2
 * 3
 * abc
 * b
 * 4
 * 5
 * c
 * 
 * input
 * -----
 * [4, [5, 6], [7, [ 8, [111, ['a'], 'b'], 9], 'z'], 15]
 * 
 * output
 * ------
 * 4
 * 5
 * 6
 * 7
 * 8
 * 111
 * a
 * b
 * 9
 * z
 * 15
 */
