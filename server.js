const  express = require('express')
const  app = express()
const  dotenv = require('dotenv')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const mainRoutes = require('./routes/home')

dotenv.config({path: './config/.env'});

connectDB()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', mainRoutes)


app.listen(process.env.PORT, () => console.log(`It is alive on port ${process.env.PORT}`))