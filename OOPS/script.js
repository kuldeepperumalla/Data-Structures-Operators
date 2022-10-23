"use strict";

// Creating constructor function for  person
// a constructor function starts with a capital letter

// ES5
// class Person {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// ES6
/* const Person = function(firstName, birthYear){
    this.fName = firstName;
    this.bYear  = birthYear;
}
 */
/* // calling the constructor using the "new operator"
const account1 = new Person('kuldeep', 1997);
const account2 = new Person("kuldeep2", 1995);
const account3 = new Person("kuldeep3", 1993);

console.log(account1,account2,account3, Person);

// 1. a New {} Object is create
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. funciton automatically return {}
console.log(Person.prototype);
// Prototype
Person.prototype.calcAge = function(){
   console.log(2037-this.birthYear);
}

account1.calcAge();
account2.calcAge();
account3.calcAge();

class Ideas {
    constructor(one,two){
        this.one=one;
        this.two=two;
    }
}

const idea = new Ideas("take hit", "give shit");
const idea2 = new Ideas("take two hit", "give one shit");
console.log(idea, idea2);

Ideas.prototype.alterIdea = function(){
    console.log(`${this.one} is a bullshit`);
}

idea.alterIdea();
console.log(typeof(Array.prototype)); 

// .prototyeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens';
console.log(account1.species, account2.species);
console.log(account1.hasOwnProperty('firstName'));
console.log(account1.hasOwnProperty('species'));
///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(account1.__proto__);
// Object.prototype (top of prototype chain)
console.log(account1.__proto__.__proto__);
console.log(account1.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);
const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector('h1');
console.dir(x => x + 1); */


///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
///////////////////////////////////////
// ES6 Classes
// Class expression
// const PersonCl = class {}
// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();
///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

 */

// Object.create()
