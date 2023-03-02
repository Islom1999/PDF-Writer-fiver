const express = require('express')
const {engine} = require('express-handlebars')
const path = require('path')

// const connectDB = require('./config/connect')
// connectDB()

//env config
require('dotenv').config()
// Database Connect

const server = express()

// JSON init
server.use(express.json())
server.use(express.urlencoded({extended: false}))

// HBS init
server.engine('.hbs', engine({extname: '.hbs'}))
server.set('view engine', '.hbs')  

// Public folder static init
server.use(express.static(path.join(path.dirname(__filename), 'public')))

// Routers add
server.use('/', require('./router/route'))

const PORT = process.env.PORT || 5000

// require('./utils/UtilsPDFWrite').writePDF({}, 'docs1.html', 'docs1.pdf')

server.listen(PORT, () => {
    console.log(`Server run: ${PORT}`) 
})
