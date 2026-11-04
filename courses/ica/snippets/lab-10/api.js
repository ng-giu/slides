// #region select
// 1. Select the DOM elements we will update
const imgEl =
  document.getElementById("dish-img");
const nameEl =
  document.getElementById("dish-name");
const infoEl =
  document.getElementById("dish-info");
const loadBtn =
  document.getElementById("load-btn");
// #endregion select

// #region fetch
async function loadRandomDish() {
  nameEl.textContent = "Loading dish...";
  try {
    const id = Math.floor(Math.random() * 20) + 1;
    const res = await fetch(
      `https://dummyjson.com/recipes/${id}`
    );
    const data = await res.json();
    imgEl.src = data.image;
    nameEl.textContent = data.name;
    infoEl.textContent =
      `${data.cuisine} • ★ ${data.rating}`;
  } catch (err) {
    nameEl.textContent = "Failed to load.";
  }
}

loadBtn.addEventListener("click", loadRandomDish);
loadRandomDish();
// #endregion fetch
