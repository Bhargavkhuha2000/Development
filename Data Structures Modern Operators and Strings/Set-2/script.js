/*Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };


for(const [i ,player] of game.scored.entries()) {
  console.log(`Goal ${i+1} : ${player}`);
}
const odds = Object.values(game.odds);
let avg=0;
for(const odd of odds) avg+=odd;
avg/=odds.length;
console.log(avg);

for(const [team,odd] of Object.entries(game.odds)){
  const teamStr = team==='x'?'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}

// const [player1 , player2] = game.players;
// console.log(player1 , player2);

// const [gk,...fieldPlayers] = player1;
// console.log(gk , fieldPlayers);

// const allPlayers = [...player1,...player2];
// console.log(allPlayers);

// const players1Final = [...player1,'Thiago', 'Coutinho' , 'Perisic'];
// console.log(players1Final)

// const {odds:{team1 , x:drow,team2}} = game;
// console.log(team1,drow,team2);

// const printGoals = function(...players){
//   console.log(`${players.length} goals were scored`);
//   console.log(`that name is ${players}`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
// printGoals('Davies', 'Muller');