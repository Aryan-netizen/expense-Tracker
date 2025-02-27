// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const JWT_SECRET = process.env.JWT_SECRET;

// // const JWT_SECRET = process.env.JWT_SECRET || "603b7876bb687a5579ed688853c4e8da20a2842fa54a2c3a9b4b62f59cf49585809dcf349828303d6857d4d678596fdd739a43c187df275b43986c5578ed5c88";

// // const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

// // ✅ Signup Function
// exports.signup = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: "User already exists" });

//         // Hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Save user
//         const newUser = new User({ name, email, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: "User registered successfully" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// // ✅ Login Function
// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user by email
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Compare passwords
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

//         // Generate JWT Token
//         const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

//         res.json({ message: "Login successful", token });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

// Signup Function
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Login Function
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

        // Generate JWT Token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};