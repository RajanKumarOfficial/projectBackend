require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");

const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// connected database
connectDB();

// fetch the router
const userRouter =require('./routes/userRoutes.js')

app.use("/", userRouter);

module.exports = app;
