const { exec } = require("../helpers/db_connect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await exec("getUser", { email });

    if (user.length === 0)
      return res
        .status(404)
        .json({ state: "failed", message: "Incorrect  details" });

    const pwdMatch = await bcrypt.compare(password, user[0].password);
    if (!pwdMatch)
      return res
        .status(404)
        .json({ state: "failed", message: "Incorrect  details" });

    const token = await jwt.sign(
      { ...user[0], password: password },
      process.env.SECRET,
      {
        expiresIn: "24h",
      }
    );
    return res.status(200).json({
      state: "success",
      token,
      user: {
        firstname: user[0].firstname,
        lastname: user[0].lastname,
        
        isAdmin: user[0].isAdmin,
      },
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
module.exports = login;
