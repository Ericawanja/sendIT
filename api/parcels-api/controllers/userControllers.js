const { exec } = require("../helpers/db_connect");

const getAllYourParcels = async (req, res) => {
  const  user  = req.info;
 
  try {
    const parcels = await exec("getCustomerParcels", { customerId: user.id });
    if (parcels.length === 0)
      return res.status(404).json({ message: "No parcels found" });
    res.status(200).json({ parcels });
  } catch (error) {
   
    res.status(400).json({ error });
  }
};

const getParcelsSent = async (req, res) => {};

const getParcelsReceived = async (req, res) => {};

module.exports = {
    getAllYourParcels,
    getParcelsSent,
    getParcelsReceived
}
