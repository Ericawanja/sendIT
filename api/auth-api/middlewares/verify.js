const jwt = require("jsonwebtoken")
require("dotenv").config()

const verify = async (req,res, next)=>{
    try{
    const bearer = req.headers["authorization"];
  
    if(!bearer){
        return res.status(401).json({status:"failed", message:"Log in first"})
    }

    const token = bearer.split(" ")[1]
    const decodedData = await jwt.verify(token, process.env.SECRET) 
 
    req.info = decodedData
   
    next()
    }catch(error){
        return res.status(401).json({ message: error.message });
    }
}
module.exports = verify