const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();

// POST request to sign up
router.post("/Signup", async (req, res) => {
  const { userName, email, passWord } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ userName, email, passWord });

    // Save the user in the database
    await newUser.save();

    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// Login Route

router.post("/Login", async (req, res) => {
  console.log("hello api");
  

  try{
    const {email, passWord} = req.body;
    const user = await User.findOne({email});

    if(!user) {
      return res.status(400).json({message: "User not Found"});
    }

    const isMatch = await bcrypt.compare(passWord, user.passWord);

    if(!isMatch) {
      return res.status(400).json({message:"invalid credential"});
    }
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn:"1h"});

    res.json({token, user})

  } catch(err) {
    console.log("err: ", err);
      res.status(500).json({message: "Server error"});
  }
})


module.exports = router;
