function changeMe(arr) {
 
    const results = [];
    
    for (let i = 0; i < arr.length; i++) {
        
        let obj = {};
        
        obj['firstName'] = arr[i][0];
        obj['lastName']  = arr[i][1];
        obj['age']       = arr[i][2];

        if(typeof arr[i][3] == 'number') {
        
            obj['age'] = arr[i][3];
        } else {
        
            obj['age'] = 'Invalid Birth Year';
        };

        results.push(obj)
    };

    console.log(JSON.stringify(results, null, 2));
}

  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }array
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  //   changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 

//   changeMe([]); // ""


  /*
  for(var i = 0; i < arr.length; i++){


        if(arr[i][3] === undefined){
            umur = 'Invalid Birth Year'
        }else{
            var umur = 2019 - arr[i][3]
        }

        var obj = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            // age: arr[i][3]
            age: umur
        }


        console.log((i+1) +'. ' + arr[i][0] + ' '+ arr[i][1] + ':' )
        console.log(obj)
    
    
   
    }

    if(arr.length == 0){
        console.log('""')
    }
  */