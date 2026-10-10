// ebd bn'b: server.js after Step 1 of the split (Lab 5, part 2)
// DATABASE moved to db.js

import express from "express";
// #region imports
import mongoose from "mongoose";
import { connectDB } from "./db.js";
// #endregion imports

const app = express();

// ========== MIDDLEWARE ==========
// Log every request, then pass it on
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Read JSON request bodies into req.body
app.use(express.json());

// ========== DATABASE ==========
// #region moved
// Moved to db.js
// #endregion moved

// ========== MODEL ==========
// The only code that touches the data
// The shape of one listing
const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
});

// The model: our handle on the "listings" collection
const Listing = mongoose.model("Listing", listingSchema);

async function getAllListings() {
  return Listing.find();
}

async function getListingById(id) {
  // "abc" can never be an _id: not found
  if (!mongoose.isValidObjectId(id)) return null;
  return Listing.findById(id);
}

async function addListing(data) {
  // The schema keeps only the fields it knows
  return Listing.create(data);
}

async function updateListing(id, data) {
  if (!mongoose.isValidObjectId(id)) return null;
  // new: true sends back the listing after the update
  return Listing.findByIdAndUpdate(id, data, {
    new: true,
  });
}

async function removeListing(id) {
  if (!mongoose.isValidObjectId(id)) return null;
  return Listing.findByIdAndDelete(id);
}

// ========== CONTROLLERS ==========
// Read the request, call the model, send the response
async function handleGetAll(req, res) {
  res.json(await getAllListings());
}

async function handleGetOne(req, res) {
  const listing = await getListingById(req.params.id);
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  res.json(listing);
}

async function handleCreate(req, res) {
  const data = req.body || {}; // no body sent? use an empty object
  if (!data.title || !data.pricePerNight) {
    return res.status(400).json({ error: "title and pricePerNight are required" });
  }
  res.status(201).json(await addListing(data));
}

async function handleUpdate(req, res) {
  const data = req.body || {};
  if (!data.title || !data.pricePerNight) {
    return res.status(400).json({ error: "title and pricePerNight are required" });
  }
  const listing = await updateListing(req.params.id, data);
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  res.json(listing);
}

async function handleDelete(req, res) {
  const listing = await removeListing(req.params.id);
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  res.status(204).end(); // done, nothing to send back
}

// ========== ROUTES ==========
app.get("/", (req, res) => {
  res.send("Welcome to ebd bn'b");
});

app.get("/api/listings", handleGetAll);
app.get("/api/listings/:id", handleGetOne);
app.post("/api/listings", handleCreate);
app.put("/api/listings/:id", handleUpdate);
app.delete("/api/listings/:id", handleDelete);

// ========== START ==========
await connectDB(); // no database, no server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
