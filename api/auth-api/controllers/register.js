const { exec } = require("../helpers/db_connect");
const bcrypt = require("bcrypt");
const { v4 } = require("uuid");


const register = async (req, res) => {
  const {firstname, lastname, email, password, isAdmin} = req.body;
  const id = v4();
  let isAdminState = isAdmin === "yes"  || isAdmin === "true"? 1: 0 
  const hashedPassword =await bcrypt.hash(password, 8)

  try {
    const response = await exec("register", {id, firstname, lastname, email, password:hashedPassword, isAdmin: isAdminState});
    

    return res.status(200).json({ message: "You have succesfully registered" });
  } catch (error) {
    return res.status(400).json({ error: "Invalid details" });
  }
};

module.exports = register;
