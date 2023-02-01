//Dolphins and Koalas
let DolphinsScore = 85 + 54 + 41;
let KoalasScore = 23 + 34 + 27;
let Dolphinsavg;
let Koalasavg;
const calcAverage = (avgs) => {
  return avgs / 3;
};

function avg(avgDolphins, avgKoalas) {
  Dolphinsavg = calcAverage(avgDolphins);
  Koalasavg = calcAverage(avgKoalas);
}

avg(DolphinsScore, KoalasScore);

if (Dolphinsavg > Koalasavg * 2) {
  console.log("Dolphins is win ");
} else if (Koalasavg > Dolphinsavg * 2) {
  console.log("Koalas is win");
} else {
  console.log("No one is win the match");
}
