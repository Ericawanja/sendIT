const shortid = require("shortid");
const { exec } = require("../helpers/db_connect");

const createParcel = async (req, res) => {
  const loggedUser = req.info;
  if (!loggedUser.isAdmin)
    return res
      .status(401)
      .json({ message: "You do not have the priviledge to create a delivery" });

  try {
    const parcel = req.body;
    const orderId = shortid.generate();

    await exec("createOrUpdateParcel", { orderId, ...parcel });

    return res
      .status(200)
      .json({ message: `You have successfully created the parcel` });
  } catch (error) {
    res.status(400).json({ error: error.originalError.info.message });
  }
};

const updateParcel = async (req, res) => {
  const loggedUser = req.info;
  if (!loggedUser.isAdmin)
    return res
      .status(401)
      .json({ message: "You do not have the priviledge to create a delivery" });

  try {
    const parcel = req.body;
    const { orderId } = req.params;
    const parcelInDB = await exec("getOneParcel", { orderId });

    if (parcelInDB.length === 0)
      return res.status(404).json({ message: "The parcel does not exist" });

    await exec("createOrUpdateParcel", { orderId,...parcel });

    return res
      .status(200)
      .json({ message: "You have successfully created the parcel" });
  } catch (error) {
    res.status(400).json({ error: error.originalError.info.message });
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
  createParcel,
  updateParcel,
  getCustomerParcels,
  getUserParticularParcel,
};
