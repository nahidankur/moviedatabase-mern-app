const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
require('./config/db')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', require('./routes/movieApi'))





const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is under the port ${PORT}`)
})