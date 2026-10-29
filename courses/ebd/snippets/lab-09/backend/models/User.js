// ebd bn'b: the users model (Lab 9)
// #region file
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Never the password itself: a bcrypt hash of it
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export async function addUser(data) {
  return User.create(data);
}

export async function getUserByEmail(email) {
  return User.findOne({ email: email });
}
// #endregion file
