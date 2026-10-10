// ebd bn'b: the listings API on MongoDB (Lab 5 solution)
// Lab 4's server.js, same sections. DATABASE, MODEL and the controllers changed.

// #region imports
import express from "express";
import mongoose from "mongoose";
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
// #region database
async function connectDB() {
  // Atlas is far away: this can take a few seconds
  console.log("Connecting to MongoDB...");
  // The connection string, from .env
  const uri = process.env.MONGODB_URI;
  // dbName picks the database inside your cluster
  await mongoose.connect(uri, { dbName: "ebd-bnb" });
  console.log("Connected to MongoDB");
}
// #endregion database

// ========== MODEL ==========
// The only code that touches the data
// #region schema
// The shape of one listing
const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
});

// The model: our handle on the "listings" collection
const Listing = mongoose.model("Listing", listingSchema);
// #endregion schema

// #region model-1
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
// #endregion model-1

// #region model-2
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
// #endregion model-2

// ========== CONTROLLERS ==========
// Read the request, call the model, send the response
// #region controllers-get
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
// #endregion controllers-get

// #region controllers-create
async function handleCreate(req, res) {
  const data = req.body || {}; // no body sent? use an empty object
  if (!data.title || !data.pricePerNight) {
    return res.status(400).json({ error: "title and pricePerNight are required" });
  }
  res.status(201).json(await addListing(data));
}
// #endregion controllers-create

// #region controllers-update
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
// #endregion controllers-update

// #region controllers-delete
async function handleDelete(req, res) {
  const listing = await removeListing(req.params.id);
  if (!listing) {
    return res.status(404).json({ error: "Listing not found" });
  }
  res.status(204).end(); // done, nothing to send back
}
// #endregion controllers-delete

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
// #region start
await connectDB(); // no database, no server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
// #endregion start
