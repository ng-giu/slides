// #region console
const title = document.querySelector("h1");
title.textContent = "DOM Manipulated!";
title.style.color = "crimson";
// #endregion console

// #region select
// The FIRST element that matches
const button = document.querySelector("#add-btn");
const heading = document.querySelector("h2");

// EVERY element that matches, as a list
const orders = document.querySelectorAll("li");
console.log(orders.length); // how many
console.log(orders[0]);     // the first one
// #endregion select

// #region listen
//                      type     handler
button.addEventListener("click", function () {
  console.log("Clicked!");
});

const input = document.querySelector("#order-input");
input.addEventListener("input", function () {
  console.log("Typed something");
});
// #endregion listen

// #region change
// Replace the text inside the tag
heading.textContent = "Today's orders";

// Set one CSS property
heading.style.color = "crimson";

// Add the class if missing, remove it if there
heading.classList.toggle("delivered");
// #endregion change
