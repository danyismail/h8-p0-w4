function totalDigitRekursif(angka) {
  // you can only write your code here!
  var rubahString = angka.toString();
  if (rubahString.length === 0) {
    return 0;
  } else {
    var digit = parseInt(rubahString[0]);
    var modified = rubahString.substring(1);
    return digit + totalDigitRekursif(modified);
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
