var express = require('express');
var router = express.Router();


const SaleController = require('../controllers/SaleController')
const SaleService = require('../services/SaleService')
const SaleInstance = new SaleController(new SaleService())


router.get('/sales', (req, res) => {
    SaleInstance.getUsers(req, res);
});

router.post('/sales', (req, res) => {
    SaleInstance.save(req, res);
});

router.get('/sales/:users', (req, res) => {
    SaleInstance.getSalesByUser(req, res);
});

router.get('/sales/:id', (req, res) => {
    SaleInstance.getSalesById(req, res);
});

router.get('/sales/top', (req, res) => {
    ProductsInstance.mostSell(req, res);
});

module.exports = router;
