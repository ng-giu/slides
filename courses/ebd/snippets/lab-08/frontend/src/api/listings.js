// ebd bn'b: every request the front end sends to our API (Lab 8)
// #region read
const API = "http://localhost:3000/api/listings";

export async function getListings() {
  const res = await fetch(API);
  if (!res.ok) throw new Error(`GET failed: ${res.status}`);
  return res.json();
}

export async function getListing(id) {
  const res = await fetch(`${API}/${id}`);
  if (!res.ok) throw new Error(`GET failed: ${res.status}`);
  return res.json();
}
// #endregion read

// #region write
export async function createListing(listing) {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(listing),
  });
  if (!res.ok) throw new Error(`POST failed: ${res.status}`);
  return res.json(); // the saved listing, with its _id
}

export async function removeListing(id) {
  const res = await fetch(`${API}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`DELETE failed: ${res.status}`);
}
// #endregion write
