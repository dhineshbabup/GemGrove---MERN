const bcrypt = require("bcrypt");
const saltRound = 10;
const hashGenerate = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRound);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (err) {
    console.log(err);
  }
};

const hashValidator = async (hashPassword, password) => {
  try {
    const result =  await bcrypt.compare(password, hashPassword);
    return result;
  } catch (err) {
    console.log(err);
  }
};
module.exports = { hashGenerate, hashValidator };
