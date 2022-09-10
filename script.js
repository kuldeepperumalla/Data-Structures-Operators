'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
        console.log(
            `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function( ing1, ing2, ing3){
        console.log(`Here is yoyur delicious pasta with ${ing1}, ${ing2}, and ${ing3}, `);
    },
    
    orderPizza: function(firstIng, ...restIng){
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

// Logical OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'
console.log(rest1);
console.log(rest2);
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
