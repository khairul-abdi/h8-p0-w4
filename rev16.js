function graduates (students) {
    var output = {}

    for(var i = 0; i < students.length; i++){

        if(output[students[i]['class']] === undefined){
            output[students[i].class] = []
            if(students[i].score > 75){
                var student = {
                    name: students[i].name,
                    score: students[i].score
                }
                output[students[i].class].push(student) 
            }
        }else{
            if(students[i].score > 75){
                var student = {
                    name: students[i].name,
                    score: students[i].score
                }
                output[students[i].class].push(student) 
            }
        }
    }

    return output
    
}
                            // {
                            //   foxes: [
                            //     { name: 'Dimitri', score: 90 }
                            //   ],
                            //   wolves: [
                            //     { name: 'Alexei' , score: 85 },
                            //     { name: 'Anastasia', score: 78 }
                            //   ]
                            // }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  




  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
                                // {
                                //   foxes: [
                                //     { name: 'Alexander', score: 100 },
                                //     { name: 'Vladimir', score: 92 }
                                //   ],
                                //   wolves: [
                                //     { name: 'Alisa', score: 76 },
                                //   ],
                                //   tigers: [
                                //     { name: 'Viktor', score: 80 }
                                //   ]
                                // }
                                
  
  console.log(graduates([])); //{}