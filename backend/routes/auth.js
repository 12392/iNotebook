// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// // Create a User using: POST "/api/auth/". Doesn't require Auth
// router.post("/", (req, res) => {
//   console.log(req.body);
//   const user = User(req.body);
//   user.save();
//   res.send(req.body);
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

module.exports = router;
