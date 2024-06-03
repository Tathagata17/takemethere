const express = require("express");
const User = require("../model/user"); // Updated for clarity
const router = express.Router();
const bcrypt = require("bcrypt");
const isuser=require("../middleware/userchecker");

router.post("/", isuser ,async (req, res) => {
    try {
        const { Firstname, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            Firstname:Firstname,
            email:email,
            password: hashedPassword,
            urls:[{url:"black",text:"hello"}],
        });
        await user.save();
        res.status(200).send("User registered successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("There was an error registering the user");
    }
});

module.exports = router;
