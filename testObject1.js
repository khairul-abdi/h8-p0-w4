var exercise1 = [
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
  
function exercise(score){

    var result = []

    for(var i = 0; i < score.length; i++){
        if(score[i].score > 30){
            result.push(score[i])
        }
    }

    return result

}



console.log(exercise(exercise1))









  // Release 1 => coba ambil nama-nama yang nilainya diatas 30
  /* 
    [ 
      { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
      { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
    ]
  */