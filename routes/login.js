const express = require("express");
const User = require("../model/user");
const router = express.Router();
const bcrypt = require("bcrypt");
const userexist = require("../middleware/userexist");
const {tokengenaration} =require("../middleware/auth")

router.get("/", (req, res) => {
  res.send("This is login");
});

router.post("/", userexist, async (req, res) => {
  try {
    const userdata = await User.findOne({ email: req.body.email });
    const ismatch = await bcrypt.compare(req.body.password, userdata.password);

    if (ismatch) {
        const token=tokengenaration(req.body.email);
        res.cookie("token",token);
        res.status(200).send("success in login");
    } else {
      res.status(201).send("wrong password");
    }
  } catch (err) {
    res.status(404).send("Internal server error hi");
  }
});

module.exports = router;
