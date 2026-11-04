// #region selectors
// 1. Select one element by id="..."
const title =
  document.getElementById("menu-title");

// 2. Select first match for CSS selector
const card =
  document.querySelector(".dish-card");

// 3. Select ALL matches (NodeList)
const cards =
  document.querySelectorAll(".dish-card");
console.log("Count:", cards.length);
// #endregion selectors

// #region modify
const promoMsg =
  document.getElementById("promo-msg");

// 1. Change visible text inside tag
promoMsg.textContent = "EGP 50 off!";

// 2. Change inline CSS property
promoMsg.style.color = "#0d9488";

// 3. Add a CSS class from style.css
promoMsg.classList.add("applied");
// #endregion modify

// #region events
const addBtn =
  document.getElementById("add-bestie");
const countEl =
  document.getElementById("cart-count");
let count = 0;

addBtn.addEventListener("click", () => {
  count = count + 1;
  countEl.textContent = count;
});
// #endregion events
