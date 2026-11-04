// #region select
// 1. Select DOM elements from index.html
const countEl =
  document.getElementById("cart-count");
const totalEl =
  document.getElementById("cart-total");
const promoMsg =
  document.getElementById("promo-msg");
const bestieBtn =
  document.getElementById("add-bestie");
const promoBtn =
  document.getElementById("promo-btn");

// 2. Track cart state in JS variables
let itemCount = 0;
let totalPrice = 0;
let promoApplied = false;
// #endregion select

// #region events
function updateCartUI() {
  countEl.textContent = itemCount;
  totalEl.textContent = totalPrice;
}

bestieBtn.addEventListener("click", () => {
  itemCount = itemCount + 1;
  totalPrice = totalPrice + 600;
  updateCartUI();
});

promoBtn.addEventListener("click", () => {
  if (!promoApplied && totalPrice >= 200) {
    totalPrice = totalPrice - 50;
    promoApplied = true;
    promoMsg.textContent = "EGP 50 off!";
    promoMsg.classList.add("applied");
    updateCartUI();
  }
});
// #endregion events
