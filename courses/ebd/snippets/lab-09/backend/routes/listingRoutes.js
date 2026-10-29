// ebd bn'b: the listings routes (Lab 9: changing listings needs a login)
// #region file
import express from "express";
import { requireAuth } from "../middleware/auth.js";
import {
  handleGetAll,
  handleGetOne,
  handleCreate,
  handleUpdate,
  handleDelete,
} from "../controllers/listingController.js";

const router = express.Router();

// Anyone may look
router.get("/", handleGetAll);
router.get("/:id", handleGetOne);
// Only a logged-in user may change: requireAuth runs first
router.post("/", requireAuth, handleCreate);
router.put("/:id", requireAuth, handleUpdate);
router.delete("/:id", requireAuth, handleDelete);

export default router;
// #endregion file
