const cors = require("cors")
const express = require("express")
const parcelRouter = require("./routers")
const userRouter = require("./routers/userProfile")
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', parcelRouter)
app.use('/profile', userRouter)

app.listen(4000, ()=>console.log('parcel server  running'))
