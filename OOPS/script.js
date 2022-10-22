"use strict";

// Creating constructor function for  person
// a constructor function starts with a capital letter

// ES5
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

// ES6
/* const Person = function(firstName, birthYear){
    this.fName = firstName;
    this.bYear  = birthYear;
}
 */
// calling the constructor using the "new operator"
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
