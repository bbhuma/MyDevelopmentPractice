"use strict";
//Avg method declaration
const calcAverageOfThreeNumbers = (a, b, c) => (a + b + c) / 3; // It is generic function of three numbers, not just for scores.

//console.log(calcAverageOfThreeNumbers(3, 4, 5)); Test it with console.log

// const calcAverage = function (score1, score2, score3) {
//   const avg = (score1 + score2 + score3) / 3;
//   return avg;
// };

//Winner method declaration
const calcWinner = function (avgOfDolphins, avgOfKoalas) {
  //const winner = avgOfDolphins >= 2 * avgOfKoalas ? "Dolphins" : "Koalas";
  console.log(avgOfDolphins, avgOfKoalas); //Very important to see the console.log messages, to see whther your program is giving corret output or not.
  if (avgOfDolphins >= 2 * avgOfKoalas) {
    console.log(
      `The Dolphins team is the winner today (${avgOfDolphins} vs ${avgOfKoalas})💕`
    );
  } else if (avgOfKoalas >= 2 * avgOfDolphins) {
    console.log(
      `The Koalas team is the winner today (${avgOfKoalas} vs ${avgOfDolphins})💕`
    );
  } else console.log(`The None of the team wins today💕`);
};

//Avg method call for TEST DATA 1
let avgOfDolphinsTeam = calcAverageOfThreeNumbers(44, 23, 71); //Simple avgOfDolphins is already declared and can not be reused, it is declared in the other Challenges.Use of strict mode helps me with this.
let avgOfKoalasTeam = calcAverageOfThreeNumbers(65, 34, 27);

//Call the CalcWinner to t=see the winner today.
calcWinner(avgOfDolphinsTeam, avgOfKoalasTeam);

//TEST DATA 2
avgOfDolphinsTeam = calcAverageOfThreeNumbers(85, 54, 41);
avgOfKoalasTeam = calcAverageOfThreeNumbers(23, 34, 27);
calcWinner(avgOfDolphinsTeam, avgOfKoalasTeam);
