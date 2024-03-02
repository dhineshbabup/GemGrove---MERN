const jwt = require("jsonwebtoken");

const getToken = (email, isAdmin, id) => {
  return jwt.sign({ email , isAdmin, id}, process.env.SECRET_KEY, {
    // expiresIn: Date.now() + 1 * 365 * 24 * 60 * 60 * 1000,
    expiresIn: Date.now() + 15 * 60
  });
};
const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};
module.exports = { getToken, verifyToken };
