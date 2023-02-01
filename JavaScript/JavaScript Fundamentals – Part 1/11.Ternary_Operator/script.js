/*If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!*/

let population = 35;

console.log(
  population > 33
    ? "Portugal's population is above average"
    : "Portugal's population is below average"
);
