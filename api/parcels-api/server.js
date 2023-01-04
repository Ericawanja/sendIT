const express = require("express")
const parcelRouter = require("./routers")
const app = express()

app.use(express.json())
app.use('/', parcelRouter)

app.listen(4000, ()=>console.log('parcel server  running'))
