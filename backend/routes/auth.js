const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Enter a valid password").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }

      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      await user.save();
      res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user:", error);
      res
        .status(500)
        .json({ error: "Failed to create user", message: error.message });
    }
  }
);

module.exports = router;
