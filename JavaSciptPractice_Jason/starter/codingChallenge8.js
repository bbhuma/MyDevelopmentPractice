'use strict';

const bill = [12, 15, 24, 14, 22, 34, 56, 55, 76, 87];
const tip = [];
const total = [];
// const sum = 0; This is the mistake, this variable keeps changing in the loops, so it should not be a const variable, instead should be a let, and it can be a local variable.
const calcTips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

//Operations with array is  always start with 0 and end at length-1, i missed this logic and wasted a lot time.
//Loopover Bill array and calculate Tips and totals for each bill and add them to their resp arrays.
for (let i = 0; i < bill.length; i++) {
  const tip1 = calcTips(bill[i]); //This is a const variable because this is created as a new variable in each iteration, and is const in a iteration.
  tip.push(tip1);
  // tip.push(calcTips(bill[i]));
  total.push(bill[i] + tip[i]); //Make sure you are not calculating the tip again, dont repeat if that is the case, use a variabl eor function to cal tip, and assign and reuse it.
}

//generic function, takes an array and calc avg of elements
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //The program will fail, if this variable type is const instea of let, Very important observation.
    sum += arr[i];
  }
  return sum / arr.length;
};

const billavg = calcAverage(bill);
const tipavg = calcAverage(tip);
const totalavg = calcAverage(total);
//you can log arrays onto console like this
console.log(bill, tip, total);
console.log(billavg, tipavg, totalavg);
