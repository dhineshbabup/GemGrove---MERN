const jwt = require("jsonwebtoken");

const getToken = (email) => {
  return jwt.sign({ email }, process.env.SECRET_KEY, {
    expiresIn: Date.now() + 1 * 365 * 24 * 60 * 60 * 1000,
  });
};
const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};
module.exports = { getToken, verifyToken };
