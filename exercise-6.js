function digitPerkalianMinimum(angka) {
    
    var result = []
    var hasilSementaraAngka = []
    var result = ''
    

    for(var i = 1; i <= angka; i++){
        // var hasilSementaraAngka = []
        var angkaHasil=''
        result = ''
        if(angka % i == 0){
            result += i
            angkaHasil += angka / i 
            result += angkaHasil

            hasilSementaraAngka.push(result)
        }

        
        // result += i +' ' + angkaHasil

    }

    var check = []
    for(var i = 0; i < hasilSementaraAngka.length; i++){
       
            check.push(hasilSementaraAngka[i].length)
    }



// console.log(check)



    // for(var k = 0; k < hasilSementaraI; k++){

    //     for(var j = angka; j >= 1; j--){
    //         if( hasilSementaraI[k] * j == angka){
    //             hasilSementaraAngka.push(j)
    //             // console.log(hasilSementaraAngka)
    //         }
    //     }
    // }


    // result.push(hasilSementaraI)
    // result.push(hasilSementaraAngka)


    // return hasilSementaraAngka
    check.sort()

    


    return check[0]

}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2 
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2