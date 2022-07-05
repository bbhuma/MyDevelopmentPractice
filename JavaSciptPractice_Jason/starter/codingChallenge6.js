"use strict";
// const billTip = new Array(125,555,44);

//const calcTip = (a) => (a >= 50 && a <= 300 ? a * 0.15 : a * 0.2); //Function can be placed anywhere, it is just a generic function after-all.

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

//There was nthing wrong in the arrow function I wrote, I made mistake while calling the function().
// const calcTip = function (billTip) {
//   if (billTip >= 50 && billTip <= 300) {
//     billTip *= 0.15;
//   } else billTip * 0.2;
//   return billTip;
// };

console.log(calcTip(20)); //calcTip is a method() in green, and it is not an array
//console.log(calcTip[125]); // This gave me undefined, because it is not array, it is a method, needed to use () instead of []. Debug it using console.log Tells me that method itself is wrong.
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; //Green color of method should match to the green color of the method called everytime
const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]; //[] started and ended in yellow make sure where it ends for syntax errors.
console.log(bills, tips, totalBills);
