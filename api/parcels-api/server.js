const express = require("express")
const parcelRouter = require("./routers")
const userRouter = require("./routers/userProfile")
const app = express()

app.use(express.json())
app.use('/', parcelRouter)
app.use('/profile', userRouter)

app.listen(4000, ()=>console.log('parcel server  running'))
