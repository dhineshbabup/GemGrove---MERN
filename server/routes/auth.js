const router = require("express").Router();
const User = require("../DB/model/user");
const { hashGenerate, hashValidator } = require("./authvalidate");
const jwt = require("jsonwebtoken");
const { getToken } = require("./token");
// Register
router.post("/signup", async (req, res) => {
  const hashPassword = await hashGenerate(req.body.password);
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
    return res.send("user not found");
  }
  const result = await hashValidator(user.password, req.body.password);
  if (!result) {
    return res.send("Password mismatch");
  } else {
    const token = getToken(user.email);
    res.cookie("logedIn", token, { httpOnly: true });
    return res.send("login successfully...!");
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("logedIn");
  res.send("Logged out successfully");
});

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
