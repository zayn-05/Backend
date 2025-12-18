require("dotenv").config();
const connectDB = require("./config/db");
const Book = require("./models/Book");
const Member = require("./models/Member");

connectDB();

const seed = async () => {
  await Book.deleteMany();
  await Member.deleteMany();

  await Book.create({
    isbn: "978-001",
    title: "Node.js Fundamentals",
    author: "John Doe",
    copies: 5
  });
 await Member.create({
    name: "Mia Cabanza",
    email: "mia@email.com"
  });

  console.log("Seed data inserted");
  process.exit();
};

seed();