const express = require('express')
const routes = express.Router()
const homeController = require('../controllers/home')


routes.get('/', homeController.getIndex)

module.exports = routes