const express = require("express");
const router = express.Router();

// Import all THREE functions
const {
  getAllUsers,
  getUserById,
  createUser,
} = require("../controllers/users.controller");

router.get("/", getAllUsers);
router.get("/:id", getUserById);

// Route 3: Create a new user (Notice we use .post instead of .get!)
router.post("/", createUser);

module.exports = router;
