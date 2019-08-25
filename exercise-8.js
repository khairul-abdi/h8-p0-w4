function tukarBesarKecil(kalimat) {

    var tukarBesarKecil = ''
    for(var i = 0; i < kalimat.length; i++){
        if(kalimat[i] === kalimat[i].toUpperCase()){
            tukarBesarKecil += kalimat[i].toLowerCase()
        }else{
            tukarBesarKecil += kalimat[i].toUpperCase()
        }
    }
 
    return tukarBesarKecil
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"