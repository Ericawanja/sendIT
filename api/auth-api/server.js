const express = require('express')
const cors  = require('cors')

const user = require('./routers')
const app = express()
app.use(cors())
app.use(express.json());
app.get('/', (req,res)=>{
    return res.status(400).json({message: "server running"})
})
app.use('/', user)


app.listen(5000, ()=>console.log('server running'))