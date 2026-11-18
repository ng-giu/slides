// Reference solution for TAs. Never shown on a slide: students write their own.

// Step 1: select the elements
const countEl = document.querySelector("#order-count");
const addBtn = document.querySelector("#add-btn");
const serveBtn = document.querySelector("#serve-btn");
const closeBtn = document.querySelector("#close-btn");
const board = document.querySelector("#board");
let count = 0;
console.log(countEl);

// Step 2: a new order
addBtn.addEventListener("click", function () {
  count = count + 1;
  countEl.textContent = count;
  // Step 4: busy kitchen
  if (count >= 5) {
    countEl.style.color = "crimson";
  } else {
    countEl.style.color = "black";
  }
});

// Step 3: serve an order
serveBtn.addEventListener("click", function () {
  if (count > 0) {
    count = count - 1;
  }
  countEl.textContent = count;
  // Step 4: busy kitchen
  if (count >= 5) {
    countEl.style.color = "crimson";
  } else {
    countEl.style.color = "black";
  }
});

// Step 5: close the kitchen
closeBtn.addEventListener("click", function () {
  board.classList.toggle("closed");
});
