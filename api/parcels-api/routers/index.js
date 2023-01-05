const express = require("express");
const verify = require("../../auth-api/middlewares/verify");
const { getAllParcels, getOneParcel, getCustomerParcels, getUserParticularParcel } = require("../controllers/parcelControllers");
const router = express.Router()



router.get('/', verify, getAllParcels)
router.get('/:orderId', verify, getOneParcel)
router.get('/users/:userId/parcels',  verify, getCustomerParcels)
router.get('/users/:userId/parcels/:state',verify, getUserParticularParcel)


module.exports= router;