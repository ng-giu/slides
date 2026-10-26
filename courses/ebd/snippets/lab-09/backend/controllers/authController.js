// ebd bn'b: register and log in (Lab 9)
// #region top
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { addUser, getUserByEmail } from "../models/User.js";

// A token that says "this is user ...", valid for a day
function makeToken(user) {
  return jwt.sign(
    { id: user._id, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
}

// What the front end gets back: the token, and who logged in
function session(user) {
  return {
    token: makeToken(user),
    user: { id: user._id, name: user.name },
  };
}
// #endregion top

// #region register
export async function handleRegister(req, res) {
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) {
    return res.status(400).json({ error: "name, email and password are required" });
  }
  if (await getUserByEmail(email)) {
    return res.status(409).json({ error: "This email is already registered" });
  }
  // Store a hash, never the password. 10: how slow to make it
  const hash = await bcrypt.hash(password, 10);
  const user = await addUser({ name, email, password: hash });
  res.status(201).json(session(user));
}
// #endregion register

// #region login
export async function handleLogin(req, res) {
  const { email, password } = req.body || {};
  const user = await getUserByEmail(email);
  // Hash the password they typed, compare it with the stored hash
  const ok = user && (await bcrypt.compare(password, user.password));
  if (!ok) {
    // Never say which of the two was wrong
    return res.status(401).json({ error: "Wrong email or password" });
  }
  res.json(session(user));
}
// #endregion login
