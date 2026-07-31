const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const studentRoutes = require("./routes/student.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 MessMate Backend Running Successfully",
  });
});

app.use("/api/students", studentRoutes);

module.exports = app;