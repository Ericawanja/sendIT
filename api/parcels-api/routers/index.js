const express = require("express");
const verify = require("../middlewares/verify");
const router = express.Router()

const { getAllParcels, getOneParcel} = require("../controllers/parcelControllers");
const { createParcel, updateParcel, getCustomerParcels, getUserParticularParcel, cancelParcel } = require("../controllers/adminControllers");

router.get('/', verify, getAllParcels)
router.get('/:orderId', verify, getOneParcel)
router.get('/users/:userId/parcels',  verify, getCustomerParcels)
router.get('/users/:userId/parcels/:state',verify, getUserParticularParcel)

router.post('/',verify, createParcel)

router.put('/:orderId',verify, updateParcel)
router.delete('/:orderId',verify, cancelParcel)




module.exports= router;