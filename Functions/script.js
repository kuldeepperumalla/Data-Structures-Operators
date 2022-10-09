'use strict'

/* const bookings = []

const createBookings = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
    // ES5
    // numPassengers = numPassengers || 1,
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBookings('LH123');
createBookings('LH123',2,800);
createBookings('LH123',2);
createBookings('LH123',5);
createBookings('LH123',undefined,1000);

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 24739479284) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas); */

/* // call back functions
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' -');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('hello I\'m kuldeep', upperFirstWord);
transformer('hello I\'m kuldeep', oneWord);

const high5 =  function() {
    console.log('✋');
}
document.body.addEventListener('click', high5);

['a','b','c'].forEach(high5) */
/* 
const greet = function (greeting){
  return function (name) {
    console.log(`${greeting} ${name}`)
  }
}

const greetingHey = greet('Hey');
greetingHey('kuldeep');
greetingHey('perumalla');
greet('Hello')('Jonas');

//Challenge
const greetArr = greeting => name => console.log(`${grerting} ${name}`);

greetArr('Hi')('kuldeep') */

/* const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} Booked a seat on ${this.airline} flight ${this.iataCode}  ${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  },
};

// lufthansa.book(239, 'Kuldeep Perumalla');
// lufthansa.book(293, 'kp');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;
// Does not work
// book(12, 'k');

book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings);
book.call(lufthansa, 23, 'toarah Williams')
console.log(lufthansa);
book.call(swiss, 23, 'Boarah Williams')
console.log(swiss);

// Apply method
const flightData = [234, 'George Cooper'];
book.apply(swiss, flightData)
console.log(swiss);
// ES6 call method
book.call(swiss, ...flightData)


// Bind method
// book.call
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

const bookEW23 = book.bind(eurowings, 23);
 bookEW23('kp')
 bookEW23('ll')

//  with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))
console.log(lufthansa);

const AfteraddTAX = (rate, value) =>  value-((value+value*rate)-value);
const addVAT = AfteraddTAX.bind(null, 0.13);
console.log(addVAT(1212));

// Without using Bind Method
const addTax = function(rate){
  return function(value){
    return value+value*rate;
  };
};

const addVat2 = addTax(0.13);
console.log(addVat2(1212));
console.log(addVat2(100)); */

// Challenge
/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

/* const poll = {
  question: "what is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write a option Number)`));
        console.log(answer);
        // answer array 
        typeof answer === "number" && answer < this.answers.length && this.answers[answer]++; 
          this.displayResults();
          this.displayResults('string')
        },

  displayResults(type = 'array'){
    if(type === 'array'){
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`poll results are ${this.answers.join(', ')}`);
    }
  }
};

// DOM
document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5,2,3]}, 'string') */

// Normal Function
const runOnce = function(){
  console.log("this is a normal function");
}
runOnce();
// Immediate Invoked function expresstion -> IIFE
(function (){ 
  console.log("This is Immediately Invoked Function");
})();
// IIFE arrow function
 (() => console.log("this is IIF arrow function"))();
//  IIFs are not global scoped. any variable decalred inside of the function cannot be accessed out side of the funciton