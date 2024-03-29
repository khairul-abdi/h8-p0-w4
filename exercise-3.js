function cariMedian(arr) {
    var done = false
    while(!done){
        done = true
        
        for(var i = 0; i<arr.length; i++){
            if(arr[i-1] > arr[i]){

                done = false
    
                var temp = arr[i-1]
                arr[i-1] = arr[i]
                arr[i] = temp
            }
        }
    }

    var median = 0;
    if(arr.length % 2 == 1){
        // median = arr[Math.floor(arr.length/2)]
        median = arr[(arr.length-1)/2]
    }else if(arr.length % 2 == 0){
        // median = (arr[Math.floor(arr.length/2)] + arr[Math.floor(arr.length/2) -1]) /2
        median = ((arr[arr.length/2]) +(arr[(arr.length/2)-1]) ) / 2
    }

return median

  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5