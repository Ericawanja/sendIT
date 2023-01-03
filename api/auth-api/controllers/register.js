const mssql = require("mssql");
const sqlConfig = require("../helpers/Config");

const register = async (req, res) => {
 
    const pool = await mssql.connect(sqlConfig);
    try {
    pool
      .request()
      .input("id", "user2")
      .input("firstname", "erica")
      .input("lastname", "wanja")
      .input("email", "erica@gmail.com")
      .input("password", "123456")
      .execute("register");

 return   res.status(200).json({ message: "user registered" });
  } catch (error) {
  return  res.status(400).json({error})
  }
};

module.exports = register;
