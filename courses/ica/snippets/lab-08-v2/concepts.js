// Lab 8 (v2), Part 1: one region per code slide. Runs top to bottom.

// #region printing
const restaurant = "Burger Republic";
let rating = 4.6;
rating = 4.7;                  // let can change

// restaurant = "Pizza Hut";   Error: cannot re-assign const

// { restaurant, rating } is shorthand for
// { restaurant: restaurant, rating: rating }
const place = { restaurant, rating, area: "New Cairo", isOpen: true };

console.log("Restaurant info:", place);
console.log(place.area);       // New Cairo
console.log(`${restaurant} is rated ${rating}`);
console.table(place);
console.error("Restaurant not found");
console.warn("Rating is close to the cutoff");
// #endregion printing

// #region operators
// operators
const price = 180, quantity = 2;
console.log("Total:", price * quantity);           // 360
console.log("Over 300?", price * quantity > 300);  // true
console.log("And:", price > 100 && quantity < 5);  // true

// if / else + ternary
if (quantity % 2 === 0) {
  console.log("Even quantity");
} else {
  console.log("Odd quantity");
}
const delivery = (price * quantity >= 250) ? "Free" : "EGP 25";
console.log("Delivery:", delivery);                // Free
// #endregion operators

// #region loops
// loops
for (let i = 1; i <= 3; i++) {
  console.log("Order:", i);
}

let count = 0;
while (count < 3) {
  console.log("While:", count);
  count++;
  if (count === 2) break;
}
// #endregion loops

// #region functions
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Mariam"));

// The same function, written as an arrow function
const greetArrow = (name) => `Hello, ${name}!`;
console.log(greetArrow("Mariam"));

// A function handed to other code, to be called later: a callback
setTimeout(() => {
  console.log("Your order is ready");
}, 1000);
// #endregion functions

// #region arrays
const prices = [45, 120, 180, 60, 250];
console.log(prices[0], prices.length);   // 45 5

prices.forEach(p => console.log("Price:", p));

const withService = prices.map(p => p + 20);
console.log("With service:", withService);

const cheap = prices.filter(p => p < 100);
console.log("Under 100:", cheap);
// #endregion arrays
