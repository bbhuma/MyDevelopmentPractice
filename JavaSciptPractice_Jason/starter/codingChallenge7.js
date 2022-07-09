"use strict";

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 292,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
// console.log(mark[bmi], john[bmi]);  Writing the console.log here will give undefined, because the method does not call by itslef.Method needs to be called atleast once before calling "bmi"

const higherBMI = (mark, john) => (mark > john ? true : false);
const ismarkBMIHigher = higherBMI(mark.calcBMI(), john.calcBMI()); //Just a variable
console.log(mark.bmi, john.bmi); //New added varibale does not show on the hovering on the Object but still has the "bmi" property and value and can be access from the dot method and Bracket method.

if (ismarkBMIHigher) {
  console.log(
    `"${mark.firstName}'s BMI is (${mark.bmi}) higher than ${john.firstName}'s(${john.bmi})!" `
  );
} else
  console.log(
    `"${john.firstName}'s BMI is (${john.bmi}) higher than ${mark.firstName}'s(${mark.bmi})!" `
  );
