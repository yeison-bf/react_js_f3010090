const express = require('express')
const route = express.Router()
const productController = require('../controllers/products.controller')

route.get('/',productController.getProducts)
route.get('product/:id',productController.getOneProducts)
route.post('/',productController.postProducts)
route.put('/:id',productController.putProducts)
route.delete('/:id',productController.deleteProducts)

module.exports = route