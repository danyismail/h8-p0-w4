function hitungHuruf(kata) {
  arrJumlahsama = [];
  var pecahan = kata.split(" ");
  for (let i = 0; i < pecahan.length; i++) {
    var count = 0;
    for (let j = 0; j < pecahan[i].length; j++) {
      var karakterawal = pecahan[i][j];
      for (let k = 0; k < pecahan[i].length; k++) {
        if (karakterawal === pecahan[i][k] && j !== k) {
          count++;
        }
      }
    }
    arrJumlahsama.push(count / 2);
  }
  var ambildepan = arrJumlahsama[0];
  var indeks = 0;
  for (let i = 0; i < arrJumlahsama.length; i++) {
    if (arrJumlahsama[i] > ambildepan) {
      ambildepan = arrJumlahsama[i];
      indeks = i;
    }
  }
  return pecahan[indeks];
}
//5,2,8,9
// TEST CASES
console.log(hitungHuruf("Today, is the greatest day ever")); // greatest
console.log(hitungHuruf("I am a passionate developer")); // passionate
console.log(hitungHuruf("aku adalah anak gembala")); // adalah
console.log(hitungHuruf("rajin pangkal kaya")); // pangkal
console.log(hitungHuruf("mengayuh perahu di danau")); // danau
