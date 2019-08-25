function changeMe(arr) {

    var obj = {
        firstName:'',
        lastName: '',
        gender: '',
        age: ''
    }

    var year = 2019
    var age = 0
    
    if(arr.length == 0){
        console.log(' "" ')
    }else{
        
        for(var i = 0; i < arr.length; i++){
            
            console.log((i+1) + '. '+arr[i][0]+' '+arr[i][1] + ' :')
            if(arr[i][3] == undefined){
                age = 'Invalid Birth Year'
            }else if(arr[i][3] != undefined){
                age = year - arr[i][3]
            }
    
            obj.firstName = arr[i][0]
            obj.lastName = arr[i][1]
            obj.gender = arr[i][2]
            obj.age = age
    
            console.log(obj)
        }
    }


    

  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""