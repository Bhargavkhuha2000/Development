/*Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]*/


const calcAverageHumanAge = function(ages){
  const humanAge = ages.map(age=>(age<=2 ? age*2 : 16 + (age * 4)));
  console.log(humanAge)
  const adult = humanAge.filter(age=>(age>=18));
  console.log(adult);
  const avg = adult.reduce((first,second)=>first+second)/adult.length;
  console.log(avg);
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
//console.log(avg1);






/*const checkDogs = function(dogsJulia , dogsKate){
  const juliasDog = dogsJulia.slice();
  juliasDog.splice(0,1);
  juliasDog.splice(-2);
  console.log(juliasDog);
  const corrected = juliasDog.concat(dogsKate);
  console.log(corrected);
  corrected.forEach(function(dog , i){
    if(dog >=3)
      console.log(`Dog Number ${i+1} is an adult, and is ${dog} Years old`);
    else
      console.log(`Dog Number ${i+1} is still a puppy`);
  })
  let humanAge=[];
  const calcAverageHumanAge =function(age){
    for(const ages of age)  {
    if(ages<=2){
        humanAge.push(2*ages);
      } else if(ages>2){
        humanAge.push(16+(ages*4));
      }
    }
    console.log(humanAge);
    let adults =[];
    let notAdult = [];
    for(const adult of humanAge){
      if(adult<=18)
        notAdult.push(adult);
      else if(adult>18)
        adults.push(adult)
    }
    console.log(`adults dogs Age is :  ${adults}`);
    const sum = humanAge.reduce(function(first ,second){
      return first+second;
    });
    console.log(`Human avg is  ${sum/humanAge.length}`);
  };
    calcAverageHumanAge(corrected);
  };

checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);*/
