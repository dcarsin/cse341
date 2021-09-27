const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();
const products = [];

//  /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        products: products
    });
});

//  /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ 
        title: req.body.title, 
        price: req.body.price, 
        description: req.body.description, 
        picture: req.body.picture,
        raiting: req.body.raiting });
    console.log(products);
    res.redirect('/');
});


exports.routes = router;
exports.products = products;