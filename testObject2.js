var exercise1 = [
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]


function data(siswa){

    var result = []

    for(var i = 0; i < siswa.length; i++){
        if(siswa[i].score > 70 && siswa[i].score < 90){
            result.push(siswa[i])
        }
    }

    return result
}

console.log(data(exercise1))
  
// Release 2 => coba ambil nama-nama yang nilainya diantara 70 dan 90
  /* 
    [ 
      { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
    ]
  */  
  