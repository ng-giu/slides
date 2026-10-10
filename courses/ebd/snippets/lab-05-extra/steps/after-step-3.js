// ebd bn'b: server.js after Step 3 of the split (Lab 5, part 2)
// CONTROLLERS moved to controllers/listingController.js

import express from "express";
// #region imports
import { connectDB } from "./db.js";
import {
  handleGetAll,
  handleGetOne,
  handleCreate,
  handleUpdate,
  handleDelete,
} from "./controllers/listingController.js";
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
// Moved to db.js

// ========== MODEL ==========
// Moved to models/Listing.js

// ========== CONTROLLERS ==========
// #region moved
// Moved to controllers/listingController.js
// #endregion moved

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
