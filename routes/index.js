const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController')
const ProductService = require('../services/ProductService')
const ProductsInstance = new ProductController(new ProductService())

const UserController = require('../controllers/UserController')
const UserService = require('../services/UserService')
const UserInstance = new UserController(new UserService())
const bcrypt = require('bcrypt-nodejs')

router.post('/users', (req, res) => {
  UserInstance.addUser(req, res)
})

router.get('/sales/top', (req, res) => {
  ProductsInstance.mostSell(req, res);
});

router.get('/products', (req, res) => {
  ProductsInstance.getProducts(req, res);
});

router.get('/products/relacionados/:category', (req, res) => {
  ProductsInstance.productRelated(req, res);
});

router.get('/products/freeshipping', (req, res) => {
  ProductsInstance.freeShippingProducts(req, res);
});

router.post('/products', (req, res) => {
  ProductsInstance.addNewProduct(req, res);
});

router.get('/products/:id', (req, res) => {
  ProductsInstance.getProductsById(req, res);
});

router.put('/products/:id', (req, res) => {
  ProductsInstance.addDiscount(req, res);
});


module.exports = router;
