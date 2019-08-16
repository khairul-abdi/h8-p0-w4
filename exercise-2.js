function fpb(angka1, angka2) {

    var resultAngka1 = []
    var resultAngka2 = []
    var resultSementara = []


    for(var i = 1; i <= angka1; i++){

        if(angka1 % i == 0){
            resultAngka1.push(i)
        }        
    }

    for(var j = 1; j <= angka2; j++){

        if(angka2 % j == 0){
            resultAngka2.push(j)
        }
    }     

    // console.log(resultAngka1)
    // console.log(resultAngka2)



    for(var k = 0; k < resultAngka1.length; k++){
        for(var l = 0; l <resultAngka2.length; l++){

            // console.log(resultAngka1[k])
            // console.log(resultAngka2[l])
            if(resultAngka1[k] == resultAngka2[l]){
                resultSementara.push(resultAngka1[k])
            }
        }
    }

    var max = 0
    for(var m = 0; m < resultSementara.length; m++){

        if(max < resultSementara[m]){
            max = resultSementara[m]
        }
    }
    
    // result.push(resultAngka1)
    // result.push(resultAngka2)


    return max
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1