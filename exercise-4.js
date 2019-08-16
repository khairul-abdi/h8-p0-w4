function cariModus(arr) {

    // var done = false
    // while(!done){
    //     done = true

    //     for(var i = 0; i<arr.length; i++){
    //         if(arr[i-1] > arr[i]){
    //             done = false

    //             var temp = arr[i-1]
    //             arr[i-1] = arr[i]
    //             arr[i] = temp
    //         }
    //     }

    // }

    var angka = []
    var count = []
    var isFind = false
    for(var i = 0; i < arr.length; i++){

        if(angka.length == 0){
            angka.push(arr[i])
            count.push(1)
        }else{
            for(var j = 0; j < angka.length; j++){
                if(arr[i] == angka[j] ){
                    count[j] = count[j] + 1
                    isFind = true;
                }
            }

            if(isFind == false){
                angka.push(arr[i])
                count.push(1)
            }
        }
        isFind = false
    }

    // console.log("Angka : ", angka)
    // console.log("Count : ", count)
    // var max = count[0] 
    // var indexMax = 0;
    // var minNol = -1

    var max = 1;
    var indexMax = -1

    for(var k = 0; k<count.length; k++){

        if(max < count[k]){
            max = count[k]
            indexMax = k;
        }
    }


    if (max === 1) {
        return -1
    }else if(max === arr.length ){
        return -1
    }else {
        return angka[indexMax]
    }


    

}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6,5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
  console.log(cariModus([10, 10])); // -1
