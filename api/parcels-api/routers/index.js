const express = require("express");
const verify = require("../middlewares/verify");
const { getAllParcels, getOneParcel, getCustomerParcels, getUserParticularParcel } = require("../controllers/parcelControllers");
const { createParcel } = require("../controllers/adminControllers");
const router = express.Router()



router.get('/', verify, getAllParcels)
router.get('/:orderId', verify, getOneParcel)
router.get('/users/:userId/parcels',  verify, getCustomerParcels)
router.get('/users/:userId/parcels/:state',verify, getUserParticularParcel)

router.post('/',verify, createParcel)


module.exports= router;