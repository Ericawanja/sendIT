const express = require('express')
const user = require('./routers')
const app = express()
app.use(express.json());
app.get('/', (req,res)=>{
    return res.status(400).json({message: "server running"})
})
app.use('/', user)


app.listen(5000, ()=>console.log('server running'))