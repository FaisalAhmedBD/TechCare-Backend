var mongoose = require("mongoose");
var { database } = require('../../configDatabase/index');
var { productSchema } = require('./schema');
var productModel = mongoose.model('product', productSchema);

module.exports = {
    productModel
}
