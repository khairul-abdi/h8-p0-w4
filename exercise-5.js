function ubahHuruf(kata) {
    var huruf = 'abcdefghijklmnopqrstuvwxyz'

    var hasil = ''
    for(var j = 0; j < kata.length; j++){
        for(var i = 0; i < huruf.length; i++){
            // console.log('Ini Kata J:', kata[j])
            // console.log('Ini Huruf I:', kata[i])
            if(kata[j] == huruf[i]){
                hasil +=  huruf[i+1]
                // console.log(kata[j+1])
                // console.log(hasil)

            }

        }
        
    }
        

    return hasil

  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu