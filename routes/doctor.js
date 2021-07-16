const express = require("express");
const Doctor = require("../models/Doctor");
const router = express.Router();
const {
  register,
  login,
  getMe,
  getDoctors,
  logout
} = require("../controller/doctor");
const { protect, authorize } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

router.get("/",protect('doctor'), authorize("doctor", "admin"),advancedResults(Doctor), getDoctors);
router.get("/me", protect('doctor'), authorize("doctor", "admin"), getMe);
module.exports = router;
