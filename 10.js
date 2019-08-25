/*
1. Buat perulangan 
1. Buat objek kosong
2. Isi objek dengan nilai 'FirsName', 'lastName', 'gender', 'age'
3. Buat kondisi untuk mengecek 'age'
4. Jika indeks ke 3 mempunyai nilai 'tahun' maka kalkulasikan dengan tahun sekarang
5. Jika indeks ke 3 tidak mempunyai nilai 'tahun' maka tampilkan 'Invalid Birth Year'
*/ 




function changeMe(arr) {

    if(arr.length == 0){
        console.log('""')
    }else{
        for(var i = 0; i < arr.length; i++){

            if(!arr[i][3]){
                age = 'Invalid Birth Year'
            }else{
                age = 2019 - arr[i][3]
            }

            console.log((i+1)+'. '+ arr[i][0] + arr[i][1]);
            var obj = {
                firstName: arr[i][0],
                lastName: arr[i][1],
                gender: arr[i][2],
                age: age
            }

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