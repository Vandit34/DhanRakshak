const express = require("express");
const router = express.Router();
const User = require("../Model/user");
const cookieParser = require("cookie-parser");

// router.post("/signup", async (req, res) => {
//  const { name, password } = req.body;
//  await User.create({ name, password });
//  console.log("User created successfully");
//  console.log(name, password);
//  return res.redirect("/signin");
// });

router.post("/signin", async (req, res) => {
 try {
  const { name, password } = req.body;
  const user = await User.findOne({ name, password });
  if (!user) {
   throw new Error("Invalid credentials");
  }
  const userId = user._id; // Variable to store the user's _id
  res.cookie("id", userId).send("Logged in successfully");
 } catch (error) {
  console.error(error);
  return res.render("signin", {
   error: "Incorrect name or password",
  });
 }
});

router.get("/api/:id", async(req, res) => {
 res.send(await User.findById(req.params.id));
});

router.get("/api", async(req, res) => {
    res.send(await User.find(id));
   });

router.get("/logout", (req, res) => {
    
 res.clearCookie("token").redirect("/");
});

module.exports = router;
