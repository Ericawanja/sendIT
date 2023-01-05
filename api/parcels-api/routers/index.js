const express = require("express");
const { getAllParcels, getOneParcel, getCustomerParcels, getUserParticularParcel } = require("../controllers/parcelControllers");
const router = express.Router()

router.get('/', getAllParcels)
router.get('/:orderId', getOneParcel)
router.get('/users/:userId/parcels', getCustomerParcels)
router.get('/users/:userId/parcels/:state', getUserParticularParcel)


module.exports= router;