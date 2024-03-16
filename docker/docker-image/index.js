const express = require("express")
require('dotenv').config()

const app = express()


app.get("/",(req,res)=>{
    res.send("Hey I am up")
})


const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})