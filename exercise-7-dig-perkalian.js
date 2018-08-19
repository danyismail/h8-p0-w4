function digitPerkalianMinimum(angka) {
    var pasangans =[];
    for(var i=1;i<(angka+1);i++){
      for(var j=1;j<(angka+1);j++){
        if(i * j===angka){
          pasangans.push([i,j]);
        }
      }
    }
    if(pasangans.length !== 1){
      for(var j=0;j<pasangans.length;j++){
        var temp=pasangans[j];
         for(var i=0; i<pasangans.length;i++){
          if(temp[0]===pasangans[i][1] &&  temp[1]===pasangans[i][0]){
            pasangans.splice(i,1)
          }
        }
      }
    }
    var digits=[];
    for(var i=0; i<pasangans.length;i++){
      var count=0;
      for(var j=0;j<pasangans[i].length;j++){
        var isi=pasangans[i][j].toString();
        for(var k=0;k<isi.length;k++){
          count += 1;
        }
      }digits.push(count);
    }
    var min=digits[0];
    for(var i=1;i<digits.length;i++){
      if(digits[i]<min){
        min=digits[i]
      }
    }
  
    return min;
  
  }
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2