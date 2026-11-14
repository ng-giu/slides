// The examples below share this value
let cartTotal = 280;

// #region variables
const restaurantName = "Burger Republic";
const rating = 4.8;
let itemCount = 0;
const isOpen = true;

// let: the value can change
itemCount = itemCount + 2;
console.log(itemCount); // 2
// #endregion variables

// #region functions
function itemTotal(price, quantity) {
  return price * quantity;
}

console.log(itemTotal(180, 2)); // 360
console.log(itemTotal(95, 3));  // 285
// #endregion functions

// #region expressions
// Math
console.log(180 + 100);         // 280
console.log(cartTotal - 30);    // 250
console.log(7 % 2);             // 1

// Comparison
console.log(cartTotal >= 250);  // true
console.log(7 % 2 === 0);       // false
// #endregion expressions

// #region references
// Variables: the name gives the value
console.log(cartTotal);         // 280
console.log(cartTotal + 20);    // 300

// Calls: the result the function returns
console.log(itemTotal(180, 2)); // 360
console.log(itemTotal(95, 3));  // 285
// #endregion references

// #region conditionals
if (cartTotal >= 250) {
  console.log("Free delivery");
} else if (cartTotal >= 100) {
  console.log("Delivery: EGP 25");
} else {
  console.log("Minimum order is EGP 100");
}
// #endregion conditionals

// #region loops
for (let i = 1; i <= 3; i++) {
  console.log("Order", i, "is on its way");
}
// #endregion loops

// #region output
console.log(cartTotal);
console.log("Free delivery");
console.log("Total:", cartTotal);
console.log("Total: " + cartTotal);
console.log(`EGP ${cartTotal}`);
// #endregion output

// #region switch
const day = "Friday";

switch (day) {
  case "Friday":
    console.log("Weekend offer: 20% off");
    break;
  case "Saturday":
    console.log("Weekend offer: 10% off");
    break;
  default:
    console.log("No offer today");
}
// #endregion switch

// #region while
let ordersLeft = 3;

while (ordersLeft > 0) {
  console.log("Orders left:", ordersLeft);
  ordersLeft = ordersLeft - 1;
}
console.log("All delivered");
// #endregion while
