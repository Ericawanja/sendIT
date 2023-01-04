const express = require("express");
const { getAllParcels } = require("../controllers/parcelControllers");
const router = express.Router()

router.get('/', getAllParcels)

module.exports= router;