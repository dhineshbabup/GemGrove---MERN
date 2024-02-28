const router = require("express").Router();
const User = require("../DB/model/user");
const { hashGenerate, hashValidator } = require("./authvalidate");
const jwt = require("jsonwebtoken");
const { getToken } = require("./token");

// Register
router.post("/signup", async (req, res) => {
  const hashPassword = await hashGenerate(req.body.password);
  const checkUser = await User.findOne({ email: req.body.email });
  if (checkUser) {
    return res.status(400).send("user already exist");
  }
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  const savedUser = await user.save();
  res.json(savedUser);
});

// login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send("user not found");
  }
  const result = await hashValidator(user.password, req.body.password);
  if (!result) {
    return res.status(400).send("Password mismatch");
  } else {
    const token = getToken(user.email);
    // res.cookie("token", token);
    res.cookie("token", token, { httpOnly: true });
    res.json({
      status: "success",
      role: user.isAdmin,
      token,
      email: user.email,
    });
    // return res.json({status: "success", role: user.isAdmin, token, email: user.email})
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.send("Logged out successfully");
});

router.get("/set-cookie", (req, res) => {
  res.clearCookie("token");
  res.send("Cookie has been set");
});

// logout
router.get("/protected", (req, res) => {
  const token = req.cookies.logedIn;
  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send("Forbidden: Invalid token");
    }
    res.send("Protected resource accessed");
  });
});

module.exports = router;
