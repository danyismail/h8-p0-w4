function shoppingTime(memberId, money) {
  var information = {
    memberId: undefined,
    money: undefined,
    listPurchased: [],
    changeMoney: 0
  };


  information.memberId = memberId;
  information.money = money

  if (
    information.memberId === "" ||
    (information.memberId === undefined && information.money === undefined)
  ) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (information.money < 50000) {
    return "Maaf , uang tidak cukup";
  }

  if (information.money >= 1500000) {
    information.listPurchased.push("Sepatu Stacattu");
    information.changeMoney = information.money - 1500000;
  }
  if (information.money >= 500000) {
    information.listPurchased.push("Baju Zorro");
    information.changeMoney = information.money - 50000;
  }

  if (information.money >= 250000) {
    information.listPurchased.push("Baju H and N");
    information.changeMoney = information.money - 1500000;
  }
  if (information.money >= 175000) {
    information.listPurchased.push("Sweater Uniklooh");
    information.changeMoney = information.money - 175000;
  }

  if (information.money >= 50000) {
    information.listPurchased.push("Casing Handphone");
    information.changeMoney = information.money - 50000;
  }
  return information;
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
// console.log(shoppingTime("82Ku8Ma742", 170000));
// //{ memberId: '82Ku8Ma742',
// // money: 170000,
// // listPurchased:
// //  [ 'Casing Handphone' ],
// // changeMoney: 120000 }
// console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
// console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
// console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
