function countProfit(shoppers) {
  let listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1]
  ];
//1. inisialisasi
  var result = [];
  for (let i = 0; i < listBarang.length; i++) {
    var obj = {
      product: listBarang[i][0],
      shoppers: [],
      leftOver: 0,
      totalProfit: 0
    };
    result.push(obj);
  }
 console.log(result)
  //2. bandingkan
  for(var i=0;i<shoppers.length;i++){
    var namaPembeli=shoppers[i].name
    var namaBarang=shoppers[i].product
    var amount=shoppers[i].amount
    for(var j=0;j<listBarang.length;j++){
        var merek=listBarang[j][0]
        var harga=listBarang[j][1]
        var stock=listBarang[j][2]
        var sisa=0;
        if(namaBarang===merek && amount<=stock){
            sisa=stock-amount
            listBarang[j][2]=sisa
            var profit=amount*harga;
            for(var k=0;k<result.length;k++){
                if(result[k].product===namaBarang){
                       result[k]['shoppers'].push(namaPembeli);
                       result[k]['leftOver']=sisa
                       result[k]['totalProfit']=result[k]['totalProfit']+profit
                }
            }

        }
    }
    
  }
  return result
    
  
  


  //end of function
}

// TEST CASES
console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 }
  ])
);
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

// console.log(
//   countProfit([
//     { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
//     { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
//     { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
//     { name: "Devi", product: "Baju Zoro", amount: 1 },
//     { name: "Lisa", product: "Baju Zoro", amount: 1 }
//   ])
// );
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
// console.log(
//   countProfit([{ name: "Windi", product: "Sepatu Naiki", amount: 5 }])
// );
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
// console.log(countProfit([]));
