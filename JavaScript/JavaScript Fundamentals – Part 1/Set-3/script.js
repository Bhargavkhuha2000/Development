//Dolphins and Koalas
let Dolphins_1_TimeScore = Number(prompt(" Enter Dolphins 1 Time Score"));
let Dolphins_2_TimeScore = Number(prompt(" Enter Dolphins 2 Time Score"));
let Dolphins_3_TimeScore = Number(prompt(" Enter Dolphins 3 Time Score"));

let koalas_1_TimeScore = Number(prompt(" Enter koalas 1 Time Score"));
let koalas_2_TimeScore = Number(prompt(" Enter koalas 2 Time Score"));
let koalas_3_TimeScore = Number(prompt(" Enter koalas 3 Time Score"));

let Dolphins_avg =
  (Dolphins_1_TimeScore + Dolphins_2_TimeScore + Dolphins_3_TimeScore) / 3;
let koalas_avg =
  (koalas_1_TimeScore + koalas_2_TimeScore + koalas_3_TimeScore) / 3;

if (Dolphins_avg > koalas_avg) {
  console.log("Dolphins is winner");
} else if (koalas_avg === Dolphins_avg) {
  console.log("match is draw");
} else {
  console.log("koalas is winner");
}

console.log("Bonus - 1 \n");
if (Dolphins_avg > koalas_avg && Dolphins_avg >= 100) 
{
  console.log("Dolphins is winner");
}
else if (koalas_avg === Dolphins_avg && Dolphins_avg >= 100 && koalas_avg >= 100)
{
  console.log("match is draw");
}
else if (koalas_avg > Dolphins_avg && koalas_avg >= 100) 
{
  console.log("koalas is winner");
}
else
{
  console.log("no one is win the trophy");
}
