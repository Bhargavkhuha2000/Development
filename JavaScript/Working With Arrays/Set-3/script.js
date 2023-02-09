/*Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
      as an arrow function, and using chaining!
      Test data:
      § Data 1: [5, 2, 4, 1, 15, 8, 3]
      § Data 2: [16, 6, 10, 5, 6, 1, 4]*/

/*const calcAverageHumanAge = function(ages){
  const humanAge = ages.map(age=>(age<=2 ? age*2 : 16 + (age * 4)));
  console.log(humanAge)
  const adult = humanAge.filter(age=>(age>=18));
  console.log(adult);
  const avg = adult.reduce((first,second)=>first+second)/adult.length;
  console.log(avg);
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);*/

const calcAverageHumanAge = (ages) => {
  const humanAge = ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((first, second, i, arr) => first + second / arr.length, 0);
  console.log(humanAge);
  // const adult = humanAge.filter(age=>(age>=18));
  // console.log(adult);
  // const avg = adult.reduce((first,second)=>first+second)/adult.length;
  // console.log(avg);
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
