const jwt = require("jsonwebtoken");

const getToken = (email) => {
  // return jwt.sign({ email }, process.env.SECRET_KEY, {
  //   // expiresIn: Date.now() + 1 * 365 * 24 * 60 * 60 * 1000,
  //   expiresIn: Date.now() + 15 * 60,
  // });
  return  jwt.sign({ email }, 'secretKey', { expiresIn: '1h' });
};
const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};
module.exports = { getToken, verifyToken };
