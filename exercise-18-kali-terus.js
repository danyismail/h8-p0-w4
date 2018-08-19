function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var rubahString=angka.toString();
    if(rubahString.length===1){
        return parseInt(rubahString)
    }else{
        var result=1;
        for(var i=0;i<rubahString.length;i++){
            result=result * parseInt(rubahString[i]);
        }
        return kaliTerusRekursif(result)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6