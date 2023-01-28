/* Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%. 
The bill was 275, the tip was 41.25, and the total value
316.25”*/

let bill = 275;
let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : bill * 0.2;
let total = bill + tip;

console.log(
  `the bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);
