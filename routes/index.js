const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController')
const ProductService = require('../services/ProductService')
const ProductsInstance = new ProductController(new ProductService())



router.get('/products', (req, res) => {
  ProductsInstance.getProducts(req, res);
});

router.get('/products/freeshipping', (req, res) => {
  ProductsInstance.freeShippingProducts(req, res);
});

router.post('/products', (req, res) => {
  ProductsInstance.save(req, res);
});

router.get('/products/:id', (req, res) => {
  ProductsInstance.getProductsById(req, res);
});

router.put('/products/:id', (req, res) => {
  ProductsInstance.update(req, res);
});


module.exports = router;
