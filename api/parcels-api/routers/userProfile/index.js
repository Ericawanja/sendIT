const express = require("express");
const { getAllYourParcels, getParcelsSent, getParcelsReceived } = require("../../controllers/userControllers");
const verify = require("../../middlewares/verify");

const router = express.Router()


router.get('/parcels',verify, getAllYourParcels)
router.get('/parcels/sent', verify, getParcelsSent)
router.get('/parcels/received',verify, getParcelsReceived)

module.exports = router