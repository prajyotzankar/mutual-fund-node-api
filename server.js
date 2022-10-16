const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI

app.use(cors())
app.use(express.json())

// route
app.use('/', require('./routes/home'))
app.use('/search', require('./routes/search'))
app.use('/manageData', require('./routes/dataManagement'))

// function to connect to Atlas db
const connectDB = (uri) => {
  // return mongoose.connect(uri, { dbName: "MutualFund" });
  return mongoose.connect(uri)
}

// sever stater function
const startServer = async () => {
  try {
    await connectDB(uri)
    app.listen(port, () => {
      console.log(`Server is running on port : ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

startServer()
