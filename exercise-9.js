function checkAB(num) {
//    for(var i = 0; i < num.length; i++){




//        if(num[i] === 'a' && num[i+3] === 'b'){
//             return true
//        }else if(num[i] === 'b' && num[i+3] === 'a'){
//             return false
//        }

//    }


    var check = false
    for(var i = 0; i < num.length; i++){
        if(num[i] === 'a'){
            if(num[i+4] === 'b'){
                return true
            }
        }else if(num[i] === 'b'){
            if(num[i+4] === 'a'){
                return true
            }
        }

        // if(num[i] === 'a' && num[i+4] === 'b'){
        //     check = true
        // }else if(num[i] === 'b' && num[i+4] === 'a'){
        //     check = true    
        // }else{
        //     check = false
        // }
        // for(var j = i; j < num.length; j++){

        // }
    }

    return false


    // for(var i = 0; i < num.length; i++){
    //     if(num[i] === 'a'){
    //         console.log('Nomor'+i+''+num[i])
    //         // break
    //         // check = true
    //     }else if(num[i+4] === 'b'){
    //         console.log('Nomor'+i+''+num[i])
    //         // check = true
    //     }
    // }
    
    
// return check

}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false