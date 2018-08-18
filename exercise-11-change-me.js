function changeMe(arr) {
   var me = {}
   
   if (arr.length === 0) {
     console.log('""')
   }
   for (let i = 0; i <arr.length; i++) {
     
        me.firstName = arr[i][0]
        me.lastName = arr[i][1]
        me.gender = arr[i][2]
       if (arr[i][3] === undefined) {
        me.age = "Invalid Birth Year"
       } else {
        me.age = 2018 - arr[i][3]
       }
       
        
        console.log( i+1 + '.' + ' ' + me.firstName + me.lastName + ' ' + ':',me) 
    }
    

  
}



  
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year'}
  changeMe([]); // ""
