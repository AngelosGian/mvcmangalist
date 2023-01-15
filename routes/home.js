const express = require('express')
const routes = express.Router()
const homeController = require('../controllers/home')


routes.get('/', homeController.getIndex)
routes.get('/form',homeController.getForm)

module.exports = routes