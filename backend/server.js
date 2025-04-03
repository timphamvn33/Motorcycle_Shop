const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
// Ensure MONGO_URI is being accessed properly
const mongoURI = process.env.MONGO_URI;
const authRoutes = require("./routes/authRoutes");
const userProfile = require("./routes/userProfile");
const items = require("./routes/items");
const generalFilters = require("./routes/generalFilter");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userProfile);
app.use("/api/itemAll", items );
app.use("/api/generalFilterMenu", generalFilters);

if (!mongoURI) {
    console.error('MONGO_URI is undefined. Please check your .env file!');
    process.exit(1);  // Exit if the URI is missing
  }

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
