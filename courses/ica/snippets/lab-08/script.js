// #region step1
// Step 1: the restaurant's numbers
const restaurantName = "Burger Republic";
let ordersPerDay = 45;
const averageOrder = 200;
const commissionPercent = 20;
const dailyCosts = 5000;
console.log(`${restaurantName}: today's dashboard`);
// #endregion step1

// #region step2
// Step 2: today's money
const revenue = ordersPerDay * averageOrder;
const commission = revenue * commissionPercent / 100;
const profit = revenue - commission - dailyCosts;
console.log(`Revenue: EGP ${revenue}`);
console.log(`Talabat's commission: EGP ${commission}`);
console.log(`Profit: EGP ${profit}`);
// #endregion step2

// #region step3
// Step 3: a function for any number of orders
function dailyProfit(orders) {
  const income = orders * averageOrder;
  const cut = income * commissionPercent / 100;
  return income - cut - dailyCosts;
}
console.log(dailyProfit(ordersPerDay));
console.log(dailyProfit(100));
// #endregion step3

// #region step4
// Step 4: rate the day
if (profit >= 3000) {
  console.log("Great day");
} else if (profit >= 0) {
  console.log("Normal day");
} else {
  console.log("Losing money");
}
// #endregion step4

// #region step5
// Step 5: the next 7 days, 3 more orders each day
let weekProfit = 0;
for (let day = 1; day <= 7; day++) {
  const dayProfit = dailyProfit(ordersPerDay);
  console.log(`Day ${day}: EGP ${dayProfit}`);
  weekProfit = weekProfit + dayProfit;
  ordersPerDay = ordersPerDay + 3;
}
console.log(`Week profit: EGP ${weekProfit}`);
// #endregion step5
