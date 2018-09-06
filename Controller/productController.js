var { product } = require('../Model/models');

let getProductInfo = (req, res) => {
    product.find({}, (err, data) => {
        if (err) {
            console.log('Error while loading product info, error : ', err);
            res.send('Error while loading product info')
        }
        else {
            res.send({
                products: data
            })
        }
    })
}
let addNewProduct = (req, res) => {
    const {
        product_name,
        product_logo,
        client_name,
        flag,
        type_of_work,
        industry,
        discover,
        define,
        design_Development,
        images
    } = req.body;

    const newProduct = new product({
        product_name,
        product_logo,
        client_name,
        flag,
        type_of_work,
        industry,
        discover,
        define,
        design_Development,
        images
    });

    newProduct.save(error => {
        if (error)
            console.error(error)
        res.send('New product successfully added')
    })
}
module.exports = {
    getProductInfo,
    addNewProduct
}