billValue = 400;
// usualTip = billValue * 0.15;
// specialTip = billValue * 0.2;

// FINALLY TERNARY OPERATOR RETURN A VALUE ie STRING.
tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(
  `The bill was ${billValue}, the tip was ${tip}, and the total value  ${
    billValue + tip
  }`
);

// billValue >= 50 && billValue <= 300
//   ? console.log(`The bill was ${billValue}, the tip was ${usualTip}, and the total value
//   ${billValue + usualTip}`)
//   : console.log(`The bill was ${billValue}, the tip was ${specialTip}, and the total value
//   ${billValue + specialTip}`);
