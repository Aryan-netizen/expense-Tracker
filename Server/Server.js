// require('dotenv').config();  // Load environment variables
// const express = require('express');  // Import Express
// const mongoose = require('mongoose');  // Import Mongoose
// const connectDB = require("./config");
// const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
// const User = require("./models/User");

// const app = express();

// app.use(express.json());
// const PORT = 5000;

// // Connect to MongoDB
// connectDB();


// // Use routes
// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

require('dotenv').config();  // Load environment variables
const express = require('express');  // Import Express
const mongoose = require('mongoose');  // Import Mongoose
const connectDB = require("./config");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const User = require("./models/User");

const app = express();

app.use(express.json());
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});