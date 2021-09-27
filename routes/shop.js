const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/', 
        activeShop: true,
        productCSS: true
    });
});

router.post('/removeItem', (req, res, next) => {
    const remTitle= req.body.remove;
    const products = adminData.products;
    console.log("a remover: ",remTitle);
    console.log(products);
    // Splice method removes from a const array
    for (let i = 0; i < products.length; i++) {
        if (products[i].title == remTitle) {
            products.splice(i, 1);
            break;
        }
    }
    res.redirect('/');
});

module.exports = router;

