const res = require("express/lib/response")

const mainProduct = (req, res) => {
    res.render('index', {judul:'index'})
}

const detailProduct = (req, res) => {
    res.send({
        statusCode : 200,
        result:{
            nama : "ima"
        }
    })
}

exports.findAll = (req, res) => {
    let dataProduct = [];
    for (let i = 0; i<10; i++){
        dataProduct[i] = {
            title: `Product Title ${i}`,
            price: 1000 + (1*500)
        }
    }
    res.send(dataProduct);
}

const product = (req, res) => {
    let dataProduct = [];
    for (let i = 0; i<10; i++){
        dataProduct[i] = {
            title: `Product Title ${i}`,
            price: 1000 + (1*500)
        }
    }
    res.render('product', {dataProduct:dataProduct})

}

exports.product = product;
exports.mainProduct = mainProduct;
exports.detailProduct = detailProduct;