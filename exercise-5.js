function ubahHuruf(kata) {
    var huruf = 'abcdefghijklmnopqrstuvwxyz'

    var hasil = ''
    for(var j = 0; j < kata.length; j++){
        for(var i = 0; i < huruf.length; i++){
            if(kata[j] == huruf[huruf.length-1]){
                hasil += huruf[0]
                break
            } else if(kata[j] == huruf[i]){
                hasil +=  huruf[i+1]
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
  console.log(ubahHuruf('wez')); // xfa
