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

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} Booked a seat on ${this.airline} flight ${this.iataCode}  ${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  },
};

lufthansa.book(239, 'Kuldeep Perumalla');
lufthansa.book(293, 'kp');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
