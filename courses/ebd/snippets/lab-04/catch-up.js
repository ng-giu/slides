// Where Lab 3 ended: server.js, for anyone starting Lab 4 from scratch.
// Same code as snippets/lab-03/server.js minus two comments, so every line
// fits the slide: anything clipped is missing from the PDF, and from a paste.

// #region top
import express from "express";

const app = express();

// Our fake database for now
const listings = [
  { id: 1, title: "Nile View Apartment", pricePerNight: 85 },
  { id: 2, title: "Beach House", pricePerNight: 140 },
  { id: 3, title: "Desert Eco-Lodge", pricePerNight: 60 },
];

app.get("/", (req, res) => {
  res.send("Welcome to ebd bn'b");
});
// #endregion top

// #region bottom
app.get("/api/listings", (req, res) => {
  res.json(listings);
});

app.get("/api/listings/:id", (req, res) => {
  const id = Number(req.params.id);
  const listing = listings.find((listing) => listing.id === id);

  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  res.json(listing);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
// #endregion bottom
