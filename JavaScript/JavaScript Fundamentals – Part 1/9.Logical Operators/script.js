/*Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.*/

const country = "india";
const language = "hindi";
const population = 123;
const island = false;

if (language === "engish" && population < 50 && !island) {
  console.log("You should live in " + country);
} else {
  console.log(country + " does not meet your criteria ");
}
