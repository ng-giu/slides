// #region console
const appName = "Talabat";
let cartTotal = 185;
const isFreeDelivery = false;

console.log(`${appName} total: EGP ${cartTotal}`);
console.warn("Minimum order is EGP 100");
console.error("Promo code expired!");
// #endregion console

// #region objects
const restaurant = {
  name: "Burger Republic",
  rating: 4.7,
  etaMinutes: 30,
  isOpen: true
};

console.log(restaurant.name);
restaurant.etaMinutes = 25;
console.table(restaurant);
// #endregion objects

// #region conditions
const subtotal = 320;

if (subtotal >= 300) {
  console.log("Free delivery unlocked!");
} else {
  console.log("Add EGP 25 delivery fee.");
}

const badge = subtotal >= 300 ? "FREE" : "EGP 25";
console.log("Delivery badge:", badge);
// #endregion conditions

// #region loops
for (let step = 1; step <= 3; step++) {
  console.log(`Tracking step ${step} of 3`);
}
// #endregion loops

// #region functions
// 1. Function declaration
function addServiceFee(price) {
  return price + 20;
}

// 2. Arrow function (concise one-liner)
const applyDiscount = (price) => price - 30;

// 3. Callback: passing a function as input
function checkout(amount, onComplete) {
  const finalAmount = addServiceFee(amount);
  onComplete(finalAmount);
}

checkout(200, (total) => {
  console.log(`Charged EGP ${total}`);
});
// #endregion functions

// #region arrays
const prices = [100, 180, 250, 600];

prices.forEach((p) => console.log(`EGP ${p}`));

const withFee = prices.map((p) => p + 20);
console.log("With fee:", withFee);

const under200 = prices.filter((p) => p < 200);
console.log("Under 200:", under200);
// #endregion arrays
