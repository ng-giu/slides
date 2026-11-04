// #region then
// Older style: .then() chaining
fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((data) => {
    console.log("Fact:", data.fact);
  });
// #endregion then

// #region async
// Modern standard: async / await
async function getFact() {
  const res = await fetch(
    "https://catfact.ninja/fact"
  );
  const data = await res.json();
  console.log("Fact:", data.fact);
}

getFact();
// #endregion async

// #region dog
const dogBtn =
  document.getElementById("dogBtn");
const dogImg =
  document.getElementById("dogImg");

async function getDog() {
  const res = await fetch(
    "https://dog.ceo/api/breeds/image/random"
  );
  const data = await res.json();
  dogImg.src = data.message;
}

dogBtn.addEventListener("click", getDog);
// #endregion dog
