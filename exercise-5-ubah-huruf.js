function ubahHuruf(kata) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var tmp = ''
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < kamus.length; j++) {
            if(kamus[j] === kata[i]){
                tmp += kamus[j+1]
            }
        }
    }
    return tmp  
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu