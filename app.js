const express = require("express");
const mongoose = require("mongoose");
const User = require("./mongo"); // Import the User model
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MongoDB connection setup
mongoose.connect("mongodb://0.0.0.0:27017/LoginDB")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
    });

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

app.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const check = await User.findOne({ email: email });
        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

app.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password, phoneNo } = req.body;
    const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        phoneNo
    });
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json("exist");
        }
        await newUser.save(); // Save the new user data
        res.json("notexist");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json("fail");
    }
});

// Add orders route
app.post("/orders", async (req, res) => {
    const order = req.body; // Assuming order details are in the request body
    try {
        // Process the order here
        // For example, save it to the database if you have an Order model
        // const newOrder = new Order(order);
        // await newOrder.save();

        res.status(201).send({ message: 'Order created successfully', order });
    } catch (error) {
        console.error("Error processing order:", error);
        res.status(500).send({ message: 'Order processing failed' });
    }
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
