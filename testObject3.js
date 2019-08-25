var exercise1 = [
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
]


// 2. mensorting array of object berdasarkan value dari objectnya
  
  // Release 1 => sorting isi ascending berdasarkan score
  /* 
    [ 
      { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
      { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
      { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100}
    ]
  */


  function data(siswa){

    var result = []

    var ascending = 0
    for(var i = 0; i < siswa.length; i++){
        // if(siswa[i].score > ascending){
        //     // siswa[i].score = ascending
        //     ascending = siswa[i]
        //     result.push(siswa[i])
        // }else{
        //     result.push(siswa[i])
        // }

        // siswa.sort(siswa[i].score)
    }
    // console.log(siswa)
    // return result

    
   
    siswa.sort(function(a, b){
        return a.score - b.score
    })
    // employees.sort(function(a, b){
    //     return a.age-b.age
    // })

    console.log(siswa)
  }

  console.log(data(exercise1))


