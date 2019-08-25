function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    var result = []
    var findNaikDari = 0

    for(var i = 0; i < arrPenumpang.length; i++){
        for(var j =0; j < rute.length; j++){
            if(rute[j] == arrPenumpang[i][1]){
                findNaikDari = j
            }
        }


        var counter = 0
        for(var k = findNaikDari+1; k < rute.length; k++){
            counter++
            if(arrPenumpang[i][2] == rute[k]){
                break
            }
        }

        var obj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: counter * 2000
        }

        result.push(obj)

    }
    return result

}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]