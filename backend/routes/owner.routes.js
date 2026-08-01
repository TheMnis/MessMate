const express = require("express");
const { register, login } = require("../controllers/owner.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const roles = require("../constants/roles");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/profile", authMiddleware([roles.OWNER]), (req, res) => {
  res.status(200).json({ success: true, data: req.user });
});

module.exports = router;
