// The empty listeners shown in Steps 2 to 5 of the manual.
// Students replace each comment with code. Runs as is (does nothing).
const countEl = document.querySelector("#order-count");
const addBtn = document.querySelector("#add-btn");
const serveBtn = document.querySelector("#serve-btn");
const closeBtn = document.querySelector("#close-btn");
const board = document.querySelector("#board");
let count = 0;

// #region step2
addBtn.addEventListener("click", function () {
  // 1. Add 1 to count
  // 2. Set countEl.textContent to count
});
// #endregion step2

// #region step3
serveBtn.addEventListener("click", function () {
  // 1. An if: when count is more than 0,
  //    take 1 away from count
  // 2. After the if's closing }:
  //    set countEl.textContent to count
});
// #endregion step3

// #region step4
addBtn.addEventListener("click", function () {
  // (your two lines from Step 2)

  // An if / else:
  //   if count is 5 or more:
  //     set countEl.style.color to "crimson"
  //   else:
  //     set countEl.style.color to "black"
});
// #endregion step4

// #region step5
closeBtn.addEventListener("click", function () {
  // Toggle the class "closed" on board
});
// #endregion step5
