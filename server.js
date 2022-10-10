const  express = require('express')
const  app = express()
const  dotenv = require('dotenv')


dotenv.config({path: './config/.env'});

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(process.env.PORT, () => console.log(`It is alive on port ${process.env.PORT}`))