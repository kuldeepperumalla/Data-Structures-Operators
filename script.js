'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

const rest1 =  {
    name: 'Capri',
    numGuests: 0
}  

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};

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
