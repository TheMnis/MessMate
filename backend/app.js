const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth.routes");
const studentRoutes = require("./routes/student.routes");
const ownerRoutes = require("./routes/owner.routes");

const notFoundMiddleware = require("./middlewares/notFound.middleware");
const errorMiddleware = require("./middlewares/error.middleware");

dotenv.config();

const app = express();

/* ----------------------------- Middlewares ----------------------------- */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* ----------------------------- Health Check ---------------------------- */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 MessMate Backend Running Successfully",
  });
});

/* -------------------------------- Routes ------------------------------- */

app.use("/api/auth", authRoutes);

app.use("/api/students", studentRoutes);

app.use("/api/owners", ownerRoutes);

/* --------------------------- Error Handlers ---------------------------- */

app.use(notFoundMiddleware);

app.use(errorMiddleware);

module.exports = app;