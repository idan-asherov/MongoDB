require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./model/User.js");

// All 10 users with required fields preserved
const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    age: 25,
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password123",
    age: 30,
  },
  {
    name: "Mike Johnson",
    email: "mike@example.com",
    password: "password123",
    age: 22,
  },
  {
    name: "Sarah Wilson",
    email: "sarah@example.com",
    password: "password123",
    age: 28,
  },
  {
    name: "David Brown",
    email: "david@example.com",
    password: "password123",
    age: 35,
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
    password: "password123",
    age: 27,
  },
  {
    name: "Chris Miller",
    email: "chris@example.com",
    password: "password123",
    age: 31,
  },
  {
    name: "Jessica Taylor",
    email: "jessica@example.com",
    password: "password123",
    age: 24,
  },
  {
    name: "Daniel Anderson",
    email: "daniel@example.com",
    password: "password123",
    age: 29,
  },
  {
    name: "Olivia Thomas",
    email: "olivia@example.com",
    password: "password123",
    age: 26,
  },
];

async function insertUsers() {
  try {
    // FIXED: Pointing directly to your local Docker Container port map (27018)
    const localUri = "mongodb://localhost:27018/docker-challenge";
    await mongoose.connect(localUri);

    console.log("we connected to db ✅");

    await User.deleteMany({});
    console.log("previous users deleted!");

    await User.insertMany(users);
    console.log("users loaded into the db successfully ✅");
  } catch (error) {
    console.error("something went wrong", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("closed connection bye bye 👋");
  }
}

insertUsers();
