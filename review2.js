function fpb(angka1, angka2) {

    var resultAngka1 = []
    var resultAngka2 = []
    var temp = []
    var result = 0

    for(var i = 0; i <= angka1; i++){
        if(angka1 % i == 0){
            resultAngka1.push(i)
        }
    }

    for(var i = 0; i <= angka2; i++){
        if(angka2 % i == 0){
            resultAngka2.push(i)
        }
    }

    // console.log('angka 1', resultAngka1)
    // console.log('angka 2', resultAngka2)

    for(var i = 0; i < resultAngka1.length; i++){
        for(var j = 0; j < resultAngka2.length; j++){
            if(resultAngka1[i] == resultAngka2[j]){
                temp.push(resultAngka1[i])
            }
        }
    }

    // console.log('temp: ', temp)


    for(var i = 0; i < temp.length; i++){
        if(temp[i] > temp[i+1]){
            result = temp[i]
        }else{
            result = temp[i]            
        }
    }

    // console.log(result)

    return result  

  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1