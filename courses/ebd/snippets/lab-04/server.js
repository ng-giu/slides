// ebd bn'b: the listings API (Lab 4 solution)
// One file for now, split into sections. Later, each section gets its own file.

import express from "express";

const app = express();

// ========== MIDDLEWARE ==========
// #region middleware
// Log every request, then pass it on
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Read JSON request bodies into req.body
app.use(express.json());
// #endregion middleware

// ========== DATABASE ==========
// #region database
// A plain array for now. It resets every time the server restarts.
let listings = [
  { id: 1, title: "Nile View Apartment", pricePerNight: 85 },
  { id: 2, title: "Beach House", pricePerNight: 140 },
  { id: 3, title: "Desert Eco-Lodge", pricePerNight: 60 },
];
let nextId = 4;
// #endregion database

// ========== MODEL ==========
// The only code that touches the listings array
// #region model-1
function getAllListings() {
  return listings;
}

function getListingById(id) {
  return listings.find((listing) => listing.id === id);
}

function addListing(data) {
  const listing = {
    id: nextId++,
    title: data.title,
    pricePerNight: data.pricePerNight,
  };
  listings.push(listing);
  return listing;
}
// #endregion model-1

// #region model-2
function updateListing(id, data) {
  const listing = getListingById(id);
  if (listing) {
    listing.title = data.title;
    listing.pricePerNight = data.pricePerNight;
  }
  return listing;
}

function removeListing(id) {
  const listing = getListingById(id);
  listings = listings.filter((item) => item.id !== id);
  return listing;
}
// #endregion model-2

// ========== CONTROLLERS ==========
// Read the request, call the model, send the response
// #region controllers-get
function handleGetAll(req, res) {
  res.json(getAllListings());
}

function handleGetOne(req, res) {
  const listing = getListingById(Number(req.params.id));
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  res.json(listing);
}
// #endregion controllers-get

// #region controllers-create
function handleCreate(req, res) {
  const data = req.body || {}; // no body sent? use an empty object
  if (!data.title || !data.pricePerNight) {
    return res.status(400).json({ error: "title and pricePerNight are required" });
  }
  res.status(201).json(addListing(data));
}
// #endregion controllers-create

// #region controllers-update
function handleUpdate(req, res) {
  const data = req.body || {};
  if (!data.title || !data.pricePerNight) {
    return res.status(400).json({ error: "title and pricePerNight are required" });
  }
  const listing = updateListing(Number(req.params.id), data);
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  res.json(listing);
}
// #endregion controllers-update

// #region controllers-delete
function handleDelete(req, res) {
  const listing = removeListing(Number(req.params.id));
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  res.status(204).end(); // done, nothing to send back
}
// #endregion controllers-delete

// ========== ROUTES ==========
// #region routes
app.get("/", (req, res) => {
  res.send("Welcome to ebd bn'b");
});

app.get("/api/listings", handleGetAll);
app.get("/api/listings/:id", handleGetOne);
app.post("/api/listings", handleCreate);
app.put("/api/listings/:id", handleUpdate);
app.delete("/api/listings/:id", handleDelete);
// #endregion routes

// ========== START ==========
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
