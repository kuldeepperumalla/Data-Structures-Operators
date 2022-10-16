'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function(movement, sort = false){
  containerMovements.innerHTML = '';

  const movs = sort? movements.sort((a,b) => a-b) : movement

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = 
    `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
          i + 1
        } ${type}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
     containerMovements.insertAdjacentHTML("afterbegin", html);
  })
};

const calcDisplayBalance = function(acc){
    acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `${acc.balance} €`;
}


const calcDisplaySummary = function(acc){
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.innerHTML = `${income} &euro;`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .map((mov) => mov)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.innerHTML = `${Math.abs(out)} &euro;`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposits) => (deposits * 1.2) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
    labelSumInterest.innerHTML = `${Math.abs(interest)} &euro;`;
}

const createUserNames = function (accounts) {
  accounts.forEach(function (value) {
    value.username = value.owner
      .toLowerCase()
      .split(" ")
      .map((e) => e[0])
      .join("");
    });
  };
createUserNames(accounts);
// console.log(accounts);

// update UI
const updateUI = function (acc) {
  // Display movements
  displayMovement(acc.movements);

  // Display balance
  calcDisplayBalance(currentAccount);

  // Display summary
  calcDisplaySummary(currentAccount);
};
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
  
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }else{
        containerApp.style.opacity = 100;

    document.querySelector("main").textContent =
      "user doesnt exist please try again!";
          inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
  }
});

//  Transfering the amount
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value)
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  // console.log(receiveAcc, amount);

  if(
    amount > 0 && currentAccount.balance >= amount && receiveAcc?.username !== currentAccount.username
  ){
currentAccount.movements.push(-amount);
receiveAcc.movements.push(amount);
// update UI
updateUI(currentAccount)
  }
})
// Request Loan
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});
// Closing the account
btnClose.addEventListener('click', function(e){
  e.preventDefault();
  if(
    inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin
    ){
      const index = accounts.findIndex(acc => acc.username === currentAccount.username);
      console.log(index);
      // Delete Account
      accounts.splice(index, 1);
      // Hide UI
      containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function(e){
  e.preventDefault();

  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* // Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);
// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
// JOIN
console.log(letters.join(' - '));
const arr = [23,11,64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
*/

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(const [i,movement] of movements.entries()){
  if(movement>0){
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  }else{
    console.log(`Movement ${i + 1}: you withdraw ${Math.abs(movement)}`);
  }
}
console.log(`--FOREACH--`);
movements.forEach(function(movement, index, array){
   if(movement>0){
    console.log(`Movement ${index + 1}: you deposited ${movement}`);
  }else{
    console.log(`Movement ${index + 1}: you withdraw ${Math.abs(movement)}`);
  }
}); */
// map

/* const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach((value,key, map) => console.log(`${key}: ${value}`))

// set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => console.log(`${value}: ${value}`)); */
// Challange  #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// The map Method
const eurToUsd = 1.1;
 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
// console.log(movementsDescriptions);

///////////////////////////////////////
// The filter Method
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
// console.log(movements);
// console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

///////////////////////////////////////
// The reduce Method
// console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
// console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// console.log(max);



// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
-
GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(Dogage=>Dogage<=2? 2 * Dogage : 16 + Dogage * 4);
  const adults = humanAges.filter((ages) => ages >= 18);
  const average = adults.reduce((acc, cur,index, arr)=>acc+cur/arr.length, 0)
  // console.log(adults);
  // console.log(humanAges);
  return average
};
const avg = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg, avg2);
 
// The Magic of Chaining Methods
// PIPELINE
// console.log(movements);
const totalDepositsUSD = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    // console.log(arr,i);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


const calcAverageHumanAge2 = (ages) =>
  ages
    .map((Dogage) => (Dogage <= 2 ? 2 * Dogage : 16 + Dogage * 4))
    .filter((ages) => ages >= 18)
    .reduce((acc, cur, index, arr) => acc + cur / arr.length, 0);
  // console.log(adults);
  // console.log(humanAges);

const avg3 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avg4 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg3, avg4);
const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(firstWithdrawal);
// console.log(accounts);
// console.log(movements);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

for(const acc of accounts){
  // acc.owner === "Jessica Davis" ? console.log(acc) : console.log();;
}

// equality
// console.log(movements.includes(-130))
// Some;
// console.log(movements.some(mov => mov === -130));
// const anyDeposites = movements.some(any => any >0); console.log(anyDeposites);
// EVERY
/* console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); */

/* var containsDuplicate = function (nums) {
  nums.sort(compare);

  function compare(a,b){
    return a-b;
  }
  console.log(nums);

  let counter = 0;
  for (let e = 1; e < nums.length; e++) {
    if (nums[e] == nums[e - 1]) {
      counter++;
    }

  }

  return counter != 0;
};

const ans =containsDuplicate([1,2,22,33,11,3,5]);
console.log(ans); */

///////////////////////////////////////
// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

///////////////////////////////////////
// Sorting Arrays

// Strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];
// console.log(owners);
// console.log(owners.sort());

// Numbers
// console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
const ascending = movements.sort((a, b) =>  a-b);
// console.log("ascending",movements);

// Decending
const descending = movements.sort((a, b) => b - a);
// console.log("descending",movements);

const z = Array.from({length:100}, (_, i) => i = Math.random(1,2));
// console.log(z);