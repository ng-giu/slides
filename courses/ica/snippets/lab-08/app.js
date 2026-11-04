// #region step1
const restaurantName = "Burger Republic";
const deliveryFee = 25;
let itemCount = 2;

const dish = {
  title: "Bestie Deal",
  price: 600,
  inStock: true
};

console.log(`Welcome to ${restaurantName}`);
console.table(dish);
// #endregion step1

// #region step2
function getDeliveryFee(subtotal) {
  if (subtotal >= 500) {
    return 0;
  } else {
    return 25;
  }
}

const applyPromo = (total) => total * 0.9;

const fee = getDeliveryFee(dish.price);
const finalPrice = applyPromo(dish.price) + fee;
console.log(`Fee: ${fee}, Final: ${finalPrice}`);
// #endregion step2

// #region step3
const menu = [
  { title: "Bestie Deal", price: 600 },
  { title: "Mushroom Ranch", price: 250 },
  { title: "Cheese Fries", price: 100 },
  { title: "Smash Single", price: 180 }
];

menu.forEach((d) => {
  console.log(`${d.title}: EGP ${d.price}`);
});

const budget = menu.filter((d) => d.price < 250);
console.table(budget);

const proPrices = menu.map((d) => d.price * 0.9);
console.log("Pro prices:", proPrices);
// #endregion step3
