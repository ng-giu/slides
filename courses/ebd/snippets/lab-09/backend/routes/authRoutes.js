// ebd bn'b: the auth routes (Lab 9)
// #region file
import express from "express";
import {
  handleRegister,
  handleLogin,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);

export default router;
// #endregion file
