const { exec } = require("../helpers/db_connect");

const getAllParcels = async (req, res) => {
  try {
    const parcels = await exec("getAllParcels");
    if (parcels.length === 0)
      return res.status(404).json({ message: "No parcels found" });
    res.status(200).json({ parcels });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getOneParcel = async (req, res) => {
  const { orderId } = req.params;

  try {
    const parcels = await exec("getOneParcel", { orderId });
    if (parcels.length === 0)
      return res.status(404).json({ message: "No parcel found" });
    res.status(200).json({ parcels });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getCustomerParcels = async (req, res) => {
  const { userId } = req.params;

  try {
    const parcels = await exec("getCustomerParcels", { customerId: userId });
    if (parcels.length === 0)
      return res.status(404).json({ message: "No parcels found" });
    res.status(200).json({ parcels });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getUserParticularParcel = async (req, res) => {
  const { state, userId } = req.params;
  try {
    const parcels = await exec("getCustomerParticularParcel", {
      state,
      customerId: userId,
    });
    if (parcels.length === 0)
      return res.status(404).json({ message: "No parcel found" });
    res.status(200).json({ parcels });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  getAllParcels,
  getOneParcel,
  getCustomerParcels,
  getUserParticularParcel,
};
