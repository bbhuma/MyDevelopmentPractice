'use strict';

const temp = [12, 15, 24, 25, 'string'];

const printForecast = function (arr) {
  let string = '...';
  for (let i = 0; i < arr.length; i++) {
    // if (typeof arr[i] !== 'number') continue; If Value is not a number continue
    // if (!Number.isInteger(arr[i])) continue; If Value is not an Integer, you continue
    if (isNaN(arr[i])) continue; //If Value is Not a Number, you continue
    else string += ` ${arr[i]}C in ${i+1} days ...`;
  }
  return string;
};

console.log(printForecast(temp));
