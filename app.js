const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const studentRoute = require('./routes/route')
require('dotenv/config')

//database connection
mongoose.connect(process.env.DB,{useNewUrlParser:true},()=>{
    console.log('Database connected successfully')
})

//pass the body-parser
app.use(bodyParser.json())


app.use('/search',studentRoute)


const PORT = process.env.PORT || 7000
app.listen(PORT,()=>{
    console.log(`server started from port no : ${PORT}`)
})