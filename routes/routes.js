const express = require('express')
const res = require('express/lib/response');
const routes = express.Router();

const productController = require('../controllers/product/product');
const formController = require('../controllers/form/form')

routes.get('/', productController.mainProduct);
routes.get('/product-api', productController.findAll);
routes.get('/products', productController.product);
routes.get('/', productController.detailProduct);

//form
routes.get('/form', (req,res)=>{
    res.render('form/form')
});
routes.post('form/post', (req, res)=>{
    res.render('form/form')
})

module.exports = routes;