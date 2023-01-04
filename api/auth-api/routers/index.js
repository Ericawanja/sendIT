const express = require('express')
const router = express.Router()
const validator = require("../middlewares/validator")

const register = require('../controllers/register')
const login = require('../controllers/login')
const { registerSchema, loginSchema } = require('../schemas/index,')



router.post("/register",validator(registerSchema), register)
router.post("/login",validator(loginSchema), login)

module.exports = router