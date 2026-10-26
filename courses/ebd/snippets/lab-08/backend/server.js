// ebd bn'b: the listings API (Lab 8: the front end can call it now)
// #region imports
import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import listingRoutes from "./routes/listingRoutes.js";
// #endregion imports

const app = express();

// ========== MIDDLEWARE ==========
// #region middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use(express.json());
// Let our React app, on another port, read our answers
app.use(cors());
// #endregion middleware

// ========== ROUTES ==========
// #region routes
app.get("/", (req, res) => {
  res.send("Welcome to ebd bn'b");
});
// Is the API up? Every project has this route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});
app.use("/api/listings", listingRoutes);
// #endregion routes

// ========== START ==========
await connectDB();
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
