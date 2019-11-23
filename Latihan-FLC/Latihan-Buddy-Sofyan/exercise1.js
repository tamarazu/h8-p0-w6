// VARIASI SOAL NOMOR 2
// MENCARI MOVIE BERDASARKAN BULAN/TAHUN
function findMovie(when, arrMovie){
    // tulis kodemu disini
    var obj = {}
    if (when.length === 2) {
        obj.month = when[0]
        obj.year = when[1]
        obj.count = 0
        obj.list = []
        for(var i = 0; i < arrMovie.length; i++) {
            var bulan = ''
            var tahun = ''
            for(var j = 2; j < arrMovie[i][1].length-4; j++) {
                if (arrMovie[i][1][j] === ' '){
                    bulan = bulan
                } else {                            
                    bulan += arrMovie[i][1][j]
                }
            }

            for(var j = arrMovie[i][1].length - 4; j < arrMovie[i][1].length; j++) {
                tahun += arrMovie[i][1][j]
            }
            tahun = Number(tahun)

            if (obj.month === bulan && obj.year === tahun ) {
                obj.count += 1
                var list = {
                    title : arrMovie[i][0],
                    genre : arrMovie[i][2]
                }
                obj.list.push(list)
            } 
        }
        if (obj.list.length === 0) {
            return (`Tidak menemukan movie di waktu tersebut`)
        }
    
    } 
    
    else if ( when.length === 1) {
        if (typeof when[0] === "number") {
            obj.year = when[0]
            obj.count = 0
            obj.list = []
            for(var i = 0; i < arrMovie.length; i++) {
                var tahun = ''
                for(var j = arrMovie[i][1].length - 4; j < arrMovie[i][1].length; j++) {
                    tahun += arrMovie[i][1][j]
                    }
                tahun = Number(tahun)
                if (obj.year === tahun ) {
                    obj.count += 1
                    var list = {
                        title : arrMovie[i][0],
                        genre : arrMovie[i][2]
                    }
                    obj.list.push(list)
                // } else {
                // return (`Tidak menemukan movie di waktu tersebut`)
                }
            } 
            if (obj.list.length === 0) {
                return (`Tidak menemukan movie di waktu tersebut`)
            }
        }
        
        else if (typeof when[0] === "string") {
            obj.month = when[0]        
            obj.count = 0
            obj.list = []
            for(var i = 0; i < arrMovie.length; i++) {
                var bulan = ''
                for(var j = 2; j < arrMovie[i][1].length-4; j++) {
                    if (arrMovie[i][1][j] === ' '){
                        bulan = bulan
                    } else {                            
                        bulan += arrMovie[i][1][j]
                    }
                }
                if (obj.month === bulan) {
                    obj.count += 1
                    var list = {
                        title : arrMovie[i][0],
                        genre : arrMovie[i][2]
                    }
                    obj.list.push(list)
                }        
            }
            if (obj.list.length === 0) {
                return (`Tidak menemukan movie di waktu tersebut`)
            }
        } 
    }
    else if (when.length === 0) {
        return (`Filter Harus Diisi`)
    }
    // console.log(obj["list"].length)
    return obj
}


console.log(findMovie(["May", 2016], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));
/*
{
    month: "May",
    year: "2016",
    count: 1,
    list: [
        {
            title: "Suicide Squad",
            genre: "Action"
        }
    ]
}
*/
console.log(findMovie(["January", 2019], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));
/*
{ 
    month: 'January',
    year: 2019,
    count: 2,
    list:[ 
        { title: 'Fast Furious', genre: 'Action' },
        { title: 'IT', genre: 'Horror' } 
    ] 
}
*/
console.log(findMovie([2019], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));
/*
{ 
    year: 2019,
    count: 4,
    list:[ 
        { 
            title: 'Fast Furious', 
            genre: 'Action' 
        },
        { 
            title: 'IT', 
            genre: 'Horror' 
        },
        { 
            title: 'Justice League', 
            genre: 'Action'
        },
        { 
            title: 'Lion King', 
            genre: 'Animation' 
        }
    ] 
}
*/
console.log(findMovie(["December"], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));
/*
{ error: 'Tidak menemukan movie di waktu tersebut' }
*/
console.log(findMovie([], [
    ["Suicide Squad", "3 May 2016", "Action"],
    ["Interstellar", "6 Juny 2018", "Sci-Fi"],
    ["La La Land", "24 Juny 2018", "Romatic"],
    ["Fast Furious", "2 January 2019", "Action"],
    ["IT", "7 January 2019", "Horror"],
    ["Justice League", "14 April 2019", "Action"],
    ["Lion King", "20 July 2019", "Animation"]
]));
/*
{ error: 'Filter Harus Diisi' }
*/
// Collapse



