'use strict';

// Data needed for first part of the section
const weekdays = ['mon','tue','wed','thu','fri','sat','sun'];
const openingHours = {
        [weekdays[3]]: {
            open: 12,
            close: 22,
        },
        [weekdays[4]]: {
            open: 11,
            close: 23,
        },
        [weekdays[5]]: {
            open: 0, // Open 24 hours
            close: 24,
        },
    };

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
        console.log(
            `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta( ing1, ing2, ing3){
        console.log(`Here is yoyur delicious pasta with ${ing1}, ${ing2}, and ${ing3}, `);
    },
    
    orderPizza(firstIng, ...restIng){
        console.log(firstIng);
        console.log(restIng);
    }
};



///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});


/*
///////////////////////////////////////
// Working With Strings - Part 2
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));
// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);


/*
// Working With Strings - Part 2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);
// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));
// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}
// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/////////////////////

/*

const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);
console.log(airline.length);
console.log("B737".length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
console.log(new String("kuldeep"));
console.log(typeof new String("kuldeep").slice(1));
console.log(typeof new String("kuldeep"));

*/

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = new Set(gameEvents.values())
console.log(events);

//2
console.log(gameEvents.delete(64));

//3
console.log([...gameEvents.keys()].pop());

//4
for(const [min, event] of gameEvents){
    const half = min <= 45? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${min} ${event}`);
}
*/
/** 
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));
// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
 */

/*
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
*/

/**
const rest1 =  {
    name: 'Capri',
    numGuests: 0
}  

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};

const orderSet = new Set([
    'pasta',
    'pizza',
    'pizza',
    'risotto',
    'pasta',
    'pizza',
])
console.log(new Set ("kuldeepppp").has('k'));
console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread'));
orderSet.add('Garlic Bread');
orderSet.delete('risotto');
// orderSet.clear()
console.log(orderSet);

for(const order of orderSet){
console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('jonasschmedtmann').size);

 */
/* 
Challenge 2
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

/**
const game = {
  team1: "Bayern Munosh",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martiniz",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

[1]// 1
for(const [items, el] of game.scored?.entries()) console.log(`Goal ${items+1}, by ${el}`);

[2];
//2
const odds = Object.values(game.odds)
let avg = 0; 
for(const odd of odds) {
    avg += odd;
    avg /= odds.length
}
console.log(avg);

[3];
// 3.
for(const [team, odds] of Object.entries(game.odds)){
    const teamstr = team === "x" ? "draw" : `victory ${game[team]}`;
    console.log(`Odd of ${teamstr}: ${odds}`);
}

[4];
//4 bonus
const scorers = {};
for(const el of game.scored) scorers[el]? scorers[el]++ : scorers[el]=1;
console.table(scorers);
 */

/**
 * 
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open ${properties.length} days:`;

for (const day of properties) {
    openStr += `${day}`;
}
console.log(openStr);
// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
 */

/**
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// With Optional chaining
console.log(restaurant.openingHours.mon?.open); //undefined
console.log(restaurant.openingHours?.mon?.open); //undefined

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
const open = restaurant.openingHours[day]?.open ?? 'closed';
console.log(`On ${day}, we are open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0,1)?? 'Method does not exist');
console.log(restaurant.orderRessotto?.(0,1)?? 'Method does not exist');

// Arrays
const users = [
    {name: 'Kuldeep', email: 'hell0@kuldeep.com'}
]

console.log(users[0]?.name ?? 'user array empty');

if(users.length > 0) console.log(users[0]?.name);
else console.log('user array empty');
*/

/*
//looping through arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];;

for(const item of menu) console.log(item);

for (const [i,el] of menu.entries()){
    console.log(`${i}: ${el}`);
}
*/

// CHallenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀

const game = {
  team1: "Bayern Munosh",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martiniz",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/

/*
[1] 
//1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;// array destructuring
console.log("1", players1,players2 ); //players1 has game.players[0] and players2 has game.players[1];
[2]; 
//2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log("2",gk, fieldPlayers);
[3]; 
//3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2]
console.log(allPlayers);
[4]; 
//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1,'Thiago', 'Coutinho','Perisic' ];
console.log(players1Final);
[5]; 
//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {odds: {team1,x: draw,team2}} = game;
console.log(team1, draw, team2);
[6];
//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function(...players){
    for(let i=0; i<players.length; i++){
            console.log(`${players[i]} scored 1 goal`);
    }
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

[7];
//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log("team1 is more likely to win");
team1 > team2 && console.log("team2 is more likely to win");
// Challenge compleated
*/

// Logical OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'
// console.log(rest1);
// console.log(rest2);
/*
// Destructuring arrays

// Spread pattern because it is on the right hand side
const arr = [1,2, ...[3,4,5]]
// REST pattern  because it is on the left side of the assignment
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b,others);
// another example of REST pattern 
const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// Destructuring Objects

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// using spread in Functions
const add = function(...numbers){
    let summ = 0;
    for(let i = 0; i<numbers.length; i++){
        summ += numbers[i]
    }
    console.log(summ);
}

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [22,23,24];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('musroom');

// Sortcircuting for OR operator ||
console.log('K' || 2);
console.log('' || 'K');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || false || 'G' || 23 || null);
console.log('2' || true);

restaurant.numGuests = 23;
// Nullish coalescing
const guest1 = restaurant.numGuests ?? 10;

const guest2 = restaurant.numGuests || 12;
console.log(guest1); 

AND operator

console.log(0 && 'k');
console.log('hello' && 34 && null);

if(restaurant.orderPizza){
    restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
*/

/*

//Spread Operator
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

const goodNewArray = [1, 2, ...arr];
console.log(`array without spread operator -> ${badNewArray}`);
console.log(`array with spread operator -> ${goodNewArray}`);
console.log(...goodNewArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);
const mainMenucopy = [restaurant.mainMenu];
console.log(mainMenucopy);
const menu = [...restaurant.mainMenu, restaurant.starterMenu]
console.log(menu);
//Iterables are arrays, strings, maps, sets. Not objects
const num = '1234567';
const individual_numbers = [...num,"",8]
console.log(individual_numbers);
// console.log(`${...num},multiple values seperated does not work here `);

//realworld example
// const ingredients = [
//   prompt("Let's make pasta! Ingredien1"),
//   prompt("Let's make pasta! Ingredien2"),
//   prompt("Let's make pasta! Ingredien3"),
// ];
// console.log(ingredients);
// retaurant.orderPasta(...ingredients);

//objects
const newRestaurants = { foundedIn: 1998, ...restaurant, founder: 'Guiseepe'}
console.log(newRestaurants);
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'ritorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/


/*
//Destructuring objects
restaurant.orderDelivery({
    time: "22:30",
    address: 'Vie del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: 'Vie del Sole, 21',
    starterIndex: 1,
});

console.log(restaurant.order(1, 2));

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurants, openingHours: Hours, categories: tags } = restaurant
console.log(restaurants, Hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
const {
    fri: { open: o, close: c }
} = openingHours;
console.log(o, c);
*/

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);
const [starter, mainCourse] = restaurant.order(2, 0)

console.log(starter, mainCourse);

// nested array;

const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8,];
console.log(p, q, r)
*/
