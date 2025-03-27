const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passWord: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("passWord")) return next();
  const salt = await bcrypt.genSalt(10);
  this.passWord = await bcrypt.hash(this.passWord, salt);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
