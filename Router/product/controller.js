var { productModel } = require('./model');

let getProducts = (req, res) => {
    return  productModel
        .find({})
        .then(data => {
            res.send({
                products: data
            })
        })
        .catch(error => {
            console.error(error);
            res.send('error while loading products, error : ', error);
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
        if (error) {
            console.error(error);
            res.send('error while saving product in database');
        }
        res.send('new product successfully added')
    })

}
module.exports = {
    getProducts,
    addNewProduct
}