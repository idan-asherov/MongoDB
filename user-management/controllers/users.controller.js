const User = require("../model/User");

// -----------------------------------------
// GET ALL USERS
// -----------------------------------------
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// -----------------------------------------
// GET USER BY ID
// -----------------------------------------
async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    console.log("here is the user", user);

    if (!user) {
      // Added 'return' here so the function stops if no user is found!
      return res.status(404).json({ message: "user not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
} // <-- This is the closing brace for the whole function!

// -----------------------------------------
// CREATE NEW USER (POST)
// -----------------------------------------
async function createUser(req, res) {
  try {
    // 1. Grab the data sent by the client
    const { name, email, password, age } = req.body;

    // 2. Create a new MongoDB document
    const newUser = new User({
      name,
      email,
      password,
      age,
    });

    // 3. Save it to the database!
    const savedUser = await newUser.save();

    // 4. Send back a 201 Created status and the new user
    res.status(201).json(savedUser);
  } catch (error) {
    // If the email already exists, MongoDB throws error code 11000
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "That email is already registered!" });
    }
    res.status(500).json({ message: error.message });
  }
}

// Export all THREE functions now
module.exports = {
  getAllUsers,
  getUserById,
  createUser, // <-- Don't forget to export this!
};
